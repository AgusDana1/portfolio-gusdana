export default function Contact() {
  return (
    <section id="contact" className="bg-[#0B1C2C] text-white px-6 md:px-10 py-20 text-center">
      
      <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>

      {/* WRAPPER */}
      <div className="flex justify-center">
        
        <div className="flex w-full max-w-md gap-2">
          
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 px-4 py-3 rounded-lg text-black"
          />

          <button className="bg-blue-500 px-4 md:px-6 py-3 rounded-lg whitespace-nowrap">
            Send
          </button>

        </div>

      </div>

    </section>
  );
}
