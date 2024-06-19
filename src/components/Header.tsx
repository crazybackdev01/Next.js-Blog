"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create-Post",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center px-7 py-4 border-b">
      <Link href={"/"}>
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width={35}
          height={35}
        />
      </Link>
      {/* CSS comes after the HTML so width and height of image tag will be 35px as CSS will override HTML optimizations  */}
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                // className="text-zinc-400"
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-zinc-10 font-bold"
                    : "text-zinc-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// src="https://bytegrad.com/course-assets/youtube/example-logo.png"
