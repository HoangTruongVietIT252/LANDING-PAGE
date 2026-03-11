"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const collections = [
  {
    title: "Tailored Heritage",
    subtitle: "Structured coats, sharp shoulders, timeless silhouettes.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Evening Atelier",
    subtitle: "Soft satin, sculpted drape, quiet luxury in motion.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Modern Icons",
    subtitle: "Refined essentials for an elevated daily wardrobe.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  },
];

const values = [
  {
    number: "01",
    title: "Crafted Precision",
    text: "Every line is deliberate. Every proportion is designed to feel composed, luxurious, and enduring.",
  },
  {
    number: "02",
    title: "Timeless Materiality",
    text: "Warm neutrals, matte textures, wool, satin, leather, and deep shadow create a premium editorial atmosphere.",
  },
  {
    number: "03",
    title: "Modern Storytelling",
    text: "Cinematic scroll, layered typography, and subtle motion turn the page into a fashion presentation.",
  },
];

const products = [
  {
    name: "The Ivory Coat",
    price: "$420",
    tag: "New Season",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "The Signature Blazer",
    price: "$260",
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "The Evening Dress",
    price: "$380",
    tag: "Limited Drop",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Leather Accent Bag",
    price: "$190",
    tag: "Accessory",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.45em] text-[#a58a63]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-tight text-[#f5f1ea] md:text-6xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
        {description}
      </p>
    </motion.div>
  );
}

function ImageReveal({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, clipPath: "inset(18% 0 0 0 round 2rem)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0 round 2rem)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <Image src={src} alt={alt} fill priority={priority} className="object-cover" />
    </motion.div>
  );
}

