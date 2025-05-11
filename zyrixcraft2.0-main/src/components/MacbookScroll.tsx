"use client";
// import Logo from "../assets/ZyrixcraftLogo.webp";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { cn } from "../lib/utils";
import '../App.css'
// import {
//   IconBrightnessDown,
//   IconBrightnessUp,
//   IconCaretRightFilled,
//   IconCaretUpFilled,
//   IconChevronUp,
//   IconMicrophone,
//   IconMoon,
//   IconPlayerSkipForward,
//   IconPlayerTrackNext,
//   IconPlayerTrackPrev,
//   IconTable,
//   IconVolume,
//   IconVolume2,
//   IconVolume3,
// } from "@tabler/icons-react";
// import { IconSearch } from "@tabler/icons-react";
// import { IconWorld } from "@tabler/icons-react";
// import { IconCommand } from "@tabler/icons-react";
// import { IconCaretLeftFilled } from "@tabler/icons-react";
// import { IconCaretDownFilled } from "@tabler/icons-react";
import src from '../assets/DashBoard.jpg'
import Laptop from '../assets/Laptop.png'
export const MacbookScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const rotatingWords = ["web", "UI", "graphics", "Creativity", "Strategy"];

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const [index, setIndex] = useState(0);
  // const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // setFade(false); // start fade-out

      setTimeout(() => {
        // after fade-out complete, update index and fade in
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        // setFade(true);
      }, 1000); // fade duration
    }, 3000); // full cycle (fade-out + change + fade-in)

    return () => clearInterval(timer);
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 2.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.8]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);

  return (
    <div
      ref={ref}
      className="flex shrink-0 transform flex-col items-center justify-start py-0 
             min-h-[120vh] scale-[0.6] [perspective:800px] 
             sm:min-h-[180vh] sm:scale-[0.7] 
             md:min-h-[280vh] md:scale-100 md:py-80">

      <div className="text-[23px] w-[200vw]  text-white absolute -top-35 -left-15  md:top-56 md:left-[25%]   md:text-3xl font-semibold flex gap-2 ">
        <span>Designing the future of your brand with</span>

        <span
          className={` text-orange-600 transition-opacity duration-1000 `}
        >
          {'{'}{rotatingWords[index]}{'}'}
        </span>

        <span>.</span>
      </div>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate} />

    </div>
  );
};


type Lid = {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  src: string;
};
export const Lid: React.FC<Lid> = ({ scaleX, scaleY, rotate, translate, src }) => {
  return (
    <div className="relative mx-auto flex justify-center items-center [perspective:800px] w-full max-w-[90vw]">
      {/* Laptop Image */}
      <img
        src={Laptop}
        alt=""
        className="w-full max-w-[41em] h-auto relative -top-7"
      />

      {/* Lid Display */}
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 mx-auto h-96 w-full max-w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <img
          src={src}
          alt="aceternity logo"
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
        />
      </motion.div>
    </div>
  );
};

