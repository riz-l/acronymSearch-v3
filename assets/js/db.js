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
