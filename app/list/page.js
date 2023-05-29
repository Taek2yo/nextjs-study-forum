import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink"

export default async function List() {
  const db = (await connectDB).db("forum");
  let data = await db.collection("post").find().toArray();
  

  return (
    <div className="list-bg">
      {data.map((item, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <p>{item.content}</p>
          </div>
        );
      })}
       
    </div>
  );
}
