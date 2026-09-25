"use client";

type NavBtnProps = React.ComponentPropsWithoutRef<"button"> & {
  className?: string;
  sectionId?: string;
};

const handleClick = (sectionId: string) => {
    if (!sectionId) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

export default function NavBtn({
  sectionId,
  children,
  ...props
}: NavBtnProps) {

  return (
    <button
      type="button"
      onClick={() => handleClick(sectionId || "")}
      {...props}
    >
      {children}
    </button>
  );
}
