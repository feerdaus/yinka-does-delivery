import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <nav>
      <div className="bg-white flex items-center justify-between max-w-screen-xl px-10 mx-auto h-16">
        <Link href="/" className="flex items-center">
          <Image src="/logo.jpg" alt="logo" width={40} height={40} />
          <p className="ml-3">Yinka Does Delivery</p>
        </Link>
        <div className="flex items-center text-sm">
          <div className="hidden md:flex items-center">
            <Link className="ml-5" href="/">
              <button className="rounded-md py-2 px-3 border-b-4 border-dark-green bg-green text-white font-medium">
                Ship A Parcel
              </button>
            </Link>
            <Link href="/">
              <p className="ml-5">Track Parcel</p>
            </Link>
          </div>
          <Link className="ml-5" href="/">
            <button className="rounded-full py-2 px-4 bg-grey hover:bg-grey-50">
              Sign In &rarr;
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
