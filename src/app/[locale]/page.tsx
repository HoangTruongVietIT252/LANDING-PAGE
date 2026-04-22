"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  concernCards,
  featuredArticles,
  featuredSolutions,
  promisePillars,
  testimonials,
} from "@/components/marketing/site-data";
import { marketingAssets } from "@/components/marketing/assets";
import { MarketingFooter, MarketingHeader, SectionIntro } from "@/components/marketing/shared";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#241915]">
      <MarketingHeader />

      <section className="overflow-hidden border-b border-[#eadfd7] bg-[radial-gradient(circle_at_top_left,#fffdfb,transparent_40%),linear-gradient(135deg,#fff8f3_0%,#f7ede5_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#eadfd7] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6d5d]">
              <Sparkles className="h-3.5 w-3.5" />
              Honest routines, clear choices
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Honest skincare guidance that feels softer, clearer, and easier to trust.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6c5c52] md:text-lg md:leading-8">
              Women Skin Lab reworks a generic wellness landing structure into a calmer skincare
              experience with stronger hierarchy, concern-led browsing, better proof, and clearer
              next steps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reviews"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#241915] px-6 text-sm font-medium text-[#fff8f3] transition hover:bg-[#3a2b24]"
              >
                Explore our review approach
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#cdb8ab] bg-transparent px-6 text-sm font-medium text-[#241915] transition hover:bg-[#f4ebe4]"
              >
                Read skincare notes
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#6c5c52]">
              <div>
                <p className="text-2xl font-semibold text-[#241915]">3</p>
                <p>Clean public pages</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#241915]">4</p>
                <p>Concern-based entry points</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#241915]">5</p>
                <p>Review criteria pillars</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-[#eadfd7] bg-white/80 shadow-[0_30px_80px_rgba(110,84,67,0.12)]">
              <div className="relative h-[260px] overflow-hidden bg-[#f4ebe4] md:h-[320px]">
                <Image
                  src={marketingAssets.solutionImages[1]}
                  alt="Best-selling calming serum"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241915]/35 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7e624f]">
                  Best seller
                </div>
              </div>
              <div className="grid gap-4 p-4">
                <div className="rounded-[1.5rem] bg-[#f4ebe4] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6d5d]">
                    Signature focus
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[#241915] md:text-3xl">
                    Barrier-first skincare for dry, sensitive, and easily stressed skin.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5d4d44]">
                    Gentle routines, thoughtful product picks, and clear guidance that feels easy to follow.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[1.5rem] bg-white">
                    <div className="relative h-40">
                      <Image src={marketingAssets.solutionImages[0]} alt="Hydrating serum and skincare essentials" fill className="object-cover" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f7f67]">
                        Best for
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#241915]">Dry, tight, and overworked skin</p>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-[#241915] p-6 text-[#fff8f3]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b9a6]">
                      Why it works
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[#f1dfd3]">
                      <li>Gentle routines that protect the barrier first</li>
                      <li>Clear product guidance for real skin concerns</li>
                      <li>Reviews written to support confident choices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionIntro
          eyebrow="Why this version is stronger"
          title="The competitor had the right sitemap idea, but weak trust and weak intent handling."
          description="We keep the simple structure, then sharpen what matters, clearer value, better content hierarchy, and stronger proof across the funnel."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {promisePillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-[1.75rem] border-[#eadfd7] bg-white/90 shadow-none">
                <CardContent className="p-8">
                  <p className="text-sm font-semibold text-[#241915]">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-[#6c5c52]">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfd7] bg-[#fcf5ef]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionIntro
            eyebrow="Concern-led browsing"
            title="Instead of generic categories, visitors can begin with the skin problem they actually feel."
            description="This section keeps the card-driven browsing pattern from the competitor, but makes each tile useful, specific, and conversion friendly."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {concernCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full overflow-hidden rounded-[1.75rem] border-[#eadfd7] bg-white shadow-none transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(110,84,67,0.08)]">
                  <div className="relative h-52">
                    <Image src={marketingAssets.concernImages[index]} alt={item.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9f7f67]">
                      {item.stat}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold text-[#241915]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#6c5c52]">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionIntro
          eyebrow="Featured solutions"
          title="A better version of the competitor card blocks, now with stronger utility and clearer conversion intent."
          description="Each routine card explains who it helps and why it exists, so the section works as real guidance rather than decorative filler."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredSolutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full overflow-hidden rounded-[1.8rem] border-[#eadfd7] bg-[#fffdfb] shadow-none">
                <div className="relative h-56">
                  <Image src={marketingAssets.solutionImages[index]} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="flex h-full flex-col p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9f7f67]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[#241915]">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[#7b6457]">{item.subtitle}</p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#6c5c52]">{item.description}</p>
                  <Link href="/reviews" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#241915]">
                    See review logic
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#eadfd7] bg-[#241915] text-[#fff8f3]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionIntro
            eyebrow="Trust and proof"
            title="This is where the experience starts to feel more credible."
            description="The competitor treated proof lightly. This version gives testimonials and trust cues more room, more clarity, and more weight in the journey."
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
                <Card className="h-full rounded-[1.8rem] border-white/10 bg-white/5 text-[#fff8f3] shadow-none">
                  <CardContent className="p-8">
                    <div className="flex gap-1 text-[#f6c692]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-7 text-[#f2dfd3]">“{item.quote}”</p>
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-[#d7c0b2]">{item.meta}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionIntro
            eyebrow="Bridge to content"
            title="The blog should not just exist, it should pull users deeper into trust."
            description="On the competitor site, blog felt present but underused. Here, featured guides are positioned as part of the decision journey."
          />
          <div className="grid gap-5">
            {featuredArticles.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="rounded-[1.6rem] border-[#eadfd7] bg-white shadow-none">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#9f7f67]">
                      <span>{item.tag}</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#241915]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#6c5c52]">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#eadfd7] bg-[#f7efe8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[1fr_0.9fr] md:px-8 md:py-20">
          <SectionIntro
            eyebrow="Final conversion block"
            title="A softer, clearer finish for people who want guidance, not pressure."
            description="The competitor had the right instinct to collect leads, but the value exchange was vague. This version makes the reason to reach out feel clearer and more useful."
          />
          <Card className="rounded-[2rem] border-[#eadfd7] bg-white shadow-none">
            <CardContent className="space-y-4 p-8">
              <Input className="h-12 rounded-full border-[#dbc9bd] bg-[#fffdfb] px-5" placeholder="Your name" />
              <Input className="h-12 rounded-full border-[#dbc9bd] bg-[#fffdfb] px-5" placeholder="Email address" />
              <Textarea
                className="min-h-[120px] rounded-[1.5rem] border-[#dbc9bd] bg-[#fffdfb] px-5 py-4"
                placeholder="Tell us your skin concern"
              />
              <Button className="h-12 w-full rounded-full bg-[#241915] text-[#fff8f3] hover:bg-[#3a2b24]">
                Get my honest routine direction
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
