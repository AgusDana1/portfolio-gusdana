export default function Projects() {
  return (
    <section id="projects" className="bg-[#0B1C2C] text-white px-10 py-20">
      
      <h2 className="text-2xl font-bold mb-10">PROJECTS</h2>

      <div className="grid md:grid-cols-3 gap-8">

        {[1,2,3].map((item) => (
          <div
            key={item}
            className="bg-[#081420] rounded-2xl p-4 hover:scale-105 transition-all shadow-lg"
          >

            <img
              src="/images/project1.jpg"
              className="rounded-xl w-full mb-4"
              alt="project"
            />

            <div>
              <h3 className="font-bold">FULLSTACK SYSTEM</h3>
              <p className="text-gray-400 text-sm">
                Web Rent-Car, App
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
