# Unanchored Regular Expressions in MongoDB Queries

This repository demonstrates a common error in MongoDB queries: using unanchored regular expressions with the `$regex` operator.  This can lead to unexpected matches if you're not careful about the start and end anchors (`^` and `$`).

The `bug.js` file shows the incorrect code, and `bugSolution.js` shows how to fix it using proper anchors.