import Link from 'next/link'
import { Metadata } from 'next'
import { Activity, Brain, Heart, Waves, Zap, Clock, Radio } from 'lucide-react'
import AOScanBookingButton from '@/components/AOScanBookingButton'

export const metadata: Metadata = {
  title: 'AO Scan Technology | Coach AJ',
  description: 'Experience cutting-edge frequency-based assessment with AO Scan Technology. Non-invasive energetic evaluation to optimize your body\'s natural frequencies and promote homeostasis.',
  keywords: 'AO Scan, bio-frequencies, vibrational frequency, subtle energy, homeostasis, blueprint frequencies, frequency optimization, Inner-Voice Scan, Vitals Scan, Comprehensive Scan, SEFI, energetic assessment',
}

export default function AOScanPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-health-blue to-blue-sky text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AO Scan Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Revolutionary frequency-based technology to assess and optimize your body's energetic state
            </p>
            <div className="bg-white text-health-blue p-6 rounded-lg inline-block">
              <p className="text-2xl font-bold mb-2">$50 per Session</p>
              <p className="text-sm">Via Zoom (headset recommended)</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is AO Scan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue text-center">
              The Science of Energy and Frequency
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Everything is energy and vibration.</strong> Every cell, organ, and emotion in your body has its own unique frequency. The AO Scan Technology is a non-invasive, frequency-based educational tool that helps you understand your unique energetic pattern.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Radio className="w-12 h-12 text-health-blue mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-health-blue">Blueprint Frequencies</h3>
                  <p className="text-gray-700">The technology measures your body's current frequencies and compares them against ideal, established Blueprint Frequencies.</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <Waves className="w-12 h-12 text-glorious-sunset mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-glorious-sunset">Optimization Process</h3>
                  <p className="text-gray-700">When frequencies are out of range, the system sends optimizing frequencies using noise-canceling technology to restore balance.</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <Heart className="w-12 h-12 text-tangy-yellow mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-tangy-yellow">Promote Homeostasis</h3>
                  <p className="text-gray-700">The core benefit is promoting harmony and balance (homeostasis) through gentle frequency optimization.</p>
                </div>
              </div>

              <div className="bg-gray-100 border-l-4 border-health-blue p-6 my-8">
                <p className="text-sm text-gray-700 italic">
                  <strong>Important Disclaimer:</strong> The AO Scan Technology is an educational tool and is not diagnostic, nor is it intended to treat, cure, or prevent any disease. Results are for informational and educational purposes only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scan Modules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-health-blue text-center">
            Comprehensive Assessment Modules
          </h2>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Inner-Voice Scan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="bg-gradient-to-br from-health-blue to-blue-sky p-8 md:w-1/3 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Brain className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Inner-Voice Scan</h3>
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h4 className="text-xl font-bold text-health-blue mb-3">What It Measures</h4>
                  <p className="text-gray-700 mb-4">
                    Analyzes audio frequencies from a 10-second voice sample to assess imbalances in your emotional state.
                  </p>
                  <h4 className="text-xl font-bold text-glorious-sunset mb-3">How It Helps You</h4>
                  <p className="text-gray-700">
                    Generates custom <strong>Balancing Harmonics</strong> (audio tones) unique to your energetic needs to harmonize your emotional state, supporting concentration, creativity, and emotional intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Vitals Scan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="bg-gradient-to-br from-glorious-sunset to-tangy-yellow p-8 md:w-1/3 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Activity className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Vitals Scan</h3>
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h4 className="text-xl font-bold text-health-blue mb-3">What It Measures</h4>
                  <p className="text-gray-700 mb-4">
                    A concise snapshot of over 550 Blueprint Frequencies related to blood, organs, glands, and systems. Includes reports on food sensitivities, nutritional analysis (vitamins, minerals, enzymes), and toxicities (bacteria, heavy metals, fungus).
                  </p>
                  <h4 className="text-xl font-bold text-glorious-sunset mb-3">How It Helps You</h4>
                  <p className="text-gray-700">
                    Identifies imbalances in nutrition and energetic state of body systems, providing information to make proper lifestyle changes and spot recurring patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Comprehensive Scan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="bg-gradient-to-br from-tangy-yellow to-yellow-500 p-8 md:w-1/3 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Heart className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Comprehensive Scan</h3>
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h4 className="text-xl font-bold text-health-blue mb-3">What It Measures</h4>
                  <p className="text-gray-700 mb-4">
                    Detailed scan of frequencies from over 130 organs, cells, bones, and chromosomes. Reports variances from ideal Blueprint Homeostasis on a 1–9 scale (5 is optimal).
                  </p>
                  <h4 className="text-xl font-bold text-glorious-sunset mb-3">How It Helps You</h4>
                  <p className="text-gray-700">
                    Provides deep insight into physical structure (arteries, veins, skeletal system, nerves) to focus optimization efforts on specific physical areas needing support.
                  </p>
                </div>
              </div>
            </div>

            {/* Body Systems Scan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="bg-gradient-to-br from-blue-sky to-blue-500 p-8 md:w-1/3 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Zap className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Body Systems Scan</h3>
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h4 className="text-xl font-bold text-health-blue mb-3">What It Measures</h4>
                  <p className="text-gray-700 mb-4">
                    Scans and optimizes 13 specific body systems including Digestion, Endocrine, Lymphatic, and Musculoskeletal systems.
                  </p>
                  <h4 className="text-xl font-bold text-glorious-sunset mb-3">How It Helps You</h4>
                  <p className="text-gray-700">
                    Provides detailed lifestyle suggestions, identifies root causes (vitals, emotional, environmental), and helps focus on one or two body systems at a time to avoid overwhelm.
                  </p>
                </div>
              </div>
            </div>

            {/* EZ Scan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="bg-gradient-to-br from-green-500 to-teal-500 p-8 md:w-1/3 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Clock className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">EZ Scan</h3>
                  </div>
                </div>
                <div className="p-8 md:w-2/3">
                  <h4 className="text-xl font-bold text-health-blue mb-3">What It Measures</h4>
                  <p className="text-gray-700 mb-4">
                    Performs Inner-Voice, Vitals, and Comprehensive scans with optimizations in under 6 minutes.
                  </p>
                  <h4 className="text-xl font-bold text-glorious-sunset mb-3">How It Helps You</h4>
                  <p className="text-gray-700">
                    Offers a quick, convenient way to scan and optimize your body daily, perfect for ongoing monitoring and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEFI Technology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue text-center">
              SEFI: Subtle Energy Frequency Imprinting
            </h2>

            <p className="text-lg text-gray-700 mb-8 text-center">
              Advanced technology that can capture, amplify, and imprint frequencies for personalized energetic support.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-health-blue">Broadcast Frequencies</h3>
                <p className="text-gray-700">Similar to distance energetic healing, frequencies can be broadcast to support your energetic field remotely.</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-glorious-sunset">Imprint Objects</h3>
                <p className="text-gray-700">Frequencies can be imprinted onto water, sugar pellets, or jewelry for continuous energetic support.</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-tangy-yellow">Custom Playlists</h3>
                <p className="text-gray-700">Create targeted frequency playlists for specific goals using Quantum Reach, Quantum Affirmations, and Quantum Chakras.</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-600">Energetic Protection</h3>
                <p className="text-gray-700">Use Energetic Clearing and Energetic Shield functions to eliminate or protect against negative vibrations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Coach AJ Uses It */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue text-center">
              Personalized Support & Coaching
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-glorious-sunset">Custom Nutritional Guidance</h3>
              <p className="text-gray-700 mb-4">
                I use the scan data to create customized libraries for supplements, therapies, and "Food as Medicine" approaches. This allows you to scan against your current diet and products to see what your body is in resonance with or needs today.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-health-blue">Tracking and Patterns</h3>
              <p className="text-gray-700 mb-4">
                True insight comes from tracking results over time. We look for repeating patterns (such as cortisol dysfunction or trace mineral needs) to guide chronic support and validate lifestyle changes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-health-blue to-blue-sky text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience AO Scan?</h3>
              <p className="mb-6 text-blue-100">
                Schedule your personalized AO Scan session via Zoom. Please use a headset for optimal results.
              </p>
              <AOScanBookingButton className="inline-block" />
            </div>
          </div>
        </div>
      </section>

      {/* LSI Keywords Section (for SEO) */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-xs text-gray-500">
            <p>
              AO Scan Technology | Bio-frequencies | Vibrational Frequency | Subtle Energy | Homeostasis | Blueprint Frequencies | Frequency Optimization | Noise Canceling Technology | Resonance | Inner-Voice Scan | Balancing Harmonics | Vitals Scan | Comprehensive Scan | Body Systems Scan | Energetic State | Nutritional Analysis | Food Sensitivities | Emotional Balancing | SEFI | Quantum Reach | Quantum Affirmations | Chakras | Meridians | HomeoEnergetix | Energetic Clearing | Custom Playlists
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
