"use client";

import { useEffect, useRef } from "react";
import SocialLinks from "@/shared/ui/SocialLinks";
import ContactForm from "./ContactForm";
import { X } from "lucide-react";

type ContactModal = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModal) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      document.body.classList.add("overflow-hidden");
    } else {
      dialogRef.current?.close();
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <dialog
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      ref={dialogRef}
      className="backdrop:bg-transparent bg-[#030712]/40 backdrop-blur-md border border-slate-800/40 rounded-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none w-[95%] max-w-162.5"
    >
      <div className="flex flex-col gap-10 w-fit h-auto p-8 mx-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact dialog"
          className="absolute group top-4 right-4 flex justify-center items-center p-2 cursor-pointer"
        >
          <X
            aria-hidden="true"
            className="stroke-emerald-500 group-hover:stroke-emerald-400 group-active:stroke-emerald-400/70"
          />
        </button>

        <h2 className="font-mono text-lg font-medium text-center">
          <span aria-hidden="true">&#47;&#47;</span> Let&apos;s build something{" "}
          <em className="text-emerald-400 not-italic">great</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-center font-medium">
              send<span aria-hidden="true">_</span>email
            </h3>
            <div>
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-7 pb-10 items-center justify-center">
            <h3 className="text-center font-medium">
              direct<span aria-hidden="true">_</span>channels
            </h3>
            <div className="scale-120">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
