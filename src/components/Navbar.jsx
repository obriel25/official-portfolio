const Navbar = () => {
 return(
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
        <h1 id="hero" className="text-2xl font-bold hover:text-blue-400 transition"><a href="#hero">JO</a></h1>
        <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#project"className="hover:text-blue-400">Project</a></li>
            <li><a href="#contact"className="hover:text-blue-400">Contact</a></li>
        </ul>
    </nav>
 );
}

export default Navbar;