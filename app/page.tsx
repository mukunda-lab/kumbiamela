import DotBackground from "@/components/DotBackground";
import EdgeBlur from "@/components/EdgeBlur";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import StreamingSection from "@/components/StreamingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-kumbia-orange">
      <DotBackground />
      <EdgeBlur />
      <Hero />

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
          <VideoSection title="la cumbia del gurú" youtubeId="m0bqBSAjAio" />
          <VideoSection
            title="la cumbia del mahamrityunjaya"
            youtubeId="Q05hNXzXIAQ"
          />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20">
        <StreamingSection />
      </section>

      <Footer />
    </main>
  );
}
