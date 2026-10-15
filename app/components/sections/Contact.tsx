export default function Contact() {
  return (
    <section id="contact" className=" py-12">
      <h2 className="text-3xl font-bold">Contact</h2>

      <p className="mt-6 text-slate-600">
        Vous souhaitez échanger à propos d&apos;une opportunité, d&apos;un
        projet ou simplement en savoir plus sur mon profil ? N&apos;hésitez pas
        à me contacter.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:hugue.nicolas@gmail.com"
          className="rounded-md bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-600"
        >
          Me contacter
        </a>
        <a
          href="https://github.com/NicolasHugue"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md font-medium border-2 border-blue-500  px-5 py-3 text-blue-500 hover:bg-slate-100 hover:text-blue-600 "
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-hugue-636b77334/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md font-medium border-2 border-blue-500  px-5 py-3 text-blue-500 hover:bg-slate-100 hover:text-blue-600 "
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
