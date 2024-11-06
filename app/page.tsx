// app/page.tsx

import FAQ from "@/components/FAQ";
import TerminusCalculator from "@/components/TerminusCalculator";
import { siteUrl } from "@/meta.config";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${siteUrl}/`,
    },
  }
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">
          Terminus Calculator (BO6)
        </h1>
        <p className="text-lg mb-8">
          Free Terminus Calculator for Black Ops 6 Zombies. Instantly solve the Easter Egg math puzzle and save 5000 points/essence. Skip BEAM SMASHER cost with this simple calculator for Terminus map. Fast, accurate and free to use.
        </p>
      </section>

      {/* Calculator Section */}
      <section className="mb-12">
        <TerminusCalculator />
      </section>

      {/* Tutorial Video Section */}
      <section className="mb-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">How to Use BO6 Terminus Calculator</h2>
        <div className="max-w-3xl mx-auto"> {/* 添加这个容器 */}
          <YouTubeEmbed videoid="kJYTyNwMyQE" />
        </div>
        <div className="mt-4 text-sm text-gray-600 text-center">
          Watch our step-by-step guide on solving the Terminus Easter Egg puzzle
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12 px-4" id="faq">
        <FAQ />
      </section>

    </div>
  );
}