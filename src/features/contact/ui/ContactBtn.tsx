type ContactBtnProps = {
  handleClick: () => void;
};

export default function ContactBtn({ handleClick }: ContactBtnProps) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="text-xs font-mono font-semibold tracking-wide uppercase bg-ayu-keyword/5 hover:bg-ayu-keyword active:bg-ayu-keyword/50 active:border-keyword text-ayu-keyword hover:text-slate-950 border border-keyword/30 hover:border-keyword px-4 py-2 transition-colors duration-300 cursor-pointer"
    >
      Contact me
    </button>
  );
}
