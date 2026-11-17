# Individual Contribution Record — SkillUp

**Course project:** Neo4j Mini Project III — SkillUp  
**Team:** Group (H) 7  
**Contributor:** Jarin Tasnim Rodoshi  
**Role in team record:** Member 4

This summary records only my own contributions from the team's contribution form. The original form is not included in this public repository because it contains other students' names, student identifiers, and individual contribution details.

## Project and design contributions

- Analysed the system objectives and identified business rules during proposal development.
- Designed feedback loops and mapped instructor ratings during graph-model design.
- Completed the contribution form and helped finalize the presentation draft.

## Assigned Neo4j query scenarios

The team contribution form assigns scenarios 31–40 to me. My corresponding Cypher queries are maintained in [`neo4j/queries/jarin_cypher_queries.cypher`](../neo4j/queries/jarin_cypher_queries.cypher).

| Scenario | Query |
|---:|---|
| 31 | Organization updates a syllabus chapter title |
| 32 | Learner drops a course |
| 33 | Remove a course created before 2024 that has no enrolments |
| 34 | Identify popular courses by enrolment count |
| 35 | Find courses available in English |
| 36 | Find certificates issued within the last month |
| 37 | Identify the month with the highest number of registrations |
| 38 | Churn analysis for learners who have not completed a Data Science course |
| 39 | Rank instructors by ratings, considering instructors who teach at least one course |
| 40 | Return the top 10 courses by average rating |

## Notes on the demonstration data

Some thresholds and values were adapted in the original project queries for the small demonstration dataset (for example, the popular-course threshold and the English-language sample query). The Cypher file documents these adaptations. It also includes a small setup block for registration timestamps because the original graph seed does not initially populate `accountCreated` on User nodes.

The shared graph seed and database design are group-level project artefacts. This record distinguishes those group deliverables from the individual query scenarios assigned to me.
