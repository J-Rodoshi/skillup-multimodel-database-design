// Group coursework graph seed script. Mock contact details have been anonymized.
// This uses CREATE statements: run once in an empty disposable Neo4j database.

// ==========================================
// Mini Project 3: SkillUp Graph Database
// Master Mock Data Script (Neo4j/Cypher)
// ==========================================

// 1. Constraints (Run this first)
CREATE CONSTRAINT FOR (u:User)         REQUIRE u.userId         IS UNIQUE;
CREATE CONSTRAINT FOR (c:Course)       REQUIRE c.courseId       IS UNIQUE;
CREATE CONSTRAINT FOR (o:Organization) REQUIRE o.orgId          IS UNIQUE;
CREATE CONSTRAINT FOR (l:Language)     REQUIRE l.languageId     IS UNIQUE;
CREATE CONSTRAINT FOR (cat:Category)   REQUIRE cat.categoryId   IS UNIQUE;
CREATE CONSTRAINT FOR (s:Skill)        REQUIRE s.skillId        IS UNIQUE;
CREATE CONSTRAINT FOR (ch:Chapter)     REQUIRE ch.chapterId     IS UNIQUE;
CREATE CONSTRAINT FOR (e:Enrollment)   REQUIRE e.enrollmentId   IS UNIQUE;
CREATE CONSTRAINT FOR (cert:Certificate) REQUIRE cert.certificateId IS UNIQUE;
CREATE CONSTRAINT FOR (r:Review)       REQUIRE r.reviewId       IS UNIQUE;

// 2. Nodes: Shared Reference Data
// Languages
CREATE (:Language {languageId: 1, name: 'English'});
CREATE (:Language {languageId: 2, name: 'French'});
CREATE (:Language {languageId: 5, name: 'Arabic'});

// Categories
CREATE (:Category {categoryId: 1, name: 'Data Analysis'});
CREATE (:Category {categoryId: 2, name: 'Data Science'});
CREATE (:Category {categoryId: 3, name: 'Communication'});
CREATE (:Category {categoryId: 4, name: 'Project Management'});
CREATE (:Category {categoryId: 5, name: 'Software Engineering'});
CREATE (:Category {categoryId: 6, name: 'Product Management'});
CREATE (:Category {categoryId: 7, name: 'UX Design'});

// Skills
CREATE (:Skill {skillId: 1,  name: 'Python'});
CREATE (:Skill {skillId: 2,  name: 'SQL'});
CREATE (:Skill {skillId: 3,  name: 'Machine Learning'});
CREATE (:Skill {skillId: 4,  name: 'Data Visualization'});
CREATE (:Skill {skillId: 5,  name: 'User Research'});
CREATE (:Skill {skillId: 6,  name: 'Prototyping'});
CREATE (:Skill {skillId: 13, name: 'Scheduling'});
CREATE (:Skill {skillId: 14, name: 'Scope Management'});
CREATE (:Skill {skillId: 21, name: 'Negotiation'});
CREATE (:Skill {skillId: 22, name: 'Storytelling'});
CREATE (:Skill {skillId: 24, name: 'Feedback Delivery'});
CREATE (:Skill {skillId: 55, name: 'Design Systems'});

// Organizations
CREATE (:Organization {orgId: 1, name: 'Coursera', type: 'Online Platform', website: 'https://coursera.org'});
CREATE (:Organization {orgId: 2, name: 'MIT Sloan Executive Education', type: 'University', website: 'https://executive.mit.edu'});
CREATE (:Organization {orgId: 3, name: 'Google Learning', type: 'Corporate Training', website: 'https://learn.google.com'});
CREATE (:Organization {orgId: 4, name: 'Stanford Online', type: 'University', website: 'https://online.stanford.edu'});
CREATE (:Organization {orgId: 6, name: 'Microsoft Learn', type: 'Corporate Training', website: 'https://learn.microsoft.com'});

