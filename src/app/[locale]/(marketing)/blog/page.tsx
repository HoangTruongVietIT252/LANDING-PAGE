"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { marketingAssets } from "@/components/marketing/assets";
import { featuredArticles } from "@/components/marketing/site-data";
import { MarketingFooter, MarketingHeader, SectionIntro } from "@/components/marketing/shared";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#241915]">
      <MarketingHeader />
      <section className="border-b border-[#eadfd7] bg-[#fcf5ef]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionIntro
            eyebrow="Blog landing"
            title="Skincare notes, routines, and practical guidance in a calmer content hub."
            description="The competitor separated Blog from Home, which was smart. This version keeps that split, then improves clarity, discoverability, and reading flow."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden rounded-[2rem] border-[#eadfd7] bg-white shadow-none">
            <div className="relative h-72 md:h-[360px]">
              <Image src={marketingAssets.blogFeatured} alt="Featured skincare article" fill className="object-cover" />
            </div>
            <CardContent className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f7f67]">
                Featured guide
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#241915] md:text-4xl">
                {featuredArticles[0].title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6c5c52]">
                {featuredArticles[0].description}
              </p>
              <Link href="/reviews" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#241915]">
                See how reviews connect to content
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <div className="grid gap-6">
            {featuredArticles.slice(1, 3).map((item, index) => (
              <Card key={item.title} className="overflow-hidden rounded-[1.7rem] border-[#eadfd7] bg-white shadow-none">
                <div className="relative h-44">
                  <Image src={marketingAssets.blogCards[index]} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f7f67]">
                    {item.tag}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#241915]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6c5c52]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfd7] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
          <SectionIntro
            eyebrow="Topic map"
            title="Better information architecture than a plain list of posts."
            description="These categories make the content system feel deliberate, and they help the page outperform a simple builder-style blog block."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Barrier care",
              "Sensitive skin",
              "Hydration",
              "Routine building",
              "Product comparisons",
              "Ingredients explained",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#dbc9bd] bg-[#fff8f3] px-4 py-2 text-sm text-[#5d4d44]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {featuredArticles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full overflow-hidden rounded-[1.7rem] border-[#eadfd7] bg-[#fffdfb] shadow-none">
                <div className="relative h-56">
                  <Image src={marketingAssets.blogCards[index]} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-7">
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#9f7f67]">
                    <span>{item.tag}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#241915]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6c5c52]">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#eadfd7] bg-[#f7efe8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.9fr] md:px-8">
          <SectionIntro
            eyebrow="Subscribe"
            title="Stay close to new notes, calmer routines, and clearer product thinking."
            description="This CTA is clearer than the competitor version because it explains why updates are worth receiving."
          />
          <Card className="rounded-[2rem] border-[#eadfd7] bg-white shadow-none">
            <CardContent className="space-y-4 p-8">
              <Input className="h-12 rounded-full border-[#dbc9bd] px-5" placeholder="Email address" />
              <Button className="h-12 w-full rounded-full bg-[#241915] text-[#fff8f3] hover:bg-[#3a2b24]">
                Subscribe for skincare insights
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
