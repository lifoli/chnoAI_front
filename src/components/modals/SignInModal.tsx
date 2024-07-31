"use client";

import { Button, Modal } from "flowbite-react";
import { useRecoilState } from "recoil";
import { isSignInModalOpenAtom } from "../../recoil/modalAtoms";
import { LoginModalTheme } from "../../theme/loginModalTheme";

export function SignInModal() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useRecoilState(
    isSignInModalOpenAtom,
  );

  function onCloseModal() {
    setIsSignInModalOpen(false);
  }

  return (
    <>
      <Modal
        theme={LoginModalTheme}
        show={isSignInModalOpen}
        size="md"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header className="" />
        <Modal.Body>
          <div className="flex flex-col items-center space-y-6">
            <img
              src="src/assets/images/Chno_logo2.png"
              alt="Chno logo"
              className="h-auto w-24 pt-8"
            />
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-light text-gray-900 dark:text-white">
                Sign up now and try unlimited
              </h3>
              <div className="flex space-x-1">
                <h3 className="text-lg font-light text-gray-900 dark:text-white">
                  summarization for free
                </h3>
                {/* <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  unlimitedly for free!
                </h3> */}
              </div>
            </div>

            <div className="py-12 ">
              <Button className="flex w-96 items-center justify-center border border-[#E4E4E7] bg-white py-2 hover:bg-[#F7F7F7]">
                <img
                  src="src/assets/images/GoogleLogo.png"
                  alt="Google Logo"
                  className="mr-2 size-7"
                />
                <h5 className="text-lg font-light text-black">
                  Start with Google Account
                </h5>
              </Button>
            </div>
            <div>
              <h6 className="text-xs font-light text-[#A1A1AA]">
                By logging in, you agree to all the policies below.
              </h6>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              <a
                href="#"
                className="font-regular text-xs text-[#A1A1AA] hover:underline dark:text-cyan-500"
              >
                Team of Service
              </a>
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
              <a
                href="#"
                className="font-regular text-xs text-[#A1A1AA] hover:underline dark:text-cyan-500"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
