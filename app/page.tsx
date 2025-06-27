import Interactive3dObject from "@/components/interactive-3d-object"
import MockUiPanel from "@/components/mock-ui-panel"
import SponsorSlider from "@/components/sponsor-slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-deepspace">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-deepspace/0 to-deepspace/0"></div>
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-muted-foreground leading-tight tracking-tighter">
          Kompetisi Desain UI/UX Tahunan
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent1-DEFAULT to-accent2-DEFAULT">
            Teknovistafest
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Wadah bagi para desainer berbakat di Indonesia untuk bersaing, berinovasi, dan menjadi yang terbaik di
          panggung nasional.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Input
            type="email"
            placeholder="Masukkan email Anda"
            className="w-full sm:w-auto max-w-xs bg-primary/70 border-border focus:ring-2 focus:ring-accent2-DEFAULT h-11 placeholder:text-muted-foreground/70"
          />
          <Button
            size="lg"
            className="bg-accent2-DEFAULT hover:bg-accent2-DEFAULT/90 text-accent2-foreground font-semibold w-full sm:w-auto h-11"
          >
            Daftar Sekarang
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Atau{" "}
          <a href="/competition#details" className="text-accent1-DEFAULT hover:underline">
            Lihat Detail Lomba
          </a>
        </p>

        <div className="mt-16 md:mt-24">
          <Interactive3dObject />
        </div>

        <div className="mt-16 md:mt-24">
          <MockUiPanel />
        </div>
      </div>
      <SponsorSlider />
    </div>
  )
}
