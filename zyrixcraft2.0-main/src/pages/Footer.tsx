
import Orb from '../components/Orb';
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import TextPressure from "../components/TextPressure";
const Footer = ({ setOverlay }) => {
    const socialLinks = [
        {
            icon: FaInstagram,
            label: "Instagram",
            link: "https://www.instagram.com/zyrixcraft?igsh=dWE0d2Vwbmx4NjBm",
        },
        { icon: FaGithub, label: "Github", link: "https://github.com/zyrixcraft" },
        { icon: FaWhatsapp, label: "Whatsapp", link: "https://wa.me/919711625392" },
        {
            icon: FaLinkedin,
            label: "LinkedIn",
            link: "https://www.linkedin.com/company/zyrixcraft/posts/?feedView=all",
        },
    ];

    return (
        <div
            id="footer"
            className="w-screen min-h-[80vh] flex flex-col items-center pt-16 user-select-none  pb-10 "
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            {/* Heading and Socials */}
            <div className="fixed bottom-0 w-full">
                <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
                    <div className="flex justify-center w-full">
                        <div className='w-full'>

                            <TextPressure
                                text="Zyrixcraft"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#ffffff"
                                strokeColor="#ff0000"
                                minFontSize={36}
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-row items-center justify-center gap-x-6 text-[14px] tracking-[0.2em] font-mono text-white">
                        {socialLinks.map(({ icon: Icon, label, link }, idx) => (
                            <a
                                key={idx}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-blue-400 transition-colors "
                            >
                                <Icon size={22}  />
                                <span className='hidden md:block'>{label}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Main Footer Content Container */}
                <div className="w-full  pb-5 pl-[2em] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start mt-10 px-4">
                    {/* Contact Us (left) */}
                    <div className="text-left md:text-left">
                        <h2 className="text-xl font-bold mb-6 text-white">Contact us</h2>
                        <div className="space-y-4 text-white text-sm">
                            <p>
                                <span>Email: </span>
                                <a href="mailto:zyrixcraft@gmail.com" className="underline">
                                    zyrixcraft@gmail.com
                                </a>
                            </p>
                            <p>
                                <span>Phone: </span>
                                <a href="tel:+91971162592" className="underline">
                                    +91 97116 25392
                                </a>
                            </p>
                            <p>
                                New Delhi - 110044, Near Union Bank<br />
                                Said Village
                            </p>
                        </div>
                    </div>

                    {/* Orb (center) - hidden on mobile */}
                    <div className="hidden md:flex flex-col items-center justify-center my-8 md:my-0">
                        <div style={{ width: '220px', height: '220px', position: 'relative' }}>
                            <Orb
                                hoverIntensity={0.5}
                                rotateOnHover={true}
                                hue={0}
                                forceHoverState={false}
                                setOverlay={setOverlay}
                            />
                        </div>
                    </div>

                    {/* Quick Links (right) */}
                    <div className="text-left md:text-right mt-8 md:mt-0">
                        <h2 className="text-xl font-bold mb-6 text-white">Quick Links</h2>
                        <div className="space-y-4 text-white text-sm">
                            <a href="#home" className="block hover:underline">Home</a>
                            <a href="#services" className="block hover:underline">Services</a>
                            <a href="#Portfolio" className="block hover:underline">Portfolio</a>
                            <a href="#latest-cases" className="block hover:underline">Latest Cases</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;