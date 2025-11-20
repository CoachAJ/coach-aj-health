import { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Health Resources & Product Information | Coach AJ',
  description: 'Access product information, educational content, and social media resources. Learn about supplements, nutritional support, and holistic health solutions.',
}

export default function ResourcesPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-glorious-sunset to-tangy-yellow text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Health Resources & Products
            </h1>
            <p className="text-xl md:text-2xl">
              Explore detailed product information and educational content
            </p>
          </div>
        </div>
      </section>

      {/* Product Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-health-blue text-center">
              Product Information Sites
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <a href="https://propowerdrink.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-health-blue">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-health-blue">Pro Power Drink</h3>
                  <ExternalLink className="w-5 h-5 text-health-blue" />
                </div>
                <p className="text-gray-700">Energy and performance support with plant-derived minerals and vitamins</p>
              </a>

              <a href="https://clearbrainfog.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-health-blue">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-health-blue">Clear Brain Fog</h3>
                  <ExternalLink className="w-5 h-5 text-health-blue" />
                </div>
                <p className="text-gray-700">Mental clarity and cognitive support solutions</p>
              </a>

              <a href="https://managestressnaturally.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-glorious-sunset">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-glorious-sunset">Manage Stress Naturally</h3>
                  <ExternalLink className="w-5 h-5 text-glorious-sunset" />
                </div>
                <p className="text-gray-700">Natural solutions for stress management and adrenal support</p>
              </a>

              <a href="https://tangytangerineliving.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-glorious-sunset">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-glorious-sunset">Tangy Tangerine Living</h3>
                  <ExternalLink className="w-5 h-5 text-glorious-sunset" />
                </div>
                <p className="text-gray-700">Complete information on the flagship Tangy Tangerine product</p>
              </a>

              <a href="https://topshelfcollagen.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-tangy-yellow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-tangy-yellow">Top Shelf Collagen</h3>
                  <ExternalLink className="w-5 h-5 text-tangy-yellow" />
                </div>
                <p className="text-gray-700">Premium collagen peptides for connective tissue, skin, and joint health</p>
              </a>

              <a href="https://discoverselenium.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-tangy-yellow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-tangy-yellow">Discover Selenium</h3>
                  <ExternalLink className="w-5 h-5 text-tangy-yellow" />
                </div>
                <p className="text-gray-700">Essential trace mineral for immune function and antioxidant support</p>
              </a>

              <a href="https://efasupplements.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-600">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-green-600">EFA Supplements</h3>
                  <ExternalLink className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">Essential Fatty Acids - Nature's anti-inflammatory support</p>
              </a>

              <a href="https://naturalmenopausehope.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-600">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-green-600">Natural Menopause Hope</h3>
                  <ExternalLink className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-700">Natural solutions for hormonal balance and menopause support</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-health-blue text-center">
              Educational Content & Community
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-health-blue">Daily with Doc Programs</h3>
                <p className="text-gray-700 mb-6">
                  Watch daily educational programs featuring health tips, product information, and Q&A sessions.
                </p>
                <div className="space-y-3">
                  <a href="https://YouTube.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-health-blue hover:text-blue-sky transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    YouTube
                  </a>
                  <a href="https://Facebook.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-health-blue hover:text-blue-sky transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Facebook
                  </a>
                  <a href="https://Rumble.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-health-blue hover:text-blue-sky transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Rumble
                  </a>
                  <a href="https://Vimeo.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-health-blue hover:text-blue-sky transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Vimeo
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-glorious-sunset">Podcast Platforms</h3>
                <p className="text-gray-700 mb-6">
                  Listen to Daily with Doc on your favorite podcast platform.
                </p>
                <div className="space-y-3">
                  <a href="https://Spotify.dailywithdoc.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-glorious-sunset hover:text-tangy-yellow transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Spotify
                  </a>
                  <a href="https://Apple.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-glorious-sunset hover:text-tangy-yellow transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apple Podcasts
                  </a>
                  <a href="https://iHeart.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-glorious-sunset hover:text-tangy-yellow transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    iHeartRadio
                  </a>
                  <a href="https://Amazon.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-glorious-sunset hover:text-tangy-yellow transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Amazon Music
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-health-blue to-blue-sky text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-lg text-blue-100 mb-6">
                Follow us on social media for daily health tips, product updates, and community support.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://X.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="bg-white text-health-blue hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors">
                  X (Twitter)
                </a>
                <a href="https://www.tiktok.com/@DailywithDoc" target="_blank" rel="noopener noreferrer" className="bg-white text-health-blue hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors">
                  TikTok
                </a>
                <a href="https://Castbox.dailywithdoc.com" target="_blank" rel="noopener noreferrer" className="bg-white text-health-blue hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors">
                  CastBox
                </a>
                <a href="https://Audible.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="bg-white text-health-blue hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors">
                  Audible
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-health-blue">
              Questions About Products or Protocols?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              I'm here to help you navigate your health journey and choose the right supplements for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:855-949-3377" className="bg-health-blue hover:bg-blue-sky text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block">
                Call: 855-949-3377
              </a>
              <a href="mailto:questions@dailywithdoc.com" className="bg-glorious-sunset hover:bg-tangy-yellow text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block">
                Email Questions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
