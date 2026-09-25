import NavBtn from "@/shared/ui/NavBtn";

type navItem = {
  id: number;
  label: string;
  targetId: string;
};

const navItems: navItem[] = [
  {
    id: 1,
    label: "featured",
    targetId: "featured",
  },
  {
    id: 2,
    label: "projects",
    targetId: "projects",
  },
  {
    id: 3,
    label: "stack",
    targetId: "stack",
  },
];

export default function NavList() {
  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <ul className="hidden md:flex items-center gap-8">
      {navItems.map((i) => (
        <li key={i.id}>
          <NavBtn
            onClick={() => handleClick(i.targetId)}
            className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono hover:text-emerald-400 active:text-emerald-700 cursor-pointer transition-colors duration-300"
          >
            <span aria-hidden="true">&#47;&#47;</span> {i.label}
          </NavBtn>
        </li>
      ))}
    </ul>
  );
}
