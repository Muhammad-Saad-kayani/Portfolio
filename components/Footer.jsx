export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-5 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-5">
        {/* Navigation Links */}
        <nav className="flex gap-4 shrink-0 w-full justify-center sm:w-auto sm:justify-start">
          <a
            href="/"
            className="px-3 py-2 rounded-lg font-semibold hover:bg-white/5 transition"
          >
            Home
          </a>
          <a
            href="/skills"
            className="px-3 py-2 rounded-lg font-semibold hover:bg-white/5 transition"
          >
            Skills
          </a>
          <a
            href="/portfolio"
            className="px-3 py-2 rounded-lg font-semibold hover:bg-white/5 transition"
          >
            Portfolio
          </a>
        </nav>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-3 w-full sm:w-2/3 md:w-1/2">
          {["/github.svg", "/instagram.svg", "/twitter.svg", "/youtube.svg"].map(
            (src, i) => (
              <div
                key={i}
                className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Icon ${i + 1}`}
                  className="w-8 h-8 object-contain invert"
                />
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
