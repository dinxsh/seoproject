"use client"

export function ProductVideos() {
  const videos = [
    {
      id: "PQgeLzoRz9g",
      title: "Inverter Product Demo",
    },
    {
      id: "PQgeLzoRz9g",
      title: "Professional Installation Walkthrough",
    },
  ]

  return (
    <section className="pt-8 pb-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Product Demo & Installation Videos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">See how our inverters perform and how we install them professionally.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((v, i) => (
            <div key={i} className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


