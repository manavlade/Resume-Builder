"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";

const fonts = Poppins({
    weight: "400",
    subsets: ["latin"],
    style: "italic",
});

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <div>
                <nav
                    className={cn(
                        "gap-3 text-2xl h-20 flex justify-between items-center text-purple-500",
                        fonts.className
                    )}
                >
                    <div className="pl-1 flex items-center">
                        <h3>RCV Builder</h3>
                        img
                    </div>

                    <div className="hidden md:flex gap-5">
                        <a href="#">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Resume</a>
                        <a href="#">CV</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Connect</a>
                    </div>
                    <div className="hidden md:flex font-medium space-x-3">
                        <Button
                            variant="outline"
                            className="text-purple-500 text-2xl">
                            Sign In
                        </Button>
                        <Button
                            variant="premium"
                            className=" text-2xl">
                            Create Account
                        </Button>
                    </div>
                    <Button className="p-2 md:hidden" onClick={handleToggle}>
                        {isToggled ? <X /> : <AlignJustify />}
                    </Button>
                    {/* <ModeToggle /> */}
                </nav>
            </div>
            <div
                className={cn(
                    "fixed bg-white inset-0 p-3  transform md:hidden transition-transform duration-1000",
                    isToggled ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex justify-between">
                    <h3>RCV Builder</h3>
                    <Button className="p-2" onClick={handleToggle}>
                        <X />
                    </Button>
                </div>
                <div className="flex flex-col gap-5 mt-4">
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Resume</a>
                    <a href="#">CV</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Connect</a>
                    <Button variant="outline" className="text-purple-500">
                        Sign In
                    </Button>
                    <Button variant="premium">Create Account</Button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
