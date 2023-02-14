"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-bold">🚨</h1>
      <h2 className="text-6xl font-bold">Oops! Something went wrong.</h2>
    </div>
  );
}