// 3. User Nodes
// Instructors
CREATE (:User:Instructor {userId: 4, firstName: 'Demo', lastName: 'User4', email: 'demo0001@example.invalid', country: 'United States', background: 'UX Designer', degree: 'Ph.D. in Computer Science', institution: 'UC Berkeley', startedDate: '2023-02-12'});
CREATE (:User:Instructor {userId: 6, firstName: 'Demo', lastName: 'User6', email: 'demo0002@example.invalid', country: 'United States', background: 'UX Designer', degree: 'M.S. in Information Systems', institution: 'Northwestern University', startedDate: '2023-02-16'});
CREATE (:User:Instructor {userId: 112, firstName: 'Demo', lastName: 'User112', email: 'demo0003@example.invalid', country: 'United States', background: 'Data Scientist', degree: 'Ph.D. in Statistics', institution: 'MIT', startedDate: '2023-01-10'});
CREATE (:User:Instructor {userId: 137, firstName: 'Demo', lastName: 'User137', email: 'demo0004@example.invalid', country: 'United Arab Emirates', background: 'Project Manager', degree: 'MBA', institution: 'INSEAD', startedDate: '2023-01-15'});
CREATE (:User:Instructor {userId: 317, firstName: 'Demo', lastName: 'User317', email: 'demo0005@example.invalid', country: 'India', background: 'Software Engineer', degree: 'M.Tech in CS', institution: 'IIT Delhi', startedDate: '2023-03-01'});

// Learners
CREATE (:User:Learner {userId: 1, firstName: 'Demo', lastName: 'User1', email: 'demo0006@example.invalid', country: 'United States', background: 'Software Engineer', dob: null, preferredSpeed: 'moderate'});
CREATE (:User:Learner {userId: 2, firstName: 'Demo', lastName: 'User2', email: 'demo0007@example.invalid', country: 'Australia', background: 'Software Engineer', dob: null, preferredSpeed: 'moderate'});
CREATE (:User:Learner {userId: 3, firstName: 'Demo', lastName: 'User3', email: 'demo0008@example.invalid', country: 'India', background: 'Sales Manager', dob: null, preferredSpeed: 'moderate'});
CREATE (:User:Learner {userId: 5, firstName: 'Demo', lastName: 'User5', email: 'demo0009@example.invalid', country: 'United Kingdom', background: 'Healthcare Administrator', dob: null, preferredSpeed: 'slow'});
CREATE (:User:Learner {userId: 7, firstName: 'Demo', lastName: 'User7', email: 'demo0010@example.invalid', country: 'Oman', background: 'Marketing Manager', dob: null, preferredSpeed: 'fast'});
CREATE (:User:Learner {userId: 8, firstName: 'Demo', lastName: 'User8', email: 'demo0011@example.invalid', country: 'Mexico', background: 'Product Manager', dob: null, preferredSpeed: 'moderate'});
CREATE (:User:Learner {userId: 9, firstName: 'Demo', lastName: 'User9', email: 'demo0012@example.invalid', country: 'Japan', background: 'Data Analyst', dob: null, preferredSpeed: 'fast'});
CREATE (:User:Learner {userId: 329, firstName: 'Demo', lastName: 'User329', email: 'demo0013@example.invalid', country: 'Russia', background: 'Business Analyst', dob: null, preferredSpeed: 'moderate'});

// 4. Course & Chapter Nodes
CREATE (:Course {courseId: 7, title: 'Python for Data Science: Zero to Hero', proficiency: 'Beginner', learningHours: 20, fee: 199, createdAt: '2023-08-01'});
CREATE (:Course {courseId: 16, title: 'Effective Communication Fundamentals', proficiency: 'Beginner', learningHours: 8, fee: 121, createdAt: '2023-10-19'});
CREATE (:Course {courseId: 17, title: 'Advanced Project Management', proficiency: 'Advanced', learningHours: 37, fee: 347, createdAt: '2023-11-06'});
CREATE (:Course {courseId: 20, title: 'UX Research Methods', proficiency: 'Intermediate', learningHours: 15, fee: 179, createdAt: '2023-06-12'});
CREATE (:Course {courseId: 21, title: 'SQL for Analytics', proficiency: 'Intermediate', learningHours: 12, fee: 149, createdAt: '2023-07-05'});
CREATE (:Course {courseId: 24, title: 'Data Storytelling and Visualization', proficiency: 'Intermediate', learningHours: 10, fee: 159, createdAt: '2023-05-20'});
CREATE (:Course {courseId: 36, title: 'Negotiation Mastery', proficiency: 'Intermediate', learningHours: 18, fee: 229, createdAt: '2023-09-14'});
CREATE (:Course {courseId: 44, title: 'Product Discovery', proficiency: 'Beginner', learningHours: 14, fee: 169, createdAt: '2023-04-08'});
CREATE (:Course {courseId: 50, title: 'Machine Learning Fundamentals', proficiency: 'Intermediate', learningHours: 30, fee: 299, createdAt: '2023-08-28'});
CREATE (:Course {courseId: 55, title: 'Agile Project Management and Scrum', proficiency: 'Beginner', learningHours: 16, fee: 189, createdAt: '2023-12-01'});
CREATE (:Course {courseId: 60, title: 'Design Systems: Building Scalable UI', proficiency: 'Advanced', learningHours: 22, fee: 259, createdAt: '2024-01-15'});
CREATE (:Course {courseId: 65, title: 'Business Communication in Arabic', proficiency: 'Intermediate', learningHours: 20, fee: 199, createdAt: '2024-02-01'});

