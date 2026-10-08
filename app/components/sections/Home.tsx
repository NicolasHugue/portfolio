export default function Home() {
  return (
    <section
      id="home"
      className="flex items-center px-12 py-12"
    >
      <div>
        <p className="mb-2 text-lg text-slate-600">Bonjour, je suis</p>

        <h1 className="text-5xl font-bold">Nicolas Hugue</h1>

        <p className="mt-3 text-2xl font-semibold text-blue-600">Développeur</p>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Bienvenue sur mon portfolio. Je présente ici mon parcours, mes
          compétences et mes projets.
        </p>
      </div>
    </section>
  );
}
