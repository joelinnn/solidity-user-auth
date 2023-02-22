import type { PrismaClient } from "@prisma/client"

declare global {
  namespace globalThis {
    var prisma: PrismaClient
  }
}

declare interface RegisterUserProps {
  name: string;
  email: string;
  password: string;
  cnic?: number;
  register: boolean;
}