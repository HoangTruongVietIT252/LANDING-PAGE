"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { marketingAssets } from "@/components/marketing/assets";
import { faqItems, reviewCriteria, reviewedPicks, testimonials } from "@/components/marketing/site-data";
import { MarketingFooter, MarketingHeader, SectionIntro } from "@/components/marketing/shared";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#241915]">
      <MarketingHeader />
      <section className="border-b border-[#eadfd7] bg-[#fcf5ef]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionIntro
            eyebrow="Reviews landing"
            title="A calmer review space built to help people decide with more confidence."
            description="The competitor had a dedicated Reviews page, but it still felt template-driven. This version turns reviews into a clearer decision-support layer."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-[#eadfd7] bg-white shadow-none">
          <div className="relative h-72 md:h-[360px]">
            <Image src={marketingAssets.reviewsFeature} alt="Women Skin Lab review visuals" fill className="object-cover" />
          </div>
        </div>
        <SectionIntro
          eyebrow="Featured testimonials"
          title="Proof should feel clear, readable, and easy to trust."
          description="This page is designed to reduce hesitation and move users closer to action."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-[1.8rem] border-[#eadfd7] bg-white shadow-none">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-[#e0ab74]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[#5f5148]">“{item.quote}”</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-[#241915]">{item.name}</p>
                    <p className="text-sm text-[#7b665a]">{item.meta}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfd7] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-16">
          <SectionIntro
            eyebrow="Review method"
            title="This is the layer the competitor was missing."
            description="Instead of saying products are great in a vague way, we explain the framework behind the recommendation. That makes the page feel more credible and more useful."
          />
          <div className="grid gap-4">
            {reviewCriteria.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-[1.4rem] border border-[#eadfd7] bg-[#fff8f3] px-5 py-4 text-sm text-[#4e4037]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <SectionIntro
          eyebrow="Best reviewed picks"
          title="Useful summaries help this page do real work instead of just looking nice."
          description="These cards give people an immediate path into a recommendation angle that feels practical."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviewedPicks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-[1.7rem] border-[#eadfd7] bg-[#fffdfb] shadow-none">
                <CardContent className="p-7">
                  <h3 className="text-xl font-semibold text-[#241915]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6c5c52]">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfd7] bg-[#241915] text-[#fff8f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <SectionIntro
            eyebrow="Objection handling"
            title="A good review page should also answer the hesitation underneath the click."
            description="This section makes the page feel more complete and more conversion-ready than the competitor example."
          />
          <div className="mt-10 grid gap-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[#ecd9cd]">{item.answer}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#fff8f3] px-6 text-sm font-medium text-[#241915] transition hover:bg-[#f2e2d7]"
            >
              Explore best routines
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-sm font-medium text-[#fff8f3] transition hover:bg-white/10"
            >
              Read blog guidance
            </Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
