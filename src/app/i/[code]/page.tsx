import type { Metadata } from "next";
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
  return {
    title: `Mời vào Cubi · ${formatted}`,
    description:
      "Cài app Cubi rồi nhập mã mời để cùng xem nhật ký của bé nhé.",
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
        <header className="mb-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
            Cubi · Nhật ký bé
          </p>
          <h1 className="mt-4 text-[28px] font-semibold leading-[1.2] text-ink-900 sm:text-[30px]">
            Cả nhà mời bạn cùng xem nhật ký của bé
          </h1>
          <p className="mt-4 text-[16px] leading-[1.55] text-ink-500">
            Cài app Cubi rồi nhập mã bên dưới để bắt đầu nhé.
          </p>
        </header>

        <CodeCard displayCode={formatted} rawCode={rawCode} />

        <div className="mt-10 space-y-3">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="block w-full cursor-not-allowed rounded-md bg-ink-300 px-5 py-4 text-center text-[16px] font-semibold text-cream-100"
          >
            Sắp có trên App Store
          </button>
          <p className="text-center text-[14px] leading-[1.55] text-ink-500">
            Sau khi cài, mở app Cubi và nhập mã trên nhé.
          </p>
        </div>

        <OpenInBrowser />

        <footer className="mt-16 border-t border-divider pt-6 text-center text-[12px] leading-[1.5] text-ink-300">
          cubi.family · Tiny moments, kept forever
        </footer>
      </div>
    </main>
  );
}
