"use client";
import Link from "next/link";

export default function ListItem({ data }) {
  return (
    <div>
      {data.map((item, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <Link href={`/edit/${item._id}`}>✏️</Link>
            <span
              onClick={(e) => {
                fetch("/api/post/delete", { method: "POST", body: item._id })
                  .then((r) => r.json)
                  .then((r) => {
                      e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
              }}
            >
              🗑️
            </span>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}
