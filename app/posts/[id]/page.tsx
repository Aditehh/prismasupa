import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostPage({ params }) {
    const post = await prisma.post.findUnique({
        where: {
            id: params.id,
        }
    });

    return (
        <main style={{ padding: 20 }}>
            <h1>{post?.title}</h1>
            <h2>{post?.content}</h2>
        </main >




    );
}
