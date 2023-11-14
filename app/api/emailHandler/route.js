import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import validator from 'validator';

// Handles POST requests to /api
export async function POST(request) {
  const url = `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.cluster}.rn5du3c.mongodb.net/${process.env.database}?retryWrites=true&w=majority`;
  if (request.method === "POST") {
    const data = await request.json();
   const checkEmail = validator.isEmail(data.email)
    if (!data.email || !checkEmail) {
      return NextResponse.json({ message: `Invalid email.` }, { status: 402 });
    }
    let client;
    try {
      client = await MongoClient.connect(url);
    } catch (error) {
      client.close();
      return NextResponse.json(
        { message: "Could not connect to database!" },
        { status: 500 }
      );
    }
    let result;
    try {
      const db = client.db();
      const userEmailCollection = db.collection("UserEmail");
      const count = await userEmailCollection.countDocuments({
        email: data.email,
      });
      if (count > 0) {
        return NextResponse.json(
          { message: `Email is exsited.` },
          { status: 422 }
        );
      }
      result = await userEmailCollection.insertOne(data);
    } catch (error) {
      client.close();
      return NextResponse.json(
        { message: `insert Error:${error}` },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: "Save email" }, { status: 201 });
  }
}
