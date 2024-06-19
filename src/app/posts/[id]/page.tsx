import Upvote from "@/components/Upvote-btn";
import { Post } from "../page";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold underline mb-5">
        {post.title}
      </h1>
      <p>{post.body}</p>
      <Upvote />
    </main>
  );
}

//https://dummyjson.com/posts?limit=10