// Chapters
CREATE (:Chapter {chapterId: 62, title: 'Ch1: Fundamentals of Techniques', chapterOrder: 1});
CREATE (:Chapter {chapterId: 63, title: 'Ch2: Core Concepts in Strategies', chapterOrder: 2});
CREATE (:Chapter {chapterId: 64, title: 'Ch3: Applied Methods', chapterOrder: 3});
CREATE (:Chapter {chapterId: 66, title: 'Ch1: Fundamentals of Strategies', chapterOrder: 1});
CREATE (:Chapter {chapterId: 67, title: 'Ch2: Core Concepts in Methods', chapterOrder: 2});
CREATE (:Chapter {chapterId: 68, title: 'Ch3: Applied Practices', chapterOrder: 3});
CREATE (:Chapter {chapterId: 135, title: 'Ch1: Negotiation Foundations', chapterOrder: 1});
CREATE (:Chapter {chapterId: 136, title: 'Ch2: Tactical Bargaining', chapterOrder: 2});
CREATE (:Chapter {chapterId: 139, title: 'Ch3: Complex Multi-Party Deals', chapterOrder: 3});
CREATE (:Chapter {chapterId: 190, title: 'Ch1: Python and Data Prep', chapterOrder: 1});
CREATE (:Chapter {chapterId: 193, title: 'Ch2: Supervised Learning', chapterOrder: 2});
CREATE (:Chapter {chapterId: 196, title: 'Ch3: Unsupervised and Ensembles', chapterOrder: 3});
CREATE (:Chapter {chapterId: 80, title: 'Ch2: Research Synthesis', chapterOrder: 2});

// 5. Transactional Nodes
// Enrollments
CREATE (:Enrollment {enrollmentId: 1,  status: 'completed', enrolledAt: '2026-01-27', lastAccessedAt: '2026-01-29'});
CREATE (:Enrollment {enrollmentId: 2,  status: 'active',    enrolledAt: '2025-04-22', lastAccessedAt: '2025-10-30'});
CREATE (:Enrollment {enrollmentId: 3,  status: 'active',    enrolledAt: '2025-01-28', lastAccessedAt: '2025-12-11'});
CREATE (:Enrollment {enrollmentId: 4,  status: 'active',    enrolledAt: '2025-12-17', lastAccessedAt: '2026-01-03'});
CREATE (:Enrollment {enrollmentId: 5,  status: 'completed', enrolledAt: '2024-02-20', lastAccessedAt: '2025-04-07'});
CREATE (:Enrollment {enrollmentId: 6,  status: 'dropped',   enrolledAt: '2025-08-31', lastAccessedAt: '2026-01-04'});
CREATE (:Enrollment {enrollmentId: 7,  status: 'completed', enrolledAt: '2025-09-20', lastAccessedAt: '2026-01-12'});
CREATE (:Enrollment {enrollmentId: 8,  status: 'active',    enrolledAt: '2025-11-01', lastAccessedAt: '2026-02-15'});
CREATE (:Enrollment {enrollmentId: 9,  status: 'completed', enrolledAt: '2025-03-10', lastAccessedAt: '2025-06-20'});
CREATE (:Enrollment {enrollmentId: 10, status: 'completed', enrolledAt: '2026-01-05', lastAccessedAt: '2026-03-01'});
CREATE (:Enrollment {enrollmentId: 11, status: 'active',    enrolledAt: '2025-10-15', lastAccessedAt: '2026-01-20'});
CREATE (:Enrollment {enrollmentId: 12, status: 'completed', enrolledAt: '2025-05-01', lastAccessedAt: '2025-08-30'});
CREATE (:Enrollment {enrollmentId: 13, status: 'completed', enrolledAt: '2025-06-01', lastAccessedAt: '2025-07-25'});

