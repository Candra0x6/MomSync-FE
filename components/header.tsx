import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import { Heart } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-8 h-8 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-serif text-foreground">Healthy Mom</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <Link href="/dashboard" className="text-sm text-foreground hover:text-[#1f4b4a] transition-colors">
              Dashboard
            </Link>

          </nav>

          {/* CTA Button */}
          <Button className="rounded-full px-6">Free Consultation 🤱</Button>
        </div>
      </div>
    </header>
  )
}
