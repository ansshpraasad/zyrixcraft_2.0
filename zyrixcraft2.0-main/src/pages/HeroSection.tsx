import { useState } from "react";
import HeroSectionLeftText from "../components/HeroSectionLeftText";
import HeroSectionStripOne from "../components/HeroSectionStripOne";
import HeroSectionStripTwo from "../components/HeroSectionStripTwo";
import HeroSectionTopLeftText from "../components/HeroSectionTopLeftText";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import '../style/HeroSection.css';
import { RxHamburgerMenu } from "react-icons/rx";
interface HeroSectionProps {
  setOverlay: (value: boolean) => void;
}
import logo from "../assets/ZyrixcraftLogo.webp";
const HeroSection: React.FC<HeroSectionProps> = ({ setOverlay }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavBar = () => {
    console.log("hoiii")
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-screen pb-5 md:pb-0 overflow-hidden flex flex-col items-center justify-center px-4 md:px-8 relative ">
      <div className="image-cover bg-no-repeat brightness-50 z-0 md:top-37 md:left-28   absolute">
        <img src={logo} alt="Temp" className=" md:w-2xs " />
      </div>
      <div onClick={handleNavBar} className=" z-100 block fixed top-5 right-[1em] text-2xl md:hidden  text-white  "> 
      <RxHamburgerMenu />
      </div>
      <Button setOverlay={setOverlay} />
      
       {/* Desktop Nav */}
       <div className="hidden md:block">
        <NavBar />
      </div>

      {/* Mobile Nav (conditionally rendered) */}
      {isOpen && (
        <div className="block md:hidden absolute top-12 right-0 w-full bg-black text-white z-50">
          <NavBar />
        </div>
      )}
      <div className="  z-10 absolute top-1/3  ">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight  ">
          <span className="text-white">We</span>
          <span className="text-white/60"> Transform</span>
          <span className="text-white/60"> Ideas</span>
        </h1>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 sm:mt-8 text-left text-white font-medium">
          Into Impactful Digital
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 sm:mt-8 text-left text-white font-medium">
          Experiences.
        </p>
      </div>
      <HeroSectionTopLeftText />
      <HeroSectionLeftText />
      <div className="btm-banner  ">
        <HeroSectionStripOne />
      </div>
      <div className="hidden md:block">

        <HeroSectionStripTwo />

      </div>
    </div>
  );
};
export default HeroSection;
