import Image from "next/image";

export default function AuthorAvatar(props) {
  const { name, picture } = props;

  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-10 w-10">
        <Image
          src={picture ? picture : "https://source.unsplash.com/96x96/?face"}
          className="rounded-full"
          height={80}
          width={80}
          alt="Author Avatar"
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
