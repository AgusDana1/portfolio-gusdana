import React from "react";

export default function()
{
    return (
        <>
        <section id="about" className="bg-[#081420] text-white px-10 py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 w-1/2 rounded-xl">
                    <img src="/images/foto-2.png" className="object-cover rounded-xl" alt="foto-2" />
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
                </div>
            </div>
        </section>
        </>
    )
}