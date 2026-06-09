import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";

// Body / UI — designed for Vietnamese diacritics, full weight range.
export const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

// The one branded serif: wordmark + editorial display moments only.
export const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const fontVariables = `${beVietnamPro.variable} ${playfair.variable}`;
