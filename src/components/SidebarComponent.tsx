// src/components/SidebarComponent.tsx

import { Button, Sidebar, Flowbite } from "flowbite-react";
import { HiMenu, HiX } from "react-icons/hi";
import Chno_logo from "../assets/images/Chno_logo.png";
import { SidebarCustomTheme } from "../theme/customFlowbiteTheme";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { BookIcon } from "../assets/icons/BookIcon";
import NewKnowledgeButton from "./NewKnowledgeButton";
import SignInButton from "./SignInButton";
import { isSidebarCollapsedAtom } from "../recoil/IsSidebarCollapesd";
import { useRecoilState } from "recoil";

export function Component() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useRecoilState(
    isSidebarCollapsedAtom,
  );

  const onClick2 = () => {
    console.log("clicked");
  };

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <Flowbite theme={{ theme: SidebarCustomTheme }}>
      <div className="flex">
        <div className="relative">
          <Sidebar
            aria-label="Sidebar with custom theme"
            collapsed={isSidebarCollapsed}
            className={`fixed left-0 top-0 z-40 h-screen`}
          >
            <div className="flex h-5 items-center justify-between">
              <Sidebar.Logo
                href="/"
                img={Chno_logo}
                imgAlt="Chno logo"
                className="flex items-center"
              >
                {!isSidebarCollapsed && (
                  <span className="ml-0 text-[#9EA7B0]">Chno</span>
                )}
              </Sidebar.Logo>
              <Button color="gray" className="" onClick={onClick2}>
                <HiX className="size-4" />
              </Button>
            </div>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <NewKnowledgeButton />
                <Sidebar.Item href="/home" icon={HomeIcon}>
                  Home
                </Sidebar.Item>
                <Sidebar.Item href="/dashboard" icon={BookIcon}>
                  My knowledge
                </Sidebar.Item>
                {isSidebarCollapsed ? null : <SignInButton />}
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>

          {isSidebarCollapsed ? (
            <Button
              color="gray"
              pill
              size="sm"
              onClick={toggleSidebar}
              className={`fixed top-5 z-50 border border-gray-600  ${
                isSidebarCollapsed ? "left-12" : "left-60"
              }`}
            >
              <HiMenu className="size-5 " />
            </Button>
          ) : (
            <Button
              color="gray"
              pill
              size="sm"
              onClick={toggleSidebar}
              className={`fixed top-5 z-50  ${
                isSidebarCollapsed ? "left-12" : "left-60"
              }`}
            >
              <HiX className="h-5 w-5 " />
            </Button>
          )}
        </div>
        <div className={`flex-1 p-4 ${isSidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>This is where your main content goes.</p>
        </div>
      </div>
    </Flowbite>
  );
}
