import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 tex-sm py-12">
      {/* TOP */}
      <div
        className="flex flex-col md:flex-row justify-between gap-24
      "
      >
        {/* LEFT */}
        <div className="w-full flex flex-col gap-8 md:w-1/2 lg:w-1/4">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl tracking-wide"
          >
            <Image
              src="/shop.png"
              alt="menu"
              height={24}
              width={24}
              className="cursor-pointer"
            />
            Urban Thead
          </Link>
          <p>Danish Sheikh, Bhavnagar, Gujarat, 364001</p>
          <span className="font-semibold">danish@urbanthread.co</span>
          <span className="font-semibold">+91 937XXXXXXX</span>
          <div className="flex items-center gap-6">
            <Image
              src="/facebook.png"
              alt=""
              height={40}
              width={20}
              className="cursor-pointer"
            />
            <Image
              src="/instagram.png"
              alt=""
              height={40}
              width={20}
              className="cursor-pointer"
            />
            <Image
              src="/youtube.png"
              alt=""
              height={40}
              width={20}
              className="cursor-pointer"
            />
            <Image
              src="/pinterest.png"
              alt=""
              height={40}
              width={20}
              className="cursor-pointer"
            />
            <Image
              src="/x.png"
              alt=""
              height={40}
              width={20}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href="/" className="text-sm tracking-wide">
                About Us
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Careers
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Gift Vouchers
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Community Initiatives
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Souled Army
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold">More Info</h1>
            <div className="flex flex-col gap-6">
              <Link href="/" className="text-sm tracking-wide">
                T & C
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Privacy Policy
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Site Map
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Blogs
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold">Stores</h1>
            <div className="flex flex-col gap-6">
              <Link href="/" className="text-sm tracking-wide">
                Mumbai
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Ahmedabad
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Surat
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Pune
              </Link>
              <Link href="/" className="text-sm tracking-wide">
                Chennai
              </Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
          <h1 className="font-semibold text-lg underline">SUBSCRIBE!</h1>
          <p className="">
            Get timely updates and stay ahead of the curve with offers and
            deals!
          </p>
          <div className="flex gap-4 h-10">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-4 w-3/4 rounded-md"
            />
            <button className="w-1/4 bg-primary text-white rounded-md">
              Join!
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex items-center gap-6">
            <Image src="/paypal.png" alt="" height={40} width={28} />
            <Image src="/mastercard.png" alt="" height={40} width={28} />
            <Image src="/visa.png" alt="" height={40} width={28} />
            <Image src="/skrill.png" alt="" height={40} width={28} />
            <Image src="/discover.png" alt="" height={40} width={28} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between  gap-8 mt-16 text-left">
        <div>© 2024 Urban Thread</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">India | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">₹ INR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
