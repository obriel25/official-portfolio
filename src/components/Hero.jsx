import photo from "../assets/photo.png"
import mycv from "../assets/mycv.pdf"
const Hero = () => {
    return(
        <section  className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-950 text-white px-6 mt-16">
            <img src={photo} alt="profilephoto" className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-blue-400" />
            <h1 className="text-5xl font-bold mb-4">Hi,I'm Jefferson Obriel.</h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">I'm a beginner web developer who love building things.</p>
            <div className="flex gap-6">
                  <a href="#project" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition">View my work</a>
                  <a href={mycv} className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-6 py-3 rounded-lg transition">Download CV</a>
            </div>
          
        </section>
    )
}

export default Hero;