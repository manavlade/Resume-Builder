"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

import { AlignJustify } from 'lucide-react';

const fonts = Poppins({
    weight: "400",
    subsets: ["latin"],
    style: "italic"
});
const Navbar = () => {

    return (
        <>
            <div>
                <nav className={cn( 'gap-3 text-lg h-14 flex justify-between items-center ', 
                    fonts.className
                )}>
                    <div className=" pl-1 flex items-center" >
                        <h3>RCV Builder </h3>
                        img 
                    </div>
                    
                    <div className=" hidden md:flex gap-5 ">
                        <a href="#">Home</a>
                        <a href="#">About us </a>
                        <a href="#">Resume</a>
                        <a href="#">CV</a>
                        <a href="#">Portfolio </a>
                        <a href="#">Connect</a>
                    </div>
                    <div className=" hidden md:block font-medium  space-x-3 ">
                        <Button
                            variant="outline"
                            className=" text-purple-500"
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="premium"
                        >
                            Create Account
                        </Button>
                    </div>
                    <Button className="p-2 md:hidden"  >
                        <AlignJustify/>

                    </Button>
                </nav>
            </div>
        </>
    )
}
export default Navbar;