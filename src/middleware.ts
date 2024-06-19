import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return withAuth(request);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/create-post",
};
