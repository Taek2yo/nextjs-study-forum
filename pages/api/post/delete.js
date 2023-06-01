import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function deleteHandler(request, response) {
  if (request.method == "POST") {
    
    let session = await getServerSession(request, response, authOptions);
    console.log(session.user)  
    const db = (await connectDB).db("forum");
    let foundPost = await db.collection('post').findOne({ _id : new ObjectId(request.body)})
    console.log(foundPost)
    
    if ( session.user.email === foundPost.author){
      let result = await db.collection('post').deleteOne({ _id : new ObjectId(request.body)})
      console.log(result)
      return response.status(200).json('삭제완료')
    } else {
      return response.status(500).json('현재 유저와 일치X')
    }
  }
}
