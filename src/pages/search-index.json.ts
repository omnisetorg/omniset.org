import { getCollection } from 'astro:content';

export async function GET() {
  const [tools, distros, guides, docs, glossary, comparisons, alternatives, usecases, blog] = await Promise.all([
    getCollection('tools'),
    getCollection('distros'),
    getCollection('guides'),
    getCollection('docs'),
    getCollection('glossary'),
    getCollection('comparisons'),
    getCollection('alternatives'),
    getCollection('usecases'),
    getCollection('blog')
  ]);

  const entries = [
    ...tools.map(t => ({
      title: t.data.name,
      description: t.data.description,
      url: `/tools/${t.data.slug}/`,
      type: 'Tool'
    })),
    ...distros.map(d => ({
      title: d.data.name,
      description: d.data.description,
      url: `/distros/${d.data.slug}/`,
      type: 'Distro'
    })),
    ...guides.map(g => ({
      title: g.data.title,
      description: g.data.description,
      url: `/guides/${g.data.slug}/`,
      type: 'Guide'
    })),
    ...docs.map(d => ({
      title: d.data.title,
      description: d.data.description,
      url: `/docs/${d.data.slug}/`,
      type: 'Docs'
    })),
    ...glossary.map(g => ({
      title: g.data.term,
      description: g.data.shortDefinition,
      url: `/glossary/${g.data.slug}/`,
      type: 'Glossary'
    })),
    ...comparisons.map(c => ({
      title: c.data.title,
      description: c.data.seo.description,
      url: `/compare/${c.data.slug}/`,
      type: 'Comparison'
    })),
    ...alternatives.map(a => ({
      title: a.data.title,
      description: a.data.seo.description,
      url: `/alternatives/${a.data.slug}/`,
      type: 'Alternative'
    })),
    ...usecases.map(u => ({
      title: u.data.title,
      description: u.data.description,
      url: `/use-cases/${u.data.slug}/`,
      type: 'Use Case'
    })),
    ...blog.map(b => ({
      title: b.data.title,
      description: b.data.description,
      url: `/blog/${b.data.slug}/`,
      type: 'Blog'
    }))
  ];

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' }
  });
}
