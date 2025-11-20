import { Metadata } from 'next'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Coach AJ | Schedule Your Consultation',
  description: 'Ready to transform your health? Contact Coach AJ for personalized health evaluations, AO Scan sessions, and holistic wellness coaching.',
}

export default function ContactPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-health-blue to-blue-sky text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start Your Health Journey
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Ready to take control of your health? Get in touch with Coach AJ today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-health-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-health-blue">Call Us</h3>
                <a href="tel:307-381-1646" className="text-lg text-gray-700 hover:text-health-blue transition-colors">
                  307-381-1646
                </a>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="w-16 h-16 bg-glorious-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-glorious-sunset">Email Us</h3>
                <a href="mailto:aj@nutrienshelp.com" className="text-lg text-gray-700 hover:text-glorious-sunset transition-colors">
                  aj@nutrienshelp.com
                </a>
              </div>

              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <div className="w-16 h-16 bg-tangy-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-tangy-yellow">Connect</h3>
                <p className="text-lg text-gray-700">
                  Follow on social media
                </p>
              </div>
            </div>

            {/* Services Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center mb-8 text-health-blue">
                Schedule Your Service
              </h2>

              <div className="bg-gradient-to-r from-health-blue to-blue-sky text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">FREE Personalized Health Evaluation</h3>
                <p className="text-lg mb-4 text-blue-100">
                  Get a FREE comprehensive assessment of your health challenges and receive a customized protocol based on the Triangle of Disease framework.
                </p>
                <a 
                  href="https://myhealthevaluation.com/?ygid=102742703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-health-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Start Your Evaluation
                </a>
              </div>

              <div className="bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">AO Scan Session - $50</h3>
                <p className="text-lg mb-4">
                  Experience cutting-edge frequency-based assessment via Zoom. Sessions last approximately 30-45 minutes (headset recommended).
                </p>
                <p className="text-lg mb-4">
                  <strong>To schedule your AO Scan:</strong> Call 307-381-1646 or email to arrange your Zoom session.
                </p>
                <a 
                  href="tel:307-381-1646"
                  className="bg-white text-glorious-sunset hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Call to Schedule
                </a>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mt-12 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-health-blue">What to Expect</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>1. Initial Contact:</strong> Reach out via phone or email to schedule your preferred service.
                </p>
                <p>
                  <strong>2. Preparation:</strong> You'll receive any necessary forms or preparation instructions.
                </p>
                <p>
                  <strong>3. Consultation:</strong> We'll review your results together and create your personalized action plan.
                </p>
                <p>
                  <strong>4. Ongoing Support:</strong> I'm here to answer questions and adjust your protocol as you progress.
                </p>
              </div>
            </div>

            {/* Educational Resources */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-health-blue">
                Not Ready Yet? Keep Learning
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Explore our educational resources to understand the foundational principles of holistic health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://Facebook.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="bg-health-blue hover:bg-blue-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Daily with Doc on Facebook
                </a>
                <a href="https://YouTube.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="bg-glorious-sunset hover:bg-tangy-yellow text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
            <p>
              <strong>Disclaimer:</strong> This content is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare provider before making changes to your health regimen.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
