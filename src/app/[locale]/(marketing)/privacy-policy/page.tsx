"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MarketingFooter, MarketingHeader, SectionIntro } from "@/components/marketing/shared";

const policySections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect information you provide directly to us, such as your name, email address, and any details you choose to include when submitting a contact form or reaching out to customer support.",
      "We may also collect limited technical information automatically when you visit the site, such as your browser type, device type, pages viewed, and general usage data through cookies or analytics tools.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use information to respond to inquiries, provide customer support, improve the website experience, understand site usage, and communicate with you when necessary regarding your request.",
      "If email updates or marketing communication are offered in the future, we may also use your information for those purposes where permitted by law or with your consent.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "We may use cookies and similar technologies to understand how visitors use the site, improve performance, and support a smoother browsing experience.",
      "These tools may collect information such as pages visited, session activity, and general device or browser data. You can usually adjust cookie settings through your browser preferences.",
    ],
  },
  {
    title: "How Information May Be Shared",
    body: [
      "We may share information with trusted service providers who help us operate the website, process inquiries, host services, or support analytics and communications.",
      "We may also disclose information when required by law, to protect our rights, or in connection with a business transfer such as a merger, acquisition, or asset sale.",
    ],
  },
  {
    title: "Your Choices and Rights",
    body: [
      "Depending on where you live, you may have rights related to your personal information, such as the right to request access, correction, deletion, or information about how your data is used.",
      "To exercise a privacy-related request, please contact us using the details listed below. We will review requests in accordance with applicable law.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this policy, including responding to inquiries, maintaining records, and meeting legal or operational obligations.",
    ],
  },
  {
    title: "Children’s Privacy",
    body: [
      "This website is not directed to children under 13, and we do not knowingly collect personal information from children. If we learn that personal information from a child has been submitted to us, we will take appropriate steps to delete it.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the last updated date at the top of this page. Continued use of the site after updates may be treated as acceptance of the revised policy where permitted by law.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or would like to make a privacy-related request, please contact us at support@womenskinlabstore.com.",
    ],
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fff8f3] text-[#241915]">
      <MarketingHeader />

      <section className="border-b border-[#eadfd7] bg-[#fcf5ef]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Privacy Policy"
            title="How Women Skin Lab collects, uses, and protects information."
            description="This Privacy Policy explains the basic ways information may be collected and used when you interact with our website and support channels."
            align="center"
          />
          <p className="mt-6 text-center text-sm font-medium text-[#7b665a]">Last updated: April 23, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
        <Card className="rounded-[2rem] border-[#eadfd7] bg-white shadow-none">
          <CardContent className="p-6 md:p-10">
            <p className="text-sm leading-8 text-[#5f5148] md:text-base">
              This Privacy Policy applies to information collected through the Women Skin Lab website,
              including when you browse our pages, submit a contact request, or otherwise interact with us online.
              It is intended as a practical privacy notice for the current marketing-site scope and may be updated as our tools,
              features, or services evolve.
            </p>

            <div className="mt-10 grid gap-6">
              {policySections.map((section, index) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="rounded-[1.5rem] border border-[#eadfd7] bg-[#fffdfb] p-6 md:p-7"
                >
                  <h2 className="text-xl font-semibold text-[#241915] md:text-2xl">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-8 text-[#5f5148] md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <MarketingFooter />
    </main>
  );
}
