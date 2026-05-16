# Cubi Web — `cubi.family`

Web companion cho app **Cubi** (nhật ký bé cho cả nhà). Repo này độc lập với
Flutter app (`../cubi/`). Hai vai trò chính:

1. **Apple App Site Association (AASA)** — phục vụ Universal Links từ
   `cubi.family/i/*` để app iOS mở thẳng invite mà không qua Safari.
2. **Landing page invite** (`/i/{code}`) — fallback khi ông bà tap link mà chưa
   cài app, hoặc khi Universal Link không trigger (ví dụ in-app browser của
   Zalo/Facebook/Messenger).

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript strict
- Tailwind CSS v4 (CSS-first `@theme`) với design tokens của Cubi
- `next/font/google` cho **Be Vietnam Pro** (hỗ trợ đầy đủ dấu tiếng Việt)
- Deploy Vercel · domain `cubi.family`

## Routes

| Route                                          | Mục đích                       |
| ---------------------------------------------- | ------------------------------ |
| `/`                                            | Splash page tạm thời           |
| `/i/[code]`                                    | Landing invite (cream-100 bg)  |
| `/.well-known/apple-app-site-association`      | AASA JSON cho iOS Universal Links |

> **Lưu ý AASA:** route handler trả `Content-Type: application/json` đúng
> chuẩn Apple (không thêm `.json` đuôi file, không cần MIME mapping). Apple sẽ
> fetch endpoint này khi user cài app — không cần signed AASA cho iOS 13+.

### Identifiers

- **Apple Team ID:** `VM556ZCL88`
- **Bundle ID:** `family.cubi.app`
- **appIDs (AASA):** `VM556ZCL88.family.cubi.app`
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
- Body chứa `"appIDs":["VM556ZCL88.family.cubi.app"]`

## Design tokens

Tất cả tokens (cream / terracotta / sage / honey / ink + shadow + radii) sống
trong `src/app/globals.css` dưới block `@theme inline`. Tailwind v4 tự sinh
utility classes (`bg-cream-100`, `text-terracotta-500`, `rounded-md`, …) từ
các CSS variables này. Reference: `../cubi/docs/DESIGN_SYSTEM.md`.

## Không scope V1

- Supabase / DB lookup (web không validate code, chỉ display)
- i18n EN (chỉ tiếng Việt)
- Auto-read clipboard (PRD cấm — sẽ phá vỡ tin tưởng của ông bà)
- Server-side rendering của code metadata
- Analytics, A/B testing

## Cấu trúc file

```
src/app/
├── layout.tsx                                       # Be Vietnam Pro + metadata
├── page.tsx                                         # Splash page
├── globals.css                                      # Tailwind v4 + design tokens
├── .well-known/
│   └── apple-app-site-association/
│       └── route.ts                                 # AASA JSON
└── i/
    └── [code]/
        ├── page.tsx                                 # Landing (server component)
        ├── CodeCard.tsx                             # Copy-to-clipboard (client)
        └── OpenInBrowser.tsx                        # Zalo escape hatch (client)
```