// Certificates
CREATE (:Certificate {certificateId: 1, issuedAt: '2026-05-07', certificateCode: 'CERT-9CIGNOTA', certificateUrl: 'https://skillup.io/certificates/CERT-9CIGNOTA'});
CREATE (:Certificate {certificateId: 2, issuedAt: '2024-03-23', certificateCode: 'CERT-NOIPJBOU', certificateUrl: 'https://skillup.io/certificates/CERT-NOIPJBOU'});
CREATE (:Certificate {certificateId: 3, issuedAt: '2025-11-24', certificateCode: 'CERT-M17KOPIH', certificateUrl: 'https://skillup.io/certificates/CERT-M17KOPIH'});
CREATE (:Certificate {certificateId: 4, issuedAt: '2025-08-15', certificateCode: 'CERT-PY2025XZ', certificateUrl: 'https://skillup.io/certificates/CERT-PY2025XZ'});
CREATE (:Certificate {certificateId: 5, issuedAt: '2026-02-01', certificateCode: 'CERT-AGILE001', certificateUrl: 'https://skillup.io/certificates/CERT-AGILE001'});

// Reviews
CREATE (:Review {reviewId: 51, courseRating: 3, instructorRating: 5, message: 'Great course, learned a lot!', createdAt: '2025-07-30'});
CREATE (:Review {reviewId: 52, courseRating: 5, instructorRating: 5, message: 'Excellent content and delivery!', createdAt: '2025-12-01'});
CREATE (:Review {reviewId: 53, courseRating: 4, instructorRating: 4, message: 'Very practical and well-structured.', createdAt: '2025-04-20'});
CREATE (:Review {reviewId: 54, courseRating: 5, instructorRating: 5, message: 'Changed how I think about presenting data.', createdAt: '2026-01-15'});

// 6. Relationships
// OFFERED_BY
MATCH (c:Course {courseId: 7}),  (o:Organization {orgId: 3}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 16}), (o:Organization {orgId: 2}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 17}), (o:Organization {orgId: 6}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 20}), (o:Organization {orgId: 1}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 21}), (o:Organization {orgId: 3}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 24}), (o:Organization {orgId: 4}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 36}), (o:Organization {orgId: 2}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 44}), (o:Organization {orgId: 1}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 50}), (o:Organization {orgId: 3}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 55}), (o:Organization {orgId: 6}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 60}), (o:Organization {orgId: 4}) CREATE (c)-[:OFFERED_BY]->(o);
MATCH (c:Course {courseId: 65}), (o:Organization {orgId: 2}) CREATE (c)-[:OFFERED_BY]->(o);

// IN_LANGUAGE
MATCH (l:Language {languageId: 1})
MATCH (c:Course) WHERE c.courseId IN [7,16,17,20,21,24,36,44,50,55,60]
CREATE (c)-[:IN_LANGUAGE]->(l);
MATCH (c:Course {courseId: 65}), (l:Language {languageId: 5}) CREATE (c)-[:IN_LANGUAGE]->(l);
MATCH (c:Course {courseId: 65}), (l:Language {languageId: 1}) CREATE (c)-[:IN_LANGUAGE]->(l);

// IN_CATEGORY
MATCH (c:Course {courseId: 7}),  (cat:Category {categoryId: 5}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 7}),  (cat:Category {categoryId: 1}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 16}), (cat:Category {categoryId: 3}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 16}), (cat:Category {categoryId: 6}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 17}), (cat:Category {categoryId: 4}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 17}), (cat:Category {categoryId: 5}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 20}), (cat:Category {categoryId: 7}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 21}), (cat:Category {categoryId: 1}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 24}), (cat:Category {categoryId: 1}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 36}), (cat:Category {categoryId: 3}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 44}), (cat:Category {categoryId: 6}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 44}), (cat:Category {categoryId: 7}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 50}), (cat:Category {categoryId: 1}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 50}), (cat:Category {categoryId: 2}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 55}), (cat:Category {categoryId: 4}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 60}), (cat:Category {categoryId: 7}) CREATE (c)-[:IN_CATEGORY]->(cat);
MATCH (c:Course {courseId: 65}), (cat:Category {categoryId: 3}) CREATE (c)-[:IN_CATEGORY]->(cat);

