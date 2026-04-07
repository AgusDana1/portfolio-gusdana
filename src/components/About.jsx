import React from "react";
import { FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

export default function()
{
    return (
        <>
        <section id="about" className="bg-[#081420] text-white px-10 py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 w-1/2 rounded-xl">
                    <img src="/images/foto-2.png" className="object-cover rounded-md" alt="foto-2" />
                </div>

                <div>
                    <p className="text-blue-400 uppercase">About Me</p>

                    <h2 className="text-3xl font-bold mt-2">I AM AVAILABLE FULLSTACK DEVELOPER PROJECTS</h2>

                    <p className="text-gray-400 mt-4">I create modern system and clean designs that helps business grow.</p>

                    <div className="flex gap-6 mt-6">
                        <div>
                            <h3 className="text-2xl font-bold">5+</h3>
                            <p className="text-gray-400">Projects</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">3+</h3>
                            <p className="text-gray-400">Experience</p>
                        </div>
                    </div>

                    {/* Line pemisah */}
                    <div className="border-t border-gray-700 my-8"></div>

                    {/* tech stack dan skill */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Tech Stack & Skill</h3>

                        {/* grid untuk tech stack nya */}
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 text-center">
                            <div className="flex flex-col items-center hover:scale-110 transition">
                                <FaLaravel size={40} className="text-red-500" />
                                <p className="text-sm mt-2">Laravel</p>
                            </div>

                            <div className="flex flex-col items-center hover:scale-110 transition">
                                <FaReact size={40} className="text-blue-500" />
                                <p className="text-sm mt-2">React</p>    
                            </div>

                            <div className="flex flex-col items-center hover:scale-110 transition">
                                <FaNodeJs size={40} className="text-green-500" />
                                <p className="text-sm mt-2">Node Js</p>
                            </div>

                            <div className="flex flex-col items-center hover:scale-110 transition">
                                <SiTailwindcss size={40} className="text-blue-500" />
                                <p className="text-sm mt-2">Tailwindcss</p>
                            </div>

                            <div className="flex flex-col items-center hover:scale-110 transition">
                                <SiJavascript size={40} className="text-yellow-500" />
                                <p className="text-sm mt-2">Javascript</p>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-700 my-8"></div>

                        {/* Soft Skill */}
                        <div className="mt-6 text-gray-400 text-md">
                            <p>• Problem Solving</p>
                            <p>• Team Collaboration</p>
                            <p>• Communication</p>
                            <p>• Time Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}