/*
  SkillUp - Neo4j Mini Project III
  Individual Cypher query contribution: Scenarios 31-40

  Attribution: Jarin Tasnim Rodoshi (Member 4, as recorded in the
  team's contribution form).

  Prerequisite:
    1. Run ../seed/skillup_graph_demo.cypher in a fresh, disposable Neo4j database.
    2. Run the registration-date setup block under Scenario 37 before its query.
    3. Execute scenarios individually. Do not run the entire file as one batch:
       Scenario 33 deletes Course nodes; Scenarios 31 and 32 modify graph data.

  Dataset adaptations recorded in the original project:
    - Scenario 34 uses >1 instead of >100 because the demo graph has a small
      number of enrolments.
    - Scenario 35 uses English as the sample language in the supplied graph.
    - Scenario 40 uses at least one review because the demo graph is small.

  Technical alignment applied for this repository copy:
    - Status values use the lowercase convention in the graph seed.
    - ISO date strings are converted to Neo4j DATE values before comparison.
    - Scenario 37 adds accountCreated timestamps to the seeded User nodes,
      using the matching mock registration dates from the relational seed.
    - Scenario 39 counts review nodes once, avoiding multiplication from
      matching an instructor's multiple courses.
*/

/* ------------------------------------------------------------
Scenario 31: Organization updates syllabus chapter title
------------------------------------------------------------ */
MATCH (c:Course {courseId: 16})-[:HAS_CHAPTER]->
      (ch:Chapter {title: 'Ch1: Fundamentals of Techniques'})
SET ch.title = 'Ch1: Advanced Neural Networks and Techniques';

/* ------------------------------------------------------------
Scenario 32: Learner drops course
------------------------------------------------------------ */
MATCH (u:User {userId: 1})-[:HAS_ENROLLMENT]->(e:Enrollment)-[:FOR_COURSE]->
      (c:Course {courseId: 21})
SET e.status = 'dropped';

/* ------------------------------------------------------------
Scenario 33: Remove inactive course
(not enrolled by anyone and created before 2024)
------------------------------------------------------------ */
MATCH (c:Course)
WHERE date(c.createdAt) < date('2024-01-01')
  AND NOT (c)<-[:FOR_COURSE]-(:Enrollment)
DETACH DELETE c;

/* ------------------------------------------------------------
Scenario 34: Popular courses
The assignment specifies >100 enrolments. The threshold is >1 here
because the supplied demonstration graph is much smaller.
------------------------------------------------------------ */
MATCH (c:Course)<-[:FOR_COURSE]-(e:Enrollment)
WITH c, count(e) AS enrolmentCount
WHERE enrolmentCount > 1
RETURN c.courseId, c.title, enrolmentCount
ORDER BY enrolmentCount DESC;

/* ------------------------------------------------------------
Scenario 35: Courses in English language
The sample graph uses English for the demonstration query.
------------------------------------------------------------ */
MATCH (c:Course)-[:IN_LANGUAGE]->(l:Language {name: 'English'})
RETURN c.title
ORDER BY c.title;

/* ------------------------------------------------------------
Scenario 36: Certificates issued within the last month
The seed stores issuedAt as an ISO date string.
------------------------------------------------------------ */
MATCH (cert:Certificate)
WITH cert, date(cert.issuedAt) AS issueDate
WHERE issueDate >= date() - duration('P1M')
  AND issueDate <= date()
RETURN cert.certificateId, issueDate AS issuedAt, cert.certificateCode
ORDER BY issuedAt DESC;

/* ------------------------------------------------------------
Scenario 37: Month with the highest number of registrations
The graph seed does not initially include accountCreated. This setup block
adds the corresponding synthetic timestamps for the seeded users.
Run this block once after loading the graph seed, before the query below.
------------------------------------------------------------ */
UNWIND [
  {userId: 1,   registeredAt: '2023-01-05T00:40:47'},
  {userId: 2,   registeredAt: '2023-01-18T13:32:13'},
  {userId: 3,   registeredAt: '2023-01-20T13:08:04'},
  {userId: 4,   registeredAt: '2023-01-19T09:08:02'},
  {userId: 5,   registeredAt: '2023-01-14T17:02:30'},
  {userId: 6,   registeredAt: '2023-01-20T12:08:20'},
  {userId: 7,   registeredAt: '2023-01-30T06:41:43'},
  {userId: 8,   registeredAt: '2023-01-30T12:00:26'},
  {userId: 9,   registeredAt: '2023-02-05T17:14:43'},
  {userId: 112, registeredAt: '2023-06-29T10:42:07'},
  {userId: 137, registeredAt: '2023-08-13T15:35:35'},
  {userId: 317, registeredAt: '2024-05-16T23:31:48'},
  {userId: 329, registeredAt: '2024-05-18T23:35:43'}
] AS registration
MATCH (u:User {userId: registration.userId})
SET u.accountCreated = datetime(registration.registeredAt);

/* Run this query after the setup block above. */
MATCH (u:User)
WHERE u.accountCreated IS NOT NULL
WITH date(u.accountCreated).year AS year,
     date(u.accountCreated).month AS month,
     count(u) AS registrations
RETURN year, month, registrations
ORDER BY registrations DESC, year, month
LIMIT 1;

/* ------------------------------------------------------------
Scenario 38: Churn analysis - Data Science never completed
Returns learners who enrolled in at least one Data Science course
but have no completed enrolment in that category.
------------------------------------------------------------ */
MATCH (u:User:Learner)-[:HAS_ENROLLMENT]->(e:Enrollment)-[:FOR_COURSE]->
      (c:Course)-[:IN_CATEGORY]->(:Category {name: 'Data Science'})
WITH u, collect(DISTINCT e.status) AS statuses
WHERE NOT 'completed' IN statuses
RETURN u.userId, u.firstName
ORDER BY u.userId;

/* ------------------------------------------------------------
Scenario 39: Top rated instructors who teach at least one course
------------------------------------------------------------ */
MATCH (i:User:Instructor)
OPTIONAL MATCH (i)-[:TEACHES]->(c:Course)
WITH i, count(DISTINCT c) AS coursesTaught
WHERE coursesTaught > 0
OPTIONAL MATCH (r:Review)-[:REVIEWS_INSTRUCTOR]->(i)
RETURN i.userId,
       i.firstName + ' ' + i.lastName AS instructorName,
       coursesTaught,
       round(avg(r.instructorRating), 2) AS averageRating,
       count(r) AS reviewCount
ORDER BY averageRating DESC, reviewCount DESC;

/* ------------------------------------------------------------
Scenario 40: Top 10 courses by average rating
The demo graph uses at least one review per course due to its small size.
------------------------------------------------------------ */
MATCH (r:Review)-[:REVIEWS_COURSE]->(c:Course)
WITH c, count(r) AS reviewCount, avg(r.courseRating) AS averageRating
WHERE reviewCount >= 1
RETURN c.courseId,
       c.title,
       round(averageRating, 2) AS averageRating,
       reviewCount
ORDER BY averageRating DESC, reviewCount DESC
LIMIT 10;
