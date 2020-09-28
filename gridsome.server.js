// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const admin = require('firebase-admin');

const app = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const firestore = app.firestore();

const docToData = doc => {
  return {... (doc.data()), id: doc.id}
}

module.exports = function (api) {
  api.loadSource(async action => {

    let workshopsCollection = action.addCollection("Workshops");

    // get workshops
    let workshops = (await firestore.collection("workshops").get()).docs.map(docToData);

    // load organizer details
    workshops = await Promise.all(workshops.map(async workshop => {

      let organizer = await (await firestore.collection("users").doc(workshop.organizer).get()).data()
      workshop.organizer = {name: organizer.name, id: workshop.organizer};

      return workshop;
    }));

    // load daterows
    workshops = await Promise.all(workshops.map(async workshop => {

      let daterows = await (await firestore.collection("workshops").doc(workshop.id).collection("daterows").get()).docs.map(docToData);

      daterows = await Promise.all(daterows.map(async daterow => {

        daterow.dates = await (await firestore.collection("workshops").doc(workshop.id).collection("daterows").doc(daterow.id).collection("dates").get()).docs.map(docToData);

        return daterow;
      }))

      workshop.daterows = daterows;

      return workshop;
    }))

    workshops.forEach(workshop => {
      workshopsCollection.addNode({
        ...workshop
      });
    });
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
