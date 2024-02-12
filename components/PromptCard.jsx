"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="pormpt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          {console.log(post.creator.image)}

          <Image
            src={post.creator.image}
            alt={"user_image"}
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3>{post.creator.username}</h3>
            <p>{post.creator.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
