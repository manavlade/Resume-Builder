"use client"

import Resume from "@/components/Resume";
import HomePage from "@/components/ui/Home";
import Navbar from "@/components/ui/Navbar";

import Snowfall from "react-snowfall";

export default function Home() {

  const SnowfallBG = () => {
    return (
      <Snowfall
        // Changes the snowflake color
        color="#fff"
        //   Mange the radius of the snow dit 
        radius={[0.5, 0.8]}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
    );
  };

  return (
    <main style={{ position: 'relative' }} >
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <SnowfallBG />
      </div>
      <Navbar/>
      <HomePage/>
      <Resume/>
      {/* Resume
      CV
     portfolio generator */}
    </main>
  );
}
