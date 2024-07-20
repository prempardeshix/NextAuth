import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";
export default async function () {
  const result = await getServerSession(NEXT_AUTH);
  return <div>{JSON.stringify(result)}</div>;
}
   