export const dynamic = "force-static";

const AASA = {
  applinks: {
    details: [
      {
        appIDs: ["Y4A8JWGT4J.family.cubi.app"],
        components: [
          {
            "/": "/i/*",
            comment: "Invite links",
          },
        ],
      },
    ],
  },
} as const;

export function GET() {
  return new Response(JSON.stringify(AASA), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
