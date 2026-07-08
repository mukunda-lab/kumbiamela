import DotBackground from "@/components/DotBackground";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import StreamingSection from "@/components/StreamingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-kumbia-orange">
      <DotBackground />
      <Hero />

      <section className="relative z-10 mx-auto flex max-w-5xl flex-col gap-20 px-6 py-20 sm:gap-28">
        <VideoSection
          title="la cumbia del gurú"
          youtubeId="m0bqBSAjAio"
          align="left"
        />
        <VideoSection
          title="la cumbia del mahamrityunjaya"
          youtubeId="Q05hNXzXIAQ"
          align="right"
        />
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20">
        <StreamingSection />
      </section>

      <Footer />
    </main>
  );
}
