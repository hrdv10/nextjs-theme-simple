import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const profile = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Link href="/">
        <Avatar className="w-[100px] h-[100px]">
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
      </Link>
      <h1 className="font-semibold mt-2 py-2.5 text-xl font-heading">
        hrdv10
      </h1>
      <p className="text-neutral-500">Generative AI Platform Engineer</p>
    </div>
  );
};

export default profile;
