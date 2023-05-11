import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2 className="my-12 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Vela Partners Blog
        </Link>
      </h2>
    </header>
  );
};

export default Header;
