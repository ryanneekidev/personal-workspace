import { UserButton } from "@clerk/nextjs";

export default function Private() {
  return (
    <>
      <UserButton />
      This is the private page!
    </>
  );
}
