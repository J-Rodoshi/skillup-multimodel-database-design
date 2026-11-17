# SkillUp — Multi-Model Database Design

**One online learning platform. Three ways to model its data.**

SkillUp is a database engineering coursework project that models an online learning platform using **MySQL, MongoDB, and Neo4j**. It explores how the same domain—learners, instructors, courses, enrolments, reviews, and certificates—can be structured across relational, document, and graph databases.

The repository brings together schema design, sample data, data operations, and analytical queries from two stages of the SkillUp project.

---

## Project at a glance

| Database | Data model | Main focus |
|---|---|---|
| **MySQL** | Relational | Normalized schema, 17 tables, primary and foreign keys, junction tables, joins, and aggregations |
| **MongoDB** | Document | Three collections (`users`, `courses`, and `reviews`), embedded documents, CRUD operations, and aggregation pipelines |
| **Neo4j** | Graph | Nodes, relationships, uniqueness constraints, and connected-data queries using Cypher |

### The domain

The data model covers the main elements of an online learning platform:

- Learners and instructors
- Courses and organizations
- Categories, skills, and languages
- Syllabus chapters and learning items
- Enrolments and progress
- Reviews and certificates

## What you can explore

### 1. Relational modelling with MySQL

Explore a normalized relational schema with primary and foreign keys, many-to-many junction tables, and relationships between the platform's core entities. The SQL scripts include schema creation, demonstration data, data updates, and analytical queries.

### 2. Document modelling with MongoDB

See how learner, course, and review information can be represented using documents, embedded structures, and references. The query examples use CRUD operations and aggregation pipelines for platform analysis.

### 3. Graph modelling with Neo4j

Explore the SkillUp domain as a property graph. The Cypher scripts create nodes and relationships for learners, instructors, courses, skills, organizations, enrolments, and reviews. Query examples cover course discovery, enrolment patterns, certificates, churn analysis, and ratings.

### 4. Earlier relational database exercises

The `mysql/mini_project_ii/` folder preserves query exercises from the earlier RDB Mini Project II. They are kept separate from the later `skillup_demo` implementation because they target the earlier project schema.

---

## Repository structure

```text
skillup-multimodel-database-design/
│
├── mysql/
│   ├── schema/
│   │   └── 01_schema.sql
│   ├── seed/
│   │   └── 02_seed_demo_data.sql
│   ├── queries/
│   │   └── jarin_sql_queries.sql
│   └── mini_project_ii/
│       ├── README.md
│       └── queries/
│           └── jarin_queries.sql
│
├── mongodb/
│   ├── seed/
│   │   └── seed_demo_data.js
│   └── queries/
│       └── jarin_mongodb_queries.js
│
├── neo4j/
│   ├── seed/
│   │   └── skillup_graph_demo.cypher
│   └── queries/
│       └── jarin_cypher_queries.cypher
│
├── docs/
│   ├── jarin_contribution_summary.md
│   └── mini_project_ii_contribution.md
│
├── DATA_SANITIZATION.md
└── README.md
```

---

## Run the project locally

The scripts are intended for local experimentation. Use a disposable database when running seed or data-changing scripts.

### MySQL

**Requirements:** MySQL 8.0+

From the repository root, create the schema and load the demonstration data:

```bash
mysql -u root -p < mysql/schema/01_schema.sql
mysql -u root -p < mysql/seed/02_seed_demo_data.sql
```

The schema creates a database named `skillup_demo`. The seed script clears and repopulates its tables. **Do not run it against a database containing data you need to keep.**

The query collection is in `mysql/queries/jarin_sql_queries.sql`. Set valid values for `@course_id` and `@enrollment_id` before running the related update examples.

### MongoDB

**Requirements:** MongoDB Community Server and `mongosh`

The seed script targets a database named `skillup_demo`. It drops and recreates its three collections, so it requires an explicit confirmation variable.

**PowerShell:**

```powershell
$env:ALLOW_DESTRUCTIVE_RESET = "YES"
mongosh "mongodb://localhost:27017" --file mongodb/seed/seed_demo_data.js
Remove-Item Env:ALLOW_DESTRUCTIVE_RESET
```

**macOS/Linux:**

```bash
ALLOW_DESTRUCTIVE_RESET=YES mongosh "mongodb://localhost:27017" --file mongodb/seed/seed_demo_data.js
```

After loading the data, run the examples in `mongodb/queries/jarin_mongodb_queries.js` using `mongosh`.

### Neo4j

**Requirements:** Neo4j 5.x

1. Create or select an empty, disposable database.
2. Open `neo4j/seed/skillup_graph_demo.cypher` in Neo4j Browser, or execute it with `cypher-shell`.
3. Open `neo4j/queries/jarin_cypher_queries.cypher` and run the scenarios individually.

The graph seed uses `CREATE` statements and uniqueness constraints. Run it once in a fresh database rather than repeatedly against an existing graph. Some query scenarios update or delete data; review each statement before execution. The registration-trend scenario includes a setup block that adds registration timestamps before its analysis query.

### Earlier RDB Mini Project II queries

The scripts under `mysql/mini_project_ii/` belong to the earlier project stage and target its original `skillup` schema. The matching schema and seed data are not included here, so these queries are **not guaranteed to run against** the later `skillup_demo` database.

---

## Data notes

The repository uses demonstration records. Contact details have been anonymized with the reserved `example.invalid` domain; phone and date-of-birth fields have been removed or set to null; password-hash fields contain non-credential placeholders.

The sample records are for database demonstrations only. They are not authentication data and must not be used in production systems.

## Project scope

This repository documents academic coursework and its database implementations. Some files represent shared project artefacts; the query collections and project notes provide additional context about the work. The original team presentation files and full team contribution forms are not included.

No open-source license is currently provided. Please obtain the relevant permissions before reusing or redistributing project materials.
