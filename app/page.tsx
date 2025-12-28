import prisma from "@/lib/db";
import Link from "next/link";
import { createPost } from "@/actions/actions";

export default async function Home() {
  const posts = await prisma.post.findMany({
    // where: {
    //   title: {
    //     startsWith: "this"
    //   },
    // },
    // orderBy: {
    //   createdAt: "desc"
    // },
    // select: {
    //   id: true,
    //   title: true,
    //   slug: true
    // },
  });

  return (
    <main
      className="flex flex-col justify-items-center items-center" style={{ padding: 20 }}>
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

      <form
        action={createPost}
        className="flex flex-col gap-y-2 w-75 pt-30">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-2 py-1 rounded-sm"
        />
        <textarea
          name="content"
          rows={5}
          placeholder="Content"
          className="px-2 py-1 rounded-sm"
        />
        <button
          type="submit"
          className="bg-blue-500 py-2 text-white rounded-sm">
          Create Post
        </button>
      </form>

    </main >




  );
}
