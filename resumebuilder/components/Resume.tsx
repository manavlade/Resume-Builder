"use client";
import React from 'react';
import reImg from "@/public/resumepage.jpg";
import Image from 'next/image';


const Resume = () => {
    return (
        // <div style={{ position: 'relative' }}>
        <div>
            {/* <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <SnowfallBG />
            </div> */}
            <div className=' m-10' >
                <h3 className=' text-center text-3xl md:mt-28' >
                    Resume
                </h3>
                <div className=' text-3xl flex pt-5' >
                    <p>Make Your Mark: Create a Resume That Shows Your Skills!</p>
                    <div>
                        <Image className=' md:ml-36'
                            src={reImg}
                            height={500}
                            width={500}
                            alt='Example Image'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;