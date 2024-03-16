import { prisma } from "@/db";
import Link from "next/link";


let getMessages = () => prisma.messages.findMany()

export default async function Home() {
  
  const messages = await getMessages()
  // await prisma.messages.create({ data: {sender: "Anna", message:"Hii", sentStatus: true}})

  return(
    <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">Chat</h1>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
    </header>

    <ul className="pl-4">
      {messages.map(message => <p>{message.sender} : {message.message}</p>)}
    </ul>
    </>
  )
}