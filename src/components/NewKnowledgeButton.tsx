import React from "react";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";

export default function NewKnowledgeButton({ isCollapsed }) {
  return (
    <div className=" flex items-center justify-center px-2 pt-3">
      <Button
        color="light"
        className=" my-2 flex w-full items-center rounded-lg border border-gray-700 px-6 py-0 shadow-sm hover:bg-gray-700 hover:text-white focus:ring-gray-700 "
      >
        <HiPlus className="size-5 text-[#A1A1AA]" />
        <span className="font-light text-[#A1A1AA]">Add knowledge</span>
      </Button>
    </div>
  );
}
