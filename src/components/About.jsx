import photo from "../assets/aboutpic.png"

const About = () => {
    return(
        <section id="about" className="min-h-screen flex flex-col md:flex-row justify-center items-center  gap-12 px-8 py-20 bg-gray-900 text-white">
           
            <div className="max-w-lg">
                 <h1 className="text-4xl font-bold mb-4">About <span className="text-blue-400">Me</span></h1>
                <img src={photo} alt="Jefferson obriel" className="w-48 h-48 mb-2 rounded-full object-cover border-4 border-blue-400" />
           <div>
             <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I am a student and aspiring web developer currently learning HTML, CSS, JavaScript, React, and Tailwind CSS. 
                I enjoy creating responsive and interactive websites that solve real problems. 
                I love learning new technologies and improving my coding skills through projects and practice. 
                My goal is to become a professional full-stack developer and work on impactful digital products.
            </p>
           </div>

            <div className="flex flex-wrap gap-3">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Tailwindcss</span>
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">React.js</span>
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">HTML & CSS</span>
            </div>
            </div>
            
        </section>
    )
}

export default About;