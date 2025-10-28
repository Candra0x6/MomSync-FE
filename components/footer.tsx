import Link from "next/link"
import { IconBrandInstagram, IconBrandFacebook, IconBrandYoutube, IconMail, IconPhone, IconMapPin } from "@tabler/icons-react"
import { Heart } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto ">
       <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-8 h-8 bg-linear-to-br from-[#1f4b4a] to-[#2d6a68] rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-serif text-foreground">Healthy Mom</span>
          </Link>
          <h1 className="text-sm text-muted-foreground">
            © 2024 Healthy Mom. All rights reserved.
          </h1>

        
        </div>
      </div>
      </div>
    </footer>
  )
}
