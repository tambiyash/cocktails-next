"use client";
import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

const SearchInput = ({ value }: { value?: string }) => {
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
    <div className="mb-6">
        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search Cocktails</label>
        <input
          type="text"
          value={value}
          id="large-input"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleOnChange}
        />
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Tips(y) for your drinks!</p>
        {isPending && (
          <div className="absolute top-0 bottom-0 left-0 flex justify-center items-center transform animate-spin 1s">
            /
          </div>
        )}
    </div>
  );
}

export default SearchInput