"use server"
import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"


export async function createPost(formData: FormData) {
    const defaultAuthor = await prisma.user.upsert({
        where: { email: "system@prisma.com" },
        update: {},
        create: { email: "system@prisma.com", hashedPassword: "dummy" },
    });

    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "-")
                .toLowerCase(),
            content: formData.get("content") as string,
            authorId: defaultAuthor.id, // ✅ REQUIRED
        },
        include: { author: true }, // ✅ this just returns the author
    });

}

export async function editPost(formdata: FormData, slug: string) {
    await prisma.post.update({
        where: { slug },
        data: {
            title: formdata.get("title") as string,
            slug: (formdata.get("title") as string)
                .replace(/\s+/g, "-")
                .toLowerCase(),
            content: formdata.get("content") as string
        }
    })
}

export async function deletePost(slug: string) {
    await prisma.post.delete({ where: { slug } });
}