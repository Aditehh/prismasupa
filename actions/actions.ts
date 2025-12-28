"use server"
import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"


export async function createPost(formData: FormData) {
    await prisma.post.create({
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "-")
                .toLocaleLowerCase(),
            content: formData.get("content") as string,

        },
        include: { author: true }
    })

    revalidatePath("/posts");
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