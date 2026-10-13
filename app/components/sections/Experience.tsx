export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-slate-200 py-12"
    >
      <div >
        <h2 className="text-3xl font-bold">Expérience</h2>

        <div className="mt-6 space-y-6">
          <article className="rounded-xl border border-slate-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Software Developer
                </h3>

                <p className="mt-1 font-medium text-blue-500">
                  Melexis · Job étudiant
                </p>
              </div>

              <div className="text-right text-sm text-slate-700">
                <p>03/2026 – 07/2026</p>
                <p>Ypres</p>
              </div>
            </div>

            <p className="mt-4 font-medium text-slate-700">
              Développement de solutions middleware pour l&apos;automatisation
              industrielle.
            </p>

            <ul className="mt-2 list-disc pl-5 leading-7 text-slate-600">
              <li>
                Développement d&apos;applications pour le suivi en temps réel
                des états de composants, de cycles et d&apos;événements.
              </li>
              <li>
                Implémentation de files d&apos;attente asynchrones pour gérer
                les requêtes simultanées.
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  .NET Software Developer
                </h3>

                <p className="mt-1 font-medium text-blue-500">
                  SIP · Stagiaire
                </p>
              </div>

              <div className="text-right text-sm text-slate-700">
                <p>09/2025 – 12/2025</p>
                <p>Tournai</p>
              </div>
            </div>

            <p className="mt-4 font-medium text-slate-700">
              Développement d&apos;applications liées à l&apos;ERP Sage.
            </p>

            <ul className="mt-2 list-disc pl-5 leading-7 text-slate-600">
              <li>
                Développement d&apos;applications C# avec différentes
                interfaces.
              </li>
              <li>Communication avec une API et ajout de services Windows.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
