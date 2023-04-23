import { FormEvent } from "react";
import CuiButton from "../button/cui-button";

export const SignOut = ({
  signOutFn,
}: {
  signOutFn: (e: FormEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <CuiButton
      onClick={signOutFn}
      hoverColor="#000"
      hoverBgColor="#ccc"
      color="#000"
      bgColor="#fff"
      disabled={false}
    >
      Sign Out
    </CuiButton>
  );
};
