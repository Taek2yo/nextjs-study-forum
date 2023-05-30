import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function deleteHandler(request, response) {
  if (request.method == "POST") {
    let db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(request.body) });
    response.status(200).json("삭제완료");
  }
}
