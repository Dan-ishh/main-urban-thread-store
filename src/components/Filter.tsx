"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex flex-col justify-between md:flex-row">
      <div className="flex gap-6 flex-wrap">
        {/* <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select> */}
        {/* TODO: Filter Categories */}
        {/* <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select> */}
        {/* <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select> */}
        {/* <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        /> */}
        <input
          className="bg-zinc-200 text-zinc-600 w-full sm:w-52 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-neutral-900 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg"
          type="text"
          name="min"
          placeholder="min price"
          onChange={handleFilterChange}
        />

        {/* <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        /> */}
        <input
          className="bg-zinc-200 text-zinc-600 w-full sm:w-52 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-neutral-900 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg"
          type="text"
          name="max"
          placeholder="max price"
          onChange={handleFilterChange}
        />
      </div>
      {/* <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div> */}
      <div className="relative group rounded-lg w-full sm:w-52 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0  before:rounded-full before:blur-lg mt-4 md:mt-0 bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 shadow-md">
        <svg
          y="0"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          width="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          height="100"
          className="w-8 h-8 absolute right-0 -rotate-45 stroke-[#1999A9] top-1.5 group-hover:rotate-0 duration-300"
        >
          <path
            stroke-width="4"
            stroke-linejoin="round"
            stroke-linecap="round"
            fill="none"
            d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
            className="svg-stroke-primary"
          ></path>
        </svg>
        <select
          className="appearance-none relative bg-transparent ring-0 outline-none border ring-zinc-400 text-sm rounded-lg focus:ring-2 focus:border-neutral-500 block w-full p-2.5"
          onChange={handleFilterChange}
          name="sort"
          id=""
        >
          <option disabled selected className="text-zinc-600 opacity-50">
            Sort By
          </option>
          <option value="">None</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
