import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 mb-6 flex justify-between items-center max-w-6xl mx-auto rounded-xl">
      <h1 className="text-xl font-bold text-blue-600">Veraciti</h1>
      <div className="flex gap-6 text-blue-600 font-medium">
        <Link href="/analisar">Analisar</Link>
        <Link href="/comparar">Comparar</Link>
        <Link href="/feedback">Feedback</Link>
      </div>
    </nav>
  );
}
