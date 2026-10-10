const navigationItems = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Technos", href: "#technologies" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-48 flex-col border-r border-slate-200 bg-white px-6 py-8 ">
      <div className=" block text-center mb-12 text-3xl font-bold text-blue-500 ">NH</div>
      <nav>
        <ul className="space-y-2">
            {navigationItems.map((item) => (
                <li key={item.href}>
                    <a href={item.href} className="block text-center rounded-md px-3 py-2 text-lg font-medium text-slate-600  hover:bg-slate-100 hover:text-blue-600">
                        {item.label}
                    </a>
                </li>
            ))}
        
        </ul>
      </nav>
    </aside>
  );
}
