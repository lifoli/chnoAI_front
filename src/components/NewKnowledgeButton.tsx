import React from "react";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { isSidebarCollapsedAtom } from "../recoil/IsSidebarCollapesd";
import { useRecoilValue } from "recoil";

export default function NewKnowledgeButton() {
  const isSidebarCollapsed = useRecoilValue(isSidebarCollapsedAtom);

  return (
    <div className=" flex items-center justify-center px-3 pt-3">
      {isSidebarCollapsed ? (
        <Button
          color="light"
          className=" my-3 flex w-full items-center rounded-lg border border-gray-700 px-4 py-0 shadow-sm hover:bg-gray-700 hover:text-white focus:ring-gray-700 "
        >
          <HiPlus className="size-4 text-[#A1A1AA]" />
        </Button>
      ) : (
        <Button
          color="light"
          className=" my-2 flex w-full items-center rounded-lg border border-gray-700 px-6 py-0 shadow-sm hover:bg-gray-700 hover:text-white focus:ring-gray-700 "
        >
          <HiPlus className="size-4 text-[#A1A1AA]" />
          <span className="font-light text-[#A1A1AA]">Add knowledge</span>
        </Button>
      )}
    </div>
  );
}
