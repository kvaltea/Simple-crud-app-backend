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

function signalHandler() {
    console.log("Closing MongoBD Connection...")
    client.close();
    process.exit();
};
