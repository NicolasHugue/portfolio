export default function Home() {
  return (
    <section
      id="home"
      className="flex items-center border-b  border-slate-200 py-12"
    >
      <div>
        <p className="mb-2 text-lg text-slate-600">Portfolio de</p>

        <h1 className="text-5xl font-bold">Nicolas Hugue</h1>

        <p className="mt-3 text-3xl font-bold text-blue-500">
          Développeur full-stack
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          Bienvenue sur mon portfolio. Vous y trouverez mon parcours scolaire
          ainsi que mes expériences professionnelles. Mais égalment les
          technologies / softwares que je connais. Si vous souhaitez voir mon
          travail, certains de mes projets sont disponibles.
        </p>
        <div className="flex mt-6 gap-6">
          <a
            href="#projects"
            className="rounded-md bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-600"
          >
            Voir mes projets &#8594;
          </a>

          <a
            href="#contact"
            className="rounded-md font-medium border-2 border-blue-500  px-5 py-3 text-blue-500 hover:bg-slate-100 hover:text-blue-600 "
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
