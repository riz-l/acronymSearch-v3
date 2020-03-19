// Offline data
db.enablePersistence().catch(err => {
  if (err.code == "failed-precondition") {
    // If persistence fails, there is probably more than 1 tab open
    console.log("persistence failed");
  } else if (err.code == "unimplemented") {
    // If persistence is not available, there is a lack of browser support
    console.log("persistence is not available");
  }
});

// Real-time listener
db.collection("acronymsAndDefinitions").onSnapshot(snapshot => {
  // Console.log displays any additions or removals from db
  //   console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    // Console.log displays data, fields, and id
    // console.log(change, change.doc.data(), change.doc.id);
    if (change.type === "added") {
      // Add the document data to the DOM
      renderAcronymsAndDefinitions(change.doc.data(), change.doc.id);
    }
    if (change.type === "removed") {
      // Remove the document data from the DOM
    }
  });
});
