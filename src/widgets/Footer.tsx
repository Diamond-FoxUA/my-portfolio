import Link from "next/link";
import Icon from "@/shared/Icon";

export default function Footer() {
  return (
    <footer className="text-ayu-text font-mono text-sm tracking-wider w-full border-t border-slate-700">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row md:px-6 py-8 md:justify-between gap-10 items-center mx-auto">
        <div className="flex gap-5">
          <p>&copy;{new Date().getFullYear()}</p>
          <p className="text-slate-500">df. all_systems_nominal</p>
        </div>

        <ul className="flex items-center gap-8">
          <li>
            <Link href="https://github.com/Diamond-FoxUA">
              <Icon
                name="github"
                className="w-8 h-8 fill-emerald-600 hover:fill-emerald-500 active:fill-emerald-700 transition-colors duration-300"
              />
            </Link>
          </li>
          <li>
            <Link href="https://t.me/X_Diamond_Fox_X">
              <Icon
                name="telegram"
                className="w-8 h-8 fill-emerald-600 hover:fill-emerald-500 active:fill-emerald-700 transition-colors duration-300"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/dmytro-farbun">
              <Icon
                name="linkedin"
                className="w-8 h-8 fill-emerald-600 hover:fill-emerald-500 active:fill-emerald-700 transition-colors duration-300"
              />
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="block w-2 h-2 bg-emerald-400 animate-pulse"
          ></span>
          <p className="text-emerald-500 tracking-wider uppercase font-bold border-r pr-2 border-slate-500">
            SYS_ONLINE
          </p>
          <p className="uppercase">
            Ping: <span className="text-emerald-500 font-bold">24ms</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
