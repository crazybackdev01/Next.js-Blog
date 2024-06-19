import { Suspense } from "react";
import PostList from "@/components/Post-list";
// Putting async in the functional component will serve the same purpose as useEffect was serving in React that is fetching some external data or synchronizing with external environments on the first load of the component
export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

export default async function Page() {
  // Way of adding delay in JavaScript
  //   await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold underline mb-5">
        All Posts
      </h1>
      <Suspense
        fallback={
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <PostList />
      </Suspense>
    </main>
  );
}
