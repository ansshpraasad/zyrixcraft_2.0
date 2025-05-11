import './NavBar.css'; 

function NavBar() {
    return (
        <div className="  navbar-container fixed z-100 top-23 right-6 min-w-[50px]  flex flex-col justify-between items-end gap-5 text-white font-mono text-xl font-normal ">
            
            <a href="#home" className="pseudo-text-effect  " data-after="Home">
                <span>Home</span>
            </a>
            <a href="#services" className="pseudo-text-effect" data-after="Services">
                <span>Services</span>
            </a>
            <a href="#portfolio" className="pseudo-text-effect" data-after="Portfolio">
                <span>Portfolio</span>
            </a>
            <a href="#contact" className="pseudo-text-effect " data-after="Contact Us">
                <span >Contact Us</span>
            </a>
        </div>
    );
}

export default NavBar;