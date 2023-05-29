import { connectDB } from "@/util/database"

export default async function Write(){
    const db = (await connectDB).db("forum")
    let data = await db.collection("post").find().toArray();
    return (
        <div className="p-20">
            <h4>글 작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="제목"/>
                <input name="content" placeholder="내용"/>
                <button type="submit">작성</button>
            </form>
        </div>
    )
}