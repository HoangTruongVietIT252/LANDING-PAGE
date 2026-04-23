"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { marketingAssets } from "@/components/marketing/assets";
import { MarketingFooter, MarketingHeader, SectionIntro } from "@/components/marketing/shared";

const beliefPillars = [
  {
    title: "Thoughtful formulas first",
    description:
      "We believe skincare should feel considered, supportive, and realistic for everyday life, not overloaded with noise or trend pressure.",
  },
  {
    title: "Consistency over complication",
    description:
      "Healthy-looking skin usually comes from calm routines followed consistently, not from chasing every launch or layering too much too fast.",
  },
  {
    title: "Confidence, not perfection",
    description:
      "Our approach is centered on helping people feel more comfortable, informed, and at ease in their own skin.",
  },
] as const;

const standards = [
  "Skincare guidance shaped around real concerns, not just marketing trends",
  "A clean, calm experience that reduces overwhelm and supports better decisions",
  "Product storytelling focused on fit, feel, and usefulness in daily routines",
  "A trust-first tone designed to feel warm, polished, and easy to believe",
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#241915]">
      <MarketingHeader />

      <section className="border-b border-[#eadfd7] bg-[linear-gradient(180deg,#fffaf6_0%,#f8eee7_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.95fr] md:px-8 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#eadfd7] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6d5d]">
              About Women Skin Lab
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Skincare made to feel calmer, clearer, and easier to trust.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6c5c52] md:text-lg md:leading-8">
              Women Skin Lab is built around a simple idea, skincare should feel thoughtful and supportive,
              not confusing or crowded. We believe better routines start with clarity, gentleness, and a more honest
              sense of what actually helps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reviews"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#241915] px-6 text-sm font-medium text-[#fff8f3] transition hover:bg-[#3a2b24]"
              >
                Read customer reviews
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#cdb8ab] bg-transparent px-6 text-sm font-medium text-[#241915] transition hover:bg-[#f4ebe4]"
              >
                Explore the collection
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-[#eadfd7] bg-white shadow-[0_24px_60px_rgba(110,84,67,0.10)]"
          >
            <div className="relative h-[320px] md:h-[440px]">
              <Image
                src={marketingAssets.aboutHero}
                alt="Women Skin Lab brand story visual"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241915]/35 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro
            eyebrow="Our story"
            title="We wanted skincare to feel less overwhelming and more intentional."
            description="Women Skin Lab was shaped as a softer, more trustworthy brand space, one that values routine clarity, product quality, and the quiet confidence that comes from healthy-looking skin."
          />
          <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-8 md:p-10">
            <p className="text-sm leading-8 text-[#5f5148] md:text-base">
              Instead of treating skincare like a fast-moving stream of trends, we focus on what feels sustainable,
              clear, and supportive in real life. That means simpler routines, more thoughtful recommendations,
              and a brand experience designed to reduce hesitation instead of adding more noise.
            </p>
            <p className="mt-5 text-sm leading-8 text-[#5f5148] md:text-base">
              Our philosophy is rooted in the belief that skincare should help people feel informed and cared for,
              whether they are dealing with dryness, sensitivity, dullness, or just trying to build a routine that finally makes sense.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfd7] bg-[#fcf5ef]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionIntro
            eyebrow="What we believe"
            title="A good skincare brand should feel clear, steady, and grounded in real use."
            description="These principles shape how Women Skin Lab speaks, curates, and supports people throughout the journey."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {beliefPillars.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full rounded-[1.75rem] border-[#eadfd7] bg-white shadow-none">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#241915]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#6c5c52]">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-[#eadfd7] bg-white shadow-none">
            <div className="relative h-[320px] md:h-[420px]">
              <Image
                src={marketingAssets.aboutStandards}
                alt="Premium skincare textures and product detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <SectionIntro
              eyebrow="Our standards"
              title="What makes the experience feel different"
              description="We are interested in quality, clarity, and a more useful kind of guidance, the kind that helps people make better decisions with less friction."
            />
            <div className="mt-8 grid gap-4">
              {standards.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-[#eadfd7] bg-[#fffdfb] px-5 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9f7f67]" />
                  <p className="text-sm leading-7 text-[#5f5148]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#eadfd7] bg-[#241915] text-[#fff8f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b9a6]">
                Keep exploring
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                Continue with the pages that build trust the fastest.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#ecd9cd] md:text-base">
                If you want to understand the brand better, see how customers respond, or browse the broader skincare direction,
                these are the natural next steps.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reviews"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#fff8f3] px-6 text-sm font-medium text-[#241915] transition hover:bg-[#f2e2d7]"
              >
                Read reviews
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-sm font-medium text-[#fff8f3] transition hover:bg-white/10"
              >
                Go to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
