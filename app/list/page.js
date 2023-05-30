import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink"
import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("forum");
  let data = await db.collection("post").find().toArray();
  
  return (
    <div className="list-bg">
      <ListItem data={data}/>
       
    </div>
  );
}
