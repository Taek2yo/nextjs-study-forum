import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method == "GET") {
    console.log(request.query._id)
    let db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(request.query._id) });
    response.status(200).json("삭제완료");
  }
}
