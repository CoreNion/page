import type { MetadataRoute } from 'next'

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cnion.dev/',
      lastModified: new Date(),
    },
    {
      url: 'https://cnion.dev/archivtter',
    },
    {
      url: "https://cnion.dev/accounts",
    },
    {
      url: "https://cnion.dev/leasy",
    },
    {
      url: "https://cnion.dev/leasy/privacy",
    },
    {
      url: "https://cnion.dev/trucker",
    },
    {
      url: "https://cnion.dev/privacy",
    }
  ]
}