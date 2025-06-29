import Interactive3dObject from "@/components/interactive-3d-object"
import MockUiPanel from "@/components/mock-ui-panel"
import SponsorSlider from "@/components/sponsor-slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/10 via-background/0 to-background/0"></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-16">
        {/* Main Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh]">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-muted-foreground leading-tight tracking-tighter">
              Kompetisi Desain UI/UX Tahunan
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                Teknovistafest
              </span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
              Wadah bagi para desainer berbakat di Indonesia untuk bersaing, berinovasi, dan menjadi yang terbaik di
              panggung nasional.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full sm:w-auto max-w-xs bg-primary/70 border-border focus:ring-2 focus:ring-accent h-11 placeholder:text-muted-foreground/70"
              />
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto h-11"
              >
                Daftar Sekarang
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Atau{" "}
              <Link href="/competition#details" className="text-secondary hover:underline">
                Lihat Detail Lomba
              </Link>
            </p>
          </div>
          
          {/* Right Column: 3D Object */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-full">
            <Interactive3dObject />
          </div>
        </div>

        {/* Mock UI Panel remains below */}
        <div className="mt-24">
          <MockUiPanel />
        </div>
      </div>
      
      <SponsorSlider />
    </div>
  )
}
