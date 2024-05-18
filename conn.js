import { MongoClient } from "mongodb";

const mongoURL = process.env.MONGODB_URI;
const client = new MongoClient(MongoURI);

export function connectToMongo(callback) {
    client.connect().then((client) => {
        return callback();
    }).catch(err => {
        callback(err)
    })
};

export function getDB(dbName = process.env.DB_NAME) {
    return client.db(dbName)
};

function signalHandler() {
    console.log("Closing MongoBD Connection...")
    client.close();
    process.exit();
};

process.on("SIGINT", signalHandler)
process.on("SIGTERM", signalHandler)
process.on("SIGQUIT", signalHandler)
