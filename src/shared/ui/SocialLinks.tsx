import Link from "next/link";
import Icon from "./Icon";

const links = [
  {
    id: 1,
    title: "github",
    link: "https://github.com/Diamond-FoxUA",
  },
  {
    id: 2,
    title: "telegram",
    link: "https://t.me/X_Diamond_Fox_X",
  },
  {
    id: 3,
    title: "linkedin",
    link: "https://www.linkedin.com/in/dmytro-farbun",
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-8">
      {links.map((l) => (
        <li key={l.id}>
          <Link
            href={l.link}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`${l.title} (opens in a new tab)`}
          >
            <Icon
              aria-hidden="true"
              name={l.title}
              className="w-8 h-8 fill-emerald-600 hover:fill-emerald-500 active:fill-emerald-700 transition-colors duration-300"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
