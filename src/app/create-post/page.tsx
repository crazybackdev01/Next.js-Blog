"use client";
import { useRef, useState } from "react";
import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

export default function Page() {
  // const ref = useRef<HTMLFormElement>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const { isAuthenticated } = getKindeServerSession();

  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url = /create-post");
  // }
  return (
    <main className=" text-center pt-12">
      <h1 className="text-4xl font-bold ">Create Post</h1>
      <form
        // action={createPost}
        action={async (formData) => {
          await createPost(formData);
          // ref.current?.reset();
          setTitle("");
          setBody("");
        }}
        className="flex flex-col mx-auto space-x-2 mt-3 gap-3 max-w-[400px] my-10"
      >
        <input
          type="text"
          name="title"
          id="username"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 border rounded px-3 mt-2"
          placeholder="Title for new Post"
          required
        />
        <textarea
          name="body"
          id="username"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 border rounded px-3"
          placeholder="Body for new Post"
          required
          rows={6}
        />
        <button className="bg-gray-300 p-3 mt-6 rounded font-semibold mb-1">
          Submit
        </button>
        <LogoutLink className="bg-gray-300 p-3 mt-1 rounded font-semibold mb-3">
          Logout
        </LogoutLink>
      </form>
    </main>
  );
}
