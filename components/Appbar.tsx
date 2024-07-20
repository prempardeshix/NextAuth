"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function () {
  const router = useRouter();
  const session = useSession(); 
  return (
    <div className="flex justify-around align-middle">
      <button
        onClick={() => {
          //   router.push("/api/auth/signin");
          signIn();
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          //   router.push("/api/auth/signin");
          signOut();
        }}
      >
        Logout
      </button>

      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
