import prisma from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main style={{ padding: 20 }}>
      <h1>Posts in the database ({posts.length})</h1>

      <ul className="pt-20">
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.slug}`}>
              {p.title}
            </Link>
            {/* <p>{p.content}</p> */}
          </li>

        ))}

      </ul>

    </main >




  );
}
