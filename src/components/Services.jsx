export default function Services() {
  return (
    <section id="services" className="bg-[#081420] text-white px-10 py-20">
      <h2 className="text-3xl font-bold mb-10">
        FULLSTACK SYSTEM SERVICES I AM PROVIDING
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-[#0B1C2C] p-6 rounded-xl">
          <h3 className="text-xl font-bold">UI/UX Design</h3>
          <p className="text-gray-400 mt-2">Modern interface design</p>
        </div>

        <div className="bg-[#0B1C2C] p-6 rounded-xl">
          <h3 className="text-xl font-bold">Full System Web</h3>
          <p className="text-gray-400 mt-2">Responsive websites</p>
        </div>

        <div className="bg-[#0B1C2C] p-6 rounded-xl">
          <h3 className="text-xl font-bold">Branding</h3>
          <p className="text-gray-400 mt-2">Strong identity</p>
        </div>

      </div>
    </section>
  );
}
