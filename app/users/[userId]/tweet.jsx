"use client";

import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

export default function Tweet({ tweet }) {
  const [likes, setLikes] = useState(tweet?.likes);
  const [liked, setLiked] = useState(null);

  useEffect(() => {
    if (liked === null) return;

    const endpoint = liked
      ? `/api/tweets/${tweet.id}/like`
      : `/api/tweets/${tweet.id}/unlike`;

    fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ tweet }) => {
        setLikes(tweet?.likes);
      });
  }, [liked, tweet.id]);

  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <p>{tweet?.body}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => setLiked((liked) => !liked)}>
            {liked ? (
              <HeartIconSolid className="w-6 h-6 text-red-500" />
            ) : (
              <HeartIcon className="w-6 h-6 text-gray-500" />
            )}
          </button>
          <p>{likes}</p>
        </div>
      </div>
    </div>
  );
}
