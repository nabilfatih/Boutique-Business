import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { number } from "yup";

declare module "next-auth" {
  interface Session {
    user: any;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    idToken?: string | number;
  }
}
