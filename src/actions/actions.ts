"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// It is declared to define server action
// The logs of the server will be in the Terminal Console
// the benefit of the server actions are that we dont have to worry about the URL matching in frontend with respect to the backend server
// The work of the server is only accepting requests and giving response not interaction like event listerners
// If we have to give a GET request to the backend server then it can be done inside the server component by putting async in the functional component but if we have to update the data that is PUT, DELETE, PATCH, requests then we have to use Server

// Auth for server actions:-
// Server actions need to be protected by a Authenticating Middleware function.....
export async function createPost(formData: FormData) {
  // Auth Check
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  // OR
  //const title = <string>formData.get("title")

  // Update the Database
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  // Revalidate the Path to re-render the posts page with latest cache data
  revalidatePath("/posts");
}
