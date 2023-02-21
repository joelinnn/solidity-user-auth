import type { NextPage } from "next";
import { ConnectWallet } from "@thirdweb-dev/react";
import { LoginButton } from "@/components";


const Home: NextPage = () => {
  return (
    <>
      Hello
      <LoginButton/>
    </>
  );
};

export default Home;
