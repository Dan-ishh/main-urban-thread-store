"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = () => {
  return (
    <div className="mt-12 sm:flex-col flex justify-between gap-1">
      <div className="flex gap-4 flex-wrap">
        {/* <select
          name="type"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 appearance-none"
        >
          <option>Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select> */}

        <Select>
          <SelectTrigger className="w-full md:w-[100px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Types</SelectLabel>
              <SelectItem value="Physical">Physical</SelectItem>
              <SelectItem value="Digital">Digital</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <input
          type="number"
          name="min"
          placeholder="Min Price"
          className="text-xs rounded-md p-2 w-full md:w-24 ring ring-gray-200"
        />
        <input
          type="number"
          name="max"
          placeholder="Max Price"
          className="text-xs rounded-md p-2 w-full md:w-24 ring ring-gray-200"
        />

        <Select>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Size</SelectLabel>
              <SelectItem value="Physical">Physical</SelectItem>
              <SelectItem value="Digital">Digital</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Color</SelectLabel>
              <SelectItem value="Physical">Physical</SelectItem>
              <SelectItem value="Digital">Digital</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[110px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="Physical">Physical</SelectItem>
              <SelectItem value="Digital">Digital</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[110px]">
            <SelectValue placeholder="All Filters" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>All Filters</SelectLabel>
              <SelectItem value="Physical">Physical</SelectItem>
              <SelectItem value="Digital">Digital</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort By</SelectLabel>
              <SelectItem value="lowtohigh">Price (low to high)</SelectItem>
              <SelectItem value="hightolow">Price (high to low)</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div></div>
    </div>
  );
};

export default Filter;
