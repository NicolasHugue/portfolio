export default function Technologies() {
  return (
    <section id="technologies" className="border-b  border-slate-200 py-12">
      <h2 className="text-3xl font-bold">Technologies</h2>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <article>
          <h3 className="text-xl font-semibold text-slate-900">Langages</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Java",
              "Kotlin",
              "C#",
              "Python",
              "PHP",
              "C",
              "C++",
              "JavaScript",
              "TypeScript",
              "SQL",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-lg bg-blue-100 px-3 py-2 text-sm "
              >
                {technology}
              </span>
            ))}
          </div>
        </article>

        <article>
          <h3 className="text-xl font-semibold text-slate-900">
            Frameworks & Web
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[".NET","Spring", "Laravel","JavaFX","Vue.js", "Next.js", "React"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-blue-100 px-3 py-2 text-sm "
                >
                  {technology}
                </span>
              ),
            )}
          </div>
        </article>

        <article>
          <h3 className="text-xl font-semibold text-slate-900">
            Bases de données
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {["PostgreSQL","MySQL","Supabase"].map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-blue-100 px-3 py-2 text-sm "
              >
                {technology}
              </span>
            ))}
          </div>
        </article>

        <article>
          <h3 className="text-xl font-semibold text-slate-900">Outils</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Git", "Docker", "Vercel","SonarQube"].map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-blue-100 px-3 py-2 text-sm text-slate-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}