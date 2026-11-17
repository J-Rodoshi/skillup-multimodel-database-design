# RDB Mini Project II — Individual SQL Queries

This folder contains the ten SQL scenarios assigned to Jarin Tasnim Rodoshi in the SkillUp RDB Mini Project II team contribution record.

## Assigned scenarios

| Scenario | Query |
|---:|---|
| 4 | Organization updates syllabus chapter title |
| 7 | Learner drops course |
| 12 | Remove inactive course |
| 16 | Popular courses (>100 enrollments) |
| 21 | Courses in Thai language |
| 25 | Certificates issued last month |
| 29 | Month with highest registrations |
| 32 | Churn analysis — Data Science never completed |
| 33 | Top rated instructors |
| 34 | Top 10 courses by average rating |

## Files

- `queries/jarin_queries.sql` — the SQL query contribution extracted from the Member 4 section of the team's combined SQL file.

## Database compatibility

These queries belong to the earlier RDB Mini Project II submission and target its original `skillup` database/schema. They are intentionally kept separate from the later Mini Project III / DMM demonstration database named `skillup_demo` in this repository.

The matching Mini Project II schema and seed data are not included here. Run the queries only against the corresponding Mini Project II database after checking that its tables, columns, IDs and status values match the assumptions in the queries.

## Execution precautions

- Scenarios 4 and 7 use session variables `@course_id` and `@enrollment_id`; set valid values before running them individually. In the original combined team script, these variables were established by earlier operations.
- Scenario 12 deletes course records. Test it only in a disposable database or after making a backup.
- The SQL is preserved from the submitted contribution. It has not been independently runtime-tested as a standalone script.
