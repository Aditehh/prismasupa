import prisma from "@/lib/db";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    // <main style={{ padding: 20 }}>
    //   <h1>Posts in the database</h1>

    //   <ul>
    //     {posts.map((p) => (
    //       <li key={p.id}>
    //         <strong>{p.title}</strong>
    //         <p>{p.content}</p>
    //       </li>
    //     ))}

    //   </ul>

    // </main>

<main>
  click me to 
</main>


  );
}
                 