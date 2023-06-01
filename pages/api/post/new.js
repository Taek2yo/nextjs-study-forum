import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function writehandler(request, response) {
  let session = await getServerSession(request,response, authOptions)
 
  if ( session ){
    request.body.author = session.user.email
  }
  
  if (request.method == "POST") {
    if( request.body.title == ''){
        return response.status(500).json('제목을 작성해주세요')
    } 
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(request.body);
    return response.status(200).redirect(302, "/list");
  }
}
