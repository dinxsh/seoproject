import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apexpowerbatteries.in'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Blog posts
  const blogPosts = [
    'summer-inverter-maintenance-tips',
    'monsoon-power-backup-guide',
    'winter-inverter-performance',
    'inverter-buying-guide-2025',
    'inverter-maintenance-calendar-template',
    'inverter-mistakes-to-avoid',
    'battery-care-myths-debunked',
    'chennai-family-power-costs-case-study',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Location pages
  const locations = [
    'anna-nagar', 't-nagar', 'adyar', 'velachery', 'tambaram', 'omr', 'porur',
    'poonamallee', 'avadi', 'ambattur', 'red-hills', 'ennore', 'madhanakuppam',
    'thiruvallur', 'ayyapakkam', 'thiruverkadu', 'nerkudram', 'mugapair',
    'iyyappanthagal', 'mangadu', 'kundrathur', 'guindy', 'nanthapakkam',
    'nanganallur', 'kellys', 'kilpauk', 'chetpet', 'ashoknagar', 'arumbakkam',
    'koyambedu', 'madhuravayal', 'kadhirvedu', 'kavangarai', 'thiruniruyur',
    'thiruvanmiyur', 'tharamani', 'sholinganallur', 'thuraipakkam', 'alapakkam',
    'valasaravakkam', 'virugampakkam', 'mathur', 'angaputhur', 'ramapuram',
    'kolathur', 'periyarnagar', 'gkm-colony', 'vysarpadi', 'thiruvettriyur',
    'veppampattu', 'nemilichery', 'palavanthangal', 'besennagar', 'adayar',
    'adhampakkam', 'nandhanam'
  ].map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPosts, ...locations]
}
