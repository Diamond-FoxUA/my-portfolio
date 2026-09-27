"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { contactSchema, type ContactInput } from "../schema/contactSchema";
import { sendContactFormAction } from "../action";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    const submitPromise = async () => {
      const res = await sendContactFormAction(data);

      if (!res.success) {
        throw new Error(res.error || "Failed to send message.");
      }

      return res;
    };

    toast.promise(submitPromise(), {
      loading: "Sending message...",
      success: () => {
        return "Message delivered successfully!";
      },
      error: (err) => {
        return err.message || "Something went wrong. Try again.";
      },
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-white flex flex-col w-77 items-start justify-center gap-5 font-mono"
    >
      <div
        className="w-0 h-0 overflow-hidden -z-50 opacity-0 absolute"
        aria-hidden="true"
      >
        <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          {...register("name")}
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "errors-name" : undefined}
          placeholder="Name"
          className={`block w-full px-3 py-2 border border-slate-700 rounded-2xl focus:border-emerald-600 transition-colors duration-300 caret-emerald-600 outline-none`}
        />
        {errors.name && (
          <p id="errors-name" role="alert" className="text-xs text-ayu-special">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "errors-email" : undefined}
          placeholder="Email"
          className={`block w-full px-3 py-2 border border-slate-700 rounded-2xl focus:border-emerald-600 transition-colors duration-300 caret-emerald-600 outline-none`}
        />
        {errors.email && (
          <p
            id="errors-email"
            role="alert"
            className="text-xs text-ayu-special"
          >
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          {...register("message")}
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "errors-message" : undefined}
          placeholder="Message"
          className={`block w-full h-22.5 px-3 py-2 outline-none border border-slate-700 rounded-2xl focus:border-emerald-600 transition-colors duration-300 caret-emerald-600 resize-none`}
        />
        {errors.message && (
          <p
            id="errors-message"
            role="alert"
            className="text-xs text-ayu-special"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="block w-full max-w-30.5 text-xs font-mono font-semibold tracking-wide uppercase bg-emerald-500/5 hover:bg-emerald-500 active:bg-emerald-700 active:border-emerald-700 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 hover:border-emerald-500 px-4 py-2 transition-colors duration-300 cursor-pointer mt-5"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
