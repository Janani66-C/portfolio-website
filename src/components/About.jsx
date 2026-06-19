function About() {
  return (
    <section className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center px-8">
      <h2 className="text-5xl font-bold text-blue-400 mb-8">
        About Me
      </h2>

      <p className="max-w-3xl text-center text-lg text-gray-300 leading-8">
        Hello! I'm <span className="text-blue-400 font-semibold">Janani</span>,
        a passionate Front-End Developer who enjoys building modern,
        responsive and user-friendly websites. I work with HTML, CSS,
        JavaScript, React and Tailwind CSS to create clean and attractive
        web applications.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-blue-400">HTML</h3>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-blue-400">CSS</h3>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-blue-400">JavaScript</h3>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-blue-400">React</h3>
        </div>
      </div>
    </section>
  );
}

export default About;