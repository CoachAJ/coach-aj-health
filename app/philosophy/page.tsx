import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Philosophy - Triangle of Disease | Coach AJ',
  description: 'Understanding the root causes of chronic disease. The Triangle of Disease framework: digestive health, blood sugar metabolism, and the adrenal-thyroid complex. Go upstream to heal.',
  keywords: 'triangle of disease, leaky gut, dysglycemia, dirty blood, metabolic syndrome, holistic health philosophy, first principle of healing, go upstream, systemic inflammation, autoimmune disease protocol',
}

export default function PhilosophyPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-health-blue to-blue-sky text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The First Principle of Healing
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-blue-100 italic">
              "Where you see the problem is not where the problem begins"
            </p>
            <p className="text-xl text-blue-100">
              Go Upstream to the Root Causes
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold mb-4">The Problem is Generic</h2>
              <p className="text-lg mb-4">
                All chronic degenerative diseases are fundamentally the same. They are symptoms—the "rotten fruit" on the tree—of an underlying systemic failure.
              </p>
              <p className="text-lg">
                Whether it's called heart disease, diabetes, autoimmune conditions, or chronic pain, these are all manifestations of <strong>MBFA disease</strong> (My Body Is Falling Apart disease).
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold mb-4 text-health-blue">The Solution is Foundational</h2>
              <p className="text-lg text-gray-700 mb-4">
                The goal is to <strong>go upstream</strong> to the root causes, not to treat the symptoms downstream. Health is fundamentally simple, even though authorities try to make it seem complicated.
              </p>
              <p className="text-lg text-gray-700">
                <strong>You have more power and control</strong> over your body's biochemistry than you've been told. The body's nature is to heal itself when given the right inputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Triangle of Disease */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-health-blue text-center">
              The Triangle of Disease
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              All disease is cell disease, and all cell disease is preceded by <strong>dirty blood</strong>.
            </p>

            <div className="space-y-8">
              {/* Point 1: Digestive System */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-health-blue">
                <div className="flex items-start mb-4">
                  <div className="bg-health-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-health-blue mb-2">The Digestive System</h3>
                    <p className="text-lg font-semibold text-glorious-sunset">Dirty Blood / Toxicity / Leaky Gut</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <h4 className="text-xl font-bold mb-3 text-gray-800">The Core Mechanism</h4>
                  <p className="text-gray-700 mb-4">
                    The intestine is the <strong>"soil"</strong>—the main portal where the outside world meets the inside world. When the gut barrier is compromised (<strong>leaky gut</strong>), toxins and undigested particles (like gluten or bacterial components/LPS) sneak into the bloodstream, contaminating the blood.
                  </p>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-red-800 mb-2">Why This Must Be Addressed First</h5>
                        <p className="text-gray-700">
                          If you do not <strong>stop the stream of toxicity</strong> getting into the blood, nothing can heal. Digestive issues are the precursor to all autoimmune diseases.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-gray-800">Common Contributors</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li><strong>Dysbiosis / SIBO</strong> (Small Intestinal Bacterial Overgrowth)</li>
                    <li>Food sensitivities (especially gluten, processed oils, fried foods)</li>
                    <li>Chronic stress affecting gut-brain axis</li>
                    <li>Lack of digestive enzymes and beneficial bacteria</li>
                  </ul>

                  <h4 className="text-xl font-bold mb-3 text-gray-800">Solutions</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Remove inflammatory foods (gluten, fried foods, processed oils)</li>
                    <li>Support with <strong>i26</strong> (to address bacteria/SIBO)</li>
                    <li>Repair intestinal lining with <strong>Collagen Peptides</strong>, <strong>Fucoid Z</strong></li>
                    <li>Add digestive enzymes and probiotics (<strong>Ultimate Enzymes</strong>, <strong>Nightly Essence</strong>)</li>
                  </ul>
                </div>
              </div>

              {/* Point 2: Blood Sugar System */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-glorious-sunset">
                <div className="flex items-start mb-4">
                  <div className="bg-glorious-sunset text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-glorious-sunset mb-2">The Blood Sugar System</h3>
                    <p className="text-lg font-semibold text-health-blue">Dysglycemia / Hyperinsulinemia / Metabolic Syndrome</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <h4 className="text-xl font-bold mb-3 text-gray-800">The Core Mechanism</h4>
                  <p className="text-gray-700 mb-4">
                    The body is often starved of nutrients but simultaneously overwhelmed by <strong>sugar</strong>, which acts as a major toxin. This leads to systemic inflammation and <strong>glycation</strong> (sugar damage to connective tissue).
                  </p>
                  
                  <div className="bg-orange-50 border-l-4 border-glorious-sunset p-4 mb-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 text-glorious-sunset mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-orange-800 mb-2">Universal Connection</h5>
                        <p className="text-gray-700">
                          Chronic degenerative disease is associated with a blood sugar problem. <strong>"Treat yourself like a diabetic,"</strong> regardless of diagnosis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-gray-800">What Is Metabolic Syndrome?</h4>
                  <p className="text-gray-700 mb-4">
                    Metabolic Syndrome is linked to virtually all health issues: high blood pressure, cancer, dementia, autoimmune conditions. It's "everything syndrome" because dysregulated blood sugar affects every cell.
                  </p>

                  <h4 className="text-xl font-bold mb-3 text-gray-800">Solutions</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Eliminate refined sugars and processed carbohydrates</li>
                    <li>Stabilize blood sugar with <strong>Sweeties</strong> (chromium support)</li>
                    <li>Support mitochondrial function with <strong>Ultimate Niacin</strong></li>
                    <li>Adopt ketogenic/paleolithic dietary approach</li>
                    <li>Practice calorie restriction and intermittent fasting</li>
                  </ul>
                </div>
              </div>

              {/* Point 3: Adrenal-Thyroid Complex */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-tangy-yellow">
                <div className="flex items-start mb-4">
                  <div className="bg-tangy-yellow text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-tangy-yellow mb-2">The Adrenal-Thyroid Complex</h3>
                    <p className="text-lg font-semibold text-health-blue">Regulatory Hub / Stress Response / Hormonal Balance</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <h4 className="text-xl font-bold mb-3 text-gray-800">The Core Mechanism</h4>
                  <p className="text-gray-700 mb-4">
                    This complex governs metabolism, energy production, and hormonal balance. It's your body's stress management system.
                  </p>
                  
                  <div className="bg-yellow-50 border-l-4 border-tangy-yellow p-4 mb-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-6 h-6 text-tangy-yellow mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-yellow-800 mb-2">Important Note</h5>
                        <p className="text-gray-700">
                          To work on thyroid and adrenal health, you <strong>must first address the first two points</strong> (digestion and blood sugar). The adrenal-thyroid complex often improves naturally when the foundational issues are resolved.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-gray-800">Solutions</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Practice <strong>slow, deep rhythmic breathing</strong> to activate parasympathetic nervous system</li>
                    <li>Support with adaptogenic supplements</li>
                    <li>Ensure adequate rest and sleep</li>
                    <li>Address cortisol dysfunction patterns identified through regular assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-health-blue to-blue-sky text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Fighting "Overthinkitis"</h2>
              <p className="text-xl mb-6 text-blue-100">
                Society conditions us to believe we're too dumb to understand our own health. The mainstream medical model often treats names (diagnoses) rather than the underlying chemistry.
              </p>
              <p className="text-xl mb-6 text-blue-100">
                <strong>Health doesn't have to be complicated.</strong> The body breaks down generically—the mechanisms are the same regardless of the disease label.
              </p>
              <p className="text-2xl font-bold">
                You can become your own health authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue">
              Ready to Apply This Philosophy?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              The foundational solution starts with the Mighty 90 Essential Nutrients and targeted protocols for each point of the triangle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mighty-90" className="bg-health-blue hover:bg-blue-sky text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center">
                Discover the Mighty 90 <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/contact" className="bg-glorious-sunset hover:bg-tangy-yellow text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center">
                Work With Coach AJ <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LSI Keywords for SEO */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-xs text-gray-500">
            <p>
              Triangle of Disease | Dirty Blood | Leaky Gut Syndrome | Dysbiosis | SIBO | Dysglycemia | Hyperinsulinemia | Metabolic Syndrome | Systemic Inflammation | Glycation | Adrenal-Thyroid Complex | Autoimmune Disease Protocol | Go Upstream | First Principle of Healing | Biochemistry | Orthomolecular Nutrition | Empowered Individual | Overthinkitis | Homeostasis | Parasympathetic Nervous System | Chronic Degenerative Disease
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
