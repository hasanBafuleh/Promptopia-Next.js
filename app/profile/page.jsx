"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();

  const [posts, setposts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const responce = await fetch(`/api/users/"${session?.user.id}/posts`);
      const data = await responce.json();

      setposts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
