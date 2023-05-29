import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let data = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.editId) });

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={data.title} />
        <input name="content" defaultValue={data.content} />
        <input style={{display : "none"}} name="_id" defaultValue={data._id.toString()} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