// TEACHES_SKILL
MATCH (c:Course {courseId: 7}),  (s:Skill {skillId: 1})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 7}),  (s:Skill {skillId: 4})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 16}), (s:Skill {skillId: 24}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 16}), (s:Skill {skillId: 21}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 16}), (s:Skill {skillId: 22}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 17}), (s:Skill {skillId: 13}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 17}), (s:Skill {skillId: 14}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 17}), (s:Skill {skillId: 22}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 20}), (s:Skill {skillId: 5})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 21}), (s:Skill {skillId: 2})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 24}), (s:Skill {skillId: 4})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 24}), (s:Skill {skillId: 22}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 36}), (s:Skill {skillId: 21}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 44}), (s:Skill {skillId: 5})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 44}), (s:Skill {skillId: 6})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 50}), (s:Skill {skillId: 1})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 50}), (s:Skill {skillId: 3})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 55}), (s:Skill {skillId: 13}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 60}), (s:Skill {skillId: 55}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 60}), (s:Skill {skillId: 6})  CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 65}), (s:Skill {skillId: 21}) CREATE (c)-[:TEACHES_SKILL]->(s);
MATCH (c:Course {courseId: 65}), (s:Skill {skillId: 22}) CREATE (c)-[:TEACHES_SKILL]->(s);

// HAS_CHAPTER
MATCH (c:Course {courseId: 16}), (ch:Chapter {chapterId: 62}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 16}), (ch:Chapter {chapterId: 63}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 16}), (ch:Chapter {chapterId: 64}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 17}), (ch:Chapter {chapterId: 66}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 17}), (ch:Chapter {chapterId: 67}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 17}), (ch:Chapter {chapterId: 68}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 36}), (ch:Chapter {chapterId: 135}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 36}), (ch:Chapter {chapterId: 136}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 36}), (ch:Chapter {chapterId: 139}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 50}), (ch:Chapter {chapterId: 190}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 50}), (ch:Chapter {chapterId: 193}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 50}), (ch:Chapter {chapterId: 196}) CREATE (c)-[:HAS_CHAPTER]->(ch);
MATCH (c:Course {courseId: 20}), (ch:Chapter {chapterId: 80})  CREATE (c)-[:HAS_CHAPTER]->(ch);

