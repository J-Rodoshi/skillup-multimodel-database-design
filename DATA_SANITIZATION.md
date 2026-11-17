# Data sanitization record

The original coursework archives contained synthetic/mock profile records with realistic-looking personal fields. The repository copies were sanitized before publication:

- email addresses replaced with `example.invalid` aliases;
- phone fields changed to `NULL`;
- date-of-birth fields changed to `NULL` or removed from document seed records;
- password-hash values replaced with `NOT_A_REAL_HASH` and hash type changed to `demo-placeholder`;
- other students' per-member query sections and student identifiers omitted.

The mock seed files are only for local demonstrations. They are not authentication data and must never be used in a production environment.
