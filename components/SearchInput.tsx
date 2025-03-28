"use client";
import React, { useTransition } from 'react';
import { motion } from 'motion/react';
import { usePathname, useRouter } from "next/navigation";

const SearchInput = () => {
  const { replace } = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(window.location.search);

    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    params.delete("page");

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`)
    });
  }

  const handleOnChange = (event: React.ChangeEvent) => {
    handleSearch((event.target as HTMLInputElement).value);
  }
  return (
    <div className="relative mb-5 flex items-center justify-center">
      <motion.input
        initial={{ width: "500px" }}
        animate={{ width: "500px" }}
        whileFocus={{ width: "100vw" }}
        transition={{ duration: 0.5 }}
        type="text"
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Tips(y) for your drinks!"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchInput;