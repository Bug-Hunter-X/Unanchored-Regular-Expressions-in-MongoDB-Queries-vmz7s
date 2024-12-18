```javascript
const query = {
  field: { $regex: /^pattern$/i }, // Anchored regex
};

db.collection.find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```