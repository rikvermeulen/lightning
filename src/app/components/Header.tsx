import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 z-10 w-full">
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        <Link href="/" className="flex items-center text-xl font-bold tracking-[-0.02em] ">
          <Image
            src="/images/favicons/icons-192x192.png"
            alt="Lightning logo"
            width="20"
            height="20"
            className="mr-2 rounded-sm"
          ></Image>
          <p className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent">
            Lightning
          </p>
        </Link>
      </div>
    </header>
  );
}
