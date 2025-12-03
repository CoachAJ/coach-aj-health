import Link from 'next/link'
import { Activity, Heart, Zap, Users, BookOpen, Stethoscope } from 'lucide-react'
import AOScanBookingButton from '@/components/AOScanBookingButton'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-health-blue to-blue-sky text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Health with Coach AJ
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Certified Wholistic Health Coach (CWHC)
            </p>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering you through personalized health evaluations, AO Scan Technology, and foundational nutritional guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/health-evaluation" className="bg-glorious-sunset hover:bg-tangy-yellow text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                Get Your Health Evaluation
              </Link>
              <Link href="/ao-scan" className="bg-white hover:bg-gray-100 text-health-blue font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
                Learn About AO Scan
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-health-blue">
            My Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-health-blue rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-health-blue">Personalized Health Evaluation</h3>
              <p className="text-gray-700 mb-4">
                Get a comprehensive health assessment tailored to your unique needs. I'll review your results with you and create a personalized action plan.
              </p>
              <Link href="/health-evaluation" className="text-health-blue font-semibold hover:text-blue-sky transition-colors">
                Start Your Evaluation →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-glorious-sunset rounded-full flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-glorious-sunset">AO Scan Technology</h3>
              <p className="text-gray-700 mb-4">
                Experience cutting-edge frequency-based assessment technology. $50 per session via Zoom (headset recommended).
              </p>
              <AOScanBookingButton />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-health-blue">
              The First Principle of Healing
            </h2>
            <p className="text-xl text-gray-700 italic">
              "Where you see the problem is not where the problem begins"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-health-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-health-blue">1. Digestive System</h3>
              <p className="text-gray-700 text-center">
                All chronic disease begins with toxicity and leaky gut. Healing starts by stopping the stream of toxicity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-glorious-sunset rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-glorious-sunset">2. Blood Sugar System</h3>
              <p className="text-gray-700 text-center">
                Dysglycemia and metabolic syndrome are linked to virtually all health issues. Balance is key.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-tangy-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-tangy-yellow">3. Adrenal-Thyroid Complex</h3>
              <p className="text-gray-700 text-center">
                Addressing the first two points often initiates improvement in stress response and hormonal balance.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/philosophy" className="bg-health-blue hover:bg-blue-sky text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block">
              Learn More About My Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* The Mighty 90 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-health-blue">
              The Mighty 90 Essential Nutrients
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              Disease is not genetic—it's nutritional deficiency. Your body needs 90 essential nutrients daily to heal and thrive.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-health-blue mb-2">60</div>
                <div className="text-gray-700 font-semibold">Minerals</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-glorious-sunset mb-2">16</div>
                <div className="text-gray-700 font-semibold">Vitamins</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-tangy-yellow mb-2">12</div>
                <div className="text-gray-700 font-semibold">Amino Acids</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-sky mb-2">2-3</div>
                <div className="text-gray-700 font-semibold">Fatty Acids</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/mighty-90" className="bg-glorious-sunset hover:bg-tangy-yellow text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block">
                Discover the Mighty 90
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-health-blue to-blue-sky text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            You have more power over your body's biochemistry than you've been told. Let's work together to unlock your body's natural healing potential.
          </p>
          <Link href="/contact" className="bg-glorious-sunset hover:bg-tangy-yellow text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block text-lg">
            Contact Coach AJ Today
          </Link>
        </div>
      </section>
    </>
  )
}
