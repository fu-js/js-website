import Image from 'next/image'
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'JS CLUB | Thành tựu',
    description: 'JS Club website',
    icons: {
        icon: './favicon.png', // /public path
    },
}

export default function Page() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between p-24">
      <h1 className="text-white">This is Achievements page</h1>
    </main>
  )
}
