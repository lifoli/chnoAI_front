import type { CustomFlowbiteTheme } from "flowbite-react";

export const SidebarCustomTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      base: "h-full bg-gray-800",
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded bg-[#1E202A] py-4 px-3",
      collapsed: {
        on: "w-16",
        off: "w-60",
      },
    },
    item: {
      base: "flex items-center justify-center rounded-lg py-2 text-base font-normal text-[#9EA7B0] hover:bg-gray-700 hover:text-white",
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-[#9EA7B0] transition duration-75 group-hover:text-white",
        active: "text-white",
      },
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-gray-700 pt-4 first:mt-0 first:border-t-0 first:pt-0",
    },
    logo: {
      base: "flex items-center",
      collapsed: {
        on: "hidden",
        off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
      },
      img: "mr-1 sm:h-5 rounded",
    },
  },
  button: {
    color: {
      gray: "text-[#9EA7B0] bg-[#1E202A] hover:bg-gray-700 hover:text-white focus:ring-gray-700",
    },
  },
};

// 별도의 아이콘 테마 정의
export const iconTheme = {
  size: "w-6 h-6",
  color: "#9EA7B0",
  hoverColor: "white",
};
