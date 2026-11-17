-- Individual SQL query contribution from the SkillUp database coursework.
-- Update @course_id and @enrollment_id to valid records before running the DML statements.
SET @course_id = 1;
SET @enrollment_id = 1;


/* ------------------------------------------------------------
Organization updates syllabus chapter title (U | OTP)
------------------------------------------------------------ */
INSERT INTO syllabus_chapters (course_id, title, chapter_order)
VALUES (@course_id, 'Neural Networks', 1);

UPDATE syllabus_chapters
SET title = 'Advanced Neural Networks'
WHERE course_id = @course_id
  AND title = 'Neural Networks';
/* ------------------------------------------------------------
Learner drops course (U | OTP)
------------------------------------------------------------ */
UPDATE enrollments
SET status = 'Dropped'
WHERE enrollment_id = @enrollment_id;
/* ------------------------------------------------------------
Remove inactive course (D | OTP)
------------------------------------------------------------ */
DELETE FROM courses
WHERE created_at < '2020-01-01'
AND course_id NOT IN (SELECT DISTINCT course_id FROM enrollments);
/* ------------------------------------------------------------
Popular courses (>100 enrollments) (JOIN/GROUP | PA)
------------------------------------------------------------ */
SELECT c.title, COUNT(e.enrollment_id) AS cnt
FROM courses c
JOIN enrollments e ON e.course_id = c.course_id
GROUP BY c.course_id
HAVING cnt > 100;
/* ------------------------------------------------------------
Courses in Thai language (JOIN | BP)
------------------------------------------------------------ */
SELECT c.title
FROM courses c
JOIN course_languages cl ON cl.course_id = c.course_id
JOIN languages l ON l.language_id = cl.language_id
WHERE l.name = 'Thai';
/* ------------------------------------------------------------
Certificates issued last month (BR | BP)
------------------------------------------------------------ */
SELECT *
FROM certificates
WHERE issued_at >= DATE_SUB(NOW(), INTERVAL 1 MONTH);
/* ------------------------------------------------------------
Month with highest registrations (GROUP | BT)
------------------------------------------------------------ */
SELECT DATE_FORMAT(account_created, '%Y-%m') AS month,
       COUNT(*) AS total
FROM users
GROUP BY month
ORDER BY total DESC
LIMIT 1;
/* ------------------------------------------------------------
Churn analysis – Data Science never completed (JOIN | CA)
------------------------------------------------------------ */
SELECT DISTINCT e.learner_id
FROM enrollments e
JOIN course_categories cc ON cc.course_id = e.course_id
WHERE cc.category_id = 1
AND e.learner_id NOT IN (
  SELECT e2.learner_id
  FROM enrollments e2
  JOIN course_categories cc2 ON cc2.course_id = e2.course_id
  WHERE cc2.category_id = 1
    AND e2.status = 'Completed'
);
/* ------------------------------------------------------------
Top rated instructors (only those who teach something)
------------------------------------------------------------ */
SELECT
  i.instructor_id,
  CONCAT(u.first_name, ' ', u.last_name) AS instructor_name,
  ( SELECT COUNT(DISTINCT course_id)
    FROM course_instructors ci
    WHERE ci.instructor_id = i.instructor_id
  ) AS courses_taught,
  ( SELECT COUNT(DISTINCT e.enrollment_id)
    FROM course_instructors ci
    JOIN enrollments e ON e.course_id = ci.course_id
    WHERE ci.instructor_id = i.instructor_id
  ) AS student_enrollments,
  ( SELECT ROUND(AVG(r.instructor_rating), 2)
    FROM reviews r
    WHERE r.instructor_id = i.instructor_id
  ) AS avg_instructor_rating,
  ( SELECT COUNT(*)
    FROM reviews r
    WHERE r.instructor_id = i.instructor_id
  ) AS review_count
FROM instructors i
JOIN users u ON u.user_id = i.instructor_id
WHERE EXISTS (
  SELECT 1
  FROM courses c
  WHERE c.primary_instructor_id = i.instructor_id
)
   OR EXISTS (
  SELECT 1
  FROM course_instructors ci
  WHERE ci.instructor_id = i.instructor_id
)
ORDER BY avg_instructor_rating DESC, review_count DESC
LIMIT 20;
/* =============================================================
Top 10 courses by average rating (min 3 reviews)
------------------------------------------------------------ */
SELECT
  c.course_id,
  c.title,
  ROUND(AVG(r.course_rating), 2) AS avg_rating,
  COUNT(r.review_id)             AS review_count
FROM courses c
JOIN enrollments e ON e.course_id = c.course_id
JOIN reviews r     ON r.enrollment_id = e.enrollment_id
WHERE r.course_rating IS NOT NULL
GROUP BY c.course_id, c.title
HAVING COUNT(r.review_id) >= 3
ORDER BY avg_rating DESC, review_count DESC
LIMIT 10;
