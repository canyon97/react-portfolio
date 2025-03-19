import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const About = () => {

    const frontendSkills = [
        "React",
        "Vue",
        "Typescript",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI"
    ];

    const backendSkills = [
        'Node.js',
        'Python',
        'Google Cloud',
        'MySQL',
        'MariaDB'
    ]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    {/* Frontend Section */}
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate developer with expertise in building scalable full stack web application and creating innovative, elegant solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((skill, index) => (
                                        <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Backend Section */}
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate developer with expertise in building scalable full stack web application and creating innovative, elegant solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((skill, index) => (
                                        <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                            <ul>
                                <li className="text-gray-300 mb-2"><strong>B.S. in Electrical and Computer Engineering</strong>- University of Texas at Austin</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}

export default About