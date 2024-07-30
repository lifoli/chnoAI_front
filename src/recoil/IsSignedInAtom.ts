import { atom } from "recoil";

export const isSignInAtom = atom<boolean>({
  key: "IsSignedInAtom",
  default: false,
});
