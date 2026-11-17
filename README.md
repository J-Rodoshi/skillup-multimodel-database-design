# SkillUp: Multi-Model Database Design

A database-design coursework project modelling an online learning platform across relational, document, and graph database paradigms. The project explores how the same business domain can be represented and queried using MySQL, MongoDB, and Neo4j.

## Project overview

| Model | Implementation | What it demonstrates |
|---|---|---|
| Relational | MySQL | Normalized schema, primary/foreign keys, junction tables, SQL joins, aggregation, updates, and deletes |
| Document | MongoDB | Embedded learner/course documents, collection design, CRUD, and aggregation pipelines |
| Graph | Neo4j | Nodes, relationships, uniqueness constraints, and connected-data representation with Cypher |

The MySQL schema contains 17 tables. The MongoDB implementation uses three collections (`users`, `courses`, `reviews`). The Neo4j seed represents the SkillUp domain with users, courses, organizations, languages, categories, skills, chapters, enrollments, certificates, and reviews.

## Repository layout

```text
mysql/
  schema/       relational DDL
  seed/         anonymized demonstration data
  queries/      individual SQL query contribution
mongodb/
  seed/         anonymized demo seed script (reset is guarded)
  queries/      individual MongoDB query contribution
neo4j/
  seed/         anonymized graph seed script
```

## Your documented individual query work

The `mysql/queries/jarin_sql_queries.sql` and `mongodb/queries/jarin_mongodb_queries.js` files contain the queries from the per-member coursework sections, separated from other students' sections. They cover:

- inserting and updating syllabus chapters;
- recording course drops and identifying inactive courses;
- finding popular courses and Thai-language courses;
- retrieving certificates issued in the previous month;
- identifying the month with the highest number of registrations;
- churn analysis for learners who have not completed a Data Science course;
- ranking instructors and courses by ratings.

The relational schema, MongoDB seed model, and Neo4j graph seed are group-level coursework artefacts. Do not describe all group outputs as individually authored.

## Run locally

### MySQL

Use MySQL 8.0 or later. From the repository root:

```bash
mysql -u root -p < mysql/schema/01_schema.sql
mysql -u root -p < mysql/seed/02_seed_demo_data.sql
```

The schema creates a database named `skillup_demo`. The seed script resets/repopulates tables in that demo database; only run it against a disposable coursework database. The individual SQL file uses `@course_id` and `@enrollment_id`; change those variables to valid IDs before executing the update/delete examples.

### MongoDB

Use MongoDB Community Server and `mongosh`. The seed is deliberately limited to a database named `skillup_demo` and requires explicit confirmation before dropping its three collections.

PowerShell:

```powershell
$env:ALLOW_DESTRUCTIVE_RESET = "YES"
mongosh "mongodb://localhost:27017" --file mongodb/seed/seed_demo_data.js
Remove-Item Env:ALLOW_DESTRUCTIVE_RESET
```

macOS/Linux:

```bash
ALLOW_DESTRUCTIVE_RESET=YES mongosh "mongodb://localhost:27017" --file mongodb/seed/seed_demo_data.js
```

Run the individual MongoDB queries in `mongodb/queries/jarin_mongodb_queries.js` in `mongosh` after loading the demo data.

### Neo4j

Use Neo4j 5.x. Open `neo4j/seed/skillup_graph_demo.cypher` in Neo4j Browser or run it with `cypher-shell` against a fresh, disposable database. It uses `CREATE` statements and uniqueness constraints, so do not run it repeatedly against an already-populated database.

## Data and privacy note

The submitted coursework archives contained mock user records with realistic email addresses, phone numbers, dates of birth, and password-hash-shaped fields. The public-ready copies in this repository replace contact details with the reserved `example.invalid` domain, remove phone/date-of-birth values, and replace hash values with non-credential placeholders. They must not be used for authentication or production systems.

## Academic context and attribution

This is a group coursework project. Only the per-member SQL and MongoDB query sections are labelled as individual query contributions here. The original slide decks and the class contribution form are not included because they may contain classmates' personal information. Obtain team permission before redistributing group-owned material or adding other contributors' names.

No open-source license is applied to this coursework repository. Add a license only after confirming that you have the right to license all included group work and data.


## Neo4j: individual Cypher query contribution

The Neo4j portion includes the team's graph seed and a separate file containing the ten Cypher scenarios assigned to Jarin in the team contribution record:

- `neo4j/seed/skillup_graph_demo.cypher` — group-level graph seed for the SkillUp demo database.
- `neo4j/queries/jarin_cypher_queries.cypher` — individual query contribution, scenarios 31–40.
- `docs/jarin_contribution_summary.md` — a sanitized summary of the contributor's recorded project responsibilities and assigned scenarios.

Run the graph seed once in a fresh, disposable Neo4j database. Then open `neo4j/queries/jarin_cypher_queries.cypher` and execute the scenarios individually. Do not run the entire file as a batch because some scenarios update or delete graph data. Scenario 37 includes a prerequisite block that adds `accountCreated` timestamps to the seeded User nodes before calculating the month with the most registrations.

The complete team contribution form and the full 40-query team file are intentionally not redistributed here. They contain other students' names, student identifiers, and work allocations. This repository includes only the contributor's own recorded summary and assigned query scenarios.


## Earlier coursework: RDB Mini Project II

This repository also documents an earlier SkillUp relational-database coursework submission. Its ten individually assigned SQL scenarios are kept separately under `mysql/mini_project_ii/` so they are not confused with the later Mini Project III / DMM `skillup_demo` schema.

- [Mini Project II overview and execution notes](mysql/mini_project_ii/README.md)
- [Jarin's assigned SQL queries (scenarios 4, 7, 12, 16, 21, 25, 29, 32, 33 and 34)](mysql/mini_project_ii/queries/jarin_queries.sql)
- [Sanitized individual contribution summary](docs/mini_project_ii_contribution.md)

The original Mini Project II schema and seed data were not part of the supplied files, so these queries must be run against the matching Mini Project II database. They should not be assumed to run against the later `skillup_demo` seed in this repository.
