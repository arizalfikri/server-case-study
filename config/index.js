require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
let database;
async function connect() {
  try {
    await client.connect();
    database = client.db("caseStudy");
  } catch (error) {
    console.log("error: ", error);
  }
}

function getDatabase() {
  return database;
}

module.exports = {
  connect,
  getDatabase,
};
