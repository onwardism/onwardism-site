import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">

        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary flex-shrink-0" />
            <h1 className="text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">Last updated: January 15, 2026</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Information We Collect</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              We collect several types of information for various purposes to provide and improve
              our service to you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Usage data (How you interact with our website)</li>
              <li>Tracking and cookies data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. How We Use Your Information</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. Data Security</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              The security of your data is important to us, but remember that no method of
              transmission over the Internet or method of electronic storage is 100% secure. While
              we strive to use commercially acceptable means to protect your personal data, we
              cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. Your Data Protection Rights</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              You have the following data protection rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>The right to access, update or delete your information</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">6. Contact Us</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@example.com" className="text-primary hover:underline">
                privacy@example.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
