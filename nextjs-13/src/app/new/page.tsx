import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

const sendMessage = async (user: string, data: FormData) => {
  const message = data.get("message")?.valueOf();
  if (typeof message !== "string" || message.length === 0) {
    throw new Error("Invalid message");
  }

  await prisma.messages.create({
    data: { sender: user, message: message, sentStatus: true },
  });
};

// searchParams lets you access query params sent to the page

const New = ({ searchParams }: any) => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>

      <form
        action={async (data) => {
          "use server";
          sendMessage(searchParams?.user, data);
          redirect("/");
        }}
        className="flex gap-2 flex-col"
      >
        <input
          type="text"
          name="message"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />

        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 rounded px-2 py-1 outline-none focus-within:bg-slate-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 rounded px-2 py-1 outline-none focus-within:bg-slate-700"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default New;
