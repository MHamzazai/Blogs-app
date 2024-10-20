"use client";
import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'
import Image from "next/image";
import logo from "../../app/public/photos/logo.jpg";
import Link from "next/link";

export default function Header() {
    const [isClick, setisClick] = useState(false);
    const toggleNavbar = (): void => {
        setisClick(!isClick);
    }
    return (
        <main>
            <nav className="bg-black border-x-2 shadow-slate-950 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Image src={logo} alt="Logo" width={70} height={100} className="" />
                            </div>

                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-8 lg:space-x-16">
                                <Link href={"https://github.com/mhamzazai/"} className="text-white hover:bg-white
                              hover:text-black transition-all rounded-sm
                                md:rounded-none md:hover:scale-110 md:hover:underline
                              md:hover:bg-black md:hover:text-white md:text-xl lg:hover:text-2xl lg:hover:font-thin">
                                    Go To GitHub
                                </Link>
                                <Link href={"https://www.npmjs.com/~mhamzazai"} className="text-white hover:bg-white
                                 hover:text-black transition-all rounded-sm
                                md:rounded-none md:hover:scale-110 md:hover:underline
                              md:hover:bg-black md:hover:text-white md:text-xl lg:hover:text-2xl lg:hover:font-thin">
                                    Go To Npm
                                </Link>
                                <Link href={"/About"} className="text-white
                                 hover:bg-white hover:text-black transition-all rounded-sm
                                md:rounded-none md:hover:scale-110 md:hover:underline
                              md:hover:bg-black md:hover:text-white md:text-xl lg:hover:text-2xl lg:hover:font-thin">
                                    About MySelf
                                </Link>
                                <Link href={"/"} className="text-white hover:bg-white
                                 hover:text-black transition-all rounded-sm
                                md:rounded-none md:hover:scale-110 md:hover:underline
                              md:hover:bg-black md:hover:text-white md:text-xl lg:hover:text-2xl lg:hover:font-thin">
                                    Home
                                </Link>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-3
                     rounded-md text-white md:text-white hover:text-white focus:outline-none
                     focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}
                            >
                                {isClick ? (<i className="ri-close-fill text-2xl transition-all"></i>) : (<i className="ri-menu-line text-xl transition-all"></i>)}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-3 sm:px-4 flex flex-col text-center bg-slate-950">
                            <Link href="https://github.com/mhamzazai/" className="text-white hover:bg-white hover:text-black
                               rounded-sm hover:scale-95 transition-all text-xl font-semibold font-sans border bg-black">
                                Go To GitHub
                            </Link>
                            <Link href="https://www.npmjs.com/~mhamzazai" className="text-white hover:bg-white hover:text-black
                                rounded-sm text-xl hover:scale-95 transition-all font-semibold font-sans border bg-black">
                                Go To Npm
                            </Link>
                            <Link href="/About" className="text-white hover:bg-white hover:text-black
                                rounded-sm text-xl hover:scale-95 transition-all font-semibold font-sans border bg-black">
                                About MySelf
                            </Link>
                            <Link href="/" className="text-white hover:bg-white hover:text-black
                                rounded-sm text-xl hover:scale-95 transition-all font-semibold font-sans border bg-black">
                                Home
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </main>
    )
}