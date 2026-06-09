import { renderOgImage, OG_SIZE } from "@/lib/og";

export const alt = "You're invited to a baby's diary on Cubi";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    subtitle: "You're invited to a baby's diary.",
    footer: "cubi.family · Install Cubi and enter your invite code",
  });
}
