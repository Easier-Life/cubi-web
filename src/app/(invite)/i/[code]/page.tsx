import type { Metadata } from "next";
import { CubiMark } from "@/components/CubiMark";
import { StoreButtons } from "@/components/StoreButtons";
import { CodeCard } from "./CodeCard";
import { OpenInBrowser } from "./OpenInBrowser";

export const dynamic = "force-static";

type RouteParams = { code: string };

function normalizeCode(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function formatCode(raw: string): string {
  const cleaned = normalizeCode(raw);
  if (cleaned.length === 7) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  }
  return cleaned || raw.toUpperCase();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { code } = await params;
  const formatted = formatCode(code);
  const title = `Mời vào Cubi · ${formatted}`;
  const description =
    "Cài app Cubi rồi nhập mã mời để cùng xem nhật ký của bé nhé.";
  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: "Cubi",
      locale: "vi_VN",
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function InviteLandingPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { code } = await params;
  const formatted = formatCode(code);
  const rawCode = normalizeCode(code);

  return (
    <main className="min-h-svh px-5 pb-16 pt-12 sm:pt-20">
      <div className="mx-auto max-w-md">
        <header className="mb-9 text-center">
          <CubiMark size={48} className="mx-auto" title="Cubi" />
          <p className="eyebrow mt-5 text-ink-500">Cubi · Nhật ký bé cho cả nhà</p>
          <h1 className="mt-3 text-[28px] font-semibold leading-[1.2] text-ink-900 sm:text-[30px]">
            Cả nhà mời bạn cùng xem nhật ký của bé
          </h1>
          <p className="mt-4 text-[16px] leading-[1.6] text-ink-500">
            Cài app Cubi rồi nhập mã bên dưới để cùng nhìn bé lớn lên mỗi ngày
            nhé.
          </p>
        </header>

        <CodeCard displayCode={formatted} rawCode={rawCode} />

        <div className="mt-10">
          <p className="mb-4 text-center text-[14px] leading-[1.55] text-ink-500">
            Sau khi cài, mở app Cubi rồi nhập mã trên nhé.
          </p>
          <StoreButtons locale="vi" className="justify-center" />
        </div>

        <OpenInBrowser />

        <footer className="mt-16 border-t border-divider pt-6 text-center text-[12px] leading-[1.5] text-ink-300">
          cubi.family · Bé lớn từng ngày, thương đầy vòng tay
        </footer>
      </div>
    </main>
  );
}
