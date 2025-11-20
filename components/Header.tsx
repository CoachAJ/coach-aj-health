'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-health-blue">Coach AJ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/ao-scan" className="text-gray-700 hover:text-health-blue transition-colors font-medium">
              AO Scan
            </Link>
            <Link href="/health-evaluation" className="text-gray-700 hover:text-health-blue transition-colors font-medium">
              Health Evaluation
            </Link>
            <Link href="/philosophy" className="text-gray-700 hover:text-health-blue transition-colors font-medium">
              Philosophy
            </Link>
            <Link href="/mighty-90" className="text-gray-700 hover:text-health-blue transition-colors font-medium">
              Mighty 90
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-health-blue transition-colors font-medium">
              Resources
            </Link>
            <Link href="/contact" className="bg-glorious-sunset hover:bg-tangy-yellow text-white px-6 py-2 rounded-lg transition-colors font-semibold">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/ao-scan" className="block text-gray-700 hover:text-health-blue transition-colors font-medium" onClick={toggleMenu}>
              AO Scan
            </Link>
            <Link href="/health-evaluation" className="block text-gray-700 hover:text-health-blue transition-colors font-medium" onClick={toggleMenu}>
              Health Evaluation
            </Link>
            <Link href="/philosophy" className="block text-gray-700 hover:text-health-blue transition-colors font-medium" onClick={toggleMenu}>
              Philosophy
            </Link>
            <Link href="/mighty-90" className="block text-gray-700 hover:text-health-blue transition-colors font-medium" onClick={toggleMenu}>
              Mighty 90
            </Link>
            <Link href="/resources" className="block text-gray-700 hover:text-health-blue transition-colors font-medium" onClick={toggleMenu}>
              Resources
            </Link>
            <Link href="/contact" className="block bg-glorious-sunset hover:bg-tangy-yellow text-white px-6 py-2 rounded-lg transition-colors font-semibold text-center" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
