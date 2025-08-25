import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  const user = session!.user!;

  return <h1>hi {user.name!}</h1>;
}
