"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitting, setsubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });

  const CreatePrompt = async (e) => {};
  return (
    <Form
      type="Create"
      post={post}
      setPost={post}
      submitting={submitting}
      handleSubmit={CreatePrompt}
    />
  );
};

export default CreatePrompt;
