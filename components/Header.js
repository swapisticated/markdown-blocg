import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex justify-center h-24 items-center bg-slate-500">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
              <h2 className="text-white text-3xl font-bold">BLOG</h2>
            </Link>
          <nav class="flex items-center space-x-4">
            <Link href="/">
              <h2 className="text-white">Home</h2>
            </Link>
            <a
              href="#"
              class="text-gray-300 hover:text-white text-base font-medium"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