export default function ClassicFashionLandingPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);

  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const smoothMouseX = useSpring(rawMouseX, { stiffness: 85, damping: 22, mass: 0.3 });
  const smoothMouseY = useSpring(rawMouseY, { stiffness: 85, damping: 22, mass: 0.3 });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "34%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.45], [1.1, 1]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      rawMouseX.set(event.clientX);
      rawMouseY.set(event.clientY);
      setHasMouseMoved(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  const spotlightBackground = useMotionTemplate`radial-gradient(240px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(255,255,255,0.09), rgba(212,176,123,0.08) 22%, rgba(212,176,123,0.04) 40%, transparent 72%)`;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0f0d0b] text-white selection:bg-[#b79563] selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(194,161,112,0.16),transparent_28%),linear-gradient(to_bottom,#15120f_0%,#0f0d0b_38%,#0d0b09_100%)]" />
      <motion.div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-500"
        style={{
          opacity: hasMouseMoved ? 1 : 0,
          background: spotlightBackground,
          mixBlendMode: "screen",
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.045] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.7px,transparent_0.7px)] [background-size:9px_9px]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="#"
            className="text-sm font-semibold uppercase tracking-[0.5em] text-[#f3ede4]"
          >
            Maison Élance
          </Link>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-white/75 md:flex">
            <a href="#collection" className="transition hover:text-white">
              Collection
            </a>
            <a href="#story" className="transition hover:text-white">
              Story
            </a>
            <a href="#featured" className="transition hover:text-white">
              Featured
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white/80 transition duration-300 hover:border-white/30 hover:bg-white/5 md:inline-flex">
              Lookbook
            </button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              className="group rounded-full bg-[#d5b07b] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black transition duration-300 hover:bg-[#e1bc86]"
            >
              <span className="inline-flex items-center gap-2">
                Shop Now
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>
          </div>
        </div>
      </header>

      <section ref={heroRef} className="relative flex min-h-screen items-center pt-24">
        <motion.div style={{ y: yImage, scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(9,8,7,0.78),rgba(9,8,7,0.22),rgba(9,8,7,0.68))]" />
          <Image
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=80"
            alt="Classic luxury fashion hero"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]" />
        </motion.div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-12 px-6 pb-14 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: yText, opacity: opacityText }}
            className="max-w-3xl"
          >
            <motion.p
              variants={revealUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#e7c18b]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              The Autumn Couture Edit
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                variants={revealUp}
                className="font-serif text-5xl leading-[0.95] text-[#f8f4ee] sm:text-6xl md:text-8xl"
              >
                Classic Fashion
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={revealUp}
                className="font-serif text-5xl leading-[0.95] text-[#d7b07b] sm:text-6xl md:text-8xl"
              >
                Reimagined
              </motion.h1>
            </div>

            <motion.p
              variants={revealUp}
              className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base"
            >
              A luxury editorial landing page for timeless womenswear — built around heritage
              silhouettes, cinematic motion, rich neutrals, and a premium shopping journey that
              feels elegant from first scroll to final CTA.
            </motion.p>

            <motion.div variants={revealUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                href="#featured"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d5b07b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-[#e0bc88]"
              >
                Discover Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                href="#story"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/30 hover:bg-white/10"
              >
                <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Brand Story
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-end"
          >
            <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_20px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.5rem]">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-[500px] w-full"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
                    alt="Editorial fashion portrait"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-2 pt-5 text-sm">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Edition</p>
                  <p className="mt-2 font-serif text-2xl text-[#f3ede4]">FW26</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">Mood</p>
                  <p className="mt-2 font-serif text-2xl text-[#f3ede4]">Quiet Luxury</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#collection"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-white/60 md:inline-flex"
        >
          Scroll
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </section>

      <section className="relative py-10">
        <div className="mx-auto flex max-w-7xl items-center px-6 md:px-10">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-[#b6915d] to-transparent"
          />
        </div>
      </section>

      <section id="collection" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            eyebrow="Editorial Selection"
            title="Collections That Feel Timeless"
            description="Inspired by the storytelling language of luxury fashion websites: oversized hero imagery, heritage-driven messaging, and a clean editorial rhythm that keeps each section feeling expensive and composed."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {collections.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_10px_35px_rgba(0,0,0,0.22)] transition-shadow duration-500 hover:shadow-[0_28px_70px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-[460px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent transition duration-500 group-hover:from-black/90" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#dfba83]">
                    Collection 0{index + 1}
                  </p>
                  <h3 className="font-serif text-3xl text-[#f8f3ec]">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/72">{item.subtitle}</p>
                  <button className="group/btn mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/85 transition group-hover:text-white">
                    Explore Now{" "}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <div className="mx-auto flex max-w-7xl items-center px-6 md:px-10">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-[#b6915d] to-transparent"
          />
        </div>
      </section>

      <section id="story" className="relative py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-10">
          <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10">
            <ImageReveal
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80"
              alt="Luxury fashion atelier"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 p-8 md:p-10"
            >
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#dfba83]">Maison Story</p>
              <p className="mt-4 max-w-md font-serif text-3xl leading-snug text-[#f8f3ec]">
                Designed for women who love elegance with presence, softness with structure, and
                luxury without noise.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-[11px] uppercase tracking-[0.45em] text-[#a58a63]"
            >
              Why this layout works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl leading-tight text-[#f5f1ea] md:text-6xl"
            >
              Premium storytelling with a couture rhythm.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-sm leading-8 text-white/70 md:text-base"
            >
              The reference landing page uses long-scroll persuasion blocks, sticky navigation,
              value-heavy sections, and repeated CTAs. For a classic fashion brand, the same
              structural logic works best when transformed into a luxury editorial system: fewer
              hard-sell blocks, stronger photography, more breathing room, refined typography, and
              smooth reveal animations.
            </motion.p>

            <div className="mt-10 space-y-5">
              {values.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:border-white/15 hover:bg-white/[0.055]"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <p className="font-serif text-3xl text-[#d7b07b] md:w-20">{item.number}</p>
                    <div>
                      <h3 className="text-lg font-medium text-[#f6efe6]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/68">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <div className="mx-auto flex max-w-7xl items-center px-6 md:px-10">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-[#b6915d] to-transparent"
          />
        </div>
      </section>

      <section id="featured" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            eyebrow="Featured Pieces"
            title="Designed To Be Seen Up Close"
            description="This product grid is intentionally elevated with strong imagery, subtle hover motion, luxury spacing, and boutique-style labeling so the page can convert without losing its editorial identity."
          />

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition duration-500 hover:shadow-[0_28px_70px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-[380px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.08),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#f6d3a1] backdrop-blur-md">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#f6efe6]">{item.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                      Signature Piece
                    </p>
                    <p className="text-lg text-[#d9b47f]">{item.price}</p>
                  </div>
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    className="group/btn mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    Add to Lookbook
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10">
        <div className="mx-auto flex max-w-7xl items-center px-6 md:px-10">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-[#b6915d] to-transparent"
          />
        </div>
      </section>

      <section id="experience" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 md:p-12"
          >
            <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-[#a58a63]">
                  Private Access
                </p>
                <h2 className="font-serif text-4xl leading-tight text-[#f5f1ea] md:text-6xl">
                  Join the house of timeless dressing.
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-8 text-white/72 md:text-base">
                  Use this block as your lead form, newsletter capture, VIP appointment booking, or
                  early-access CTA. The structure is tuned for luxury fashion campaigns where
                  elegance matters as much as conversion.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-4 rounded-[2rem] border border-white/10 bg-black/25 p-6 backdrop-blur-md"
              >
                <input
                  placeholder="Your name"
                  className="h-14 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#c8a06e] focus:bg-white/[0.08]"
                />
                <input
                  placeholder="Email address"
                  className="h-14 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#c8a06e] focus:bg-white/[0.08]"
                />
                <select className="h-14 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition duration-300 focus:border-[#c8a06e] focus:bg-white/[0.08]">
                  <option className="text-black">Interested in: New Collection</option>
                  <option className="text-black">Private Styling</option>
                  <option className="text-black">Lookbook Access</option>
                  <option className="text-black">VIP Launch Event</option>
                </select>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  className="group mt-2 inline-flex h-14 items-center justify-center rounded-full bg-[#d5b07b] px-6 text-xs font-semibold uppercase tracking-[0.28em] text-black transition hover:bg-[#e2be8a]"
                >
                  Request Access
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="uppercase tracking-[0.35em] text-white/55">Maison Élance</p>
          <div className="flex flex-wrap gap-5 uppercase tracking-[0.25em]">
            <a href="#" className="transition hover:text-white/75">
              Instagram
            </a>
            <a href="#" className="transition hover:text-white/75">
              Lookbook
            </a>
            <a href="#" className="transition hover:text-white/75">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