// TEACHES (Instructor to Course)
MATCH (u:User {userId: 112}), (c:Course {courseId: 16}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-10-01'}]->(c);
MATCH (u:User {userId: 137}), (c:Course {courseId: 17}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-10-20'}]->(c);
MATCH (u:User {userId: 317}), (c:Course {courseId: 17}) CREATE (u)-[:TEACHES {role: 'Guest Lecturer', assignedAt: '2023-11-03'}]->(c);
MATCH (u:User {userId: 4}),   (c:Course {courseId: 20}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-06-01'}]->(c);
MATCH (u:User {userId: 112}), (c:Course {courseId: 21}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-07-01'}]->(c);
MATCH (u:User {userId: 137}), (c:Course {courseId: 24}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-05-10'}]->(c);
MATCH (u:User {userId: 6}),   (c:Course {courseId: 36}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-09-01'}]->(c);
MATCH (u:User {userId: 4}),   (c:Course {courseId: 44}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-04-01'}]->(c);
MATCH (u:User {userId: 112}), (c:Course {courseId: 50}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-08-15'}]->(c);
MATCH (u:User {userId: 137}), (c:Course {courseId: 55}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-11-20'}]->(c);
MATCH (u:User {userId: 4}),   (c:Course {courseId: 60}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2024-01-10'}]->(c);
MATCH (u:User {userId: 6}),   (c:Course {courseId: 7})  CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2023-07-20'}]->(c);
MATCH (u:User {userId: 6}),   (c:Course {courseId: 65}) CREATE (u)-[:TEACHES {role: 'Primary Instructor', assignedAt: '2024-01-25'}]->(c);

// Enrollment & Checkpoint Links
MATCH (u:User {userId:1}),(e:Enrollment {enrollmentId:2}),(c:Course {courseId:21}),(ch:Chapter {chapterId:63}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c), (e)-[:AT_CHECKPOINT]->(ch);
MATCH (u:User {userId:1}),(e:Enrollment {enrollmentId:1}),(c:Course {courseId:36}),(ch:Chapter {chapterId:139}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c), (e)-[:AT_CHECKPOINT]->(ch);
MATCH (e:Enrollment {enrollmentId:1}),(cert:Certificate {certificateId:1}) CREATE (e)-[:AWARDED]->(cert);
MATCH (u:User {userId:2}),(e:Enrollment {enrollmentId:3}),(c:Course {courseId:50}),(ch:Chapter {chapterId:196}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c), (e)-[:AT_CHECKPOINT]->(ch);
MATCH (u:User {userId:2}),(e:Enrollment {enrollmentId:4}),(c:Course {courseId:7})  CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c);
MATCH (u:User {userId:3}),(e:Enrollment {enrollmentId:5}),(c:Course {courseId:24}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c);
MATCH (e:Enrollment {enrollmentId:5}),(cert:Certificate {certificateId:2}) CREATE (e)-[:AWARDED]->(cert);
MATCH (u:User {userId:5}),(e:Enrollment {enrollmentId:6}),(c:Course {courseId:44}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c);
MATCH (u:User {userId:5}),(e:Enrollment {enrollmentId:7}),(c:Course {courseId:20}),(ch:Chapter {chapterId:80}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c), (e)-[:AT_CHECKPOINT]->(ch);
MATCH (e:Enrollment {enrollmentId:7}),(cert:Certificate {certificateId:3}) CREATE (e)-[:AWARDED]->(cert);
MATCH (u:User {userId:7}),(e:Enrollment {enrollmentId:8}),(c:Course {courseId:65}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c);
MATCH (u:User {userId:7}),(e:Enrollment {enrollmentId:9}),(c:Course {courseId:36}),(ch:Chapter {chapterId:139}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c), (e)-[:AT_CHECKPOINT]->(ch);
MATCH (u:User {userId:8}),(e:Enrollment {enrollmentId:10}),(c:Course {courseId:55}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c);
MATCH (e:Enrollment {enrollmentId:10}),(cert:Certificate {certificateId:5}) CREATE (e)-[:AWARDED]->(cert);
MATCH (u:User {userId:8}),(e:Enrollment {enrollmentId:11}),(c:Course {courseId:44}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c);
MATCH (u:User {userId:9}),(e:Enrollment {enrollmentId:12}),(c:Course {courseId:21}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c);
MATCH (e:Enrollment {enrollmentId:12}),(cert:Certificate {certificateId:4}) CREATE (e)-[:AWARDED]->(cert);
MATCH (u:User {userId:329}),(e:Enrollment {enrollmentId:13}),(c:Course {courseId:36}),(ch:Chapter {chapterId:139}) CREATE (u)-[:HAS_ENROLLMENT]->(e)-[:FOR_COURSE]->(c), (e)-[:AT_CHECKPOINT]->(ch);

// WROTE_REVIEW
MATCH (u:User {userId:329}),(r:Review {reviewId:51}),(c:Course {courseId:36}),(i:User {userId:6})   CREATE (u)-[:WROTE_REVIEW]->(r)-[:REVIEWS_COURSE]->(c), (r)-[:REVIEWS_INSTRUCTOR]->(i);
MATCH (u:User {userId:5}),(r:Review {reviewId:52}),(c:Course {courseId:20}),(i:User {userId:4})     CREATE (u)-[:WROTE_REVIEW]->(r)-[:REVIEWS_COURSE]->(c), (r)-[:REVIEWS_INSTRUCTOR]->(i);
MATCH (u:User {userId:3}),(r:Review {reviewId:53}),(c:Course {courseId:24}),(i:User {userId:137})   CREATE (u)-[:WROTE_REVIEW]->(r)-[:REVIEWS_COURSE]->(c), (r)-[:REVIEWS_INSTRUCTOR]->(i);
MATCH (u:User {userId:1}),(r:Review {reviewId:54}),(c:Course {courseId:36}),(i:User {userId:6})     CREATE (u)-[:WROTE_REVIEW]->(r)-[:REVIEWS_COURSE]->(c), (r)-[:REVIEWS_INSTRUCTOR]->(i);

// PREFERS_LANGUAGE
MATCH (u:User {userId:1}),   (l:Language {languageId:1}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);
MATCH (u:User {userId:2}),   (l:Language {languageId:1}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);
MATCH (u:User {userId:3}),   (l:Language {languageId:1}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);
MATCH (u:User {userId:5}),   (l:Language {languageId:5}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);
MATCH (u:User {userId:7}),   (l:Language {languageId:5}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);
MATCH (u:User {userId:8}),   (l:Language {languageId:1}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);
MATCH (u:User {userId:9}),   (l:Language {languageId:1}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);
MATCH (u:User {userId:329}), (l:Language {languageId:1}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);

// Extra Links for Isolated Nodes
MATCH (c:Course {courseId: 16}), (l:Language {name: 'French'}) CREATE (c)-[:IN_LANGUAGE]->(l);
MATCH (u:User {userId: 329}), (l:Language {name: 'French'}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);
MATCH (u:User {userId: 5}), (l:Language {name: 'French'}) CREATE (u)-[:PREFERS_LANGUAGE]->(l);
