import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { LoginButton } from "@/components";

const Home: NextPage = () => {
  return (
    <>
    <LoginButton/>
    Hello World
    </>
  );
};

export default Home;
