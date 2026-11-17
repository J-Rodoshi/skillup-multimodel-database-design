// Individual MongoDB query contribution from the SkillUp coursework.
// The queries assume the document shapes described in the repository README.


/* ------------------------------------------------------------
Organization updates syllabus chapter title
------------------------------------------------------------ */
// Insert new syllabus chapter
db.courses.updateOne(
  { _id: 1 },   // replace with your course_id
  {
    $push: {
      syllabus: {
        chapter_id: 1,
        title: "Neural Networks",
        description: "",
        chapter_order: 1,
        items: []
      }
    }
  }
);

// Update chapter title
db.courses.updateOne(
  {
    _id: 1,
    "syllabus.title": "Neural Networks"
  },
  {
    $set: {
      "syllabus.$.title": "Advanced Neural Networks"
    }
  }
);

/* ------------------------------------------------------------
Learner drops course
------------------------------------------------------------ */
db.users.updateOne(
  { "enrollments.enrollment_id": 1 },   // replace with actual enrollment_id
  {
    $set: {
      "enrollments.$.status": "Dropped"
    }
  }
);

/* ------------------------------------------------------------
Remove inactive course
------------------------------------------------------------ */
// Step 1: get all enrolled course ids from embedded enrollments
const enrolledCourseIds = db.users.distinct("enrollments.course_id");

// Step 2: delete courses created before 2020 that are not enrolled in
db.courses.deleteMany({
  created_at: { $lt: "2020-01-01" },
  _id: { $nin: enrolledCourseIds }
});


/* ------------------------------------------------------------
Popular courses (>100 enrollments)
------------------------------------------------------------ */
db.users.aggregate([
  { $unwind: "$enrollments" },
  {
    $group: {
      _id: "$enrollments.course_id",
      cnt: { $sum: 1 }
    }
  },
  { $match: { cnt: { $gt: 100 } } },
  {
    $lookup: {
      from: "courses",
      localField: "_id",
      foreignField: "_id",
      as: "course"
    }
  },
  { $unwind: "$course" },
  {
    $project: {
      _id: 0,
      course_id: "$course._id",
      title: "$course.title",
      cnt: 1
    }
  }
]);

/* ------------------------------------------------------------
Courses in Thai language
------------------------------------------------------------ */
db.courses.find(
  { "languages.name": "Thai" },
  { _id: 0, title: 1 }
);

/* ------------------------------------------------------------
Certificates issued last month
------------------------------------------------------------ */
db.users.aggregate([
  { $unwind: "$enrollments" },
  {
    $match: {
      "enrollments.certificate.issued_at": {
        $gte: new Date(new Date().setMonth(new Date().getMonth() - 1))
      }
    }
  },
  {
    $project: {
      _id: 0,
      learner_id: "$_id",
      certificate: "$enrollments.certificate"
    }
  }
]);

/* ------------------------------------------------------------
Month with highest registrations
------------------------------------------------------------ */
db.users.aggregate([
  {
    $group: {
      _id: {
        $dateToString: {
          format: "%Y-%m",
          date: "$account_created"
        }
      },
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } },
  { $limit: 1 },
  {
    $project: {
      _id: 0,
      month: "$_id",
      total: 1
    }
  }
]);

/* ------------------------------------------------------------
Churn analysis – Data Science never completed
------------------------------------------------------------ */
db.users.aggregate([
  { $match: { learner_profile: { $exists: true } } },
  { $unwind: "$enrollments" },
  {
    $lookup: {
      from: "courses",
      localField: "enrollments.course_id",
      foreignField: "_id",
      as: "course"
    }
  },
  { $unwind: "$course" },
  { $match: { "course.categories.category_id": 1 } },
  {
    $group: {
      _id: "$_id",
      has_completed: {
        $max: {
          $cond: [
            { $eq: ["$enrollments.status", "Completed"] },
            1,
            0
          ]
        }
      }
    }
  },
  { $match: { has_completed: 0 } },
  {
    $project: {
      _id: 0,
      learner_id: "$_id"
    }
  }
]);

/* ------------------------------------------------------------
Top rated instructors (only those who teach something)
------------------------------------------------------------ */
db.users.aggregate([
  { $match: { roles: "instructor" } },
  {
    $lookup: {
      from: "courses",
      let: { instructor_id: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $or: [
                { $eq: ["$primary_instructor_id", "$$instructor_id"] },
                { $in: ["$$instructor_id", { $ifNull: ["$instructors.instructor_id", []] }] }
              ]
            }
          }
        }
      ],
      as: "taught_courses"
    }
  },
  { $match: { "taught_courses.0": { $exists: true } } },
  {
    $lookup: {
      from: "users",
      let: { course_ids: "$taught_courses._id" },
      pipeline: [
        { $unwind: "$enrollments" },
        { $match: { $expr: { $in: ["$enrollments.course_id", "$$course_ids"] } } }
      ],
      as: "student_docs"
    }
  },
  {
    $lookup: {
      from: "reviews",
      localField: "_id",
      foreignField: "instructor_id",
      as: "instructor_reviews"
    }
  },
  {
    $project: {
      _id: 0,
      instructor_id: "$_id",
      instructor_name: { $concat: ["$first_name", " ", "$last_name"] },
      courses_taught: { $size: "$taught_courses" },
      student_enrollments: { $size: "$student_docs" },
      avg_instructor_rating: { $round: [{ $avg: "$instructor_reviews.instructor_rating" }, 2] },
      review_count: { $size: "$instructor_reviews" }
    }
  },
  { $sort: { avg_instructor_rating: -1, review_count: -1 } },
  { $limit: 20 }
]);

/* ------------------------------------------------------------
Top 10 courses by average rating (min 3 reviews)
------------------------------------------------------------ */
db.courses.aggregate([
  {
    $lookup: {
      from: "reviews",
      let: { course_id: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$course_id", "$$course_id"] },
            course_rating: { $exists: true, $type: "number" }
          }
        }
      ],
      as: "course_reviews"
    }
  },
  {
    $project: {
      _id: 0,
      course_id: "$_id",
      title: "$title",
      avg_rating: { $round: [{ $avg: "$course_reviews.course_rating" }, 2] },
      review_count: { $size: "$course_reviews" }
    }
  },
  { $match: { review_count: { $gte: 3 } } },
  { $sort: { avg_rating: -1, review_count: -1 } },
  { $limit: 10 }
]);
