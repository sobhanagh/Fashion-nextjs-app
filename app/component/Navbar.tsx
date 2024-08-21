"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const Links = [
        { title: "HOME", address: "/" },
        { title: "SHOP", address: "/" },
        { title: "FEATURS", address: "/" },
        { title: "CONACT", address: "/" }
    ]

    const showLinks = () => {
        const ul = document.querySelectorAll("ul");

        if (ul[1]?.classList.contains("max-h-0")) {
            ul[1].classList.replace("max-h-0", "max-h-96")
        }
        else {
            ul[1]?.classList.replace("max-h-96", "max-h-0")
        }
    }

    return (
        <div className="p-5 flex items-center justify-between flex-wrap sm:flex-nowrap lg:px-20">
            <Link href="/">
                <Image src={"/Rivo.svg"} width={50} height={50} alt="Rivo"
                    className="lg:size-14"
                />
            </Link>
            <ul className="hidden sm:flex items-center gap-10 lg:text-lg z-10">
                {
                    Links.map((link) => {
                        return (
                            <Link href={link.address} key={link.title}
                                className="hover:underline underline-offset-8 decoration-green-800 transition-all duration-300"
                            >
                                {link.title}
                            </Link>
                        )
                    })
                }
            </ul>
            <div className="flex items-center gap-3 text-sm lg:text-lg">
                <Image src={"/shop_icon.svg"} width={30} height={30} alt="shop" />
                <Link href="#">
                    <button className="border-green-700 border-2 px-2 py-1 lg:px-4">LOGIN</button>
                </Link>
                <svg onClick={showLinks} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 sm:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <ul className="flex flex-col sm:flex-row w-full max-h-0 overflow-hidden transition-all duration-300 mt-3 gap-1 sm:hidden">
                {
                    Links.map((link) => {
                        return (
                            <Link href={link.address} key={link.title}>
                                {link.title}
                            </Link>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default Navbar
