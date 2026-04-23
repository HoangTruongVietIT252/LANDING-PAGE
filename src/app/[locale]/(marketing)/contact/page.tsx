"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MessageSquareHeart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { marketingAssets } from "@/components/marketing/assets";
import { MarketingFooter, MarketingHeader, SectionIntro } from "@/components/marketing/shared";

const contactCards = [
  {
    icon: Mail,
    title: "Email us",
    description:
      "For order questions, product guidance, or general support, our inbox is always open.",
    detail: "support@womenskinlabstore.com",
  },
  {
    icon: Clock3,
    title: "Response time",
    description:
      "We aim to reply within 1 to 2 business days, with the same calm and thoughtful tone you see throughout the brand.",
    detail: "Monday to Friday, 9 AM to 5 PM",
  },
  {
    icon: MessageSquareHeart,
    title: "What we can help with",
    description:
      "Shipping questions, product suggestions, routine direction, and everyday support before or after purchase.",
    detail: "Warm, practical support",
  },
] as const;

const faqItems = [
  {
    question: "How soon will I get a reply?",
    answer:
      "Most inquiries receive a response within 1 to 2 business days. During busier periods, it may take a little longer, but we will get back to you as soon as possible.",
  },
  {
    question: "Can I ask for product recommendations?",
    answer:
      "Yes. You can share your skin concerns, routine goals, or sensitivities, and we will point you toward the most relevant starting direction.",
  },
  {
    question: "Can I contact you about an order or shipping question?",
    answer:
      "Absolutely. We are happy to help with general order support, shipping updates, and common post-purchase questions.",
  },
  {
    question: "Do you offer phone support?",
    answer:
      "At the moment, the best way to reach us is by email or through the contact form below so we can respond clearly and keep all details in one place.",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#241915]">
      <MarketingHeader />

      <section className="border-b border-[#eadfd7] bg-[#fcf5ef]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-24">
          <div className="flex flex-col justify-center">
            <SectionIntro
              eyebrow="Contact us"
              title="We are always happy to hear from you."
              description="Whether you have a question about a product, need help with an order, or simply want a little guidance on where to begin, our team is here for you."
            />
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6c5c52] md:text-base">
              Women Skin Lab is designed to feel warm, refined, and easy to approach. Our support experience is meant to feel the same way.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#eadfd7] bg-white shadow-none">
            <div className="relative h-[320px] md:h-[420px]">
              <Image
                src={marketingAssets.contactHero}
                alt="Women Skin Lab support and contact visual"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {contactCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full rounded-[1.75rem] border-[#eadfd7] bg-white shadow-none">
                  <CardContent className="p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4ebe4] text-[#241915]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-[#241915]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#6c5c52]">{item.description}</p>
                    <p className="mt-5 text-sm font-medium text-[#241915]">{item.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#eadfd7] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.95fr] md:px-8 md:py-20">
          <Card className="rounded-[2rem] border-[#eadfd7] bg-[#fffdfb] shadow-none">
            <CardContent className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9f7f67]">
                Send a message
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#241915] md:text-4xl">
                Tell us what you need, we are here to help.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Input
                  className="h-12 rounded-full border-[#dbc9bd] bg-white px-5"
                  placeholder="First name"
                />
                <Input
                  className="h-12 rounded-full border-[#dbc9bd] bg-white px-5"
                  placeholder="Last name"
                />
              </div>
              <Input
                className="mt-4 h-12 rounded-full border-[#dbc9bd] bg-white px-5"
                placeholder="Email address"
              />
              <Input
                className="mt-4 h-12 rounded-full border-[#dbc9bd] bg-white px-5"
                placeholder="Subject"
              />
              <Textarea
                className="mt-4 min-h-[160px] rounded-[1.5rem] border-[#dbc9bd] bg-white px-5 py-4"
                placeholder="Your message"
              />
              <Button className="mt-5 h-12 w-full rounded-full bg-[#241915] text-[#fff8f3] hover:bg-[#3a2b24]">
                Send your message
              </Button>
              <p className="mt-4 text-xs leading-6 text-[#7b665a]">
                By submitting this form, you agree that your information may be used to respond to your inquiry, in accordance with our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-[#241915] underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center">
            <SectionIntro
              eyebrow="Support details"
              title="A support experience should feel just as thoughtful as the brand itself."
              description="We keep things simple so it is always clear how to reach out, what to expect, and where to start if you need a quick answer."
            />
            <div className="mt-8 rounded-[1.75rem] border border-[#eadfd7] bg-[#fcf5ef] p-6 md:p-8">
              <p className="text-sm font-semibold text-[#241915]">Best way to reach us</p>
              <p className="mt-2 text-sm leading-7 text-[#5f5148]">
                Email is the best place to reach us for questions about orders, products, or general skincare support.
              </p>
              <p className="mt-5 text-sm font-semibold text-[#241915]">Response window</p>
              <p className="mt-2 text-sm leading-7 text-[#5f5148]">
                Most messages receive a reply within 1 to 2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <SectionIntro
          eyebrow="Frequently asked questions"
          title="A few quick answers, just in case you need them first."
          description="These are some of the questions people most often have before reaching out to a beauty or skincare brand."
        />
        <div className="mt-10 grid gap-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-[1.5rem] border border-[#eadfd7] bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-[#241915]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6c5c52]">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
