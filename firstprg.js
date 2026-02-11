const {MongoClient} = require('mongodb');
//Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
async function run() {
try {
    //Connect to mongodb
    await client.connect();
    //Choose the database (database names cannot contain '.')
    const db = client.db('test');
    //Choose the collection
    const collection = db.collection('users');
    //Insert a document
    const result = await collection.insertOne({name: "John", age: 30});
    console.log(`Document inserted with _id: ${result.insertedId}`);
    } finally {
    //Close the connection
    await client.close();
    }
}
run().catch(console.error);
