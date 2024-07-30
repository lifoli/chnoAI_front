import { Button } from "flowbite-react";

export default function LoginButton() {
  return (
    <div className=" flex items-center justify-center px-3 py-0">
      <Button className=" my-2 flex w-full items-center rounded-lg bg-[#4833CA] px-6 py-0 shadow-sm hover:bg-gray-700 hover:text-white focus:ring-gray-700 ">
        <span className="text-base font-light text-white">Sign in/Sign up</span>
      </Button>
    </div>
  );
}
