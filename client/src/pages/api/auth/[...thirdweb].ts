import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import prisma from "@/prisma/client"

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: process.env.NEXT_PUBLIC_DOMAIN || "",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_KEY || ""),
  callbacks: {
    onLogin: async ({ username, password, address, email }: any) => {

      const userInfo = await prisma.user.findFirst({
        where: {
          address: address
        }
      })

      if (!userInfo) {
        await prisma.user.create({
          data: {
            username: username,
            password: password,
            email: email,
            address: address
          }
        })
      }
    }
  }
});

export default ThirdwebAuthHandler();