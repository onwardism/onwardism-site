import { Cookie } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="container px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Cookie className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Cookie Policy</h1>
          </div>
          <p className="text-muted-foreground">Last updated: January 15, 2026</p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="text-muted-foreground">
              Cookies are small text files that are placed on your computer or mobile device when
              you visit a website. They are widely used to make websites work more efficiently and
              provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics and track usage</li>
              <li>To store your preferences</li>
              <li>To enable advertisements delivery, including behavioral advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function and cannot be switched
                  off in our systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies allow us to count visits and traffic sources so we can measure and
                  improve the performance of our site.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies enable the website to provide enhanced functionality and
                  personalization.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground">
              You can set your browser to refuse all or some browser cookies, or to alert you when
              websites set or access cookies. If you disable or refuse cookies, please note that
              some parts of this website may become inaccessible or not function properly.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
