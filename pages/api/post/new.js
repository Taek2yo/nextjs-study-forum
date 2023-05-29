import { connectDB } from "@/util/database";

export default async function writehandler(request, response) {
  if (request.method == "POST") {
    if( request.body.title == ''){
        return response.status(500).json('제목을 작성해주세요')
    } 
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(request.body);
    return response.status(200).redirect(302, "/list");
  }
}
