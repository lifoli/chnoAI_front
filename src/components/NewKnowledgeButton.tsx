import React from "react";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";

export default function NewKnowledgeButton({ isCollapsed }) {
  return (
    <div className=" flex items-center justify-center py-3">
      <Button
        color="light"
        className=" my-3 flex w-full items-center rounded-lg border border-gray-300 px-6 py-0 shadow-sm hover:bg-gray-100"
      >
        <HiPlus className="size-5 text-[#A1A1AA]" />
        <span className="text-[#A1A1AA]">Add knowledge</span>
      </Button>
    </div>
  );
}
