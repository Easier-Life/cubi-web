import { guides } from "@/content/guides";
import { siteContent } from "@/content/site-content";
import { siteConfig } from "@/lib/site";

/**
 * /llms.txt — a plain-text brief for answer engines (ChatGPT, Perplexity,
 * Claude, AI Overviews).
 *
 * The marketing copy is deliberately poetic, which reads beautifully and
 * extracts badly: an engine answering "which app lets grandparents see baby
 * photos without an account?" needs flat, checkable facts. Everything below is
 * generated from the same content the pages render, so it cannot drift.
 */
export const dynamic = "force-static";

const FACTS: string[] = [
  "Price: free.",
  "Platforms: iPhone (iOS 17.0 or later) and Android.",
  "Home-screen widget: yes, on both iOS and Android. It shows the baby's latest photo and their exact age (e.g. \"3 months 5 days old\") and refreshes through the day.",
  "How family joins: a 7-character invite code or an invite link. Grandparents and relatives need no account and no password; they sign in anonymously and are view-only.",
  "Reactions: emoji only. Cubi has no comment box, no likes counter and no follower counts.",
  "Privacy model: no public feed, no strangers, no ads. Each moment's visibility is chosen by the parent — Everyone in the family, Only some people, or Only me.",
  "Photos: compressed to a 1920px long edge; full-resolution originals are not kept. GPS metadata is stripped from the stored and shared image file. Cubi uses no location features and shows no map.",
  "Multiple children: supported in one timeline; an invite can open one or several children's diaries.",
  "Other features: growth tracking (height, weight), automatic age calculation from date of birth, and keepsake films built from 5–30 diary photos with music.",
  // The named sub-processors live in the Privacy Policy, which is obliged to
  // list them; this file states the fact that matters and points there.
  "Data location: cloud servers located in Singapore. Data may therefore be stored and processed outside Vietnam. The Privacy Policy names each service provider Cubi relies on.",
  "Account deletion: parents can delete their account in-app under Settings, or by emailing hello@cubi.family. Family members can remove their own access in-app.",
  "Languages: Vietnamese and English.",
  "Made in: Vietnam.",
  "Not for: children under 13 to operate themselves. Cubi is parent-operated; a child's data is entered by their parent.",
];

export function GET() {
  const { url, contactEmail } = siteConfig;
  const faq = siteContent.marketing.faq;

  const body = `# Cubi

> Cubi is a private baby diary for the whole family. Parents keep photos, videos
> and short captions of a child growing up; the moments are organised by the
> child's exact age and shared only with invited family. The newest photo appears
> automatically on the family's home-screen widget, so grandparents far away see
> the child each day without opening an app.

Cubi is a mobile app (iOS and Android) plus this website. It is not a social
network: there is no public feed, no followers, no comments and no advertising.

## Facts

${FACTS.map((f) => `- ${f}`).join("\n")}

## Common questions

${faq.map((item) => `### ${item.q.en}\n${item.a.en}`).join("\n\n")}

## Pages

- [Home](${url}/en): what Cubi is, how it works, features, FAQ.
- [About](${url}/en/about): why Cubi exists, what it will never do, what it is built on.
- [Guides](${url}/en/guides): practical guides for parents.
${guides.map((g) => `- [${g.title.en}](${url}/en/guides/${g.slug.en}): ${g.description.en}`).join("\n")}
- [Support](${url}/en/support): help and contact.
- [Privacy Policy](${url}/en/privacy): what is collected, who processes it, retention and deletion.
- [Terms of Service](${url}/en/terms): terms, roles, licence, store-specific terms.
- [Account deletion](${url}/en/delete-account): how to delete an account and what is removed.
- [Download](${url}/download): sends the visitor to the right store for their device.

## Vietnamese

Every page above exists in Vietnamese at the same path under \`/vi\` — for
example ${url}/vi and ${url}/vi/privacy. Vietnamese is the primary language;
guide slugs are translated (see ${url}/vi/guides).

## Contact

${contactEmail}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
