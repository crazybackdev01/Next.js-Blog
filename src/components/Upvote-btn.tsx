"use client";
// Server components cannot have interactivity because interaction can only be done by DOM events and event listeners but DOM only exists on client side in the browser
// So for the interaction to work, Component must be converted into client component.......
// Additionally, If we want to use any React hooks like useEffect, useState, useRef, useContext,... then we need to convert server component into client component
// All the State Management Logics must be defined and implemented in Client-Component like using Redux, Zustand , Recoil......
import { useState } from "react";

export default function Upvote() {
  const [upvote, setUpvote] = useState(0);
  return (
    <>
      <button
        className="bg-gray-300 p-3 mt-6 rounded font-semibold mb-3"
        onClick={() => setUpvote(upvote + 1)}
      >
        Upvote
      </button>
      <p>Upvote Counter : {upvote}</p>
    </>
  );
}
