export default function Contact() {
  return (
    <section id="contact" className="bg-[#0B1C2C] text-white px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>

      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 rounded-lg text-black w-64"
      />

      <button className="ml-4 bg-blue-500 px-6 py-3 rounded-lg">
        Send
      </button>
    </section>
  );
}
