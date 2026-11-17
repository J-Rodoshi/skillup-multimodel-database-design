-- Create database and use it
CREATE DATABASE IF NOT EXISTS skillup_demo;
USE skillup_demo;


-- ================
-- MASTER TABLES
-- ================

CREATE TABLE users (
  user_id BIGINT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  dob DATE,
  phone VARCHAR(50),
  password_hash VARCHAR(255) NOT NULL,
  hash_type VARCHAR(50) NOT NULL,
  account_created DATETIME,
  last_online DATETIME,
  country VARCHAR(255),
  background VARCHAR(255),
  PRIMARY KEY (user_id),
  UNIQUE KEY uq_users_email (email)
) ENGINE=InnoDB;

CREATE TABLE languages (
  language_id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (language_id),
  UNIQUE KEY uq_languages_name (name)
) ENGINE=InnoDB;

CREATE TABLE learners (
  learner_id BIGINT NOT NULL,
  preferred_language_id BIGINT,
  preferred_learning_speed VARCHAR(50),
  PRIMARY KEY (learner_id),
  CONSTRAINT fk_learners_user
    FOREIGN KEY (learner_id) REFERENCES users(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_learners_language
    FOREIGN KEY (preferred_language_id) REFERENCES languages(language_id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE instructors (
  instructor_id BIGINT NOT NULL,
  introduction TEXT,
  started_date DATE,
  last_online DATETIME,
  degree_of_study VARCHAR(255),
  institution VARCHAR(255),
  certification VARCHAR(255),
  PRIMARY KEY (instructor_id),
  CONSTRAINT fk_instructors_user
    FOREIGN KEY (instructor_id) REFERENCES users(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE organizations (
  org_id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  website VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  description TEXT,
  type VARCHAR(100),
  created_at DATETIME,
  PRIMARY KEY (org_id)
) ENGINE=InnoDB;

CREATE TABLE categories (
  category_id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (category_id),
  UNIQUE KEY uq_categories_name (name)
) ENGINE=InnoDB;

CREATE TABLE skills (
  skill_id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (skill_id),
  UNIQUE KEY uq_skills_name (name)
) ENGINE=InnoDB;

-- ================
-- COURSES + SYLLABUS
-- ================

CREATE TABLE courses (
  course_id BIGINT NOT NULL AUTO_INCREMENT,
  org_id BIGINT,
  primary_instructor_id BIGINT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  proficiency VARCHAR(100),
  learning_hours INT,
  fee DECIMAL(10,2),
  created_at DATETIME,
  last_updated DATETIME,
  PRIMARY KEY (course_id),
  KEY idx_courses_org (org_id),
  KEY idx_courses_primary_instructor (primary_instructor_id),
  CONSTRAINT fk_courses_org
    FOREIGN KEY (org_id) REFERENCES organizations(org_id)
    ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT fk_courses_primary_instructor
    FOREIGN KEY (primary_instructor_id) REFERENCES instructors(instructor_id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE syllabus_chapters (
  chapter_id BIGINT NOT NULL AUTO_INCREMENT,
  course_id BIGINT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  chapter_order INT,
  PRIMARY KEY (chapter_id),
  KEY idx_chapters_course (course_id),
  CONSTRAINT fk_chapters_course
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE syllabus_items (
  item_id BIGINT NOT NULL AUTO_INCREMENT,
  chapter_id BIGINT NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  item_order INT,
  PRIMARY KEY (item_id),
  KEY idx_items_chapter (chapter_id),
  CONSTRAINT fk_items_chapter
    FOREIGN KEY (chapter_id) REFERENCES syllabus_chapters(chapter_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ================
-- M:N RELATION TABLES
-- ================

CREATE TABLE course_categories (
  course_id BIGINT NOT NULL,
  category_id BIGINT NOT NULL,
  PRIMARY KEY (course_id, category_id),
  KEY idx_cc_category (category_id),
  CONSTRAINT fk_cc_course
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_cc_category
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE course_skills (
  course_id BIGINT NOT NULL,
  skill_id BIGINT NOT NULL,
  PRIMARY KEY (course_id, skill_id),
  KEY idx_cs_skill (skill_id),
  CONSTRAINT fk_cs_course
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_cs_skill
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE course_languages (
  course_id BIGINT NOT NULL,
  language_id BIGINT NOT NULL,
  PRIMARY KEY (course_id, language_id),
  KEY idx_cl_language (language_id),
  CONSTRAINT fk_cl_course
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_cl_language
    FOREIGN KEY (language_id) REFERENCES languages(language_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE course_instructors (
  course_id BIGINT NOT NULL,
  instructor_id BIGINT NOT NULL,
  role VARCHAR(100),
  assigned_at DATETIME,
  PRIMARY KEY (course_id, instructor_id),
  KEY idx_ci_instructor (instructor_id),
  CONSTRAINT fk_ci_course
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_ci_instructor
    FOREIGN KEY (instructor_id) REFERENCES instructors(instructor_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ================
-- ENROLLMENT + REVIEWS
-- ================

CREATE TABLE enrollments (
  enrollment_id BIGINT NOT NULL AUTO_INCREMENT,
  learner_id BIGINT NOT NULL,
  course_id BIGINT NOT NULL,
  status VARCHAR(50),
  enrolled_at DATETIME,
  last_accessed_at DATETIME,
  checkpoint_chapter_id BIGINT,
  PRIMARY KEY (enrollment_id),
  KEY idx_enrollments_learner (learner_id),
  KEY idx_enrollments_course (course_id),
  KEY idx_enrollments_checkpoint (checkpoint_chapter_id),
  CONSTRAINT fk_enrollments_learner
    FOREIGN KEY (learner_id) REFERENCES learners(learner_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_enrollments_course
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_enrollments_checkpoint
    FOREIGN KEY (checkpoint_chapter_id) REFERENCES syllabus_chapters(chapter_id)
    ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE reviews (
  review_id BIGINT NOT NULL AUTO_INCREMENT,
  enrollment_id BIGINT NOT NULL,
  instructor_id BIGINT NOT NULL,
  course_rating DECIMAL(3,2),
  instructor_rating DECIMAL(3,2),
  message TEXT,
  created_at DATETIME,
  PRIMARY KEY (review_id),
  UNIQUE KEY uq_reviews_enrollment (enrollment_id),
  KEY idx_reviews_instructor (instructor_id),
  CONSTRAINT fk_reviews_enrollment
    FOREIGN KEY (enrollment_id) REFERENCES enrollments(enrollment_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_reviews_instructor
    FOREIGN KEY (instructor_id) REFERENCES instructors(instructor_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE certificates (
  certificate_id BIGINT NOT NULL AUTO_INCREMENT,
  enrollment_id BIGINT NOT NULL,
  certificate_number VARCHAR(255) NOT NULL,
  completed_at DATETIME NOT NULL,
  issued_at DATETIME NOT NULL,

  PRIMARY KEY (certificate_id),
  UNIQUE KEY uq_certificates_enrollment (enrollment_id),

  CONSTRAINT fk_certificates_enrollment
    FOREIGN KEY (enrollment_id)
    REFERENCES enrollments(enrollment_id)
    ON DELETE CASCADE
) ENGINE=InnoDB;
