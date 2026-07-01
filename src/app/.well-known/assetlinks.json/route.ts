export const dynamic = "force-static";

// Android App Links verification. Android fetches this file over HTTPS and only
// auto-opens the installed app for `https://cubi.family/i/*` links when one of
// the fingerprints below matches the certificate that signed the installed APK.
// Mirrors the iOS AASA route (../apple-app-site-association/route.ts).
//
// The app ships through Google Play with Play App Signing, so Play's App
// signing key verifies every Play-distributed build; the upload key covers
// locally-built / sideloaded release APKs (dev devices). Android matches ANY
// entry, so keeping both is Google's recommendation.
const SHA256_CERT_FINGERPRINTS: string[] = [
  // Play App signing key — Play Console → App integrity → App signing.
  "04:3F:D3:AB:16:46:AD:0C:55:43:FE:B1:C3:98:FA:85:15:CF:9E:9C:89:52:32:E1:E4:48:76:52:28:D6:20:32",
  // Upload key — android/app/upload-keystore.jks, alias `upload` (dev/sideload).
  "7F:52:20:5C:72:B3:29:7B:AB:F2:DC:B4:37:31:49:8B:00:3A:AF:18:A9:7C:23:41:0C:03:E6:B9:40:98:EA:64",
];

const ASSET_LINKS = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "family.cubi.app",
      sha256_cert_fingerprints: SHA256_CERT_FINGERPRINTS,
    },
  },
] as const;

export function GET() {
  return new Response(JSON.stringify(ASSET_LINKS), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
