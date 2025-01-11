const { MongoClient, ServerApiVersion } = require("mongodb");

let db = null;

const connectDB = async () => {
  if (db) return db;

  const uri = process.env.NEXT_PUBLIC_DATABASE_URI;
  if (!uri) {
    throw new Error("MongoDB URI is not defined in environment variables");
  }

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    db = client.db("Fresh Vegetable Shop");
    console.log("Connected to MongoDB successfully.");
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw new Error("Database connection failed");
  }
};

module.exports = connectDB;
