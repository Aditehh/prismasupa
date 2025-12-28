import prisma from "@/lib/db";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug,
    }
  });

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
