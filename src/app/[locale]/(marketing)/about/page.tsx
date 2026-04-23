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
    title: "Thoughtful by nature",
    description:
      "We believe skincare should feel refined, reassuring, and beautifully uncomplicated, something that supports everyday skin instead of adding more noise.",
  },
  {
    title: "Consistency creates radiance",
    description:
      "The most beautiful results often come from quiet rituals followed with care, not from chasing every trend or overcomplicating the routine.",
  },
  {
    title: "Confidence in your own skin",
    description:
      "Everything we create is meant to help skin feel comfortable, cared for, and naturally luminous, never covered up by pressure or perfectionism.",
  },
] as const;

const standards = [
  "A more thoughtful point of view on skincare, shaped around real concerns and real routines",
  "A clean, elevated brand experience that feels calming from the first click",
  "Product storytelling centered on texture, comfort, and everyday usefulness",
  "A softer, more trustworthy tone that helps people feel guided instead of sold to",
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
              A softer, more thoughtful approach to beautiful skin.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6c5c52] md:text-lg md:leading-8">
              Women Skin Lab was created with the belief that skincare should feel calm, elevated, and easy to trust.
              We are drawn to formulas, routines, and rituals that bring comfort, clarity, and a quiet sense of confidence to everyday skin.
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
            title="We wanted skincare to feel more intimate, more intentional, and more beautifully clear."
            description="Women Skin Lab was shaped as a softer kind of skincare brand, one that values refined simplicity, thoughtful choices, and the quiet confidence that comes with healthy-looking skin."
          />
          <div className="rounded-[2rem] border border-[#eadfd7] bg-white p-8 md:p-10">
            <p className="text-sm leading-8 text-[#5f5148] md:text-base">
              In a category that can often feel crowded and overstated, we are drawn to what feels calm, purposeful, and enduring.
              That means simpler routines, more thoughtful recommendations, and a brand experience designed to feel reassuring from the very beginning.
            </p>
            <p className="mt-5 text-sm leading-8 text-[#5f5148] md:text-base">
              Our philosophy is rooted in the idea that skincare should help people feel cared for, informed, and quietly confident,
              whether they are navigating dryness, sensitivity, dullness, or simply searching for a routine that feels right at last.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfd7] bg-[#fcf5ef]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionIntro
            eyebrow="What we believe"
            title="A beautiful skincare experience should feel calm, considered, and deeply wearable."
            description="These ideas shape the way Women Skin Lab curates, communicates, and supports people throughout the journey."
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
              title="What gives the experience its signature feel"
              description="We care about quality, restraint, and a more graceful kind of guidance, the kind that helps people choose with confidence and ease."
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
                Continue into the pages that bring the brand to life.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#ecd9cd] md:text-base">
                If you would like to see how customers respond, explore the wider skincare direction, or spend more time with the brand,
                these are the most natural next steps.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reviews"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#fff8f3] px-6 text-sm font-medium text-[#241915] transition hover:bg-[#f2e2d7]"
              >
                Explore reviews
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-sm font-medium text-[#fff8f3] transition hover:bg-white/10"
              >
                Return home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
