import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center -mt-20 sm:-mt-24">
        <div className="container px-4 md:px-8">
          <div className="max-w-6xl space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              Make better technology<br />decisions.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl">
              An open-source platform for media, research, and AI—built for engineering-led teams.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
