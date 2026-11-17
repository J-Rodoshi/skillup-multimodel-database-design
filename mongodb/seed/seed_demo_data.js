// SAFETY: this coursework seed script drops three collections before re-inserting data.
// It is restricted to the disposable `skillup_demo` database. Set ALLOW_DESTRUCTIVE_RESET=YES
// in the shell environment only when you intentionally want to reset that demo database.
if (typeof process === "undefined" || process.env.ALLOW_DESTRUCTIVE_RESET !== "YES") {
  throw new Error("Refusing to drop collections. Set ALLOW_DESTRUCTIVE_RESET=YES to confirm a demo reset.");
}

// Run this script using mongosh:
// mongosh <connection-string> create_and_insert_mock_data.js
// Example: mongosh "mongodb://localhost:27017" create_and_insert_mock_data.js

// Connect to the target database
const dbName = 'skillup_demo';
db = db.getSiblingDB(dbName);

print(`Connected to database: ${dbName}`);

// Drop collections if they already exist to start fresh
db.users.drop();
db.courses.drop();
db.reviews.drop();
print("Dropped existing collections to start fresh.");

// Create collections
db.createCollection('users');
db.createCollection('courses');
db.createCollection('reviews');
print("Created collections: 'users', 'courses', 'reviews'.");

// Mock Data
print("Loading mock data variables...");

const usersData = [
  {
    "_id": 1,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0001@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-05 00:40:47",
    "last_online": "2024-06-28 01:54:31",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 1,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 2,
        "course_id": 21,
        "status": "active",
        "enrolled_at": "2025-04-22 14:50:37",
        "last_accessed_at": "2025-10-30 11:39:13",
        "checkpoint_chapter_id": 81,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 1,
        "course_id": 36,
        "status": "completed",
        "enrolled_at": "2026-01-27 22:55:21",
        "last_accessed_at": "2026-01-29 14:24:40",
        "checkpoint_chapter_id": 139,
        "certificate": {
          "certificate_id": 1,
          "issued_at": "2026-05-07 22:55:21",
          "certificate_code": "CERT-9CIGNOTA",
          "certificate_url": "https://skillup.io/certificates/CERT-9CIGNOTA"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 2,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0002@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-18 13:32:13",
    "last_online": "2024-09-03 04:06:15",
    "country": "Australia",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 2,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 3,
        "course_id": 50,
        "status": "active",
        "enrolled_at": "2025-01-28 06:14:26",
        "last_accessed_at": "2025-12-11 12:47:31",
        "checkpoint_chapter_id": 196,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 4,
        "course_id": 7,
        "status": "active",
        "enrolled_at": "2025-12-17 15:31:23",
        "last_accessed_at": "2026-01-03 05:13:24",
        "checkpoint_chapter_id": 27,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 3,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0003@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-20 13:08:04",
    "last_online": "2025-01-06 18:00:56",
    "country": "India",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 3,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 5,
        "course_id": 24,
        "status": "completed",
        "enrolled_at": "2024-02-20 12:25:03",
        "last_accessed_at": "2025-04-07 01:53:47",
        "checkpoint_chapter_id": 95,
        "certificate": {
          "certificate_id": 2,
          "issued_at": "2024-03-23 12:25:03",
          "certificate_code": "CERT-NOIPJBOU",
          "certificate_url": "https://skillup.io/certificates/CERT-NOIPJBOU"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 4,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0004@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-19 09:08:02",
    "last_online": "2023-08-12 12:46:04",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 4,
      "introduction": "Diane Ruiz is an accomplished instructor specializing in Data Analysis and Project Management, bringing a wealth of practical knowledge from her background as a UX Designer. With expertise in translating complex data into actionable insights and managing cross-functional teams, she combines technical proficiency with user-centered thinking to deliver engaging and impactful instruction. Diane is dedicated to empowering students with the skills necessary to drive data-informed decision-making and lead successful projects in today's dynamic business environment.",
      "started_date": "2023-02-12",
      "last_online": "2025-12-01 07:11:46",
      "degree": "Ph.D. in Computer Science",
      "institution": "UC Berkeley",
      "certification": "PHR"
    },
    "enrollments": []
  },
  {
    "_id": 5,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0005@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-14 17:02:30",
    "last_online": "2024-04-09 07:37:27",
    "country": "United Kingdom",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 5,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 6,
        "course_id": 44,
        "status": "dropped",
        "enrolled_at": "2025-08-31 16:54:35",
        "last_accessed_at": "2026-01-04 04:11:07",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 7,
        "course_id": 20,
        "status": "completed",
        "enrolled_at": "2025-09-20 18:54:03",
        "last_accessed_at": "2026-01-12 05:26:23",
        "checkpoint_chapter_id": 80,
        "certificate": {
          "certificate_id": 3,
          "issued_at": "2025-11-24 18:54:03",
          "certificate_code": "CERT-M17KOPIH",
          "certificate_url": "https://skillup.io/certificates/CERT-M17KOPIH"
        },
        "review_id": 1
      }
    ]
  },
  {
    "_id": 6,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0006@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-20 12:08:20",
    "last_online": "2023-07-26 16:36:24",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 6,
      "introduction": "Jack Romero is an instructor specializing in Data Analysis and Communication, bringing a unique perspective informed by his extensive background in UX design. With a deep understanding of how to translate complex data insights into compelling narratives, Jack equips students with both the analytical and communication skills essential for success in today's data-driven world. His practical experience in user-centered design enables him to create engaging learning experiences that bridge the gap between technical analysis and effective stakeholder communication.",
      "started_date": "2023-02-16",
      "last_online": "2024-12-21 10:11:32",
      "degree": "M.S. in Information Systems",
      "institution": "Northwestern University",
      "certification": "CSM"
    },
    "enrollments": []
  },
  {
    "_id": 7,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0007@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-30 06:41:43",
    "last_online": "2024-03-03 06:33:31",
    "country": "United Kingdom",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 7,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 8,
        "course_id": 46,
        "status": "active",
        "enrolled_at": "2025-11-10 01:56:18",
        "last_accessed_at": "2025-11-23 15:39:12",
        "checkpoint_chapter_id": 183,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 8,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0008@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-30 12:00:26",
    "last_online": "2023-08-08 01:48:33",
    "country": "Canada",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 8,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 9,
        "course_id": 24,
        "status": "completed",
        "enrolled_at": "2025-02-16 05:14:15",
        "last_accessed_at": "2025-11-07 10:42:25",
        "checkpoint_chapter_id": 95,
        "certificate": {
          "certificate_id": 4,
          "issued_at": "2025-03-26 05:14:15",
          "certificate_code": "CERT-KPZMVIRK",
          "certificate_url": "https://skillup.io/certificates/CERT-KPZMVIRK"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 9,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0009@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-05 17:14:43",
    "last_online": "2023-08-01 04:07:04",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 9,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 10,
        "course_id": 6,
        "status": "dropped",
        "enrolled_at": "2025-03-06 07:03:39",
        "last_accessed_at": "2025-04-10 18:37:07",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 11,
        "course_id": 16,
        "status": "active",
        "enrolled_at": "2026-01-05 18:26:15",
        "last_accessed_at": "2026-01-14 07:57:55",
        "checkpoint_chapter_id": 64,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 10,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0010@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-19 02:43:41",
    "last_online": "2024-04-24 08:59:53",
    "country": "Canada",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 10,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 12,
        "course_id": 14,
        "status": "completed",
        "enrolled_at": "2025-12-15 00:52:24",
        "last_accessed_at": "2026-01-23 18:25:48",
        "checkpoint_chapter_id": 57,
        "certificate": {
          "certificate_id": 5,
          "issued_at": "2026-02-19 00:52:24",
          "certificate_code": "CERT-ZLHET42G",
          "certificate_url": "https://skillup.io/certificates/CERT-ZLHET42G"
        },
        "review_id": null
      },
      {
        "enrollment_id": 13,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2026-01-07 09:53:59",
        "last_accessed_at": "2026-01-25 15:57:36",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 6,
          "issued_at": "2026-03-17 09:53:59",
          "certificate_code": "CERT-9X503D5B",
          "certificate_url": "https://skillup.io/certificates/CERT-9X503D5B"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 11,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0011@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-08 21:18:23",
    "last_online": "2023-04-09 15:13:56",
    "country": "India",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 11,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 14,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2026-01-04 11:56:23",
        "last_accessed_at": "2026-01-25 15:24:39",
        "checkpoint_chapter_id": 124,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 12,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0012@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-29 08:33:28",
    "last_online": "2024-10-29 10:10:33",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 12,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 16,
        "course_id": 14,
        "status": "active",
        "enrolled_at": "2024-02-18 08:29:20",
        "last_accessed_at": "2024-07-14 12:31:55",
        "checkpoint_chapter_id": 55,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 15,
        "course_id": 37,
        "status": "active",
        "enrolled_at": "2025-12-07 04:21:29",
        "last_accessed_at": "2025-12-24 22:15:59",
        "checkpoint_chapter_id": 140,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 13,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0013@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-19 03:25:48",
    "last_online": "2024-07-17 05:12:19",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 13,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 18,
        "course_id": 44,
        "status": "completed",
        "enrolled_at": "2025-10-26 03:52:26",
        "last_accessed_at": "2025-10-30 10:13:02",
        "checkpoint_chapter_id": 175,
        "certificate": {
          "certificate_id": 7,
          "issued_at": "2026-02-14 03:52:26",
          "certificate_code": "CERT-G8SRY50J",
          "certificate_url": "https://skillup.io/certificates/CERT-G8SRY50J"
        },
        "review_id": null
      },
      {
        "enrollment_id": 17,
        "course_id": 22,
        "status": "active",
        "enrolled_at": "2025-12-17 11:10:37",
        "last_accessed_at": "2026-01-11 19:19:04",
        "checkpoint_chapter_id": 86,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 14,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0014@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-27 18:07:59",
    "last_online": "2024-10-23 13:43:26",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 14,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 20,
        "course_id": 29,
        "status": "active",
        "enrolled_at": "2025-06-26 01:00:15",
        "last_accessed_at": "2025-09-24 06:12:21",
        "checkpoint_chapter_id": 114,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 19,
        "course_id": 42,
        "status": "active",
        "enrolled_at": "2026-01-23 04:19:34",
        "last_accessed_at": "2026-01-24 18:39:24",
        "checkpoint_chapter_id": 164,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 15,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0015@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-31 09:07:14",
    "last_online": "2024-05-30 08:58:13",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 15,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 21,
        "course_id": 18,
        "status": "completed",
        "enrolled_at": "2025-08-02 18:03:01",
        "last_accessed_at": "2025-11-26 10:20:47",
        "checkpoint_chapter_id": 73,
        "certificate": {
          "certificate_id": 8,
          "issued_at": "2025-09-21 18:03:01",
          "certificate_code": "CERT-DHEX1C99",
          "certificate_url": "https://skillup.io/certificates/CERT-DHEX1C99"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 16,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0016@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-23 23:40:39",
    "last_online": "2024-11-06 10:21:40",
    "country": "Australia",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 16,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 22,
        "course_id": 31,
        "status": "dropped",
        "enrolled_at": "2024-09-09 05:44:44",
        "last_accessed_at": "2025-05-03 23:32:35",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 17,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0017@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-05 22:54:25",
    "last_online": "2024-06-19 10:56:48",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 17,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 23,
        "course_id": 5,
        "status": "completed",
        "enrolled_at": "2024-12-23 23:46:08",
        "last_accessed_at": "2025-04-09 23:52:34",
        "checkpoint_chapter_id": 21,
        "certificate": {
          "certificate_id": 9,
          "issued_at": "2025-02-11 23:46:08",
          "certificate_code": "CERT-PLNHEBWC",
          "certificate_url": "https://skillup.io/certificates/CERT-PLNHEBWC"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 18,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0018@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-01-29 06:53:43",
    "last_online": "2024-09-03 21:55:43",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 18,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 25,
        "course_id": 13,
        "status": "completed",
        "enrolled_at": "2024-11-05 23:09:41",
        "last_accessed_at": "2025-07-22 09:50:49",
        "checkpoint_chapter_id": 53,
        "certificate": {
          "certificate_id": 10,
          "issued_at": "2025-03-03 23:09:41",
          "certificate_code": "CERT-JPBUBU78",
          "certificate_url": "https://skillup.io/certificates/CERT-JPBUBU78"
        },
        "review_id": 2
      },
      {
        "enrollment_id": 24,
        "course_id": 17,
        "status": "dropped",
        "enrolled_at": "2024-11-19 04:09:24",
        "last_accessed_at": "2025-03-19 21:26:26",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 19,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0019@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-03 01:01:35",
    "last_online": "2024-10-21 08:28:17",
    "country": "India",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 19,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 26,
        "course_id": 37,
        "status": "completed",
        "enrolled_at": "2025-02-17 14:13:38",
        "last_accessed_at": "2025-12-08 12:22:32",
        "checkpoint_chapter_id": 144,
        "certificate": {
          "certificate_id": 11,
          "issued_at": "2025-03-28 14:13:38",
          "certificate_code": "CERT-BQ7P0LAA",
          "certificate_url": "https://skillup.io/certificates/CERT-BQ7P0LAA"
        },
        "review_id": 3
      }
    ]
  },
  {
    "_id": 20,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0020@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-22 03:21:28",
    "last_online": "2024-11-01 01:42:23",
    "country": "India",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 20,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 27,
        "course_id": 25,
        "status": "dropped",
        "enrolled_at": "2025-02-09 03:42:34",
        "last_accessed_at": "2025-11-15 15:37:53",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 28,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2026-01-12 21:56:04",
        "last_accessed_at": "2026-01-25 18:34:05",
        "checkpoint_chapter_id": 8,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 21,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0021@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-19 02:28:19",
    "last_online": "2023-05-20 16:38:11",
    "country": "Australia",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 21,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 29,
        "course_id": 4,
        "status": "completed",
        "enrolled_at": "2024-12-31 20:17:25",
        "last_accessed_at": "2025-02-19 09:19:16",
        "checkpoint_chapter_id": 18,
        "certificate": {
          "certificate_id": 12,
          "issued_at": "2025-04-24 20:17:25",
          "certificate_code": "CERT-WYCE5IH4",
          "certificate_url": "https://skillup.io/certificates/CERT-WYCE5IH4"
        },
        "review_id": null
      },
      {
        "enrollment_id": 30,
        "course_id": 36,
        "status": "active",
        "enrolled_at": "2025-07-16 01:50:01",
        "last_accessed_at": "2025-11-20 03:11:34",
        "checkpoint_chapter_id": 138,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 22,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0022@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-14 02:02:48",
    "last_online": "2024-12-05 11:08:59",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 22,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 31,
        "course_id": 8,
        "status": "dropped",
        "enrolled_at": "2025-12-13 20:08:39",
        "last_accessed_at": "2026-01-30 16:56:41",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 23,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0023@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-22 10:04:46",
    "last_online": "2024-06-07 18:50:41",
    "country": "India",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 23,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 32,
        "course_id": 29,
        "status": "completed",
        "enrolled_at": "2025-02-05 18:59:29",
        "last_accessed_at": "2025-08-05 19:01:22",
        "checkpoint_chapter_id": 114,
        "certificate": {
          "certificate_id": 13,
          "issued_at": "2025-05-25 18:59:29",
          "certificate_code": "CERT-5A3AW23L",
          "certificate_url": "https://skillup.io/certificates/CERT-5A3AW23L"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 24,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0024@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-23 13:42:34",
    "last_online": "2024-04-28 18:24:01",
    "country": "India",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 24,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 33,
        "course_id": 10,
        "status": "completed",
        "enrolled_at": "2025-01-05 19:06:31",
        "last_accessed_at": "2025-04-02 12:44:55",
        "checkpoint_chapter_id": 40,
        "certificate": {
          "certificate_id": 14,
          "issued_at": "2025-04-15 19:06:31",
          "certificate_code": "CERT-LXMQC9G3",
          "certificate_url": "https://skillup.io/certificates/CERT-LXMQC9G3"
        },
        "review_id": null
      },
      {
        "enrollment_id": 34,
        "course_id": 29,
        "status": "dropped",
        "enrolled_at": "2025-02-24 22:46:14",
        "last_accessed_at": "2025-03-23 16:00:25",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 25,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0025@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-07 11:53:52",
    "last_online": "2024-07-03 11:47:13",
    "country": "United Kingdom",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 25,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 35,
        "course_id": 33,
        "status": "completed",
        "enrolled_at": "2026-01-05 07:56:56",
        "last_accessed_at": "2026-02-02 09:50:44",
        "checkpoint_chapter_id": 129,
        "certificate": {
          "certificate_id": 15,
          "issued_at": "2026-03-24 07:56:56",
          "certificate_code": "CERT-4Z0SYHSZ",
          "certificate_url": "https://skillup.io/certificates/CERT-4Z0SYHSZ"
        },
        "review_id": null
      },
      {
        "enrollment_id": 36,
        "course_id": 3,
        "status": "dropped",
        "enrolled_at": "2026-01-29 20:54:24",
        "last_accessed_at": "2026-02-01 18:37:04",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 26,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0026@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-06 17:01:45",
    "last_online": "2024-02-20 10:48:46",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 26,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 37,
        "course_id": 19,
        "status": "completed",
        "enrolled_at": "2025-03-19 14:34:22",
        "last_accessed_at": "2025-04-05 02:08:26",
        "checkpoint_chapter_id": 77,
        "certificate": {
          "certificate_id": 16,
          "issued_at": "2025-05-24 14:34:22",
          "certificate_code": "CERT-SKOIQJPF",
          "certificate_url": "https://skillup.io/certificates/CERT-SKOIQJPF"
        },
        "review_id": 4
      }
    ]
  },
  {
    "_id": 27,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0027@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-25 16:39:35",
    "last_online": "2023-12-11 19:02:30",
    "country": "Australia",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 27,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 38,
        "course_id": 28,
        "status": "dropped",
        "enrolled_at": "2025-03-25 17:57:35",
        "last_accessed_at": "2025-06-19 14:22:35",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 39,
        "course_id": 41,
        "status": "completed",
        "enrolled_at": "2025-07-11 19:45:22",
        "last_accessed_at": "2025-08-13 02:40:56",
        "checkpoint_chapter_id": 163,
        "certificate": {
          "certificate_id": 17,
          "issued_at": "2025-09-05 19:45:22",
          "certificate_code": "CERT-JQ5PGP0O",
          "certificate_url": "https://skillup.io/certificates/CERT-JQ5PGP0O"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 28,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0028@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-23 04:20:33",
    "last_online": "2024-05-06 22:48:52",
    "country": "Australia",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 28,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 40,
        "course_id": 49,
        "status": "active",
        "enrolled_at": "2025-11-30 13:31:59",
        "last_accessed_at": "2026-01-24 05:56:44",
        "checkpoint_chapter_id": 192,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 29,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0029@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-01 12:38:48",
    "last_online": "2024-08-04 09:10:44",
    "country": "United Kingdom",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 29,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 42,
        "course_id": 30,
        "status": "active",
        "enrolled_at": "2025-04-23 06:12:28",
        "last_accessed_at": "2025-07-21 00:54:01",
        "checkpoint_chapter_id": 115,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 41,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2025-06-13 15:57:42",
        "last_accessed_at": "2025-06-23 19:02:24",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 18,
          "issued_at": "2025-10-03 15:57:42",
          "certificate_code": "CERT-KXY3T2CR",
          "certificate_url": "https://skillup.io/certificates/CERT-KXY3T2CR"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 30,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0030@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-01 17:31:13",
    "last_online": "2023-03-16 15:06:25",
    "country": "Canada",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 30,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 43,
        "course_id": 28,
        "status": "active",
        "enrolled_at": "2024-12-08 14:10:44",
        "last_accessed_at": "2024-12-11 00:14:28",
        "checkpoint_chapter_id": 108,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 31,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0031@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-01 18:46:26",
    "last_online": "2024-03-01 22:23:17",
    "country": "Canada",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 31,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 44,
        "course_id": 26,
        "status": "dropped",
        "enrolled_at": "2024-06-18 12:36:06",
        "last_accessed_at": "2024-07-29 16:08:07",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 32,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0032@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-02-20 03:26:21",
    "last_online": "2023-04-19 00:56:14",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 32,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 45,
        "course_id": 19,
        "status": "completed",
        "enrolled_at": "2024-09-25 10:59:21",
        "last_accessed_at": "2025-03-07 08:20:57",
        "checkpoint_chapter_id": 77,
        "certificate": {
          "certificate_id": 19,
          "issued_at": "2025-01-11 10:59:21",
          "certificate_code": "CERT-9EDUDUTT",
          "certificate_url": "https://skillup.io/certificates/CERT-9EDUDUTT"
        },
        "review_id": null
      },
      {
        "enrollment_id": 46,
        "course_id": 41,
        "status": "active",
        "enrolled_at": "2025-07-11 19:38:37",
        "last_accessed_at": "2025-07-27 09:57:05",
        "checkpoint_chapter_id": 159,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 33,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0033@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-04 04:21:19",
    "last_online": "2023-05-04 19:49:40",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 33,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 48,
        "course_id": 8,
        "status": "completed",
        "enrolled_at": "2024-11-09 05:13:06",
        "last_accessed_at": "2025-03-01 14:34:27",
        "checkpoint_chapter_id": 32,
        "certificate": {
          "certificate_id": 20,
          "issued_at": "2025-01-09 05:13:06",
          "certificate_code": "CERT-44FZL10L",
          "certificate_url": "https://skillup.io/certificates/CERT-44FZL10L"
        },
        "review_id": null
      },
      {
        "enrollment_id": 47,
        "course_id": 26,
        "status": "active",
        "enrolled_at": "2025-10-27 06:09:33",
        "last_accessed_at": "2025-11-16 22:09:43",
        "checkpoint_chapter_id": 101,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 34,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0034@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-11 22:19:31",
    "last_online": "2023-10-18 08:01:32",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 34,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 50,
        "course_id": 11,
        "status": "dropped",
        "enrolled_at": "2024-02-08 22:13:07",
        "last_accessed_at": "2024-08-02 14:35:15",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 49,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2024-04-02 19:01:17",
        "last_accessed_at": "2024-08-13 06:05:33",
        "checkpoint_chapter_id": 24,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 35,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0035@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-20 13:11:01",
    "last_online": "2023-08-18 17:38:03",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 35,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 51,
        "course_id": 8,
        "status": "completed",
        "enrolled_at": "2023-08-15 05:18:24",
        "last_accessed_at": "2024-08-16 11:47:23",
        "checkpoint_chapter_id": 32,
        "certificate": {
          "certificate_id": 21,
          "issued_at": "2023-11-01 05:18:24",
          "certificate_code": "CERT-FTB4P49U",
          "certificate_url": "https://skillup.io/certificates/CERT-FTB4P49U"
        },
        "review_id": 5
      },
      {
        "enrollment_id": 52,
        "course_id": 27,
        "status": "dropped",
        "enrolled_at": "2025-12-13 03:38:39",
        "last_accessed_at": "2025-12-27 23:55:51",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 36,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0036@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-16 09:35:08",
    "last_online": "2023-08-28 17:27:06",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 36,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 53,
        "course_id": 47,
        "status": "active",
        "enrolled_at": "2024-11-30 22:04:06",
        "last_accessed_at": "2025-06-21 12:42:11",
        "checkpoint_chapter_id": 186,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 54,
        "course_id": 42,
        "status": "dropped",
        "enrolled_at": "2025-03-28 19:20:36",
        "last_accessed_at": "2025-06-13 19:32:43",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 37,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0037@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-02 09:50:10",
    "last_online": "2024-07-23 19:59:04",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 37,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 56,
        "course_id": 27,
        "status": "active",
        "enrolled_at": "2024-05-17 22:33:09",
        "last_accessed_at": "2025-05-26 23:17:47",
        "checkpoint_chapter_id": 107,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 55,
        "course_id": 14,
        "status": "active",
        "enrolled_at": "2024-09-23 06:32:30",
        "last_accessed_at": "2025-09-01 20:18:55",
        "checkpoint_chapter_id": 56,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 38,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0038@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-20 11:16:29",
    "last_online": "2024-06-11 08:24:25",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 38,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 57,
        "course_id": 36,
        "status": "completed",
        "enrolled_at": "2025-01-17 09:22:04",
        "last_accessed_at": "2025-07-03 05:33:11",
        "checkpoint_chapter_id": 139,
        "certificate": {
          "certificate_id": 22,
          "issued_at": "2025-02-25 09:22:04",
          "certificate_code": "CERT-GVPEZZ64",
          "certificate_url": "https://skillup.io/certificates/CERT-GVPEZZ64"
        },
        "review_id": 6
      }
    ]
  },
  {
    "_id": 39,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0039@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-09 18:53:51",
    "last_online": "2023-11-11 01:54:54",
    "country": "United Kingdom",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 39,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 58,
        "course_id": 2,
        "status": "dropped",
        "enrolled_at": "2023-07-14 11:24:46",
        "last_accessed_at": "2024-08-27 04:24:07",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 59,
        "course_id": 6,
        "status": "completed",
        "enrolled_at": "2025-11-26 22:20:20",
        "last_accessed_at": "2026-01-01 15:00:55",
        "checkpoint_chapter_id": 24,
        "certificate": {
          "certificate_id": 23,
          "issued_at": "2026-03-05 22:20:20",
          "certificate_code": "CERT-32TXTUUA",
          "certificate_url": "https://skillup.io/certificates/CERT-32TXTUUA"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 40,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0040@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-16 08:56:49",
    "last_online": "2024-05-10 08:47:41",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 40,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 60,
        "course_id": 45,
        "status": "dropped",
        "enrolled_at": "2025-04-29 19:00:27",
        "last_accessed_at": "2025-07-31 15:53:30",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 61,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2025-08-27 17:15:08",
        "last_accessed_at": "2026-01-03 07:07:23",
        "checkpoint_chapter_id": 125,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 41,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0041@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-30 07:39:23",
    "last_online": "2024-05-23 13:50:16",
    "country": "United States",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 41,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 63,
        "course_id": 42,
        "status": "active",
        "enrolled_at": "2025-02-27 20:49:39",
        "last_accessed_at": "2025-11-25 06:40:23",
        "checkpoint_chapter_id": 164,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 62,
        "course_id": 44,
        "status": "dropped",
        "enrolled_at": "2025-11-27 06:41:10",
        "last_accessed_at": "2025-12-29 15:59:14",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 42,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0042@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-03 14:33:24",
    "last_online": "2023-11-16 05:44:27",
    "country": "United Kingdom",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 42,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 64,
        "course_id": 40,
        "status": "completed",
        "enrolled_at": "2025-04-05 00:13:57",
        "last_accessed_at": "2025-04-30 20:08:03",
        "checkpoint_chapter_id": 158,
        "certificate": {
          "certificate_id": 24,
          "issued_at": "2025-05-16 00:13:57",
          "certificate_code": "CERT-3E1HR5LH",
          "certificate_url": "https://skillup.io/certificates/CERT-3E1HR5LH"
        },
        "review_id": 7
      }
    ]
  },
  {
    "_id": 43,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0043@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-09 04:13:43",
    "last_online": "2023-04-08 06:26:02",
    "country": "India",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 43,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 66,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2023-06-11 05:21:27",
        "last_accessed_at": "2025-05-29 05:59:16",
        "checkpoint_chapter_id": 23,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 65,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2024-04-26 16:19:05",
        "last_accessed_at": "2025-06-15 03:18:01",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 25,
          "issued_at": "2024-08-12 16:19:05",
          "certificate_code": "CERT-8WUGS9FJ",
          "certificate_url": "https://skillup.io/certificates/CERT-8WUGS9FJ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 44,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0044@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-04 10:29:58",
    "last_online": "2023-12-05 00:22:58",
    "country": "United Kingdom",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 44,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 67,
        "course_id": 24,
        "status": "active",
        "enrolled_at": "2024-11-06 13:54:00",
        "last_accessed_at": "2025-03-09 10:13:04",
        "checkpoint_chapter_id": 92,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 45,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0045@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-05 23:58:37",
    "last_online": "2023-07-26 20:19:12",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 45,
      "introduction": "Blake Miller is an accomplished Software Engineering and Data Analysis instructor with a strong educational background in teaching. With a passion for demystifying complex technical concepts, Blake brings expertise and clarity to every classroom, helping students master both programming fundamentals and advanced data analysis techniques. Dedicated to fostering an engaging learning environment, Blake combines real-world industry insights with pedagogical excellence to prepare students for successful careers in technology.",
      "started_date": "2023-04-30",
      "last_online": "2025-11-09 15:07:07",
      "degree": "M.S. in Human-Computer Interaction",
      "institution": "Georgia Tech",
      "certification": "Six Sigma Black Belt"
    },
    "enrollments": []
  },
  {
    "_id": 46,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0046@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-05 23:20:05",
    "last_online": "2024-12-24 22:45:36",
    "country": "Australia",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 46,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 69,
        "course_id": 1,
        "status": "completed",
        "enrolled_at": "2024-03-14 03:39:49",
        "last_accessed_at": "2025-12-09 12:55:34",
        "checkpoint_chapter_id": 4,
        "certificate": {
          "certificate_id": 26,
          "issued_at": "2024-04-16 03:39:49",
          "certificate_code": "CERT-9CYYDO5H",
          "certificate_url": "https://skillup.io/certificates/CERT-9CYYDO5H"
        },
        "review_id": null
      },
      {
        "enrollment_id": 68,
        "course_id": 12,
        "status": "completed",
        "enrolled_at": "2025-02-06 20:16:39",
        "last_accessed_at": "2025-04-03 07:53:30",
        "checkpoint_chapter_id": 49,
        "certificate": {
          "certificate_id": 27,
          "issued_at": "2025-05-12 20:16:39",
          "certificate_code": "CERT-NGR9QSA9",
          "certificate_url": "https://skillup.io/certificates/CERT-NGR9QSA9"
        },
        "review_id": 8
      }
    ]
  },
  {
    "_id": 47,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0047@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-18 06:06:59",
    "last_online": "2025-01-05 01:13:32",
    "country": "United Kingdom",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 47,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 70,
        "course_id": 22,
        "status": "completed",
        "enrolled_at": "2025-06-26 22:29:19",
        "last_accessed_at": "2025-09-03 20:38:36",
        "checkpoint_chapter_id": 87,
        "certificate": {
          "certificate_id": 28,
          "issued_at": "2025-07-30 22:29:19",
          "certificate_code": "CERT-R97A22U7",
          "certificate_url": "https://skillup.io/certificates/CERT-R97A22U7"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 48,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0048@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-13 04:00:33",
    "last_online": "2024-10-30 20:36:45",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 48,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 71,
        "course_id": 41,
        "status": "dropped",
        "enrolled_at": "2026-01-31 09:24:32",
        "last_accessed_at": "2026-02-01 12:51:44",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 49,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0049@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-22 19:03:43",
    "last_online": "2023-11-18 07:17:24",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 49,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 72,
        "course_id": 48,
        "status": "completed",
        "enrolled_at": "2025-05-17 10:51:59",
        "last_accessed_at": "2025-12-28 22:17:52",
        "checkpoint_chapter_id": 191,
        "certificate": {
          "certificate_id": 29,
          "issued_at": "2025-06-17 10:51:59",
          "certificate_code": "CERT-TUNBZR0Z",
          "certificate_url": "https://skillup.io/certificates/CERT-TUNBZR0Z"
        },
        "review_id": 9
      },
      {
        "enrollment_id": 73,
        "course_id": 23,
        "status": "completed",
        "enrolled_at": "2026-01-31 18:56:06",
        "last_accessed_at": "2026-02-02 03:21:53",
        "checkpoint_chapter_id": 90,
        "certificate": {
          "certificate_id": 30,
          "issued_at": "2026-03-09 18:56:06",
          "certificate_code": "CERT-R9DEQWC1",
          "certificate_url": "https://skillup.io/certificates/CERT-R9DEQWC1"
        },
        "review_id": 10
      }
    ]
  },
  {
    "_id": 50,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0050@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-29 18:37:08",
    "last_online": "2024-04-03 03:41:45",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 50,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 74,
        "course_id": 37,
        "status": "dropped",
        "enrolled_at": "2024-10-07 10:05:37",
        "last_accessed_at": "2025-07-14 22:07:50",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 51,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0051@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-22 10:11:17",
    "last_online": "2024-06-22 13:07:51",
    "country": "Canada",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 51,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 75,
        "course_id": 43,
        "status": "dropped",
        "enrolled_at": "2025-03-10 03:45:18",
        "last_accessed_at": "2025-12-25 12:13:47",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 76,
        "course_id": 32,
        "status": "dropped",
        "enrolled_at": "2025-07-28 20:40:32",
        "last_accessed_at": "2025-11-03 14:49:51",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 52,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0052@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-02 14:26:42",
    "last_online": "2024-05-19 13:16:01",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 52,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 78,
        "course_id": 39,
        "status": "completed",
        "enrolled_at": "2025-03-22 23:31:01",
        "last_accessed_at": "2025-12-29 00:07:32",
        "checkpoint_chapter_id": 153,
        "certificate": {
          "certificate_id": 31,
          "issued_at": "2025-07-07 23:31:01",
          "certificate_code": "CERT-MCOZHU5J",
          "certificate_url": "https://skillup.io/certificates/CERT-MCOZHU5J"
        },
        "review_id": null
      },
      {
        "enrollment_id": 77,
        "course_id": 2,
        "status": "completed",
        "enrolled_at": "2025-12-19 03:40:22",
        "last_accessed_at": "2026-01-08 05:30:09",
        "checkpoint_chapter_id": 9,
        "certificate": {
          "certificate_id": 32,
          "issued_at": "2026-02-13 03:40:22",
          "certificate_code": "CERT-RXTXCWUV",
          "certificate_url": "https://skillup.io/certificates/CERT-RXTXCWUV"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 53,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0053@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-12 19:00:11",
    "last_online": "2024-07-05 09:17:27",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 53,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 80,
        "course_id": 23,
        "status": "active",
        "enrolled_at": "2024-02-15 12:53:47",
        "last_accessed_at": "2025-10-25 13:31:35",
        "checkpoint_chapter_id": 88,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 79,
        "course_id": 18,
        "status": "active",
        "enrolled_at": "2026-01-14 10:35:24",
        "last_accessed_at": "2026-01-26 08:12:00",
        "checkpoint_chapter_id": 73,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 54,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0054@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-12 11:28:17",
    "last_online": "2024-07-15 09:43:04",
    "country": "United Kingdom",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 54,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 81,
        "course_id": 9,
        "status": "active",
        "enrolled_at": "2023-07-07 23:45:37",
        "last_accessed_at": "2024-02-08 13:54:31",
        "checkpoint_chapter_id": 36,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 82,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2025-07-08 00:11:45",
        "last_accessed_at": "2026-01-23 19:14:01",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 33,
          "issued_at": "2025-09-15 00:11:45",
          "certificate_code": "CERT-EV597MT0",
          "certificate_url": "https://skillup.io/certificates/CERT-EV597MT0"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 55,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0055@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-03-27 14:13:31",
    "last_online": "2023-04-27 21:28:25",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 55,
      "introduction": "Molly Gonzales is an experienced UX Design and Agile instructor with a strong background in Software Engineering. With her unique blend of technical expertise and user-centered design philosophy, she brings practical, real-world insights to her courses that empower students to create innovative digital solutions. Molly is dedicated to helping learners master both the strategic principles of user experience and the collaborative practices of Agile methodologies to drive meaningful impact in their careers.",
      "started_date": "2023-04-05",
      "last_online": "2025-08-14 08:01:43",
      "degree": "Ph.D. in Computer Science",
      "institution": "Stanford University",
      "certification": "Six Sigma Black Belt"
    },
    "enrollments": []
  },
  {
    "_id": 56,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0056@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-10 11:20:03",
    "last_online": "2024-03-18 13:14:28",
    "country": "India",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 56,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 83,
        "course_id": 28,
        "status": "dropped",
        "enrolled_at": "2025-04-25 01:09:24",
        "last_accessed_at": "2025-06-11 10:31:47",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 84,
        "course_id": 50,
        "status": "active",
        "enrolled_at": "2026-01-07 14:44:23",
        "last_accessed_at": "2026-01-25 06:57:59",
        "checkpoint_chapter_id": 197,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 57,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0057@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-24 14:15:30",
    "last_online": "2025-01-06 07:55:21",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 57,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 86,
        "course_id": 47,
        "status": "completed",
        "enrolled_at": "2025-11-22 04:57:56",
        "last_accessed_at": "2026-01-01 21:09:57",
        "checkpoint_chapter_id": 187,
        "certificate": {
          "certificate_id": 34,
          "issued_at": "2026-01-29 04:57:56",
          "certificate_code": "CERT-SGZO0S0U",
          "certificate_url": "https://skillup.io/certificates/CERT-SGZO0S0U"
        },
        "review_id": null
      },
      {
        "enrollment_id": 85,
        "course_id": 5,
        "status": "active",
        "enrolled_at": "2026-01-08 16:14:19",
        "last_accessed_at": "2026-01-30 23:40:19",
        "checkpoint_chapter_id": 21,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 58,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0058@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-22 18:15:41",
    "last_online": "2024-08-09 08:43:57",
    "country": "United Kingdom",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 58,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 87,
        "course_id": 36,
        "status": "completed",
        "enrolled_at": "2025-04-12 01:43:59",
        "last_accessed_at": "2026-01-28 00:43:21",
        "checkpoint_chapter_id": 139,
        "certificate": {
          "certificate_id": 35,
          "issued_at": "2025-07-19 01:43:59",
          "certificate_code": "CERT-M0IYJ321",
          "certificate_url": "https://skillup.io/certificates/CERT-M0IYJ321"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 59,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0059@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-16 18:51:34",
    "last_online": "2024-03-09 20:59:16",
    "country": "Canada",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 59,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 89,
        "course_id": 31,
        "status": "active",
        "enrolled_at": "2024-07-15 19:30:52",
        "last_accessed_at": "2024-09-25 14:20:37",
        "checkpoint_chapter_id": 120,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 88,
        "course_id": 8,
        "status": "active",
        "enrolled_at": "2025-10-08 23:12:38",
        "last_accessed_at": "2025-11-13 20:25:20",
        "checkpoint_chapter_id": 31,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 60,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0060@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-03 08:24:39",
    "last_online": "2024-12-01 14:45:14",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 60,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 90,
        "course_id": 16,
        "status": "active",
        "enrolled_at": "2025-08-13 07:58:25",
        "last_accessed_at": "2025-12-27 18:27:55",
        "checkpoint_chapter_id": 65,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 61,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0061@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-04 00:52:41",
    "last_online": "2024-08-28 20:40:26",
    "country": "United States",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 61,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 91,
        "course_id": 5,
        "status": "active",
        "enrolled_at": "2024-06-06 23:52:58",
        "last_accessed_at": "2024-12-01 09:36:54",
        "checkpoint_chapter_id": 21,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 62,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0062@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-18 23:12:51",
    "last_online": "2024-07-19 06:34:57",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 62,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 92,
        "course_id": 12,
        "status": "active",
        "enrolled_at": "2023-10-17 23:34:49",
        "last_accessed_at": "2024-05-01 21:43:16",
        "checkpoint_chapter_id": 49,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 63,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0063@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-13 01:13:24",
    "last_online": "2024-09-13 13:32:52",
    "country": "United Kingdom",
    "background": "Career Changer",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 63,
      "introduction": "Niamh Lawson is an experienced instructor specializing in Project Management and UX Design, bringing a unique perspective shaped by her career transition journey. With a background as a career changer, she combines practical industry knowledge with a deep understanding of navigating professional transitions, enabling her to connect with diverse learners. Niamh is dedicated to equipping students with the skills and confidence needed to excel in dynamic project environments while creating user-centered solutions that drive meaningful impact.",
      "started_date": "2023-05-08",
      "last_online": "2024-07-12 11:36:32",
      "degree": "MBA",
      "institution": "Columbia University",
      "certification": "PHR"
    },
    "enrollments": []
  },
  {
    "_id": 64,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0064@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-25 10:29:37",
    "last_online": "2024-09-23 13:50:11",
    "country": "United Kingdom",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 64,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 93,
        "course_id": 23,
        "status": "dropped",
        "enrolled_at": "2024-06-04 16:31:27",
        "last_accessed_at": "2025-12-30 03:39:01",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 94,
        "course_id": 29,
        "status": "dropped",
        "enrolled_at": "2025-12-15 08:21:46",
        "last_accessed_at": "2026-01-01 07:58:32",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 65,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0065@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-21 13:52:42",
    "last_online": "2023-11-18 02:29:22",
    "country": "Canada",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 65,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 95,
        "course_id": 15,
        "status": "active",
        "enrolled_at": "2024-10-22 18:37:44",
        "last_accessed_at": "2025-10-13 09:05:33",
        "checkpoint_chapter_id": 60,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 66,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0066@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-18 18:39:35",
    "last_online": "2024-05-03 05:21:03",
    "country": "United Kingdom",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 66,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 96,
        "course_id": 29,
        "status": "completed",
        "enrolled_at": "2024-12-07 17:14:08",
        "last_accessed_at": "2025-12-08 00:42:51",
        "checkpoint_chapter_id": 114,
        "certificate": {
          "certificate_id": 36,
          "issued_at": "2025-01-27 17:14:08",
          "certificate_code": "CERT-AKAVZSJO",
          "certificate_url": "https://skillup.io/certificates/CERT-AKAVZSJO"
        },
        "review_id": null
      },
      {
        "enrollment_id": 97,
        "course_id": 36,
        "status": "dropped",
        "enrolled_at": "2024-12-23 21:31:05",
        "last_accessed_at": "2025-11-23 18:12:41",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 67,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0067@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-18 02:27:30",
    "last_online": "2025-01-15 14:12:27",
    "country": "United Kingdom",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 67,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 98,
        "course_id": 9,
        "status": "completed",
        "enrolled_at": "2024-10-28 18:22:25",
        "last_accessed_at": "2025-09-11 07:14:39",
        "checkpoint_chapter_id": 36,
        "certificate": {
          "certificate_id": 37,
          "issued_at": "2024-12-02 18:22:25",
          "certificate_code": "CERT-WOZEBN60",
          "certificate_url": "https://skillup.io/certificates/CERT-WOZEBN60"
        },
        "review_id": null
      },
      {
        "enrollment_id": 99,
        "course_id": 46,
        "status": "active",
        "enrolled_at": "2025-10-28 14:49:22",
        "last_accessed_at": "2025-12-28 20:05:11",
        "checkpoint_chapter_id": 183,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 68,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0068@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-17 06:36:24",
    "last_online": "2024-04-09 13:27:10",
    "country": "Canada",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 68,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 100,
        "course_id": 40,
        "status": "active",
        "enrolled_at": "2025-07-25 09:37:54",
        "last_accessed_at": "2026-01-23 23:57:15",
        "checkpoint_chapter_id": 157,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 69,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0069@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-21 09:32:21",
    "last_online": "2023-12-16 22:18:31",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 69,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 101,
        "course_id": 35,
        "status": "dropped",
        "enrolled_at": "2024-06-20 17:27:06",
        "last_accessed_at": "2025-07-25 05:56:20",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 70,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0070@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-16 16:13:58",
    "last_online": "2023-10-22 06:10:57",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 70,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 102,
        "course_id": 29,
        "status": "active",
        "enrolled_at": "2024-06-02 23:38:38",
        "last_accessed_at": "2026-01-29 01:47:20",
        "checkpoint_chapter_id": 112,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 71,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0071@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-20 08:27:51",
    "last_online": "2023-05-23 17:50:11",
    "country": "India",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 71,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 103,
        "course_id": 16,
        "status": "active",
        "enrolled_at": "2025-07-28 04:41:44",
        "last_accessed_at": "2025-08-04 09:01:54",
        "checkpoint_chapter_id": 62,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 72,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0072@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-23 08:37:47",
    "last_online": "2023-07-14 23:38:01",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 72,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 105,
        "course_id": 10,
        "status": "completed",
        "enrolled_at": "2023-10-04 06:43:46",
        "last_accessed_at": "2024-06-18 15:14:14",
        "checkpoint_chapter_id": 40,
        "certificate": {
          "certificate_id": 38,
          "issued_at": "2023-11-20 06:43:46",
          "certificate_code": "CERT-MYXCDY3E",
          "certificate_url": "https://skillup.io/certificates/CERT-MYXCDY3E"
        },
        "review_id": null
      },
      {
        "enrollment_id": 104,
        "course_id": 21,
        "status": "dropped",
        "enrolled_at": "2025-01-26 22:14:32",
        "last_accessed_at": "2025-11-06 15:02:13",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 73,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0073@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-20 14:44:03",
    "last_online": "2024-12-31 18:13:29",
    "country": "India",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 73,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 106,
        "course_id": 17,
        "status": "dropped",
        "enrolled_at": "2025-12-30 11:23:46",
        "last_accessed_at": "2026-01-18 10:40:02",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 74,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0074@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-08 15:16:16",
    "last_online": "2023-05-31 14:18:55",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 74,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 107,
        "course_id": 13,
        "status": "active",
        "enrolled_at": "2024-02-06 06:50:10",
        "last_accessed_at": "2024-12-19 00:52:02",
        "checkpoint_chapter_id": 52,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 108,
        "course_id": 31,
        "status": "active",
        "enrolled_at": "2024-08-10 06:24:05",
        "last_accessed_at": "2025-11-25 16:42:27",
        "checkpoint_chapter_id": 120,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 75,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0075@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-16 08:01:46",
    "last_online": "2023-12-19 06:09:35",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 75,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 109,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2025-07-05 17:21:10",
        "last_accessed_at": "2026-01-07 20:01:35",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 39,
          "issued_at": "2025-09-21 17:21:10",
          "certificate_code": "CERT-ZPXT1CVB",
          "certificate_url": "https://skillup.io/certificates/CERT-ZPXT1CVB"
        },
        "review_id": 11
      }
    ]
  },
  {
    "_id": 76,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0076@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-12 02:58:08",
    "last_online": "2024-01-08 16:29:17",
    "country": "United Kingdom",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 76,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 110,
        "course_id": 21,
        "status": "active",
        "enrolled_at": "2025-02-15 19:33:49",
        "last_accessed_at": "2025-12-14 11:19:24",
        "checkpoint_chapter_id": 81,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 77,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0077@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-04-26 05:38:03",
    "last_online": "2024-07-11 13:34:49",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 77,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 111,
        "course_id": 5,
        "status": "active",
        "enrolled_at": "2024-01-19 22:47:51",
        "last_accessed_at": "2024-02-19 23:07:27",
        "checkpoint_chapter_id": 20,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 112,
        "course_id": 38,
        "status": "completed",
        "enrolled_at": "2024-11-20 12:36:53",
        "last_accessed_at": "2025-12-08 07:38:04",
        "checkpoint_chapter_id": 149,
        "certificate": {
          "certificate_id": 40,
          "issued_at": "2025-02-16 12:36:53",
          "certificate_code": "CERT-VHKYKW5P",
          "certificate_url": "https://skillup.io/certificates/CERT-VHKYKW5P"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 78,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0078@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-11 13:59:00",
    "last_online": "2024-01-12 22:32:15",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 78,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 114,
        "course_id": 12,
        "status": "completed",
        "enrolled_at": "2023-08-31 16:06:30",
        "last_accessed_at": "2025-03-07 12:46:34",
        "checkpoint_chapter_id": 49,
        "certificate": {
          "certificate_id": 41,
          "issued_at": "2023-11-01 16:06:30",
          "certificate_code": "CERT-ACEQX7GI",
          "certificate_url": "https://skillup.io/certificates/CERT-ACEQX7GI"
        },
        "review_id": 12
      },
      {
        "enrollment_id": 113,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2024-11-07 16:56:31",
        "last_accessed_at": "2025-10-16 20:07:43",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 42,
          "issued_at": "2024-12-17 16:56:31",
          "certificate_code": "CERT-P7V0VUEI",
          "certificate_url": "https://skillup.io/certificates/CERT-P7V0VUEI"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 79,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0079@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-10 21:55:18",
    "last_online": "2024-03-20 15:19:44",
    "country": "Australia",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 79,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 116,
        "course_id": 28,
        "status": "dropped",
        "enrolled_at": "2025-02-24 14:24:32",
        "last_accessed_at": "2025-03-27 14:09:45",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 115,
        "course_id": 6,
        "status": "completed",
        "enrolled_at": "2025-04-12 07:27:03",
        "last_accessed_at": "2025-07-18 10:36:39",
        "checkpoint_chapter_id": 24,
        "certificate": {
          "certificate_id": 43,
          "issued_at": "2025-06-27 07:27:03",
          "certificate_code": "CERT-OB0HFB49",
          "certificate_url": "https://skillup.io/certificates/CERT-OB0HFB49"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 80,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0080@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-25 07:47:42",
    "last_online": "2024-01-31 10:26:45",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 80,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 118,
        "course_id": 11,
        "status": "completed",
        "enrolled_at": "2024-06-19 11:20:55",
        "last_accessed_at": "2025-07-04 13:08:21",
        "checkpoint_chapter_id": 44,
        "certificate": {
          "certificate_id": 44,
          "issued_at": "2024-09-24 11:20:55",
          "certificate_code": "CERT-P7XO93ZR",
          "certificate_url": "https://skillup.io/certificates/CERT-P7XO93ZR"
        },
        "review_id": null
      },
      {
        "enrollment_id": 117,
        "course_id": 41,
        "status": "active",
        "enrolled_at": "2025-02-09 01:18:48",
        "last_accessed_at": "2025-03-14 20:42:13",
        "checkpoint_chapter_id": 162,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 81,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0081@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-25 10:57:27",
    "last_online": "2024-04-16 01:54:56",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 81,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 119,
        "course_id": 15,
        "status": "active",
        "enrolled_at": "2024-11-10 21:01:29",
        "last_accessed_at": "2025-07-18 00:51:18",
        "checkpoint_chapter_id": 60,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 82,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0082@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-08 14:40:49",
    "last_online": "2025-01-06 12:07:54",
    "country": "Australia",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 82,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 120,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2025-08-06 12:55:49",
        "last_accessed_at": "2026-01-22 05:15:41",
        "checkpoint_chapter_id": 7,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 83,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0083@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-26 08:27:57",
    "last_online": "2023-06-29 22:38:21",
    "country": "United Kingdom",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 83,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 121,
        "course_id": 38,
        "status": "dropped",
        "enrolled_at": "2025-04-22 05:36:44",
        "last_accessed_at": "2025-07-28 23:35:14",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 84,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0084@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-18 08:08:02",
    "last_online": "2024-05-31 16:22:21",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 84,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 122,
        "course_id": 24,
        "status": "active",
        "enrolled_at": "2025-07-05 09:04:47",
        "last_accessed_at": "2026-01-28 04:13:16",
        "checkpoint_chapter_id": 95,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 85,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0085@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-17 00:42:39",
    "last_online": "2024-02-08 08:15:54",
    "country": "United Kingdom",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 85,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 123,
        "course_id": 47,
        "status": "completed",
        "enrolled_at": "2025-03-27 19:43:23",
        "last_accessed_at": "2025-07-09 22:43:10",
        "checkpoint_chapter_id": 187,
        "certificate": {
          "certificate_id": 45,
          "issued_at": "2025-04-30 19:43:23",
          "certificate_code": "CERT-YS3N7ZZX",
          "certificate_url": "https://skillup.io/certificates/CERT-YS3N7ZZX"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 86,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0086@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-24 21:01:18",
    "last_online": "2024-10-31 22:46:58",
    "country": "United Kingdom",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 86,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 124,
        "course_id": 7,
        "status": "dropped",
        "enrolled_at": "2024-02-04 08:45:18",
        "last_accessed_at": "2025-01-19 03:58:20",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 87,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0087@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-06 06:07:11",
    "last_online": "2024-11-25 19:36:10",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 87,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 125,
        "course_id": 26,
        "status": "dropped",
        "enrolled_at": "2025-01-05 04:49:26",
        "last_accessed_at": "2025-03-28 15:09:09",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 126,
        "course_id": 21,
        "status": "active",
        "enrolled_at": "2026-01-29 14:57:52",
        "last_accessed_at": "2026-01-30 22:15:30",
        "checkpoint_chapter_id": 83,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 88,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0088@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-24 22:55:51",
    "last_online": "2024-06-23 17:18:07",
    "country": "Canada",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 88,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 127,
        "course_id": 27,
        "status": "completed",
        "enrolled_at": "2024-08-26 04:52:27",
        "last_accessed_at": "2025-07-14 15:49:33",
        "checkpoint_chapter_id": 107,
        "certificate": {
          "certificate_id": 46,
          "issued_at": "2024-11-09 04:52:27",
          "certificate_code": "CERT-RWS8RYTG",
          "certificate_url": "https://skillup.io/certificates/CERT-RWS8RYTG"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 89,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0089@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-22 21:00:47",
    "last_online": "2023-09-12 03:01:23",
    "country": "Canada",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 89,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 128,
        "course_id": 41,
        "status": "dropped",
        "enrolled_at": "2025-05-17 14:15:35",
        "last_accessed_at": "2025-08-16 01:10:31",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 90,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0090@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-09 15:02:36",
    "last_online": "2024-05-23 04:05:08",
    "country": "United States",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 90,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 129,
        "course_id": 47,
        "status": "dropped",
        "enrolled_at": "2025-12-02 00:31:02",
        "last_accessed_at": "2026-01-28 06:24:47",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 91,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0091@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-10 05:15:26",
    "last_online": "2024-02-11 06:46:57",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 91,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 130,
        "course_id": 13,
        "status": "completed",
        "enrolled_at": "2024-08-27 02:49:32",
        "last_accessed_at": "2025-01-05 02:09:21",
        "checkpoint_chapter_id": 53,
        "certificate": {
          "certificate_id": 47,
          "issued_at": "2024-12-14 02:49:32",
          "certificate_code": "CERT-D0C5OWOI",
          "certificate_url": "https://skillup.io/certificates/CERT-D0C5OWOI"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 92,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0092@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-04 22:18:00",
    "last_online": "2024-03-16 09:57:08",
    "country": "Australia",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 92,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 131,
        "course_id": 2,
        "status": "dropped",
        "enrolled_at": "2024-12-10 12:50:47",
        "last_accessed_at": "2025-01-04 06:35:35",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 132,
        "course_id": 49,
        "status": "completed",
        "enrolled_at": "2025-12-19 07:33:16",
        "last_accessed_at": "2026-01-26 22:46:33",
        "checkpoint_chapter_id": 194,
        "certificate": {
          "certificate_id": 48,
          "issued_at": "2026-01-28 07:33:16",
          "certificate_code": "CERT-LYUKSPZC",
          "certificate_url": "https://skillup.io/certificates/CERT-LYUKSPZC"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 93,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0093@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-03 01:59:40",
    "last_online": "2023-11-08 14:39:33",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 93,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 133,
        "course_id": 44,
        "status": "active",
        "enrolled_at": "2025-10-01 03:57:12",
        "last_accessed_at": "2025-12-24 12:12:51",
        "checkpoint_chapter_id": 175,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 94,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0094@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-25 23:54:28",
    "last_online": "2024-05-01 00:37:49",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 94,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 135,
        "course_id": 50,
        "status": "dropped",
        "enrolled_at": "2025-02-04 19:49:24",
        "last_accessed_at": "2026-01-27 06:57:51",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 134,
        "course_id": 26,
        "status": "completed",
        "enrolled_at": "2025-05-28 11:49:53",
        "last_accessed_at": "2025-06-14 14:20:43",
        "checkpoint_chapter_id": 103,
        "certificate": {
          "certificate_id": 49,
          "issued_at": "2025-08-18 11:49:53",
          "certificate_code": "CERT-3W0P4RE7",
          "certificate_url": "https://skillup.io/certificates/CERT-3W0P4RE7"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 95,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0095@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-14 00:56:54",
    "last_online": "2024-06-09 20:39:04",
    "country": "Australia",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 95,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 136,
        "course_id": 40,
        "status": "completed",
        "enrolled_at": "2024-11-24 20:48:35",
        "last_accessed_at": "2025-08-06 19:46:16",
        "checkpoint_chapter_id": 158,
        "certificate": {
          "certificate_id": 50,
          "issued_at": "2024-12-28 20:48:35",
          "certificate_code": "CERT-3T4FD89L",
          "certificate_url": "https://skillup.io/certificates/CERT-3T4FD89L"
        },
        "review_id": 13
      },
      {
        "enrollment_id": 137,
        "course_id": 41,
        "status": "completed",
        "enrolled_at": "2025-05-30 22:57:54",
        "last_accessed_at": "2025-12-16 20:23:25",
        "checkpoint_chapter_id": 163,
        "certificate": {
          "certificate_id": 51,
          "issued_at": "2025-08-03 22:57:54",
          "certificate_code": "CERT-JH1XIQYO",
          "certificate_url": "https://skillup.io/certificates/CERT-JH1XIQYO"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 96,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0096@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-12 06:19:19",
    "last_online": "2024-09-18 04:20:24",
    "country": "Canada",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 96,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 138,
        "course_id": 33,
        "status": "completed",
        "enrolled_at": "2025-07-20 09:20:07",
        "last_accessed_at": "2025-09-19 16:33:24",
        "checkpoint_chapter_id": 129,
        "certificate": {
          "certificate_id": 52,
          "issued_at": "2025-09-12 09:20:07",
          "certificate_code": "CERT-43WEGOWE",
          "certificate_url": "https://skillup.io/certificates/CERT-43WEGOWE"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 97,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0097@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-06 15:23:09",
    "last_online": "2024-05-12 00:34:12",
    "country": "Australia",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 97,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 139,
        "course_id": 35,
        "status": "completed",
        "enrolled_at": "2024-06-22 15:34:31",
        "last_accessed_at": "2024-10-24 00:56:44",
        "checkpoint_chapter_id": 136,
        "certificate": {
          "certificate_id": 53,
          "issued_at": "2024-08-18 15:34:31",
          "certificate_code": "CERT-FES2BXSJ",
          "certificate_url": "https://skillup.io/certificates/CERT-FES2BXSJ"
        },
        "review_id": 14
      }
    ]
  },
  {
    "_id": 98,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0098@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-08 03:31:41",
    "last_online": "2023-07-24 10:08:42",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 98,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 140,
        "course_id": 43,
        "status": "dropped",
        "enrolled_at": "2025-05-08 14:44:48",
        "last_accessed_at": "2026-01-10 08:15:32",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 141,
        "course_id": 25,
        "status": "completed",
        "enrolled_at": "2025-06-09 06:04:30",
        "last_accessed_at": "2025-12-16 09:07:40",
        "checkpoint_chapter_id": 100,
        "certificate": {
          "certificate_id": 54,
          "issued_at": "2025-09-06 06:04:30",
          "certificate_code": "CERT-AWLM1EIO",
          "certificate_url": "https://skillup.io/certificates/CERT-AWLM1EIO"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 99,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0099@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-15 17:26:51",
    "last_online": "2024-02-10 00:23:32",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 99,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 142,
        "course_id": 50,
        "status": "completed",
        "enrolled_at": "2025-10-13 14:19:32",
        "last_accessed_at": "2025-10-23 18:26:11",
        "checkpoint_chapter_id": 197,
        "certificate": {
          "certificate_id": 55,
          "issued_at": "2025-11-26 14:19:32",
          "certificate_code": "CERT-T72IC3A9",
          "certificate_url": "https://skillup.io/certificates/CERT-T72IC3A9"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 100,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0100@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-03 06:21:15",
    "last_online": "2024-12-07 09:41:02",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 100,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 143,
        "course_id": 33,
        "status": "dropped",
        "enrolled_at": "2025-06-10 17:32:46",
        "last_accessed_at": "2025-08-29 04:22:01",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 101,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0101@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-05-31 14:57:37",
    "last_online": "2023-09-25 09:32:12",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 101,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 144,
        "course_id": 40,
        "status": "active",
        "enrolled_at": "2025-08-04 15:09:40",
        "last_accessed_at": "2025-08-17 06:26:25",
        "checkpoint_chapter_id": 158,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 102,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0102@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-08 23:48:00",
    "last_online": "2024-10-18 08:37:57",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 102,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 145,
        "course_id": 6,
        "status": "completed",
        "enrolled_at": "2024-07-13 06:30:20",
        "last_accessed_at": "2026-01-19 19:48:29",
        "checkpoint_chapter_id": 24,
        "certificate": {
          "certificate_id": 56,
          "issued_at": "2024-10-27 06:30:20",
          "certificate_code": "CERT-PWRLY79E",
          "certificate_url": "https://skillup.io/certificates/CERT-PWRLY79E"
        },
        "review_id": null
      },
      {
        "enrollment_id": 146,
        "course_id": 30,
        "status": "completed",
        "enrolled_at": "2025-11-24 17:14:03",
        "last_accessed_at": "2025-12-22 10:14:44",
        "checkpoint_chapter_id": 117,
        "certificate": {
          "certificate_id": 57,
          "issued_at": "2026-03-01 17:14:03",
          "certificate_code": "CERT-YQO2RW32",
          "certificate_url": "https://skillup.io/certificates/CERT-YQO2RW32"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 103,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0103@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-05 11:34:28",
    "last_online": "2025-01-08 09:54:57",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 103,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 147,
        "course_id": 17,
        "status": "dropped",
        "enrolled_at": "2025-08-26 23:34:19",
        "last_accessed_at": "2025-10-28 23:33:01",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 104,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0104@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-26 02:54:35",
    "last_online": "2024-12-12 07:18:07",
    "country": "Canada",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 104,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 149,
        "course_id": 1,
        "status": "active",
        "enrolled_at": "2024-02-17 16:55:19",
        "last_accessed_at": "2025-10-04 08:29:39",
        "checkpoint_chapter_id": 2,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 148,
        "course_id": 31,
        "status": "completed",
        "enrolled_at": "2025-10-06 06:00:36",
        "last_accessed_at": "2025-11-21 04:29:00",
        "checkpoint_chapter_id": 122,
        "certificate": {
          "certificate_id": 58,
          "issued_at": "2026-01-25 06:00:36",
          "certificate_code": "CERT-NJF9K689",
          "certificate_url": "https://skillup.io/certificates/CERT-NJF9K689"
        },
        "review_id": 15
      }
    ]
  },
  {
    "_id": 105,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0105@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-27 16:10:26",
    "last_online": "2025-01-06 01:42:59",
    "country": "Australia",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 105,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 150,
        "course_id": 7,
        "status": "completed",
        "enrolled_at": "2024-02-22 00:58:04",
        "last_accessed_at": "2024-06-03 18:34:28",
        "checkpoint_chapter_id": 27,
        "certificate": {
          "certificate_id": 59,
          "issued_at": "2024-03-24 00:58:04",
          "certificate_code": "CERT-0KXPJJ0Y",
          "certificate_url": "https://skillup.io/certificates/CERT-0KXPJJ0Y"
        },
        "review_id": 16
      }
    ]
  },
  {
    "_id": 106,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0106@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-24 18:49:14",
    "last_online": "2023-10-06 19:22:19",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 106,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 152,
        "course_id": 22,
        "status": "active",
        "enrolled_at": "2024-06-24 07:05:46",
        "last_accessed_at": "2024-10-10 13:55:08",
        "checkpoint_chapter_id": 87,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 151,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2024-09-07 13:12:17",
        "last_accessed_at": "2025-01-17 21:03:12",
        "checkpoint_chapter_id": 123,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 107,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0107@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-11 02:53:15",
    "last_online": "2024-04-24 07:12:39",
    "country": "Australia",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 107,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 153,
        "course_id": 6,
        "status": "dropped",
        "enrolled_at": "2024-09-16 05:21:11",
        "last_accessed_at": "2025-05-09 04:10:08",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 154,
        "course_id": 16,
        "status": "active",
        "enrolled_at": "2025-04-17 05:17:33",
        "last_accessed_at": "2025-12-10 23:17:01",
        "checkpoint_chapter_id": 65,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 108,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0108@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-06 16:43:37",
    "last_online": "2024-08-05 19:14:07",
    "country": "Canada",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 108,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 155,
        "course_id": 49,
        "status": "dropped",
        "enrolled_at": "2025-09-23 19:30:43",
        "last_accessed_at": "2025-11-10 00:37:15",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 156,
        "course_id": 27,
        "status": "completed",
        "enrolled_at": "2026-01-17 22:06:06",
        "last_accessed_at": "2026-01-30 03:09:40",
        "checkpoint_chapter_id": 107,
        "certificate": {
          "certificate_id": 60,
          "issued_at": "2026-04-11 22:06:06",
          "certificate_code": "CERT-7BI6U6Y3",
          "certificate_url": "https://skillup.io/certificates/CERT-7BI6U6Y3"
        },
        "review_id": 17
      }
    ]
  },
  {
    "_id": 109,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0109@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-14 12:52:05",
    "last_online": "2024-09-11 13:07:36",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 109,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 157,
        "course_id": 15,
        "status": "dropped",
        "enrolled_at": "2024-03-20 09:55:11",
        "last_accessed_at": "2024-06-20 01:09:05",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 158,
        "course_id": 27,
        "status": "completed",
        "enrolled_at": "2024-06-06 04:58:55",
        "last_accessed_at": "2025-02-05 20:18:48",
        "checkpoint_chapter_id": 107,
        "certificate": {
          "certificate_id": 61,
          "issued_at": "2024-09-30 04:58:55",
          "certificate_code": "CERT-3YUVM8ZY",
          "certificate_url": "https://skillup.io/certificates/CERT-3YUVM8ZY"
        },
        "review_id": 18
      }
    ]
  },
  {
    "_id": 110,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0110@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-08 01:55:43",
    "last_online": "2024-08-14 06:47:28",
    "country": "United Kingdom",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 110,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 159,
        "course_id": 21,
        "status": "dropped",
        "enrolled_at": "2025-11-08 14:57:11",
        "last_accessed_at": "2026-01-01 03:00:26",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 111,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0111@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-28 16:45:54",
    "last_online": "2024-01-22 16:36:24",
    "country": "Canada",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 111,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 161,
        "course_id": 24,
        "status": "completed",
        "enrolled_at": "2024-10-22 09:11:23",
        "last_accessed_at": "2025-11-10 19:59:39",
        "checkpoint_chapter_id": 95,
        "certificate": {
          "certificate_id": 62,
          "issued_at": "2025-02-14 09:11:23",
          "certificate_code": "CERT-HRX2N7JW",
          "certificate_url": "https://skillup.io/certificates/CERT-HRX2N7JW"
        },
        "review_id": null
      },
      {
        "enrollment_id": 160,
        "course_id": 35,
        "status": "dropped",
        "enrolled_at": "2025-12-16 09:53:48",
        "last_accessed_at": "2026-01-12 05:55:50",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 112,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0112@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-29 10:42:07",
    "last_online": "2023-09-10 03:30:25",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 112,
      "introduction": "Micah Coleman is an accomplished instructor specializing in Project Management and Product Management, bringing practical expertise from a robust background as an Operations Manager. With extensive experience in streamlining processes, optimizing resources, and delivering results in fast-paced environments, Micah equips students with actionable frameworks and industry best practices to excel in their careers. Passionate about fostering the next generation of project and product leaders, Micah combines strategic insights with hands-on mentorship to inspire professional growth and success.",
      "started_date": "2023-07-27",
      "last_online": "2024-11-16 17:51:26",
      "degree": "M.A. in Education",
      "institution": "University of Chicago",
      "certification": "Lean Six Sigma Green Belt"
    },
    "enrollments": []
  },
  {
    "_id": 113,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0113@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-30 20:52:53",
    "last_online": "2024-04-12 02:23:49",
    "country": "Canada",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 113,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 162,
        "course_id": 41,
        "status": "active",
        "enrolled_at": "2025-04-15 00:49:45",
        "last_accessed_at": "2025-12-11 05:23:54",
        "checkpoint_chapter_id": 161,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 163,
        "course_id": 38,
        "status": "dropped",
        "enrolled_at": "2025-10-25 14:49:59",
        "last_accessed_at": "2025-11-19 12:00:11",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 114,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0114@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-01 09:21:27",
    "last_online": "2024-03-22 07:12:30",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 114,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 164,
        "course_id": 26,
        "status": "completed",
        "enrolled_at": "2024-07-25 17:08:57",
        "last_accessed_at": "2025-04-26 18:20:50",
        "checkpoint_chapter_id": 103,
        "certificate": {
          "certificate_id": 63,
          "issued_at": "2024-09-27 17:08:57",
          "certificate_code": "CERT-GANF0IDW",
          "certificate_url": "https://skillup.io/certificates/CERT-GANF0IDW"
        },
        "review_id": 19
      }
    ]
  },
  {
    "_id": 115,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0115@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-07 21:03:12",
    "last_online": "2024-09-11 14:23:36",
    "country": "Australia",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 115,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 166,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2023-12-17 19:20:52",
        "last_accessed_at": "2025-06-03 19:09:41",
        "checkpoint_chapter_id": 23,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 165,
        "course_id": 43,
        "status": "active",
        "enrolled_at": "2025-10-17 02:41:53",
        "last_accessed_at": "2025-10-31 09:18:23",
        "checkpoint_chapter_id": 171,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 116,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0116@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-12 15:25:35",
    "last_online": "2024-09-02 21:08:54",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 116,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 167,
        "course_id": 21,
        "status": "dropped",
        "enrolled_at": "2026-01-11 02:31:36",
        "last_accessed_at": "2026-01-31 13:00:48",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 117,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0117@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-18 05:37:25",
    "last_online": "2024-05-07 14:48:42",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 117,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 168,
        "course_id": 26,
        "status": "active",
        "enrolled_at": "2025-03-24 22:46:43",
        "last_accessed_at": "2025-05-23 10:37:32",
        "checkpoint_chapter_id": 103,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 118,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0118@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-06-28 00:35:24",
    "last_online": "2024-06-23 04:54:12",
    "country": "United States",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 118,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 169,
        "course_id": 4,
        "status": "completed",
        "enrolled_at": "2024-03-05 00:20:44",
        "last_accessed_at": "2024-06-15 05:31:16",
        "checkpoint_chapter_id": 18,
        "certificate": {
          "certificate_id": 64,
          "issued_at": "2024-04-23 00:20:44",
          "certificate_code": "CERT-EM9C0FSK",
          "certificate_url": "https://skillup.io/certificates/CERT-EM9C0FSK"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 119,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0119@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-25 18:47:34",
    "last_online": "2023-10-26 09:42:21",
    "country": "Australia",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 119,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 170,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2024-09-11 18:19:41",
        "last_accessed_at": "2025-10-07 12:56:54",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 65,
          "issued_at": "2024-12-11 18:19:41",
          "certificate_code": "CERT-X8K6DZFT",
          "certificate_url": "https://skillup.io/certificates/CERT-X8K6DZFT"
        },
        "review_id": null
      },
      {
        "enrollment_id": 171,
        "course_id": 49,
        "status": "dropped",
        "enrolled_at": "2025-08-08 05:14:07",
        "last_accessed_at": "2026-01-08 18:46:09",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 120,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0120@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-07 04:18:43",
    "last_online": "2024-10-04 21:19:11",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 120,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 173,
        "course_id": 33,
        "status": "completed",
        "enrolled_at": "2024-06-23 04:47:18",
        "last_accessed_at": "2025-05-28 17:09:19",
        "checkpoint_chapter_id": 129,
        "certificate": {
          "certificate_id": 66,
          "issued_at": "2024-09-22 04:47:18",
          "certificate_code": "CERT-13K64N2H",
          "certificate_url": "https://skillup.io/certificates/CERT-13K64N2H"
        },
        "review_id": null
      },
      {
        "enrollment_id": 172,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2025-03-05 16:38:49",
        "last_accessed_at": "2025-09-07 03:28:27",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 67,
          "issued_at": "2025-06-06 16:38:49",
          "certificate_code": "CERT-B94ZVGWN",
          "certificate_url": "https://skillup.io/certificates/CERT-B94ZVGWN"
        },
        "review_id": 20
      }
    ]
  },
  {
    "_id": 121,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0121@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-29 02:42:59",
    "last_online": "2024-06-08 10:32:09",
    "country": "Canada",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 121,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 175,
        "course_id": 38,
        "status": "dropped",
        "enrolled_at": "2024-08-07 20:51:22",
        "last_accessed_at": "2024-10-20 07:52:15",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 174,
        "course_id": 37,
        "status": "dropped",
        "enrolled_at": "2025-10-11 00:14:23",
        "last_accessed_at": "2025-12-27 13:52:10",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 122,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0122@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-29 21:00:32",
    "last_online": "2024-06-02 13:35:27",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 122,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 176,
        "course_id": 27,
        "status": "active",
        "enrolled_at": "2024-10-16 11:29:03",
        "last_accessed_at": "2025-01-27 08:27:00",
        "checkpoint_chapter_id": 104,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 123,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0123@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-10 10:57:13",
    "last_online": "2023-09-26 23:58:36",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 123,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 177,
        "course_id": 24,
        "status": "active",
        "enrolled_at": "2024-06-12 16:52:43",
        "last_accessed_at": "2025-02-24 08:41:26",
        "checkpoint_chapter_id": 94,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 178,
        "course_id": 46,
        "status": "active",
        "enrolled_at": "2026-01-28 00:19:07",
        "last_accessed_at": "2026-01-31 00:25:48",
        "checkpoint_chapter_id": 183,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 124,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0124@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-10 11:11:27",
    "last_online": "2024-11-22 19:10:18",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 124,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 179,
        "course_id": 37,
        "status": "active",
        "enrolled_at": "2025-09-02 13:31:39",
        "last_accessed_at": "2025-09-15 12:07:41",
        "checkpoint_chapter_id": 140,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 125,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0125@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-01 15:19:11",
    "last_online": "2023-08-10 13:41:25",
    "country": "Australia",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 125,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 180,
        "course_id": 9,
        "status": "completed",
        "enrolled_at": "2023-06-29 00:08:08",
        "last_accessed_at": "2024-03-06 05:13:56",
        "checkpoint_chapter_id": 36,
        "certificate": {
          "certificate_id": 68,
          "issued_at": "2023-09-18 00:08:08",
          "certificate_code": "CERT-J3L0ZGUU",
          "certificate_url": "https://skillup.io/certificates/CERT-J3L0ZGUU"
        },
        "review_id": 21
      }
    ]
  },
  {
    "_id": 126,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0126@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-22 09:46:44",
    "last_online": "2024-08-24 20:47:04",
    "country": "United Kingdom",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 126,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 181,
        "course_id": 36,
        "status": "active",
        "enrolled_at": "2025-07-29 11:05:24",
        "last_accessed_at": "2025-12-30 14:50:33",
        "checkpoint_chapter_id": 138,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 127,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0127@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-25 16:41:24",
    "last_online": "2024-11-10 02:44:43",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 127,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 183,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2024-09-18 09:45:48",
        "last_accessed_at": "2025-04-13 20:54:16",
        "checkpoint_chapter_id": 22,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 182,
        "course_id": 37,
        "status": "active",
        "enrolled_at": "2025-07-24 05:19:11",
        "last_accessed_at": "2025-10-29 16:53:14",
        "checkpoint_chapter_id": 142,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 128,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0128@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-24 22:52:59",
    "last_online": "2024-04-14 19:05:59",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 128,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 185,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2024-10-22 11:26:55",
        "last_accessed_at": "2025-01-27 07:34:29",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 69,
          "issued_at": "2024-12-25 11:26:55",
          "certificate_code": "CERT-D9B38WS1",
          "certificate_url": "https://skillup.io/certificates/CERT-D9B38WS1"
        },
        "review_id": null
      },
      {
        "enrollment_id": 184,
        "course_id": 34,
        "status": "active",
        "enrolled_at": "2025-04-18 19:59:59",
        "last_accessed_at": "2025-05-08 00:04:02",
        "checkpoint_chapter_id": 130,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 129,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0129@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-25 03:52:24",
    "last_online": "2024-05-28 01:28:44",
    "country": "United States",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 129,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 187,
        "course_id": 7,
        "status": "completed",
        "enrolled_at": "2024-01-27 13:57:51",
        "last_accessed_at": "2024-03-16 21:53:04",
        "checkpoint_chapter_id": 27,
        "certificate": {
          "certificate_id": 70,
          "issued_at": "2024-05-24 13:57:51",
          "certificate_code": "CERT-XD0I9UTD",
          "certificate_url": "https://skillup.io/certificates/CERT-XD0I9UTD"
        },
        "review_id": null
      },
      {
        "enrollment_id": 186,
        "course_id": 49,
        "status": "dropped",
        "enrolled_at": "2025-11-26 21:58:19",
        "last_accessed_at": "2025-12-13 15:17:05",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 130,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0130@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-24 07:28:51",
    "last_online": "2024-10-19 02:34:11",
    "country": "United Kingdom",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 130,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 188,
        "course_id": 32,
        "status": "completed",
        "enrolled_at": "2025-08-21 15:57:26",
        "last_accessed_at": "2026-02-02 02:24:26",
        "checkpoint_chapter_id": 125,
        "certificate": {
          "certificate_id": 71,
          "issued_at": "2025-12-18 15:57:26",
          "certificate_code": "CERT-V8ECQTBZ",
          "certificate_url": "https://skillup.io/certificates/CERT-V8ECQTBZ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 131,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0131@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-18 15:58:58",
    "last_online": "2024-05-12 18:22:54",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 131,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 189,
        "course_id": 24,
        "status": "active",
        "enrolled_at": "2025-04-05 16:18:21",
        "last_accessed_at": "2025-04-14 09:16:39",
        "checkpoint_chapter_id": 93,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 132,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0132@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-12 11:12:31",
    "last_online": "2024-07-14 19:26:28",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 132,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 190,
        "course_id": 40,
        "status": "dropped",
        "enrolled_at": "2024-12-14 04:05:59",
        "last_accessed_at": "2025-03-21 13:30:27",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 191,
        "course_id": 50,
        "status": "completed",
        "enrolled_at": "2025-11-28 13:31:13",
        "last_accessed_at": "2026-01-13 13:17:08",
        "checkpoint_chapter_id": 197,
        "certificate": {
          "certificate_id": 72,
          "issued_at": "2026-03-11 13:31:13",
          "certificate_code": "CERT-VDMRF12M",
          "certificate_url": "https://skillup.io/certificates/CERT-VDMRF12M"
        },
        "review_id": 22
      }
    ]
  },
  {
    "_id": 133,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0133@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-11 23:33:52",
    "last_online": "2023-09-24 15:31:18",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 133,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 192,
        "course_id": 24,
        "status": "completed",
        "enrolled_at": "2024-06-15 15:39:24",
        "last_accessed_at": "2025-08-02 10:51:07",
        "checkpoint_chapter_id": 95,
        "certificate": {
          "certificate_id": 73,
          "issued_at": "2024-09-29 15:39:24",
          "certificate_code": "CERT-XDQ9NIIE",
          "certificate_url": "https://skillup.io/certificates/CERT-XDQ9NIIE"
        },
        "review_id": null
      },
      {
        "enrollment_id": 193,
        "course_id": 3,
        "status": "active",
        "enrolled_at": "2025-08-11 01:15:07",
        "last_accessed_at": "2025-12-19 06:22:40",
        "checkpoint_chapter_id": 13,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 134,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0134@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-07-31 22:22:35",
    "last_online": "2023-09-22 00:17:16",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 134,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 194,
        "course_id": 36,
        "status": "completed",
        "enrolled_at": "2025-11-08 09:17:30",
        "last_accessed_at": "2025-12-09 14:14:19",
        "checkpoint_chapter_id": 139,
        "certificate": {
          "certificate_id": 74,
          "issued_at": "2025-12-20 09:17:30",
          "certificate_code": "CERT-TZJW29RQ",
          "certificate_url": "https://skillup.io/certificates/CERT-TZJW29RQ"
        },
        "review_id": 23
      }
    ]
  },
  {
    "_id": 135,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0135@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-19 20:37:21",
    "last_online": "2023-10-10 14:14:49",
    "country": "Canada",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 135,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 195,
        "course_id": 15,
        "status": "active",
        "enrolled_at": "2024-02-22 18:07:35",
        "last_accessed_at": "2024-05-10 09:32:33",
        "checkpoint_chapter_id": 59,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 196,
        "course_id": 40,
        "status": "active",
        "enrolled_at": "2024-12-03 08:55:44",
        "last_accessed_at": "2025-09-22 10:57:27",
        "checkpoint_chapter_id": 154,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 136,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0136@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-17 16:17:36",
    "last_online": "2025-01-15 15:40:21",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 136,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 197,
        "course_id": 38,
        "status": "active",
        "enrolled_at": "2025-07-06 02:34:28",
        "last_accessed_at": "2025-11-22 02:37:11",
        "checkpoint_chapter_id": 146,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 137,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0137@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-13 15:35:35",
    "last_online": "2023-08-14 04:49:04",
    "country": "Canada",
    "background": "Teacher",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 137,
      "introduction": "Luc Graves is an experienced instructor specializing in Project Management and Data Analysis, bringing a robust educational background to the classroom. With a foundation in teaching, Luc has developed a dynamic and engaging instructional approach that demystifies complex concepts and empowers students to excel in their professional careers. Dedicated to fostering practical skill development and analytical thinking, Luc creates a learning environment where students gain both theoretical knowledge and real-world competencies.",
      "started_date": "2023-08-25",
      "last_online": "2025-02-10 18:04:38",
      "degree": "MBA in Technology Management",
      "institution": "Duke University",
      "certification": "PMP"
    },
    "enrollments": []
  },
  {
    "_id": 138,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0138@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-23 13:16:05",
    "last_online": "2023-11-16 10:22:55",
    "country": "United Kingdom",
    "background": "Software Engineer",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 138,
      "introduction": "Danielle Harris is an experienced instructor specializing in Communication and Project Management courses, bringing a unique perspective shaped by her background in Software Engineering. With deep technical expertise and a passion for developing future leaders, Danielle combines practical industry knowledge with engaging teaching methodologies to help students master both interpersonal and organizational skills. Her dual focus on clear communication and effective project execution equips learners with the essential competencies needed to succeed in today's dynamic professional environments.",
      "started_date": "2023-09-09",
      "last_online": "2024-02-15 17:34:26",
      "degree": "Ph.D. in Computer Science",
      "institution": "MIT",
      "certification": "Google Cloud Professional"
    },
    "enrollments": []
  },
  {
    "_id": 139,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0139@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-07 12:06:18",
    "last_online": "2024-01-21 18:12:56",
    "country": "United Kingdom",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 139,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 198,
        "course_id": 4,
        "status": "dropped",
        "enrolled_at": "2023-05-03 03:19:26",
        "last_accessed_at": "2023-06-11 15:32:50",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 140,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0140@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-06 07:19:47",
    "last_online": "2023-09-19 13:33:33",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 140,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 199,
        "course_id": 4,
        "status": "active",
        "enrolled_at": "2023-05-31 18:35:57",
        "last_accessed_at": "2025-03-31 02:39:36",
        "checkpoint_chapter_id": 15,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 200,
        "course_id": 32,
        "status": "completed",
        "enrolled_at": "2024-11-24 07:24:02",
        "last_accessed_at": "2025-07-19 19:29:29",
        "checkpoint_chapter_id": 125,
        "certificate": {
          "certificate_id": 75,
          "issued_at": "2025-02-09 07:24:02",
          "certificate_code": "CERT-QOYHRKL0",
          "certificate_url": "https://skillup.io/certificates/CERT-QOYHRKL0"
        },
        "review_id": 24
      }
    ]
  },
  {
    "_id": 141,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0141@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-11 11:16:17",
    "last_online": "2024-10-19 20:17:03",
    "country": "Canada",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 141,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 202,
        "course_id": 49,
        "status": "completed",
        "enrolled_at": "2025-03-04 09:47:07",
        "last_accessed_at": "2025-12-25 04:55:30",
        "checkpoint_chapter_id": 194,
        "certificate": {
          "certificate_id": 76,
          "issued_at": "2025-05-01 09:47:07",
          "certificate_code": "CERT-Y71VQJQ9",
          "certificate_url": "https://skillup.io/certificates/CERT-Y71VQJQ9"
        },
        "review_id": null
      },
      {
        "enrollment_id": 201,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2025-11-03 07:38:18",
        "last_accessed_at": "2025-12-25 04:59:13",
        "checkpoint_chapter_id": 23,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 142,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0142@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-20 05:18:14",
    "last_online": "2024-06-17 22:02:36",
    "country": "India",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 142,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 203,
        "course_id": 33,
        "status": "active",
        "enrolled_at": "2025-08-26 18:15:47",
        "last_accessed_at": "2025-10-27 13:01:17",
        "checkpoint_chapter_id": 129,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 143,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0143@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-13 03:17:48",
    "last_online": "2023-11-24 05:16:12",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 143,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 204,
        "course_id": 4,
        "status": "active",
        "enrolled_at": "2025-07-23 09:14:03",
        "last_accessed_at": "2025-08-26 00:56:21",
        "checkpoint_chapter_id": 17,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 144,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0144@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-13 02:16:35",
    "last_online": "2024-08-16 14:54:57",
    "country": "Australia",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 144,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 205,
        "course_id": 26,
        "status": "completed",
        "enrolled_at": "2024-05-02 11:48:24",
        "last_accessed_at": "2025-10-16 10:12:27",
        "checkpoint_chapter_id": 103,
        "certificate": {
          "certificate_id": 77,
          "issued_at": "2024-08-27 11:48:24",
          "certificate_code": "CERT-LGF3QUPX",
          "certificate_url": "https://skillup.io/certificates/CERT-LGF3QUPX"
        },
        "review_id": null
      },
      {
        "enrollment_id": 206,
        "course_id": 30,
        "status": "dropped",
        "enrolled_at": "2025-03-27 23:15:47",
        "last_accessed_at": "2025-05-22 20:06:01",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 145,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0145@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-29 18:14:33",
    "last_online": "2023-11-28 02:02:30",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 145,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 207,
        "course_id": 46,
        "status": "active",
        "enrolled_at": "2025-06-15 04:10:24",
        "last_accessed_at": "2025-10-14 04:51:18",
        "checkpoint_chapter_id": 180,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 146,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0146@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-27 01:43:23",
    "last_online": "2023-11-18 10:19:23",
    "country": "Canada",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 146,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 208,
        "course_id": 6,
        "status": "completed",
        "enrolled_at": "2023-12-01 11:24:26",
        "last_accessed_at": "2026-01-09 21:42:52",
        "checkpoint_chapter_id": 24,
        "certificate": {
          "certificate_id": 78,
          "issued_at": "2024-03-06 11:24:26",
          "certificate_code": "CERT-TH8UOJ6C",
          "certificate_url": "https://skillup.io/certificates/CERT-TH8UOJ6C"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 147,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0147@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-21 00:59:00",
    "last_online": "2023-10-31 05:17:03",
    "country": "Australia",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 147,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 210,
        "course_id": 20,
        "status": "active",
        "enrolled_at": "2024-04-02 19:07:32",
        "last_accessed_at": "2025-04-12 10:10:24",
        "checkpoint_chapter_id": 78,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 209,
        "course_id": 35,
        "status": "completed",
        "enrolled_at": "2025-08-11 21:36:05",
        "last_accessed_at": "2025-12-09 17:38:56",
        "checkpoint_chapter_id": 136,
        "certificate": {
          "certificate_id": 79,
          "issued_at": "2025-10-09 21:36:05",
          "certificate_code": "CERT-2C59VOKH",
          "certificate_url": "https://skillup.io/certificates/CERT-2C59VOKH"
        },
        "review_id": 25
      }
    ]
  },
  {
    "_id": 148,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0148@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-22 21:55:08",
    "last_online": "2023-09-01 16:43:31",
    "country": "India",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 148,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 211,
        "course_id": 49,
        "status": "completed",
        "enrolled_at": "2025-05-19 23:19:23",
        "last_accessed_at": "2025-08-11 14:48:16",
        "checkpoint_chapter_id": 194,
        "certificate": {
          "certificate_id": 80,
          "issued_at": "2025-06-27 23:19:23",
          "certificate_code": "CERT-TFZSOWN8",
          "certificate_url": "https://skillup.io/certificates/CERT-TFZSOWN8"
        },
        "review_id": null
      },
      {
        "enrollment_id": 212,
        "course_id": 15,
        "status": "active",
        "enrolled_at": "2025-09-17 03:16:57",
        "last_accessed_at": "2025-11-01 02:17:50",
        "checkpoint_chapter_id": 59,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 149,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0149@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-17 06:16:18",
    "last_online": "2023-11-11 16:26:48",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 149,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 213,
        "course_id": 34,
        "status": "active",
        "enrolled_at": "2024-07-12 21:35:39",
        "last_accessed_at": "2024-07-27 14:19:02",
        "checkpoint_chapter_id": 132,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 150,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0150@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-19 05:10:22",
    "last_online": "2023-09-23 23:22:43",
    "country": "Canada",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 150,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 214,
        "course_id": 14,
        "status": "active",
        "enrolled_at": "2023-09-21 16:37:18",
        "last_accessed_at": "2025-06-18 02:37:24",
        "checkpoint_chapter_id": 55,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 215,
        "course_id": 1,
        "status": "completed",
        "enrolled_at": "2024-12-16 08:44:52",
        "last_accessed_at": "2026-01-02 10:39:09",
        "checkpoint_chapter_id": 4,
        "certificate": {
          "certificate_id": 81,
          "issued_at": "2025-01-19 08:44:52",
          "certificate_code": "CERT-2TUGSPNY",
          "certificate_url": "https://skillup.io/certificates/CERT-2TUGSPNY"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 151,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0151@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-28 13:20:16",
    "last_online": "2024-05-21 16:08:19",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 151,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 217,
        "course_id": 15,
        "status": "active",
        "enrolled_at": "2024-03-09 21:24:46",
        "last_accessed_at": "2025-05-26 06:00:35",
        "checkpoint_chapter_id": 61,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 216,
        "course_id": 46,
        "status": "completed",
        "enrolled_at": "2025-12-28 09:18:37",
        "last_accessed_at": "2026-01-11 17:20:06",
        "checkpoint_chapter_id": 183,
        "certificate": {
          "certificate_id": 82,
          "issued_at": "2026-03-12 09:18:37",
          "certificate_code": "CERT-TONVP5SW",
          "certificate_url": "https://skillup.io/certificates/CERT-TONVP5SW"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 152,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0152@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-28 22:24:29",
    "last_online": "2024-06-15 00:44:47",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 152,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 218,
        "course_id": 9,
        "status": "active",
        "enrolled_at": "2025-08-01 07:17:38",
        "last_accessed_at": "2025-12-19 10:28:31",
        "checkpoint_chapter_id": 33,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 153,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0153@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-05 05:10:55",
    "last_online": "2024-04-04 16:37:28",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 153,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 219,
        "course_id": 16,
        "status": "active",
        "enrolled_at": "2024-01-02 10:20:00",
        "last_accessed_at": "2025-11-28 19:56:21",
        "checkpoint_chapter_id": 65,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 220,
        "course_id": 43,
        "status": "dropped",
        "enrolled_at": "2025-08-05 09:00:48",
        "last_accessed_at": "2025-10-30 20:46:56",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 154,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0154@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-05 01:01:58",
    "last_online": "2023-11-26 17:43:00",
    "country": "United States",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 154,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 221,
        "course_id": 2,
        "status": "dropped",
        "enrolled_at": "2023-11-14 20:25:22",
        "last_accessed_at": "2024-01-09 15:29:21",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 155,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0155@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-02 16:48:12",
    "last_online": "2024-03-20 00:16:47",
    "country": "India",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 155,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 222,
        "course_id": 1,
        "status": "active",
        "enrolled_at": "2023-07-24 13:24:16",
        "last_accessed_at": "2025-08-30 08:30:08",
        "checkpoint_chapter_id": 4,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 223,
        "course_id": 15,
        "status": "completed",
        "enrolled_at": "2025-11-10 15:24:40",
        "last_accessed_at": "2026-02-02 06:04:13",
        "checkpoint_chapter_id": 61,
        "certificate": {
          "certificate_id": 83,
          "issued_at": "2026-02-06 15:24:40",
          "certificate_code": "CERT-VDHNKNPK",
          "certificate_url": "https://skillup.io/certificates/CERT-VDHNKNPK"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 156,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0156@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-09 18:25:23",
    "last_online": "2024-05-28 04:51:02",
    "country": "United States",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 156,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 224,
        "course_id": 21,
        "status": "completed",
        "enrolled_at": "2025-04-30 04:38:43",
        "last_accessed_at": "2025-07-02 12:14:59",
        "checkpoint_chapter_id": 84,
        "certificate": {
          "certificate_id": 84,
          "issued_at": "2025-07-23 04:38:43",
          "certificate_code": "CERT-UCWJ51VS",
          "certificate_url": "https://skillup.io/certificates/CERT-UCWJ51VS"
        },
        "review_id": 26
      },
      {
        "enrollment_id": 225,
        "course_id": 47,
        "status": "completed",
        "enrolled_at": "2025-06-06 05:46:17",
        "last_accessed_at": "2025-09-17 02:53:11",
        "checkpoint_chapter_id": 187,
        "certificate": {
          "certificate_id": 85,
          "issued_at": "2025-10-01 05:46:17",
          "certificate_code": "CERT-RFXLN11B",
          "certificate_url": "https://skillup.io/certificates/CERT-RFXLN11B"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 157,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0157@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-19 10:15:04",
    "last_online": "2024-06-18 00:22:17",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 157,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 227,
        "course_id": 26,
        "status": "active",
        "enrolled_at": "2024-04-23 02:37:02",
        "last_accessed_at": "2024-11-25 10:59:44",
        "checkpoint_chapter_id": 103,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 226,
        "course_id": 22,
        "status": "active",
        "enrolled_at": "2025-08-09 01:17:34",
        "last_accessed_at": "2025-09-04 21:21:26",
        "checkpoint_chapter_id": 85,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 158,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0158@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-28 00:59:38",
    "last_online": "2024-02-07 18:47:02",
    "country": "United Kingdom",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 158,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 228,
        "course_id": 23,
        "status": "active",
        "enrolled_at": "2025-10-26 01:55:15",
        "last_accessed_at": "2026-01-09 11:14:48",
        "checkpoint_chapter_id": 90,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 159,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0159@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-29 01:44:15",
    "last_online": "2024-07-17 18:51:12",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 159,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 230,
        "course_id": 31,
        "status": "dropped",
        "enrolled_at": "2024-05-24 19:52:32",
        "last_accessed_at": "2024-10-02 00:08:56",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 229,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2024-09-01 17:45:27",
        "last_accessed_at": "2025-11-29 21:45:39",
        "checkpoint_chapter_id": 9,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 160,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0160@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-08-30 21:42:50",
    "last_online": "2023-09-10 04:18:25",
    "country": "Canada",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 160,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 231,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2024-09-04 13:02:01",
        "last_accessed_at": "2024-11-11 00:15:23",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 86,
          "issued_at": "2024-12-05 13:02:01",
          "certificate_code": "CERT-K46CA4QE",
          "certificate_url": "https://skillup.io/certificates/CERT-K46CA4QE"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 161,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0161@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-16 23:34:19",
    "last_online": "2024-10-04 18:49:54",
    "country": "Canada",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 161,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 233,
        "course_id": 26,
        "status": "active",
        "enrolled_at": "2024-08-18 12:25:46",
        "last_accessed_at": "2025-03-06 10:50:02",
        "checkpoint_chapter_id": 102,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 232,
        "course_id": 9,
        "status": "dropped",
        "enrolled_at": "2024-10-29 04:04:24",
        "last_accessed_at": "2024-12-19 17:07:55",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 162,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0162@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-14 01:05:06",
    "last_online": "2024-02-20 20:35:40",
    "country": "Canada",
    "background": "Healthcare Administrator",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 162,
      "introduction": "Arthur Murphy is an accomplished instructor specializing in Leadership and Software Engineering, bringing a unique perspective shaped by his extensive background as a Healthcare Administrator. With deep expertise in both technical systems and organizational management, Arthur excels at equipping students with the practical skills and strategic thinking necessary to lead in today's technology-driven environment. His diverse professional experience enables him to bridge the gap between software development and business acumen, fostering well-rounded leaders prepared to tackle complex challenges.",
      "started_date": "2023-10-03",
      "last_online": "2024-09-16 14:31:04",
      "degree": "M.S. in Engineering Management",
      "institution": "University of Michigan",
      "certification": "CFA"
    },
    "enrollments": []
  },
  {
    "_id": 163,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0163@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-01 10:50:01",
    "last_online": "2024-09-08 12:17:50",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 163,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 234,
        "course_id": 30,
        "status": "active",
        "enrolled_at": "2025-11-08 02:54:41",
        "last_accessed_at": "2026-02-01 04:26:43",
        "checkpoint_chapter_id": 116,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 164,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0164@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-15 16:21:52",
    "last_online": "2023-10-08 18:13:08",
    "country": "Australia",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 164,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 235,
        "course_id": 40,
        "status": "completed",
        "enrolled_at": "2024-12-30 03:29:04",
        "last_accessed_at": "2025-04-22 06:25:35",
        "checkpoint_chapter_id": 158,
        "certificate": {
          "certificate_id": 87,
          "issued_at": "2025-03-16 03:29:04",
          "certificate_code": "CERT-LX3ELS20",
          "certificate_url": "https://skillup.io/certificates/CERT-LX3ELS20"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 165,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0165@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-16 02:24:32",
    "last_online": "2024-02-16 02:12:59",
    "country": "United Kingdom",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 165,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 236,
        "course_id": 12,
        "status": "dropped",
        "enrolled_at": "2024-08-08 15:35:16",
        "last_accessed_at": "2025-05-19 15:43:29",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 237,
        "course_id": 14,
        "status": "dropped",
        "enrolled_at": "2025-04-26 07:40:51",
        "last_accessed_at": "2025-10-03 10:28:02",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 166,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0166@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-05 14:03:14",
    "last_online": "2024-05-11 13:58:20",
    "country": "United Kingdom",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 166,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 238,
        "course_id": 41,
        "status": "active",
        "enrolled_at": "2024-12-27 19:01:19",
        "last_accessed_at": "2025-06-14 08:57:16",
        "checkpoint_chapter_id": 159,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 167,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0167@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-30 17:23:19",
    "last_online": "2024-09-25 21:59:53",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 167,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 239,
        "course_id": 4,
        "status": "dropped",
        "enrolled_at": "2024-01-27 00:43:21",
        "last_accessed_at": "2025-03-06 22:33:07",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 240,
        "course_id": 44,
        "status": "completed",
        "enrolled_at": "2025-06-10 19:15:26",
        "last_accessed_at": "2025-11-09 05:56:05",
        "checkpoint_chapter_id": 175,
        "certificate": {
          "certificate_id": 88,
          "issued_at": "2025-07-11 19:15:26",
          "certificate_code": "CERT-HQ2PHDC7",
          "certificate_url": "https://skillup.io/certificates/CERT-HQ2PHDC7"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 168,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0168@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-26 07:31:45",
    "last_online": "2024-04-07 14:29:42",
    "country": "United Kingdom",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 168,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 242,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2024-04-09 06:32:10",
        "last_accessed_at": "2024-07-11 07:37:25",
        "checkpoint_chapter_id": 24,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 241,
        "course_id": 5,
        "status": "completed",
        "enrolled_at": "2025-04-18 17:01:50",
        "last_accessed_at": "2025-11-22 18:47:33",
        "checkpoint_chapter_id": 21,
        "certificate": {
          "certificate_id": 89,
          "issued_at": "2025-07-07 17:01:50",
          "certificate_code": "CERT-TZ5PCZLT",
          "certificate_url": "https://skillup.io/certificates/CERT-TZ5PCZLT"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 169,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0169@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-12 05:23:11",
    "last_online": "2024-04-01 18:36:06",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 169,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 243,
        "course_id": 5,
        "status": "active",
        "enrolled_at": "2023-10-08 11:20:17",
        "last_accessed_at": "2026-01-26 07:46:42",
        "checkpoint_chapter_id": 19,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 244,
        "course_id": 27,
        "status": "dropped",
        "enrolled_at": "2024-12-30 23:17:29",
        "last_accessed_at": "2025-11-16 12:53:36",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 170,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0170@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-28 10:57:59",
    "last_online": "2024-01-23 03:01:31",
    "country": "India",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 170,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 245,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2023-10-01 01:56:13",
        "last_accessed_at": "2025-07-03 16:52:56",
        "checkpoint_chapter_id": 24,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 246,
        "course_id": 26,
        "status": "active",
        "enrolled_at": "2024-08-31 05:07:10",
        "last_accessed_at": "2025-06-04 20:54:05",
        "checkpoint_chapter_id": 102,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 171,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0171@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-11 00:12:26",
    "last_online": "2024-03-05 03:05:10",
    "country": "United Kingdom",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 171,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 247,
        "course_id": 29,
        "status": "active",
        "enrolled_at": "2024-05-30 02:29:41",
        "last_accessed_at": "2024-06-29 21:45:43",
        "checkpoint_chapter_id": 113,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 248,
        "course_id": 46,
        "status": "active",
        "enrolled_at": "2025-01-11 05:42:24",
        "last_accessed_at": "2025-04-10 12:28:14",
        "checkpoint_chapter_id": 180,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 172,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0172@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-24 00:54:30",
    "last_online": "2024-02-23 02:36:35",
    "country": "Canada",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 172,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 249,
        "course_id": 26,
        "status": "dropped",
        "enrolled_at": "2024-06-01 22:42:03",
        "last_accessed_at": "2025-05-30 10:55:37",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 250,
        "course_id": 47,
        "status": "dropped",
        "enrolled_at": "2024-12-04 00:54:10",
        "last_accessed_at": "2025-05-14 07:27:23",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 173,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0173@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-11 22:08:08",
    "last_online": "2024-03-06 22:57:49",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 173,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 251,
        "course_id": 9,
        "status": "active",
        "enrolled_at": "2024-07-03 14:20:58",
        "last_accessed_at": "2024-09-12 22:03:47",
        "checkpoint_chapter_id": 33,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 174,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0174@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-13 04:15:19",
    "last_online": "2024-12-14 05:17:25",
    "country": "India",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 174,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 252,
        "course_id": 46,
        "status": "active",
        "enrolled_at": "2025-05-05 16:41:25",
        "last_accessed_at": "2025-07-03 12:23:32",
        "checkpoint_chapter_id": 182,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 175,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0175@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-10 21:16:59",
    "last_online": "2023-11-17 08:26:22",
    "country": "Canada",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 175,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 254,
        "course_id": 18,
        "status": "active",
        "enrolled_at": "2025-03-25 00:05:01",
        "last_accessed_at": "2025-10-20 16:07:29",
        "checkpoint_chapter_id": 73,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 253,
        "course_id": 35,
        "status": "active",
        "enrolled_at": "2025-10-07 15:00:11",
        "last_accessed_at": "2026-01-13 06:53:41",
        "checkpoint_chapter_id": 133,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 176,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0176@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-16 13:39:37",
    "last_online": "2024-11-28 18:19:11",
    "country": "United Kingdom",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 176,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 255,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2024-06-01 12:45:55",
        "last_accessed_at": "2026-01-21 09:34:03",
        "checkpoint_chapter_id": 124,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 177,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0177@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-09-27 10:06:16",
    "last_online": "2024-02-01 20:31:02",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 177,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 256,
        "course_id": 7,
        "status": "active",
        "enrolled_at": "2023-10-04 11:50:59",
        "last_accessed_at": "2024-07-05 06:08:45",
        "checkpoint_chapter_id": 27,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 178,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0178@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-01 10:23:43",
    "last_online": "2024-11-19 12:57:42",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 178,
      "introduction": "Oscar Gilbert is an experienced instructor specializing in Product Management and Project Management courses, bringing a unique perspective shaped by his background in accounting. With a deep understanding of financial principles and operational efficiency, Oscar delivers practical, results-oriented instruction that emphasizes both strategic vision and fiscal responsibility. His courses equip students with the analytical rigor and business acumen necessary to excel in today's dynamic product and project environments.",
      "started_date": "2023-10-22",
      "last_online": "2025-08-25 00:14:38",
      "degree": "M.S. in Human-Computer Interaction",
      "institution": "Stanford University",
      "certification": "Certified Scrum Product Owner"
    },
    "enrollments": []
  },
  {
    "_id": 179,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0179@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-22 21:01:06",
    "last_online": "2024-04-16 04:38:42",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 179,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 258,
        "course_id": 35,
        "status": "completed",
        "enrolled_at": "2025-02-19 15:56:02",
        "last_accessed_at": "2025-10-20 06:33:59",
        "checkpoint_chapter_id": 136,
        "certificate": {
          "certificate_id": 90,
          "issued_at": "2025-04-04 15:56:02",
          "certificate_code": "CERT-71JX4VBW",
          "certificate_url": "https://skillup.io/certificates/CERT-71JX4VBW"
        },
        "review_id": null
      },
      {
        "enrollment_id": 257,
        "course_id": 33,
        "status": "completed",
        "enrolled_at": "2025-04-29 01:26:14",
        "last_accessed_at": "2025-05-23 00:28:14",
        "checkpoint_chapter_id": 129,
        "certificate": {
          "certificate_id": 91,
          "issued_at": "2025-06-14 01:26:14",
          "certificate_code": "CERT-TJPIBQPZ",
          "certificate_url": "https://skillup.io/certificates/CERT-TJPIBQPZ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 180,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0180@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-24 07:49:22",
    "last_online": "2024-04-15 10:00:18",
    "country": "United Kingdom",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 180,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 259,
        "course_id": 33,
        "status": "active",
        "enrolled_at": "2024-12-12 22:48:22",
        "last_accessed_at": "2025-02-18 10:15:54",
        "checkpoint_chapter_id": 127,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 181,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0181@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-23 20:36:10",
    "last_online": "2024-06-27 17:56:28",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 181,
      "introduction": "Victor Wong is an experienced instructor specializing in Leadership and Agile methodologies, bringing practical insights from his background as a Project Coordinator. With a deep understanding of dynamic team environments and project execution, Victor empowers professionals to develop their leadership capabilities and master agile frameworks that drive organizational success. His engaging teaching approach combines real-world experience with contemporary best practices, making complex concepts accessible and actionable for learners at all levels.",
      "started_date": "2023-10-31",
      "last_online": "2025-09-14 23:59:25",
      "degree": "M.S. in Data Science",
      "institution": "Duke University",
      "certification": "SAFe Agilist"
    },
    "enrollments": []
  },
  {
    "_id": 182,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0182@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-24 07:26:12",
    "last_online": "2024-01-01 09:11:56",
    "country": "Australia",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 182,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 260,
        "course_id": 36,
        "status": "active",
        "enrolled_at": "2025-11-08 12:46:26",
        "last_accessed_at": "2026-01-08 13:28:41",
        "checkpoint_chapter_id": 138,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 183,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0183@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-30 21:55:37",
    "last_online": "2024-08-13 23:28:18",
    "country": "Australia",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 183,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 262,
        "course_id": 31,
        "status": "active",
        "enrolled_at": "2024-07-27 11:19:43",
        "last_accessed_at": "2024-08-11 11:51:55",
        "checkpoint_chapter_id": 122,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 261,
        "course_id": 41,
        "status": "completed",
        "enrolled_at": "2024-10-21 16:05:17",
        "last_accessed_at": "2025-05-24 13:30:44",
        "checkpoint_chapter_id": 163,
        "certificate": {
          "certificate_id": 92,
          "issued_at": "2025-01-28 16:05:17",
          "certificate_code": "CERT-TBVA3WL8",
          "certificate_url": "https://skillup.io/certificates/CERT-TBVA3WL8"
        },
        "review_id": 27
      }
    ]
  },
  {
    "_id": 184,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0184@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-17 20:54:13",
    "last_online": "2024-07-05 06:26:53",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 184,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 263,
        "course_id": 50,
        "status": "active",
        "enrolled_at": "2026-01-29 02:34:56",
        "last_accessed_at": "2026-01-31 12:25:53",
        "checkpoint_chapter_id": 197,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 185,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0185@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-06 00:24:18",
    "last_online": "2024-01-26 19:42:36",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 185,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 264,
        "course_id": 41,
        "status": "completed",
        "enrolled_at": "2025-09-18 09:19:16",
        "last_accessed_at": "2025-10-11 11:12:03",
        "checkpoint_chapter_id": 163,
        "certificate": {
          "certificate_id": 93,
          "issued_at": "2026-01-08 09:19:16",
          "certificate_code": "CERT-UZFB87IP",
          "certificate_url": "https://skillup.io/certificates/CERT-UZFB87IP"
        },
        "review_id": 28
      }
    ]
  },
  {
    "_id": 186,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0186@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-02 06:33:40",
    "last_online": "2024-03-23 14:00:15",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 186,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 265,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2024-08-02 15:25:11",
        "last_accessed_at": "2024-10-02 02:57:35",
        "checkpoint_chapter_id": 125,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 187,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0187@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-03 02:52:38",
    "last_online": "2023-12-12 15:16:15",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 187,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 266,
        "course_id": 43,
        "status": "active",
        "enrolled_at": "2025-05-23 02:38:13",
        "last_accessed_at": "2025-12-25 17:57:36",
        "checkpoint_chapter_id": 169,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 188,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0188@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-20 16:23:45",
    "last_online": "2023-12-08 04:13:41",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 188,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 267,
        "course_id": 34,
        "status": "completed",
        "enrolled_at": "2024-09-21 13:57:35",
        "last_accessed_at": "2025-03-09 05:38:06",
        "checkpoint_chapter_id": 132,
        "certificate": {
          "certificate_id": 94,
          "issued_at": "2025-01-16 13:57:35",
          "certificate_code": "CERT-5MBLJQTB",
          "certificate_url": "https://skillup.io/certificates/CERT-5MBLJQTB"
        },
        "review_id": 29
      },
      {
        "enrollment_id": 268,
        "course_id": 20,
        "status": "active",
        "enrolled_at": "2026-01-29 23:37:59",
        "last_accessed_at": "2026-02-01 14:58:10",
        "checkpoint_chapter_id": 79,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 189,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0189@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-02 02:11:08",
    "last_online": "2024-02-05 22:27:49",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 189,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 269,
        "course_id": 50,
        "status": "completed",
        "enrolled_at": "2025-04-21 02:52:16",
        "last_accessed_at": "2025-04-23 05:09:31",
        "checkpoint_chapter_id": 197,
        "certificate": {
          "certificate_id": 95,
          "issued_at": "2025-06-15 02:52:16",
          "certificate_code": "CERT-AI6HT624",
          "certificate_url": "https://skillup.io/certificates/CERT-AI6HT624"
        },
        "review_id": null
      },
      {
        "enrollment_id": 270,
        "course_id": 34,
        "status": "dropped",
        "enrolled_at": "2025-10-11 07:23:12",
        "last_accessed_at": "2025-12-29 16:04:00",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 190,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0190@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-28 17:06:52",
    "last_online": "2024-11-23 04:29:07",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 190,
      "introduction": "Daniel Patel is an accomplished instructor specializing in Product Management and UX Design, bringing over a decade of experience from a robust background in Software Engineering. With a deep understanding of both technical implementation and user-centered design principles, he equips students with practical knowledge and industry insights to excel in today's competitive product landscape. Daniel is committed to fostering innovation and critical thinking among his students, helping them bridge the gap between engineering excellence and exceptional user experiences.",
      "started_date": "2023-11-11",
      "last_online": "2024-02-16 13:18:39",
      "degree": "MBA",
      "institution": "Northwestern University",
      "certification": "CFA"
    },
    "enrollments": []
  },
  {
    "_id": 191,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0191@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-22 03:22:00",
    "last_online": "2023-10-22 05:01:39",
    "country": "Australia",
    "background": "Operations Manager",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 191,
      "introduction": "Angus Walsh is an accomplished instructor specializing in Product Management and Software Engineering, bringing a wealth of practical expertise from his background as an Operations Manager. With a proven track record of optimizing processes and leading cross-functional teams, Angus translates real-world operational insights into engaging curriculum that prepares students for success in today's dynamic tech industry. His unique perspective bridging operations and product development equips learners with the strategic mindset and technical acumen essential for driving innovation and delivering value.",
      "started_date": "2023-10-27",
      "last_online": "2025-11-22 23:21:49",
      "degree": "M.A. in Organizational Psychology",
      "institution": "Stanford University",
      "certification": "AWS Solutions Architect"
    },
    "enrollments": []
  },
  {
    "_id": 192,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0192@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-30 14:51:35",
    "last_online": "2024-05-28 21:12:56",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 192,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 271,
        "course_id": 31,
        "status": "completed",
        "enrolled_at": "2025-03-16 10:47:40",
        "last_accessed_at": "2025-12-14 15:21:32",
        "checkpoint_chapter_id": 122,
        "certificate": {
          "certificate_id": 96,
          "issued_at": "2025-06-05 10:47:40",
          "certificate_code": "CERT-FL8ES4MV",
          "certificate_url": "https://skillup.io/certificates/CERT-FL8ES4MV"
        },
        "review_id": null
      },
      {
        "enrollment_id": 272,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2025-08-10 07:39:35",
        "last_accessed_at": "2025-10-19 11:43:36",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 97,
          "issued_at": "2025-11-14 07:39:35",
          "certificate_code": "CERT-YAED34JJ",
          "certificate_url": "https://skillup.io/certificates/CERT-YAED34JJ"
        },
        "review_id": 30
      }
    ]
  },
  {
    "_id": 193,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0193@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-13 02:21:20",
    "last_online": "2024-10-12 13:11:18",
    "country": "Canada",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 193,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 273,
        "course_id": 4,
        "status": "dropped",
        "enrolled_at": "2025-02-08 22:35:35",
        "last_accessed_at": "2025-05-17 17:55:56",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 194,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0194@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-05 03:04:13",
    "last_online": "2024-12-07 06:52:01",
    "country": "Canada",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 194,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 274,
        "course_id": 40,
        "status": "completed",
        "enrolled_at": "2025-06-10 17:57:40",
        "last_accessed_at": "2025-12-14 01:26:22",
        "checkpoint_chapter_id": 158,
        "certificate": {
          "certificate_id": 98,
          "issued_at": "2025-07-18 17:57:40",
          "certificate_code": "CERT-EDIJFOZ2",
          "certificate_url": "https://skillup.io/certificates/CERT-EDIJFOZ2"
        },
        "review_id": null
      },
      {
        "enrollment_id": 275,
        "course_id": 50,
        "status": "completed",
        "enrolled_at": "2025-08-26 23:40:42",
        "last_accessed_at": "2025-09-07 19:27:12",
        "checkpoint_chapter_id": 197,
        "certificate": {
          "certificate_id": 99,
          "issued_at": "2025-12-23 23:40:42",
          "certificate_code": "CERT-DSGWZJH5",
          "certificate_url": "https://skillup.io/certificates/CERT-DSGWZJH5"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 195,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0195@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-16 15:30:44",
    "last_online": "2024-11-14 15:16:16",
    "country": "India",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 195,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 277,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2025-05-07 11:03:28",
        "last_accessed_at": "2025-08-30 01:47:03",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 100,
          "issued_at": "2025-06-11 11:03:28",
          "certificate_code": "CERT-XKNC8CQD",
          "certificate_url": "https://skillup.io/certificates/CERT-XKNC8CQD"
        },
        "review_id": null
      },
      {
        "enrollment_id": 276,
        "course_id": 16,
        "status": "dropped",
        "enrolled_at": "2025-07-25 17:34:13",
        "last_accessed_at": "2025-08-09 08:30:07",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 196,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0196@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-27 11:41:26",
    "last_online": "2024-07-02 04:39:59",
    "country": "Canada",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 196,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 278,
        "course_id": 18,
        "status": "completed",
        "enrolled_at": "2023-11-19 06:39:24",
        "last_accessed_at": "2023-12-17 04:17:11",
        "checkpoint_chapter_id": 73,
        "certificate": {
          "certificate_id": 101,
          "issued_at": "2024-01-18 06:39:24",
          "certificate_code": "CERT-841IEQJ5",
          "certificate_url": "https://skillup.io/certificates/CERT-841IEQJ5"
        },
        "review_id": null
      },
      {
        "enrollment_id": 279,
        "course_id": 35,
        "status": "active",
        "enrolled_at": "2025-09-27 21:15:41",
        "last_accessed_at": "2025-11-05 08:13:18",
        "checkpoint_chapter_id": 133,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 197,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0197@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-24 22:28:42",
    "last_online": "2024-10-14 07:54:26",
    "country": "India",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 197,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 280,
        "course_id": 33,
        "status": "dropped",
        "enrolled_at": "2025-11-26 12:37:27",
        "last_accessed_at": "2025-12-03 12:47:27",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 198,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0198@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-21 18:53:52",
    "last_online": "2023-12-31 18:57:58",
    "country": "United Kingdom",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 198,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 281,
        "course_id": 2,
        "status": "completed",
        "enrolled_at": "2024-09-04 19:35:46",
        "last_accessed_at": "2024-12-25 22:51:34",
        "checkpoint_chapter_id": 9,
        "certificate": {
          "certificate_id": 102,
          "issued_at": "2024-11-30 19:35:46",
          "certificate_code": "CERT-44644XQQ",
          "certificate_url": "https://skillup.io/certificates/CERT-44644XQQ"
        },
        "review_id": null
      },
      {
        "enrollment_id": 282,
        "course_id": 45,
        "status": "dropped",
        "enrolled_at": "2025-07-11 23:02:50",
        "last_accessed_at": "2025-12-03 22:43:17",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 199,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0199@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-28 02:18:04",
    "last_online": "2023-11-25 13:50:17",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 199,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 284,
        "course_id": 21,
        "status": "active",
        "enrolled_at": "2024-06-27 23:10:51",
        "last_accessed_at": "2025-02-11 00:28:33",
        "checkpoint_chapter_id": 83,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 283,
        "course_id": 42,
        "status": "active",
        "enrolled_at": "2024-10-25 15:13:07",
        "last_accessed_at": "2025-11-12 15:46:19",
        "checkpoint_chapter_id": 165,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 200,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0200@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-03 22:38:42",
    "last_online": "2024-09-14 05:10:22",
    "country": "Canada",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 200,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 285,
        "course_id": 33,
        "status": "completed",
        "enrolled_at": "2025-05-07 07:02:45",
        "last_accessed_at": "2025-05-15 08:05:59",
        "checkpoint_chapter_id": 129,
        "certificate": {
          "certificate_id": 103,
          "issued_at": "2025-08-10 07:02:45",
          "certificate_code": "CERT-21SIEXLL",
          "certificate_url": "https://skillup.io/certificates/CERT-21SIEXLL"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 201,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0201@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-16 18:32:07",
    "last_online": "2024-07-14 14:58:49",
    "country": "Australia",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 201,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 286,
        "course_id": 49,
        "status": "completed",
        "enrolled_at": "2025-03-15 19:26:04",
        "last_accessed_at": "2025-05-20 10:08:04",
        "checkpoint_chapter_id": 194,
        "certificate": {
          "certificate_id": 104,
          "issued_at": "2025-05-21 19:26:04",
          "certificate_code": "CERT-CU8QLOLH",
          "certificate_url": "https://skillup.io/certificates/CERT-CU8QLOLH"
        },
        "review_id": 31
      },
      {
        "enrollment_id": 287,
        "course_id": 27,
        "status": "active",
        "enrolled_at": "2025-03-20 19:50:56",
        "last_accessed_at": "2025-07-16 16:18:25",
        "checkpoint_chapter_id": 105,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 202,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0202@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-10-31 03:09:58",
    "last_online": "2024-03-27 17:02:43",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 202,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 288,
        "course_id": 16,
        "status": "active",
        "enrolled_at": "2023-11-04 19:49:16",
        "last_accessed_at": "2025-08-30 19:51:28",
        "checkpoint_chapter_id": 62,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 203,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0203@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-23 12:43:33",
    "last_online": "2024-10-31 08:54:26",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 203,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 289,
        "course_id": 38,
        "status": "active",
        "enrolled_at": "2025-01-17 15:06:47",
        "last_accessed_at": "2025-04-29 22:46:32",
        "checkpoint_chapter_id": 148,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 204,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0204@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-19 22:11:46",
    "last_online": "2024-04-09 02:03:45",
    "country": "Canada",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 204,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 290,
        "course_id": 32,
        "status": "completed",
        "enrolled_at": "2024-06-24 11:24:00",
        "last_accessed_at": "2025-05-23 09:07:14",
        "checkpoint_chapter_id": 125,
        "certificate": {
          "certificate_id": 105,
          "issued_at": "2024-09-26 11:24:00",
          "certificate_code": "CERT-QCM1R8LM",
          "certificate_url": "https://skillup.io/certificates/CERT-QCM1R8LM"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 205,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0205@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-01 10:44:20",
    "last_online": "2024-03-18 07:18:23",
    "country": "Canada",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 205,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 291,
        "course_id": 39,
        "status": "active",
        "enrolled_at": "2025-12-20 16:00:07",
        "last_accessed_at": "2026-01-06 19:55:03",
        "checkpoint_chapter_id": 152,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 206,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0206@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-13 16:24:48",
    "last_online": "2024-12-03 15:17:27",
    "country": "United Kingdom",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 206,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 292,
        "course_id": 44,
        "status": "active",
        "enrolled_at": "2024-12-29 20:21:57",
        "last_accessed_at": "2025-12-02 16:52:02",
        "checkpoint_chapter_id": 172,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 293,
        "course_id": 16,
        "status": "completed",
        "enrolled_at": "2026-01-02 22:03:34",
        "last_accessed_at": "2026-01-07 07:37:31",
        "checkpoint_chapter_id": 65,
        "certificate": {
          "certificate_id": 106,
          "issued_at": "2026-02-27 22:03:34",
          "certificate_code": "CERT-YL1ZDGLX",
          "certificate_url": "https://skillup.io/certificates/CERT-YL1ZDGLX"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 207,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0207@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-09 02:18:05",
    "last_online": "2024-09-16 05:44:16",
    "country": "Australia",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 207,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 295,
        "course_id": 29,
        "status": "completed",
        "enrolled_at": "2024-09-09 19:22:57",
        "last_accessed_at": "2025-05-30 21:41:52",
        "checkpoint_chapter_id": 114,
        "certificate": {
          "certificate_id": 107,
          "issued_at": "2024-10-09 19:22:57",
          "certificate_code": "CERT-MYYLJJI9",
          "certificate_url": "https://skillup.io/certificates/CERT-MYYLJJI9"
        },
        "review_id": null
      },
      {
        "enrollment_id": 294,
        "course_id": 30,
        "status": "dropped",
        "enrolled_at": "2025-08-05 00:46:39",
        "last_accessed_at": "2025-09-17 20:25:31",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 208,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0208@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-28 10:10:11",
    "last_online": "2024-11-18 11:39:49",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 208,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 296,
        "course_id": 6,
        "status": "dropped",
        "enrolled_at": "2024-11-04 12:44:43",
        "last_accessed_at": "2025-10-19 02:18:31",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 297,
        "course_id": 43,
        "status": "completed",
        "enrolled_at": "2025-04-13 01:02:59",
        "last_accessed_at": "2025-12-17 11:03:46",
        "checkpoint_chapter_id": 171,
        "certificate": {
          "certificate_id": 108,
          "issued_at": "2025-07-22 01:02:59",
          "certificate_code": "CERT-2E9EQH9D",
          "certificate_url": "https://skillup.io/certificates/CERT-2E9EQH9D"
        },
        "review_id": 32
      }
    ]
  },
  {
    "_id": 209,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0209@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-05 06:53:20",
    "last_online": "2024-02-26 05:37:39",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 209,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 298,
        "course_id": 3,
        "status": "dropped",
        "enrolled_at": "2023-08-19 08:31:51",
        "last_accessed_at": "2024-12-10 10:07:26",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 210,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0210@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-13 09:53:40",
    "last_online": "2024-12-17 03:23:52",
    "country": "United States",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 210,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 299,
        "course_id": 31,
        "status": "active",
        "enrolled_at": "2024-07-11 09:35:08",
        "last_accessed_at": "2025-11-05 23:29:03",
        "checkpoint_chapter_id": 122,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 211,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0211@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-14 19:30:25",
    "last_online": "2023-12-19 06:27:23",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 211,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 300,
        "course_id": 16,
        "status": "dropped",
        "enrolled_at": "2024-07-04 22:10:53",
        "last_accessed_at": "2025-05-30 00:32:42",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 212,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0212@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-19 12:01:32",
    "last_online": "2023-12-31 01:19:06",
    "country": "United Kingdom",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 212,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 301,
        "course_id": 15,
        "status": "active",
        "enrolled_at": "2024-06-17 11:07:05",
        "last_accessed_at": "2025-09-02 05:09:53",
        "checkpoint_chapter_id": 61,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 213,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0213@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-14 23:37:22",
    "last_online": "2024-02-04 17:48:14",
    "country": "India",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 213,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 302,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2024-03-19 20:26:03",
        "last_accessed_at": "2024-07-21 01:41:07",
        "checkpoint_chapter_id": 7,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 214,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0214@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-12 05:50:13",
    "last_online": "2023-12-22 20:59:21",
    "country": "India",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 214,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 303,
        "course_id": 8,
        "status": "completed",
        "enrolled_at": "2025-02-09 09:35:24",
        "last_accessed_at": "2025-08-28 00:33:25",
        "checkpoint_chapter_id": 32,
        "certificate": {
          "certificate_id": 109,
          "issued_at": "2025-05-04 09:35:24",
          "certificate_code": "CERT-28L6GQ0T",
          "certificate_url": "https://skillup.io/certificates/CERT-28L6GQ0T"
        },
        "review_id": null
      },
      {
        "enrollment_id": 304,
        "course_id": 25,
        "status": "dropped",
        "enrolled_at": "2026-01-16 11:55:24",
        "last_accessed_at": "2026-01-27 20:07:58",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 215,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0215@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-08 04:14:44",
    "last_online": "2024-04-06 19:04:31",
    "country": "United Kingdom",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 215,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 305,
        "course_id": 13,
        "status": "dropped",
        "enrolled_at": "2024-11-05 01:09:58",
        "last_accessed_at": "2025-07-02 10:12:45",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 216,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0216@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-01 18:47:32",
    "last_online": "2024-03-10 11:28:57",
    "country": "United Kingdom",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 216,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 306,
        "course_id": 12,
        "status": "active",
        "enrolled_at": "2025-12-12 09:00:41",
        "last_accessed_at": "2025-12-25 21:18:14",
        "checkpoint_chapter_id": 45,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 217,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0217@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-25 22:28:15",
    "last_online": "2024-08-22 09:41:20",
    "country": "Canada",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 217,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 307,
        "course_id": 49,
        "status": "dropped",
        "enrolled_at": "2025-09-11 12:25:04",
        "last_accessed_at": "2025-11-30 00:44:01",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 218,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0218@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-26 20:14:04",
    "last_online": "2024-08-05 05:08:34",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 218,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 309,
        "course_id": 36,
        "status": "completed",
        "enrolled_at": "2025-08-18 08:39:40",
        "last_accessed_at": "2025-09-01 04:10:05",
        "checkpoint_chapter_id": 139,
        "certificate": {
          "certificate_id": 110,
          "issued_at": "2025-11-01 08:39:40",
          "certificate_code": "CERT-5QI2ZKKC",
          "certificate_url": "https://skillup.io/certificates/CERT-5QI2ZKKC"
        },
        "review_id": null
      },
      {
        "enrollment_id": 308,
        "course_id": 25,
        "status": "dropped",
        "enrolled_at": "2026-01-03 06:55:57",
        "last_accessed_at": "2026-01-24 02:12:35",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 219,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0219@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-11-27 08:28:26",
    "last_online": "2024-08-23 19:56:50",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 219,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 310,
        "course_id": 30,
        "status": "completed",
        "enrolled_at": "2025-02-14 19:55:17",
        "last_accessed_at": "2026-01-27 01:30:51",
        "checkpoint_chapter_id": 117,
        "certificate": {
          "certificate_id": 111,
          "issued_at": "2025-04-30 19:55:17",
          "certificate_code": "CERT-Z2Y924GX",
          "certificate_url": "https://skillup.io/certificates/CERT-Z2Y924GX"
        },
        "review_id": 33
      },
      {
        "enrollment_id": 311,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2026-01-27 08:08:38",
        "last_accessed_at": "2026-02-01 08:23:15",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 112,
          "issued_at": "2026-04-24 08:08:38",
          "certificate_code": "CERT-LUQTOGWJ",
          "certificate_url": "https://skillup.io/certificates/CERT-LUQTOGWJ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 220,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0220@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-12 05:10:59",
    "last_online": "2024-10-20 14:18:23",
    "country": "United Kingdom",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 220,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 313,
        "course_id": 17,
        "status": "active",
        "enrolled_at": "2024-08-05 15:01:34",
        "last_accessed_at": "2025-10-06 13:43:16",
        "checkpoint_chapter_id": 66,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 312,
        "course_id": 45,
        "status": "completed",
        "enrolled_at": "2025-05-30 18:53:00",
        "last_accessed_at": "2025-08-31 00:39:19",
        "checkpoint_chapter_id": 179,
        "certificate": {
          "certificate_id": 113,
          "issued_at": "2025-08-09 18:53:00",
          "certificate_code": "CERT-TOPWTQGX",
          "certificate_url": "https://skillup.io/certificates/CERT-TOPWTQGX"
        },
        "review_id": 34
      }
    ]
  },
  {
    "_id": 221,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0221@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-24 05:50:08",
    "last_online": "2024-05-28 06:43:14",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 221,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 314,
        "course_id": 47,
        "status": "active",
        "enrolled_at": "2025-03-12 13:45:02",
        "last_accessed_at": "2025-11-07 18:42:29",
        "checkpoint_chapter_id": 185,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 315,
        "course_id": 41,
        "status": "completed",
        "enrolled_at": "2025-07-18 22:40:04",
        "last_accessed_at": "2025-08-07 12:21:04",
        "checkpoint_chapter_id": 163,
        "certificate": {
          "certificate_id": 114,
          "issued_at": "2025-08-21 22:40:04",
          "certificate_code": "CERT-7O53IFK3",
          "certificate_url": "https://skillup.io/certificates/CERT-7O53IFK3"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 222,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0222@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-22 12:15:30",
    "last_online": "2024-12-13 10:19:46",
    "country": "Canada",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 222,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 316,
        "course_id": 3,
        "status": "completed",
        "enrolled_at": "2024-10-19 14:11:50",
        "last_accessed_at": "2025-08-12 10:19:54",
        "checkpoint_chapter_id": 13,
        "certificate": {
          "certificate_id": 115,
          "issued_at": "2024-12-07 14:11:50",
          "certificate_code": "CERT-XUELQDS3",
          "certificate_url": "https://skillup.io/certificates/CERT-XUELQDS3"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 223,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0223@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-18 08:38:05",
    "last_online": "2024-11-16 07:22:12",
    "country": "Canada",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 223,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 317,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2025-04-16 23:11:36",
        "last_accessed_at": "2025-05-11 22:43:06",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 116,
          "issued_at": "2025-08-09 23:11:36",
          "certificate_code": "CERT-UYWIRUXY",
          "certificate_url": "https://skillup.io/certificates/CERT-UYWIRUXY"
        },
        "review_id": 35
      },
      {
        "enrollment_id": 318,
        "course_id": 8,
        "status": "completed",
        "enrolled_at": "2025-09-04 00:52:16",
        "last_accessed_at": "2025-12-16 20:52:26",
        "checkpoint_chapter_id": 32,
        "certificate": {
          "certificate_id": 117,
          "issued_at": "2025-11-02 00:52:16",
          "certificate_code": "CERT-F2POVXCM",
          "certificate_url": "https://skillup.io/certificates/CERT-F2POVXCM"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 224,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0224@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-12 02:55:37",
    "last_online": "2024-01-19 08:51:04",
    "country": "United States",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 224,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 319,
        "course_id": 6,
        "status": "dropped",
        "enrolled_at": "2025-11-28 11:16:36",
        "last_accessed_at": "2025-12-03 21:11:03",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 225,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0225@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-26 07:38:37",
    "last_online": "2023-12-27 11:38:04",
    "country": "United Kingdom",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 225,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 320,
        "course_id": 4,
        "status": "active",
        "enrolled_at": "2025-10-10 02:27:25",
        "last_accessed_at": "2025-10-24 21:06:25",
        "checkpoint_chapter_id": 18,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 226,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0226@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-20 20:05:10",
    "last_online": "2024-05-18 22:19:16",
    "country": "Australia",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 226,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 321,
        "course_id": 29,
        "status": "dropped",
        "enrolled_at": "2024-04-10 05:37:28",
        "last_accessed_at": "2025-07-14 15:57:30",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 322,
        "course_id": 14,
        "status": "completed",
        "enrolled_at": "2025-06-30 14:05:32",
        "last_accessed_at": "2026-01-21 11:23:05",
        "checkpoint_chapter_id": 57,
        "certificate": {
          "certificate_id": 118,
          "issued_at": "2025-07-31 14:05:32",
          "certificate_code": "CERT-P9T3J2LF",
          "certificate_url": "https://skillup.io/certificates/CERT-P9T3J2LF"
        },
        "review_id": 36
      }
    ]
  },
  {
    "_id": 227,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0227@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-15 23:43:53",
    "last_online": "2024-01-28 03:36:59",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 227,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 323,
        "course_id": 7,
        "status": "dropped",
        "enrolled_at": "2025-10-03 18:45:21",
        "last_accessed_at": "2026-01-02 14:40:38",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 228,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0228@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-28 07:21:27",
    "last_online": "2024-07-21 02:54:41",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 228,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 325,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2024-05-14 23:01:38",
        "last_accessed_at": "2025-12-06 10:31:46",
        "checkpoint_chapter_id": 6,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 324,
        "course_id": 3,
        "status": "completed",
        "enrolled_at": "2024-11-28 03:55:33",
        "last_accessed_at": "2025-06-02 13:55:41",
        "checkpoint_chapter_id": 13,
        "certificate": {
          "certificate_id": 119,
          "issued_at": "2025-01-22 03:55:33",
          "certificate_code": "CERT-MUR81QCC",
          "certificate_url": "https://skillup.io/certificates/CERT-MUR81QCC"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 229,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0229@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-02 04:53:47",
    "last_online": "2024-05-09 04:29:54",
    "country": "United States",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 229,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 326,
        "course_id": 10,
        "status": "active",
        "enrolled_at": "2026-01-14 20:32:09",
        "last_accessed_at": "2026-01-15 21:20:48",
        "checkpoint_chapter_id": 40,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 230,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0230@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-20 09:45:42",
    "last_online": "2025-01-19 22:54:19",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 230,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 327,
        "course_id": 13,
        "status": "completed",
        "enrolled_at": "2024-01-14 12:33:06",
        "last_accessed_at": "2024-07-31 11:36:34",
        "checkpoint_chapter_id": 53,
        "certificate": {
          "certificate_id": 120,
          "issued_at": "2024-04-08 12:33:06",
          "certificate_code": "CERT-CRXO7HMW",
          "certificate_url": "https://skillup.io/certificates/CERT-CRXO7HMW"
        },
        "review_id": 37
      }
    ]
  },
  {
    "_id": 231,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0231@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-08 17:00:23",
    "last_online": "2024-06-22 03:25:38",
    "country": "India",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 231,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 329,
        "course_id": 2,
        "status": "dropped",
        "enrolled_at": "2024-01-24 07:21:36",
        "last_accessed_at": "2024-04-17 18:33:37",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 328,
        "course_id": 49,
        "status": "active",
        "enrolled_at": "2025-12-13 16:38:26",
        "last_accessed_at": "2025-12-20 14:44:42",
        "checkpoint_chapter_id": 193,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 232,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0232@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-31 23:59:12",
    "last_online": "2024-05-16 10:57:22",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 232,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 330,
        "course_id": 38,
        "status": "completed",
        "enrolled_at": "2026-01-09 13:38:32",
        "last_accessed_at": "2026-01-22 12:48:09",
        "checkpoint_chapter_id": 149,
        "certificate": {
          "certificate_id": 121,
          "issued_at": "2026-02-08 13:38:32",
          "certificate_code": "CERT-7AT74IZH",
          "certificate_url": "https://skillup.io/certificates/CERT-7AT74IZH"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 233,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0233@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-01 19:50:57",
    "last_online": "2024-08-14 23:24:57",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 233,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 331,
        "course_id": 8,
        "status": "completed",
        "enrolled_at": "2025-03-11 04:03:44",
        "last_accessed_at": "2025-04-18 01:46:18",
        "checkpoint_chapter_id": 32,
        "certificate": {
          "certificate_id": 122,
          "issued_at": "2025-06-09 04:03:44",
          "certificate_code": "CERT-LGNENYEP",
          "certificate_url": "https://skillup.io/certificates/CERT-LGNENYEP"
        },
        "review_id": 38
      }
    ]
  },
  {
    "_id": 234,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0234@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-02 14:10:48",
    "last_online": "2024-04-20 19:55:18",
    "country": "Canada",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 234,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 332,
        "course_id": 29,
        "status": "dropped",
        "enrolled_at": "2024-10-13 16:00:58",
        "last_accessed_at": "2025-05-16 03:49:13",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 333,
        "course_id": 47,
        "status": "active",
        "enrolled_at": "2025-11-10 05:33:52",
        "last_accessed_at": "2025-11-25 06:44:43",
        "checkpoint_chapter_id": 185,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 235,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0235@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-24 13:03:33",
    "last_online": "2024-06-20 18:50:25",
    "country": "United Kingdom",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 235,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 334,
        "course_id": 44,
        "status": "active",
        "enrolled_at": "2025-05-14 07:54:52",
        "last_accessed_at": "2025-07-14 22:05:35",
        "checkpoint_chapter_id": 173,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 335,
        "course_id": 19,
        "status": "active",
        "enrolled_at": "2025-11-25 23:42:43",
        "last_accessed_at": "2025-12-17 15:10:48",
        "checkpoint_chapter_id": 77,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 236,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0236@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-01 13:41:35",
    "last_online": "2024-03-02 07:34:00",
    "country": "India",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 236,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 337,
        "course_id": 33,
        "status": "active",
        "enrolled_at": "2024-07-09 17:08:05",
        "last_accessed_at": "2025-10-15 06:50:15",
        "checkpoint_chapter_id": 128,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 336,
        "course_id": 49,
        "status": "active",
        "enrolled_at": "2025-09-09 07:48:39",
        "last_accessed_at": "2026-01-09 09:36:49",
        "checkpoint_chapter_id": 193,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 237,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0237@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-16 07:43:45",
    "last_online": "2024-10-19 12:47:00",
    "country": "United Kingdom",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 237,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 338,
        "course_id": 6,
        "status": "completed",
        "enrolled_at": "2024-05-20 23:27:55",
        "last_accessed_at": "2025-06-19 22:02:30",
        "checkpoint_chapter_id": 24,
        "certificate": {
          "certificate_id": 123,
          "issued_at": "2024-07-28 23:27:55",
          "certificate_code": "CERT-BYXZSC2W",
          "certificate_url": "https://skillup.io/certificates/CERT-BYXZSC2W"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 238,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0238@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-01 01:36:41",
    "last_online": "2024-05-17 02:41:55",
    "country": "United Kingdom",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 238,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 339,
        "course_id": 27,
        "status": "active",
        "enrolled_at": "2024-09-04 09:36:08",
        "last_accessed_at": "2025-08-16 12:02:16",
        "checkpoint_chapter_id": 104,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 340,
        "course_id": 8,
        "status": "active",
        "enrolled_at": "2024-09-24 19:41:18",
        "last_accessed_at": "2025-05-06 04:33:30",
        "checkpoint_chapter_id": 29,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 239,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0239@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-22 10:20:07",
    "last_online": "2024-08-10 21:41:40",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 239,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 341,
        "course_id": 11,
        "status": "dropped",
        "enrolled_at": "2024-02-11 02:14:09",
        "last_accessed_at": "2024-09-25 06:58:07",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 342,
        "course_id": 20,
        "status": "completed",
        "enrolled_at": "2025-03-01 22:33:28",
        "last_accessed_at": "2025-12-25 17:14:58",
        "checkpoint_chapter_id": 80,
        "certificate": {
          "certificate_id": 124,
          "issued_at": "2025-05-03 22:33:28",
          "certificate_code": "CERT-E1FO8BQY",
          "certificate_url": "https://skillup.io/certificates/CERT-E1FO8BQY"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 240,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0240@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2023-12-29 04:51:51",
    "last_online": "2024-01-31 21:38:22",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 240,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 343,
        "course_id": 45,
        "status": "active",
        "enrolled_at": "2025-02-06 08:00:00",
        "last_accessed_at": "2025-09-11 05:04:17",
        "checkpoint_chapter_id": 176,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 344,
        "course_id": 26,
        "status": "active",
        "enrolled_at": "2025-03-03 03:50:48",
        "last_accessed_at": "2025-11-11 01:12:13",
        "checkpoint_chapter_id": 102,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 241,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0241@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-09 16:37:56",
    "last_online": "2024-12-23 20:21:47",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 241,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 345,
        "course_id": 1,
        "status": "completed",
        "enrolled_at": "2024-08-05 08:55:25",
        "last_accessed_at": "2025-04-07 11:54:38",
        "checkpoint_chapter_id": 4,
        "certificate": {
          "certificate_id": 125,
          "issued_at": "2024-10-05 08:55:25",
          "certificate_code": "CERT-E61QFNYC",
          "certificate_url": "https://skillup.io/certificates/CERT-E61QFNYC"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 242,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0242@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-24 19:36:52",
    "last_online": "2024-12-24 18:33:42",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 242,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 347,
        "course_id": 21,
        "status": "active",
        "enrolled_at": "2024-04-22 17:02:44",
        "last_accessed_at": "2025-07-24 08:53:21",
        "checkpoint_chapter_id": 83,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 346,
        "course_id": 18,
        "status": "active",
        "enrolled_at": "2025-07-13 22:22:02",
        "last_accessed_at": "2026-01-08 00:13:06",
        "checkpoint_chapter_id": 69,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 243,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0243@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-01 06:09:34",
    "last_online": "2024-09-07 20:30:52",
    "country": "United Kingdom",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 243,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 348,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2025-04-06 22:45:49",
        "last_accessed_at": "2025-07-29 20:47:23",
        "checkpoint_chapter_id": 124,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 244,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0244@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-21 07:34:34",
    "last_online": "2024-12-25 12:14:38",
    "country": "Australia",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 244,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 349,
        "course_id": 10,
        "status": "completed",
        "enrolled_at": "2026-02-01 11:14:52",
        "last_accessed_at": "2026-02-01 19:58:12",
        "checkpoint_chapter_id": 40,
        "certificate": {
          "certificate_id": 126,
          "issued_at": "2026-03-16 11:14:52",
          "certificate_code": "CERT-VSZEW36X",
          "certificate_url": "https://skillup.io/certificates/CERT-VSZEW36X"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 245,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0245@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-25 12:42:24",
    "last_online": "2024-03-02 21:22:38",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 245,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 350,
        "course_id": 9,
        "status": "completed",
        "enrolled_at": "2025-02-17 18:42:15",
        "last_accessed_at": "2025-10-01 07:32:06",
        "checkpoint_chapter_id": 36,
        "certificate": {
          "certificate_id": 127,
          "issued_at": "2025-06-09 18:42:15",
          "certificate_code": "CERT-H5QRIEEJ",
          "certificate_url": "https://skillup.io/certificates/CERT-H5QRIEEJ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 246,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0246@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-27 12:51:42",
    "last_online": "2024-04-06 22:28:35",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 246,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 351,
        "course_id": 4,
        "status": "active",
        "enrolled_at": "2024-12-15 18:00:09",
        "last_accessed_at": "2025-05-03 01:45:03",
        "checkpoint_chapter_id": 17,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 247,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0247@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-11 00:38:48",
    "last_online": "2024-09-03 08:24:47",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 247,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 353,
        "course_id": 15,
        "status": "active",
        "enrolled_at": "2024-08-09 00:07:04",
        "last_accessed_at": "2024-11-09 13:42:53",
        "checkpoint_chapter_id": 61,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 352,
        "course_id": 47,
        "status": "completed",
        "enrolled_at": "2025-11-01 07:58:46",
        "last_accessed_at": "2025-11-17 10:42:12",
        "checkpoint_chapter_id": 187,
        "certificate": {
          "certificate_id": 128,
          "issued_at": "2026-02-17 07:58:46",
          "certificate_code": "CERT-KVCZRT37",
          "certificate_url": "https://skillup.io/certificates/CERT-KVCZRT37"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 248,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0248@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-10 17:08:32",
    "last_online": "2024-11-26 08:22:03",
    "country": "Canada",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 248,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 354,
        "course_id": 19,
        "status": "active",
        "enrolled_at": "2024-06-24 11:02:05",
        "last_accessed_at": "2025-01-16 04:24:28",
        "checkpoint_chapter_id": 75,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 249,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0249@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-02 13:19:19",
    "last_online": "2024-05-10 09:09:09",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 249,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 355,
        "course_id": 7,
        "status": "completed",
        "enrolled_at": "2023-08-07 04:20:54",
        "last_accessed_at": "2025-03-18 18:23:22",
        "checkpoint_chapter_id": 27,
        "certificate": {
          "certificate_id": 129,
          "issued_at": "2023-11-12 04:20:54",
          "certificate_code": "CERT-HMITPB3G",
          "certificate_url": "https://skillup.io/certificates/CERT-HMITPB3G"
        },
        "review_id": null
      },
      {
        "enrollment_id": 356,
        "course_id": 21,
        "status": "completed",
        "enrolled_at": "2025-07-08 06:51:46",
        "last_accessed_at": "2025-08-11 02:12:00",
        "checkpoint_chapter_id": 84,
        "certificate": {
          "certificate_id": 130,
          "issued_at": "2025-09-17 06:51:46",
          "certificate_code": "CERT-ZB6YDSFG",
          "certificate_url": "https://skillup.io/certificates/CERT-ZB6YDSFG"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 250,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0250@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-07 12:14:13",
    "last_online": "2024-07-04 13:14:24",
    "country": "United States",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 250,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 357,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2025-10-31 22:34:49",
        "last_accessed_at": "2025-12-19 17:23:53",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 131,
          "issued_at": "2026-02-21 22:34:49",
          "certificate_code": "CERT-7OSUBT2X",
          "certificate_url": "https://skillup.io/certificates/CERT-7OSUBT2X"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 251,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0251@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-13 03:10:46",
    "last_online": "2024-04-03 19:52:33",
    "country": "Canada",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 251,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 358,
        "course_id": 44,
        "status": "completed",
        "enrolled_at": "2025-01-14 01:04:20",
        "last_accessed_at": "2025-06-13 13:26:14",
        "checkpoint_chapter_id": 175,
        "certificate": {
          "certificate_id": 132,
          "issued_at": "2025-03-03 01:04:20",
          "certificate_code": "CERT-YQBUFB3O",
          "certificate_url": "https://skillup.io/certificates/CERT-YQBUFB3O"
        },
        "review_id": 39
      },
      {
        "enrollment_id": 359,
        "course_id": 35,
        "status": "active",
        "enrolled_at": "2025-12-07 05:25:59",
        "last_accessed_at": "2025-12-08 22:36:33",
        "checkpoint_chapter_id": 136,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 252,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0252@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-19 12:07:59",
    "last_online": "2024-04-19 12:58:19",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 252,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 360,
        "course_id": 39,
        "status": "active",
        "enrolled_at": "2025-12-21 06:39:35",
        "last_accessed_at": "2026-01-09 15:11:18",
        "checkpoint_chapter_id": 150,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 253,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0253@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-30 22:14:53",
    "last_online": "2024-07-07 10:30:07",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 253,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 361,
        "course_id": 19,
        "status": "completed",
        "enrolled_at": "2025-07-14 09:14:17",
        "last_accessed_at": "2025-11-24 08:34:25",
        "checkpoint_chapter_id": 77,
        "certificate": {
          "certificate_id": 133,
          "issued_at": "2025-11-02 09:14:17",
          "certificate_code": "CERT-8D35DGP9",
          "certificate_url": "https://skillup.io/certificates/CERT-8D35DGP9"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 254,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0254@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-12 22:57:34",
    "last_online": "2024-05-12 22:27:42",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 254,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 362,
        "course_id": 36,
        "status": "dropped",
        "enrolled_at": "2024-11-18 05:08:06",
        "last_accessed_at": "2025-02-07 22:20:40",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 255,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0255@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-06 05:07:38",
    "last_online": "2024-07-06 23:50:44",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 255,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 363,
        "course_id": 17,
        "status": "dropped",
        "enrolled_at": "2023-12-13 21:19:47",
        "last_accessed_at": "2026-01-23 13:29:54",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 364,
        "course_id": 38,
        "status": "completed",
        "enrolled_at": "2025-10-05 14:22:41",
        "last_accessed_at": "2026-01-05 13:09:21",
        "checkpoint_chapter_id": 149,
        "certificate": {
          "certificate_id": 134,
          "issued_at": "2025-11-17 14:22:41",
          "certificate_code": "CERT-3TZCJ6CD",
          "certificate_url": "https://skillup.io/certificates/CERT-3TZCJ6CD"
        },
        "review_id": 40
      }
    ]
  },
  {
    "_id": 256,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0256@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-31 01:47:35",
    "last_online": "2024-08-15 05:55:12",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 256,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 366,
        "course_id": 17,
        "status": "dropped",
        "enrolled_at": "2024-03-25 07:18:16",
        "last_accessed_at": "2024-05-08 07:12:52",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 365,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2024-11-15 03:05:32",
        "last_accessed_at": "2025-03-25 05:02:08",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 135,
          "issued_at": "2025-01-02 03:05:32",
          "certificate_code": "CERT-IHRNEM5P",
          "certificate_url": "https://skillup.io/certificates/CERT-IHRNEM5P"
        },
        "review_id": 41
      }
    ]
  },
  {
    "_id": 257,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0257@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-18 07:37:36",
    "last_online": "2024-06-18 05:37:16",
    "country": "India",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 257,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 368,
        "course_id": 47,
        "status": "active",
        "enrolled_at": "2025-08-08 07:34:34",
        "last_accessed_at": "2025-10-04 15:55:07",
        "checkpoint_chapter_id": 187,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 367,
        "course_id": 41,
        "status": "active",
        "enrolled_at": "2025-10-24 18:24:36",
        "last_accessed_at": "2025-11-20 11:45:19",
        "checkpoint_chapter_id": 159,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 258,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0258@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-26 23:04:34",
    "last_online": "2024-05-02 16:04:02",
    "country": "Canada",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 258,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 369,
        "course_id": 37,
        "status": "dropped",
        "enrolled_at": "2025-01-10 07:13:48",
        "last_accessed_at": "2025-12-29 00:06:13",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 259,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0259@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-12 09:23:47",
    "last_online": "2024-05-18 01:50:57",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 259,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 370,
        "course_id": 10,
        "status": "active",
        "enrolled_at": "2023-11-10 19:26:02",
        "last_accessed_at": "2025-12-18 05:59:44",
        "checkpoint_chapter_id": 37,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 260,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0260@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-05 09:28:25",
    "last_online": "2024-07-23 20:49:30",
    "country": "Canada",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 260,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 371,
        "course_id": 9,
        "status": "completed",
        "enrolled_at": "2024-12-25 11:35:55",
        "last_accessed_at": "2025-08-16 09:21:53",
        "checkpoint_chapter_id": 36,
        "certificate": {
          "certificate_id": 136,
          "issued_at": "2025-03-13 11:35:55",
          "certificate_code": "CERT-SORI47MH",
          "certificate_url": "https://skillup.io/certificates/CERT-SORI47MH"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 261,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0261@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-24 14:45:42",
    "last_online": "2024-09-28 13:18:09",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 261,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 372,
        "course_id": 41,
        "status": "active",
        "enrolled_at": "2025-01-15 06:06:59",
        "last_accessed_at": "2026-01-06 08:14:53",
        "checkpoint_chapter_id": 159,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 262,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0262@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-17 01:35:32",
    "last_online": "2025-01-19 20:01:42",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 262,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 373,
        "course_id": 34,
        "status": "active",
        "enrolled_at": "2025-10-08 18:33:07",
        "last_accessed_at": "2026-01-02 14:07:49",
        "checkpoint_chapter_id": 132,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 263,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0263@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-01-30 23:44:58",
    "last_online": "2024-06-08 10:22:54",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 263,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 374,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2024-12-29 05:52:55",
        "last_accessed_at": "2025-06-07 09:45:00",
        "checkpoint_chapter_id": 125,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 375,
        "course_id": 29,
        "status": "active",
        "enrolled_at": "2025-05-27 22:38:57",
        "last_accessed_at": "2025-06-10 05:59:51",
        "checkpoint_chapter_id": 112,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 264,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0264@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-11 13:54:39",
    "last_online": "2024-11-18 00:27:12",
    "country": "Canada",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 264,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 376,
        "course_id": 18,
        "status": "completed",
        "enrolled_at": "2024-03-19 14:43:06",
        "last_accessed_at": "2025-08-11 11:04:49",
        "checkpoint_chapter_id": 73,
        "certificate": {
          "certificate_id": 137,
          "issued_at": "2024-05-21 14:43:06",
          "certificate_code": "CERT-WF1R97D9",
          "certificate_url": "https://skillup.io/certificates/CERT-WF1R97D9"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 265,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0265@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-29 11:09:16",
    "last_online": "2024-04-05 22:05:42",
    "country": "Canada",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 265,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 377,
        "course_id": 44,
        "status": "completed",
        "enrolled_at": "2025-03-28 01:44:24",
        "last_accessed_at": "2025-11-15 02:54:11",
        "checkpoint_chapter_id": 175,
        "certificate": {
          "certificate_id": 138,
          "issued_at": "2025-07-06 01:44:24",
          "certificate_code": "CERT-SKSRG6RT",
          "certificate_url": "https://skillup.io/certificates/CERT-SKSRG6RT"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 266,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0266@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-20 06:47:29",
    "last_online": "2024-03-01 23:43:21",
    "country": "Canada",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 266,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 378,
        "course_id": 18,
        "status": "completed",
        "enrolled_at": "2025-02-28 11:12:47",
        "last_accessed_at": "2025-09-17 11:18:26",
        "checkpoint_chapter_id": 73,
        "certificate": {
          "certificate_id": 139,
          "issued_at": "2025-06-09 11:12:47",
          "certificate_code": "CERT-DBHKQL5B",
          "certificate_url": "https://skillup.io/certificates/CERT-DBHKQL5B"
        },
        "review_id": 42
      }
    ]
  },
  {
    "_id": 267,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0267@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-19 02:02:10",
    "last_online": "2024-09-24 13:16:45",
    "country": "India",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 267,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 379,
        "course_id": 11,
        "status": "completed",
        "enrolled_at": "2024-12-30 18:17:59",
        "last_accessed_at": "2025-03-01 15:13:44",
        "checkpoint_chapter_id": 44,
        "certificate": {
          "certificate_id": 140,
          "issued_at": "2025-03-10 18:17:59",
          "certificate_code": "CERT-409FI3AJ",
          "certificate_url": "https://skillup.io/certificates/CERT-409FI3AJ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 268,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0268@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-22 05:28:50",
    "last_online": "2025-01-15 10:02:08",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 268,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 380,
        "course_id": 18,
        "status": "active",
        "enrolled_at": "2024-11-04 18:45:33",
        "last_accessed_at": "2025-05-20 07:14:38",
        "checkpoint_chapter_id": 71,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 269,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0269@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-14 06:25:35",
    "last_online": "2024-05-22 22:20:58",
    "country": "United States",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 269,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 381,
        "course_id": 34,
        "status": "active",
        "enrolled_at": "2025-10-04 22:37:56",
        "last_accessed_at": "2025-12-25 22:11:51",
        "checkpoint_chapter_id": 131,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 270,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0270@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-03 12:43:35",
    "last_online": "2024-09-25 02:22:55",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 270,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 383,
        "course_id": 44,
        "status": "completed",
        "enrolled_at": "2025-04-12 08:39:03",
        "last_accessed_at": "2025-09-13 18:22:35",
        "checkpoint_chapter_id": 175,
        "certificate": {
          "certificate_id": 141,
          "issued_at": "2025-06-05 08:39:03",
          "certificate_code": "CERT-WBYVK8VX",
          "certificate_url": "https://skillup.io/certificates/CERT-WBYVK8VX"
        },
        "review_id": null
      },
      {
        "enrollment_id": 382,
        "course_id": 40,
        "status": "completed",
        "enrolled_at": "2025-08-27 03:47:30",
        "last_accessed_at": "2025-09-12 04:26:58",
        "checkpoint_chapter_id": 158,
        "certificate": {
          "certificate_id": 142,
          "issued_at": "2025-11-27 03:47:30",
          "certificate_code": "CERT-MCIQXB8D",
          "certificate_url": "https://skillup.io/certificates/CERT-MCIQXB8D"
        },
        "review_id": 43
      }
    ]
  },
  {
    "_id": 271,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0271@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-15 15:28:35",
    "last_online": "2024-10-28 13:54:08",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 271,
      "introduction": "Autumn Ryan is an experienced instructor specializing in Leadership and Communication courses, bringing a wealth of practical knowledge from a background as a consultant. With a proven track record of developing high-impact training programs, Autumn equips students with essential skills for navigating complex organizational dynamics and fostering meaningful workplace relationships. Her engaging teaching style and real-world insights create a dynamic learning environment where professionals can build confidence in their leadership capabilities and communication effectiveness.",
      "started_date": "2024-02-25",
      "last_online": "2025-03-13 14:29:15",
      "degree": "M.S. in Engineering Management",
      "institution": "Northwestern University",
      "certification": "SAFe Agilist"
    },
    "enrollments": []
  },
  {
    "_id": 272,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0272@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-25 11:35:04",
    "last_online": "2024-09-21 19:39:45",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 272,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 384,
        "course_id": 41,
        "status": "completed",
        "enrolled_at": "2025-05-23 06:13:01",
        "last_accessed_at": "2025-05-29 00:55:18",
        "checkpoint_chapter_id": 163,
        "certificate": {
          "certificate_id": 143,
          "issued_at": "2025-09-11 06:13:01",
          "certificate_code": "CERT-F4JEOO1P",
          "certificate_url": "https://skillup.io/certificates/CERT-F4JEOO1P"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 273,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0273@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-10 05:03:49",
    "last_online": "2024-12-20 08:22:23",
    "country": "Australia",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 273,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 386,
        "course_id": 1,
        "status": "dropped",
        "enrolled_at": "2023-08-21 10:56:38",
        "last_accessed_at": "2025-01-28 05:16:15",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 385,
        "course_id": 7,
        "status": "active",
        "enrolled_at": "2024-12-11 21:49:30",
        "last_accessed_at": "2025-11-10 18:05:28",
        "checkpoint_chapter_id": 25,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 274,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0274@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-14 23:56:16",
    "last_online": "2024-05-11 17:55:49",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 274,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 388,
        "course_id": 24,
        "status": "active",
        "enrolled_at": "2024-03-20 19:04:32",
        "last_accessed_at": "2025-02-12 23:24:05",
        "checkpoint_chapter_id": 95,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 387,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2025-06-01 12:55:11",
        "last_accessed_at": "2025-09-23 16:39:28",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 144,
          "issued_at": "2025-08-21 12:55:11",
          "certificate_code": "CERT-8Y082N3B",
          "certificate_url": "https://skillup.io/certificates/CERT-8Y082N3B"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 275,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0275@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-28 19:06:37",
    "last_online": "2024-12-25 01:02:45",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 275,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 389,
        "course_id": 24,
        "status": "completed",
        "enrolled_at": "2025-10-18 00:21:19",
        "last_accessed_at": "2025-11-18 04:40:29",
        "checkpoint_chapter_id": 95,
        "certificate": {
          "certificate_id": 145,
          "issued_at": "2026-01-07 00:21:19",
          "certificate_code": "CERT-P0MUZKJL",
          "certificate_url": "https://skillup.io/certificates/CERT-P0MUZKJL"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 276,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0276@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-12 08:16:35",
    "last_online": "2024-09-09 04:00:27",
    "country": "United Kingdom",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 276,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 390,
        "course_id": 8,
        "status": "dropped",
        "enrolled_at": "2023-11-10 18:17:54",
        "last_accessed_at": "2024-03-11 14:13:48",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 391,
        "course_id": 5,
        "status": "active",
        "enrolled_at": "2025-03-18 13:51:04",
        "last_accessed_at": "2025-11-29 00:58:43",
        "checkpoint_chapter_id": 19,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 277,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0277@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-29 05:47:29",
    "last_online": "2024-04-21 12:21:47",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 277,
      "introduction": "Walter Hernandez is an accomplished instructor specializing in Leadership and Communication courses, bringing years of practical experience and pedagogical expertise to the classroom. With a strong background in education, he is dedicated to developing students' critical thinking and interpersonal skills through dynamic, real-world applications. His engaging teaching style and commitment to student success make him an invaluable resource for professionals seeking to enhance their leadership capabilities.",
      "started_date": "2024-03-01",
      "last_online": "2025-05-02 03:17:20",
      "degree": "M.S. in Engineering Management",
      "institution": "Stanford University",
      "certification": "SHRM-SCP"
    },
    "enrollments": []
  },
  {
    "_id": 278,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0278@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-29 17:58:47",
    "last_online": "2024-11-05 11:10:22",
    "country": "Canada",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 278,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 392,
        "course_id": 19,
        "status": "completed",
        "enrolled_at": "2023-12-15 16:53:06",
        "last_accessed_at": "2025-03-12 08:53:53",
        "checkpoint_chapter_id": 77,
        "certificate": {
          "certificate_id": 146,
          "issued_at": "2024-01-31 16:53:06",
          "certificate_code": "CERT-K37LC40Q",
          "certificate_url": "https://skillup.io/certificates/CERT-K37LC40Q"
        },
        "review_id": null
      },
      {
        "enrollment_id": 393,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2024-05-27 20:20:18",
        "last_accessed_at": "2024-11-26 22:40:48",
        "checkpoint_chapter_id": 5,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 279,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0279@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-02-23 23:29:02",
    "last_online": "2024-12-02 07:42:54",
    "country": "Australia",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 279,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 394,
        "course_id": 32,
        "status": "completed",
        "enrolled_at": "2024-11-09 07:21:41",
        "last_accessed_at": "2025-01-26 04:58:56",
        "checkpoint_chapter_id": 125,
        "certificate": {
          "certificate_id": 147,
          "issued_at": "2025-02-09 07:21:41",
          "certificate_code": "CERT-OHLSOB9D",
          "certificate_url": "https://skillup.io/certificates/CERT-OHLSOB9D"
        },
        "review_id": 44
      }
    ]
  },
  {
    "_id": 280,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0280@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-09 21:51:47",
    "last_online": "2024-06-13 12:56:57",
    "country": "United Kingdom",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 280,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 395,
        "course_id": 15,
        "status": "active",
        "enrolled_at": "2025-04-29 03:15:41",
        "last_accessed_at": "2025-05-07 22:59:17",
        "checkpoint_chapter_id": 58,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 281,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0281@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-08 04:00:04",
    "last_online": "2024-05-18 17:41:56",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 281,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 396,
        "course_id": 10,
        "status": "active",
        "enrolled_at": "2025-07-06 20:39:25",
        "last_accessed_at": "2025-10-06 05:00:54",
        "checkpoint_chapter_id": 39,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 282,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0282@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-06 03:53:50",
    "last_online": "2024-08-04 01:31:47",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 282,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 397,
        "course_id": 33,
        "status": "completed",
        "enrolled_at": "2025-10-28 04:41:52",
        "last_accessed_at": "2026-01-20 18:51:16",
        "checkpoint_chapter_id": 129,
        "certificate": {
          "certificate_id": 148,
          "issued_at": "2026-01-08 04:41:52",
          "certificate_code": "CERT-GTD6L1U8",
          "certificate_url": "https://skillup.io/certificates/CERT-GTD6L1U8"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 283,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0283@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-16 12:51:45",
    "last_online": "2024-10-12 02:28:33",
    "country": "Canada",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 283,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 398,
        "course_id": 9,
        "status": "completed",
        "enrolled_at": "2024-12-09 11:14:00",
        "last_accessed_at": "2026-01-19 22:50:01",
        "checkpoint_chapter_id": 36,
        "certificate": {
          "certificate_id": 149,
          "issued_at": "2025-02-09 11:14:00",
          "certificate_code": "CERT-0XXJWSQD",
          "certificate_url": "https://skillup.io/certificates/CERT-0XXJWSQD"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 284,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0284@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-17 02:44:57",
    "last_online": "2024-07-11 00:41:30",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 284,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 399,
        "course_id": 34,
        "status": "dropped",
        "enrolled_at": "2024-10-13 01:16:35",
        "last_accessed_at": "2024-12-02 13:45:42",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 285,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0285@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-05 19:14:30",
    "last_online": "2024-09-27 12:48:27",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 285,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 400,
        "course_id": 11,
        "status": "completed",
        "enrolled_at": "2024-08-27 06:31:30",
        "last_accessed_at": "2025-12-02 09:34:03",
        "checkpoint_chapter_id": 44,
        "certificate": {
          "certificate_id": 150,
          "issued_at": "2024-11-14 06:31:30",
          "certificate_code": "CERT-3L9Z7G82",
          "certificate_url": "https://skillup.io/certificates/CERT-3L9Z7G82"
        },
        "review_id": 45
      }
    ]
  },
  {
    "_id": 286,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0286@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-01 05:02:27",
    "last_online": "2024-07-22 02:05:04",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 286,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 401,
        "course_id": 47,
        "status": "active",
        "enrolled_at": "2024-11-29 18:19:53",
        "last_accessed_at": "2025-04-03 16:31:06",
        "checkpoint_chapter_id": 185,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 287,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0287@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-30 13:56:54",
    "last_online": "2024-09-01 05:57:02",
    "country": "Canada",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 287,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 402,
        "course_id": 21,
        "status": "dropped",
        "enrolled_at": "2024-08-21 23:02:12",
        "last_accessed_at": "2025-01-23 09:10:19",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 288,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0288@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-29 03:43:54",
    "last_online": "2024-11-17 16:57:58",
    "country": "United Kingdom",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 288,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 404,
        "course_id": 22,
        "status": "active",
        "enrolled_at": "2024-10-15 22:47:37",
        "last_accessed_at": "2025-12-17 11:16:06",
        "checkpoint_chapter_id": 85,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 403,
        "course_id": 43,
        "status": "active",
        "enrolled_at": "2024-11-22 03:13:36",
        "last_accessed_at": "2025-03-28 10:54:06",
        "checkpoint_chapter_id": 169,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 289,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0289@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-02 02:58:14",
    "last_online": "2024-12-22 13:22:31",
    "country": "United Kingdom",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 289,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 405,
        "course_id": 26,
        "status": "active",
        "enrolled_at": "2025-11-22 12:19:59",
        "last_accessed_at": "2026-01-21 21:37:29",
        "checkpoint_chapter_id": 103,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 290,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0290@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-05 20:19:14",
    "last_online": "2024-12-05 00:22:06",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 290,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 406,
        "course_id": 39,
        "status": "completed",
        "enrolled_at": "2024-09-20 03:15:47",
        "last_accessed_at": "2025-02-12 13:17:34",
        "checkpoint_chapter_id": 153,
        "certificate": {
          "certificate_id": 151,
          "issued_at": "2024-11-19 03:15:47",
          "certificate_code": "CERT-6BF0Z53B",
          "certificate_url": "https://skillup.io/certificates/CERT-6BF0Z53B"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 291,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0291@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-30 04:20:07",
    "last_online": "2024-07-16 07:06:42",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 291,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 407,
        "course_id": 26,
        "status": "completed",
        "enrolled_at": "2024-09-25 22:00:52",
        "last_accessed_at": "2025-04-19 05:59:48",
        "checkpoint_chapter_id": 103,
        "certificate": {
          "certificate_id": 152,
          "issued_at": "2024-12-20 22:00:52",
          "certificate_code": "CERT-H28CQYKG",
          "certificate_url": "https://skillup.io/certificates/CERT-H28CQYKG"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 292,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0292@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-21 19:05:07",
    "last_online": "2024-07-24 23:27:45",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 292,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 408,
        "course_id": 7,
        "status": "completed",
        "enrolled_at": "2024-03-20 23:59:59",
        "last_accessed_at": "2025-08-05 23:27:23",
        "checkpoint_chapter_id": 27,
        "certificate": {
          "certificate_id": 153,
          "issued_at": "2024-05-14 23:59:59",
          "certificate_code": "CERT-2TZAO60G",
          "certificate_url": "https://skillup.io/certificates/CERT-2TZAO60G"
        },
        "review_id": 46
      }
    ]
  },
  {
    "_id": 293,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0293@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-04 09:15:55",
    "last_online": "2024-12-04 12:10:35",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 293,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 409,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2023-12-18 04:53:40",
        "last_accessed_at": "2026-01-05 20:44:39",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 154,
          "issued_at": "2024-04-06 04:53:40",
          "certificate_code": "CERT-ZA9Y32ZW",
          "certificate_url": "https://skillup.io/certificates/CERT-ZA9Y32ZW"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 294,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0294@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-02 08:32:52",
    "last_online": "2024-12-03 12:57:48",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 294,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 410,
        "course_id": 24,
        "status": "completed",
        "enrolled_at": "2025-01-03 03:41:07",
        "last_accessed_at": "2025-09-02 22:51:29",
        "checkpoint_chapter_id": 95,
        "certificate": {
          "certificate_id": 155,
          "issued_at": "2025-04-26 03:41:07",
          "certificate_code": "CERT-J6ISKFL7",
          "certificate_url": "https://skillup.io/certificates/CERT-J6ISKFL7"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 295,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0295@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-01 05:14:13",
    "last_online": "2024-11-30 01:08:11",
    "country": "United Kingdom",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 295,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 412,
        "course_id": 9,
        "status": "dropped",
        "enrolled_at": "2024-07-13 03:52:12",
        "last_accessed_at": "2026-02-01 13:12:35",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 411,
        "course_id": 11,
        "status": "dropped",
        "enrolled_at": "2025-10-25 16:56:26",
        "last_accessed_at": "2025-12-05 00:59:14",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 296,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0296@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-02 02:58:44",
    "last_online": "2024-06-22 12:23:15",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 296,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 413,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2026-01-12 07:23:06",
        "last_accessed_at": "2026-01-15 18:02:20",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 156,
          "issued_at": "2026-02-28 07:23:06",
          "certificate_code": "CERT-2ODJZL5T",
          "certificate_url": "https://skillup.io/certificates/CERT-2ODJZL5T"
        },
        "review_id": 47
      }
    ]
  },
  {
    "_id": 297,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0297@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-14 03:15:49",
    "last_online": "2024-05-17 08:28:33",
    "country": "Canada",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 297,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 414,
        "course_id": 32,
        "status": "completed",
        "enrolled_at": "2025-09-30 07:29:17",
        "last_accessed_at": "2026-01-22 08:47:36",
        "checkpoint_chapter_id": 125,
        "certificate": {
          "certificate_id": 157,
          "issued_at": "2025-12-15 07:29:17",
          "certificate_code": "CERT-4VXLZ1LH",
          "certificate_url": "https://skillup.io/certificates/CERT-4VXLZ1LH"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 298,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0298@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-24 09:53:25",
    "last_online": "2024-12-16 10:12:11",
    "country": "United Kingdom",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 298,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 415,
        "course_id": 35,
        "status": "completed",
        "enrolled_at": "2025-07-01 11:28:15",
        "last_accessed_at": "2025-10-02 19:08:10",
        "checkpoint_chapter_id": 136,
        "certificate": {
          "certificate_id": 158,
          "issued_at": "2025-08-13 11:28:15",
          "certificate_code": "CERT-644XHHSF",
          "certificate_url": "https://skillup.io/certificates/CERT-644XHHSF"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 299,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0299@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-11 10:57:52",
    "last_online": "2024-07-15 07:55:52",
    "country": "United States",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 299,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 416,
        "course_id": 26,
        "status": "completed",
        "enrolled_at": "2025-12-31 13:26:28",
        "last_accessed_at": "2026-01-14 00:47:01",
        "checkpoint_chapter_id": 103,
        "certificate": {
          "certificate_id": 159,
          "issued_at": "2026-04-04 13:26:28",
          "certificate_code": "CERT-CQLWC2W8",
          "certificate_url": "https://skillup.io/certificates/CERT-CQLWC2W8"
        },
        "review_id": null
      },
      {
        "enrollment_id": 417,
        "course_id": 19,
        "status": "dropped",
        "enrolled_at": "2026-01-05 15:13:58",
        "last_accessed_at": "2026-01-21 16:58:17",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 300,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0300@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-30 06:56:42",
    "last_online": "2024-12-12 12:51:51",
    "country": "United States",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 300,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 418,
        "course_id": 8,
        "status": "active",
        "enrolled_at": "2024-01-25 04:57:43",
        "last_accessed_at": "2025-03-31 21:04:47",
        "checkpoint_chapter_id": 32,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 419,
        "course_id": 17,
        "status": "active",
        "enrolled_at": "2024-09-21 15:23:36",
        "last_accessed_at": "2026-01-05 18:25:50",
        "checkpoint_chapter_id": 68,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 301,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0301@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-27 08:52:27",
    "last_online": "2024-09-23 11:38:32",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 301,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 420,
        "course_id": 40,
        "status": "completed",
        "enrolled_at": "2025-04-10 09:45:59",
        "last_accessed_at": "2025-04-11 06:06:28",
        "checkpoint_chapter_id": 158,
        "certificate": {
          "certificate_id": 160,
          "issued_at": "2025-05-31 09:45:59",
          "certificate_code": "CERT-Q9CSM3KS",
          "certificate_url": "https://skillup.io/certificates/CERT-Q9CSM3KS"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 302,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0302@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-03-29 12:16:03",
    "last_online": "2024-10-01 14:26:27",
    "country": "United Kingdom",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 302,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 422,
        "course_id": 12,
        "status": "completed",
        "enrolled_at": "2024-08-14 17:05:43",
        "last_accessed_at": "2024-08-21 19:45:12",
        "checkpoint_chapter_id": 49,
        "certificate": {
          "certificate_id": 161,
          "issued_at": "2024-09-22 17:05:43",
          "certificate_code": "CERT-BHAXJLB2",
          "certificate_url": "https://skillup.io/certificates/CERT-BHAXJLB2"
        },
        "review_id": null
      },
      {
        "enrollment_id": 421,
        "course_id": 46,
        "status": "active",
        "enrolled_at": "2025-08-31 16:37:23",
        "last_accessed_at": "2026-01-10 20:33:35",
        "checkpoint_chapter_id": 180,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 303,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0303@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-09 06:18:42",
    "last_online": "2024-05-16 10:20:21",
    "country": "Canada",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 303,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 423,
        "course_id": 29,
        "status": "completed",
        "enrolled_at": "2025-03-10 23:05:58",
        "last_accessed_at": "2025-06-10 05:19:42",
        "checkpoint_chapter_id": 114,
        "certificate": {
          "certificate_id": 162,
          "issued_at": "2025-07-06 23:05:58",
          "certificate_code": "CERT-02M9I9TO",
          "certificate_url": "https://skillup.io/certificates/CERT-02M9I9TO"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 304,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0304@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-22 23:38:04",
    "last_online": "2024-10-10 10:51:27",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 304,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 424,
        "course_id": 29,
        "status": "active",
        "enrolled_at": "2025-10-10 16:04:56",
        "last_accessed_at": "2026-01-16 00:45:07",
        "checkpoint_chapter_id": 113,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 305,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0305@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-13 17:52:41",
    "last_online": "2024-12-18 17:14:33",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 305,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 426,
        "course_id": 34,
        "status": "completed",
        "enrolled_at": "2024-12-06 17:13:58",
        "last_accessed_at": "2025-11-03 21:08:14",
        "checkpoint_chapter_id": 132,
        "certificate": {
          "certificate_id": 163,
          "issued_at": "2025-02-16 17:13:58",
          "certificate_code": "CERT-TR02KRVE",
          "certificate_url": "https://skillup.io/certificates/CERT-TR02KRVE"
        },
        "review_id": null
      },
      {
        "enrollment_id": 425,
        "course_id": 29,
        "status": "completed",
        "enrolled_at": "2025-02-22 12:21:39",
        "last_accessed_at": "2025-11-01 03:08:07",
        "checkpoint_chapter_id": 114,
        "certificate": {
          "certificate_id": 164,
          "issued_at": "2025-04-04 12:21:39",
          "certificate_code": "CERT-8B1LW2T5",
          "certificate_url": "https://skillup.io/certificates/CERT-8B1LW2T5"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 306,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0306@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-05 19:37:10",
    "last_online": "2024-04-26 12:28:40",
    "country": "United Kingdom",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 306,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 427,
        "course_id": 12,
        "status": "dropped",
        "enrolled_at": "2025-06-04 15:33:31",
        "last_accessed_at": "2025-08-26 05:22:50",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 307,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0307@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-30 07:31:57",
    "last_online": "2024-11-10 01:06:23",
    "country": "India",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 307,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 428,
        "course_id": 20,
        "status": "active",
        "enrolled_at": "2025-09-29 19:49:17",
        "last_accessed_at": "2026-01-04 12:18:50",
        "checkpoint_chapter_id": 79,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 308,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0308@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-19 15:47:33",
    "last_online": "2024-08-04 08:36:53",
    "country": "Canada",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 308,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 429,
        "course_id": 14,
        "status": "completed",
        "enrolled_at": "2024-04-28 03:19:08",
        "last_accessed_at": "2024-09-27 02:19:07",
        "checkpoint_chapter_id": 57,
        "certificate": {
          "certificate_id": 165,
          "issued_at": "2024-06-12 03:19:08",
          "certificate_code": "CERT-6AW76RV2",
          "certificate_url": "https://skillup.io/certificates/CERT-6AW76RV2"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 309,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0309@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-20 08:25:25",
    "last_online": "2024-11-15 20:01:09",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 309,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 430,
        "course_id": 7,
        "status": "completed",
        "enrolled_at": "2023-11-10 08:30:54",
        "last_accessed_at": "2024-06-15 14:47:40",
        "checkpoint_chapter_id": 27,
        "certificate": {
          "certificate_id": 166,
          "issued_at": "2024-02-10 08:30:54",
          "certificate_code": "CERT-PJ6C2G8G",
          "certificate_url": "https://skillup.io/certificates/CERT-PJ6C2G8G"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 310,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0310@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-02 23:06:15",
    "last_online": "2024-12-10 02:21:47",
    "country": "United Kingdom",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 310,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 431,
        "course_id": 22,
        "status": "completed",
        "enrolled_at": "2024-05-05 03:36:23",
        "last_accessed_at": "2025-12-23 07:12:04",
        "checkpoint_chapter_id": 87,
        "certificate": {
          "certificate_id": 167,
          "issued_at": "2024-08-18 03:36:23",
          "certificate_code": "CERT-TYNT984M",
          "certificate_url": "https://skillup.io/certificates/CERT-TYNT984M"
        },
        "review_id": 48
      },
      {
        "enrollment_id": 432,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2025-12-20 12:51:13",
        "last_accessed_at": "2026-01-19 04:14:05",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 168,
          "issued_at": "2026-02-05 12:51:13",
          "certificate_code": "CERT-MCN8FQAA",
          "certificate_url": "https://skillup.io/certificates/CERT-MCN8FQAA"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 311,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0311@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-02 04:43:50",
    "last_online": "2024-09-15 00:41:26",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 311,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 433,
        "course_id": 3,
        "status": "completed",
        "enrolled_at": "2025-05-21 10:48:03",
        "last_accessed_at": "2025-12-13 04:40:11",
        "checkpoint_chapter_id": 13,
        "certificate": {
          "certificate_id": 169,
          "issued_at": "2025-06-26 10:48:03",
          "certificate_code": "CERT-UFXEMLR9",
          "certificate_url": "https://skillup.io/certificates/CERT-UFXEMLR9"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 312,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0312@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-29 15:15:11",
    "last_online": "2024-08-29 09:06:24",
    "country": "United States",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 312,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 434,
        "course_id": 23,
        "status": "active",
        "enrolled_at": "2025-04-08 08:50:38",
        "last_accessed_at": "2025-05-15 22:25:30",
        "checkpoint_chapter_id": 89,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 313,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0313@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-10 11:30:31",
    "last_online": "2024-08-23 02:51:44",
    "country": "United Kingdom",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 313,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 435,
        "course_id": 13,
        "status": "dropped",
        "enrolled_at": "2024-02-12 13:23:43",
        "last_accessed_at": "2024-12-13 08:54:33",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 314,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0314@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-19 12:32:09",
    "last_online": "2024-09-26 02:14:31",
    "country": "India",
    "background": "Consultant",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 314,
      "introduction": "Arpita Thakkar is an accomplished instructor specializing in Communication and Project Management courses, bringing valuable expertise from her extensive background as a consultant. With a proven track record of translating complex business concepts into practical, actionable insights, she guides students in developing critical skills essential for professional success and organizational excellence. Her teaching philosophy emphasizes real-world application and collaborative learning, enabling students to build confidence and competence in managing projects and communicating effectively across diverse teams and stakeholders.",
      "started_date": "2024-04-28",
      "last_online": "2025-09-18 17:44:33",
      "degree": "Ph.D. in Business Administration",
      "institution": "Duke University",
      "certification": "SHRM-SCP"
    },
    "enrollments": []
  },
  {
    "_id": 315,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0315@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-28 00:43:20",
    "last_online": "2024-06-14 16:12:01",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 315,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 437,
        "course_id": 35,
        "status": "completed",
        "enrolled_at": "2025-01-19 23:04:58",
        "last_accessed_at": "2025-04-20 01:20:09",
        "checkpoint_chapter_id": 136,
        "certificate": {
          "certificate_id": 170,
          "issued_at": "2025-03-10 23:04:58",
          "certificate_code": "CERT-4P3AQ3RM",
          "certificate_url": "https://skillup.io/certificates/CERT-4P3AQ3RM"
        },
        "review_id": 49
      },
      {
        "enrollment_id": 436,
        "course_id": 50,
        "status": "active",
        "enrolled_at": "2025-08-09 20:37:42",
        "last_accessed_at": "2026-01-01 03:23:09",
        "checkpoint_chapter_id": 197,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 316,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0316@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-28 21:15:26",
    "last_online": "2025-01-01 23:40:23",
    "country": "India",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 316,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 438,
        "course_id": 28,
        "status": "active",
        "enrolled_at": "2025-06-23 19:13:54",
        "last_accessed_at": "2025-08-20 01:29:16",
        "checkpoint_chapter_id": 109,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 317,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0317@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-16 23:31:48",
    "last_online": "2025-01-02 02:30:50",
    "country": "India",
    "background": "Marketing Manager",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 317,
      "introduction": "Manoj Trivedi is an accomplished instructor specializing in Leadership and Communication courses, bringing a wealth of practical expertise from his extensive background as a Marketing Manager. With a proven track record of developing strategic initiatives and leading high-performing teams, he is passionate about equipping professionals with the essential skills needed to inspire, communicate effectively, and drive organizational success. His dynamic teaching approach combines real-world industry insights with contemporary leadership principles, creating an engaging learning environment that prepares students to excel as influential leaders in their respective fields.",
      "started_date": "2024-06-02",
      "last_online": "2024-10-21 07:03:11",
      "degree": "M.S. in Human-Computer Interaction",
      "institution": "Duke University",
      "certification": "SHRM-SCP"
    },
    "enrollments": []
  },
  {
    "_id": 318,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0318@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-17 17:39:38",
    "last_online": "2024-08-09 11:42:44",
    "country": "Canada",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 318,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 439,
        "course_id": 23,
        "status": "completed",
        "enrolled_at": "2024-10-30 05:58:21",
        "last_accessed_at": "2025-08-19 10:52:51",
        "checkpoint_chapter_id": 90,
        "certificate": {
          "certificate_id": 171,
          "issued_at": "2025-01-10 05:58:21",
          "certificate_code": "CERT-3DBGCB77",
          "certificate_url": "https://skillup.io/certificates/CERT-3DBGCB77"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 319,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0319@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-10 23:48:56",
    "last_online": "2024-10-21 22:02:45",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 319,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 440,
        "course_id": 12,
        "status": "completed",
        "enrolled_at": "2023-08-04 19:19:48",
        "last_accessed_at": "2025-11-13 10:46:24",
        "checkpoint_chapter_id": 49,
        "certificate": {
          "certificate_id": 172,
          "issued_at": "2023-09-26 19:19:48",
          "certificate_code": "CERT-G9XA5AFK",
          "certificate_url": "https://skillup.io/certificates/CERT-G9XA5AFK"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 320,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0320@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-29 13:59:44",
    "last_online": "2024-11-02 22:14:53",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 320,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 441,
        "course_id": 5,
        "status": "active",
        "enrolled_at": "2024-08-30 21:30:57",
        "last_accessed_at": "2025-04-03 00:38:18",
        "checkpoint_chapter_id": 20,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 321,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0321@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-30 07:15:20",
    "last_online": "2024-08-19 04:54:27",
    "country": "India",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 321,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 443,
        "course_id": 34,
        "status": "active",
        "enrolled_at": "2025-02-26 18:21:56",
        "last_accessed_at": "2025-09-06 06:58:02",
        "checkpoint_chapter_id": 130,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 442,
        "course_id": 50,
        "status": "completed",
        "enrolled_at": "2025-12-04 02:00:20",
        "last_accessed_at": "2026-01-08 09:25:00",
        "checkpoint_chapter_id": 197,
        "certificate": {
          "certificate_id": 173,
          "issued_at": "2026-02-08 02:00:20",
          "certificate_code": "CERT-13FWGMYL",
          "certificate_url": "https://skillup.io/certificates/CERT-13FWGMYL"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 322,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0322@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-04-27 00:09:56",
    "last_online": "2024-09-06 18:25:24",
    "country": "United Kingdom",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 322,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 444,
        "course_id": 24,
        "status": "completed",
        "enrolled_at": "2025-01-15 22:06:03",
        "last_accessed_at": "2025-04-14 04:11:17",
        "checkpoint_chapter_id": 95,
        "certificate": {
          "certificate_id": 174,
          "issued_at": "2025-04-27 22:06:03",
          "certificate_code": "CERT-1DGC9U9O",
          "certificate_url": "https://skillup.io/certificates/CERT-1DGC9U9O"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 323,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0323@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-07 23:18:37",
    "last_online": "2024-06-08 21:57:41",
    "country": "Australia",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 323,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 445,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2023-11-03 20:54:58",
        "last_accessed_at": "2025-12-27 21:53:58",
        "checkpoint_chapter_id": 23,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 446,
        "course_id": 14,
        "status": "completed",
        "enrolled_at": "2025-10-15 04:13:29",
        "last_accessed_at": "2025-10-19 19:19:01",
        "checkpoint_chapter_id": 57,
        "certificate": {
          "certificate_id": 175,
          "issued_at": "2026-01-26 04:13:29",
          "certificate_code": "CERT-BDFRM4D9",
          "certificate_url": "https://skillup.io/certificates/CERT-BDFRM4D9"
        },
        "review_id": 50
      }
    ]
  },
  {
    "_id": 324,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0324@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-18 06:21:10",
    "last_online": "2024-08-01 03:01:52",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 324,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 448,
        "course_id": 10,
        "status": "active",
        "enrolled_at": "2024-12-05 23:54:46",
        "last_accessed_at": "2025-04-22 12:27:48",
        "checkpoint_chapter_id": 38,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 447,
        "course_id": 34,
        "status": "dropped",
        "enrolled_at": "2025-10-28 01:58:53",
        "last_accessed_at": "2026-01-21 14:42:59",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 325,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0325@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-15 11:38:02",
    "last_online": "2024-10-02 11:31:22",
    "country": "United Kingdom",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 325,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 449,
        "course_id": 47,
        "status": "dropped",
        "enrolled_at": "2025-09-22 04:11:20",
        "last_accessed_at": "2025-11-01 22:23:21",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 326,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0326@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-06 14:56:49",
    "last_online": "2024-10-30 09:52:27",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 326,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 450,
        "course_id": 23,
        "status": "completed",
        "enrolled_at": "2025-03-28 06:30:08",
        "last_accessed_at": "2025-10-05 08:38:31",
        "checkpoint_chapter_id": 90,
        "certificate": {
          "certificate_id": 176,
          "issued_at": "2025-06-13 06:30:08",
          "certificate_code": "CERT-3TBU9DOY",
          "certificate_url": "https://skillup.io/certificates/CERT-3TBU9DOY"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 327,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0327@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-01 08:00:22",
    "last_online": "2024-07-31 13:31:05",
    "country": "India",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 327,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 451,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2023-07-02 16:15:22",
        "last_accessed_at": "2023-08-08 05:34:08",
        "checkpoint_chapter_id": 5,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 452,
        "course_id": 29,
        "status": "active",
        "enrolled_at": "2025-08-18 11:38:26",
        "last_accessed_at": "2026-01-22 00:47:36",
        "checkpoint_chapter_id": 114,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 328,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0328@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-14 10:55:41",
    "last_online": "2024-06-28 07:33:33",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 328,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 453,
        "course_id": 18,
        "status": "active",
        "enrolled_at": "2026-01-24 00:11:50",
        "last_accessed_at": "2026-01-26 23:10:59",
        "checkpoint_chapter_id": 69,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 329,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0329@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-18 23:35:43",
    "last_online": "2024-12-29 02:56:11",
    "country": "Australia",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 329,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 454,
        "course_id": 36,
        "status": "completed",
        "enrolled_at": "2024-11-12 22:05:38",
        "last_accessed_at": "2025-07-25 05:16:03",
        "checkpoint_chapter_id": 139,
        "certificate": {
          "certificate_id": 177,
          "issued_at": "2024-12-30 22:05:38",
          "certificate_code": "CERT-I1MOKAVS",
          "certificate_url": "https://skillup.io/certificates/CERT-I1MOKAVS"
        },
        "review_id": 51
      }
    ]
  },
  {
    "_id": 330,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0330@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-31 07:54:27",
    "last_online": "2024-10-11 07:57:27",
    "country": "Canada",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 330,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 455,
        "course_id": 22,
        "status": "active",
        "enrolled_at": "2026-01-19 03:36:08",
        "last_accessed_at": "2026-01-25 23:15:23",
        "checkpoint_chapter_id": 86,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 331,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0331@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-13 19:28:35",
    "last_online": "2025-01-17 07:58:23",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 331,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 456,
        "course_id": 12,
        "status": "active",
        "enrolled_at": "2023-09-11 06:16:19",
        "last_accessed_at": "2025-04-30 12:37:14",
        "checkpoint_chapter_id": 48,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 332,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0332@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-25 08:52:59",
    "last_online": "2024-09-17 00:58:36",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 332,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 457,
        "course_id": 19,
        "status": "completed",
        "enrolled_at": "2024-10-20 06:06:02",
        "last_accessed_at": "2024-11-25 14:55:43",
        "checkpoint_chapter_id": 77,
        "certificate": {
          "certificate_id": 178,
          "issued_at": "2025-02-05 06:06:02",
          "certificate_code": "CERT-JOI6KHAQ",
          "certificate_url": "https://skillup.io/certificates/CERT-JOI6KHAQ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 333,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0333@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-05 13:18:15",
    "last_online": "2024-08-11 01:58:29",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 333,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 458,
        "course_id": 50,
        "status": "completed",
        "enrolled_at": "2026-01-16 15:54:49",
        "last_accessed_at": "2026-01-19 00:33:57",
        "checkpoint_chapter_id": 197,
        "certificate": {
          "certificate_id": 179,
          "issued_at": "2026-03-09 15:54:49",
          "certificate_code": "CERT-2AH726WO",
          "certificate_url": "https://skillup.io/certificates/CERT-2AH726WO"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 334,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0334@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-26 09:01:25",
    "last_online": "2024-08-26 09:02:26",
    "country": "India",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 334,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 459,
        "course_id": 49,
        "status": "completed",
        "enrolled_at": "2025-03-21 23:15:21",
        "last_accessed_at": "2025-05-02 02:53:59",
        "checkpoint_chapter_id": 194,
        "certificate": {
          "certificate_id": 180,
          "issued_at": "2025-06-04 23:15:21",
          "certificate_code": "CERT-ZBUDNNKR",
          "certificate_url": "https://skillup.io/certificates/CERT-ZBUDNNKR"
        },
        "review_id": 52
      }
    ]
  },
  {
    "_id": 335,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0335@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-05 19:20:20",
    "last_online": "2024-10-14 22:51:06",
    "country": "Canada",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 335,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 460,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2024-08-12 11:00:39",
        "last_accessed_at": "2024-11-09 17:26:46",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 181,
          "issued_at": "2024-10-23 11:00:39",
          "certificate_code": "CERT-AL1Q00Q6",
          "certificate_url": "https://skillup.io/certificates/CERT-AL1Q00Q6"
        },
        "review_id": null
      },
      {
        "enrollment_id": 461,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2024-11-01 13:08:46",
        "last_accessed_at": "2025-03-03 15:17:18",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 182,
          "issued_at": "2025-02-14 13:08:46",
          "certificate_code": "CERT-9C28FWA8",
          "certificate_url": "https://skillup.io/certificates/CERT-9C28FWA8"
        },
        "review_id": 53
      }
    ]
  },
  {
    "_id": 336,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0336@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-29 20:02:18",
    "last_online": "2024-12-10 23:16:15",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 336,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 463,
        "course_id": 8,
        "status": "dropped",
        "enrolled_at": "2024-04-13 00:39:30",
        "last_accessed_at": "2024-04-29 23:20:23",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 462,
        "course_id": 7,
        "status": "dropped",
        "enrolled_at": "2024-06-21 12:28:07",
        "last_accessed_at": "2025-02-06 11:16:22",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 337,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0337@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-03 15:26:07",
    "last_online": "2024-08-02 21:12:30",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 337,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 464,
        "course_id": 14,
        "status": "completed",
        "enrolled_at": "2024-09-14 23:39:39",
        "last_accessed_at": "2025-03-09 16:42:09",
        "checkpoint_chapter_id": 57,
        "certificate": {
          "certificate_id": 183,
          "issued_at": "2024-10-28 23:39:39",
          "certificate_code": "CERT-BEW61T7B",
          "certificate_url": "https://skillup.io/certificates/CERT-BEW61T7B"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 338,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0338@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-06 12:53:53",
    "last_online": "2024-06-28 13:19:55",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 338,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 465,
        "course_id": 38,
        "status": "active",
        "enrolled_at": "2025-07-09 06:08:48",
        "last_accessed_at": "2025-11-17 19:24:28",
        "checkpoint_chapter_id": 148,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 339,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0339@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-05-30 10:20:29",
    "last_online": "2024-10-14 18:07:51",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 339,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 466,
        "course_id": 36,
        "status": "active",
        "enrolled_at": "2024-11-03 07:34:35",
        "last_accessed_at": "2025-05-13 06:28:10",
        "checkpoint_chapter_id": 138,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 340,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0340@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-19 09:49:38",
    "last_online": "2024-10-14 18:03:28",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 340,
      "introduction": "Oliver Wallace is an experienced instructor specializing in Communication and Software Engineering courses, bringing a unique perspective that bridges technical expertise with effective communication strategies. With a professional background as a Marketing Manager, Oliver leverages his deep understanding of audience engagement and strategic messaging to help students develop both technical competencies and interpersonal skills essential for success in the technology industry. His innovative teaching approach combines practical industry insights with collaborative learning experiences, empowering students to excel in their academic and professional endeavors.",
      "started_date": "2024-06-22",
      "last_online": "2025-02-14 17:16:57",
      "degree": "M.A. in Education",
      "institution": "Harvard Business School",
      "certification": "Six Sigma Black Belt"
    },
    "enrollments": []
  },
  {
    "_id": 341,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0341@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-23 22:52:28",
    "last_online": "2024-08-30 04:40:16",
    "country": "United States",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 341,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 468,
        "course_id": 44,
        "status": "dropped",
        "enrolled_at": "2025-06-29 19:22:42",
        "last_accessed_at": "2025-11-01 18:11:09",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 467,
        "course_id": 33,
        "status": "dropped",
        "enrolled_at": "2025-08-16 04:39:14",
        "last_accessed_at": "2025-12-02 05:37:04",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 342,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0342@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-21 02:26:52",
    "last_online": "2024-08-22 04:32:37",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 342,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 469,
        "course_id": 25,
        "status": "active",
        "enrolled_at": "2024-10-19 04:52:32",
        "last_accessed_at": "2025-05-05 02:57:47",
        "checkpoint_chapter_id": 98,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 343,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0343@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-16 00:57:42",
    "last_online": "2025-01-04 10:06:43",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 343,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 471,
        "course_id": 8,
        "status": "active",
        "enrolled_at": "2023-11-23 03:13:12",
        "last_accessed_at": "2024-05-23 20:13:51",
        "checkpoint_chapter_id": 28,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 470,
        "course_id": 22,
        "status": "dropped",
        "enrolled_at": "2025-12-16 09:59:25",
        "last_accessed_at": "2026-01-04 17:16:44",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 344,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0344@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-19 20:30:50",
    "last_online": "2024-11-11 14:50:24",
    "country": "United Kingdom",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 344,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 472,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2024-03-04 13:18:58",
        "last_accessed_at": "2025-09-26 20:28:43",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 184,
          "issued_at": "2024-06-06 13:18:58",
          "certificate_code": "CERT-2TA21OI5",
          "certificate_url": "https://skillup.io/certificates/CERT-2TA21OI5"
        },
        "review_id": null
      },
      {
        "enrollment_id": 473,
        "course_id": 28,
        "status": "dropped",
        "enrolled_at": "2024-09-30 07:25:27",
        "last_accessed_at": "2025-12-10 13:44:23",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 345,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0345@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-02 05:40:47",
    "last_online": "2024-07-24 19:00:35",
    "country": "Australia",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 345,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 475,
        "course_id": 8,
        "status": "completed",
        "enrolled_at": "2024-03-16 03:30:07",
        "last_accessed_at": "2025-11-09 11:47:36",
        "checkpoint_chapter_id": 32,
        "certificate": {
          "certificate_id": 185,
          "issued_at": "2024-06-09 03:30:07",
          "certificate_code": "CERT-70U9SZOO",
          "certificate_url": "https://skillup.io/certificates/CERT-70U9SZOO"
        },
        "review_id": null
      },
      {
        "enrollment_id": 474,
        "course_id": 31,
        "status": "dropped",
        "enrolled_at": "2024-08-06 05:52:59",
        "last_accessed_at": "2025-12-15 23:32:44",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 346,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0346@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-14 16:08:58",
    "last_online": "2024-11-17 20:43:53",
    "country": "Canada",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 346,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 476,
        "course_id": 17,
        "status": "active",
        "enrolled_at": "2025-01-17 19:04:53",
        "last_accessed_at": "2025-02-25 14:44:45",
        "checkpoint_chapter_id": 67,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 347,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0347@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-18 20:10:07",
    "last_online": "2024-08-04 02:09:47",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 347,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 478,
        "course_id": 2,
        "status": "completed",
        "enrolled_at": "2025-07-21 05:28:21",
        "last_accessed_at": "2025-10-29 17:03:33",
        "checkpoint_chapter_id": 9,
        "certificate": {
          "certificate_id": 186,
          "issued_at": "2025-08-22 05:28:21",
          "certificate_code": "CERT-4VSKKLP5",
          "certificate_url": "https://skillup.io/certificates/CERT-4VSKKLP5"
        },
        "review_id": null
      },
      {
        "enrollment_id": 477,
        "course_id": 43,
        "status": "completed",
        "enrolled_at": "2025-10-23 08:58:25",
        "last_accessed_at": "2025-11-24 10:51:16",
        "checkpoint_chapter_id": 171,
        "certificate": {
          "certificate_id": 187,
          "issued_at": "2026-01-22 08:58:25",
          "certificate_code": "CERT-6ZMUKE2V",
          "certificate_url": "https://skillup.io/certificates/CERT-6ZMUKE2V"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 348,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0348@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-07 12:00:17",
    "last_online": "2024-09-16 17:19:48",
    "country": "United Kingdom",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 348,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 479,
        "course_id": 50,
        "status": "active",
        "enrolled_at": "2025-02-07 14:50:53",
        "last_accessed_at": "2025-03-02 19:06:46",
        "checkpoint_chapter_id": 196,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 349,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0349@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-09 11:05:13",
    "last_online": "2024-10-14 11:56:00",
    "country": "United States",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 349,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 480,
        "course_id": 18,
        "status": "completed",
        "enrolled_at": "2024-10-21 11:01:59",
        "last_accessed_at": "2025-06-22 12:50:50",
        "checkpoint_chapter_id": 73,
        "certificate": {
          "certificate_id": 188,
          "issued_at": "2025-01-20 11:01:59",
          "certificate_code": "CERT-OSWPT752",
          "certificate_url": "https://skillup.io/certificates/CERT-OSWPT752"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 350,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0350@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-12 14:48:16",
    "last_online": "2024-12-23 14:11:06",
    "country": "United Kingdom",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 350,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 481,
        "course_id": 28,
        "status": "active",
        "enrolled_at": "2025-01-17 21:15:44",
        "last_accessed_at": "2025-07-19 18:59:34",
        "checkpoint_chapter_id": 108,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 351,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0351@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-11 07:23:16",
    "last_online": "2024-07-06 16:05:37",
    "country": "United States",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 351,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 482,
        "course_id": 39,
        "status": "completed",
        "enrolled_at": "2025-12-15 18:06:15",
        "last_accessed_at": "2025-12-29 01:24:37",
        "checkpoint_chapter_id": 153,
        "certificate": {
          "certificate_id": 189,
          "issued_at": "2026-04-08 18:06:15",
          "certificate_code": "CERT-7VRUCHCS",
          "certificate_url": "https://skillup.io/certificates/CERT-7VRUCHCS"
        },
        "review_id": 54
      },
      {
        "enrollment_id": 483,
        "course_id": 40,
        "status": "active",
        "enrolled_at": "2026-01-01 12:08:54",
        "last_accessed_at": "2026-01-14 06:13:02",
        "checkpoint_chapter_id": 158,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 352,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0352@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-19 09:20:27",
    "last_online": "2024-08-06 15:49:48",
    "country": "United States",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 352,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 484,
        "course_id": 21,
        "status": "completed",
        "enrolled_at": "2025-11-14 04:20:07",
        "last_accessed_at": "2025-11-16 03:04:37",
        "checkpoint_chapter_id": 84,
        "certificate": {
          "certificate_id": 190,
          "issued_at": "2025-12-14 04:20:07",
          "certificate_code": "CERT-Y8U0OA5L",
          "certificate_url": "https://skillup.io/certificates/CERT-Y8U0OA5L"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 353,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0353@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-05 15:02:44",
    "last_online": "2024-10-31 11:28:56",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 353,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 485,
        "course_id": 5,
        "status": "dropped",
        "enrolled_at": "2024-03-28 14:44:05",
        "last_accessed_at": "2024-11-15 13:57:46",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 486,
        "course_id": 3,
        "status": "dropped",
        "enrolled_at": "2024-10-29 05:33:51",
        "last_accessed_at": "2025-01-03 00:54:28",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 354,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0354@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-27 11:05:23",
    "last_online": "2024-11-07 12:54:48",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 354,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 487,
        "course_id": 44,
        "status": "active",
        "enrolled_at": "2025-08-07 15:21:08",
        "last_accessed_at": "2026-01-14 03:48:44",
        "checkpoint_chapter_id": 174,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 355,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0355@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-19 02:53:35",
    "last_online": "2024-10-31 17:46:17",
    "country": "United Kingdom",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 355,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 488,
        "course_id": 23,
        "status": "active",
        "enrolled_at": "2025-10-19 23:44:16",
        "last_accessed_at": "2025-12-31 23:30:41",
        "checkpoint_chapter_id": 89,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 356,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0356@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-04 15:33:45",
    "last_online": "2024-10-26 04:28:13",
    "country": "Canada",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 356,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 489,
        "course_id": 23,
        "status": "active",
        "enrolled_at": "2024-12-06 03:57:24",
        "last_accessed_at": "2024-12-10 09:46:47",
        "checkpoint_chapter_id": 88,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 490,
        "course_id": 27,
        "status": "completed",
        "enrolled_at": "2025-02-28 13:29:20",
        "last_accessed_at": "2025-06-16 04:08:11",
        "checkpoint_chapter_id": 107,
        "certificate": {
          "certificate_id": 191,
          "issued_at": "2025-04-06 13:29:20",
          "certificate_code": "CERT-YDZFWCIY",
          "certificate_url": "https://skillup.io/certificates/CERT-YDZFWCIY"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 357,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0357@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-29 08:50:50",
    "last_online": "2025-01-04 07:55:25",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 357,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 492,
        "course_id": 25,
        "status": "active",
        "enrolled_at": "2024-04-05 13:41:02",
        "last_accessed_at": "2025-02-20 15:03:57",
        "checkpoint_chapter_id": 98,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 491,
        "course_id": 31,
        "status": "dropped",
        "enrolled_at": "2025-12-03 22:00:16",
        "last_accessed_at": "2026-02-01 18:45:38",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 358,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0358@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-11 16:30:25",
    "last_online": "2024-10-18 14:33:02",
    "country": "Canada",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 358,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 493,
        "course_id": 44,
        "status": "completed",
        "enrolled_at": "2025-01-28 15:53:36",
        "last_accessed_at": "2025-08-11 12:39:21",
        "checkpoint_chapter_id": 175,
        "certificate": {
          "certificate_id": 192,
          "issued_at": "2025-03-31 15:53:36",
          "certificate_code": "CERT-60TLW384",
          "certificate_url": "https://skillup.io/certificates/CERT-60TLW384"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 359,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0359@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-12 13:40:17",
    "last_online": "2024-08-02 11:56:06",
    "country": "Canada",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 359,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 494,
        "course_id": 11,
        "status": "active",
        "enrolled_at": "2024-11-02 18:02:08",
        "last_accessed_at": "2025-07-03 19:33:05",
        "checkpoint_chapter_id": 42,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 360,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0360@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-16 02:01:36",
    "last_online": "2024-11-30 20:15:43",
    "country": "Australia",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 360,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 495,
        "course_id": 24,
        "status": "completed",
        "enrolled_at": "2026-01-03 08:42:52",
        "last_accessed_at": "2026-01-24 08:58:06",
        "checkpoint_chapter_id": 95,
        "certificate": {
          "certificate_id": 193,
          "issued_at": "2026-04-03 08:42:52",
          "certificate_code": "CERT-I152N6VC",
          "certificate_url": "https://skillup.io/certificates/CERT-I152N6VC"
        },
        "review_id": 55
      }
    ]
  },
  {
    "_id": 361,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0361@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-06-29 00:46:57",
    "last_online": "2024-12-13 02:38:44",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 361,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 496,
        "course_id": 46,
        "status": "completed",
        "enrolled_at": "2025-01-22 18:05:28",
        "last_accessed_at": "2026-02-02 02:04:54",
        "checkpoint_chapter_id": 183,
        "certificate": {
          "certificate_id": 194,
          "issued_at": "2025-05-11 18:05:28",
          "certificate_code": "CERT-OXDB0YN0",
          "certificate_url": "https://skillup.io/certificates/CERT-OXDB0YN0"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 362,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0362@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-17 19:21:40",
    "last_online": "2024-07-28 15:16:10",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 362,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 497,
        "course_id": 35,
        "status": "active",
        "enrolled_at": "2024-11-22 01:30:03",
        "last_accessed_at": "2025-10-26 11:16:01",
        "checkpoint_chapter_id": 135,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 498,
        "course_id": 13,
        "status": "active",
        "enrolled_at": "2025-05-05 21:04:41",
        "last_accessed_at": "2025-09-15 00:16:31",
        "checkpoint_chapter_id": 50,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 363,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0363@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-15 03:30:14",
    "last_online": "2024-11-09 12:38:52",
    "country": "Canada",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 363,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 499,
        "course_id": 19,
        "status": "active",
        "enrolled_at": "2023-12-14 00:22:10",
        "last_accessed_at": "2025-04-11 21:41:49",
        "checkpoint_chapter_id": 77,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 500,
        "course_id": 8,
        "status": "active",
        "enrolled_at": "2024-05-11 04:37:13",
        "last_accessed_at": "2025-09-08 00:57:27",
        "checkpoint_chapter_id": 31,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 364,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0364@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-16 09:25:51",
    "last_online": "2024-11-28 07:17:25",
    "country": "United Kingdom",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 364,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 502,
        "course_id": 32,
        "status": "completed",
        "enrolled_at": "2025-05-08 14:13:01",
        "last_accessed_at": "2025-08-04 19:21:04",
        "checkpoint_chapter_id": 125,
        "certificate": {
          "certificate_id": 195,
          "issued_at": "2025-06-23 14:13:01",
          "certificate_code": "CERT-GK5W4BXF",
          "certificate_url": "https://skillup.io/certificates/CERT-GK5W4BXF"
        },
        "review_id": null
      },
      {
        "enrollment_id": 501,
        "course_id": 46,
        "status": "dropped",
        "enrolled_at": "2025-11-11 05:59:32",
        "last_accessed_at": "2026-01-06 07:43:25",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 365,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0365@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-25 09:55:58",
    "last_online": "2024-10-25 23:14:17",
    "country": "United Kingdom",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 365,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 503,
        "course_id": 20,
        "status": "completed",
        "enrolled_at": "2025-09-09 12:19:00",
        "last_accessed_at": "2026-01-17 20:08:01",
        "checkpoint_chapter_id": 80,
        "certificate": {
          "certificate_id": 196,
          "issued_at": "2025-12-10 12:19:00",
          "certificate_code": "CERT-LA2UBBMR",
          "certificate_url": "https://skillup.io/certificates/CERT-LA2UBBMR"
        },
        "review_id": null
      },
      {
        "enrollment_id": 504,
        "course_id": 30,
        "status": "active",
        "enrolled_at": "2025-11-05 18:15:42",
        "last_accessed_at": "2025-12-18 12:17:53",
        "checkpoint_chapter_id": 116,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 366,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0366@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-25 10:53:58",
    "last_online": "2024-09-24 04:59:06",
    "country": "Australia",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 366,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 505,
        "course_id": 22,
        "status": "active",
        "enrolled_at": "2025-05-31 00:34:18",
        "last_accessed_at": "2025-10-01 21:51:05",
        "checkpoint_chapter_id": 87,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 367,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0367@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-30 22:06:13",
    "last_online": "2024-10-06 08:56:54",
    "country": "Canada",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 367,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 506,
        "course_id": 31,
        "status": "active",
        "enrolled_at": "2025-07-12 12:58:08",
        "last_accessed_at": "2025-11-11 01:03:24",
        "checkpoint_chapter_id": 121,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 368,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0368@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-02 01:17:35",
    "last_online": "2024-10-06 19:29:11",
    "country": "Canada",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 368,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 507,
        "course_id": 45,
        "status": "active",
        "enrolled_at": "2025-07-29 09:25:39",
        "last_accessed_at": "2025-11-05 01:06:08",
        "checkpoint_chapter_id": 179,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 369,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0369@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-17 09:58:49",
    "last_online": "2024-08-29 03:19:44",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 369,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 509,
        "course_id": 20,
        "status": "active",
        "enrolled_at": "2024-08-18 19:42:11",
        "last_accessed_at": "2026-01-13 10:54:38",
        "checkpoint_chapter_id": 80,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 508,
        "course_id": 15,
        "status": "completed",
        "enrolled_at": "2025-05-19 06:40:44",
        "last_accessed_at": "2026-01-04 23:46:35",
        "checkpoint_chapter_id": 61,
        "certificate": {
          "certificate_id": 197,
          "issued_at": "2025-07-08 06:40:44",
          "certificate_code": "CERT-ZWQ6A1JV",
          "certificate_url": "https://skillup.io/certificates/CERT-ZWQ6A1JV"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 370,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0370@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-05 14:32:42",
    "last_online": "2024-12-07 21:32:42",
    "country": "India",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 370,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 510,
        "course_id": 25,
        "status": "completed",
        "enrolled_at": "2024-04-12 03:39:12",
        "last_accessed_at": "2025-08-04 11:12:35",
        "checkpoint_chapter_id": 100,
        "certificate": {
          "certificate_id": 198,
          "issued_at": "2024-06-15 03:39:12",
          "certificate_code": "CERT-5SUV8B1C",
          "certificate_url": "https://skillup.io/certificates/CERT-5SUV8B1C"
        },
        "review_id": null
      },
      {
        "enrollment_id": 511,
        "course_id": 38,
        "status": "active",
        "enrolled_at": "2025-02-20 08:17:12",
        "last_accessed_at": "2025-02-28 01:15:40",
        "checkpoint_chapter_id": 146,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 371,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0371@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-21 02:10:12",
    "last_online": "2024-10-22 21:18:35",
    "country": "Australia",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 371,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 512,
        "course_id": 2,
        "status": "dropped",
        "enrolled_at": "2025-10-24 21:12:08",
        "last_accessed_at": "2026-01-28 20:38:37",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 372,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0372@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-21 08:58:46",
    "last_online": "2024-10-26 22:45:58",
    "country": "India",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 372,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 514,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2024-01-13 13:18:46",
        "last_accessed_at": "2024-01-23 20:57:29",
        "checkpoint_chapter_id": 23,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 513,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2024-10-03 15:57:15",
        "last_accessed_at": "2025-10-04 22:59:46",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 199,
          "issued_at": "2025-01-06 15:57:15",
          "certificate_code": "CERT-8GGSFOON",
          "certificate_url": "https://skillup.io/certificates/CERT-8GGSFOON"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 373,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0373@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-04 18:26:18",
    "last_online": "2024-09-04 01:23:53",
    "country": "India",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 373,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 515,
        "course_id": 33,
        "status": "dropped",
        "enrolled_at": "2024-10-26 07:04:50",
        "last_accessed_at": "2025-09-05 17:47:41",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 374,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0374@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-01 20:21:04",
    "last_online": "2025-01-18 05:39:19",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 374,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 516,
        "course_id": 12,
        "status": "completed",
        "enrolled_at": "2024-02-14 18:55:48",
        "last_accessed_at": "2025-08-08 03:33:02",
        "checkpoint_chapter_id": 49,
        "certificate": {
          "certificate_id": 200,
          "issued_at": "2024-04-08 18:55:48",
          "certificate_code": "CERT-QPC7DAMS",
          "certificate_url": "https://skillup.io/certificates/CERT-QPC7DAMS"
        },
        "review_id": 56
      },
      {
        "enrollment_id": 517,
        "course_id": 32,
        "status": "dropped",
        "enrolled_at": "2024-07-19 09:18:12",
        "last_accessed_at": "2024-12-05 01:12:31",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 375,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0375@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-11 05:59:12",
    "last_online": "2024-10-30 00:04:57",
    "country": "United States",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 375,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 518,
        "course_id": 31,
        "status": "completed",
        "enrolled_at": "2024-11-17 20:35:10",
        "last_accessed_at": "2025-10-09 04:17:14",
        "checkpoint_chapter_id": 122,
        "certificate": {
          "certificate_id": 201,
          "issued_at": "2024-12-19 20:35:10",
          "certificate_code": "CERT-N5LAYOWP",
          "certificate_url": "https://skillup.io/certificates/CERT-N5LAYOWP"
        },
        "review_id": null
      },
      {
        "enrollment_id": 519,
        "course_id": 47,
        "status": "completed",
        "enrolled_at": "2025-04-02 11:29:55",
        "last_accessed_at": "2025-11-05 15:30:42",
        "checkpoint_chapter_id": 187,
        "certificate": {
          "certificate_id": 202,
          "issued_at": "2025-06-06 11:29:55",
          "certificate_code": "CERT-8H9ERRL2",
          "certificate_url": "https://skillup.io/certificates/CERT-8H9ERRL2"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 376,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0376@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-12 17:21:21",
    "last_online": "2024-11-04 04:55:20",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 376,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 520,
        "course_id": 38,
        "status": "active",
        "enrolled_at": "2025-03-19 15:05:17",
        "last_accessed_at": "2025-08-04 06:52:42",
        "checkpoint_chapter_id": 148,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 377,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0377@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-05 12:09:11",
    "last_online": "2024-12-03 07:20:23",
    "country": "United Kingdom",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 377,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 521,
        "course_id": 4,
        "status": "dropped",
        "enrolled_at": "2024-04-27 01:25:42",
        "last_accessed_at": "2024-09-26 07:41:55",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 378,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0378@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-20 01:15:19",
    "last_online": "2024-10-03 10:56:37",
    "country": "United Kingdom",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 378,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 522,
        "course_id": 20,
        "status": "completed",
        "enrolled_at": "2024-11-12 00:31:36",
        "last_accessed_at": "2025-07-04 06:36:26",
        "checkpoint_chapter_id": 80,
        "certificate": {
          "certificate_id": 203,
          "issued_at": "2025-01-17 00:31:36",
          "certificate_code": "CERT-KEAIVOS1",
          "certificate_url": "https://skillup.io/certificates/CERT-KEAIVOS1"
        },
        "review_id": null
      },
      {
        "enrollment_id": 523,
        "course_id": 37,
        "status": "completed",
        "enrolled_at": "2024-12-19 20:28:37",
        "last_accessed_at": "2025-07-14 22:17:52",
        "checkpoint_chapter_id": 144,
        "certificate": {
          "certificate_id": 204,
          "issued_at": "2025-04-01 20:28:37",
          "certificate_code": "CERT-0CLHFARX",
          "certificate_url": "https://skillup.io/certificates/CERT-0CLHFARX"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 379,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0379@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-01 03:44:14",
    "last_online": "2024-09-29 11:24:52",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 379,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 524,
        "course_id": 16,
        "status": "completed",
        "enrolled_at": "2024-11-27 11:51:35",
        "last_accessed_at": "2026-01-19 23:14:33",
        "checkpoint_chapter_id": 65,
        "certificate": {
          "certificate_id": 205,
          "issued_at": "2025-02-16 11:51:35",
          "certificate_code": "CERT-PSNVQHCQ",
          "certificate_url": "https://skillup.io/certificates/CERT-PSNVQHCQ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 380,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0380@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-19 10:08:03",
    "last_online": "2024-10-13 11:00:34",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 380,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 526,
        "course_id": 46,
        "status": "completed",
        "enrolled_at": "2025-05-12 19:46:44",
        "last_accessed_at": "2025-05-24 12:44:27",
        "checkpoint_chapter_id": 183,
        "certificate": {
          "certificate_id": 206,
          "issued_at": "2025-08-27 19:46:44",
          "certificate_code": "CERT-GA3CQQPA",
          "certificate_url": "https://skillup.io/certificates/CERT-GA3CQQPA"
        },
        "review_id": 58
      },
      {
        "enrollment_id": 525,
        "course_id": 8,
        "status": "completed",
        "enrolled_at": "2025-10-19 11:08:28",
        "last_accessed_at": "2026-01-07 11:35:09",
        "checkpoint_chapter_id": 32,
        "certificate": {
          "certificate_id": 207,
          "issued_at": "2025-12-14 11:08:28",
          "certificate_code": "CERT-4AS08271",
          "certificate_url": "https://skillup.io/certificates/CERT-4AS08271"
        },
        "review_id": 57
      }
    ]
  },
  {
    "_id": 381,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0381@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-18 11:55:15",
    "last_online": "2024-10-15 17:53:41",
    "country": "Canada",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 381,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 528,
        "course_id": 17,
        "status": "active",
        "enrolled_at": "2025-06-29 01:52:39",
        "last_accessed_at": "2025-07-29 23:15:24",
        "checkpoint_chapter_id": 68,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 527,
        "course_id": 42,
        "status": "active",
        "enrolled_at": "2025-11-17 17:46:50",
        "last_accessed_at": "2026-01-13 19:32:55",
        "checkpoint_chapter_id": 165,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 382,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0382@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-07-28 00:11:30",
    "last_online": "2024-07-28 06:32:26",
    "country": "United Kingdom",
    "background": "Data Analyst",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 382,
      "introduction": "Callum Thomas is an experienced instructor specializing in Project Management and Leadership development, bringing a unique analytical perspective to organizational excellence. With a strong background in data analysis, Callum leverages data-driven insights to help students master complex project methodologies and develop the strategic leadership skills essential for modern business environments. His innovative teaching approach combines practical frameworks with real-world applications, empowering professionals to lead high-performing teams and deliver impactful results.",
      "started_date": "2024-08-11",
      "last_online": "2025-12-08 04:12:40",
      "degree": "M.S. in Information Systems",
      "institution": "Duke University",
      "certification": "Lean Six Sigma Green Belt"
    },
    "enrollments": []
  },
  {
    "_id": 383,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0383@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-14 04:16:08",
    "last_online": "2024-11-10 23:04:18",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 383,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 529,
        "course_id": 3,
        "status": "completed",
        "enrolled_at": "2024-04-19 03:12:22",
        "last_accessed_at": "2024-12-24 17:44:01",
        "checkpoint_chapter_id": 13,
        "certificate": {
          "certificate_id": 208,
          "issued_at": "2024-07-13 03:12:22",
          "certificate_code": "CERT-PE7HJU4P",
          "certificate_url": "https://skillup.io/certificates/CERT-PE7HJU4P"
        },
        "review_id": 59
      },
      {
        "enrollment_id": 530,
        "course_id": 37,
        "status": "active",
        "enrolled_at": "2025-05-26 06:51:57",
        "last_accessed_at": "2026-01-20 16:27:59",
        "checkpoint_chapter_id": 140,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 384,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0384@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-11 05:36:38",
    "last_online": "2024-08-14 16:43:21",
    "country": "Australia",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 384,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 531,
        "course_id": 50,
        "status": "dropped",
        "enrolled_at": "2025-03-05 01:40:00",
        "last_accessed_at": "2025-07-16 03:07:43",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 385,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0385@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-18 02:32:53",
    "last_online": "2024-09-14 11:06:58",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 385,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 532,
        "course_id": 30,
        "status": "dropped",
        "enrolled_at": "2024-06-27 13:52:34",
        "last_accessed_at": "2025-06-16 01:42:12",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 386,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0386@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-26 00:50:37",
    "last_online": "2024-11-07 00:34:58",
    "country": "United Kingdom",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 386,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 534,
        "course_id": 6,
        "status": "completed",
        "enrolled_at": "2024-02-09 14:53:27",
        "last_accessed_at": "2024-11-28 13:37:26",
        "checkpoint_chapter_id": 24,
        "certificate": {
          "certificate_id": 209,
          "issued_at": "2024-05-13 14:53:27",
          "certificate_code": "CERT-UJU3G2LJ",
          "certificate_url": "https://skillup.io/certificates/CERT-UJU3G2LJ"
        },
        "review_id": 60
      },
      {
        "enrollment_id": 533,
        "course_id": 50,
        "status": "active",
        "enrolled_at": "2025-07-07 10:21:57",
        "last_accessed_at": "2025-09-22 04:25:55",
        "checkpoint_chapter_id": 197,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 387,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0387@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-24 00:12:34",
    "last_online": "2024-09-18 14:29:01",
    "country": "United States",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 387,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 535,
        "course_id": 44,
        "status": "dropped",
        "enrolled_at": "2025-09-04 03:49:18",
        "last_accessed_at": "2025-09-11 02:43:37",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 388,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0388@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-23 00:11:34",
    "last_online": "2024-09-13 05:17:51",
    "country": "Australia",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 388,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 537,
        "course_id": 10,
        "status": "active",
        "enrolled_at": "2024-01-26 07:51:34",
        "last_accessed_at": "2024-05-18 11:45:13",
        "checkpoint_chapter_id": 40,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 536,
        "course_id": 46,
        "status": "active",
        "enrolled_at": "2025-07-02 17:00:08",
        "last_accessed_at": "2026-01-30 21:07:14",
        "checkpoint_chapter_id": 183,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 389,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0389@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-06 19:04:54",
    "last_online": "2024-09-29 11:49:49",
    "country": "Australia",
    "background": "Student",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 389,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 538,
        "course_id": 44,
        "status": "completed",
        "enrolled_at": "2024-11-16 07:36:08",
        "last_accessed_at": "2025-12-23 02:54:31",
        "checkpoint_chapter_id": 175,
        "certificate": {
          "certificate_id": 210,
          "issued_at": "2025-02-03 07:36:08",
          "certificate_code": "CERT-HVC73YMR",
          "certificate_url": "https://skillup.io/certificates/CERT-HVC73YMR"
        },
        "review_id": null
      },
      {
        "enrollment_id": 539,
        "course_id": 24,
        "status": "active",
        "enrolled_at": "2024-11-27 19:01:00",
        "last_accessed_at": "2025-08-11 13:54:42",
        "checkpoint_chapter_id": 93,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 390,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0390@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-13 15:35:33",
    "last_online": "2024-12-04 22:03:39",
    "country": "United Kingdom",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 390,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 541,
        "course_id": 12,
        "status": "dropped",
        "enrolled_at": "2023-12-13 08:16:19",
        "last_accessed_at": "2023-12-15 21:38:24",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 540,
        "course_id": 22,
        "status": "active",
        "enrolled_at": "2025-01-12 10:55:27",
        "last_accessed_at": "2025-11-19 12:34:36",
        "checkpoint_chapter_id": 85,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 391,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0391@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-31 04:06:40",
    "last_online": "2024-11-07 09:03:48",
    "country": "United Kingdom",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 391,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 542,
        "course_id": 30,
        "status": "completed",
        "enrolled_at": "2024-06-28 09:29:13",
        "last_accessed_at": "2025-12-19 04:34:20",
        "checkpoint_chapter_id": 117,
        "certificate": {
          "certificate_id": 211,
          "issued_at": "2024-09-16 09:29:13",
          "certificate_code": "CERT-ZFYGQLG5",
          "certificate_url": "https://skillup.io/certificates/CERT-ZFYGQLG5"
        },
        "review_id": null
      },
      {
        "enrollment_id": 543,
        "course_id": 11,
        "status": "active",
        "enrolled_at": "2025-06-14 15:16:08",
        "last_accessed_at": "2025-08-04 03:05:32",
        "checkpoint_chapter_id": 44,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 392,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0392@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-17 06:10:01",
    "last_online": "2024-10-29 04:56:44",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 392,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 544,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2024-07-15 09:21:06",
        "last_accessed_at": "2024-12-08 10:43:54",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 212,
          "issued_at": "2024-10-17 09:21:06",
          "certificate_code": "CERT-FC93DOER",
          "certificate_url": "https://skillup.io/certificates/CERT-FC93DOER"
        },
        "review_id": 61
      }
    ]
  },
  {
    "_id": 393,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0393@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-18 02:56:44",
    "last_online": "2024-08-24 11:48:47",
    "country": "United States",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 393,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 546,
        "course_id": 24,
        "status": "active",
        "enrolled_at": "2025-02-23 13:32:32",
        "last_accessed_at": "2025-04-08 05:32:16",
        "checkpoint_chapter_id": 95,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 545,
        "course_id": 18,
        "status": "active",
        "enrolled_at": "2025-05-08 06:39:53",
        "last_accessed_at": "2025-09-09 18:10:44",
        "checkpoint_chapter_id": 70,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 394,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0394@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-24 03:28:48",
    "last_online": "2024-09-16 12:46:39",
    "country": "Australia",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 394,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 547,
        "course_id": 24,
        "status": "dropped",
        "enrolled_at": "2025-02-15 17:38:34",
        "last_accessed_at": "2025-05-11 19:10:08",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 548,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2025-11-21 00:53:53",
        "last_accessed_at": "2025-12-06 21:06:02",
        "checkpoint_chapter_id": 124,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 395,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0395@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-16 03:21:29",
    "last_online": "2024-10-10 05:07:57",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 395,
      "introduction": "Denise Griffin is an experienced instructor specializing in Communication and Product Management, bringing a wealth of practical knowledge from her background as an Operations Manager. With a deep understanding of how effective communication drives product success and organizational efficiency, she designs engaging courses that equip students with real-world skills applicable to today's dynamic business environment. Denise is dedicated to fostering collaborative learning experiences that empower her students to become strategic communicators and innovative product leaders.",
      "started_date": "2024-09-07",
      "last_online": "2025-02-13 21:52:40",
      "degree": "MBA",
      "institution": "Columbia University",
      "certification": "ITIL Foundation"
    },
    "enrollments": []
  },
  {
    "_id": 396,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0396@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-03 08:18:30",
    "last_online": "2024-09-20 23:36:58",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 396,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 549,
        "course_id": 47,
        "status": "dropped",
        "enrolled_at": "2025-02-18 00:11:17",
        "last_accessed_at": "2026-01-06 01:35:53",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 397,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0397@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-30 23:07:34",
    "last_online": "2024-12-18 11:25:16",
    "country": "United States",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 397,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 550,
        "course_id": 16,
        "status": "dropped",
        "enrolled_at": "2024-08-13 12:23:10",
        "last_accessed_at": "2025-04-18 08:29:25",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 551,
        "course_id": 13,
        "status": "active",
        "enrolled_at": "2025-09-06 04:18:45",
        "last_accessed_at": "2026-01-08 13:36:51",
        "checkpoint_chapter_id": 52,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 398,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0398@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-09 07:49:20",
    "last_online": "2025-01-15 16:10:05",
    "country": "India",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 398,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 552,
        "course_id": 49,
        "status": "dropped",
        "enrolled_at": "2025-06-09 22:56:17",
        "last_accessed_at": "2026-01-26 15:44:57",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 399,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0399@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-24 20:36:25",
    "last_online": "2024-11-16 07:33:52",
    "country": "United States",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 399,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 554,
        "course_id": 16,
        "status": "completed",
        "enrolled_at": "2024-10-27 16:41:28",
        "last_accessed_at": "2025-05-25 23:09:55",
        "checkpoint_chapter_id": 65,
        "certificate": {
          "certificate_id": 213,
          "issued_at": "2025-01-05 16:41:28",
          "certificate_code": "CERT-CDI7WA69",
          "certificate_url": "https://skillup.io/certificates/CERT-CDI7WA69"
        },
        "review_id": null
      },
      {
        "enrollment_id": 553,
        "course_id": 27,
        "status": "completed",
        "enrolled_at": "2024-12-24 03:44:13",
        "last_accessed_at": "2025-02-05 13:19:33",
        "checkpoint_chapter_id": 107,
        "certificate": {
          "certificate_id": 214,
          "issued_at": "2025-02-07 03:44:13",
          "certificate_code": "CERT-583O4JLZ",
          "certificate_url": "https://skillup.io/certificates/CERT-583O4JLZ"
        },
        "review_id": 62
      }
    ]
  },
  {
    "_id": 400,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0400@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-19 04:32:43",
    "last_online": "2024-12-27 02:45:25",
    "country": "Canada",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 400,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 555,
        "course_id": 26,
        "status": "dropped",
        "enrolled_at": "2024-06-28 18:14:23",
        "last_accessed_at": "2025-08-03 07:50:07",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 401,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0401@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-28 02:47:12",
    "last_online": "2024-12-19 20:06:24",
    "country": "India",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 401,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 556,
        "course_id": 29,
        "status": "active",
        "enrolled_at": "2025-12-04 15:46:56",
        "last_accessed_at": "2025-12-25 11:30:01",
        "checkpoint_chapter_id": 114,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 402,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0402@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-08-25 13:42:07",
    "last_online": "2025-01-09 16:42:31",
    "country": "United Kingdom",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 402,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 558,
        "course_id": 20,
        "status": "completed",
        "enrolled_at": "2024-08-13 14:03:39",
        "last_accessed_at": "2025-05-25 17:11:23",
        "checkpoint_chapter_id": 80,
        "certificate": {
          "certificate_id": 215,
          "issued_at": "2024-10-14 14:03:39",
          "certificate_code": "CERT-X6ABL8MB",
          "certificate_url": "https://skillup.io/certificates/CERT-X6ABL8MB"
        },
        "review_id": 64
      },
      {
        "enrollment_id": 557,
        "course_id": 8,
        "status": "completed",
        "enrolled_at": "2025-10-13 17:34:20",
        "last_accessed_at": "2025-11-14 15:15:40",
        "checkpoint_chapter_id": 32,
        "certificate": {
          "certificate_id": 216,
          "issued_at": "2025-11-28 17:34:20",
          "certificate_code": "CERT-S8DE80HE",
          "certificate_url": "https://skillup.io/certificates/CERT-S8DE80HE"
        },
        "review_id": 63
      }
    ]
  },
  {
    "_id": 403,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0403@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-14 13:39:34",
    "last_online": "2024-11-14 20:04:30",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 403,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 560,
        "course_id": 1,
        "status": "dropped",
        "enrolled_at": "2023-05-11 05:46:35",
        "last_accessed_at": "2023-07-08 11:41:23",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 559,
        "course_id": 27,
        "status": "completed",
        "enrolled_at": "2024-05-28 04:03:15",
        "last_accessed_at": "2024-08-15 02:35:12",
        "checkpoint_chapter_id": 107,
        "certificate": {
          "certificate_id": 217,
          "issued_at": "2024-08-04 04:03:15",
          "certificate_code": "CERT-326FTL8C",
          "certificate_url": "https://skillup.io/certificates/CERT-326FTL8C"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 404,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0404@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-18 13:41:29",
    "last_online": "2024-10-17 21:23:16",
    "country": "Canada",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 404,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 561,
        "course_id": 18,
        "status": "active",
        "enrolled_at": "2025-01-01 09:19:00",
        "last_accessed_at": "2025-05-30 17:09:17",
        "checkpoint_chapter_id": 69,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 405,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0405@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-04 01:01:11",
    "last_online": "2025-01-04 18:50:15",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 405,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 563,
        "course_id": 42,
        "status": "active",
        "enrolled_at": "2025-11-20 11:47:05",
        "last_accessed_at": "2025-12-30 10:21:25",
        "checkpoint_chapter_id": 165,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 562,
        "course_id": 46,
        "status": "completed",
        "enrolled_at": "2025-12-20 15:56:08",
        "last_accessed_at": "2025-12-31 20:24:43",
        "checkpoint_chapter_id": 183,
        "certificate": {
          "certificate_id": 218,
          "issued_at": "2026-03-29 15:56:08",
          "certificate_code": "CERT-93Z49AOO",
          "certificate_url": "https://skillup.io/certificates/CERT-93Z49AOO"
        },
        "review_id": 65
      }
    ]
  },
  {
    "_id": 406,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0406@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-05 20:44:43",
    "last_online": "2024-11-29 16:15:34",
    "country": "Australia",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 406,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 564,
        "course_id": 35,
        "status": "active",
        "enrolled_at": "2025-12-26 23:31:12",
        "last_accessed_at": "2026-01-19 09:55:03",
        "checkpoint_chapter_id": 134,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 407,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0407@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-03 15:04:59",
    "last_online": "2024-11-08 00:50:59",
    "country": "Canada",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 407,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 565,
        "course_id": 41,
        "status": "active",
        "enrolled_at": "2025-01-01 11:02:27",
        "last_accessed_at": "2025-12-28 11:09:47",
        "checkpoint_chapter_id": 162,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 566,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2025-12-24 03:03:05",
        "last_accessed_at": "2026-01-09 18:26:01",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 219,
          "issued_at": "2026-02-05 03:03:05",
          "certificate_code": "CERT-NN5MPDZB",
          "certificate_url": "https://skillup.io/certificates/CERT-NN5MPDZB"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 408,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0408@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-11 09:40:05",
    "last_online": "2024-11-18 04:54:21",
    "country": "Canada",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 408,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 567,
        "course_id": 17,
        "status": "dropped",
        "enrolled_at": "2024-01-22 12:25:39",
        "last_accessed_at": "2025-12-12 09:41:46",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 568,
        "course_id": 50,
        "status": "completed",
        "enrolled_at": "2025-12-18 15:50:24",
        "last_accessed_at": "2026-01-26 06:13:00",
        "checkpoint_chapter_id": 197,
        "certificate": {
          "certificate_id": 220,
          "issued_at": "2026-03-03 15:50:24",
          "certificate_code": "CERT-49XXDJ4A",
          "certificate_url": "https://skillup.io/certificates/CERT-49XXDJ4A"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 409,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0409@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-19 05:03:55",
    "last_online": "2024-12-09 10:12:58",
    "country": "India",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 409,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 570,
        "course_id": 4,
        "status": "active",
        "enrolled_at": "2024-06-10 11:12:49",
        "last_accessed_at": "2025-05-28 18:52:13",
        "checkpoint_chapter_id": 18,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 569,
        "course_id": 49,
        "status": "active",
        "enrolled_at": "2025-07-24 16:03:25",
        "last_accessed_at": "2025-09-11 21:35:36",
        "checkpoint_chapter_id": 193,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 410,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0410@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-10 17:59:15",
    "last_online": "2024-10-20 19:57:12",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 410,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 571,
        "course_id": 41,
        "status": "active",
        "enrolled_at": "2025-07-14 07:32:42",
        "last_accessed_at": "2025-08-23 21:19:51",
        "checkpoint_chapter_id": 161,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 572,
        "course_id": 20,
        "status": "completed",
        "enrolled_at": "2025-12-29 19:40:36",
        "last_accessed_at": "2026-01-27 13:48:02",
        "checkpoint_chapter_id": 80,
        "certificate": {
          "certificate_id": 221,
          "issued_at": "2026-03-17 19:40:36",
          "certificate_code": "CERT-CIGSO497",
          "certificate_url": "https://skillup.io/certificates/CERT-CIGSO497"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 411,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0411@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-27 12:54:33",
    "last_online": "2024-11-15 05:53:46",
    "country": "United Kingdom",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 411,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 573,
        "course_id": 31,
        "status": "dropped",
        "enrolled_at": "2024-10-02 15:32:53",
        "last_accessed_at": "2025-01-29 18:41:36",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 574,
        "course_id": 21,
        "status": "completed",
        "enrolled_at": "2025-11-18 08:16:08",
        "last_accessed_at": "2025-11-24 16:27:46",
        "checkpoint_chapter_id": 84,
        "certificate": {
          "certificate_id": 222,
          "issued_at": "2026-01-16 08:16:08",
          "certificate_code": "CERT-7P9LUFZH",
          "certificate_url": "https://skillup.io/certificates/CERT-7P9LUFZH"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 412,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0412@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-04 00:09:01",
    "last_online": "2024-11-07 12:38:40",
    "country": "United States",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 412,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 575,
        "course_id": 19,
        "status": "dropped",
        "enrolled_at": "2023-12-03 21:15:50",
        "last_accessed_at": "2025-06-12 01:47:51",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 413,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0413@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-08 12:44:21",
    "last_online": "2024-12-13 20:10:46",
    "country": "United Kingdom",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 413,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 576,
        "course_id": 11,
        "status": "active",
        "enrolled_at": "2023-10-15 21:52:25",
        "last_accessed_at": "2026-01-18 12:48:49",
        "checkpoint_chapter_id": 42,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 414,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0414@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-15 09:19:57",
    "last_online": "2024-10-02 20:59:23",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 414,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 578,
        "course_id": 49,
        "status": "dropped",
        "enrolled_at": "2025-11-10 12:48:59",
        "last_accessed_at": "2025-11-16 00:40:25",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 577,
        "course_id": 43,
        "status": "completed",
        "enrolled_at": "2025-12-01 21:22:28",
        "last_accessed_at": "2026-01-17 16:48:39",
        "checkpoint_chapter_id": 171,
        "certificate": {
          "certificate_id": 223,
          "issued_at": "2026-01-22 21:22:28",
          "certificate_code": "CERT-3KB938LK",
          "certificate_url": "https://skillup.io/certificates/CERT-3KB938LK"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 415,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0415@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-02 22:00:20",
    "last_online": "2024-12-30 04:04:24",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 415,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 579,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2025-07-02 14:03:24",
        "last_accessed_at": "2026-01-20 10:12:10",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 224,
          "issued_at": "2025-08-28 14:03:24",
          "certificate_code": "CERT-Z9U2XMKS",
          "certificate_url": "https://skillup.io/certificates/CERT-Z9U2XMKS"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 416,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0416@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-05 23:13:06",
    "last_online": "2024-12-20 10:06:24",
    "country": "Canada",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 416,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 581,
        "course_id": 40,
        "status": "active",
        "enrolled_at": "2025-06-25 23:46:44",
        "last_accessed_at": "2025-10-18 21:36:56",
        "checkpoint_chapter_id": 154,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 580,
        "course_id": 41,
        "status": "completed",
        "enrolled_at": "2025-10-01 12:33:24",
        "last_accessed_at": "2025-12-13 00:55:23",
        "checkpoint_chapter_id": 163,
        "certificate": {
          "certificate_id": 225,
          "issued_at": "2025-12-07 12:33:24",
          "certificate_code": "CERT-9EZOS0IN",
          "certificate_url": "https://skillup.io/certificates/CERT-9EZOS0IN"
        },
        "review_id": 66
      }
    ]
  },
  {
    "_id": 417,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0417@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-06 09:13:21",
    "last_online": "2024-10-07 11:40:34",
    "country": "United Kingdom",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 417,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 582,
        "course_id": 50,
        "status": "completed",
        "enrolled_at": "2025-08-30 23:16:54",
        "last_accessed_at": "2025-09-24 01:21:44",
        "checkpoint_chapter_id": 197,
        "certificate": {
          "certificate_id": 226,
          "issued_at": "2025-11-08 23:16:54",
          "certificate_code": "CERT-2IYX5R4K",
          "certificate_url": "https://skillup.io/certificates/CERT-2IYX5R4K"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 418,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0418@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-13 03:15:40",
    "last_online": "2024-10-28 19:25:31",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 418,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 583,
        "course_id": 2,
        "status": "completed",
        "enrolled_at": "2023-09-22 02:43:03",
        "last_accessed_at": "2023-12-13 04:58:58",
        "checkpoint_chapter_id": 9,
        "certificate": {
          "certificate_id": 227,
          "issued_at": "2023-12-18 02:43:03",
          "certificate_code": "CERT-JI0U17H6",
          "certificate_url": "https://skillup.io/certificates/CERT-JI0U17H6"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 419,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0419@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-09-21 03:11:05",
    "last_online": "2024-09-27 10:22:35",
    "country": "United States",
    "background": "Operations Manager",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 419,
      "introduction": "Zoe Estrada is an experienced instructor specializing in Agile methodologies and UX Design, bringing a unique perspective shaped by her background as an Operations Manager. With a strong foundation in process optimization and team coordination, Zoe effectively bridges the gap between operational efficiency and user-centered design principles in her courses. Her engaging teaching style and practical industry experience make her an invaluable mentor for professionals seeking to develop expertise in modern development practices and user experience excellence.",
      "started_date": "2024-10-16",
      "last_online": "2025-07-16 01:06:39",
      "degree": "Ph.D. in Computer Science",
      "institution": "MIT",
      "certification": "Certified Scrum Product Owner"
    },
    "enrollments": []
  },
  {
    "_id": 420,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0420@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-15 00:17:08",
    "last_online": "2024-11-08 02:22:34",
    "country": "Canada",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 420,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 584,
        "course_id": 42,
        "status": "active",
        "enrolled_at": "2024-10-15 12:02:45",
        "last_accessed_at": "2025-01-16 23:55:01",
        "checkpoint_chapter_id": 166,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 421,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0421@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-03 21:59:54",
    "last_online": "2024-12-21 03:19:52",
    "country": "India",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 421,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 585,
        "course_id": 46,
        "status": "completed",
        "enrolled_at": "2026-01-17 01:22:44",
        "last_accessed_at": "2026-01-28 09:58:08",
        "checkpoint_chapter_id": 183,
        "certificate": {
          "certificate_id": 228,
          "issued_at": "2026-03-05 01:22:44",
          "certificate_code": "CERT-8LDNTNZG",
          "certificate_url": "https://skillup.io/certificates/CERT-8LDNTNZG"
        },
        "review_id": 67
      }
    ]
  },
  {
    "_id": 422,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0422@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-13 23:48:49",
    "last_online": "2024-11-14 06:06:10",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 422,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 586,
        "course_id": 23,
        "status": "completed",
        "enrolled_at": "2024-04-02 03:09:51",
        "last_accessed_at": "2024-07-02 19:27:33",
        "checkpoint_chapter_id": 90,
        "certificate": {
          "certificate_id": 229,
          "issued_at": "2024-06-10 03:09:51",
          "certificate_code": "CERT-FFXRHN6F",
          "certificate_url": "https://skillup.io/certificates/CERT-FFXRHN6F"
        },
        "review_id": 68
      }
    ]
  },
  {
    "_id": 423,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0423@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-18 06:53:13",
    "last_online": "2024-11-30 08:42:42",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 423,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 587,
        "course_id": 24,
        "status": "active",
        "enrolled_at": "2024-10-19 19:48:48",
        "last_accessed_at": "2024-11-03 17:09:36",
        "checkpoint_chapter_id": 93,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 424,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0424@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-19 12:14:23",
    "last_online": "2024-11-12 12:27:58",
    "country": "Canada",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 424,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 589,
        "course_id": 49,
        "status": "completed",
        "enrolled_at": "2025-08-18 18:14:37",
        "last_accessed_at": "2026-01-15 09:09:12",
        "checkpoint_chapter_id": 194,
        "certificate": {
          "certificate_id": 230,
          "issued_at": "2025-11-06 18:14:37",
          "certificate_code": "CERT-EY29TS56",
          "certificate_url": "https://skillup.io/certificates/CERT-EY29TS56"
        },
        "review_id": null
      },
      {
        "enrollment_id": 588,
        "course_id": 18,
        "status": "dropped",
        "enrolled_at": "2026-01-14 07:14:29",
        "last_accessed_at": "2026-01-29 12:32:59",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 425,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0425@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-04 21:17:15",
    "last_online": "2024-12-17 15:52:24",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 425,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 590,
        "course_id": 32,
        "status": "completed",
        "enrolled_at": "2025-10-29 21:12:54",
        "last_accessed_at": "2025-11-12 03:40:16",
        "checkpoint_chapter_id": 125,
        "certificate": {
          "certificate_id": 231,
          "issued_at": "2025-12-01 21:12:54",
          "certificate_code": "CERT-Y22YHPHO",
          "certificate_url": "https://skillup.io/certificates/CERT-Y22YHPHO"
        },
        "review_id": 69
      }
    ]
  },
  {
    "_id": 426,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0426@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-26 21:31:23",
    "last_online": "2024-11-03 05:35:11",
    "country": "Australia",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 426,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 591,
        "course_id": 17,
        "status": "active",
        "enrolled_at": "2025-04-01 05:09:13",
        "last_accessed_at": "2025-05-26 17:16:46",
        "checkpoint_chapter_id": 66,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 592,
        "course_id": 24,
        "status": "dropped",
        "enrolled_at": "2025-04-11 01:22:56",
        "last_accessed_at": "2025-10-01 21:02:47",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 427,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0427@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-07 10:06:57",
    "last_online": "2024-10-22 21:52:37",
    "country": "United Kingdom",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 427,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 593,
        "course_id": 23,
        "status": "active",
        "enrolled_at": "2024-01-14 03:55:53",
        "last_accessed_at": "2025-09-14 03:31:12",
        "checkpoint_chapter_id": 90,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 594,
        "course_id": 3,
        "status": "active",
        "enrolled_at": "2024-11-13 21:15:15",
        "last_accessed_at": "2025-09-01 20:56:01",
        "checkpoint_chapter_id": 12,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 428,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0428@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-31 19:24:08",
    "last_online": "2024-11-23 13:51:58",
    "country": "India",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 428,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 595,
        "course_id": 26,
        "status": "completed",
        "enrolled_at": "2025-02-15 03:47:30",
        "last_accessed_at": "2025-03-17 00:47:32",
        "checkpoint_chapter_id": 103,
        "certificate": {
          "certificate_id": 232,
          "issued_at": "2025-04-17 03:47:30",
          "certificate_code": "CERT-B0UNM2GT",
          "certificate_url": "https://skillup.io/certificates/CERT-B0UNM2GT"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 429,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0429@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-20 02:41:53",
    "last_online": "2024-11-06 08:27:37",
    "country": "India",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 429,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 596,
        "course_id": 12,
        "status": "active",
        "enrolled_at": "2024-02-03 13:32:09",
        "last_accessed_at": "2024-06-25 04:35:39",
        "checkpoint_chapter_id": 48,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 430,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0430@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-09 12:03:55",
    "last_online": "2024-12-26 19:13:25",
    "country": "United Kingdom",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 430,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 597,
        "course_id": 30,
        "status": "completed",
        "enrolled_at": "2025-03-14 14:16:21",
        "last_accessed_at": "2025-08-03 14:03:55",
        "checkpoint_chapter_id": 117,
        "certificate": {
          "certificate_id": 233,
          "issued_at": "2025-06-05 14:16:21",
          "certificate_code": "CERT-HCRTYMNB",
          "certificate_url": "https://skillup.io/certificates/CERT-HCRTYMNB"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 431,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0431@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-22 11:39:03",
    "last_online": "2024-12-31 16:17:02",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 431,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 598,
        "course_id": 16,
        "status": "active",
        "enrolled_at": "2025-05-11 06:25:53",
        "last_accessed_at": "2026-01-17 21:22:48",
        "checkpoint_chapter_id": 63,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 599,
        "course_id": 1,
        "status": "active",
        "enrolled_at": "2025-12-30 19:17:01",
        "last_accessed_at": "2026-01-03 18:23:30",
        "checkpoint_chapter_id": 2,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 432,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0432@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-28 13:53:47",
    "last_online": "2024-12-05 00:27:07",
    "country": "Australia",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 432,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 600,
        "course_id": 8,
        "status": "dropped",
        "enrolled_at": "2024-01-01 02:01:19",
        "last_accessed_at": "2024-04-30 12:57:45",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 601,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2024-07-23 16:58:03",
        "last_accessed_at": "2025-02-19 01:08:21",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 234,
          "issued_at": "2024-09-29 16:58:03",
          "certificate_code": "CERT-0FS67KK0",
          "certificate_url": "https://skillup.io/certificates/CERT-0FS67KK0"
        },
        "review_id": 70
      }
    ]
  },
  {
    "_id": 433,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0433@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-26 10:10:23",
    "last_online": "2024-11-21 09:36:40",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 433,
      "introduction": "Greyson Bell is an accomplished instructor specializing in Software Engineering and Communication courses, bringing a unique interdisciplinary perspective shaped by a background in nursing. With experience bridging technical expertise and interpersonal skills, Greyson is passionate about equipping students with both robust software development capabilities and the communication proficiency essential for successful collaboration in today's technology-driven workplace. Known for creating engaging, practical learning experiences, Greyson is committed to fostering the next generation of thoughtful, communicative technical professionals.",
      "started_date": "2024-11-07",
      "last_online": "2025-01-24 14:59:56",
      "degree": "Ph.D. in Business Administration",
      "institution": "University of Pennsylvania",
      "certification": "ITIL Foundation"
    },
    "enrollments": []
  },
  {
    "_id": 434,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0434@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-23 04:55:43",
    "last_online": "2025-01-01 15:07:10",
    "country": "United States",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 434,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 603,
        "course_id": 31,
        "status": "active",
        "enrolled_at": "2024-11-05 19:15:39",
        "last_accessed_at": "2025-12-24 21:27:39",
        "checkpoint_chapter_id": 119,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 602,
        "course_id": 43,
        "status": "completed",
        "enrolled_at": "2025-10-28 06:03:24",
        "last_accessed_at": "2026-01-29 09:26:16",
        "checkpoint_chapter_id": 171,
        "certificate": {
          "certificate_id": 235,
          "issued_at": "2026-01-16 06:03:24",
          "certificate_code": "CERT-DPUIMK3A",
          "certificate_url": "https://skillup.io/certificates/CERT-DPUIMK3A"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 435,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0435@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-08 18:32:24",
    "last_online": "2024-12-22 07:49:00",
    "country": "Australia",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 435,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 604,
        "course_id": 20,
        "status": "completed",
        "enrolled_at": "2024-10-25 19:55:50",
        "last_accessed_at": "2025-03-24 13:42:19",
        "checkpoint_chapter_id": 80,
        "certificate": {
          "certificate_id": 236,
          "issued_at": "2024-12-15 19:55:50",
          "certificate_code": "CERT-QW66TBV4",
          "certificate_url": "https://skillup.io/certificates/CERT-QW66TBV4"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 436,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0436@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-16 08:42:09",
    "last_online": "2025-01-07 12:28:21",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 436,
      "introduction": "Betty Munoz is an experienced Agile and Leadership instructor who brings a wealth of pedagogical expertise to the classroom, having built a strong foundation in teaching methodologies throughout her career. With her background as an educator, Betty brings authentic, engaging instruction that transforms complex Agile principles and leadership concepts into accessible, practical knowledge for her students. She is passionate about fostering collaborative learning environments and empowering professionals to lead teams with agility, resilience, and vision.",
      "started_date": "2024-11-01",
      "last_online": "2025-10-27 22:16:23",
      "degree": "M.A. in Education",
      "institution": "Carnegie Mellon University",
      "certification": "Certified Scrum Product Owner"
    },
    "enrollments": []
  },
  {
    "_id": 437,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0437@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-24 16:01:22",
    "last_online": "2024-12-10 14:35:50",
    "country": "India",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 437,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 605,
        "course_id": 50,
        "status": "active",
        "enrolled_at": "2025-08-22 05:32:51",
        "last_accessed_at": "2025-09-11 13:22:51",
        "checkpoint_chapter_id": 195,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 438,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0438@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-07 09:07:49",
    "last_online": "2025-01-10 05:43:32",
    "country": "United States",
    "background": "Financial Analyst",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 438,
      "introduction": "Lillian Robinson is an experienced instructor specializing in Data Analysis and Leadership courses, bringing a wealth of practical expertise from her background as a Financial Analyst. With a keen ability to translate complex data insights into actionable business strategies, Lillian empowers students to develop critical analytical and leadership skills essential for modern business environments. Her dynamic teaching approach combines real-world financial analysis experience with contemporary leadership principles, preparing professionals to excel in data-driven decision-making roles.",
      "started_date": "2024-11-14",
      "last_online": "2026-01-10 13:37:43",
      "degree": "Ph.D. in Business Administration",
      "institution": "Georgia Tech",
      "certification": "CSM"
    },
    "enrollments": []
  },
  {
    "_id": 439,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0439@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-31 05:10:40",
    "last_online": "2024-11-05 23:37:11",
    "country": "United States",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 439,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 606,
        "course_id": 36,
        "status": "active",
        "enrolled_at": "2024-07-22 21:14:45",
        "last_accessed_at": "2026-01-05 10:06:26",
        "checkpoint_chapter_id": 139,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 440,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0440@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-23 19:39:40",
    "last_online": "2024-11-08 19:44:24",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 440,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 607,
        "course_id": 2,
        "status": "completed",
        "enrolled_at": "2023-04-13 01:41:40",
        "last_accessed_at": "2024-12-05 08:10:42",
        "checkpoint_chapter_id": 9,
        "certificate": {
          "certificate_id": 237,
          "issued_at": "2023-06-17 01:41:40",
          "certificate_code": "CERT-BNKKJEU6",
          "certificate_url": "https://skillup.io/certificates/CERT-BNKKJEU6"
        },
        "review_id": null
      },
      {
        "enrollment_id": 608,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2024-12-03 04:40:05",
        "last_accessed_at": "2025-06-21 03:57:18",
        "checkpoint_chapter_id": 23,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 441,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0441@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-15 14:30:43",
    "last_online": "2024-12-31 06:05:34",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 441,
      "introduction": "Kathryn Stevens is an accomplished instructor specializing in Leadership and Communication courses, bringing a unique perspective shaped by her extensive background in UX Design. Her experience in creating user-centered solutions translates seamlessly into her teaching philosophy, where she emphasizes clear communication, empathetic leadership, and the importance of understanding stakeholder needs. Kathryn is dedicated to equipping her students with practical skills and insights that drive both personal growth and organizational success.",
      "started_date": "2024-12-07",
      "last_online": "2025-04-29 16:49:52",
      "degree": "MBA in Technology Management",
      "institution": "University of Pennsylvania",
      "certification": "SHRM-SCP"
    },
    "enrollments": []
  },
  {
    "_id": 442,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0442@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-06 06:17:47",
    "last_online": "2024-11-27 09:26:47",
    "country": "Australia",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 442,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 609,
        "course_id": 8,
        "status": "dropped",
        "enrolled_at": "2024-03-01 12:01:47",
        "last_accessed_at": "2025-08-03 05:21:30",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 443,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0443@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-02 04:50:04",
    "last_online": "2024-12-27 08:05:55",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 443,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 611,
        "course_id": 35,
        "status": "active",
        "enrolled_at": "2025-06-16 19:33:37",
        "last_accessed_at": "2025-10-13 20:20:05",
        "checkpoint_chapter_id": 135,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 610,
        "course_id": 42,
        "status": "active",
        "enrolled_at": "2025-10-08 16:37:28",
        "last_accessed_at": "2025-10-12 09:31:23",
        "checkpoint_chapter_id": 167,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 444,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0444@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-10-30 15:59:11",
    "last_online": "2024-12-15 18:45:59",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 444,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 612,
        "course_id": 40,
        "status": "completed",
        "enrolled_at": "2025-08-02 22:53:58",
        "last_accessed_at": "2025-09-18 14:00:47",
        "checkpoint_chapter_id": 158,
        "certificate": {
          "certificate_id": 238,
          "issued_at": "2025-11-14 22:53:58",
          "certificate_code": "CERT-J6ULWZO7",
          "certificate_url": "https://skillup.io/certificates/CERT-J6ULWZO7"
        },
        "review_id": 71
      },
      {
        "enrollment_id": 613,
        "course_id": 39,
        "status": "completed",
        "enrolled_at": "2025-12-11 02:16:51",
        "last_accessed_at": "2026-01-04 15:20:50",
        "checkpoint_chapter_id": 153,
        "certificate": {
          "certificate_id": 239,
          "issued_at": "2026-02-09 02:16:51",
          "certificate_code": "CERT-GWRAY15G",
          "certificate_url": "https://skillup.io/certificates/CERT-GWRAY15G"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 445,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0445@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-25 18:41:00",
    "last_online": "2025-01-05 10:55:55",
    "country": "United Kingdom",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 445,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 614,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2025-06-11 11:18:08",
        "last_accessed_at": "2026-01-18 23:51:20",
        "checkpoint_chapter_id": 8,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 615,
        "course_id": 39,
        "status": "completed",
        "enrolled_at": "2025-07-14 10:05:26",
        "last_accessed_at": "2025-08-06 13:19:19",
        "checkpoint_chapter_id": 153,
        "certificate": {
          "certificate_id": 240,
          "issued_at": "2025-09-11 10:05:26",
          "certificate_code": "CERT-3JARE68M",
          "certificate_url": "https://skillup.io/certificates/CERT-3JARE68M"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 446,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0446@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-16 08:00:40",
    "last_online": "2025-01-12 14:11:06",
    "country": "United Kingdom",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 446,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 616,
        "course_id": 19,
        "status": "active",
        "enrolled_at": "2025-05-29 01:55:22",
        "last_accessed_at": "2025-08-17 08:40:09",
        "checkpoint_chapter_id": 74,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 447,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0447@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-06 22:45:45",
    "last_online": "2024-11-21 13:52:27",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 447,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 617,
        "course_id": 42,
        "status": "completed",
        "enrolled_at": "2024-10-10 18:39:50",
        "last_accessed_at": "2026-01-19 23:19:30",
        "checkpoint_chapter_id": 167,
        "certificate": {
          "certificate_id": 241,
          "issued_at": "2025-01-17 18:39:50",
          "certificate_code": "CERT-TQN7EQ06",
          "certificate_url": "https://skillup.io/certificates/CERT-TQN7EQ06"
        },
        "review_id": null
      },
      {
        "enrollment_id": 618,
        "course_id": 22,
        "status": "completed",
        "enrolled_at": "2025-07-26 19:13:17",
        "last_accessed_at": "2025-10-18 05:00:06",
        "checkpoint_chapter_id": 87,
        "certificate": {
          "certificate_id": 242,
          "issued_at": "2025-09-12 19:13:17",
          "certificate_code": "CERT-Z22JD1GW",
          "certificate_url": "https://skillup.io/certificates/CERT-Z22JD1GW"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 448,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0448@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-23 05:02:33",
    "last_online": "2025-01-03 00:25:37",
    "country": "United States",
    "background": "Sales Manager",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 448,
      "introduction": "Courtney Gonzalez is an experienced instructor specializing in Project Management and Communication, bringing a wealth of practical knowledge gained from her background as a Sales Manager. With a deep understanding of team dynamics, stakeholder engagement, and strategic planning, she equips students with the skills necessary to lead projects effectively and communicate with clarity and confidence. Her dynamic teaching approach combines real-world insights with actionable frameworks, empowering learners to excel in today's collaborative professional environment.",
      "started_date": "2024-12-08",
      "last_online": "2024-12-30 17:23:14",
      "degree": "M.S. in Engineering Management",
      "institution": "MIT",
      "certification": "AWS Solutions Architect"
    },
    "enrollments": []
  },
  {
    "_id": 449,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0449@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-19 23:35:41",
    "last_online": "2025-01-16 08:12:37",
    "country": "India",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 449,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 619,
        "course_id": 36,
        "status": "completed",
        "enrolled_at": "2024-08-01 11:33:48",
        "last_accessed_at": "2025-12-15 18:27:31",
        "checkpoint_chapter_id": 139,
        "certificate": {
          "certificate_id": 243,
          "issued_at": "2024-09-17 11:33:48",
          "certificate_code": "CERT-I15SMZ20",
          "certificate_url": "https://skillup.io/certificates/CERT-I15SMZ20"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 450,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0450@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-01 11:47:52",
    "last_online": "2024-12-04 12:59:34",
    "country": "Australia",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 450,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 620,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2025-05-13 11:40:03",
        "last_accessed_at": "2025-09-24 09:54:16",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 244,
          "issued_at": "2025-08-15 11:40:03",
          "certificate_code": "CERT-JI8VRXCL",
          "certificate_url": "https://skillup.io/certificates/CERT-JI8VRXCL"
        },
        "review_id": null
      },
      {
        "enrollment_id": 621,
        "course_id": 49,
        "status": "dropped",
        "enrolled_at": "2025-12-02 21:29:17",
        "last_accessed_at": "2026-01-11 16:04:48",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 451,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0451@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-10 00:53:55",
    "last_online": "2024-12-05 14:41:17",
    "country": "United Kingdom",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 451,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 622,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2025-06-15 09:53:25",
        "last_accessed_at": "2025-07-02 13:49:45",
        "checkpoint_chapter_id": 23,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 452,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0452@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-07 11:27:53",
    "last_online": "2024-12-31 14:31:25",
    "country": "United States",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 452,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 623,
        "course_id": 45,
        "status": "completed",
        "enrolled_at": "2025-10-27 22:46:09",
        "last_accessed_at": "2025-12-02 02:32:57",
        "checkpoint_chapter_id": 179,
        "certificate": {
          "certificate_id": 245,
          "issued_at": "2026-02-23 22:46:09",
          "certificate_code": "CERT-TGF2JIY3",
          "certificate_url": "https://skillup.io/certificates/CERT-TGF2JIY3"
        },
        "review_id": 72
      }
    ]
  },
  {
    "_id": 453,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0453@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-15 09:24:27",
    "last_online": "2025-01-03 10:18:12",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 453,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 624,
        "course_id": 16,
        "status": "active",
        "enrolled_at": "2025-05-17 12:45:22",
        "last_accessed_at": "2025-11-10 21:15:19",
        "checkpoint_chapter_id": 62,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 454,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0454@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-12 19:49:05",
    "last_online": "2025-01-18 17:53:05",
    "country": "United Kingdom",
    "background": "Operations Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 454,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 625,
        "course_id": 14,
        "status": "dropped",
        "enrolled_at": "2024-11-18 08:54:47",
        "last_accessed_at": "2025-02-27 04:54:09",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 626,
        "course_id": 49,
        "status": "active",
        "enrolled_at": "2025-12-25 15:20:09",
        "last_accessed_at": "2026-01-22 22:09:50",
        "checkpoint_chapter_id": 192,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 455,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0455@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-03 16:41:05",
    "last_online": "2024-12-26 18:29:38",
    "country": "India",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 455,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 628,
        "course_id": 44,
        "status": "dropped",
        "enrolled_at": "2025-07-25 12:57:33",
        "last_accessed_at": "2025-11-28 18:59:31",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 627,
        "course_id": 42,
        "status": "active",
        "enrolled_at": "2025-10-31 01:26:37",
        "last_accessed_at": "2025-12-14 13:05:14",
        "checkpoint_chapter_id": 165,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 456,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0456@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-04 23:50:02",
    "last_online": "2025-01-13 16:43:55",
    "country": "India",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 456,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 630,
        "course_id": 9,
        "status": "completed",
        "enrolled_at": "2024-01-14 01:35:37",
        "last_accessed_at": "2025-05-21 08:22:29",
        "checkpoint_chapter_id": 36,
        "certificate": {
          "certificate_id": 246,
          "issued_at": "2024-03-17 01:35:37",
          "certificate_code": "CERT-UCLVRZN1",
          "certificate_url": "https://skillup.io/certificates/CERT-UCLVRZN1"
        },
        "review_id": null
      },
      {
        "enrollment_id": 629,
        "course_id": 46,
        "status": "active",
        "enrolled_at": "2025-10-02 16:44:24",
        "last_accessed_at": "2025-12-27 17:58:51",
        "checkpoint_chapter_id": 180,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 457,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0457@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-27 20:43:11",
    "last_online": "2024-12-16 16:13:06",
    "country": "India",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 457,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 631,
        "course_id": 18,
        "status": "completed",
        "enrolled_at": "2023-12-21 15:21:00",
        "last_accessed_at": "2024-02-26 04:04:35",
        "checkpoint_chapter_id": 73,
        "certificate": {
          "certificate_id": 247,
          "issued_at": "2024-03-19 15:21:00",
          "certificate_code": "CERT-XUOEV335",
          "certificate_url": "https://skillup.io/certificates/CERT-XUOEV335"
        },
        "review_id": null
      },
      {
        "enrollment_id": 632,
        "course_id": 36,
        "status": "active",
        "enrolled_at": "2025-01-09 01:32:43",
        "last_accessed_at": "2025-12-02 14:05:43",
        "checkpoint_chapter_id": 137,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 458,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0458@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-28 07:59:40",
    "last_online": "2024-12-02 00:18:51",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 458,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 633,
        "course_id": 28,
        "status": "active",
        "enrolled_at": "2025-06-29 06:23:59",
        "last_accessed_at": "2026-01-19 15:11:33",
        "checkpoint_chapter_id": 109,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 459,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0459@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-18 10:45:18",
    "last_online": "2024-12-07 08:24:23",
    "country": "United Kingdom",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 459,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 634,
        "course_id": 41,
        "status": "completed",
        "enrolled_at": "2025-12-07 03:15:54",
        "last_accessed_at": "2026-01-05 11:40:44",
        "checkpoint_chapter_id": 163,
        "certificate": {
          "certificate_id": 248,
          "issued_at": "2026-02-10 03:15:54",
          "certificate_code": "CERT-DX7XCKBZ",
          "certificate_url": "https://skillup.io/certificates/CERT-DX7XCKBZ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 460,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0460@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-09 05:01:43",
    "last_online": "2025-01-17 10:54:36",
    "country": "India",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 460,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 635,
        "course_id": 12,
        "status": "completed",
        "enrolled_at": "2025-01-10 17:51:01",
        "last_accessed_at": "2025-12-09 20:35:33",
        "checkpoint_chapter_id": 49,
        "certificate": {
          "certificate_id": 249,
          "issued_at": "2025-03-04 17:51:01",
          "certificate_code": "CERT-MBYWUFM7",
          "certificate_url": "https://skillup.io/certificates/CERT-MBYWUFM7"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 461,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0461@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-25 06:33:31",
    "last_online": "2025-01-09 22:02:53",
    "country": "United Kingdom",
    "background": "Accountant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 461,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 636,
        "course_id": 12,
        "status": "dropped",
        "enrolled_at": "2023-11-11 03:30:54",
        "last_accessed_at": "2024-05-31 07:33:32",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 637,
        "course_id": 31,
        "status": "dropped",
        "enrolled_at": "2025-09-17 19:47:51",
        "last_accessed_at": "2025-12-02 23:55:30",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 462,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0462@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-22 07:19:45",
    "last_online": "2025-01-09 08:31:11",
    "country": "United Kingdom",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 462,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 638,
        "course_id": 19,
        "status": "completed",
        "enrolled_at": "2024-01-07 20:50:55",
        "last_accessed_at": "2024-12-01 19:19:49",
        "checkpoint_chapter_id": 77,
        "certificate": {
          "certificate_id": 250,
          "issued_at": "2024-03-07 20:50:55",
          "certificate_code": "CERT-HB9GPO5D",
          "certificate_url": "https://skillup.io/certificates/CERT-HB9GPO5D"
        },
        "review_id": null
      },
      {
        "enrollment_id": 639,
        "course_id": 21,
        "status": "dropped",
        "enrolled_at": "2026-01-04 01:45:48",
        "last_accessed_at": "2026-01-26 23:03:58",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 463,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0463@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-11-26 12:10:11",
    "last_online": "2025-01-01 00:21:54",
    "country": "United Kingdom",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 463,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 641,
        "course_id": 28,
        "status": "dropped",
        "enrolled_at": "2024-09-24 22:59:01",
        "last_accessed_at": "2025-01-11 17:03:03",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 640,
        "course_id": 29,
        "status": "dropped",
        "enrolled_at": "2025-06-04 18:47:55",
        "last_accessed_at": "2026-01-31 07:47:59",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 464,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0464@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-17 15:59:23",
    "last_online": "2025-01-18 15:21:40",
    "country": "United States",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 464,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 642,
        "course_id": 33,
        "status": "completed",
        "enrolled_at": "2024-10-31 16:13:23",
        "last_accessed_at": "2026-01-28 01:01:37",
        "checkpoint_chapter_id": 129,
        "certificate": {
          "certificate_id": 251,
          "issued_at": "2025-01-20 16:13:23",
          "certificate_code": "CERT-77M388OZ",
          "certificate_url": "https://skillup.io/certificates/CERT-77M388OZ"
        },
        "review_id": 73
      }
    ]
  },
  {
    "_id": 465,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0465@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-06 00:42:02",
    "last_online": "2024-12-20 02:21:54",
    "country": "United States",
    "background": "Entrepreneur",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 465,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 643,
        "course_id": 33,
        "status": "active",
        "enrolled_at": "2025-10-12 03:03:00",
        "last_accessed_at": "2025-11-24 23:34:17",
        "checkpoint_chapter_id": 128,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 466,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0466@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-05 02:56:38",
    "last_online": "2024-12-30 06:26:35",
    "country": "Australia",
    "background": "HR Manager",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 466,
      "introduction": "Paige Murray is an accomplished instructor specializing in UX Design and Leadership development, bringing a wealth of practical experience from her background as an HR Manager. With a unique perspective that bridges human resources strategy and user-centered design, Paige equips her students with the skills to create meaningful digital experiences while fostering strong leadership capabilities. Her courses combine industry best practices with real-world insights, helping professionals excel in both technical design and people-focused leadership roles.",
      "started_date": "2024-12-25",
      "last_online": "2025-01-18 15:48:04",
      "degree": "M.S. in Human-Computer Interaction",
      "institution": "Columbia University",
      "certification": "Google Cloud Professional"
    },
    "enrollments": []
  },
  {
    "_id": 467,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0467@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-18 13:35:50",
    "last_online": "2025-01-14 01:48:31",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 467,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 644,
        "course_id": 46,
        "status": "completed",
        "enrolled_at": "2025-08-15 08:31:46",
        "last_accessed_at": "2026-01-15 15:12:36",
        "checkpoint_chapter_id": 183,
        "certificate": {
          "certificate_id": 252,
          "issued_at": "2025-10-02 08:31:46",
          "certificate_code": "CERT-FQ9P9EP0",
          "certificate_url": "https://skillup.io/certificates/CERT-FQ9P9EP0"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 468,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0468@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-15 05:24:40",
    "last_online": "2025-01-07 20:38:22",
    "country": "United States",
    "background": "Financial Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 468,
      "preferred_language": {
        "language_id": 6,
        "name": "German"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 646,
        "course_id": 43,
        "status": "dropped",
        "enrolled_at": "2024-10-20 21:13:00",
        "last_accessed_at": "2025-05-03 17:06:50",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 645,
        "course_id": 50,
        "status": "active",
        "enrolled_at": "2025-09-22 12:33:35",
        "last_accessed_at": "2025-11-28 14:32:16",
        "checkpoint_chapter_id": 197,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 469,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0469@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-17 02:47:41",
    "last_online": "2024-12-27 21:00:00",
    "country": "India",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 469,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 648,
        "course_id": 34,
        "status": "dropped",
        "enrolled_at": "2024-10-23 09:45:58",
        "last_accessed_at": "2024-11-15 20:06:02",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 647,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2025-05-18 03:55:07",
        "last_accessed_at": "2025-09-13 23:29:49",
        "checkpoint_chapter_id": 5,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 470,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0470@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-21 14:35:13",
    "last_online": "2025-01-06 07:43:40",
    "country": "Canada",
    "background": "Teacher",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 470,
      "introduction": "Owen Romero is an experienced UX Design and Leadership instructor who brings a unique perspective from their background in teaching. With a passion for cultivating both creative problem-solving skills and strong leadership qualities, Owen combines instructional expertise with practical design knowledge to create engaging learning experiences. Their courses equip students with the tools and confidence needed to excel in user-centered design and lead effectively in collaborative environments.",
      "started_date": "2024-12-29",
      "last_online": "2025-11-19 13:42:27",
      "degree": "M.S. in Data Science",
      "institution": "Duke University",
      "certification": "CFA"
    },
    "enrollments": []
  },
  {
    "_id": 471,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0471@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-17 20:43:02",
    "last_online": "2025-01-01 11:38:23",
    "country": "India",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 471,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 650,
        "course_id": 44,
        "status": "active",
        "enrolled_at": "2025-09-06 08:06:55",
        "last_accessed_at": "2025-11-07 18:16:55",
        "checkpoint_chapter_id": 175,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 649,
        "course_id": 32,
        "status": "completed",
        "enrolled_at": "2026-01-19 03:08:43",
        "last_accessed_at": "2026-01-25 14:08:31",
        "checkpoint_chapter_id": 125,
        "certificate": {
          "certificate_id": 253,
          "issued_at": "2026-04-04 03:08:43",
          "certificate_code": "CERT-YMG2IT3E",
          "certificate_url": "https://skillup.io/certificates/CERT-YMG2IT3E"
        },
        "review_id": 74
      }
    ]
  },
  {
    "_id": 472,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0472@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-31 03:40:18",
    "last_online": "2025-01-11 06:33:34",
    "country": "Canada",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 472,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 651,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2024-08-06 16:15:11",
        "last_accessed_at": "2025-01-23 00:46:46",
        "checkpoint_chapter_id": 125,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 473,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0473@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-25 17:05:56",
    "last_online": "2025-01-08 15:23:00",
    "country": "Canada",
    "background": "Product Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 473,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 653,
        "course_id": 6,
        "status": "completed",
        "enrolled_at": "2025-01-16 15:32:05",
        "last_accessed_at": "2025-01-31 01:45:45",
        "checkpoint_chapter_id": 24,
        "certificate": {
          "certificate_id": 254,
          "issued_at": "2025-04-16 15:32:05",
          "certificate_code": "CERT-3R7ZI6DL",
          "certificate_url": "https://skillup.io/certificates/CERT-3R7ZI6DL"
        },
        "review_id": null
      },
      {
        "enrollment_id": 652,
        "course_id": 43,
        "status": "completed",
        "enrolled_at": "2025-09-23 17:37:56",
        "last_accessed_at": "2025-12-08 10:40:52",
        "checkpoint_chapter_id": 171,
        "certificate": {
          "certificate_id": 255,
          "issued_at": "2026-01-14 17:37:56",
          "certificate_code": "CERT-AGL1ZJ83",
          "certificate_url": "https://skillup.io/certificates/CERT-AGL1ZJ83"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 474,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0474@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-03 12:33:46",
    "last_online": "2025-01-05 22:00:22",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 474,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 654,
        "course_id": 2,
        "status": "active",
        "enrolled_at": "2023-05-18 12:23:16",
        "last_accessed_at": "2024-02-04 09:25:57",
        "checkpoint_chapter_id": 5,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 655,
        "course_id": 20,
        "status": "dropped",
        "enrolled_at": "2025-03-07 16:11:41",
        "last_accessed_at": "2025-09-07 02:26:44",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 475,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0475@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-28 22:06:02",
    "last_online": "2025-01-14 13:56:46",
    "country": "Canada",
    "background": "Sales Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 475,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 656,
        "course_id": 35,
        "status": "completed",
        "enrolled_at": "2024-11-18 06:53:41",
        "last_accessed_at": "2025-03-03 02:11:27",
        "checkpoint_chapter_id": 136,
        "certificate": {
          "certificate_id": 256,
          "issued_at": "2025-03-04 06:53:41",
          "certificate_code": "CERT-QEHEQRCM",
          "certificate_url": "https://skillup.io/certificates/CERT-QEHEQRCM"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 476,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0476@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-19 15:55:05",
    "last_online": "2025-01-17 17:31:59",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 476,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 657,
        "course_id": 30,
        "status": "active",
        "enrolled_at": "2024-09-07 20:07:13",
        "last_accessed_at": "2025-10-29 08:31:37",
        "checkpoint_chapter_id": 117,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 658,
        "course_id": 50,
        "status": "active",
        "enrolled_at": "2025-08-03 05:22:22",
        "last_accessed_at": "2025-12-12 04:46:00",
        "checkpoint_chapter_id": 197,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 477,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0477@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-01 20:23:56",
    "last_online": "2025-01-06 23:42:26",
    "country": "United States",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 477,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 660,
        "course_id": 31,
        "status": "completed",
        "enrolled_at": "2025-01-02 12:19:33",
        "last_accessed_at": "2025-01-30 21:13:47",
        "checkpoint_chapter_id": 122,
        "certificate": {
          "certificate_id": 257,
          "issued_at": "2025-03-21 12:19:33",
          "certificate_code": "CERT-SAOC3DR3",
          "certificate_url": "https://skillup.io/certificates/CERT-SAOC3DR3"
        },
        "review_id": null
      },
      {
        "enrollment_id": 659,
        "course_id": 4,
        "status": "active",
        "enrolled_at": "2025-02-02 20:01:25",
        "last_accessed_at": "2025-12-30 11:11:49",
        "checkpoint_chapter_id": 17,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 478,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0478@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-08 19:52:12",
    "last_online": "2025-01-14 09:16:28",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 478,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 662,
        "course_id": 23,
        "status": "completed",
        "enrolled_at": "2024-10-10 18:20:08",
        "last_accessed_at": "2026-01-11 07:37:31",
        "checkpoint_chapter_id": 90,
        "certificate": {
          "certificate_id": 258,
          "issued_at": "2025-01-03 18:20:08",
          "certificate_code": "CERT-6B3YPT3J",
          "certificate_url": "https://skillup.io/certificates/CERT-6B3YPT3J"
        },
        "review_id": 75
      },
      {
        "enrollment_id": 661,
        "course_id": 50,
        "status": "dropped",
        "enrolled_at": "2025-01-26 22:37:20",
        "last_accessed_at": "2026-01-19 21:49:04",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 479,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0479@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-26 23:26:16",
    "last_online": "2024-12-31 15:05:55",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 479,
      "introduction": "Reagan Johnston is an experienced instructor specializing in Leadership and Project Management courses, bringing a unique perspective shaped by a robust background in software engineering. With hands-on expertise in managing complex technical projects and leading high-performing teams, Reagan equips students with practical insights and industry-tested strategies for driving organizational success. Dedicated to fostering critical thinking and professional growth, Reagan creates dynamic learning environments where aspiring leaders can develop the skills needed to excel in today's competitive business landscape.",
      "started_date": "2025-01-18",
      "last_online": "2025-03-01 11:03:26",
      "degree": "M.S. in Engineering Management",
      "institution": "Harvard Business School",
      "certification": "Lean Six Sigma Green Belt"
    },
    "enrollments": []
  },
  {
    "_id": 480,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0480@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-30 22:18:01",
    "last_online": "2024-12-31 02:15:35",
    "country": "India",
    "background": "Healthcare Administrator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 480,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 663,
        "course_id": 15,
        "status": "dropped",
        "enrolled_at": "2024-11-07 13:43:49",
        "last_accessed_at": "2025-01-14 05:31:18",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 664,
        "course_id": 9,
        "status": "completed",
        "enrolled_at": "2025-07-05 11:49:23",
        "last_accessed_at": "2025-10-04 20:53:57",
        "checkpoint_chapter_id": 36,
        "certificate": {
          "certificate_id": 259,
          "issued_at": "2025-09-20 11:49:23",
          "certificate_code": "CERT-7E9WLZIU",
          "certificate_url": "https://skillup.io/certificates/CERT-7E9WLZIU"
        },
        "review_id": 76
      }
    ]
  },
  {
    "_id": 481,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0481@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-17 08:30:28",
    "last_online": "2025-01-19 06:10:51",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 481,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 666,
        "course_id": 32,
        "status": "active",
        "enrolled_at": "2025-04-18 11:38:25",
        "last_accessed_at": "2025-09-08 12:31:47",
        "checkpoint_chapter_id": 125,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 665,
        "course_id": 16,
        "status": "active",
        "enrolled_at": "2026-01-28 04:41:16",
        "last_accessed_at": "2026-01-31 18:41:27",
        "checkpoint_chapter_id": 63,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 482,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0482@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-28 12:11:43",
    "last_online": "2025-01-08 03:02:07",
    "country": "India",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 482,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 667,
        "course_id": 2,
        "status": "dropped",
        "enrolled_at": "2024-05-26 22:05:16",
        "last_accessed_at": "2025-10-22 07:08:36",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 668,
        "course_id": 18,
        "status": "active",
        "enrolled_at": "2024-08-19 04:22:02",
        "last_accessed_at": "2024-10-16 17:10:36",
        "checkpoint_chapter_id": 72,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 483,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0483@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-29 17:01:03",
    "last_online": "2025-01-10 02:33:38",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 483,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 669,
        "course_id": 43,
        "status": "completed",
        "enrolled_at": "2026-01-26 15:00:25",
        "last_accessed_at": "2026-02-02 08:14:34",
        "checkpoint_chapter_id": 171,
        "certificate": {
          "certificate_id": 260,
          "issued_at": "2026-02-28 15:00:25",
          "certificate_code": "CERT-G6V6ZCTX",
          "certificate_url": "https://skillup.io/certificates/CERT-G6V6ZCTX"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 484,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0484@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-19 09:44:44",
    "last_online": "2025-01-19 23:50:11",
    "country": "United States",
    "background": "Career Changer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 484,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 671,
        "course_id": 23,
        "status": "completed",
        "enrolled_at": "2024-11-03 13:14:49",
        "last_accessed_at": "2025-04-25 09:26:47",
        "checkpoint_chapter_id": 90,
        "certificate": {
          "certificate_id": 261,
          "issued_at": "2024-12-10 13:14:49",
          "certificate_code": "CERT-6QQXT17T",
          "certificate_url": "https://skillup.io/certificates/CERT-6QQXT17T"
        },
        "review_id": null
      },
      {
        "enrollment_id": 670,
        "course_id": 34,
        "status": "active",
        "enrolled_at": "2025-07-09 07:10:23",
        "last_accessed_at": "2025-07-21 22:28:30",
        "checkpoint_chapter_id": 132,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 485,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0485@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2024-12-27 14:54:52",
    "last_online": "2024-12-31 12:54:42",
    "country": "United States",
    "background": "Nurse",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 485,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 673,
        "course_id": 28,
        "status": "dropped",
        "enrolled_at": "2024-05-09 06:34:12",
        "last_accessed_at": "2025-08-25 02:27:42",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 672,
        "course_id": 42,
        "status": "active",
        "enrolled_at": "2026-01-17 00:44:10",
        "last_accessed_at": "2026-01-22 05:38:11",
        "checkpoint_chapter_id": 167,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 486,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0486@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-24 08:59:20",
    "last_online": "2025-01-23 09:56:53",
    "country": "Canada",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 486,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 674,
        "course_id": 49,
        "status": "completed",
        "enrolled_at": "2025-09-24 18:42:13",
        "last_accessed_at": "2025-10-08 06:00:38",
        "checkpoint_chapter_id": 194,
        "certificate": {
          "certificate_id": 262,
          "issued_at": "2025-12-30 18:42:13",
          "certificate_code": "CERT-MBO1MMMA",
          "certificate_url": "https://skillup.io/certificates/CERT-MBO1MMMA"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 487,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0487@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-21 18:01:41",
    "last_online": "2025-01-20 06:15:04",
    "country": "United States",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 487,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 675,
        "course_id": 12,
        "status": "active",
        "enrolled_at": "2024-01-24 19:12:38",
        "last_accessed_at": "2026-01-04 10:51:08",
        "checkpoint_chapter_id": 49,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 488,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0488@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-28 05:29:24",
    "last_online": "2025-01-20 11:52:42",
    "country": "United States",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 488,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "fast"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 676,
        "course_id": 6,
        "status": "active",
        "enrolled_at": "2025-07-20 01:32:52",
        "last_accessed_at": "2025-07-21 10:51:26",
        "checkpoint_chapter_id": 23,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 489,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0489@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-19 10:53:50",
    "last_online": "2025-01-19 19:48:21",
    "country": "United States",
    "background": "Marketing Manager",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 489,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 677,
        "course_id": 30,
        "status": "completed",
        "enrolled_at": "2025-11-12 04:27:14",
        "last_accessed_at": "2025-11-29 02:43:27",
        "checkpoint_chapter_id": 117,
        "certificate": {
          "certificate_id": 263,
          "issued_at": "2026-02-27 04:27:14",
          "certificate_code": "CERT-SDON4TD9",
          "certificate_url": "https://skillup.io/certificates/CERT-SDON4TD9"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 490,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0490@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-08 09:07:08",
    "last_online": "2025-01-11 22:18:54",
    "country": "United States",
    "background": "Software Engineer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 490,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 678,
        "course_id": 8,
        "status": "dropped",
        "enrolled_at": "2024-07-01 13:20:49",
        "last_accessed_at": "2024-09-02 05:23:58",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 491,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0491@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-16 10:11:15",
    "last_online": "2025-01-17 04:44:49",
    "country": "India",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 491,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "slow"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 679,
        "course_id": 2,
        "status": "completed",
        "enrolled_at": "2023-11-25 00:51:44",
        "last_accessed_at": "2025-05-18 15:04:06",
        "checkpoint_chapter_id": 9,
        "certificate": {
          "certificate_id": 264,
          "issued_at": "2024-01-22 00:51:44",
          "certificate_code": "CERT-LIZ7YJYW",
          "certificate_url": "https://skillup.io/certificates/CERT-LIZ7YJYW"
        },
        "review_id": null
      },
      {
        "enrollment_id": 680,
        "course_id": 14,
        "status": "dropped",
        "enrolled_at": "2024-04-21 06:28:12",
        "last_accessed_at": "2024-10-14 16:07:45",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 492,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0492@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-15 03:59:15",
    "last_online": "2025-01-19 17:33:52",
    "country": "United Kingdom",
    "background": "Consultant",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 492,
      "preferred_language": {
        "language_id": 3,
        "name": "Mandarin"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 682,
        "course_id": 50,
        "status": "completed",
        "enrolled_at": "2025-07-29 08:49:33",
        "last_accessed_at": "2025-12-20 17:00:01",
        "checkpoint_chapter_id": 197,
        "certificate": {
          "certificate_id": 265,
          "issued_at": "2025-11-14 08:49:33",
          "certificate_code": "CERT-ZFP1P0AV",
          "certificate_url": "https://skillup.io/certificates/CERT-ZFP1P0AV"
        },
        "review_id": null
      },
      {
        "enrollment_id": 681,
        "course_id": 23,
        "status": "completed",
        "enrolled_at": "2025-08-25 01:46:51",
        "last_accessed_at": "2026-01-22 09:06:59",
        "checkpoint_chapter_id": 90,
        "certificate": {
          "certificate_id": 266,
          "issued_at": "2025-11-09 01:46:51",
          "certificate_code": "CERT-8E5AM9M0",
          "certificate_url": "https://skillup.io/certificates/CERT-8E5AM9M0"
        },
        "review_id": 77
      }
    ]
  },
  {
    "_id": 493,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0493@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-14 23:31:47",
    "last_online": "2025-01-16 16:26:00",
    "country": "United States",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 493,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 684,
        "course_id": 38,
        "status": "completed",
        "enrolled_at": "2024-08-24 01:30:26",
        "last_accessed_at": "2024-11-26 01:54:57",
        "checkpoint_chapter_id": 149,
        "certificate": {
          "certificate_id": 267,
          "issued_at": "2024-12-18 01:30:26",
          "certificate_code": "CERT-TWC22KP0",
          "certificate_url": "https://skillup.io/certificates/CERT-TWC22KP0"
        },
        "review_id": null
      },
      {
        "enrollment_id": 683,
        "course_id": 23,
        "status": "completed",
        "enrolled_at": "2025-04-01 22:12:50",
        "last_accessed_at": "2025-12-25 16:25:46",
        "checkpoint_chapter_id": 90,
        "certificate": {
          "certificate_id": 268,
          "issued_at": "2025-05-07 22:12:50",
          "certificate_code": "CERT-5OEF3ZTT",
          "certificate_url": "https://skillup.io/certificates/CERT-5OEF3ZTT"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 494,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0494@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-14 11:55:37",
    "last_online": "2025-01-18 08:46:46",
    "country": "Canada",
    "background": "Business Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 494,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 685,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2026-01-15 22:17:28",
        "last_accessed_at": "2026-01-25 01:26:56",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 269,
          "issued_at": "2026-02-14 22:17:28",
          "certificate_code": "CERT-P8ES8U7S",
          "certificate_url": "https://skillup.io/certificates/CERT-P8ES8U7S"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 495,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0495@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-12 11:02:57",
    "last_online": "2025-01-19 12:06:13",
    "country": "United States",
    "background": "Teacher",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 495,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 687,
        "course_id": 17,
        "status": "completed",
        "enrolled_at": "2025-02-08 23:55:45",
        "last_accessed_at": "2025-12-25 00:16:17",
        "checkpoint_chapter_id": 68,
        "certificate": {
          "certificate_id": 270,
          "issued_at": "2025-05-27 23:55:45",
          "certificate_code": "CERT-252HZYUM",
          "certificate_url": "https://skillup.io/certificates/CERT-252HZYUM"
        },
        "review_id": 78
      },
      {
        "enrollment_id": 686,
        "course_id": 47,
        "status": "completed",
        "enrolled_at": "2025-10-04 09:23:50",
        "last_accessed_at": "2025-11-22 00:08:23",
        "checkpoint_chapter_id": 187,
        "certificate": {
          "certificate_id": 271,
          "issued_at": "2025-12-21 09:23:50",
          "certificate_code": "CERT-T3PLYH4Y",
          "certificate_url": "https://skillup.io/certificates/CERT-T3PLYH4Y"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 496,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0496@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-31 23:03:30",
    "last_online": "2025-01-27 10:03:57",
    "country": "Canada",
    "background": "UX Designer",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 496,
      "preferred_language": {
        "language_id": 4,
        "name": "French"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 688,
        "course_id": 23,
        "status": "completed",
        "enrolled_at": "2025-07-09 22:18:22",
        "last_accessed_at": "2025-07-19 03:31:04",
        "checkpoint_chapter_id": 90,
        "certificate": {
          "certificate_id": 272,
          "issued_at": "2025-08-31 22:18:22",
          "certificate_code": "CERT-AFFDVQPC",
          "certificate_url": "https://skillup.io/certificates/CERT-AFFDVQPC"
        },
        "review_id": null
      },
      {
        "enrollment_id": 689,
        "course_id": 48,
        "status": "active",
        "enrolled_at": "2025-10-22 09:50:35",
        "last_accessed_at": "2025-12-26 16:40:43",
        "checkpoint_chapter_id": 189,
        "certificate": null,
        "review_id": null
      }
    ]
  },
  {
    "_id": 497,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0497@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-02-11 15:54:25",
    "last_online": "2025-02-09 17:45:05",
    "country": "Canada",
    "background": "Data Analyst",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 497,
      "preferred_language": {
        "language_id": 1,
        "name": "English"
      },
      "preferred_learning_speed": "self-paced"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 690,
        "course_id": 24,
        "status": "completed",
        "enrolled_at": "2025-01-12 20:38:00",
        "last_accessed_at": "2025-08-20 12:14:04",
        "checkpoint_chapter_id": 95,
        "certificate": {
          "certificate_id": 273,
          "issued_at": "2025-04-11 20:38:00",
          "certificate_code": "CERT-KJHVZBCQ",
          "certificate_url": "https://skillup.io/certificates/CERT-KJHVZBCQ"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 498,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0498@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-02-06 13:37:37",
    "last_online": "2025-01-28 04:37:59",
    "country": "United Kingdom",
    "background": "IT Professional",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 498,
      "preferred_language": {
        "language_id": 2,
        "name": "Spanish"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 691,
        "course_id": 45,
        "status": "dropped",
        "enrolled_at": "2025-02-05 03:12:37",
        "last_accessed_at": "2025-08-12 16:59:53",
        "checkpoint_chapter_id": null,
        "certificate": null,
        "review_id": null
      },
      {
        "enrollment_id": 692,
        "course_id": 6,
        "status": "completed",
        "enrolled_at": "2025-02-12 12:02:16",
        "last_accessed_at": "2025-08-25 04:51:03",
        "checkpoint_chapter_id": 24,
        "certificate": {
          "certificate_id": 274,
          "issued_at": "2025-06-01 12:02:16",
          "certificate_code": "CERT-1QU0BBWV",
          "certificate_url": "https://skillup.io/certificates/CERT-1QU0BBWV"
        },
        "review_id": 79
      }
    ]
  },
  {
    "_id": 499,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0499@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-02-10 01:37:42",
    "last_online": "2025-01-20 09:32:31",
    "country": "Canada",
    "background": "Project Coordinator",
    "roles": [
      "learner"
    ],
    "learner_profile": {
      "learner_id": 499,
      "preferred_language": {
        "language_id": 5,
        "name": "Arabic"
      },
      "preferred_learning_speed": "moderate"
    },
    "instructor_profile": null,
    "enrollments": [
      {
        "enrollment_id": 693,
        "course_id": 28,
        "status": "completed",
        "enrolled_at": "2025-01-08 08:30:24",
        "last_accessed_at": "2025-09-23 00:50:39",
        "checkpoint_chapter_id": 110,
        "certificate": {
          "certificate_id": 275,
          "issued_at": "2025-02-09 08:30:24",
          "certificate_code": "CERT-50D4YBBT",
          "certificate_url": "https://skillup.io/certificates/CERT-50D4YBBT"
        },
        "review_id": null
      }
    ]
  },
  {
    "_id": 500,
    "first_name": "Demo",
    "last_name": "User",
    "email": "demo0500@example.invalid",
    "dob": null,
    "phone": null,
    "password_hash": "NOT_A_REAL_HASH",
    "hash_type": "demo-placeholder",
    "account_created": "2025-01-21 18:07:37",
    "last_online": "2025-01-21 05:26:41",
    "country": "United States",
    "background": "HR Manager",
    "roles": [
      "instructor"
    ],
    "learner_profile": null,
    "instructor_profile": {
      "instructor_id": 500,
      "introduction": "Silas Gutierrez is an experienced instructor specializing in Data Analysis and Communication courses, bringing valuable real-world insight from a background as an HR Manager. With expertise in translating complex data insights into clear, actionable communication, Silas empowers students to develop critical analytical skills while mastering the art of presenting findings to diverse audiences. Passionate about bridging the gap between technical proficiency and professional communication, Silas creates engaging learning experiences that prepare students for success in today's data-driven workplace.",
      "started_date": "2025-02-05",
      "last_online": "2026-01-14 13:12:46",
      "degree": "M.S. in Human-Computer Interaction",
      "institution": "University of Pennsylvania",
      "certification": "SHRM-SCP"
    },
    "enrollments": []
  }
];

const coursesData = [
  {
    "_id": 1,
    "title": "Advanced Professional Communication Skills Development",
    "description": "Learners will master strategic communication techniques essential for leadership roles, including stakeholder engagement, difficult conversations, and cross-functional collaboration. This course equips professionals with practical tools to enhance clarity, persuasion, and emotional intelligence in complex corporate environments.",
    "proficiency": "Intermediate",
    "learning_hours": 13,
    "fee": 0,
    "created_at": "2023-03-20 23:29:40",
    "last_updated": "2024-01-16 15:38:02",
    "organization": {
      "org_id": 11,
      "name": "Pluralsight",
      "website": "https://www.pluralsight.com",
      "email": "demo0501@example.invalid",
      "phone": null,
      "description": "Technology workforce development platform with expert-authored courses in software development, IT, and creative skills.",
      "type": "EdTech Company"
    },
    "primary_instructor_id": 470,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 2,
        "name": "Project Management"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      }
    ],
    "skills": [
      {
        "skill_id": 63,
        "name": "Agile Estimation"
      },
      {
        "skill_id": 12,
        "name": "Budget Management"
      },
      {
        "skill_id": 42,
        "name": "Roadmapping"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 1,
        "title": "Chapter 1: Fundamentals of Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 1,
            "title": "Reading: Common Challenges",
            "content": "Content for reading: common challenges in Chapter 1: Fundamentals of Strategies.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/1/chapters/1/items/1"
          },
          {
            "item_id": 2,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 1: Fundamentals of Strategies.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/1/chapters/1/items/2"
          },
          {
            "item_id": 3,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 1: Fundamentals of Strategies.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/1/chapters/1/items/3"
          }
        ]
      },
      {
        "chapter_id": 2,
        "title": "Chapter 2: Core Concepts in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 4,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 2: Core Concepts in Methods.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/1/chapters/2/items/4"
          },
          {
            "item_id": 5,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 2: Core Concepts in Methods.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/1/chapters/2/items/5"
          },
          {
            "item_id": 6,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 2: Core Concepts in Methods.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/1/chapters/2/items/6"
          },
          {
            "item_id": 7,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 2: Core Concepts in Methods.",
            "item_order": 4,
            "url": "https://course.skillup.io/courses/1/chapters/2/items/7"
          }
        ]
      },
      {
        "chapter_id": 3,
        "title": "Chapter 3: Applied Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 8,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 3: Applied Practices.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/1/chapters/3/items/8"
          },
          {
            "item_id": 9,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 3: Applied Practices.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/1/chapters/3/items/9"
          }
        ]
      },
      {
        "chapter_id": 4,
        "title": "Chapter 4: Advanced Topics in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 10,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/1/chapters/4/items/10"
          },
          {
            "item_id": 11,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/1/chapters/4/items/11"
          }
        ]
      }
    ]
  },
  {
    "_id": 2,
    "title": "Advanced Data Analysis and Predictive Modeling",
    "description": "Master advanced statistical techniques and machine learning algorithms to extract actionable insights from complex datasets. This comprehensive course equips professionals with the skills to build predictive models, perform sophisticated data transformations, and implement data-driven decision-making strategies in enterprise environments.",
    "proficiency": "Advanced",
    "learning_hours": 26,
    "fee": 229,
    "created_at": "2023-03-22 17:12:47",
    "last_updated": "2024-03-28 17:49:24",
    "organization": {
      "org_id": 3,
      "name": "Wharton Online",
      "website": "https://online.wharton.upenn.edu",
      "email": "demo0502@example.invalid",
      "phone": null,
      "description": "University of Pennsylvania's Wharton School delivering world-class business education through digital learning experiences.",
      "type": "University"
    },
    "primary_instructor_id": 438,
    "instructors": [
      {
        "instructor_id": 6,
        "user_id": 6,
        "role": "Lab Instructor",
        "assigned_at": "2023-03-04 00:32:54"
      },
      {
        "instructor_id": 314,
        "user_id": 314,
        "role": "Co-Instructor",
        "assigned_at": "2023-03-14 22:26:21"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 2,
        "name": "Project Management"
      },
      {
        "category_id": 4,
        "name": "Data Analysis"
      }
    ],
    "skills": [
      {
        "skill_id": 60,
        "name": "Retrospectives"
      },
      {
        "skill_id": 6,
        "name": "Change Management"
      },
      {
        "skill_id": 49,
        "name": "User Interface Design"
      },
      {
        "skill_id": 32,
        "name": "Machine Learning Basics"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 5,
        "title": "Chapter 1: Fundamentals of Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 12,
            "title": "Reading: Tools & Techniques",
            "content": "Content for reading: tools & techniques in Chapter 1: Fundamentals of Methods.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/2/chapters/5/items/12"
          },
          {
            "item_id": 13,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 1: Fundamentals of Methods.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/2/chapters/5/items/13"
          },
          {
            "item_id": 14,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 1: Fundamentals of Methods.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/2/chapters/5/items/14"
          }
        ]
      },
      {
        "chapter_id": 6,
        "title": "Chapter 2: Core Concepts in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 15,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 2: Core Concepts in Practices.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/2/chapters/6/items/15"
          },
          {
            "item_id": 16,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 2: Core Concepts in Practices.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/2/chapters/6/items/16"
          }
        ]
      },
      {
        "chapter_id": 7,
        "title": "Chapter 3: Applied Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 17,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 3: Applied Frameworks.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/2/chapters/7/items/17"
          },
          {
            "item_id": 18,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 3: Applied Frameworks.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/2/chapters/7/items/18"
          }
        ]
      },
      {
        "chapter_id": 8,
        "title": "Chapter 4: Advanced Topics in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 19,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 4: Advanced Topics in Applications.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/2/chapters/8/items/19"
          },
          {
            "item_id": 20,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 4: Advanced Topics in Applications.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/2/chapters/8/items/20"
          },
          {
            "item_id": 21,
            "title": "Discussion: Key Concepts",
            "content": "Content for discussion: key concepts in Chapter 4: Advanced Topics in Applications.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/2/chapters/8/items/21"
          },
          {
            "item_id": 22,
            "title": "Lesson: Best Practices",
            "content": "Content for lesson: best practices in Chapter 4: Advanced Topics in Applications.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/2/chapters/8/items/22"
          }
        ]
      },
      {
        "chapter_id": 9,
        "title": "Chapter 5: Practical Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 23,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 5: Practical Skills.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/2/chapters/9/items/23"
          },
          {
            "item_id": 24,
            "title": "Discussion: Key Concepts",
            "content": "Content for discussion: key concepts in Chapter 5: Practical Skills.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/2/chapters/9/items/24"
          }
        ]
      }
    ]
  },
  {
    "_id": 3,
    "title": "Advanced Product Management: Strategy, Analytics, and Execution",
    "description": "Learners will master advanced product management frameworks, data-driven decision-making, and cross-functional leadership techniques to drive product success in competitive markets. This course equips professionals with practical strategies for prioritization, roadmap development, user research, and stakeholder management while building expertise in analytics and metrics-driven product optimization.",
    "proficiency": "Intermediate",
    "learning_hours": 23,
    "fee": 260,
    "created_at": "2023-04-11 16:15:49",
    "last_updated": "2023-04-23 22:12:47",
    "organization": {
      "org_id": 10,
      "name": "SHRM Education",
      "website": "https://www.shrm.org/learning",
      "email": "demo0503@example.invalid",
      "phone": null,
      "description": "Society for Human Resource Management's learning center for HR professionals seeking certification and skill development.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 470,
    "instructors": [
      {
        "instructor_id": 63,
        "user_id": 63,
        "role": "Guest Lecturer",
        "assigned_at": "2023-04-04 03:49:29"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 6,
        "name": "Product Management"
      }
    ],
    "skills": [
      {
        "skill_id": 20,
        "name": "Presentation Skills"
      },
      {
        "skill_id": 19,
        "name": "Active Listening"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 10,
        "title": "Chapter 1: Fundamentals of Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 25,
            "title": "Reading: Real-World Examples",
            "content": "Content for reading: real-world examples in Chapter 1: Fundamentals of Practices.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/3/chapters/10/items/25"
          },
          {
            "item_id": 26,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 1: Fundamentals of Practices.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/3/chapters/10/items/26"
          }
        ]
      },
      {
        "chapter_id": 11,
        "title": "Chapter 2: Core Concepts in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 27,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/3/chapters/11/items/27"
          },
          {
            "item_id": 28,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/3/chapters/11/items/28"
          },
          {
            "item_id": 29,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/3/chapters/11/items/29"
          }
        ]
      },
      {
        "chapter_id": 12,
        "title": "Chapter 3: Applied Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 30,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 3: Applied Applications.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/3/chapters/12/items/30"
          },
          {
            "item_id": 31,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 3: Applied Applications.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/3/chapters/12/items/31"
          },
          {
            "item_id": 32,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 3: Applied Applications.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/3/chapters/12/items/32"
          }
        ]
      },
      {
        "chapter_id": 13,
        "title": "Chapter 4: Advanced Topics in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 33,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 4: Advanced Topics in Skills.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/3/chapters/13/items/33"
          },
          {
            "item_id": 34,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 4: Advanced Topics in Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/3/chapters/13/items/34"
          },
          {
            "item_id": 35,
            "title": "Discussion: Best Practices",
            "content": "Content for discussion: best practices in Chapter 4: Advanced Topics in Skills.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/3/chapters/13/items/35"
          }
        ]
      }
    ]
  },
  {
    "_id": 4,
    "title": "Mastering Advanced UX Design Principles and Methods",
    "description": "This intermediate-level course enables professionals to deepen their UX design expertise by mastering advanced principles, research methodologies, and modern design frameworks. Learners will develop skills in conducting comprehensive user research, creating sophisticated wireframes and prototypes, and implementing accessibility standards while learning industry best practices used by leading tech companies.",
    "proficiency": "Intermediate",
    "learning_hours": 10,
    "fee": 215,
    "created_at": "2023-04-29 12:16:55",
    "last_updated": "2024-06-04 07:25:35",
    "organization": {
      "org_id": 7,
      "name": "General Assembly",
      "website": "https://generalassemb.ly",
      "email": "demo0504@example.invalid",
      "phone": null,
      "description": "Pioneer in tech bootcamps offering immersive programs in software engineering, data science, UX design, and product management.",
      "type": "Bootcamp"
    },
    "primary_instructor_id": 162,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 4,
        "name": "French"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      }
    ],
    "categories": [
      {
        "category_id": 2,
        "name": "Project Management"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      }
    ],
    "skills": [
      {
        "skill_id": 9,
        "name": "Risk Management"
      },
      {
        "skill_id": 26,
        "name": "Python"
      },
      {
        "skill_id": 17,
        "name": "Public Speaking"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 14,
        "title": "Chapter 1: Fundamentals of Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 36,
            "title": "Reading: Hands-On Practice",
            "content": "Content for reading: hands-on practice in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/4/chapters/14/items/36"
          },
          {
            "item_id": 37,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/4/chapters/14/items/37"
          },
          {
            "item_id": 38,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/4/chapters/14/items/38"
          },
          {
            "item_id": 39,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/4/chapters/14/items/39"
          }
        ]
      },
      {
        "chapter_id": 15,
        "title": "Chapter 2: Core Concepts in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 40,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 2: Core Concepts in Applications.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/4/chapters/15/items/40"
          },
          {
            "item_id": 41,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 2: Core Concepts in Applications.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/4/chapters/15/items/41"
          }
        ]
      },
      {
        "chapter_id": 16,
        "title": "Chapter 3: Applied Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 42,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 3: Applied Skills.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/4/chapters/16/items/42"
          },
          {
            "item_id": 43,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 3: Applied Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/4/chapters/16/items/43"
          }
        ]
      },
      {
        "chapter_id": 17,
        "title": "Chapter 4: Advanced Topics in Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 44,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 4: Advanced Topics in Principles.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/4/chapters/17/items/44"
          },
          {
            "item_id": 45,
            "title": "Quiz: Best Practices",
            "content": "Content for quiz: best practices in Chapter 4: Advanced Topics in Principles.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/4/chapters/17/items/45"
          },
          {
            "item_id": 46,
            "title": "Discussion: Common Challenges",
            "content": "Content for discussion: common challenges in Chapter 4: Advanced Topics in Principles.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/4/chapters/17/items/46"
          }
        ]
      },
      {
        "chapter_id": 18,
        "title": "Chapter 5: Practical Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 47,
            "title": "Quiz: Best Practices",
            "content": "Content for quiz: best practices in Chapter 5: Practical Techniques.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/4/chapters/18/items/47"
          },
          {
            "item_id": 48,
            "title": "Discussion: Common Challenges",
            "content": "Content for discussion: common challenges in Chapter 5: Practical Techniques.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/4/chapters/18/items/48"
          },
          {
            "item_id": 49,
            "title": "Lesson: Tools & Techniques",
            "content": "Content for lesson: tools & techniques in Chapter 5: Practical Techniques.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/4/chapters/18/items/49"
          },
          {
            "item_id": 50,
            "title": "Video: Real-World Examples",
            "content": "Content for video: real-world examples in Chapter 5: Practical Techniques.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/4/chapters/18/items/50"
          }
        ]
      }
    ]
  },
  {
    "_id": 5,
    "title": "Advanced Agile Transformation and Enterprise Scaling",
    "description": "Master enterprise-wide agile transformation strategies and learn to scale agile frameworks across complex organizational structures. This advanced course covers SAFe, LeSS, and Spotify models while addressing real-world challenges of implementing agile in large corporations, managing stakeholder alignment, and optimizing delivery pipelines for maximum competitive advantage.",
    "proficiency": "Advanced",
    "learning_hours": 27,
    "fee": 387,
    "created_at": "2023-04-30 19:17:01",
    "last_updated": "2023-09-07 05:47:37",
    "organization": {
      "org_id": 5,
      "name": "Google Career Certificates",
      "website": "https://grow.google/certificates",
      "email": "demo0505@example.invalid",
      "phone": null,
      "description": "Google's professional certificate programs designed to prepare learners for high-growth careers in technology fields.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 314,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 7,
        "name": "UX Design"
      }
    ],
    "skills": [
      {
        "skill_id": 63,
        "name": "Agile Estimation"
      },
      {
        "skill_id": 10,
        "name": "Stakeholder Management"
      },
      {
        "skill_id": 53,
        "name": "Information Architecture"
      },
      {
        "skill_id": 33,
        "name": "Java"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 19,
        "title": "Chapter 1: Fundamentals of Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 51,
            "title": "Reading: Review & Assessment",
            "content": "Content for reading: review & assessment in Chapter 1: Fundamentals of Applications.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/5/chapters/19/items/51"
          },
          {
            "item_id": 52,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 1: Fundamentals of Applications.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/5/chapters/19/items/52"
          },
          {
            "item_id": 53,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 1: Fundamentals of Applications.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/5/chapters/19/items/53"
          },
          {
            "item_id": 54,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 1: Fundamentals of Applications.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/5/chapters/19/items/54"
          }
        ]
      },
      {
        "chapter_id": 20,
        "title": "Chapter 2: Core Concepts in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 55,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 2: Core Concepts in Skills.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/5/chapters/20/items/55"
          },
          {
            "item_id": 56,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 2: Core Concepts in Skills.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/5/chapters/20/items/56"
          },
          {
            "item_id": 57,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 2: Core Concepts in Skills.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/5/chapters/20/items/57"
          },
          {
            "item_id": 58,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 2: Core Concepts in Skills.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/5/chapters/20/items/58"
          }
        ]
      },
      {
        "chapter_id": 21,
        "title": "Chapter 3: Applied Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 59,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 3: Applied Principles.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/5/chapters/21/items/59"
          },
          {
            "item_id": 60,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 3: Applied Principles.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/5/chapters/21/items/60"
          },
          {
            "item_id": 61,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 3: Applied Principles.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/5/chapters/21/items/61"
          }
        ]
      }
    ]
  },
  {
    "_id": 6,
    "title": "Advanced Product Strategy and Market Leadership",
    "description": "Develop strategic expertise in product roadmapping, competitive positioning, and stakeholder management to drive organizational growth and market differentiation. This advanced course equips experienced product managers with frameworks for navigating complex market dynamics, building scalable products, and leading high-performing cross-functional teams in competitive landscapes.",
    "proficiency": "Advanced",
    "learning_hours": 44,
    "fee": 277,
    "created_at": "2023-05-21 04:05:11",
    "last_updated": "2024-05-20 21:45:41",
    "organization": {
      "org_id": 10,
      "name": "SHRM Education",
      "website": "https://www.shrm.org/learning",
      "email": "demo0506@example.invalid",
      "phone": null,
      "description": "Society for Human Resource Management's learning center for HR professionals seeking certification and skill development.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 45,
    "instructors": [
      {
        "instructor_id": 178,
        "user_id": 178,
        "role": "Co-Instructor",
        "assigned_at": "2023-05-17 22:35:50"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 28,
        "name": "Statistical Analysis"
      },
      {
        "skill_id": 34,
        "name": "JavaScript"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 22,
        "title": "Chapter 1: Fundamentals of Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 62,
            "title": "Reading: Overview",
            "content": "Content for reading: overview in Chapter 1: Fundamentals of Skills.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/6/chapters/22/items/62"
          },
          {
            "item_id": 63,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 1: Fundamentals of Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/6/chapters/22/items/63"
          },
          {
            "item_id": 64,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 1: Fundamentals of Skills.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/6/chapters/22/items/64"
          }
        ]
      },
      {
        "chapter_id": 23,
        "title": "Chapter 2: Core Concepts in Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 65,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 2: Core Concepts in Principles.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/6/chapters/23/items/65"
          },
          {
            "item_id": 66,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 2: Core Concepts in Principles.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/6/chapters/23/items/66"
          },
          {
            "item_id": 67,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 2: Core Concepts in Principles.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/6/chapters/23/items/67"
          },
          {
            "item_id": 68,
            "title": "Quiz: Tools & Techniques",
            "content": "Content for quiz: tools & techniques in Chapter 2: Core Concepts in Principles.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/6/chapters/23/items/68"
          }
        ]
      },
      {
        "chapter_id": 24,
        "title": "Chapter 3: Applied Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 69,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 3: Applied Techniques.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/6/chapters/24/items/69"
          },
          {
            "item_id": 70,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 3: Applied Techniques.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/6/chapters/24/items/70"
          },
          {
            "item_id": 71,
            "title": "Quiz: Tools & Techniques",
            "content": "Content for quiz: tools & techniques in Chapter 3: Applied Techniques.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/6/chapters/24/items/71"
          }
        ]
      }
    ]
  },
  {
    "_id": 7,
    "title": "UX Design Fundamentals for Modern Digital Products",
    "description": "Learn the core principles of user experience design and apply them to create intuitive, user-centered digital products. This beginner-friendly course covers research methods, wireframing, prototyping, and usability testing to establish a strong foundation in UX design practice.",
    "proficiency": "Beginner",
    "learning_hours": 5,
    "fee": 121,
    "created_at": "2023-05-23 06:43:49",
    "last_updated": "2024-01-09 03:26:46",
    "organization": {
      "org_id": 6,
      "name": "Microsoft Learn",
      "website": "https://learn.microsoft.com",
      "email": "demo0507@example.invalid",
      "phone": null,
      "description": "Microsoft's official learning platform offering technical training, certifications, and professional development resources.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 448,
    "instructors": [
      {
        "instructor_id": 191,
        "user_id": 191,
        "role": "Teaching Assistant",
        "assigned_at": "2023-05-05 17:26:29"
      },
      {
        "instructor_id": 137,
        "user_id": 137,
        "role": "Guest Lecturer",
        "assigned_at": "2023-04-26 07:03:19"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 4,
        "name": "French"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      },
      {
        "category_id": 7,
        "name": "UX Design"
      }
    ],
    "skills": [
      {
        "skill_id": 62,
        "name": "Backlog Grooming"
      },
      {
        "skill_id": 46,
        "name": "Go-to-Market Strategy"
      },
      {
        "skill_id": 45,
        "name": "Metrics & KPIs"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 25,
        "title": "Chapter 1: Fundamentals of Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 72,
            "title": "Reading: Key Concepts",
            "content": "Content for reading: key concepts in Chapter 1: Fundamentals of Principles.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/7/chapters/25/items/72"
          },
          {
            "item_id": 73,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 1: Fundamentals of Principles.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/7/chapters/25/items/73"
          },
          {
            "item_id": 74,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 1: Fundamentals of Principles.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/7/chapters/25/items/74"
          },
          {
            "item_id": 75,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 1: Fundamentals of Principles.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/7/chapters/25/items/75"
          }
        ]
      },
      {
        "chapter_id": 26,
        "title": "Chapter 2: Core Concepts in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 76,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 2: Core Concepts in Techniques.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/7/chapters/26/items/76"
          },
          {
            "item_id": 77,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 2: Core Concepts in Techniques.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/7/chapters/26/items/77"
          },
          {
            "item_id": 78,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 2: Core Concepts in Techniques.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/7/chapters/26/items/78"
          },
          {
            "item_id": 79,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 2: Core Concepts in Techniques.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/7/chapters/26/items/79"
          }
        ]
      },
      {
        "chapter_id": 27,
        "title": "Chapter 3: Applied Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 80,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 3: Applied Strategies.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/7/chapters/27/items/80"
          },
          {
            "item_id": 81,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 3: Applied Strategies.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/7/chapters/27/items/81"
          }
        ]
      }
    ]
  },
  {
    "_id": 8,
    "title": "Executive Communication Strategy and Influence",
    "description": "Learners will master advanced communication frameworks, executive presence, and strategic influence techniques essential for senior leadership roles. This course develops capabilities in stakeholder management, high-stakes presentations, and organizational communication that drives business outcomes.",
    "proficiency": "Advanced",
    "learning_hours": 37,
    "fee": 312,
    "created_at": "2023-07-02 14:19:15",
    "last_updated": "2024-12-26 10:55:47",
    "organization": {
      "org_id": 2,
      "name": "MIT Sloan Executive Education",
      "website": "https://executive.mit.edu",
      "email": "demo0508@example.invalid",
      "phone": null,
      "description": "Massachusetts Institute of Technology's business school providing cutting-edge management and technical training for professionals.",
      "type": "University"
    },
    "primary_instructor_id": 395,
    "instructors": [
      {
        "instructor_id": 6,
        "user_id": 6,
        "role": "Co-Instructor",
        "assigned_at": "2023-06-25 04:55:51"
      },
      {
        "instructor_id": 314,
        "user_id": 314,
        "role": "Lab Instructor",
        "assigned_at": "2023-06-21 04:55:52"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 4,
        "name": "French"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      }
    ],
    "categories": [
      {
        "category_id": 2,
        "name": "Project Management"
      },
      {
        "category_id": 8,
        "name": "Agile"
      }
    ],
    "skills": [
      {
        "skill_id": 6,
        "name": "Change Management"
      },
      {
        "skill_id": 42,
        "name": "Roadmapping"
      },
      {
        "skill_id": 63,
        "name": "Agile Estimation"
      },
      {
        "skill_id": 47,
        "name": "Competitive Analysis"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 28,
        "title": "Chapter 1: Fundamentals of Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 82,
            "title": "Reading: Best Practices",
            "content": "Content for reading: best practices in Chapter 1: Fundamentals of Techniques.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/8/chapters/28/items/82"
          },
          {
            "item_id": 83,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 1: Fundamentals of Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/8/chapters/28/items/83"
          },
          {
            "item_id": 84,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 1: Fundamentals of Techniques.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/8/chapters/28/items/84"
          }
        ]
      },
      {
        "chapter_id": 29,
        "title": "Chapter 2: Core Concepts in Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 85,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 2: Core Concepts in Strategies.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/8/chapters/29/items/85"
          },
          {
            "item_id": 86,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 2: Core Concepts in Strategies.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/8/chapters/29/items/86"
          }
        ]
      },
      {
        "chapter_id": 30,
        "title": "Chapter 3: Applied Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 87,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 3: Applied Methods.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/8/chapters/30/items/87"
          },
          {
            "item_id": 88,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 3: Applied Methods.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/8/chapters/30/items/88"
          }
        ]
      },
      {
        "chapter_id": 31,
        "title": "Chapter 4: Advanced Topics in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 89,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 4: Advanced Topics in Practices.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/8/chapters/31/items/89"
          },
          {
            "item_id": 90,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 4: Advanced Topics in Practices.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/8/chapters/31/items/90"
          }
        ]
      },
      {
        "chapter_id": 32,
        "title": "Chapter 5: Practical Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 91,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 5: Practical Frameworks.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/8/chapters/32/items/91"
          },
          {
            "item_id": 92,
            "title": "Discussion: Review & Assessment",
            "content": "Content for discussion: review & assessment in Chapter 5: Practical Frameworks.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/8/chapters/32/items/92"
          },
          {
            "item_id": 93,
            "title": "Lesson: Overview",
            "content": "Content for lesson: overview in Chapter 5: Practical Frameworks.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/8/chapters/32/items/93"
          }
        ]
      }
    ]
  },
  {
    "_id": 9,
    "title": "Advanced UX Design: Enterprise Systems and Digital Strategy",
    "description": "Learners will master complex UX design methodologies for enterprise-level applications, including advanced research techniques, scalable design systems, and strategic thinking for large-scale digital transformations. This course equips professionals to lead cross-functional teams, implement data-driven design decisions, and architect user experiences that drive measurable business impact in mission-critical environments.",
    "proficiency": "Advanced",
    "learning_hours": 31,
    "fee": 454,
    "created_at": "2023-06-23 14:47:16",
    "last_updated": "2023-07-04 05:59:31",
    "organization": {
      "org_id": 10,
      "name": "SHRM Education",
      "website": "https://www.shrm.org/learning",
      "email": "demo0509@example.invalid",
      "phone": null,
      "description": "Society for Human Resource Management's learning center for HR professionals seeking certification and skill development.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 419,
    "instructors": [
      {
        "instructor_id": 6,
        "user_id": 6,
        "role": "Lab Instructor",
        "assigned_at": "2023-05-27 20:02:01"
      },
      {
        "instructor_id": 138,
        "user_id": 138,
        "role": "Co-Instructor",
        "assigned_at": "2023-05-28 09:09:28"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 8,
        "name": "Agile"
      },
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 22,
        "name": "Storytelling"
      },
      {
        "skill_id": 46,
        "name": "Go-to-Market Strategy"
      },
      {
        "skill_id": 36,
        "name": "Code Review"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 33,
        "title": "Chapter 1: Fundamentals of Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 94,
            "title": "Reading: Common Challenges",
            "content": "Content for reading: common challenges in Chapter 1: Fundamentals of Strategies.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/9/chapters/33/items/94"
          },
          {
            "item_id": 95,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 1: Fundamentals of Strategies.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/9/chapters/33/items/95"
          }
        ]
      },
      {
        "chapter_id": 34,
        "title": "Chapter 2: Core Concepts in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 96,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 2: Core Concepts in Methods.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/9/chapters/34/items/96"
          },
          {
            "item_id": 97,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 2: Core Concepts in Methods.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/9/chapters/34/items/97"
          }
        ]
      },
      {
        "chapter_id": 35,
        "title": "Chapter 3: Applied Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 98,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 3: Applied Practices.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/9/chapters/35/items/98"
          },
          {
            "item_id": 99,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 3: Applied Practices.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/9/chapters/35/items/99"
          },
          {
            "item_id": 100,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 3: Applied Practices.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/9/chapters/35/items/100"
          },
          {
            "item_id": 101,
            "title": "Discussion: Overview",
            "content": "Content for discussion: overview in Chapter 3: Applied Practices.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/9/chapters/35/items/101"
          }
        ]
      },
      {
        "chapter_id": 36,
        "title": "Chapter 4: Advanced Topics in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 102,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/9/chapters/36/items/102"
          },
          {
            "item_id": 103,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/9/chapters/36/items/103"
          }
        ]
      }
    ]
  },
  {
    "_id": 10,
    "title": "Scaling Agile: Enterprise Transformation and Leadership",
    "description": "Discover advanced strategies for implementing Agile at enterprise scale, including SAFe frameworks, organizational change management, and cross-functional team dynamics. This course equips senior leaders and Agile coaches with proven methodologies to drive sustainable digital transformation, optimize delivery pipelines, and build high-performing distributed teams in complex corporate environments.",
    "proficiency": "Advanced",
    "learning_hours": 39,
    "fee": 494,
    "created_at": "2023-07-11 02:34:14",
    "last_updated": "2024-04-13 02:54:45",
    "organization": {
      "org_id": 7,
      "name": "General Assembly",
      "website": "https://generalassemb.ly",
      "email": "demo0510@example.invalid",
      "phone": null,
      "description": "Pioneer in tech bootcamps offering immersive programs in software engineering, data science, UX design, and product management.",
      "type": "Bootcamp"
    },
    "primary_instructor_id": 466,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 6,
        "name": "German"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      },
      {
        "category_id": 3,
        "name": "Communication"
      },
      {
        "category_id": 5,
        "name": "Software Engineering"
      }
    ],
    "skills": [
      {
        "skill_id": 46,
        "name": "Go-to-Market Strategy"
      },
      {
        "skill_id": 6,
        "name": "Change Management"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 37,
        "title": "Chapter 1: Fundamentals of Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 104,
            "title": "Reading: Tools & Techniques",
            "content": "Content for reading: tools & techniques in Chapter 1: Fundamentals of Methods.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/10/chapters/37/items/104"
          },
          {
            "item_id": 105,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 1: Fundamentals of Methods.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/10/chapters/37/items/105"
          }
        ]
      },
      {
        "chapter_id": 38,
        "title": "Chapter 2: Core Concepts in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 106,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 2: Core Concepts in Practices.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/10/chapters/38/items/106"
          },
          {
            "item_id": 107,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 2: Core Concepts in Practices.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/10/chapters/38/items/107"
          },
          {
            "item_id": 108,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 2: Core Concepts in Practices.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/10/chapters/38/items/108"
          }
        ]
      },
      {
        "chapter_id": 39,
        "title": "Chapter 3: Applied Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 109,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 3: Applied Frameworks.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/10/chapters/39/items/109"
          },
          {
            "item_id": 110,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 3: Applied Frameworks.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/10/chapters/39/items/110"
          },
          {
            "item_id": 111,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 3: Applied Frameworks.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/10/chapters/39/items/111"
          },
          {
            "item_id": 112,
            "title": "Discussion: Key Concepts",
            "content": "Content for discussion: key concepts in Chapter 3: Applied Frameworks.",
            "item_order": 4,
            "url": "https://course.skillup.io/courses/10/chapters/39/items/112"
          }
        ]
      },
      {
        "chapter_id": 40,
        "title": "Chapter 4: Advanced Topics in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 113,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 4: Advanced Topics in Applications.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/10/chapters/40/items/113"
          },
          {
            "item_id": 114,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 4: Advanced Topics in Applications.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/10/chapters/40/items/114"
          }
        ]
      }
    ]
  },
  {
    "_id": 11,
    "title": "Advanced Agile Transformation: Scaling Enterprise Methodologies",
    "description": "Develop mastery in implementing Agile frameworks across large-scale organizations and complex enterprise environments. Learners will gain advanced skills in SAFe, scaling strategies, organizational change management, and leading high-performing distributed Agile teams at the executive and leadership level.",
    "proficiency": "Advanced",
    "learning_hours": 37,
    "fee": 362,
    "created_at": "2023-08-08 08:19:06",
    "last_updated": "2023-12-30 13:40:34",
    "organization": {
      "org_id": 9,
      "name": "PMI Learning",
      "website": "https://www.pmi.org/learning",
      "email": "demo0511@example.invalid",
      "phone": null,
      "description": "Project Management Institute's educational division offering PMP certification prep and project management courses.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 137,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 23,
        "name": "Cross-cultural Communication"
      },
      {
        "skill_id": 22,
        "name": "Storytelling"
      },
      {
        "skill_id": 25,
        "name": "SQL"
      },
      {
        "skill_id": 32,
        "name": "Machine Learning Basics"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 41,
        "title": "Chapter 1: Fundamentals of Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 115,
            "title": "Reading: Real-World Examples",
            "content": "Content for reading: real-world examples in Chapter 1: Fundamentals of Practices.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/11/chapters/41/items/115"
          },
          {
            "item_id": 116,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 1: Fundamentals of Practices.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/11/chapters/41/items/116"
          }
        ]
      },
      {
        "chapter_id": 42,
        "title": "Chapter 2: Core Concepts in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 117,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/11/chapters/42/items/117"
          },
          {
            "item_id": 118,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/11/chapters/42/items/118"
          },
          {
            "item_id": 119,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/11/chapters/42/items/119"
          }
        ]
      },
      {
        "chapter_id": 43,
        "title": "Chapter 3: Applied Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 120,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 3: Applied Applications.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/11/chapters/43/items/120"
          },
          {
            "item_id": 121,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 3: Applied Applications.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/11/chapters/43/items/121"
          },
          {
            "item_id": 122,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 3: Applied Applications.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/11/chapters/43/items/122"
          }
        ]
      },
      {
        "chapter_id": 44,
        "title": "Chapter 4: Advanced Topics in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 123,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 4: Advanced Topics in Skills.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/11/chapters/44/items/123"
          },
          {
            "item_id": 124,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 4: Advanced Topics in Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/11/chapters/44/items/124"
          }
        ]
      }
    ]
  },
  {
    "_id": 12,
    "title": "Advanced Project Management: Strategic Leadership and Execution",
    "description": "Master complex project portfolios and enterprise-level delivery strategies through proven frameworks and real-world case studies. Learners will develop advanced competencies in stakeholder management, risk mitigation, and organizational alignment to lead mission-critical initiatives in dynamic business environments.",
    "proficiency": "Advanced",
    "learning_hours": 21,
    "fee": 460,
    "created_at": "2023-08-03 18:04:12",
    "last_updated": "2024-08-09 11:33:57",
    "organization": {
      "org_id": 5,
      "name": "Google Career Certificates",
      "website": "https://grow.google/certificates",
      "email": "demo0512@example.invalid",
      "phone": null,
      "description": "Google's professional certificate programs designed to prepare learners for high-growth careers in technology fields.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 382,
    "instructors": [
      {
        "instructor_id": 340,
        "user_id": 340,
        "role": "Teaching Assistant",
        "assigned_at": "2023-07-27 18:54:33"
      },
      {
        "instructor_id": 190,
        "user_id": 190,
        "role": "Co-Instructor",
        "assigned_at": "2023-07-11 18:58:47"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      },
      {
        "category_id": 8,
        "name": "Agile"
      }
    ],
    "skills": [
      {
        "skill_id": 16,
        "name": "Prince2"
      },
      {
        "skill_id": 12,
        "name": "Budget Management"
      },
      {
        "skill_id": 31,
        "name": "Power BI"
      },
      {
        "skill_id": 23,
        "name": "Cross-cultural Communication"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 45,
        "title": "Chapter 1: Fundamentals of Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 125,
            "title": "Reading: Hands-On Practice",
            "content": "Content for reading: hands-on practice in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/12/chapters/45/items/125"
          },
          {
            "item_id": 126,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/12/chapters/45/items/126"
          },
          {
            "item_id": 127,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/12/chapters/45/items/127"
          },
          {
            "item_id": 128,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/12/chapters/45/items/128"
          }
        ]
      },
      {
        "chapter_id": 46,
        "title": "Chapter 2: Core Concepts in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 129,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 2: Core Concepts in Applications.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/12/chapters/46/items/129"
          },
          {
            "item_id": 130,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 2: Core Concepts in Applications.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/12/chapters/46/items/130"
          },
          {
            "item_id": 131,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 2: Core Concepts in Applications.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/12/chapters/46/items/131"
          }
        ]
      },
      {
        "chapter_id": 47,
        "title": "Chapter 3: Applied Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 132,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 3: Applied Skills.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/12/chapters/47/items/132"
          },
          {
            "item_id": 133,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 3: Applied Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/12/chapters/47/items/133"
          },
          {
            "item_id": 134,
            "title": "Quiz: Best Practices",
            "content": "Content for quiz: best practices in Chapter 3: Applied Skills.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/12/chapters/47/items/134"
          },
          {
            "item_id": 135,
            "title": "Discussion: Common Challenges",
            "content": "Content for discussion: common challenges in Chapter 3: Applied Skills.",
            "item_order": 4,
            "url": "https://course.skillup.io/courses/12/chapters/47/items/135"
          }
        ]
      },
      {
        "chapter_id": 48,
        "title": "Chapter 4: Advanced Topics in Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 136,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 4: Advanced Topics in Principles.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/12/chapters/48/items/136"
          },
          {
            "item_id": 137,
            "title": "Quiz: Best Practices",
            "content": "Content for quiz: best practices in Chapter 4: Advanced Topics in Principles.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/12/chapters/48/items/137"
          }
        ]
      },
      {
        "chapter_id": 49,
        "title": "Chapter 5: Practical Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 138,
            "title": "Quiz: Best Practices",
            "content": "Content for quiz: best practices in Chapter 5: Practical Techniques.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/12/chapters/49/items/138"
          },
          {
            "item_id": 139,
            "title": "Discussion: Common Challenges",
            "content": "Content for discussion: common challenges in Chapter 5: Practical Techniques.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/12/chapters/49/items/139"
          },
          {
            "item_id": 140,
            "title": "Lesson: Tools & Techniques",
            "content": "Content for lesson: tools & techniques in Chapter 5: Practical Techniques.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/12/chapters/49/items/140"
          }
        ]
      }
    ]
  },
  {
    "_id": 13,
    "title": "Advanced UX Design: Systems, Strategy, and Enterprise Solutions",
    "description": "Master advanced UX design methodologies including design systems, strategic research frameworks, and enterprise-scale implementations. This course equips design professionals with the expertise to lead complex digital transformation initiatives and create scalable design solutions across large organizations.",
    "proficiency": "Advanced",
    "learning_hours": 43,
    "fee": 372,
    "created_at": "2023-08-20 21:29:42",
    "last_updated": "2023-12-25 19:07:35",
    "organization": {
      "org_id": 6,
      "name": "Microsoft Learn",
      "website": "https://learn.microsoft.com",
      "email": "demo0513@example.invalid",
      "phone": null,
      "description": "Microsoft's official learning platform offering technical training, certifications, and professional development resources.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 138,
    "instructors": [
      {
        "instructor_id": 500,
        "user_id": 500,
        "role": "Co-Instructor",
        "assigned_at": "2023-07-26 20:06:11"
      },
      {
        "instructor_id": 441,
        "user_id": 441,
        "role": "Co-Instructor",
        "assigned_at": "2023-08-08 18:45:00"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      }
    ],
    "categories": [
      {
        "category_id": 2,
        "name": "Project Management"
      },
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 26,
        "name": "Python"
      },
      {
        "skill_id": 28,
        "name": "Statistical Analysis"
      },
      {
        "skill_id": 55,
        "name": "Design Systems"
      },
      {
        "skill_id": 57,
        "name": "Scrum"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 50,
        "title": "Chapter 1: Fundamentals of Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 141,
            "title": "Reading: Review & Assessment",
            "content": "Content for reading: review & assessment in Chapter 1: Fundamentals of Applications.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/13/chapters/50/items/141"
          },
          {
            "item_id": 142,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 1: Fundamentals of Applications.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/13/chapters/50/items/142"
          }
        ]
      },
      {
        "chapter_id": 51,
        "title": "Chapter 2: Core Concepts in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 143,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 2: Core Concepts in Skills.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/13/chapters/51/items/143"
          },
          {
            "item_id": 144,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 2: Core Concepts in Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/13/chapters/51/items/144"
          },
          {
            "item_id": 145,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 2: Core Concepts in Skills.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/13/chapters/51/items/145"
          }
        ]
      },
      {
        "chapter_id": 52,
        "title": "Chapter 3: Applied Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 146,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 3: Applied Principles.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/13/chapters/52/items/146"
          },
          {
            "item_id": 147,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 3: Applied Principles.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/13/chapters/52/items/147"
          }
        ]
      },
      {
        "chapter_id": 53,
        "title": "Chapter 4: Advanced Topics in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 148,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/13/chapters/53/items/148"
          },
          {
            "item_id": 149,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/13/chapters/53/items/149"
          }
        ]
      }
    ]
  },
  {
    "_id": 14,
    "title": "Advanced Software Architecture and System Design Mastery",
    "description": "This advanced course equips experienced engineers with architectural principles, design patterns, and systems thinking required to lead complex software projects. Learners will master microservices architecture, scalability strategies, and enterprise-level design decisions while developing competency in evaluating trade-offs and mentoring junior developers.",
    "proficiency": "Advanced",
    "learning_hours": 26,
    "fee": 0,
    "created_at": "2023-09-08 14:47:21",
    "last_updated": "2024-07-17 16:56:08",
    "organization": {
      "org_id": 12,
      "name": "LinkedIn Learning",
      "website": "https://www.linkedin.com/learning",
      "email": "demo0514@example.invalid",
      "phone": null,
      "description": "Professional learning platform integrated with LinkedIn, offering business, technology, and creative courses taught by industry experts.",
      "type": "EdTech Company"
    },
    "primary_instructor_id": 181,
    "instructors": [
      {
        "instructor_id": 4,
        "user_id": 4,
        "role": "Co-Instructor",
        "assigned_at": "2023-08-19 11:09:03"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      },
      {
        "language_id": 4,
        "name": "French"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      },
      {
        "category_id": 3,
        "name": "Communication"
      }
    ],
    "skills": [
      {
        "skill_id": 47,
        "name": "Competitive Analysis"
      },
      {
        "skill_id": 34,
        "name": "JavaScript"
      },
      {
        "skill_id": 36,
        "name": "Code Review"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 54,
        "title": "Chapter 1: Fundamentals of Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 150,
            "title": "Reading: Overview",
            "content": "Content for reading: overview in Chapter 1: Fundamentals of Skills.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/14/chapters/54/items/150"
          },
          {
            "item_id": 151,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 1: Fundamentals of Skills.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/14/chapters/54/items/151"
          }
        ]
      },
      {
        "chapter_id": 55,
        "title": "Chapter 2: Core Concepts in Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 152,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 2: Core Concepts in Principles.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/14/chapters/55/items/152"
          },
          {
            "item_id": 153,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 2: Core Concepts in Principles.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/14/chapters/55/items/153"
          }
        ]
      },
      {
        "chapter_id": 56,
        "title": "Chapter 3: Applied Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 154,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 3: Applied Techniques.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/14/chapters/56/items/154"
          },
          {
            "item_id": 155,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 3: Applied Techniques.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/14/chapters/56/items/155"
          }
        ]
      },
      {
        "chapter_id": 57,
        "title": "Chapter 4: Advanced Topics in Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 156,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 4: Advanced Topics in Strategies.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/14/chapters/57/items/156"
          },
          {
            "item_id": 157,
            "title": "Quiz: Tools & Techniques",
            "content": "Content for quiz: tools & techniques in Chapter 4: Advanced Topics in Strategies.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/14/chapters/57/items/157"
          },
          {
            "item_id": 158,
            "title": "Discussion: Real-World Examples",
            "content": "Content for discussion: real-world examples in Chapter 4: Advanced Topics in Strategies.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/14/chapters/57/items/158"
          },
          {
            "item_id": 159,
            "title": "Lesson: Hands-On Practice",
            "content": "Content for lesson: hands-on practice in Chapter 4: Advanced Topics in Strategies.",
            "item_order": 4,
            "url": "https://course.skillup.io/courses/14/chapters/57/items/159"
          }
        ]
      }
    ]
  },
  {
    "_id": 15,
    "title": "Advanced Agile Methodologies and Team Leadership",
    "description": "This intermediate course equips professionals with advanced Agile frameworks, sprint optimization techniques, and cross-functional team management skills. Learners will master stakeholder communication, backlog prioritization, velocity tracking, and gain practical strategies for scaling Agile across enterprise environments.",
    "proficiency": "Intermediate",
    "learning_hours": 19,
    "fee": 140,
    "created_at": "2023-10-04 08:35:31",
    "last_updated": "2024-11-30 21:25:34",
    "organization": {
      "org_id": 7,
      "name": "General Assembly",
      "website": "https://generalassemb.ly",
      "email": "demo0515@example.invalid",
      "phone": null,
      "description": "Pioneer in tech bootcamps offering immersive programs in software engineering, data science, UX design, and product management.",
      "type": "Bootcamp"
    },
    "primary_instructor_id": 45,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 4,
        "name": "French"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      }
    ],
    "categories": [
      {
        "category_id": 6,
        "name": "Product Management"
      }
    ],
    "skills": [
      {
        "skill_id": 60,
        "name": "Retrospectives"
      },
      {
        "skill_id": 37,
        "name": "System Design"
      },
      {
        "skill_id": 41,
        "name": "Product Strategy"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 58,
        "title": "Chapter 1: Fundamentals of Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 160,
            "title": "Reading: Key Concepts",
            "content": "Content for reading: key concepts in Chapter 1: Fundamentals of Principles.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/15/chapters/58/items/160"
          },
          {
            "item_id": 161,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 1: Fundamentals of Principles.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/15/chapters/58/items/161"
          }
        ]
      },
      {
        "chapter_id": 59,
        "title": "Chapter 2: Core Concepts in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 162,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 2: Core Concepts in Techniques.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/15/chapters/59/items/162"
          },
          {
            "item_id": 163,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 2: Core Concepts in Techniques.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/15/chapters/59/items/163"
          },
          {
            "item_id": 164,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 2: Core Concepts in Techniques.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/15/chapters/59/items/164"
          },
          {
            "item_id": 165,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 2: Core Concepts in Techniques.",
            "item_order": 4,
            "url": "https://course.skillup.io/courses/15/chapters/59/items/165"
          }
        ]
      },
      {
        "chapter_id": 60,
        "title": "Chapter 3: Applied Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 166,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 3: Applied Strategies.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/15/chapters/60/items/166"
          },
          {
            "item_id": 167,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 3: Applied Strategies.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/15/chapters/60/items/167"
          },
          {
            "item_id": 168,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 3: Applied Strategies.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/15/chapters/60/items/168"
          },
          {
            "item_id": 169,
            "title": "Discussion: Hands-On Practice",
            "content": "Content for discussion: hands-on practice in Chapter 3: Applied Strategies.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/15/chapters/60/items/169"
          }
        ]
      },
      {
        "chapter_id": 61,
        "title": "Chapter 4: Advanced Topics in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 170,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 4: Advanced Topics in Methods.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/15/chapters/61/items/170"
          },
          {
            "item_id": 171,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 4: Advanced Topics in Methods.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/15/chapters/61/items/171"
          },
          {
            "item_id": 172,
            "title": "Discussion: Hands-On Practice",
            "content": "Content for discussion: hands-on practice in Chapter 4: Advanced Topics in Methods.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/15/chapters/61/items/172"
          },
          {
            "item_id": 173,
            "title": "Lesson: Review & Assessment",
            "content": "Content for lesson: review & assessment in Chapter 4: Advanced Topics in Methods.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/15/chapters/61/items/173"
          }
        ]
      }
    ]
  },
  {
    "_id": 16,
    "title": "Effective Communication Fundamentals for Workplace Success",
    "description": "Learners will master essential communication skills including active listening, clear message delivery, and professional written communication. This course provides practical frameworks and real-world scenarios to help employees communicate more effectively with colleagues, managers, and clients across various workplace situations.",
    "proficiency": "Beginner",
    "learning_hours": 8,
    "fee": 121,
    "created_at": "2023-10-19 19:41:34",
    "last_updated": "2024-07-12 16:06:52",
    "organization": {
      "org_id": 2,
      "name": "MIT Sloan Executive Education",
      "website": "https://executive.mit.edu",
      "email": "demo0516@example.invalid",
      "phone": null,
      "description": "Massachusetts Institute of Technology's business school providing cutting-edge management and technical training for professionals.",
      "type": "University"
    },
    "primary_instructor_id": 112,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 6,
        "name": "Product Management"
      },
      {
        "category_id": 7,
        "name": "UX Design"
      },
      {
        "category_id": 3,
        "name": "Communication"
      }
    ],
    "skills": [
      {
        "skill_id": 24,
        "name": "Feedback Delivery"
      },
      {
        "skill_id": 21,
        "name": "Negotiation"
      },
      {
        "skill_id": 22,
        "name": "Storytelling"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 62,
        "title": "Chapter 1: Fundamentals of Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 174,
            "title": "Reading: Best Practices",
            "content": "Content for reading: best practices in Chapter 1: Fundamentals of Techniques.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/16/chapters/62/items/174"
          },
          {
            "item_id": 175,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 1: Fundamentals of Techniques.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/16/chapters/62/items/175"
          },
          {
            "item_id": 176,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 1: Fundamentals of Techniques.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/16/chapters/62/items/176"
          }
        ]
      },
      {
        "chapter_id": 63,
        "title": "Chapter 2: Core Concepts in Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 177,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 2: Core Concepts in Strategies.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/16/chapters/63/items/177"
          },
          {
            "item_id": 178,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 2: Core Concepts in Strategies.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/16/chapters/63/items/178"
          },
          {
            "item_id": 179,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 2: Core Concepts in Strategies.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/16/chapters/63/items/179"
          },
          {
            "item_id": 180,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 2: Core Concepts in Strategies.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/16/chapters/63/items/180"
          }
        ]
      },
      {
        "chapter_id": 64,
        "title": "Chapter 3: Applied Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 181,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 3: Applied Methods.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/16/chapters/64/items/181"
          },
          {
            "item_id": 182,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 3: Applied Methods.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/16/chapters/64/items/182"
          },
          {
            "item_id": 183,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 3: Applied Methods.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/16/chapters/64/items/183"
          }
        ]
      },
      {
        "chapter_id": 65,
        "title": "Chapter 4: Advanced Topics in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 184,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 4: Advanced Topics in Practices.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/16/chapters/65/items/184"
          },
          {
            "item_id": 185,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 4: Advanced Topics in Practices.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/16/chapters/65/items/185"
          },
          {
            "item_id": 186,
            "title": "Discussion: Review & Assessment",
            "content": "Content for discussion: review & assessment in Chapter 4: Advanced Topics in Practices.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/16/chapters/65/items/186"
          },
          {
            "item_id": 187,
            "title": "Lesson: Overview",
            "content": "Content for lesson: overview in Chapter 4: Advanced Topics in Practices.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/16/chapters/65/items/187"
          }
        ]
      }
    ]
  },
  {
    "_id": 17,
    "title": "Advanced Project Management: Strategic Leadership and Execution",
    "description": "This advanced course equips experienced project managers with sophisticated methodologies for managing complex, high-stakes initiatives across distributed teams and global organizations. Learners will master advanced risk management, stakeholder engagement strategies, and decision-making frameworks while developing the leadership competencies required to drive organizational success in competitive markets.",
    "proficiency": "Advanced",
    "learning_hours": 37,
    "fee": 347,
    "created_at": "2023-11-06 18:37:57",
    "last_updated": "2023-12-15 06:27:47",
    "organization": {
      "org_id": 6,
      "name": "Microsoft Learn",
      "website": "https://learn.microsoft.com",
      "email": "demo0517@example.invalid",
      "phone": null,
      "description": "Microsoft's official learning platform offering technical training, certifications, and professional development resources.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 137,
    "instructors": [
      {
        "instructor_id": 317,
        "user_id": 317,
        "role": "Guest Lecturer",
        "assigned_at": "2023-11-03 23:08:11"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 7,
        "name": "UX Design"
      },
      {
        "category_id": 5,
        "name": "Software Engineering"
      }
    ],
    "skills": [
      {
        "skill_id": 13,
        "name": "Scheduling"
      },
      {
        "skill_id": 14,
        "name": "Scope Management"
      },
      {
        "skill_id": 55,
        "name": "Design Systems"
      },
      {
        "skill_id": 22,
        "name": "Storytelling"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 66,
        "title": "Chapter 1: Fundamentals of Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 188,
            "title": "Reading: Common Challenges",
            "content": "Content for reading: common challenges in Chapter 1: Fundamentals of Strategies.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/17/chapters/66/items/188"
          },
          {
            "item_id": 189,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 1: Fundamentals of Strategies.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/17/chapters/66/items/189"
          }
        ]
      },
      {
        "chapter_id": 67,
        "title": "Chapter 2: Core Concepts in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 190,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 2: Core Concepts in Methods.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/17/chapters/67/items/190"
          },
          {
            "item_id": 191,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 2: Core Concepts in Methods.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/17/chapters/67/items/191"
          }
        ]
      },
      {
        "chapter_id": 68,
        "title": "Chapter 3: Applied Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 192,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 3: Applied Practices.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/17/chapters/68/items/192"
          },
          {
            "item_id": 193,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 3: Applied Practices.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/17/chapters/68/items/193"
          },
          {
            "item_id": 194,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 3: Applied Practices.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/17/chapters/68/items/194"
          },
          {
            "item_id": 195,
            "title": "Discussion: Overview",
            "content": "Content for discussion: overview in Chapter 3: Applied Practices.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/17/chapters/68/items/195"
          }
        ]
      }
    ]
  },
  {
    "_id": 18,
    "title": "Advanced Software Engineering Architecture and Systems Design",
    "description": "Master enterprise-level software design patterns, microservices architecture, and scalable system design principles. This course equips seasoned developers with the skills to architect complex distributed systems, implement domain-driven design, and lead technical decisions in mission-critical environments.",
    "proficiency": "Advanced",
    "learning_hours": 39,
    "fee": 420,
    "created_at": "2023-11-02 15:56:04",
    "last_updated": "2024-04-20 13:52:55",
    "organization": {
      "org_id": 4,
      "name": "Accenture Academy",
      "website": "https://academy.accenture.com",
      "email": "demo0518@example.invalid",
      "phone": null,
      "description": "Accenture's learning platform focused on digital transformation, consulting methodologies, and enterprise technology skills.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 317,
    "instructors": [
      {
        "instructor_id": 395,
        "user_id": 395,
        "role": "Guest Lecturer",
        "assigned_at": "2023-10-13 23:51:30"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 5,
        "name": "Arabic"
      }
    ],
    "categories": [
      {
        "category_id": 3,
        "name": "Communication"
      }
    ],
    "skills": [
      {
        "skill_id": 29,
        "name": "Excel"
      },
      {
        "skill_id": 14,
        "name": "Scope Management"
      },
      {
        "skill_id": 57,
        "name": "Scrum"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 69,
        "title": "Chapter 1: Fundamentals of Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 196,
            "title": "Reading: Tools & Techniques",
            "content": "Content for reading: tools & techniques in Chapter 1: Fundamentals of Methods.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/18/chapters/69/items/196"
          },
          {
            "item_id": 197,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 1: Fundamentals of Methods.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/18/chapters/69/items/197"
          }
        ]
      },
      {
        "chapter_id": 70,
        "title": "Chapter 2: Core Concepts in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 198,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 2: Core Concepts in Practices.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/18/chapters/70/items/198"
          },
          {
            "item_id": 199,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 2: Core Concepts in Practices.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/18/chapters/70/items/199"
          },
          {
            "item_id": 200,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 2: Core Concepts in Practices.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/18/chapters/70/items/200"
          },
          {
            "item_id": 201,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 2: Core Concepts in Practices.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/18/chapters/70/items/201"
          }
        ]
      },
      {
        "chapter_id": 71,
        "title": "Chapter 3: Applied Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 202,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 3: Applied Frameworks.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/18/chapters/71/items/202"
          },
          {
            "item_id": 203,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 3: Applied Frameworks.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/18/chapters/71/items/203"
          },
          {
            "item_id": 204,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 3: Applied Frameworks.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/18/chapters/71/items/204"
          }
        ]
      },
      {
        "chapter_id": 72,
        "title": "Chapter 4: Advanced Topics in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 205,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 4: Advanced Topics in Applications.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/18/chapters/72/items/205"
          },
          {
            "item_id": 206,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 4: Advanced Topics in Applications.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/18/chapters/72/items/206"
          },
          {
            "item_id": 207,
            "title": "Discussion: Key Concepts",
            "content": "Content for discussion: key concepts in Chapter 4: Advanced Topics in Applications.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/18/chapters/72/items/207"
          },
          {
            "item_id": 208,
            "title": "Lesson: Best Practices",
            "content": "Content for lesson: best practices in Chapter 4: Advanced Topics in Applications.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/18/chapters/72/items/208"
          }
        ]
      },
      {
        "chapter_id": 73,
        "title": "Chapter 5: Practical Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 209,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 5: Practical Skills.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/18/chapters/73/items/209"
          },
          {
            "item_id": 210,
            "title": "Discussion: Key Concepts",
            "content": "Content for discussion: key concepts in Chapter 5: Practical Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/18/chapters/73/items/210"
          },
          {
            "item_id": 211,
            "title": "Lesson: Best Practices",
            "content": "Content for lesson: best practices in Chapter 5: Practical Skills.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/18/chapters/73/items/211"
          }
        ]
      }
    ]
  },
  {
    "_id": 19,
    "title": "Advanced Project Management: Strategic Delivery and Leadership",
    "description": "This advanced course equips experienced project managers with strategic frameworks and leadership techniques to oversee complex, multi-stakeholder initiatives in dynamic corporate environments. Learners will master enterprise-level portfolio management, risk mitigation, organizational change management, and develop the executive presence required to influence decision-making at the C-suite level.",
    "proficiency": "Advanced",
    "learning_hours": 39,
    "fee": 316,
    "created_at": "2023-11-25 21:42:37",
    "last_updated": "2024-12-27 20:52:23",
    "organization": {
      "org_id": 3,
      "name": "Wharton Online",
      "website": "https://online.wharton.upenn.edu",
      "email": "demo0519@example.invalid",
      "phone": null,
      "description": "University of Pennsylvania's Wharton School delivering world-class business education through digital learning experiences.",
      "type": "University"
    },
    "primary_instructor_id": 55,
    "instructors": [
      {
        "instructor_id": 6,
        "user_id": 6,
        "role": "Teaching Assistant",
        "assigned_at": "2023-11-04 15:21:54"
      },
      {
        "instructor_id": 190,
        "user_id": 190,
        "role": "Co-Instructor",
        "assigned_at": "2023-10-29 07:28:07"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 8,
        "name": "Agile"
      },
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      }
    ],
    "skills": [
      {
        "skill_id": 2,
        "name": "Team Building"
      },
      {
        "skill_id": 34,
        "name": "JavaScript"
      },
      {
        "skill_id": 12,
        "name": "Budget Management"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 74,
        "title": "Chapter 1: Fundamentals of Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 212,
            "title": "Reading: Real-World Examples",
            "content": "Content for reading: real-world examples in Chapter 1: Fundamentals of Practices.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/19/chapters/74/items/212"
          },
          {
            "item_id": 213,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 1: Fundamentals of Practices.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/19/chapters/74/items/213"
          }
        ]
      },
      {
        "chapter_id": 75,
        "title": "Chapter 2: Core Concepts in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 214,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/19/chapters/75/items/214"
          },
          {
            "item_id": 215,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/19/chapters/75/items/215"
          },
          {
            "item_id": 216,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/19/chapters/75/items/216"
          },
          {
            "item_id": 217,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/19/chapters/75/items/217"
          }
        ]
      },
      {
        "chapter_id": 76,
        "title": "Chapter 3: Applied Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 218,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 3: Applied Applications.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/19/chapters/76/items/218"
          },
          {
            "item_id": 219,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 3: Applied Applications.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/19/chapters/76/items/219"
          }
        ]
      },
      {
        "chapter_id": 77,
        "title": "Chapter 4: Advanced Topics in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 220,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 4: Advanced Topics in Skills.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/19/chapters/77/items/220"
          },
          {
            "item_id": 221,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 4: Advanced Topics in Skills.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/19/chapters/77/items/221"
          }
        ]
      }
    ]
  },
  {
    "_id": 20,
    "title": "Executive Communication Mastery: Influence and Impact",
    "description": "This advanced course equips leaders with sophisticated communication strategies to influence organizational decisions, manage complex stakeholder relationships, and deliver compelling narratives across diverse audiences. Learners will master executive presence, crisis communication, and persuasive speaking techniques essential for senior leadership roles.",
    "proficiency": "Advanced",
    "learning_hours": 40,
    "fee": 327,
    "created_at": "2023-11-27 15:49:08",
    "last_updated": "2024-06-11 03:57:28",
    "organization": {
      "org_id": 1,
      "name": "Stanford Professional Education",
      "website": "https://online.stanford.edu",
      "email": "demo0520@example.invalid",
      "phone": null,
      "description": "Stanford University's professional development arm offering executive education and certificate programs in technology and leadership.",
      "type": "University"
    },
    "primary_instructor_id": 271,
    "instructors": [
      {
        "instructor_id": 178,
        "user_id": 178,
        "role": "Teaching Assistant",
        "assigned_at": "2023-11-05 08:57:48"
      },
      {
        "instructor_id": 181,
        "user_id": 181,
        "role": "Co-Instructor",
        "assigned_at": "2023-11-26 22:53:28"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 3,
        "name": "Decision Making"
      },
      {
        "skill_id": 30,
        "name": "Tableau"
      },
      {
        "skill_id": 24,
        "name": "Feedback Delivery"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 78,
        "title": "Chapter 1: Fundamentals of Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 222,
            "title": "Reading: Hands-On Practice",
            "content": "Content for reading: hands-on practice in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/20/chapters/78/items/222"
          },
          {
            "item_id": 223,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/20/chapters/78/items/223"
          }
        ]
      },
      {
        "chapter_id": 79,
        "title": "Chapter 2: Core Concepts in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 224,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 2: Core Concepts in Applications.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/20/chapters/79/items/224"
          },
          {
            "item_id": 225,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 2: Core Concepts in Applications.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/20/chapters/79/items/225"
          },
          {
            "item_id": 226,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 2: Core Concepts in Applications.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/20/chapters/79/items/226"
          }
        ]
      },
      {
        "chapter_id": 80,
        "title": "Chapter 3: Applied Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 227,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 3: Applied Skills.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/20/chapters/80/items/227"
          },
          {
            "item_id": 228,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 3: Applied Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/20/chapters/80/items/228"
          }
        ]
      }
    ]
  },
  {
    "_id": 21,
    "title": "Scaling Software Systems: Design Patterns and Architecture",
    "description": "Learn advanced architectural principles, enterprise design patterns, and best practices for building scalable software systems in production environments. This course covers microservices architecture, system design trade-offs, distributed systems concepts, and real-world implementation strategies used by leading tech companies to deliver reliable and maintainable applications.",
    "proficiency": "Intermediate",
    "learning_hours": 17,
    "fee": 169,
    "created_at": "2023-12-19 14:16:31",
    "last_updated": "2024-06-12 07:02:48",
    "organization": {
      "org_id": 4,
      "name": "Accenture Academy",
      "website": "https://academy.accenture.com",
      "email": "demo0521@example.invalid",
      "phone": null,
      "description": "Accenture's learning platform focused on digital transformation, consulting methodologies, and enterprise technology skills.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 6,
    "instructors": [
      {
        "instructor_id": 441,
        "user_id": 441,
        "role": "Teaching Assistant",
        "assigned_at": "2023-11-27 03:27:54"
      },
      {
        "instructor_id": 500,
        "user_id": 500,
        "role": "Co-Instructor",
        "assigned_at": "2023-11-28 01:13:05"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      }
    ],
    "skills": [
      {
        "skill_id": 42,
        "name": "Roadmapping"
      },
      {
        "skill_id": 47,
        "name": "Competitive Analysis"
      },
      {
        "skill_id": 29,
        "name": "Excel"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 81,
        "title": "Chapter 1: Fundamentals of Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 229,
            "title": "Reading: Review & Assessment",
            "content": "Content for reading: review & assessment in Chapter 1: Fundamentals of Applications.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/21/chapters/81/items/229"
          },
          {
            "item_id": 230,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 1: Fundamentals of Applications.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/21/chapters/81/items/230"
          },
          {
            "item_id": 231,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 1: Fundamentals of Applications.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/21/chapters/81/items/231"
          }
        ]
      },
      {
        "chapter_id": 82,
        "title": "Chapter 2: Core Concepts in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 232,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 2: Core Concepts in Skills.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/21/chapters/82/items/232"
          },
          {
            "item_id": 233,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 2: Core Concepts in Skills.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/21/chapters/82/items/233"
          },
          {
            "item_id": 234,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 2: Core Concepts in Skills.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/21/chapters/82/items/234"
          },
          {
            "item_id": 235,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 2: Core Concepts in Skills.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/21/chapters/82/items/235"
          }
        ]
      },
      {
        "chapter_id": 83,
        "title": "Chapter 3: Applied Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 236,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 3: Applied Principles.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/21/chapters/83/items/236"
          },
          {
            "item_id": 237,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 3: Applied Principles.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/21/chapters/83/items/237"
          },
          {
            "item_id": 238,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 3: Applied Principles.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/21/chapters/83/items/238"
          }
        ]
      },
      {
        "chapter_id": 84,
        "title": "Chapter 4: Advanced Topics in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 239,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/21/chapters/84/items/239"
          },
          {
            "item_id": 240,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/21/chapters/84/items/240"
          },
          {
            "item_id": 241,
            "title": "Discussion: Tools & Techniques",
            "content": "Content for discussion: tools & techniques in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/21/chapters/84/items/241"
          }
        ]
      }
    ]
  },
  {
    "_id": 22,
    "title": "Advanced Software Engineering: Design Patterns and System Architecture",
    "description": "Learners will master advanced architectural principles, design patterns, and enterprise-level system design techniques to lead complex software projects. This course covers SOLID principles, microservices architecture, scalable system design, and real-world implementation strategies used in Fortune 500 companies.",
    "proficiency": "Advanced",
    "learning_hours": 29,
    "fee": 369,
    "created_at": "2023-12-30 20:47:37",
    "last_updated": "2024-04-24 03:29:37",
    "organization": {
      "org_id": 6,
      "name": "Microsoft Learn",
      "website": "https://learn.microsoft.com",
      "email": "demo0522@example.invalid",
      "phone": null,
      "description": "Microsoft's official learning platform offering technical training, certifications, and professional development resources.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 63,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 4,
        "name": "French"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      },
      {
        "category_id": 7,
        "name": "UX Design"
      }
    ],
    "skills": [
      {
        "skill_id": 44,
        "name": "A/B Testing"
      },
      {
        "skill_id": 35,
        "name": "Git"
      },
      {
        "skill_id": 56,
        "name": "Accessibility"
      },
      {
        "skill_id": 14,
        "name": "Scope Management"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 85,
        "title": "Chapter 1: Fundamentals of Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 242,
            "title": "Reading: Overview",
            "content": "Content for reading: overview in Chapter 1: Fundamentals of Skills.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/22/chapters/85/items/242"
          },
          {
            "item_id": 243,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 1: Fundamentals of Skills.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/22/chapters/85/items/243"
          },
          {
            "item_id": 244,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 1: Fundamentals of Skills.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/22/chapters/85/items/244"
          }
        ]
      },
      {
        "chapter_id": 86,
        "title": "Chapter 2: Core Concepts in Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 245,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 2: Core Concepts in Principles.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/22/chapters/86/items/245"
          },
          {
            "item_id": 246,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 2: Core Concepts in Principles.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/22/chapters/86/items/246"
          },
          {
            "item_id": 247,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 2: Core Concepts in Principles.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/22/chapters/86/items/247"
          }
        ]
      },
      {
        "chapter_id": 87,
        "title": "Chapter 3: Applied Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 248,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 3: Applied Techniques.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/22/chapters/87/items/248"
          },
          {
            "item_id": 249,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 3: Applied Techniques.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/22/chapters/87/items/249"
          },
          {
            "item_id": 250,
            "title": "Quiz: Tools & Techniques",
            "content": "Content for quiz: tools & techniques in Chapter 3: Applied Techniques.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/22/chapters/87/items/250"
          },
          {
            "item_id": 251,
            "title": "Discussion: Real-World Examples",
            "content": "Content for discussion: real-world examples in Chapter 3: Applied Techniques.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/22/chapters/87/items/251"
          }
        ]
      }
    ]
  },
  {
    "_id": 23,
    "title": "Agile Fundamentals for Modern Teams",
    "description": "This beginner-level course introduces learners to core Agile principles, methodologies, and practices essential for today's dynamic work environments. Participants will gain foundational knowledge of Agile frameworks like Scrum and Kanban, understand iterative development cycles, and learn how to collaborate effectively in cross-functional teams. By the end of this course, learners will be equipped to contribute meaningfully to Agile projects and support organizational transformation initiatives.",
    "proficiency": "Beginner",
    "learning_hours": 7,
    "fee": 99,
    "created_at": "2024-01-01 02:43:23",
    "last_updated": "2024-02-28 05:18:15",
    "organization": {
      "org_id": 3,
      "name": "Wharton Online",
      "website": "https://online.wharton.upenn.edu",
      "email": "demo0523@example.invalid",
      "phone": null,
      "description": "University of Pennsylvania's Wharton School delivering world-class business education through digital learning experiences.",
      "type": "University"
    },
    "primary_instructor_id": 470,
    "instructors": [
      {
        "instructor_id": 317,
        "user_id": 317,
        "role": "Teaching Assistant",
        "assigned_at": "2023-12-08 05:01:43"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      },
      {
        "language_id": 5,
        "name": "Arabic"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 7,
        "name": "UX Design"
      }
    ],
    "skills": [
      {
        "skill_id": 2,
        "name": "Team Building"
      },
      {
        "skill_id": 34,
        "name": "JavaScript"
      },
      {
        "skill_id": 46,
        "name": "Go-to-Market Strategy"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 88,
        "title": "Chapter 1: Fundamentals of Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 252,
            "title": "Reading: Key Concepts",
            "content": "Content for reading: key concepts in Chapter 1: Fundamentals of Principles.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/23/chapters/88/items/252"
          },
          {
            "item_id": 253,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 1: Fundamentals of Principles.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/23/chapters/88/items/253"
          },
          {
            "item_id": 254,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 1: Fundamentals of Principles.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/23/chapters/88/items/254"
          }
        ]
      },
      {
        "chapter_id": 89,
        "title": "Chapter 2: Core Concepts in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 255,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 2: Core Concepts in Techniques.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/23/chapters/89/items/255"
          },
          {
            "item_id": 256,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 2: Core Concepts in Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/23/chapters/89/items/256"
          }
        ]
      },
      {
        "chapter_id": 90,
        "title": "Chapter 3: Applied Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 257,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 3: Applied Strategies.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/23/chapters/90/items/257"
          },
          {
            "item_id": 258,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 3: Applied Strategies.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/23/chapters/90/items/258"
          },
          {
            "item_id": 259,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 3: Applied Strategies.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/23/chapters/90/items/259"
          }
        ]
      }
    ]
  },
  {
    "_id": 24,
    "title": "Advanced Software Architecture and Design Patterns",
    "description": "Master enterprise-level software design principles, architectural patterns, and best practices for building scalable, maintainable systems. This course covers domain-driven design, microservices architecture, system scalability, and code quality optimization techniques used in Fortune 500 companies.",
    "proficiency": "Advanced",
    "learning_hours": 28,
    "fee": 250,
    "created_at": "2024-01-18 19:11:05",
    "last_updated": "2025-01-04 09:51:16",
    "organization": {
      "org_id": 12,
      "name": "LinkedIn Learning",
      "website": "https://www.linkedin.com/learning",
      "email": "demo0524@example.invalid",
      "phone": null,
      "description": "Professional learning platform integrated with LinkedIn, offering business, technology, and creative courses taught by industry experts.",
      "type": "EdTech Company"
    },
    "primary_instructor_id": 271,
    "instructors": [
      {
        "instructor_id": 436,
        "user_id": 436,
        "role": "Co-Instructor",
        "assigned_at": "2024-01-04 21:34:31"
      },
      {
        "instructor_id": 466,
        "user_id": 466,
        "role": "Lab Instructor",
        "assigned_at": "2023-12-25 14:34:08"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 6,
        "name": "Product Management"
      }
    ],
    "skills": [
      {
        "skill_id": 11,
        "name": "Resource Planning"
      },
      {
        "skill_id": 48,
        "name": "Prioritization Frameworks"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 91,
        "title": "Chapter 1: Fundamentals of Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 260,
            "title": "Reading: Best Practices",
            "content": "Content for reading: best practices in Chapter 1: Fundamentals of Techniques.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/24/chapters/91/items/260"
          },
          {
            "item_id": 261,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 1: Fundamentals of Techniques.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/24/chapters/91/items/261"
          },
          {
            "item_id": 262,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 1: Fundamentals of Techniques.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/24/chapters/91/items/262"
          },
          {
            "item_id": 263,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 1: Fundamentals of Techniques.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/24/chapters/91/items/263"
          }
        ]
      },
      {
        "chapter_id": 92,
        "title": "Chapter 2: Core Concepts in Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 264,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 2: Core Concepts in Strategies.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/24/chapters/92/items/264"
          },
          {
            "item_id": 265,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 2: Core Concepts in Strategies.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/24/chapters/92/items/265"
          }
        ]
      },
      {
        "chapter_id": 93,
        "title": "Chapter 3: Applied Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 266,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 3: Applied Methods.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/24/chapters/93/items/266"
          },
          {
            "item_id": 267,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 3: Applied Methods.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/24/chapters/93/items/267"
          }
        ]
      },
      {
        "chapter_id": 94,
        "title": "Chapter 4: Advanced Topics in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 268,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 4: Advanced Topics in Practices.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/24/chapters/94/items/268"
          },
          {
            "item_id": 269,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 4: Advanced Topics in Practices.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/24/chapters/94/items/269"
          },
          {
            "item_id": 270,
            "title": "Discussion: Review & Assessment",
            "content": "Content for discussion: review & assessment in Chapter 4: Advanced Topics in Practices.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/24/chapters/94/items/270"
          }
        ]
      },
      {
        "chapter_id": 95,
        "title": "Chapter 5: Practical Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 271,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 5: Practical Frameworks.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/24/chapters/95/items/271"
          },
          {
            "item_id": 272,
            "title": "Discussion: Review & Assessment",
            "content": "Content for discussion: review & assessment in Chapter 5: Practical Frameworks.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/24/chapters/95/items/272"
          },
          {
            "item_id": 273,
            "title": "Lesson: Overview",
            "content": "Content for lesson: overview in Chapter 5: Practical Frameworks.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/24/chapters/95/items/273"
          },
          {
            "item_id": 274,
            "title": "Video: Key Concepts",
            "content": "Content for video: key concepts in Chapter 5: Practical Frameworks.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/24/chapters/95/items/274"
          }
        ]
      }
    ]
  },
  {
    "_id": 25,
    "title": "Advanced UX Design: Enterprise Systems and Design Systems",
    "description": "Master enterprise-level UX design principles and methodologies for complex systems. This advanced course equips design professionals with frameworks for conducting sophisticated user research, building scalable design systems, and leading cross-functional teams to deliver exceptional user experiences in large-scale corporate environments. Learners will gain practical expertise in advanced prototyping, accessibility compliance, and data-driven design decisions for mission-critical applications.",
    "proficiency": "Advanced",
    "learning_hours": 39,
    "fee": 252,
    "created_at": "2024-02-19 10:08:56",
    "last_updated": "2024-09-07 20:27:11",
    "organization": {
      "org_id": 1,
      "name": "Stanford Professional Education",
      "website": "https://online.stanford.edu",
      "email": "demo0525@example.invalid",
      "phone": null,
      "description": "Stanford University's professional development arm offering executive education and certificate programs in technology and leadership.",
      "type": "University"
    },
    "primary_instructor_id": 191,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 41,
        "name": "Product Strategy"
      },
      {
        "skill_id": 51,
        "name": "Prototyping"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 96,
        "title": "Chapter 1: Fundamentals of Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 275,
            "title": "Reading: Common Challenges",
            "content": "Content for reading: common challenges in Chapter 1: Fundamentals of Strategies.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/25/chapters/96/items/275"
          },
          {
            "item_id": 276,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 1: Fundamentals of Strategies.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/25/chapters/96/items/276"
          },
          {
            "item_id": 277,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 1: Fundamentals of Strategies.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/25/chapters/96/items/277"
          }
        ]
      },
      {
        "chapter_id": 97,
        "title": "Chapter 2: Core Concepts in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 278,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 2: Core Concepts in Methods.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/25/chapters/97/items/278"
          },
          {
            "item_id": 279,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 2: Core Concepts in Methods.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/25/chapters/97/items/279"
          }
        ]
      },
      {
        "chapter_id": 98,
        "title": "Chapter 3: Applied Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 280,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 3: Applied Practices.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/25/chapters/98/items/280"
          },
          {
            "item_id": 281,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 3: Applied Practices.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/25/chapters/98/items/281"
          }
        ]
      },
      {
        "chapter_id": 99,
        "title": "Chapter 4: Advanced Topics in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 282,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/25/chapters/99/items/282"
          },
          {
            "item_id": 283,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/25/chapters/99/items/283"
          },
          {
            "item_id": 284,
            "title": "Discussion: Overview",
            "content": "Content for discussion: overview in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/25/chapters/99/items/284"
          }
        ]
      },
      {
        "chapter_id": 100,
        "title": "Chapter 5: Practical Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 285,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 5: Practical Applications.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/25/chapters/100/items/285"
          },
          {
            "item_id": 286,
            "title": "Discussion: Overview",
            "content": "Content for discussion: overview in Chapter 5: Practical Applications.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/25/chapters/100/items/286"
          }
        ]
      }
    ]
  },
  {
    "_id": 26,
    "title": "Advanced Project Management: Strategic Planning and Execution",
    "description": "Master sophisticated project management methodologies including advanced risk analysis, stakeholder management, and portfolio optimization. Learners will develop expertise in leading complex, multi-phase initiatives while aligning projects with organizational strategy and managing cross-functional teams effectively.",
    "proficiency": "Advanced",
    "learning_hours": 26,
    "fee": 298,
    "created_at": "2024-03-09 11:54:13",
    "last_updated": "2024-09-07 15:43:52",
    "organization": {
      "org_id": 12,
      "name": "LinkedIn Learning",
      "website": "https://www.linkedin.com/learning",
      "email": "demo0526@example.invalid",
      "phone": null,
      "description": "Professional learning platform integrated with LinkedIn, offering business, technology, and creative courses taught by industry experts.",
      "type": "EdTech Company"
    },
    "primary_instructor_id": 63,
    "instructors": [
      {
        "instructor_id": 45,
        "user_id": 45,
        "role": "Teaching Assistant",
        "assigned_at": "2024-02-16 09:22:48"
      },
      {
        "instructor_id": 500,
        "user_id": 500,
        "role": "Lab Instructor",
        "assigned_at": "2024-02-24 15:44:05"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 56,
        "name": "Accessibility"
      },
      {
        "skill_id": 33,
        "name": "Java"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 101,
        "title": "Chapter 1: Fundamentals of Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 287,
            "title": "Reading: Tools & Techniques",
            "content": "Content for reading: tools & techniques in Chapter 1: Fundamentals of Methods.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/26/chapters/101/items/287"
          },
          {
            "item_id": 288,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 1: Fundamentals of Methods.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/26/chapters/101/items/288"
          }
        ]
      },
      {
        "chapter_id": 102,
        "title": "Chapter 2: Core Concepts in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 289,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 2: Core Concepts in Practices.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/26/chapters/102/items/289"
          },
          {
            "item_id": 290,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 2: Core Concepts in Practices.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/26/chapters/102/items/290"
          }
        ]
      },
      {
        "chapter_id": 103,
        "title": "Chapter 3: Applied Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 291,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 3: Applied Frameworks.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/26/chapters/103/items/291"
          },
          {
            "item_id": 292,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 3: Applied Frameworks.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/26/chapters/103/items/292"
          },
          {
            "item_id": 293,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 3: Applied Frameworks.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/26/chapters/103/items/293"
          },
          {
            "item_id": 294,
            "title": "Discussion: Key Concepts",
            "content": "Content for discussion: key concepts in Chapter 3: Applied Frameworks.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/26/chapters/103/items/294"
          }
        ]
      }
    ]
  },
  {
    "_id": 27,
    "title": "Advanced Project Management: Enterprise Strategy and Execution",
    "description": "Master sophisticated project management methodologies including portfolio optimization, stakeholder engagement at executive levels, and risk mitigation across complex, multi-phase initiatives. This course equips senior professionals with advanced frameworks for leading transformational projects in dynamic corporate environments and delivering measurable business value.",
    "proficiency": "Advanced",
    "learning_hours": 22,
    "fee": 0,
    "created_at": "2024-03-01 14:09:37",
    "last_updated": "2024-10-18 10:02:15",
    "organization": {
      "org_id": 3,
      "name": "Wharton Online",
      "website": "https://online.wharton.upenn.edu",
      "email": "demo0527@example.invalid",
      "phone": null,
      "description": "University of Pennsylvania's Wharton School delivering world-class business education through digital learning experiences.",
      "type": "University"
    },
    "primary_instructor_id": 500,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 5,
        "name": "Arabic"
      },
      {
        "language_id": 4,
        "name": "French"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      },
      {
        "category_id": 2,
        "name": "Project Management"
      },
      {
        "category_id": 4,
        "name": "Data Analysis"
      }
    ],
    "skills": [
      {
        "skill_id": 15,
        "name": "PMBOK"
      },
      {
        "skill_id": 46,
        "name": "Go-to-Market Strategy"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 104,
        "title": "Chapter 1: Fundamentals of Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 295,
            "title": "Reading: Real-World Examples",
            "content": "Content for reading: real-world examples in Chapter 1: Fundamentals of Practices.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/27/chapters/104/items/295"
          },
          {
            "item_id": 296,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 1: Fundamentals of Practices.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/27/chapters/104/items/296"
          },
          {
            "item_id": 297,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 1: Fundamentals of Practices.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/27/chapters/104/items/297"
          },
          {
            "item_id": 298,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 1: Fundamentals of Practices.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/27/chapters/104/items/298"
          }
        ]
      },
      {
        "chapter_id": 105,
        "title": "Chapter 2: Core Concepts in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 299,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/27/chapters/105/items/299"
          },
          {
            "item_id": 300,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/27/chapters/105/items/300"
          },
          {
            "item_id": 301,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/27/chapters/105/items/301"
          },
          {
            "item_id": 302,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/27/chapters/105/items/302"
          }
        ]
      },
      {
        "chapter_id": 106,
        "title": "Chapter 3: Applied Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 303,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 3: Applied Applications.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/27/chapters/106/items/303"
          },
          {
            "item_id": 304,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 3: Applied Applications.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/27/chapters/106/items/304"
          },
          {
            "item_id": 305,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 3: Applied Applications.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/27/chapters/106/items/305"
          }
        ]
      },
      {
        "chapter_id": 107,
        "title": "Chapter 4: Advanced Topics in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 306,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 4: Advanced Topics in Skills.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/27/chapters/107/items/306"
          },
          {
            "item_id": 307,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 4: Advanced Topics in Skills.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/27/chapters/107/items/307"
          },
          {
            "item_id": 308,
            "title": "Discussion: Best Practices",
            "content": "Content for discussion: best practices in Chapter 4: Advanced Topics in Skills.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/27/chapters/107/items/308"
          },
          {
            "item_id": 309,
            "title": "Lesson: Common Challenges",
            "content": "Content for lesson: common challenges in Chapter 4: Advanced Topics in Skills.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/27/chapters/107/items/309"
          }
        ]
      }
    ]
  },
  {
    "_id": 28,
    "title": "Strategic Leadership and Organizational Transformation",
    "description": "Develop advanced leadership capabilities to drive organizational change and lead high-performing teams through complex business challenges. This course equips senior leaders with frameworks for strategic decision-making, change management, and building resilient organizational cultures in today's dynamic business environment.",
    "proficiency": "Advanced",
    "learning_hours": 20,
    "fee": 479,
    "created_at": "2024-04-03 16:59:48",
    "last_updated": "2024-07-05 12:01:22",
    "organization": {
      "org_id": 10,
      "name": "SHRM Education",
      "website": "https://www.shrm.org/learning",
      "email": "demo0528@example.invalid",
      "phone": null,
      "description": "Society for Human Resource Management's learning center for HR professionals seeking certification and skill development.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 340,
    "instructors": [
      {
        "instructor_id": 500,
        "user_id": 500,
        "role": "Co-Instructor",
        "assigned_at": "2024-03-30 04:13:02"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      },
      {
        "category_id": 3,
        "name": "Communication"
      }
    ],
    "skills": [
      {
        "skill_id": 31,
        "name": "Power BI"
      },
      {
        "skill_id": 16,
        "name": "Prince2"
      },
      {
        "skill_id": 47,
        "name": "Competitive Analysis"
      },
      {
        "skill_id": 18,
        "name": "Technical Writing"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 108,
        "title": "Chapter 1: Fundamentals of Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 310,
            "title": "Reading: Hands-On Practice",
            "content": "Content for reading: hands-on practice in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/28/chapters/108/items/310"
          },
          {
            "item_id": 311,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/28/chapters/108/items/311"
          }
        ]
      },
      {
        "chapter_id": 109,
        "title": "Chapter 2: Core Concepts in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 312,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 2: Core Concepts in Applications.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/28/chapters/109/items/312"
          },
          {
            "item_id": 313,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 2: Core Concepts in Applications.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/28/chapters/109/items/313"
          },
          {
            "item_id": 314,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 2: Core Concepts in Applications.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/28/chapters/109/items/314"
          }
        ]
      },
      {
        "chapter_id": 110,
        "title": "Chapter 3: Applied Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 315,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 3: Applied Skills.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/28/chapters/110/items/315"
          },
          {
            "item_id": 316,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 3: Applied Skills.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/28/chapters/110/items/316"
          }
        ]
      }
    ]
  },
  {
    "_id": 29,
    "title": "Advanced Product Management: Strategy to Market Launch",
    "description": "Learn to develop comprehensive product strategies, manage cross-functional teams, and successfully launch products in competitive markets. This course equips intermediate product managers with advanced frameworks, real-world case studies, and practical tools to drive product success and business growth.",
    "proficiency": "Intermediate",
    "learning_hours": 10,
    "fee": 0,
    "created_at": "2024-03-23 21:15:24",
    "last_updated": "2025-01-16 18:56:20",
    "organization": {
      "org_id": 10,
      "name": "SHRM Education",
      "website": "https://www.shrm.org/learning",
      "email": "demo0529@example.invalid",
      "phone": null,
      "description": "Society for Human Resource Management's learning center for HR professionals seeking certification and skill development.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 382,
    "instructors": [
      {
        "instructor_id": 466,
        "user_id": 466,
        "role": "Guest Lecturer",
        "assigned_at": "2024-03-08 07:26:39"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 7,
        "name": "UX Design"
      },
      {
        "category_id": 3,
        "name": "Communication"
      },
      {
        "category_id": 5,
        "name": "Software Engineering"
      }
    ],
    "skills": [
      {
        "skill_id": 64,
        "name": "Continuous Improvement"
      },
      {
        "skill_id": 41,
        "name": "Product Strategy"
      },
      {
        "skill_id": 58,
        "name": "Kanban"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 111,
        "title": "Chapter 1: Fundamentals of Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 317,
            "title": "Reading: Review & Assessment",
            "content": "Content for reading: review & assessment in Chapter 1: Fundamentals of Applications.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/29/chapters/111/items/317"
          },
          {
            "item_id": 318,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 1: Fundamentals of Applications.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/29/chapters/111/items/318"
          },
          {
            "item_id": 319,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 1: Fundamentals of Applications.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/29/chapters/111/items/319"
          },
          {
            "item_id": 320,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 1: Fundamentals of Applications.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/29/chapters/111/items/320"
          }
        ]
      },
      {
        "chapter_id": 112,
        "title": "Chapter 2: Core Concepts in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 321,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 2: Core Concepts in Skills.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/29/chapters/112/items/321"
          },
          {
            "item_id": 322,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 2: Core Concepts in Skills.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/29/chapters/112/items/322"
          }
        ]
      },
      {
        "chapter_id": 113,
        "title": "Chapter 3: Applied Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 323,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 3: Applied Principles.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/29/chapters/113/items/323"
          },
          {
            "item_id": 324,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 3: Applied Principles.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/29/chapters/113/items/324"
          },
          {
            "item_id": 325,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 3: Applied Principles.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/29/chapters/113/items/325"
          },
          {
            "item_id": 326,
            "title": "Discussion: Tools & Techniques",
            "content": "Content for discussion: tools & techniques in Chapter 3: Applied Principles.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/29/chapters/113/items/326"
          }
        ]
      },
      {
        "chapter_id": 114,
        "title": "Chapter 4: Advanced Topics in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 327,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/29/chapters/114/items/327"
          },
          {
            "item_id": 328,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/29/chapters/114/items/328"
          },
          {
            "item_id": 329,
            "title": "Discussion: Tools & Techniques",
            "content": "Content for discussion: tools & techniques in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/29/chapters/114/items/329"
          }
        ]
      }
    ]
  },
  {
    "_id": 30,
    "title": "Advanced Project Management Strategy and Execution",
    "description": "Master complex project management methodologies, risk mitigation strategies, and stakeholder management techniques essential for leading large-scale enterprise initiatives. Learners will develop expertise in advanced planning, resource optimization, and delivery frameworks to drive organizational success in competitive business environments.",
    "proficiency": "Advanced",
    "learning_hours": 29,
    "fee": 227,
    "created_at": "2024-04-13 15:22:45",
    "last_updated": "2024-11-23 13:31:19",
    "organization": {
      "org_id": 10,
      "name": "SHRM Education",
      "website": "https://www.shrm.org/learning",
      "email": "demo0530@example.invalid",
      "phone": null,
      "description": "Society for Human Resource Management's learning center for HR professionals seeking certification and skill development.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 137,
    "instructors": [
      {
        "instructor_id": 271,
        "user_id": 271,
        "role": "Lab Instructor",
        "assigned_at": "2024-03-26 07:08:17"
      },
      {
        "instructor_id": 190,
        "user_id": 190,
        "role": "Co-Instructor",
        "assigned_at": "2024-04-06 06:13:06"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 5,
        "name": "Software Engineering"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      },
      {
        "category_id": 8,
        "name": "Agile"
      }
    ],
    "skills": [
      {
        "skill_id": 15,
        "name": "PMBOK"
      },
      {
        "skill_id": 64,
        "name": "Continuous Improvement"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 115,
        "title": "Chapter 1: Fundamentals of Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 330,
            "title": "Reading: Overview",
            "content": "Content for reading: overview in Chapter 1: Fundamentals of Skills.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/30/chapters/115/items/330"
          },
          {
            "item_id": 331,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 1: Fundamentals of Skills.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/30/chapters/115/items/331"
          },
          {
            "item_id": 332,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 1: Fundamentals of Skills.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/30/chapters/115/items/332"
          }
        ]
      },
      {
        "chapter_id": 116,
        "title": "Chapter 2: Core Concepts in Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 333,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 2: Core Concepts in Principles.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/30/chapters/116/items/333"
          },
          {
            "item_id": 334,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 2: Core Concepts in Principles.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/30/chapters/116/items/334"
          },
          {
            "item_id": 335,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 2: Core Concepts in Principles.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/30/chapters/116/items/335"
          }
        ]
      },
      {
        "chapter_id": 117,
        "title": "Chapter 3: Applied Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 336,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 3: Applied Techniques.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/30/chapters/117/items/336"
          },
          {
            "item_id": 337,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 3: Applied Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/30/chapters/117/items/337"
          },
          {
            "item_id": 338,
            "title": "Quiz: Tools & Techniques",
            "content": "Content for quiz: tools & techniques in Chapter 3: Applied Techniques.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/30/chapters/117/items/338"
          },
          {
            "item_id": 339,
            "title": "Discussion: Real-World Examples",
            "content": "Content for discussion: real-world examples in Chapter 3: Applied Techniques.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/30/chapters/117/items/339"
          }
        ]
      }
    ]
  },
  {
    "_id": 31,
    "title": "Advanced Data Analysis and Business Intelligence",
    "description": "Master intermediate data analysis techniques to transform raw data into actionable business insights. Learners will develop proficiency in advanced statistical analysis, data visualization, and reporting tools while applying real-world scenarios from corporate environments. Upon completion, participants will be equipped to lead data-driven decision-making initiatives and optimize business performance through sophisticated analytical methodologies.",
    "proficiency": "Intermediate",
    "learning_hours": 21,
    "fee": 113,
    "created_at": "2024-05-12 18:20:45",
    "last_updated": "2025-01-15 14:04:34",
    "organization": {
      "org_id": 5,
      "name": "Google Career Certificates",
      "website": "https://grow.google/certificates",
      "email": "demo0531@example.invalid",
      "phone": null,
      "description": "Google's professional certificate programs designed to prepare learners for high-growth careers in technology fields.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 191,
    "instructors": [
      {
        "instructor_id": 438,
        "user_id": 438,
        "role": "Guest Lecturer",
        "assigned_at": "2024-04-24 03:06:19"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      }
    ],
    "skills": [
      {
        "skill_id": 53,
        "name": "Information Architecture"
      },
      {
        "skill_id": 3,
        "name": "Decision Making"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 118,
        "title": "Chapter 1: Fundamentals of Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 340,
            "title": "Reading: Key Concepts",
            "content": "Content for reading: key concepts in Chapter 1: Fundamentals of Principles.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/31/chapters/118/items/340"
          },
          {
            "item_id": 341,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 1: Fundamentals of Principles.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/31/chapters/118/items/341"
          }
        ]
      },
      {
        "chapter_id": 119,
        "title": "Chapter 2: Core Concepts in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 342,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 2: Core Concepts in Techniques.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/31/chapters/119/items/342"
          },
          {
            "item_id": 343,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 2: Core Concepts in Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/31/chapters/119/items/343"
          }
        ]
      },
      {
        "chapter_id": 120,
        "title": "Chapter 3: Applied Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 344,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 3: Applied Strategies.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/31/chapters/120/items/344"
          },
          {
            "item_id": 345,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 3: Applied Strategies.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/31/chapters/120/items/345"
          },
          {
            "item_id": 346,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 3: Applied Strategies.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/31/chapters/120/items/346"
          },
          {
            "item_id": 347,
            "title": "Discussion: Hands-On Practice",
            "content": "Content for discussion: hands-on practice in Chapter 3: Applied Strategies.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/31/chapters/120/items/347"
          }
        ]
      },
      {
        "chapter_id": 121,
        "title": "Chapter 4: Advanced Topics in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 348,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 4: Advanced Topics in Methods.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/31/chapters/121/items/348"
          },
          {
            "item_id": 349,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 4: Advanced Topics in Methods.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/31/chapters/121/items/349"
          },
          {
            "item_id": 350,
            "title": "Discussion: Hands-On Practice",
            "content": "Content for discussion: hands-on practice in Chapter 4: Advanced Topics in Methods.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/31/chapters/121/items/350"
          }
        ]
      },
      {
        "chapter_id": 122,
        "title": "Chapter 5: Practical Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 351,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 5: Practical Practices.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/31/chapters/122/items/351"
          },
          {
            "item_id": 352,
            "title": "Discussion: Hands-On Practice",
            "content": "Content for discussion: hands-on practice in Chapter 5: Practical Practices.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/31/chapters/122/items/352"
          },
          {
            "item_id": 353,
            "title": "Lesson: Review & Assessment",
            "content": "Content for lesson: review & assessment in Chapter 5: Practical Practices.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/31/chapters/122/items/353"
          },
          {
            "item_id": 354,
            "title": "Video: Overview",
            "content": "Content for video: overview in Chapter 5: Practical Practices.",
            "item_order": 4,
            "url": "https://course.skillup.io/courses/31/chapters/122/items/354"
          }
        ]
      }
    ]
  },
  {
    "_id": 32,
    "title": "Foundations of Effective Leadership for Emerging Leaders",
    "description": "This beginner-level course introduces essential leadership principles and practical strategies for newly promoted managers and aspiring leaders. Learners will master core competencies including emotional intelligence, communication, decision-making, and team motivation to build a strong foundation for their leadership journey. By completing this course, participants will gain the confidence and tools needed to inspire teams, manage conflicts constructively, and drive organizational success.",
    "proficiency": "Beginner",
    "learning_hours": 7,
    "fee": 0,
    "created_at": "2024-05-24 02:50:10",
    "last_updated": "2024-09-19 17:47:51",
    "organization": {
      "org_id": 4,
      "name": "Accenture Academy",
      "website": "https://academy.accenture.com",
      "email": "demo0532@example.invalid",
      "phone": null,
      "description": "Accenture's learning platform focused on digital transformation, consulting methodologies, and enterprise technology skills.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 448,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      },
      {
        "category_id": 7,
        "name": "UX Design"
      }
    ],
    "skills": [
      {
        "skill_id": 3,
        "name": "Decision Making"
      },
      {
        "skill_id": 9,
        "name": "Risk Management"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 123,
        "title": "Chapter 1: Fundamentals of Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 355,
            "title": "Reading: Best Practices",
            "content": "Content for reading: best practices in Chapter 1: Fundamentals of Techniques.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/32/chapters/123/items/355"
          },
          {
            "item_id": 356,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 1: Fundamentals of Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/32/chapters/123/items/356"
          }
        ]
      },
      {
        "chapter_id": 124,
        "title": "Chapter 2: Core Concepts in Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 357,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 2: Core Concepts in Strategies.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/32/chapters/124/items/357"
          },
          {
            "item_id": 358,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 2: Core Concepts in Strategies.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/32/chapters/124/items/358"
          }
        ]
      },
      {
        "chapter_id": 125,
        "title": "Chapter 3: Applied Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 359,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 3: Applied Methods.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/32/chapters/125/items/359"
          },
          {
            "item_id": 360,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 3: Applied Methods.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/32/chapters/125/items/360"
          },
          {
            "item_id": 361,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 3: Applied Methods.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/32/chapters/125/items/361"
          },
          {
            "item_id": 362,
            "title": "Discussion: Review & Assessment",
            "content": "Content for discussion: review & assessment in Chapter 3: Applied Methods.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/32/chapters/125/items/362"
          }
        ]
      }
    ]
  },
  {
    "_id": 33,
    "title": "Strategic Leadership: Driving Organizational Change and Performance",
    "description": "Develop advanced leadership capabilities to drive strategic initiatives, manage complex organizational transformations, and inspire high-performing teams. This course equips senior leaders with frameworks for visionary thinking, stakeholder management, and sustainable business impact in competitive markets.",
    "proficiency": "Advanced",
    "learning_hours": 44,
    "fee": 211,
    "created_at": "2024-05-29 20:39:43",
    "last_updated": "2024-10-19 19:29:19",
    "organization": {
      "org_id": 1,
      "name": "Stanford Professional Education",
      "website": "https://online.stanford.edu",
      "email": "demo0533@example.invalid",
      "phone": null,
      "description": "Stanford University's professional development arm offering executive education and certificate programs in technology and leadership.",
      "type": "University"
    },
    "primary_instructor_id": 138,
    "instructors": [
      {
        "instructor_id": 317,
        "user_id": 317,
        "role": "Co-Instructor",
        "assigned_at": "2024-05-16 06:07:57"
      },
      {
        "instructor_id": 466,
        "user_id": 466,
        "role": "Co-Instructor",
        "assigned_at": "2024-05-16 02:37:39"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      },
      {
        "category_id": 3,
        "name": "Communication"
      },
      {
        "category_id": 4,
        "name": "Data Analysis"
      }
    ],
    "skills": [
      {
        "skill_id": 35,
        "name": "Git"
      },
      {
        "skill_id": 41,
        "name": "Product Strategy"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 126,
        "title": "Chapter 1: Fundamentals of Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 363,
            "title": "Reading: Common Challenges",
            "content": "Content for reading: common challenges in Chapter 1: Fundamentals of Strategies.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/33/chapters/126/items/363"
          },
          {
            "item_id": 364,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 1: Fundamentals of Strategies.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/33/chapters/126/items/364"
          },
          {
            "item_id": 365,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 1: Fundamentals of Strategies.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/33/chapters/126/items/365"
          }
        ]
      },
      {
        "chapter_id": 127,
        "title": "Chapter 2: Core Concepts in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 366,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 2: Core Concepts in Methods.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/33/chapters/127/items/366"
          },
          {
            "item_id": 367,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 2: Core Concepts in Methods.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/33/chapters/127/items/367"
          }
        ]
      },
      {
        "chapter_id": 128,
        "title": "Chapter 3: Applied Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 368,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 3: Applied Practices.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/33/chapters/128/items/368"
          },
          {
            "item_id": 369,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 3: Applied Practices.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/33/chapters/128/items/369"
          },
          {
            "item_id": 370,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 3: Applied Practices.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/33/chapters/128/items/370"
          }
        ]
      },
      {
        "chapter_id": 129,
        "title": "Chapter 4: Advanced Topics in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 371,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/33/chapters/129/items/371"
          },
          {
            "item_id": 372,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/33/chapters/129/items/372"
          },
          {
            "item_id": 373,
            "title": "Discussion: Overview",
            "content": "Content for discussion: overview in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/33/chapters/129/items/373"
          },
          {
            "item_id": 374,
            "title": "Lesson: Key Concepts",
            "content": "Content for lesson: key concepts in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 4,
            "url": "https://course.skillup.io/courses/33/chapters/129/items/374"
          }
        ]
      }
    ]
  },
  {
    "_id": 34,
    "title": "Data Analysis Fundamentals for Business Professionals",
    "description": "This comprehensive beginner course equips professionals with essential data analysis skills, including data collection, cleaning, visualization, and interpretation techniques. Learners will gain practical knowledge in using industry-standard tools and methodologies to extract actionable insights from business data, enabling data-driven decision-making in their organizations.",
    "proficiency": "Beginner",
    "learning_hours": 6,
    "fee": 0,
    "created_at": "2024-06-10 18:18:58",
    "last_updated": "2024-09-19 06:10:58",
    "organization": {
      "org_id": 5,
      "name": "Google Career Certificates",
      "website": "https://grow.google/certificates",
      "email": "demo0534@example.invalid",
      "phone": null,
      "description": "Google's professional certificate programs designed to prepare learners for high-growth careers in technology fields.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 162,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      },
      {
        "language_id": 6,
        "name": "German"
      }
    ],
    "categories": [
      {
        "category_id": 2,
        "name": "Project Management"
      },
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 35,
        "name": "Git"
      },
      {
        "skill_id": 5,
        "name": "Emotional Intelligence"
      },
      {
        "skill_id": 43,
        "name": "User Research"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 130,
        "title": "Chapter 1: Fundamentals of Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 375,
            "title": "Reading: Tools & Techniques",
            "content": "Content for reading: tools & techniques in Chapter 1: Fundamentals of Methods.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/34/chapters/130/items/375"
          },
          {
            "item_id": 376,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 1: Fundamentals of Methods.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/34/chapters/130/items/376"
          },
          {
            "item_id": 377,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 1: Fundamentals of Methods.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/34/chapters/130/items/377"
          },
          {
            "item_id": 378,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 1: Fundamentals of Methods.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/34/chapters/130/items/378"
          }
        ]
      },
      {
        "chapter_id": 131,
        "title": "Chapter 2: Core Concepts in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 379,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 2: Core Concepts in Practices.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/34/chapters/131/items/379"
          },
          {
            "item_id": 380,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 2: Core Concepts in Practices.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/34/chapters/131/items/380"
          },
          {
            "item_id": 381,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 2: Core Concepts in Practices.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/34/chapters/131/items/381"
          }
        ]
      },
      {
        "chapter_id": 132,
        "title": "Chapter 3: Applied Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 382,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 3: Applied Frameworks.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/34/chapters/132/items/382"
          },
          {
            "item_id": 383,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 3: Applied Frameworks.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/34/chapters/132/items/383"
          },
          {
            "item_id": 384,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 3: Applied Frameworks.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/34/chapters/132/items/384"
          }
        ]
      }
    ]
  },
  {
    "_id": 35,
    "title": "Advanced Project Management: Strategic Execution and Leadership",
    "description": "Master sophisticated project management methodologies including advanced risk mitigation, stakeholder engagement, and portfolio optimization. This course equips experienced professionals with frameworks for managing complex multi-million dollar initiatives while developing leadership competencies in resource allocation, budget forecasting, and organizational change management.",
    "proficiency": "Advanced",
    "learning_hours": 21,
    "fee": 415,
    "created_at": "2024-06-13 09:26:32",
    "last_updated": "2024-07-25 22:06:24",
    "organization": {
      "org_id": 2,
      "name": "MIT Sloan Executive Education",
      "website": "https://executive.mit.edu",
      "email": "demo0535@example.invalid",
      "phone": null,
      "description": "Massachusetts Institute of Technology's business school providing cutting-edge management and technical training for professionals.",
      "type": "University"
    },
    "primary_instructor_id": 6,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      }
    ],
    "categories": [
      {
        "category_id": 2,
        "name": "Project Management"
      },
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 52,
        "name": "Usability Testing"
      },
      {
        "skill_id": 26,
        "name": "Python"
      },
      {
        "skill_id": 16,
        "name": "Prince2"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 133,
        "title": "Chapter 1: Fundamentals of Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 385,
            "title": "Reading: Real-World Examples",
            "content": "Content for reading: real-world examples in Chapter 1: Fundamentals of Practices.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/35/chapters/133/items/385"
          },
          {
            "item_id": 386,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 1: Fundamentals of Practices.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/35/chapters/133/items/386"
          },
          {
            "item_id": 387,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 1: Fundamentals of Practices.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/35/chapters/133/items/387"
          },
          {
            "item_id": 388,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 1: Fundamentals of Practices.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/35/chapters/133/items/388"
          }
        ]
      },
      {
        "chapter_id": 134,
        "title": "Chapter 2: Core Concepts in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 389,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/35/chapters/134/items/389"
          },
          {
            "item_id": 390,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/35/chapters/134/items/390"
          },
          {
            "item_id": 391,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/35/chapters/134/items/391"
          }
        ]
      },
      {
        "chapter_id": 135,
        "title": "Chapter 3: Applied Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 392,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 3: Applied Applications.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/35/chapters/135/items/392"
          },
          {
            "item_id": 393,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 3: Applied Applications.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/35/chapters/135/items/393"
          },
          {
            "item_id": 394,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 3: Applied Applications.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/35/chapters/135/items/394"
          }
        ]
      },
      {
        "chapter_id": 136,
        "title": "Chapter 4: Advanced Topics in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 395,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 4: Advanced Topics in Skills.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/35/chapters/136/items/395"
          },
          {
            "item_id": 396,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 4: Advanced Topics in Skills.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/35/chapters/136/items/396"
          },
          {
            "item_id": 397,
            "title": "Discussion: Best Practices",
            "content": "Content for discussion: best practices in Chapter 4: Advanced Topics in Skills.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/35/chapters/136/items/397"
          },
          {
            "item_id": 398,
            "title": "Lesson: Common Challenges",
            "content": "Content for lesson: common challenges in Chapter 4: Advanced Topics in Skills.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/35/chapters/136/items/398"
          }
        ]
      }
    ]
  },
  {
    "_id": 36,
    "title": "Strategic Leadership and Organizational Transformation",
    "description": "This advanced course equips senior leaders with frameworks and strategies for driving organizational change, building high-performing teams, and navigating complex business challenges. Learners will develop critical competencies in executive decision-making, stakeholder management, and sustainable leadership practices to create lasting impact across their organizations.",
    "proficiency": "Advanced",
    "learning_hours": 43,
    "fee": 220,
    "created_at": "2024-06-28 05:53:13",
    "last_updated": "2024-11-13 07:31:25",
    "organization": {
      "org_id": 5,
      "name": "Google Career Certificates",
      "website": "https://grow.google/certificates",
      "email": "demo0536@example.invalid",
      "phone": null,
      "description": "Google's professional certificate programs designed to prepare learners for high-growth careers in technology fields.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 436,
    "instructors": [
      {
        "instructor_id": 395,
        "user_id": 395,
        "role": "Lab Instructor",
        "assigned_at": "2024-06-22 04:28:48"
      },
      {
        "instructor_id": 162,
        "user_id": 162,
        "role": "Guest Lecturer",
        "assigned_at": "2024-06-11 21:06:34"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      }
    ],
    "skills": [
      {
        "skill_id": 22,
        "name": "Storytelling"
      },
      {
        "skill_id": 61,
        "name": "User Stories"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 137,
        "title": "Chapter 1: Fundamentals of Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 399,
            "title": "Reading: Hands-On Practice",
            "content": "Content for reading: hands-on practice in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/36/chapters/137/items/399"
          },
          {
            "item_id": 400,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/36/chapters/137/items/400"
          }
        ]
      },
      {
        "chapter_id": 138,
        "title": "Chapter 2: Core Concepts in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 401,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 2: Core Concepts in Applications.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/36/chapters/138/items/401"
          },
          {
            "item_id": 402,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 2: Core Concepts in Applications.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/36/chapters/138/items/402"
          }
        ]
      },
      {
        "chapter_id": 139,
        "title": "Chapter 3: Applied Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 403,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 3: Applied Skills.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/36/chapters/139/items/403"
          },
          {
            "item_id": 404,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 3: Applied Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/36/chapters/139/items/404"
          },
          {
            "item_id": 405,
            "title": "Quiz: Best Practices",
            "content": "Content for quiz: best practices in Chapter 3: Applied Skills.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/36/chapters/139/items/405"
          }
        ]
      }
    ]
  },
  {
    "_id": 37,
    "title": "Scaling Agile: Advanced Team Leadership and Frameworks",
    "description": "This intermediate course equips experienced practitioners with advanced Agile methodologies including SAFe, LeSS, and Nexus frameworks for managing complex multi-team environments. Learners will master stakeholder communication, dependency management, and organizational change strategies to effectively scale Agile practices across enterprise teams.",
    "proficiency": "Intermediate",
    "learning_hours": 11,
    "fee": 108,
    "created_at": "2024-07-10 16:43:36",
    "last_updated": "2025-01-11 12:15:13",
    "organization": {
      "org_id": 11,
      "name": "Pluralsight",
      "website": "https://www.pluralsight.com",
      "email": "demo0537@example.invalid",
      "phone": null,
      "description": "Technology workforce development platform with expert-authored courses in software development, IT, and creative skills.",
      "type": "EdTech Company"
    },
    "primary_instructor_id": 162,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 2,
        "name": "Project Management"
      }
    ],
    "skills": [
      {
        "skill_id": 53,
        "name": "Information Architecture"
      },
      {
        "skill_id": 33,
        "name": "Java"
      },
      {
        "skill_id": 23,
        "name": "Cross-cultural Communication"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 140,
        "title": "Chapter 1: Fundamentals of Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 406,
            "title": "Reading: Review & Assessment",
            "content": "Content for reading: review & assessment in Chapter 1: Fundamentals of Applications.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/37/chapters/140/items/406"
          },
          {
            "item_id": 407,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 1: Fundamentals of Applications.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/37/chapters/140/items/407"
          },
          {
            "item_id": 408,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 1: Fundamentals of Applications.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/37/chapters/140/items/408"
          }
        ]
      },
      {
        "chapter_id": 141,
        "title": "Chapter 2: Core Concepts in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 409,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 2: Core Concepts in Skills.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/37/chapters/141/items/409"
          },
          {
            "item_id": 410,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 2: Core Concepts in Skills.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/37/chapters/141/items/410"
          },
          {
            "item_id": 411,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 2: Core Concepts in Skills.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/37/chapters/141/items/411"
          },
          {
            "item_id": 412,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 2: Core Concepts in Skills.",
            "item_order": 4,
            "url": "https://course.skillup.io/courses/37/chapters/141/items/412"
          }
        ]
      },
      {
        "chapter_id": 142,
        "title": "Chapter 3: Applied Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 413,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 3: Applied Principles.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/37/chapters/142/items/413"
          },
          {
            "item_id": 414,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 3: Applied Principles.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/37/chapters/142/items/414"
          },
          {
            "item_id": 415,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 3: Applied Principles.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/37/chapters/142/items/415"
          },
          {
            "item_id": 416,
            "title": "Discussion: Tools & Techniques",
            "content": "Content for discussion: tools & techniques in Chapter 3: Applied Principles.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/37/chapters/142/items/416"
          }
        ]
      },
      {
        "chapter_id": 143,
        "title": "Chapter 4: Advanced Topics in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 417,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/37/chapters/143/items/417"
          },
          {
            "item_id": 418,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/37/chapters/143/items/418"
          },
          {
            "item_id": 419,
            "title": "Discussion: Tools & Techniques",
            "content": "Content for discussion: tools & techniques in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/37/chapters/143/items/419"
          }
        ]
      },
      {
        "chapter_id": 144,
        "title": "Chapter 5: Practical Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 420,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 5: Practical Strategies.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/37/chapters/144/items/420"
          },
          {
            "item_id": 421,
            "title": "Discussion: Tools & Techniques",
            "content": "Content for discussion: tools & techniques in Chapter 5: Practical Strategies.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/37/chapters/144/items/421"
          }
        ]
      }
    ]
  },
  {
    "_id": 38,
    "title": "Advanced Software Engineering: System Design and Architecture",
    "description": "This advanced course equips software engineers with the knowledge to design scalable, maintainable systems and make critical architectural decisions. Learners will master distributed systems principles, microservices patterns, design patterns, and enterprise architecture practices used in production environments across leading tech companies.",
    "proficiency": "Advanced",
    "learning_hours": 37,
    "fee": 246,
    "created_at": "2024-07-24 10:39:23",
    "last_updated": "2024-08-04 09:52:13",
    "organization": {
      "org_id": 4,
      "name": "Accenture Academy",
      "website": "https://academy.accenture.com",
      "email": "demo0538@example.invalid",
      "phone": null,
      "description": "Accenture's learning platform focused on digital transformation, consulting methodologies, and enterprise technology skills.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 441,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 4,
        "name": "French"
      }
    ],
    "categories": [
      {
        "category_id": 6,
        "name": "Product Management"
      },
      {
        "category_id": 3,
        "name": "Communication"
      }
    ],
    "skills": [
      {
        "skill_id": 21,
        "name": "Negotiation"
      },
      {
        "skill_id": 18,
        "name": "Technical Writing"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 145,
        "title": "Chapter 1: Fundamentals of Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 422,
            "title": "Reading: Overview",
            "content": "Content for reading: overview in Chapter 1: Fundamentals of Skills.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/38/chapters/145/items/422"
          },
          {
            "item_id": 423,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 1: Fundamentals of Skills.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/38/chapters/145/items/423"
          },
          {
            "item_id": 424,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 1: Fundamentals of Skills.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/38/chapters/145/items/424"
          }
        ]
      },
      {
        "chapter_id": 146,
        "title": "Chapter 2: Core Concepts in Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 425,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 2: Core Concepts in Principles.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/38/chapters/146/items/425"
          },
          {
            "item_id": 426,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 2: Core Concepts in Principles.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/38/chapters/146/items/426"
          }
        ]
      },
      {
        "chapter_id": 147,
        "title": "Chapter 3: Applied Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 427,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 3: Applied Techniques.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/38/chapters/147/items/427"
          },
          {
            "item_id": 428,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 3: Applied Techniques.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/38/chapters/147/items/428"
          },
          {
            "item_id": 429,
            "title": "Quiz: Tools & Techniques",
            "content": "Content for quiz: tools & techniques in Chapter 3: Applied Techniques.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/38/chapters/147/items/429"
          },
          {
            "item_id": 430,
            "title": "Discussion: Real-World Examples",
            "content": "Content for discussion: real-world examples in Chapter 3: Applied Techniques.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/38/chapters/147/items/430"
          }
        ]
      },
      {
        "chapter_id": 148,
        "title": "Chapter 4: Advanced Topics in Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 431,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 4: Advanced Topics in Strategies.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/38/chapters/148/items/431"
          },
          {
            "item_id": 432,
            "title": "Quiz: Tools & Techniques",
            "content": "Content for quiz: tools & techniques in Chapter 4: Advanced Topics in Strategies.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/38/chapters/148/items/432"
          }
        ]
      },
      {
        "chapter_id": 149,
        "title": "Chapter 5: Practical Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 433,
            "title": "Quiz: Tools & Techniques",
            "content": "Content for quiz: tools & techniques in Chapter 5: Practical Methods.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/38/chapters/149/items/433"
          },
          {
            "item_id": 434,
            "title": "Discussion: Real-World Examples",
            "content": "Content for discussion: real-world examples in Chapter 5: Practical Methods.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/38/chapters/149/items/434"
          },
          {
            "item_id": 435,
            "title": "Lesson: Hands-On Practice",
            "content": "Content for lesson: hands-on practice in Chapter 5: Practical Methods.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/38/chapters/149/items/435"
          },
          {
            "item_id": 436,
            "title": "Video: Review & Assessment",
            "content": "Content for video: review & assessment in Chapter 5: Practical Methods.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/38/chapters/149/items/436"
          }
        ]
      }
    ]
  },
  {
    "_id": 39,
    "title": "Advanced Professional Communication in Corporate Settings",
    "description": "This intermediate-level course equips professionals with advanced communication strategies to navigate complex workplace interactions, including cross-functional collaboration, stakeholder management, and persuasive presentation techniques. Learners will master active listening, emotional intelligence in communication, and conflict resolution skills to become more influential leaders and team members. By completing this course, participants will enhance their ability to articulate ideas clearly, build stronger professional relationships, and drive organizational success through improved communication effectiveness.",
    "proficiency": "Intermediate",
    "learning_hours": 16,
    "fee": 204,
    "created_at": "2024-09-04 17:24:46",
    "last_updated": "2024-11-11 11:48:41",
    "organization": {
      "org_id": 11,
      "name": "Pluralsight",
      "website": "https://www.pluralsight.com",
      "email": "demo0539@example.invalid",
      "phone": null,
      "description": "Technology workforce development platform with expert-authored courses in software development, IT, and creative skills.",
      "type": "EdTech Company"
    },
    "primary_instructor_id": 448,
    "instructors": [
      {
        "instructor_id": 6,
        "user_id": 6,
        "role": "Guest Lecturer",
        "assigned_at": "2024-08-17 17:02:54"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 5,
        "name": "Software Engineering"
      },
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 3,
        "name": "Communication"
      }
    ],
    "skills": [
      {
        "skill_id": 24,
        "name": "Feedback Delivery"
      },
      {
        "skill_id": 26,
        "name": "Python"
      },
      {
        "skill_id": 47,
        "name": "Competitive Analysis"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 150,
        "title": "Chapter 1: Fundamentals of Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 437,
            "title": "Reading: Key Concepts",
            "content": "Content for reading: key concepts in Chapter 1: Fundamentals of Principles.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/39/chapters/150/items/437"
          },
          {
            "item_id": 438,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 1: Fundamentals of Principles.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/39/chapters/150/items/438"
          },
          {
            "item_id": 439,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 1: Fundamentals of Principles.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/39/chapters/150/items/439"
          },
          {
            "item_id": 440,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 1: Fundamentals of Principles.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/39/chapters/150/items/440"
          }
        ]
      },
      {
        "chapter_id": 151,
        "title": "Chapter 2: Core Concepts in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 441,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 2: Core Concepts in Techniques.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/39/chapters/151/items/441"
          },
          {
            "item_id": 442,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 2: Core Concepts in Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/39/chapters/151/items/442"
          },
          {
            "item_id": 443,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 2: Core Concepts in Techniques.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/39/chapters/151/items/443"
          }
        ]
      },
      {
        "chapter_id": 152,
        "title": "Chapter 3: Applied Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 444,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 3: Applied Strategies.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/39/chapters/152/items/444"
          },
          {
            "item_id": 445,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 3: Applied Strategies.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/39/chapters/152/items/445"
          }
        ]
      },
      {
        "chapter_id": 153,
        "title": "Chapter 4: Advanced Topics in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 446,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 4: Advanced Topics in Methods.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/39/chapters/153/items/446"
          },
          {
            "item_id": 447,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 4: Advanced Topics in Methods.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/39/chapters/153/items/447"
          },
          {
            "item_id": 448,
            "title": "Discussion: Hands-On Practice",
            "content": "Content for discussion: hands-on practice in Chapter 4: Advanced Topics in Methods.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/39/chapters/153/items/448"
          },
          {
            "item_id": 449,
            "title": "Lesson: Review & Assessment",
            "content": "Content for lesson: review & assessment in Chapter 4: Advanced Topics in Methods.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/39/chapters/153/items/449"
          }
        ]
      }
    ]
  },
  {
    "_id": 40,
    "title": "Enterprise Agile Transformation: Leading Scaled Agile Frameworks",
    "description": "This advanced course equips organizational leaders and agile coaches with strategies to implement and scale agile methodologies across enterprise environments. Learners will master SAFe principles, organizational change management, and advanced coaching techniques to drive sustainable agile transformation in complex, multi-team organizations.",
    "proficiency": "Advanced",
    "learning_hours": 43,
    "fee": 353,
    "created_at": "2024-09-07 19:38:37",
    "last_updated": "2024-12-16 19:10:54",
    "organization": {
      "org_id": 11,
      "name": "Pluralsight",
      "website": "https://www.pluralsight.com",
      "email": "demo0540@example.invalid",
      "phone": null,
      "description": "Technology workforce development platform with expert-authored courses in software development, IT, and creative skills.",
      "type": "EdTech Company"
    },
    "primary_instructor_id": 277,
    "instructors": [
      {
        "instructor_id": 470,
        "user_id": 470,
        "role": "Teaching Assistant",
        "assigned_at": "2024-08-30 04:04:01"
      },
      {
        "instructor_id": 181,
        "user_id": 181,
        "role": "Guest Lecturer",
        "assigned_at": "2024-08-26 02:51:14"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      }
    ],
    "categories": [
      {
        "category_id": 8,
        "name": "Agile"
      },
      {
        "category_id": 5,
        "name": "Software Engineering"
      },
      {
        "category_id": 7,
        "name": "UX Design"
      }
    ],
    "skills": [
      {
        "skill_id": 4,
        "name": "Conflict Resolution"
      },
      {
        "skill_id": 24,
        "name": "Feedback Delivery"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 154,
        "title": "Chapter 1: Fundamentals of Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 450,
            "title": "Reading: Best Practices",
            "content": "Content for reading: best practices in Chapter 1: Fundamentals of Techniques.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/40/chapters/154/items/450"
          },
          {
            "item_id": 451,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 1: Fundamentals of Techniques.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/40/chapters/154/items/451"
          }
        ]
      },
      {
        "chapter_id": 155,
        "title": "Chapter 2: Core Concepts in Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 452,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 2: Core Concepts in Strategies.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/40/chapters/155/items/452"
          },
          {
            "item_id": 453,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 2: Core Concepts in Strategies.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/40/chapters/155/items/453"
          }
        ]
      },
      {
        "chapter_id": 156,
        "title": "Chapter 3: Applied Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 454,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 3: Applied Methods.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/40/chapters/156/items/454"
          },
          {
            "item_id": 455,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 3: Applied Methods.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/40/chapters/156/items/455"
          }
        ]
      },
      {
        "chapter_id": 157,
        "title": "Chapter 4: Advanced Topics in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 456,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 4: Advanced Topics in Practices.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/40/chapters/157/items/456"
          },
          {
            "item_id": 457,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 4: Advanced Topics in Practices.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/40/chapters/157/items/457"
          }
        ]
      },
      {
        "chapter_id": 158,
        "title": "Chapter 5: Practical Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 458,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 5: Practical Frameworks.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/40/chapters/158/items/458"
          },
          {
            "item_id": 459,
            "title": "Discussion: Review & Assessment",
            "content": "Content for discussion: review & assessment in Chapter 5: Practical Frameworks.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/40/chapters/158/items/459"
          }
        ]
      }
    ]
  },
  {
    "_id": 41,
    "title": "Advanced Data Analysis and Statistical Modeling Techniques",
    "description": "This advanced course equips professionals with sophisticated data analysis methodologies, statistical modeling, and predictive analytics skills essential for driving strategic business decisions. Learners will master advanced visualization techniques, multivariate analysis, hypothesis testing, and machine learning integration to extract actionable insights from complex datasets.",
    "proficiency": "Advanced",
    "learning_hours": 44,
    "fee": 0,
    "created_at": "2024-09-11 13:35:19",
    "last_updated": "2025-01-10 08:38:42",
    "organization": {
      "org_id": 1,
      "name": "Stanford Professional Education",
      "website": "https://online.stanford.edu",
      "email": "demo0541@example.invalid",
      "phone": null,
      "description": "Stanford University's professional development arm offering executive education and certificate programs in technology and leadership.",
      "type": "University"
    },
    "primary_instructor_id": 470,
    "instructors": [
      {
        "instructor_id": 137,
        "user_id": 137,
        "role": "Teaching Assistant",
        "assigned_at": "2024-08-27 09:41:20"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      }
    ],
    "skills": [
      {
        "skill_id": 3,
        "name": "Decision Making"
      },
      {
        "skill_id": 46,
        "name": "Go-to-Market Strategy"
      },
      {
        "skill_id": 57,
        "name": "Scrum"
      },
      {
        "skill_id": 63,
        "name": "Agile Estimation"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 159,
        "title": "Chapter 1: Fundamentals of Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 460,
            "title": "Reading: Common Challenges",
            "content": "Content for reading: common challenges in Chapter 1: Fundamentals of Strategies.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/41/chapters/159/items/460"
          },
          {
            "item_id": 461,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 1: Fundamentals of Strategies.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/41/chapters/159/items/461"
          }
        ]
      },
      {
        "chapter_id": 160,
        "title": "Chapter 2: Core Concepts in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 462,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 2: Core Concepts in Methods.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/41/chapters/160/items/462"
          },
          {
            "item_id": 463,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 2: Core Concepts in Methods.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/41/chapters/160/items/463"
          },
          {
            "item_id": 464,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 2: Core Concepts in Methods.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/41/chapters/160/items/464"
          },
          {
            "item_id": 465,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 2: Core Concepts in Methods.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/41/chapters/160/items/465"
          }
        ]
      },
      {
        "chapter_id": 161,
        "title": "Chapter 3: Applied Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 466,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 3: Applied Practices.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/41/chapters/161/items/466"
          },
          {
            "item_id": 467,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 3: Applied Practices.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/41/chapters/161/items/467"
          },
          {
            "item_id": 468,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 3: Applied Practices.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/41/chapters/161/items/468"
          },
          {
            "item_id": 469,
            "title": "Discussion: Overview",
            "content": "Content for discussion: overview in Chapter 3: Applied Practices.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/41/chapters/161/items/469"
          }
        ]
      },
      {
        "chapter_id": 162,
        "title": "Chapter 4: Advanced Topics in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 470,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/41/chapters/162/items/470"
          },
          {
            "item_id": 471,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 4: Advanced Topics in Frameworks.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/41/chapters/162/items/471"
          }
        ]
      },
      {
        "chapter_id": 163,
        "title": "Chapter 5: Practical Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 5,
        "items": [
          {
            "item_id": 472,
            "title": "Quiz: Review & Assessment",
            "content": "Content for quiz: review & assessment in Chapter 5: Practical Applications.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/41/chapters/163/items/472"
          },
          {
            "item_id": 473,
            "title": "Discussion: Overview",
            "content": "Content for discussion: overview in Chapter 5: Practical Applications.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/41/chapters/163/items/473"
          },
          {
            "item_id": 474,
            "title": "Lesson: Key Concepts",
            "content": "Content for lesson: key concepts in Chapter 5: Practical Applications.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/41/chapters/163/items/474"
          },
          {
            "item_id": 475,
            "title": "Video: Best Practices",
            "content": "Content for video: best practices in Chapter 5: Practical Applications.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/41/chapters/163/items/475"
          }
        ]
      }
    ]
  },
  {
    "_id": 42,
    "title": "Advanced User Experience Design for Enterprise Products",
    "description": "This advanced course equips experienced designers with cutting-edge methodologies for designing complex enterprise systems and SaaS platforms at scale. Learners will master advanced usability research techniques, design system governance, accessibility compliance, and the strategic integration of UX design with business objectives and product roadmaps.",
    "proficiency": "Advanced",
    "learning_hours": 29,
    "fee": 236,
    "created_at": "2024-10-07 18:21:17",
    "last_updated": "2024-12-13 12:45:23",
    "organization": {
      "org_id": 3,
      "name": "Wharton Online",
      "website": "https://online.wharton.upenn.edu",
      "email": "demo0542@example.invalid",
      "phone": null,
      "description": "University of Pennsylvania's Wharton School delivering world-class business education through digital learning experiences.",
      "type": "University"
    },
    "primary_instructor_id": 441,
    "instructors": [
      {
        "instructor_id": 190,
        "user_id": 190,
        "role": "Lab Instructor",
        "assigned_at": "2024-10-07 06:29:32"
      },
      {
        "instructor_id": 55,
        "user_id": 55,
        "role": "Co-Instructor",
        "assigned_at": "2024-09-13 21:43:43"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 3,
        "name": "Communication"
      },
      {
        "category_id": 5,
        "name": "Software Engineering"
      },
      {
        "category_id": 2,
        "name": "Project Management"
      }
    ],
    "skills": [
      {
        "skill_id": 43,
        "name": "User Research"
      },
      {
        "skill_id": 4,
        "name": "Conflict Resolution"
      },
      {
        "skill_id": 46,
        "name": "Go-to-Market Strategy"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 164,
        "title": "Chapter 1: Fundamentals of Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 476,
            "title": "Reading: Tools & Techniques",
            "content": "Content for reading: tools & techniques in Chapter 1: Fundamentals of Methods.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/42/chapters/164/items/476"
          },
          {
            "item_id": 477,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 1: Fundamentals of Methods.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/42/chapters/164/items/477"
          },
          {
            "item_id": 478,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 1: Fundamentals of Methods.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/42/chapters/164/items/478"
          },
          {
            "item_id": 479,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 1: Fundamentals of Methods.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/42/chapters/164/items/479"
          }
        ]
      },
      {
        "chapter_id": 165,
        "title": "Chapter 2: Core Concepts in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 480,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 2: Core Concepts in Practices.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/42/chapters/165/items/480"
          },
          {
            "item_id": 481,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 2: Core Concepts in Practices.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/42/chapters/165/items/481"
          }
        ]
      },
      {
        "chapter_id": 166,
        "title": "Chapter 3: Applied Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 482,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 3: Applied Frameworks.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/42/chapters/166/items/482"
          },
          {
            "item_id": 483,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 3: Applied Frameworks.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/42/chapters/166/items/483"
          },
          {
            "item_id": 484,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 3: Applied Frameworks.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/42/chapters/166/items/484"
          },
          {
            "item_id": 485,
            "title": "Discussion: Key Concepts",
            "content": "Content for discussion: key concepts in Chapter 3: Applied Frameworks.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/42/chapters/166/items/485"
          }
        ]
      },
      {
        "chapter_id": 167,
        "title": "Chapter 4: Advanced Topics in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 486,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 4: Advanced Topics in Applications.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/42/chapters/167/items/486"
          },
          {
            "item_id": 487,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 4: Advanced Topics in Applications.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/42/chapters/167/items/487"
          }
        ]
      }
    ]
  },
  {
    "_id": 43,
    "title": "Advanced Product Strategy: Market Leadership and Execution",
    "description": "This advanced course equips experienced product managers with strategic frameworks for defining competitive positioning, driving market expansion, and scaling product portfolios across complex organizational structures. Learners will master cross-functional stakeholder management, data-driven decision making, and advanced roadmapping techniques to lead high-impact product initiatives in competitive markets.",
    "proficiency": "Advanced",
    "learning_hours": 29,
    "fee": 453,
    "created_at": "2024-10-17 12:21:18",
    "last_updated": "2024-11-18 03:16:43",
    "organization": {
      "org_id": 10,
      "name": "SHRM Education",
      "website": "https://www.shrm.org/learning",
      "email": "demo0543@example.invalid",
      "phone": null,
      "description": "Society for Human Resource Management's learning center for HR professionals seeking certification and skill development.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 277,
    "instructors": [
      {
        "instructor_id": 479,
        "user_id": 479,
        "role": "Co-Instructor",
        "assigned_at": "2024-10-13 00:50:07"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 8,
        "name": "Agile"
      },
      {
        "category_id": 7,
        "name": "UX Design"
      },
      {
        "category_id": 4,
        "name": "Data Analysis"
      }
    ],
    "skills": [
      {
        "skill_id": 61,
        "name": "User Stories"
      },
      {
        "skill_id": 40,
        "name": "CI/CD"
      },
      {
        "skill_id": 55,
        "name": "Design Systems"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 168,
        "title": "Chapter 1: Fundamentals of Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 488,
            "title": "Reading: Real-World Examples",
            "content": "Content for reading: real-world examples in Chapter 1: Fundamentals of Practices.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/43/chapters/168/items/488"
          },
          {
            "item_id": 489,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 1: Fundamentals of Practices.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/43/chapters/168/items/489"
          },
          {
            "item_id": 490,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 1: Fundamentals of Practices.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/43/chapters/168/items/490"
          },
          {
            "item_id": 491,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 1: Fundamentals of Practices.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/43/chapters/168/items/491"
          }
        ]
      },
      {
        "chapter_id": 169,
        "title": "Chapter 2: Core Concepts in Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 492,
            "title": "Exercise: Hands-On Practice",
            "content": "Content for exercise: hands-on practice in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/43/chapters/169/items/492"
          },
          {
            "item_id": 493,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/43/chapters/169/items/493"
          },
          {
            "item_id": 494,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 2: Core Concepts in Frameworks.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/43/chapters/169/items/494"
          }
        ]
      },
      {
        "chapter_id": 170,
        "title": "Chapter 3: Applied Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 495,
            "title": "Case Study: Review & Assessment",
            "content": "Content for case study: review & assessment in Chapter 3: Applied Applications.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/43/chapters/170/items/495"
          },
          {
            "item_id": 496,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 3: Applied Applications.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/43/chapters/170/items/496"
          },
          {
            "item_id": 497,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 3: Applied Applications.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/43/chapters/170/items/497"
          },
          {
            "item_id": 498,
            "title": "Discussion: Best Practices",
            "content": "Content for discussion: best practices in Chapter 3: Applied Applications.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/43/chapters/170/items/498"
          }
        ]
      },
      {
        "chapter_id": 171,
        "title": "Chapter 4: Advanced Topics in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 499,
            "title": "Workshop: Overview",
            "content": "Content for workshop: overview in Chapter 4: Advanced Topics in Skills.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/43/chapters/171/items/499"
          },
          {
            "item_id": 500,
            "title": "Quiz: Key Concepts",
            "content": "Content for quiz: key concepts in Chapter 4: Advanced Topics in Skills.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/43/chapters/171/items/500"
          },
          {
            "item_id": 501,
            "title": "Discussion: Best Practices",
            "content": "Content for discussion: best practices in Chapter 4: Advanced Topics in Skills.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/43/chapters/171/items/501"
          },
          {
            "item_id": 502,
            "title": "Lesson: Common Challenges",
            "content": "Content for lesson: common challenges in Chapter 4: Advanced Topics in Skills.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/43/chapters/171/items/502"
          }
        ]
      }
    ]
  },
  {
    "_id": 44,
    "title": "Advanced Data Analysis and Predictive Modeling",
    "description": "Master advanced statistical techniques, machine learning algorithms, and predictive modeling to drive strategic business decisions. Learners will develop expertise in complex data analysis, hypothesis testing, and building predictive models using industry-standard tools and methodologies.",
    "proficiency": "Advanced",
    "learning_hours": 38,
    "fee": 358,
    "created_at": "2024-10-18 12:59:03",
    "last_updated": "2024-12-20 20:42:09",
    "organization": {
      "org_id": 7,
      "name": "General Assembly",
      "website": "https://generalassemb.ly",
      "email": "demo0544@example.invalid",
      "phone": null,
      "description": "Pioneer in tech bootcamps offering immersive programs in software engineering, data science, UX design, and product management.",
      "type": "Bootcamp"
    },
    "primary_instructor_id": 448,
    "instructors": [
      {
        "instructor_id": 340,
        "user_id": 340,
        "role": "Guest Lecturer",
        "assigned_at": "2024-10-04 05:43:29"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 5,
        "name": "Software Engineering"
      },
      {
        "category_id": 2,
        "name": "Project Management"
      }
    ],
    "skills": [
      {
        "skill_id": 43,
        "name": "User Research"
      },
      {
        "skill_id": 12,
        "name": "Budget Management"
      },
      {
        "skill_id": 46,
        "name": "Go-to-Market Strategy"
      },
      {
        "skill_id": 20,
        "name": "Presentation Skills"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 172,
        "title": "Chapter 1: Fundamentals of Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 503,
            "title": "Reading: Hands-On Practice",
            "content": "Content for reading: hands-on practice in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/44/chapters/172/items/503"
          },
          {
            "item_id": 504,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/44/chapters/172/items/504"
          },
          {
            "item_id": 505,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 3,
            "url": "https://learn.skillup.io/courses/44/chapters/172/items/505"
          },
          {
            "item_id": 506,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 1: Fundamentals of Frameworks.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/44/chapters/172/items/506"
          }
        ]
      },
      {
        "chapter_id": 173,
        "title": "Chapter 2: Core Concepts in Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 507,
            "title": "Exercise: Review & Assessment",
            "content": "Content for exercise: review & assessment in Chapter 2: Core Concepts in Applications.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/44/chapters/173/items/507"
          },
          {
            "item_id": 508,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 2: Core Concepts in Applications.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/44/chapters/173/items/508"
          },
          {
            "item_id": 509,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 2: Core Concepts in Applications.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/44/chapters/173/items/509"
          },
          {
            "item_id": 510,
            "title": "Quiz: Best Practices",
            "content": "Content for quiz: best practices in Chapter 2: Core Concepts in Applications.",
            "item_order": 4,
            "url": "https://training.skillup.io/courses/44/chapters/173/items/510"
          }
        ]
      },
      {
        "chapter_id": 174,
        "title": "Chapter 3: Applied Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 511,
            "title": "Case Study: Overview",
            "content": "Content for case study: overview in Chapter 3: Applied Skills.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/44/chapters/174/items/511"
          },
          {
            "item_id": 512,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 3: Applied Skills.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/44/chapters/174/items/512"
          },
          {
            "item_id": 513,
            "title": "Quiz: Best Practices",
            "content": "Content for quiz: best practices in Chapter 3: Applied Skills.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/44/chapters/174/items/513"
          },
          {
            "item_id": 514,
            "title": "Discussion: Common Challenges",
            "content": "Content for discussion: common challenges in Chapter 3: Applied Skills.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/44/chapters/174/items/514"
          }
        ]
      },
      {
        "chapter_id": 175,
        "title": "Chapter 4: Advanced Topics in Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 515,
            "title": "Workshop: Key Concepts",
            "content": "Content for workshop: key concepts in Chapter 4: Advanced Topics in Principles.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/44/chapters/175/items/515"
          },
          {
            "item_id": 516,
            "title": "Quiz: Best Practices",
            "content": "Content for quiz: best practices in Chapter 4: Advanced Topics in Principles.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/44/chapters/175/items/516"
          },
          {
            "item_id": 517,
            "title": "Discussion: Common Challenges",
            "content": "Content for discussion: common challenges in Chapter 4: Advanced Topics in Principles.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/44/chapters/175/items/517"
          },
          {
            "item_id": 518,
            "title": "Lesson: Tools & Techniques",
            "content": "Content for lesson: tools & techniques in Chapter 4: Advanced Topics in Principles.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/44/chapters/175/items/518"
          }
        ]
      }
    ]
  },
  {
    "_id": 45,
    "title": "Advanced Project Portfolio Management and Strategic Governance",
    "description": "This advanced course equips seasoned project managers with sophisticated portfolio management techniques, stakeholder governance frameworks, and enterprise-level risk orchestration strategies. Learners will master multi-project alignment, resource optimization across portfolios, and develop executive-level decision-making skills for complex organizational initiatives.",
    "proficiency": "Advanced",
    "learning_hours": 23,
    "fee": 261,
    "created_at": "2024-11-08 10:31:56",
    "last_updated": "2024-11-25 17:10:46",
    "organization": {
      "org_id": 9,
      "name": "PMI Learning",
      "website": "https://www.pmi.org/learning",
      "email": "demo0545@example.invalid",
      "phone": null,
      "description": "Project Management Institute's educational division offering PMP certification prep and project management courses.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 479,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      }
    ],
    "categories": [
      {
        "category_id": 4,
        "name": "Data Analysis"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      },
      {
        "category_id": 5,
        "name": "Software Engineering"
      }
    ],
    "skills": [
      {
        "skill_id": 17,
        "name": "Public Speaking"
      },
      {
        "skill_id": 32,
        "name": "Machine Learning Basics"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 176,
        "title": "Chapter 1: Fundamentals of Applications",
        "description": "This chapter covers essential applications for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 519,
            "title": "Reading: Review & Assessment",
            "content": "Content for reading: review & assessment in Chapter 1: Fundamentals of Applications.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/45/chapters/176/items/519"
          },
          {
            "item_id": 520,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 1: Fundamentals of Applications.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/45/chapters/176/items/520"
          }
        ]
      },
      {
        "chapter_id": 177,
        "title": "Chapter 2: Core Concepts in Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 521,
            "title": "Exercise: Overview",
            "content": "Content for exercise: overview in Chapter 2: Core Concepts in Skills.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/45/chapters/177/items/521"
          },
          {
            "item_id": 522,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 2: Core Concepts in Skills.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/45/chapters/177/items/522"
          },
          {
            "item_id": 523,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 2: Core Concepts in Skills.",
            "item_order": 3,
            "url": "https://edu.skillup.io/courses/45/chapters/177/items/523"
          },
          {
            "item_id": 524,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 2: Core Concepts in Skills.",
            "item_order": 4,
            "url": "https://learn.skillup.io/courses/45/chapters/177/items/524"
          }
        ]
      },
      {
        "chapter_id": 178,
        "title": "Chapter 3: Applied Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 525,
            "title": "Case Study: Key Concepts",
            "content": "Content for case study: key concepts in Chapter 3: Applied Principles.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/45/chapters/178/items/525"
          },
          {
            "item_id": 526,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 3: Applied Principles.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/45/chapters/178/items/526"
          },
          {
            "item_id": 527,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 3: Applied Principles.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/45/chapters/178/items/527"
          }
        ]
      },
      {
        "chapter_id": 179,
        "title": "Chapter 4: Advanced Topics in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 528,
            "title": "Workshop: Best Practices",
            "content": "Content for workshop: best practices in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/45/chapters/179/items/528"
          },
          {
            "item_id": 529,
            "title": "Quiz: Common Challenges",
            "content": "Content for quiz: common challenges in Chapter 4: Advanced Topics in Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/45/chapters/179/items/529"
          }
        ]
      }
    ]
  },
  {
    "_id": 46,
    "title": "Advanced Project Management: Execution and Control Strategies",
    "description": "Develop mastery in managing complex projects through proven execution frameworks and real-world control methodologies. This intermediate course equips professionals with the essential skills to deliver projects on time and within budget while managing stakeholder expectations and team dynamics effectively.",
    "proficiency": "Intermediate",
    "learning_hours": 23,
    "fee": 245,
    "created_at": "2024-12-08 16:50:01",
    "last_updated": "2024-12-21 17:51:54",
    "organization": {
      "org_id": 9,
      "name": "PMI Learning",
      "website": "https://www.pmi.org/learning",
      "email": "demo0546@example.invalid",
      "phone": null,
      "description": "Project Management Institute's educational division offering PMP certification prep and project management courses.",
      "type": "Professional Association"
    },
    "primary_instructor_id": 470,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 4,
        "name": "French"
      },
      {
        "language_id": 2,
        "name": "Spanish"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 1,
        "name": "Leadership"
      },
      {
        "category_id": 5,
        "name": "Software Engineering"
      }
    ],
    "skills": [
      {
        "skill_id": 36,
        "name": "Code Review"
      },
      {
        "skill_id": 7,
        "name": "Mentoring"
      },
      {
        "skill_id": 62,
        "name": "Backlog Grooming"
      },
      {
        "skill_id": 43,
        "name": "User Research"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 180,
        "title": "Chapter 1: Fundamentals of Skills",
        "description": "This chapter covers essential skills for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 530,
            "title": "Reading: Overview",
            "content": "Content for reading: overview in Chapter 1: Fundamentals of Skills.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/46/chapters/180/items/530"
          },
          {
            "item_id": 531,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 1: Fundamentals of Skills.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/46/chapters/180/items/531"
          },
          {
            "item_id": 532,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 1: Fundamentals of Skills.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/46/chapters/180/items/532"
          }
        ]
      },
      {
        "chapter_id": 181,
        "title": "Chapter 2: Core Concepts in Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 533,
            "title": "Exercise: Key Concepts",
            "content": "Content for exercise: key concepts in Chapter 2: Core Concepts in Principles.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/46/chapters/181/items/533"
          },
          {
            "item_id": 534,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 2: Core Concepts in Principles.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/46/chapters/181/items/534"
          },
          {
            "item_id": 535,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 2: Core Concepts in Principles.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/46/chapters/181/items/535"
          }
        ]
      },
      {
        "chapter_id": 182,
        "title": "Chapter 3: Applied Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 536,
            "title": "Case Study: Best Practices",
            "content": "Content for case study: best practices in Chapter 3: Applied Techniques.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/46/chapters/182/items/536"
          },
          {
            "item_id": 537,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 3: Applied Techniques.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/46/chapters/182/items/537"
          }
        ]
      },
      {
        "chapter_id": 183,
        "title": "Chapter 4: Advanced Topics in Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 538,
            "title": "Workshop: Common Challenges",
            "content": "Content for workshop: common challenges in Chapter 4: Advanced Topics in Strategies.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/46/chapters/183/items/538"
          },
          {
            "item_id": 539,
            "title": "Quiz: Tools & Techniques",
            "content": "Content for quiz: tools & techniques in Chapter 4: Advanced Topics in Strategies.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/46/chapters/183/items/539"
          }
        ]
      }
    ]
  },
  {
    "_id": 47,
    "title": "Agile Frameworks and Sprint Mastery in Practice",
    "description": "Master advanced Agile methodologies, Sprint planning, and team coordination to deliver complex projects effectively. This intermediate course equips professionals with practical skills in managing stakeholder expectations, optimizing team velocity, and implementing continuous improvement cycles.",
    "proficiency": "Intermediate",
    "learning_hours": 24,
    "fee": 0,
    "created_at": "2024-11-27 17:41:18",
    "last_updated": "2025-01-19 07:49:09",
    "organization": {
      "org_id": 5,
      "name": "Google Career Certificates",
      "website": "https://grow.google/certificates",
      "email": "demo0547@example.invalid",
      "phone": null,
      "description": "Google's professional certificate programs designed to prepare learners for high-growth careers in technology fields.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 63,
    "instructors": [
      {
        "instructor_id": 317,
        "user_id": 317,
        "role": "Guest Lecturer",
        "assigned_at": "2024-11-03 00:14:52"
      },
      {
        "instructor_id": 190,
        "user_id": 190,
        "role": "Lab Instructor",
        "assigned_at": "2024-11-13 03:51:19"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 3,
        "name": "Mandarin"
      }
    ],
    "categories": [
      {
        "category_id": 7,
        "name": "UX Design"
      },
      {
        "category_id": 2,
        "name": "Project Management"
      }
    ],
    "skills": [
      {
        "skill_id": 27,
        "name": "Data Visualization"
      },
      {
        "skill_id": 11,
        "name": "Resource Planning"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 184,
        "title": "Chapter 1: Fundamentals of Principles",
        "description": "This chapter covers essential principles for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 540,
            "title": "Reading: Key Concepts",
            "content": "Content for reading: key concepts in Chapter 1: Fundamentals of Principles.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/47/chapters/184/items/540"
          },
          {
            "item_id": 541,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 1: Fundamentals of Principles.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/47/chapters/184/items/541"
          }
        ]
      },
      {
        "chapter_id": 185,
        "title": "Chapter 2: Core Concepts in Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 542,
            "title": "Exercise: Best Practices",
            "content": "Content for exercise: best practices in Chapter 2: Core Concepts in Techniques.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/47/chapters/185/items/542"
          },
          {
            "item_id": 543,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 2: Core Concepts in Techniques.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/47/chapters/185/items/543"
          },
          {
            "item_id": 544,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 2: Core Concepts in Techniques.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/47/chapters/185/items/544"
          }
        ]
      },
      {
        "chapter_id": 186,
        "title": "Chapter 3: Applied Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 545,
            "title": "Case Study: Common Challenges",
            "content": "Content for case study: common challenges in Chapter 3: Applied Strategies.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/47/chapters/186/items/545"
          },
          {
            "item_id": 546,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 3: Applied Strategies.",
            "item_order": 2,
            "url": "https://learn.skillup.io/courses/47/chapters/186/items/546"
          }
        ]
      },
      {
        "chapter_id": 187,
        "title": "Chapter 4: Advanced Topics in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 547,
            "title": "Workshop: Tools & Techniques",
            "content": "Content for workshop: tools & techniques in Chapter 4: Advanced Topics in Methods.",
            "item_order": 1,
            "url": "https://study.skillup.io/courses/47/chapters/187/items/547"
          },
          {
            "item_id": 548,
            "title": "Quiz: Real-World Examples",
            "content": "Content for quiz: real-world examples in Chapter 4: Advanced Topics in Methods.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/47/chapters/187/items/548"
          },
          {
            "item_id": 549,
            "title": "Discussion: Hands-On Practice",
            "content": "Content for discussion: hands-on practice in Chapter 4: Advanced Topics in Methods.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/47/chapters/187/items/549"
          }
        ]
      }
    ]
  },
  {
    "_id": 48,
    "title": "Advanced Professional Communication for Corporate Excellence",
    "description": "Master essential communication strategies to enhance leadership presence, influence stakeholder decisions, and build stronger working relationships. Learners will develop practical skills in executive-level presentations, cross-functional collaboration, and strategic messaging techniques applicable to modern workplace scenarios.",
    "proficiency": "Intermediate",
    "learning_hours": 19,
    "fee": 282,
    "created_at": "2024-12-12 01:12:22",
    "last_updated": "2024-12-19 13:19:12",
    "organization": {
      "org_id": 5,
      "name": "Google Career Certificates",
      "website": "https://grow.google/certificates",
      "email": "demo0548@example.invalid",
      "phone": null,
      "description": "Google's professional certificate programs designed to prepare learners for high-growth careers in technology fields.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 470,
    "instructors": [
      {
        "instructor_id": 162,
        "user_id": 162,
        "role": "Lab Instructor",
        "assigned_at": "2024-12-10 02:44:24"
      },
      {
        "instructor_id": 441,
        "user_id": 441,
        "role": "Lab Instructor",
        "assigned_at": "2024-11-23 15:18:48"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      },
      {
        "language_id": 5,
        "name": "Arabic"
      },
      {
        "language_id": 4,
        "name": "French"
      }
    ],
    "categories": [
      {
        "category_id": 2,
        "name": "Project Management"
      },
      {
        "category_id": 7,
        "name": "UX Design"
      },
      {
        "category_id": 8,
        "name": "Agile"
      }
    ],
    "skills": [
      {
        "skill_id": 30,
        "name": "Tableau"
      },
      {
        "skill_id": 45,
        "name": "Metrics & KPIs"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 188,
        "title": "Chapter 1: Fundamentals of Techniques",
        "description": "This chapter covers essential techniques for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 550,
            "title": "Reading: Best Practices",
            "content": "Content for reading: best practices in Chapter 1: Fundamentals of Techniques.",
            "item_order": 1,
            "url": "https://learn.skillup.io/courses/48/chapters/188/items/550"
          },
          {
            "item_id": 551,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 1: Fundamentals of Techniques.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/48/chapters/188/items/551"
          }
        ]
      },
      {
        "chapter_id": 189,
        "title": "Chapter 2: Core Concepts in Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 552,
            "title": "Exercise: Common Challenges",
            "content": "Content for exercise: common challenges in Chapter 2: Core Concepts in Strategies.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/48/chapters/189/items/552"
          },
          {
            "item_id": 553,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 2: Core Concepts in Strategies.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/48/chapters/189/items/553"
          },
          {
            "item_id": 554,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 2: Core Concepts in Strategies.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/48/chapters/189/items/554"
          },
          {
            "item_id": 555,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 2: Core Concepts in Strategies.",
            "item_order": 4,
            "url": "https://study.skillup.io/courses/48/chapters/189/items/555"
          }
        ]
      },
      {
        "chapter_id": 190,
        "title": "Chapter 3: Applied Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 556,
            "title": "Case Study: Tools & Techniques",
            "content": "Content for case study: tools & techniques in Chapter 3: Applied Methods.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/48/chapters/190/items/556"
          },
          {
            "item_id": 557,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 3: Applied Methods.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/48/chapters/190/items/557"
          },
          {
            "item_id": 558,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 3: Applied Methods.",
            "item_order": 3,
            "url": "https://study.skillup.io/courses/48/chapters/190/items/558"
          },
          {
            "item_id": 559,
            "title": "Discussion: Review & Assessment",
            "content": "Content for discussion: review & assessment in Chapter 3: Applied Methods.",
            "item_order": 4,
            "url": "https://edu.skillup.io/courses/48/chapters/190/items/559"
          }
        ]
      },
      {
        "chapter_id": 191,
        "title": "Chapter 4: Advanced Topics in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 4,
        "items": [
          {
            "item_id": 560,
            "title": "Workshop: Real-World Examples",
            "content": "Content for workshop: real-world examples in Chapter 4: Advanced Topics in Practices.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/48/chapters/191/items/560"
          },
          {
            "item_id": 561,
            "title": "Quiz: Hands-On Practice",
            "content": "Content for quiz: hands-on practice in Chapter 4: Advanced Topics in Practices.",
            "item_order": 2,
            "url": "https://edu.skillup.io/courses/48/chapters/191/items/561"
          },
          {
            "item_id": 562,
            "title": "Discussion: Review & Assessment",
            "content": "Content for discussion: review & assessment in Chapter 4: Advanced Topics in Practices.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/48/chapters/191/items/562"
          }
        ]
      }
    ]
  },
  {
    "_id": 49,
    "title": "Advanced UX Design: Strategy and Implementation",
    "description": "Learners will master advanced UX design principles, user research methodologies, and prototyping techniques to create compelling digital experiences. This course equips professionals with the skills to conduct user interviews, perform competitive analysis, and implement design systems in real-world corporate environments.",
    "proficiency": "Intermediate",
    "learning_hours": 16,
    "fee": 119,
    "created_at": "2025-01-13 19:05:13",
    "last_updated": "2025-01-19 04:01:48",
    "organization": {
      "org_id": 4,
      "name": "Accenture Academy",
      "website": "https://academy.accenture.com",
      "email": "demo0549@example.invalid",
      "phone": null,
      "description": "Accenture's learning platform focused on digital transformation, consulting methodologies, and enterprise technology skills.",
      "type": "Corporate Training"
    },
    "primary_instructor_id": 470,
    "instructors": [
      {
        "instructor_id": 479,
        "user_id": 479,
        "role": "Guest Lecturer",
        "assigned_at": "2025-01-02 23:59:41"
      }
    ],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 7,
        "name": "UX Design"
      }
    ],
    "skills": [
      {
        "skill_id": 3,
        "name": "Decision Making"
      },
      {
        "skill_id": 13,
        "name": "Scheduling"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 192,
        "title": "Chapter 1: Fundamentals of Strategies",
        "description": "This chapter covers essential strategies for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 563,
            "title": "Reading: Common Challenges",
            "content": "Content for reading: common challenges in Chapter 1: Fundamentals of Strategies.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/49/chapters/192/items/563"
          },
          {
            "item_id": 564,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 1: Fundamentals of Strategies.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/49/chapters/192/items/564"
          }
        ]
      },
      {
        "chapter_id": 193,
        "title": "Chapter 2: Core Concepts in Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 565,
            "title": "Exercise: Tools & Techniques",
            "content": "Content for exercise: tools & techniques in Chapter 2: Core Concepts in Methods.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/49/chapters/193/items/565"
          },
          {
            "item_id": 566,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 2: Core Concepts in Methods.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/49/chapters/193/items/566"
          }
        ]
      },
      {
        "chapter_id": 194,
        "title": "Chapter 3: Applied Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 567,
            "title": "Case Study: Real-World Examples",
            "content": "Content for case study: real-world examples in Chapter 3: Applied Practices.",
            "item_order": 1,
            "url": "https://course.skillup.io/courses/49/chapters/194/items/567"
          },
          {
            "item_id": 568,
            "title": "Workshop: Hands-On Practice",
            "content": "Content for workshop: hands-on practice in Chapter 3: Applied Practices.",
            "item_order": 2,
            "url": "https://course.skillup.io/courses/49/chapters/194/items/568"
          }
        ]
      }
    ]
  },
  {
    "_id": 50,
    "title": "Advanced UX Design Principles and Digital Strategy",
    "description": "Master modern UX design methodologies including user research, interaction design, and usability testing to create engaging digital experiences. This intermediate course equips designers with proven frameworks and practical tools to solve complex design problems and lead design initiatives within enterprise environments. Learners will develop expertise in accessibility standards, design systems, and cross-functional collaboration to deliver measurable business impact.",
    "proficiency": "Intermediate",
    "learning_hours": 15,
    "fee": 198,
    "created_at": "2025-01-24 20:27:32",
    "last_updated": "2025-01-21 18:23:48",
    "organization": {
      "org_id": 11,
      "name": "Pluralsight",
      "website": "https://www.pluralsight.com",
      "email": "demo0550@example.invalid",
      "phone": null,
      "description": "Technology workforce development platform with expert-authored courses in software development, IT, and creative skills.",
      "type": "EdTech Company"
    },
    "primary_instructor_id": 271,
    "instructors": [],
    "languages": [
      {
        "language_id": 1,
        "name": "English"
      }
    ],
    "categories": [
      {
        "category_id": 3,
        "name": "Communication"
      },
      {
        "category_id": 6,
        "name": "Product Management"
      }
    ],
    "skills": [
      {
        "skill_id": 51,
        "name": "Prototyping"
      },
      {
        "skill_id": 52,
        "name": "Usability Testing"
      },
      {
        "skill_id": 50,
        "name": "Wireframing"
      },
      {
        "skill_id": 43,
        "name": "User Research"
      }
    ],
    "syllabus": [
      {
        "chapter_id": 195,
        "title": "Chapter 1: Fundamentals of Methods",
        "description": "This chapter covers essential methods for the course.",
        "chapter_order": 1,
        "items": [
          {
            "item_id": 569,
            "title": "Reading: Tools & Techniques",
            "content": "Content for reading: tools & techniques in Chapter 1: Fundamentals of Methods.",
            "item_order": 1,
            "url": "https://training.skillup.io/courses/50/chapters/195/items/569"
          },
          {
            "item_id": 570,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 1: Fundamentals of Methods.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/50/chapters/195/items/570"
          },
          {
            "item_id": 571,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 1: Fundamentals of Methods.",
            "item_order": 3,
            "url": "https://training.skillup.io/courses/50/chapters/195/items/571"
          }
        ]
      },
      {
        "chapter_id": 196,
        "title": "Chapter 2: Core Concepts in Practices",
        "description": "This chapter covers essential practices for the course.",
        "chapter_order": 2,
        "items": [
          {
            "item_id": 572,
            "title": "Exercise: Real-World Examples",
            "content": "Content for exercise: real-world examples in Chapter 2: Core Concepts in Practices.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/50/chapters/196/items/572"
          },
          {
            "item_id": 573,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 2: Core Concepts in Practices.",
            "item_order": 2,
            "url": "https://training.skillup.io/courses/50/chapters/196/items/573"
          }
        ]
      },
      {
        "chapter_id": 197,
        "title": "Chapter 3: Applied Frameworks",
        "description": "This chapter covers essential frameworks for the course.",
        "chapter_order": 3,
        "items": [
          {
            "item_id": 574,
            "title": "Case Study: Hands-On Practice",
            "content": "Content for case study: hands-on practice in Chapter 3: Applied Frameworks.",
            "item_order": 1,
            "url": "https://edu.skillup.io/courses/50/chapters/197/items/574"
          },
          {
            "item_id": 575,
            "title": "Workshop: Review & Assessment",
            "content": "Content for workshop: review & assessment in Chapter 3: Applied Frameworks.",
            "item_order": 2,
            "url": "https://study.skillup.io/courses/50/chapters/197/items/575"
          },
          {
            "item_id": 576,
            "title": "Quiz: Overview",
            "content": "Content for quiz: overview in Chapter 3: Applied Frameworks.",
            "item_order": 3,
            "url": "https://course.skillup.io/courses/50/chapters/197/items/576"
          }
        ]
      }
    ]
  }
];

const reviewsData = [
  {
    "_id": 1,
    "course_id": 20,
    "user_id": 5,
    "instructor_id": 271,
    "course_rating": 3,
    "instructor_rating": 1.5,
    "message": "Well-paced and engaging.",
    "created_at": "2026-01-18 10:55:34"
  },
  {
    "_id": 2,
    "course_id": 13,
    "user_id": 18,
    "instructor_id": 138,
    "course_rating": 3.5,
    "instructor_rating": 4,
    "message": "A few technical issues but good content.",
    "created_at": "2025-07-27 12:36:44"
  },
  {
    "_id": 3,
    "course_id": 37,
    "user_id": 19,
    "instructor_id": 162,
    "course_rating": 3.5,
    "instructor_rating": 3.5,
    "message": "Met my expectations.",
    "created_at": "2025-12-12 05:10:38"
  },
  {
    "_id": 4,
    "course_id": 19,
    "user_id": 26,
    "instructor_id": 55,
    "course_rating": 2.5,
    "instructor_rating": 4,
    "message": "Solid course overall.",
    "created_at": "2025-04-05 18:59:46"
  },
  {
    "_id": 5,
    "course_id": 8,
    "user_id": 35,
    "instructor_id": 395,
    "course_rating": 2.5,
    "instructor_rating": 3,
    "message": "Helpful for my career development.",
    "created_at": "2024-08-19 21:02:18"
  },
  {
    "_id": 6,
    "course_id": 36,
    "user_id": 38,
    "instructor_id": 436,
    "course_rating": 4,
    "instructor_rating": 4.5,
    "message": "Very thorough coverage of the topic.",
    "created_at": "2025-07-06 12:34:23"
  },
  {
    "_id": 7,
    "course_id": 40,
    "user_id": 42,
    "instructor_id": 277,
    "course_rating": 3,
    "instructor_rating": 3,
    "message": "Met my expectations.",
    "created_at": "2025-05-01 02:02:49"
  },
  {
    "_id": 8,
    "course_id": 12,
    "user_id": 46,
    "instructor_id": 382,
    "course_rating": 3,
    "instructor_rating": 3,
    "message": "Met my expectations.",
    "created_at": "2025-04-09 08:12:13"
  },
  {
    "_id": 9,
    "course_id": 48,
    "user_id": 49,
    "instructor_id": 470,
    "course_rating": 4,
    "instructor_rating": 3.5,
    "message": "Exactly what I needed for my role.",
    "created_at": "2026-01-04 13:30:14"
  },
  {
    "_id": 10,
    "course_id": 23,
    "user_id": 49,
    "instructor_id": 470,
    "course_rating": 3,
    "instructor_rating": 4.5,
    "message": "Excellent practical exercises.",
    "created_at": "2026-02-04 14:27:49"
  },
  {
    "_id": 11,
    "course_id": 17,
    "user_id": 75,
    "instructor_id": 137,
    "course_rating": 4,
    "instructor_rating": 3,
    "message": "Would recommend to colleagues.",
    "created_at": "2026-01-10 22:47:26"
  },
  {
    "_id": 12,
    "course_id": 12,
    "user_id": 78,
    "instructor_id": 382,
    "course_rating": 4,
    "instructor_rating": 3,
    "message": "Helpful for my career development.",
    "created_at": "2025-03-13 22:36:53"
  },
  {
    "_id": 13,
    "course_id": 40,
    "user_id": 95,
    "instructor_id": 277,
    "course_rating": 2,
    "instructor_rating": 3.5,
    "message": "Good content but could use more examples.",
    "created_at": "2025-08-07 17:35:28"
  },
  {
    "_id": 14,
    "course_id": 35,
    "user_id": 97,
    "instructor_id": 6,
    "course_rating": 4,
    "instructor_rating": 4.5,
    "message": "A few technical issues but good content.",
    "created_at": "2024-10-30 15:32:44"
  },
  {
    "_id": 15,
    "course_id": 31,
    "user_id": 104,
    "instructor_id": 191,
    "course_rating": 4,
    "instructor_rating": 4.5,
    "message": "Excellent practical exercises.",
    "created_at": "2025-11-25 01:16:49"
  },
  {
    "_id": 16,
    "course_id": 7,
    "user_id": 105,
    "instructor_id": 448,
    "course_rating": 3.5,
    "instructor_rating": 2.5,
    "message": "Great course, learned a lot!",
    "created_at": "2024-06-10 06:10:32"
  },
  {
    "_id": 17,
    "course_id": 27,
    "user_id": 108,
    "instructor_id": 500,
    "course_rating": 2,
    "instructor_rating": 3.5,
    "message": "Some sections were a bit slow.",
    "created_at": "2026-02-02 04:55:29"
  },
  {
    "_id": 18,
    "course_id": 27,
    "user_id": 109,
    "instructor_id": 500,
    "course_rating": 4,
    "instructor_rating": 4.5,
    "message": "Very informative and well-structured.",
    "created_at": "2025-02-09 07:59:41"
  },
  {
    "_id": 19,
    "course_id": 26,
    "user_id": 114,
    "instructor_id": 63,
    "course_rating": 3.5,
    "instructor_rating": 2.5,
    "message": "Some sections were a bit slow.",
    "created_at": "2025-04-30 09:16:33"
  },
  {
    "_id": 20,
    "course_id": 42,
    "user_id": 120,
    "instructor_id": 441,
    "course_rating": 3.5,
    "instructor_rating": 3,
    "message": "Some sections were a bit slow.",
    "created_at": "2025-09-09 23:02:40"
  },
  {
    "_id": 21,
    "course_id": 9,
    "user_id": 125,
    "instructor_id": 419,
    "course_rating": 4.5,
    "instructor_rating": 2.5,
    "message": "Very thorough coverage of the topic.",
    "created_at": "2024-03-08 19:53:21"
  },
  {
    "_id": 22,
    "course_id": 50,
    "user_id": 132,
    "instructor_id": 271,
    "course_rating": 4,
    "instructor_rating": 3.5,
    "message": "Some sections were a bit slow.",
    "created_at": "2026-01-16 16:45:30"
  },
  {
    "_id": 23,
    "course_id": 36,
    "user_id": 134,
    "instructor_id": 436,
    "course_rating": 4.5,
    "instructor_rating": 4,
    "message": "Very thorough coverage of the topic.",
    "created_at": "2025-12-15 09:19:08"
  },
  {
    "_id": 24,
    "course_id": 32,
    "user_id": 140,
    "instructor_id": 448,
    "course_rating": 3,
    "instructor_rating": 3,
    "message": "Could be more challenging.",
    "created_at": "2025-07-21 07:47:29"
  },
  {
    "_id": 25,
    "course_id": 35,
    "user_id": 147,
    "instructor_id": 6,
    "course_rating": 4,
    "instructor_rating": 4,
    "message": "Well-paced and engaging.",
    "created_at": "2025-12-13 03:50:34"
  },
  {
    "_id": 26,
    "course_id": 21,
    "user_id": 156,
    "instructor_id": 6,
    "course_rating": 4.5,
    "instructor_rating": 4,
    "message": "Solid course overall.",
    "created_at": "2025-07-02 16:52:47"
  },
  {
    "_id": 27,
    "course_id": 41,
    "user_id": 183,
    "instructor_id": 470,
    "course_rating": 4,
    "instructor_rating": 3.5,
    "message": "A few technical issues but good content.",
    "created_at": "2025-05-26 15:44:08"
  },
  {
    "_id": 28,
    "course_id": 41,
    "user_id": 185,
    "instructor_id": 470,
    "course_rating": 4.5,
    "instructor_rating": 4,
    "message": "A few technical issues but good content.",
    "created_at": "2025-10-18 00:54:30"
  },
  {
    "_id": 29,
    "course_id": 34,
    "user_id": 188,
    "instructor_id": 162,
    "course_rating": 4,
    "instructor_rating": 3.5,
    "message": "Could be more challenging.",
    "created_at": "2025-03-14 07:58:55"
  },
  {
    "_id": 30,
    "course_id": 28,
    "user_id": 192,
    "instructor_id": 340,
    "course_rating": 2.5,
    "instructor_rating": 3,
    "message": "Met my expectations.",
    "created_at": "2025-10-25 08:11:13"
  },
  {
    "_id": 31,
    "course_id": 49,
    "user_id": 201,
    "instructor_id": 470,
    "course_rating": 3,
    "instructor_rating": 3,
    "message": "Would recommend to colleagues.",
    "created_at": "2025-05-26 02:15:56"
  },
  {
    "_id": 32,
    "course_id": 43,
    "user_id": 208,
    "instructor_id": 277,
    "course_rating": 4,
    "instructor_rating": 4.5,
    "message": "Could be more challenging.",
    "created_at": "2025-12-18 19:30:28"
  },
  {
    "_id": 33,
    "course_id": 30,
    "user_id": 219,
    "instructor_id": 137,
    "course_rating": 5,
    "instructor_rating": 4,
    "message": "Excellent practical exercises.",
    "created_at": "2026-01-27 20:22:51"
  },
  {
    "_id": 34,
    "course_id": 45,
    "user_id": 220,
    "instructor_id": 479,
    "course_rating": 1.5,
    "instructor_rating": 3.5,
    "message": "Solid course overall.",
    "created_at": "2025-09-01 20:57:05"
  },
  {
    "_id": 35,
    "course_id": 42,
    "user_id": 223,
    "instructor_id": 441,
    "course_rating": 2.5,
    "instructor_rating": 3,
    "message": "Solid course overall.",
    "created_at": "2025-05-13 01:45:17"
  },
  {
    "_id": 36,
    "course_id": 14,
    "user_id": 226,
    "instructor_id": 181,
    "course_rating": 3,
    "instructor_rating": 3,
    "message": "Could be more challenging.",
    "created_at": "2026-01-23 16:21:59"
  },
  {
    "_id": 37,
    "course_id": 13,
    "user_id": 230,
    "instructor_id": 138,
    "course_rating": 3.5,
    "instructor_rating": 3.5,
    "message": "Helpful for my career development.",
    "created_at": "2024-08-06 17:03:58"
  },
  {
    "_id": 38,
    "course_id": 8,
    "user_id": 233,
    "instructor_id": 395,
    "course_rating": 4.5,
    "instructor_rating": 3.5,
    "message": "Great course, learned a lot!",
    "created_at": "2025-04-20 02:10:25"
  },
  {
    "_id": 39,
    "course_id": 44,
    "user_id": 251,
    "instructor_id": 448,
    "course_rating": 3,
    "instructor_rating": 3,
    "message": "Could be more challenging.",
    "created_at": "2025-06-18 09:33:47"
  },
  {
    "_id": 40,
    "course_id": 38,
    "user_id": 255,
    "instructor_id": 441,
    "course_rating": 5,
    "instructor_rating": 4,
    "message": "Excellent practical exercises.",
    "created_at": "2026-01-11 01:45:01"
  },
  {
    "_id": 41,
    "course_id": 42,
    "user_id": 256,
    "instructor_id": 441,
    "course_rating": 3.5,
    "instructor_rating": 3,
    "message": "A few technical issues but good content.",
    "created_at": "2025-03-26 17:36:50"
  },
  {
    "_id": 42,
    "course_id": 18,
    "user_id": 266,
    "instructor_id": 317,
    "course_rating": 2.5,
    "instructor_rating": 4,
    "message": "The instructor was knowledgeable.",
    "created_at": "2025-09-22 23:35:22"
  },
  {
    "_id": 43,
    "course_id": 40,
    "user_id": 270,
    "instructor_id": 277,
    "course_rating": 3.5,
    "instructor_rating": 3,
    "message": "Some sections were a bit slow.",
    "created_at": "2025-09-15 12:02:28"
  },
  {
    "_id": 44,
    "course_id": 32,
    "user_id": 279,
    "instructor_id": 448,
    "course_rating": 5,
    "instructor_rating": 4,
    "message": "Solid course overall.",
    "created_at": "2025-01-26 06:50:47"
  },
  {
    "_id": 45,
    "course_id": 11,
    "user_id": 285,
    "instructor_id": 137,
    "course_rating": 2.5,
    "instructor_rating": 3.5,
    "message": "The instructor was knowledgeable.",
    "created_at": "2025-12-08 05:16:22"
  },
  {
    "_id": 46,
    "course_id": 7,
    "user_id": 292,
    "instructor_id": 448,
    "course_rating": 3.5,
    "instructor_rating": 4.5,
    "message": "Exactly what I needed for my role.",
    "created_at": "2025-08-09 22:03:50"
  },
  {
    "_id": 47,
    "course_id": 42,
    "user_id": 296,
    "instructor_id": 441,
    "course_rating": 2,
    "instructor_rating": 3,
    "message": "Exactly what I needed for my role.",
    "created_at": "2026-01-21 15:41:43"
  },
  {
    "_id": 48,
    "course_id": 22,
    "user_id": 310,
    "instructor_id": 63,
    "course_rating": 4,
    "instructor_rating": 3,
    "message": "Met my expectations.",
    "created_at": "2025-12-24 08:38:52"
  },
  {
    "_id": 49,
    "course_id": 35,
    "user_id": 315,
    "instructor_id": 6,
    "course_rating": 2.5,
    "instructor_rating": 4,
    "message": "Solid course overall.",
    "created_at": "2025-04-23 13:25:11"
  },
  {
    "_id": 50,
    "course_id": 14,
    "user_id": 323,
    "instructor_id": 181,
    "course_rating": 3.5,
    "instructor_rating": 3,
    "message": "The instructor was knowledgeable.",
    "created_at": "2025-10-24 16:26:01"
  },
  {
    "_id": 51,
    "course_id": 36,
    "user_id": 329,
    "instructor_id": 436,
    "course_rating": 3,
    "instructor_rating": 5,
    "message": "Great course, learned a lot!",
    "created_at": "2025-07-30 12:07:29"
  },
  {
    "_id": 52,
    "course_id": 49,
    "user_id": 334,
    "instructor_id": 470,
    "course_rating": 1.5,
    "instructor_rating": 4.5,
    "message": "Helpful for my career development.",
    "created_at": "2025-05-08 01:05:38"
  },
  {
    "_id": 53,
    "course_id": 17,
    "user_id": 335,
    "instructor_id": 137,
    "course_rating": 3,
    "instructor_rating": 3.5,
    "message": "Good content but could use more examples.",
    "created_at": "2025-03-03 20:45:23"
  },
  {
    "_id": 54,
    "course_id": 39,
    "user_id": 351,
    "instructor_id": 448,
    "course_rating": 3,
    "instructor_rating": 5,
    "message": "Would recommend to colleagues.",
    "created_at": "2026-01-04 00:39:20"
  },
  {
    "_id": 55,
    "course_id": 24,
    "user_id": 360,
    "instructor_id": 271,
    "course_rating": 4.5,
    "instructor_rating": 3.5,
    "message": "Great course, learned a lot!",
    "created_at": "2026-01-24 16:34:45"
  },
  {
    "_id": 56,
    "course_id": 12,
    "user_id": 374,
    "instructor_id": 382,
    "course_rating": 3.5,
    "instructor_rating": 3,
    "message": "Met my expectations.",
    "created_at": "2025-08-15 00:41:19"
  },
  {
    "_id": 57,
    "course_id": 8,
    "user_id": 380,
    "instructor_id": 395,
    "course_rating": 4,
    "instructor_rating": 3.5,
    "message": "Well-paced and engaging.",
    "created_at": "2026-01-12 02:33:11"
  },
  {
    "_id": 58,
    "course_id": 46,
    "user_id": 380,
    "instructor_id": 470,
    "course_rating": 4,
    "instructor_rating": 4,
    "message": "Solid course overall.",
    "created_at": "2025-05-31 09:52:42"
  },
  {
    "_id": 59,
    "course_id": 3,
    "user_id": 383,
    "instructor_id": 470,
    "course_rating": 4,
    "instructor_rating": 3,
    "message": "Could be more challenging.",
    "created_at": "2024-12-25 06:02:25"
  },
  {
    "_id": 60,
    "course_id": 6,
    "user_id": 386,
    "instructor_id": 45,
    "course_rating": 3.5,
    "instructor_rating": 2.5,
    "message": "Great course, learned a lot!",
    "created_at": "2024-12-02 06:23:44"
  },
  {
    "_id": 61,
    "course_id": 28,
    "user_id": 392,
    "instructor_id": 340,
    "course_rating": 3,
    "instructor_rating": 3,
    "message": "Could be more challenging.",
    "created_at": "2024-12-12 13:05:43"
  },
  {
    "_id": 62,
    "course_id": 27,
    "user_id": 399,
    "instructor_id": 500,
    "course_rating": 4.5,
    "instructor_rating": 4,
    "message": "Solid course overall.",
    "created_at": "2025-02-06 04:39:33"
  },
  {
    "_id": 63,
    "course_id": 8,
    "user_id": 402,
    "instructor_id": 395,
    "course_rating": 4,
    "instructor_rating": 4,
    "message": "Solid course overall.",
    "created_at": "2025-11-14 23:34:01"
  },
  {
    "_id": 64,
    "course_id": 20,
    "user_id": 402,
    "instructor_id": 271,
    "course_rating": 3,
    "instructor_rating": 3,
    "message": "A few technical issues but good content.",
    "created_at": "2025-05-28 07:54:41"
  },
  {
    "_id": 65,
    "course_id": 46,
    "user_id": 405,
    "instructor_id": 470,
    "course_rating": 4,
    "instructor_rating": 4,
    "message": "A few technical issues but good content.",
    "created_at": "2026-01-07 12:58:48"
  },
  {
    "_id": 66,
    "course_id": 41,
    "user_id": 416,
    "instructor_id": 470,
    "course_rating": 4,
    "instructor_rating": 3,
    "message": "Great course, learned a lot!",
    "created_at": "2025-12-17 22:52:36"
  },
  {
    "_id": 67,
    "course_id": 46,
    "user_id": 421,
    "instructor_id": 470,
    "course_rating": 2.5,
    "instructor_rating": 3.5,
    "message": "Very thorough coverage of the topic.",
    "created_at": "2026-02-01 01:43:54"
  },
  {
    "_id": 68,
    "course_id": 23,
    "user_id": 422,
    "instructor_id": 470,
    "course_rating": 3.5,
    "instructor_rating": 4.5,
    "message": "Some sections were a bit slow.",
    "created_at": "2024-07-08 12:52:01"
  },
  {
    "_id": 69,
    "course_id": 32,
    "user_id": 425,
    "instructor_id": 448,
    "course_rating": 3,
    "instructor_rating": 2.5,
    "message": "Solid course overall.",
    "created_at": "2025-11-17 02:12:22"
  },
  {
    "_id": 70,
    "course_id": 28,
    "user_id": 432,
    "instructor_id": 340,
    "course_rating": 3.5,
    "instructor_rating": 3,
    "message": "Very informative and well-structured.",
    "created_at": "2025-02-20 13:56:21"
  },
  {
    "_id": 71,
    "course_id": 40,
    "user_id": 444,
    "instructor_id": 277,
    "course_rating": 3,
    "instructor_rating": 4,
    "message": "Excellent practical exercises.",
    "created_at": "2025-09-19 08:48:35"
  },
  {
    "_id": 72,
    "course_id": 45,
    "user_id": 452,
    "instructor_id": 479,
    "course_rating": 2,
    "instructor_rating": 3.5,
    "message": "The instructor was knowledgeable.",
    "created_at": "2025-12-03 03:52:31"
  },
  {
    "_id": 73,
    "course_id": 33,
    "user_id": 464,
    "instructor_id": 138,
    "course_rating": 2,
    "instructor_rating": 2,
    "message": "Met my expectations.",
    "created_at": "2026-02-02 09:42:16"
  },
  {
    "_id": 74,
    "course_id": 32,
    "user_id": 471,
    "instructor_id": 448,
    "course_rating": 3.5,
    "instructor_rating": 5,
    "message": "Helpful for my career development.",
    "created_at": "2026-01-28 03:58:47"
  },
  {
    "_id": 75,
    "course_id": 23,
    "user_id": 478,
    "instructor_id": 470,
    "course_rating": 5,
    "instructor_rating": 4,
    "message": "Helpful for my career development.",
    "created_at": "2026-01-15 19:55:21"
  },
  {
    "_id": 76,
    "course_id": 9,
    "user_id": 480,
    "instructor_id": 419,
    "course_rating": 2.5,
    "instructor_rating": 3.5,
    "message": "Would recommend to colleagues.",
    "created_at": "2025-10-10 16:43:10"
  },
  {
    "_id": 77,
    "course_id": 23,
    "user_id": 492,
    "instructor_id": 470,
    "course_rating": 4,
    "instructor_rating": 5,
    "message": "Very thorough coverage of the topic.",
    "created_at": "2026-01-23 15:16:13"
  },
  {
    "_id": 78,
    "course_id": 17,
    "user_id": 495,
    "instructor_id": 137,
    "course_rating": 4,
    "instructor_rating": 3.5,
    "message": "Well-paced and engaging.",
    "created_at": "2025-12-31 03:16:02"
  },
  {
    "_id": 79,
    "course_id": 6,
    "user_id": 498,
    "instructor_id": 45,
    "course_rating": 3,
    "instructor_rating": 3,
    "message": "A few technical issues but good content.",
    "created_at": "2025-08-26 08:17:12"
  }
];

// Insert mock data
print(`Inserting ${usersData.length} documents into 'users'...`);
db.users.insertMany(usersData);

print(`Inserting ${coursesData.length} documents into 'courses'...`);
db.courses.insertMany(coursesData);

print(`Inserting ${reviewsData.length} documents into 'reviews'...`);
db.reviews.insertMany(reviewsData);

print("--------------------------------------------------");
print("Mock data creation and insertion completed successfully!");
print("--------------------------------------------------");
