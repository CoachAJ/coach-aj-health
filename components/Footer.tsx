import Link from 'next/link'
import { Facebook, Youtube, Twitter, Instagram, Music } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-glorious-sunset">About Coach AJ</h3>
            <p className="text-gray-300 text-sm mb-4">
              Certified Wholistic Health Coach (CWHC) empowering individuals through personalized health evaluations, AO Scan Technology, and foundational nutritional guidance based on the Triangle of Disease and Mighty 90 essential nutrients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tangy-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/ao-scan" className="text-gray-300 hover:text-tangy-yellow transition-colors text-sm">AO Scan Technology</Link></li>
              <li><Link href="/health-evaluation" className="text-gray-300 hover:text-tangy-yellow transition-colors text-sm">Health Evaluation</Link></li>
              <li><Link href="/philosophy" className="text-gray-300 hover:text-tangy-yellow transition-colors text-sm">Our Philosophy</Link></li>
              <li><Link href="/mighty-90" className="text-gray-300 hover:text-tangy-yellow transition-colors text-sm">Mighty 90</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tangy-yellow">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://propowerdrink.com/?uid=102742703" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tangy-yellow transition-colors text-sm">Pro Power Drink</a></li>
              <li><a href="https://clearbrainfog.com/?uid=102742703" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tangy-yellow transition-colors text-sm">Clear Brain Fog</a></li>
              <li><a href="https://topshelfcollagen.com/?uid=102742703" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tangy-yellow transition-colors text-sm">Top Shelf Collagen</a></li>
              <li><a href="https://efasupplements.com/?uid=102742703" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tangy-yellow transition-colors text-sm">EFA Supplements</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tangy-yellow">Connect With Us</h3>
            <p className="text-gray-300 text-sm mb-4">
              Questions? Call: <a href="tel:307-381-1646" className="text-tangy-yellow hover:text-glorious-sunset">307-381-1646</a>
            </p>
            
            <div className="flex space-x-4">
              <a href="https://Facebook.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tangy-yellow transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://YouTube.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tangy-yellow transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://X.DailywithDoc.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tangy-yellow transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://Spotify.dailywithdoc.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-tangy-yellow transition-colors">
                <Music size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Coach AJ Health & Wellness. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Disclaimer: This content is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  )
}
