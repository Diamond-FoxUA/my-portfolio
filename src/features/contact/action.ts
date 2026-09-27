"use server";

import { contactSchema, type ContactInput } from "./schema/contactSchema";

export async function sendContactFormAction(data: ContactInput) {
  const form = contactSchema.safeParse(data);

  if (!form.success) {
    return {
      success: false,
      error: "Validation failed",
    };
  }

  if (form.data.honeypot) {
    return {
      success: true,
    };
  }

  const { name, email, message } = form.data;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChatId = process.env.TELEGRAM_CHAT_ID;

  const text = `<b>[ form_notification ]</b>
    ==========
    <b>• Name:</b> ${name}
    <b>• Email:</b> ${email}
    ==========
    ${message}
    `;

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: tgChatId,
        text: text,
        parse_mode: "HTML",
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to send message via Telegram API.");
  }

  return { success: true };
}
