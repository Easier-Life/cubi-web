import Link from "next/link";
import { type Locale, t } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { siteContent } from "@/content/site-content";
import { siteConfig } from "@/lib/site";
import { Wordmark } from "./Wordmark";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteFooter({ locale }: { locale: Locale }) {
  const home = `/${locale}`;
  const year = new Date().getFullYear();

  const productLinks = [
    { href: `${home}#features`, label: ui.nav.features },
    { href: `${home}#how`, label: ui.nav.how },
    { href: `${home}#philosophy`, label: ui.nav.philosophy },
    { href: `${home}#faq`, label: ui.nav.faq },
  ];
  const legalLinks = [
    { href: `${home}/terms`, label: ui.footer.terms },
    { href: `${home}/privacy`, label: ui.footer.privacy },
    { href: `${home}/delete-account`, label: ui.footer.deleteAccount },
    { href: `${home}/support`, label: ui.footer.support },
  ];

  return (
    <footer className="mt-24 border-t border-divider bg-cream-50/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Wordmark locale={locale} />
            <p className="mt-4 text-[14px] leading-[1.6] text-ink-500">
              {t(siteContent.marketing.footerTagline, locale)}
            </p>
          </div>

          <FooterColumn title={t(ui.footer.product, locale)}>
            {productLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {t(l.label, locale)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t(ui.footer.legal, locale)}>
            {legalLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {t(l.label, locale)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t(ui.footer.contact, locale)}>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="inline-block py-1 text-[14px] text-ink-500 transition-colors hover:text-terracotta-700"
            >
              {siteConfig.contactEmail}
            </a>
            <span className="inline-block py-1 text-[14px] text-ink-500">
              {siteConfig.domain}
            </span>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-divider pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink-500">
            © {year} {t(ui.footer.rights, locale)} · {t(ui.footer.madeIn, locale)}
          </p>
          <LanguageSwitcher
            locale={locale}
            ariaLabel={t(ui.switchLanguage, locale)}
          />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="eyebrow mb-3 text-ink-500">{title}</h2>
      <ul className="flex flex-col gap-2.5">
        {Array.isArray(children) ? (
          children.map((c, i) => <li key={i}>{c}</li>)
        ) : (
          <li>{children}</li>
        )}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block py-1 text-[14px] text-ink-500 transition-colors duration-200 hover:text-terracotta-700"
    >
      {children}
    </Link>
  );
}
