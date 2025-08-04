import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center select-none min-h-screen p-8 gap-8">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-2xl font-bold">Welcome to Vendora</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-zinc-200 transition-all border-2 shadow-2xs border-zinc-300 rounded-lg px-4 py-2"
            href="/dashboard"
            target="_blank"
          >
            Admin Dashboard
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-zinc-200 transition-all border-2 shadow-2xs border-zinc-300 rounded-lg px-4 py-2"
            href="me/vendor/dashboard"
            target="_blank"
          >
            Vendor Dashboard
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-zinc-200 transition-all border-2 shadow-2xs border-zinc-300 rounded-lg px-4 py-2"
            href="/store/[storeId]"
            target="_blank"
          >
            Template
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:bg-zinc-200 transition-all border-2 shadow-2xs border-zinc-300 rounded-lg px-4 py-2"
            href="/register"
            target="_blank"
          >
            Register
          </a>
        </div>
      </main>
    </div>
  );
}
