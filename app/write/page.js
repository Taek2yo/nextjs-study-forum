import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";

export default async function Write() {
  let session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <div className="p-20">
          <h4>글 작성</h4>
          <form action="/api/post/new" method="POST">
            <input name="title" placeholder="제목" />
            <input name="content" placeholder="내용" />
            <button type="submit">작성</button>
          </form>
        </div>
      ) : (
        <div>로그인하세요</div>
      )}
    </div>
  );
}

