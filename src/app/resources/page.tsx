import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="container px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Resources</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-12">
          Explore our collection of guides, documentation, and insights.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Link 
            href="/resources/blog" 
            className="p-6 border rounded-lg hover:border-primary transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Blog</h2>
            <p className="text-muted-foreground">
              Read our latest articles and insights on technology intelligence.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
