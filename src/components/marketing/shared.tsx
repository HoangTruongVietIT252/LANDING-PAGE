"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { marketingNav } from "./site-data";

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#9f7f67] md:tracking-[0.28em]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#241915] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6c5c52] md:text-base">{description}</p>
    </motion.div>
  );
}

export function MarketingHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/en" || pathname === "/fr" || pathname === "/";
    return pathname?.endsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfd7] bg-[rgba(255,251,247,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-sm font-semibold tracking-[0.16em] text-[#241915] md:tracking-[0.22em]"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#241915] text-[#fff8f3]">
            S
          </span>
          <span className="truncate">WOMEN SKIN LAB</span>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {marketingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                isActive(item.href)
                  ? "bg-[#241915] text-[#fff8f3]"
                  : "text-[#5a4940] hover:bg-[#f4ebe4] hover:text-[#241915]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/reviews"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#241915] px-6 text-sm font-medium text-[#fff8f3] transition hover:bg-[#3a2b24]"
          >
            See our review approach
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dbc9bd] text-[#241915] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#eadfd7] bg-[#fff8f3] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {marketingNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium transition",
                  isActive(item.href)
                    ? "bg-[#241915] text-[#fff8f3]"
                    : "text-[#4b3d35] hover:bg-[#f4ebe4]"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/reviews"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-[#241915] text-sm font-medium text-[#fff8f3] transition hover:bg-[#3a2b24]"
              onClick={() => setOpen(false)}
            >
              See our review approach
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-[#eadfd7] bg-[#f7efe8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#241915]">
            Women Skin Lab
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#6c5c52]">
            A calm, trust-first skincare concept inspired by the competitor structure, then rebuilt
            with clearer hierarchy, stronger proof, and a more useful user journey.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-[#241915]">Pages</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#6c5c52]">
              {marketingNav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-[#241915]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#241915]">Contact</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#6c5c52]">
              <span>tvhoangit252@gmail.com</span>
              <span>Honest skincare notes, routines, and review-led guidance.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
