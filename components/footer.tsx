import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-zinc-900 text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white">
                <span className="text-sm font-bold text-zinc-900">LC</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                LoomCraft
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Premium textile sourcing for businesses worldwide. Quality fabrics, reliable supply.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">Home</Link>
              <Link href="/catalog" className="text-sm text-zinc-400 hover:text-white transition-colors">Catalog</Link>
              <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Categories</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-zinc-400">Silk</span>
              <span className="text-sm text-zinc-400">Cotton</span>
              <span className="text-sm text-zinc-400">Linen</span>
              <span className="text-sm text-zinc-400">Velvet</span>
              <span className="text-sm text-zinc-400">Wool</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@loomcraft.com" className="text-sm text-zinc-400 hover:text-white transition-colors">hello@loomcraft.com</a>
              <a href="tel:+15552345678" className="text-sm text-zinc-400 hover:text-white transition-colors">+1 (555) 234-5678</a>
              <span className="text-sm text-zinc-400">Mumbai, India</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6">
          <p className="text-center text-xs text-zinc-500">
            © 2026 LoomCraft Textiles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
