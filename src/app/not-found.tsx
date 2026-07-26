import Link from "next/link";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";

// Global 404 — has its own <html>/<body> because the app uses multiple
// route-group root layouts and there is no shared root layout.
export default function NotFound() {
  return (
    <html lang="vi" className={fontVariables}>
      <body className="bg-cream-100 text-ink-900 antialiased">
        <main className="grid min-h-svh place-items-center px-6 text-center">
          <div className="max-w-sm">
            <p className="wordmark text-[26px] text-ink-900">Cubi</p>
            <h1 className="font-display mt-5 text-[28px] font-semibold text-ink-900">
              Không tìm thấy trang
            </h1>
            <p className="mt-3 text-[15px] leading-[1.6] text-ink-500">
              Trang này có thể đã được dời đi. Cả nhà về trang chủ xem tiếp nhé.
            </p>
            <Link
              href="/vi"
              className="mt-7 inline-flex items-center justify-center rounded-md bg-terracotta-600 px-6 py-3 text-[15px] font-semibold text-cream-50 transition-colors hover:bg-terracotta-700"
            >
              Về trang chủ
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
