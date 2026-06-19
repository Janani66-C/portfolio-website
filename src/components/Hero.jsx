function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-5">
      <p className="text-blue-400 text-xl mb-3">
        👋 Hello, I'm
      </p>

      <h1 className="text-6xl font-extrabold">
        Janani
      </h1>

      <h2 className="text-3xl text-gray-300 mt-4">
        Front-End Developer
      </h2>

      <p className="max-w-2xl mt-6 text-gray-400 leading-8">
        I create modern, responsive and user-friendly websites
        using HTML, CSS, JavaScript, React and Tailwind CSS.
      </p>

      <button className="mt-10 px-8 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
        View My Work  
      </button>
    </section>
  );
}

export default Hero;