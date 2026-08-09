# Cubi Web — `cubi.family`

Web companion cho app **Cubi** (nhật ký bé cho cả nhà). Repo này độc lập với
Flutter app (`../cubi/`). Ba vai trò chính:

1. **Product website** — landing page 4 ngôn ngữ (vi · en · fr · de), mobile-first,
   mô tả đầy đủ app Cubi bằng nội dung crawlable và ảnh chụp sản phẩm thật.
2. **Apple App Site Association (AASA)** — phục vụ Universal Links từ
   `cubi.family/i/*` để app iOS mở thẳng invite mà không qua Safari.
3. **Landing page invite** (`/i/{code}`) — fallback khi ông bà tap link mà chưa
   cài app, hoặc khi Universal Link không trigger (ví dụ in-app browser của
   Zalo/Facebook/Messenger).

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript strict
- Tailwind CSS v4 (CSS-first `@theme`) với design tokens của Cubi
- `next/font/google` cho **Be Vietnam Pro** (hỗ trợ đầy đủ dấu tiếng Việt)
- Deploy Vercel · domain `cubi.family`

## Routes

`{lang}` là một trong `vi` · `en` · `fr` · `de`.

| Route                                          | Mục đích                       |
| ---------------------------------------------- | ------------------------------ |
| `/`                                            | Phát hiện ngôn ngữ → `/{lang}` (không nhận ra thì về `/en`) |
| `/{lang}`                                      | Product landing page           |
| `/{lang}/download`                             | Trang tải app theo thiết bị     |
| `/{lang}/privacy`                              | Chính sách quyền riêng tư       |
| `/{lang}/terms`                                | Điều khoản sử dụng              |
| `/{lang}/support`                              | Hỗ trợ                          |
| `/{lang}/delete-account`                       | Hướng dẫn xóa tài khoản         |
| `/{lang}/guides`, `/{lang}/guides/[slug]`      | Cẩm nang (slug dịch theo ngôn ngữ) |
| `/{lang}/about`                                | Về Cubi                         |
| `/i/[code]`                                    | Landing invite                  |
| `/.well-known/apple-app-site-association`      | AASA JSON cho iOS Universal Links |
| `/.well-known/assetlinks.json`                 | Android App Links               |

> **Lưu ý AASA:** route handler trả `Content-Type: application/json` đúng
> chuẩn Apple (không thêm `.json` đuôi file, không cần MIME mapping). Apple sẽ
> fetch endpoint này khi user cài app — không cần signed AASA cho iOS 13+.

### Identifiers

- **Apple Team ID:** `Y4A8JWGT4J`
- **Bundle ID:** `family.cubi.app`
- **appIDs (AASA):** `Y4A8JWGT4J.family.cubi.app`
- **Path pattern:** `/i/*`

Nếu Team ID/Bundle ID đổi, sửa trong
`src/app/.well-known/apple-app-site-association/route.ts`.

## Local dev

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000), thử các URL:

- `http://localhost:3000/i/TEST123` — landing invite (code format thành `TES-T123`)
- `http://localhost:3000/.well-known/apple-app-site-association` — JSON AASA

## Deploy lên Vercel

1. Push repo lên GitHub (nhánh `main`).
2. Vào [vercel.com/new](https://vercel.com/new) → Import repo.
3. Framework preset: **Next.js** (auto-detect).
4. Build settings giữ mặc định. Không cần env vars cho V1.
5. Deploy → Vercel cấp `cubi-web-xxx.vercel.app` để test.

### DNS setup tại Porkbun (domain `cubi.family`)

Vào Porkbun → DNS Records của `cubi.family`, xoá A/AAAA records cũ và thêm:

| Type    | Host  | Answer                  | TTL  |
| ------- | ----- | ----------------------- | ---- |
| `ALIAS` | (root, để trống) | `cname.vercel-dns.com` | 600  |
| `CNAME` | `www` | `cname.vercel-dns.com`  | 600  |

> Porkbun hỗ trợ `ALIAS` ở apex domain (tương đương ANAME ở provider khác).
> Nếu giao diện Porkbun không cho `ALIAS`, dùng A record với IP Vercel cấp:
> `76.76.21.21` (kiểm tra lại trong Vercel → Project → Settings → Domains).

Sau đó vào Vercel → Project → Settings → **Domains**:

1. Add `cubi.family` → Verify (Vercel sẽ tự cấp SSL).
2. Add `www.cubi.family` → set redirect → `cubi.family`.

DNS propagation thường 5–30 phút. Verify bằng:

```bash
dig +short cubi.family
curl -I https://cubi.family/.well-known/apple-app-site-association
```

## Verify AASA sau khi deploy

Apple validator: [https://branch.io/resources/aasa-validator/](https://branch.io/resources/aasa-validator/)

Hoặc thủ công:

```bash
curl -i https://cubi.family/.well-known/apple-app-site-association
```

Expect:

- HTTP `200`
- `content-type: application/json`
- Body chứa `"appIDs":["Y4A8JWGT4J.family.cubi.app"]`

## Ngôn ngữ (i18n)

Bốn ngôn ngữ: **vi** (chính, viết trước) · **en** · **fr** · **de**. Tất cả
sống trong `src/lib/i18n.ts`; copy nằm ở `src/content/*`.

- Kiểu `Localized` bắt buộc `vi` + `en`, còn `fr`/`de` **optional**: thiếu bản
  dịch thì `t()` fallback về tiếng Anh thay vì vỡ build.
- Kiểm tra còn thiếu chỗ nào: `npm run i18n:coverage` (thêm `-- --all` để xem hết).
- Middleware nhớ ngôn ngữ đang đọc bằng cookie `cubi-locale`; URL trần
  (`/privacy`) redirect theo `Accept-Language`.
- Ảnh chụp sản phẩm trong `public/product/` mới có bản `vi` và `en`; `fr`/`de`
  dùng tạm ảnh `en` qua `assetLocale()` trong `src/lib/assets.ts` — khi có ảnh
  chụp UI tiếng Pháp/Đức thì thêm file `*-fr.webp` / `*-de.webp` và mở rộng
  helper đó.

## Design tokens

Tất cả tokens (cream / terracotta / sage / honey / ink + shadow + radii) sống
trong `src/app/globals.css` dưới block `@theme inline`. Tailwind v4 tự sinh
utility classes (`bg-cream-100`, `text-terracotta-500`, `rounded-md`, …) từ
các CSS variables này. Reference: `../cubi/docs/DESIGN_SYSTEM.md`.

## Không scope

- Supabase / DB lookup (web không validate code, chỉ display)
- Web viewer cho nội dung nhật ký riêng tư
- Analytics, A/B testing

## Cấu trúc file

```
src/
├── app/
│   ├── (site)/[lang]/                               # Marketing + legal, vi/en
│   ├── (invite)/i/[code]/                           # Invite fallback an toàn
│   ├── .well-known/                                 # AASA + Android asset links
│   ├── globals.css                                  # Tailwind + design tokens
│   ├── robots.ts
│   └── sitemap.ts
├── components/                                      # UI + product gallery
├── content/                                         # Copy song ngữ + legal
└── lib/                                             # SEO, locale, platform

public/product/                                      # Screenshot WebP tối ưu
```
