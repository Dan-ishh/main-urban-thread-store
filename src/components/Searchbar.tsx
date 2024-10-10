"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const router = useRouter();
  const handleSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className="bg-neutral-100 flex items-center justify-between gap-4 p-2 rounded-lg flex-1"
      onSubmit={handleSearchClick}
    >
      <input
        type="text"
        placeholder="Search"
        name="name"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="search" height={16} width={16} />
      </button>
    </form>
  );
};

export default Searchbar;
