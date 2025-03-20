import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Astro Learner RSS Feed',
    description: 'Astro Learner RSS Feed',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}