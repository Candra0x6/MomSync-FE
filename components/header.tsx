"use client"
import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import { Heart } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()

  const pathname = usePathname()
  const isDashboardPage = pathname.startsWith("/dashboard")
  return (
    <header className={` ${!isDashboardPage ? "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border" : "hidden"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-8 h-8 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-serif text-foreground">Mom.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <Link href="/dashboard" className="text-sm text-foreground font-bold hover:text-[#1f4b4a] transition-colors">
              Dashboard
            </Link>
            <Link href="/about" className="text-sm text-foreground font-bold hover:text-[#1f4b4a] transition-colors">
              About
            </Link>
            <Link href="/teams" className="text-sm text-foreground font-bold hover:text-[#1f4b4a] transition-colors">
              Teams
            </Link>

          </nav>

          {/* CTA Button */}
          <Button onClick={() => router.push("/auth/login")} className="rounded-full px-6">Free Consultation 🤱</Button>
        </div>
      </div>
    </header>
  )
}
