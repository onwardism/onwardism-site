import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="container px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">

        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-primary flex-shrink-0" />
            <h1 className="text-3xl sm:text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">Last updated: January 15, 2026</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Acceptance of Terms</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Use License</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Permission is granted to temporarily download one copy of the materials on our
              website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. Disclaimer</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              The materials on our website are provided on an &lsquo;as is&rsquo; basis. We make no warranties,
              expressed or implied, and hereby disclaim and negate all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for
              a particular purpose, or non-infringement of intellectual property or other violation
              of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. Limitations</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              In no event shall we or our suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Revisions</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              We may revise these terms of service at any time without notice. By using this
              website you are agreeing to be bound by the then current version of these terms of
              service.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
