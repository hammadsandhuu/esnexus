import AboutHeroSection from "./about-hero-section"
import AboutStatsSection from "./about-state"
import ProcessSection from "./about-process"
import WhyChooseSection from "./about-why-choose"

export default function AboutPage() {
  return (
    <main className="min-h-screen  text-white pt-36 pb-20 px-4 sm:px-8 lg:px-24 relative z-10 overflow-hidden">
      {/* Background blur overlays */}
      <div className="absolute -top-48 left-0 w-full h-96 bg-purple-900/30 blur-3xl z-0"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-900/30 blur-2xl z-0"></div>

      {/* Page Intro */}
      <section className="text-center max-w-3xl mx-auto z-10 relative">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          About Us
        </h1>
        <p className="text-white/80 text-lg leading-relaxed">
          At Revo, we are passionate problem-solvers. We build digital solutions that are innovative,
          scalable, and tailored to real-world business challenges.
        </p>
      </section>

      {/* Hero Section */}
      <div className="mt-24 z-10 relative">
        <AboutHeroSection />
      </div>

      {/* Stats Section */}
      <div className="mt-32 z-10 relative">
        <AboutStatsSection />
      </div>

      {/* Process Section */}
      <div className="mt-32 z-10 relative">
        
        <ProcessSection />
      </div>

      {/* Why Choose Us */}
      <div className="mt-32 z-10 relative">
       
        <WhyChooseSection />
      </div>

     
    </main>
  )
}
