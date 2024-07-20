import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "E-Mail",
      credentials: {
        username: {
          label: "E-Mail",
          type: "text",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "xyz@123",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        return {
          id: "1",
          name: "prem",
          email: "prempardeshi@gmail.com",
          //   username: credentials.username,
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token }: any) => {
      // console.log("start", token, "br");
      token.userId = token.sub;
      return token;
    },
    session: ({ session, token }: any) => {
      console.log("start", session, "br");
      if (session && session.user) {
        console.log(token.userId);
        session.user.id = token.userId;
      }
      console.log(session, "end");
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
