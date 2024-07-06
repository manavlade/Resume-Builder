"use client"

import Image from "next/image";
import ResumeImg from "@/public/next.svg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Button } from "./button";

const HomePage = () => {

    const typedRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
                'Resume Builder',
                'Cover Letter',
                'Portfolio Website'
            ],
            typeSpeed: 90,
            backSpeed: 50,
            loop: true,
        };
        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div className="flex m-10 md:m-20 flex-col md:flex-row m">
                <div className="m-5">
                    <div className="text-2xl md:text-7xl md:mt-20">
                        <b>
                            Unlock Your Success Journey:
                            Elevate Your Profile with  Compelling:
                            <span className="text-3xl md:text-7xl pl-5 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent"
                                ref={typedRef} />
                        </b>
                        <div className=" items-center justify-center" >
                            <Button variant="premium" className=" text-2xl md:text-3xl h-15 mt-5" >
                                Build Your Resume
                            </Button>
                            <Button variant="premium" className=" text-1xl md:text-3xl h-15 mt-5 md:ml-7" >
                                Build Your Portfolio
                            </Button>
                        </div>
                    </div>
                    <p className=" mt-10" >
                        Our Resume's got selected in Companies like 
                       <span className=" text-4xl p-5" >
                         Google, Microsoft, Apple
                       </span>
                    </p>


                </div>
                <div className="flex justify-center m-5">
                    <Image
                        src={ResumeImg}
                        width={1000}
                        height={1000}
                        alt="Resume Image"
                    />
                </div>
            </div>

        </>
    )
}
export default HomePage;

