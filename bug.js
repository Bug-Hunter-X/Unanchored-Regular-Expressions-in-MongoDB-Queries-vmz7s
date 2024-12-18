```javascript
const query = {
  field: { $regex: /pattern/i },
};

db.collection.find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```