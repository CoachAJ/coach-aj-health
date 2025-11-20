import Link from 'next/link'
import { Metadata } from 'next'
import { CheckCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Mighty 90 Essential Nutrients | Coach AJ',
  description: 'Disease is nutritional deficiency, not genetics. Discover the 90 essential nutrients your body needs daily to heal and thrive. Based on epigenetics and Dr. Wallach\'s research.',
  keywords: 'mighty 90, 90 essential nutrients, nutritional deficiency, epigenetics, plant derived minerals, vitamins, amino acids, essential fatty acids, healthy start pack, Dr. Wallach',
}

export default function Mighty90Page() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tangy-yellow to-glorious-sunset text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Mighty 90 Essential Nutrients
            </h1>
            <p className="text-2xl md:text-3xl mb-4">
              The Foundation of All Health
            </p>
            <p className="text-xl text-orange-100">
              Your body needs 90 essential nutrients daily to heal, repair, and thrive
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-health-blue to-blue-sky text-white p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold mb-4">Disease is Nutritional Deficiency</h2>
              <p className="text-xl mb-4 text-blue-100">
                The prevailing theory of genetically transmitted disease is incorrect. Instead, <strong>600 to 900 poor health conditions and diseases are directly linked to nutritional deficiencies</strong>.
              </p>
              <p className="text-lg text-blue-100">
                This isn't a guess—it's backed by decades of research, including 30,000 autopsies and a $25 million NIH grant that proved nutritional deficiency is at the root of chronic disease.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-health-blue">Epigenetics: You Are in Control</h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong>Epigenetics</strong> is one of the foundational sciences of this program. It demonstrates that environmental factors—particularly nutrition—determine how genes are expressed.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This means <em>you have control</em> over your health outcomes. Your genes don't determine your destiny; your nutritional choices do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mighty 90 Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-health-blue text-center">
              What Are the 90 Essential Nutrients?
            </h2>

            <p className="text-xl text-center text-gray-700 mb-12">
              All vertebrates require these 90 nutrients daily to maintain and repair the body. Your body <strong>cannot manufacture them</strong>—they must be supplied through diet and supplementation.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-health-blue text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mr-4">
                    60
                  </div>
                  <h3 className="text-2xl font-bold text-health-blue">Minerals</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Including calcium, magnesium, zinc, selenium, chromium, and 55 trace minerals. These are the foundation of enzymatic functions, bone health, and cellular processes.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Key Point:</strong> Plant-derived colloidal minerals are superior because they come from plants that have already processed the minerals, making them bioavailable.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-glorious-sunset text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mr-4">
                    16
                  </div>
                  <h3 className="text-2xl font-bold text-glorious-sunset">Vitamins</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Including A, B-complex, C, D, E, and K. Vitamins are cofactors for thousands of biochemical reactions in your body.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Key Point:</strong> You need far more than the RDA to thrive. Vitamin C (1-5 grams daily) is the "key that turns on the connective tissue machinery."
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-tangy-yellow text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mr-4">
                    12
                  </div>
                  <h3 className="text-2xl font-bold text-tangy-yellow">Amino Acids</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The building blocks of protein. Essential amino acids must come from diet as your body cannot synthesize them.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Key Point:</strong> Collagen peptides provide crucial amino acids for connective tissue repair, skin health, and joint function.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-sky text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mr-4">
                    2-3
                  </div>
                  <h3 className="text-2xl font-bold text-blue-sky">Essential Fatty Acids</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Omega-3 and Omega-6 fatty acids. Critical for brain function, inflammation control, and hormone production.
                </p>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Key Point:</strong> EFAs are "Nature's Aspirin"—powerful anti-inflammatory agents that address pain at the source.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need Supplementation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue text-center">
              Why You Can't Get This from Food Alone
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-glorious-sunset mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Soil Depletion:</strong> Modern agricultural practices have stripped minerals from the soil. Foods today contain a fraction of the nutrients they did 100 years ago.
                </p>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-glorious-sunset mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Bioavailability Issues:</strong> Many nutrients from food are not in forms the body can easily absorb and utilize.
                </p>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-glorious-sunset mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Quantity Required:</strong> To get therapeutic levels of nutrients (not just survive, but thrive), you would need to consume impractical amounts of food daily.
                </p>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-glorious-sunset mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">
                  <strong>Digestive Issues:</strong> Most people have compromised digestion (leaky gut, low stomach acid, enzyme deficiency), which prevents proper nutrient absorption from food.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl border-l-4 border-glorious-sunset">
              <h3 className="text-2xl font-bold mb-4 text-glorious-sunset">The Solution: High-Quality Supplementation</h3>
              <p className="text-lg text-gray-700">
                The <strong>Healthy Start Pack</strong> (containing the Mighty 90) provides the foundational nutrients your body needs in bioavailable forms. Dosage is typically calculated per 100 pounds of body weight for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Healthy Start Pack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue text-center">
              Start with the Foundation
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-health-blue">The Healthy Start Pack / Healthy Brain and Heart Pack</h3>
              <p className="text-lg text-gray-700 mb-6">
                This is the <strong>"big hammer"</strong> containing <strong>215 nutrients</strong>, including the Mighty 90 Essential Nutrients. It's the non-negotiable baseline for anyone serious about reversing health challenges.
              </p>

              <h4 className="text-xl font-bold mb-3 text-gray-800">What's Included:</h4>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-glorious-sunset mr-2 text-xl">•</span>
                  <span><strong>Beyond Tangy Tangerine</strong> (Plant-Derived Minerals + Vitamins)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glorious-sunset mr-2 text-xl">•</span>
                  <span><strong>Ultimate EFA Plus</strong> (Essential Fatty Acids)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glorious-sunset mr-2 text-xl">•</span>
                  <span><strong>Osteo FX Plus</strong> (Calcium, Magnesium, Vitamin D3)</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white p-6 rounded-lg text-center">
                <p className="text-xl font-bold mb-2">Give Your Body 90 Days</p>
                <p className="text-lg">
                  Commit to the Mighty 90 for 90 days and feel the difference before making major medical decisions.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                For product details and ordering, explore the resources below:
              </p>
              <Link href="/resources" className="bg-health-blue hover:bg-blue-sky text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block text-lg">
                View Product Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Targeted Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue text-center">
              Beyond the Foundation: Targeted "Secret Sauces"
            </h2>

            <p className="text-xl text-center text-gray-700 mb-12">
              Once you have the foundation in place, targeted supplements address specific conditions. These work <em>in addition to</em> the Mighty 90, not instead of it.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-health-blue">Bone & Joint Health</h3>
                <p className="text-gray-700 text-sm">GlucoGel, MSM, Collagen Peptides, Osteo FX Plus</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-glorious-sunset">Brain & Nervous System</h3>
                <p className="text-gray-700 text-sm">EFAs, Smart FX, Synaptive, De-Stress, i26</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-tangy-yellow">Digestive Support</h3>
                <p className="text-gray-700 text-sm">Ultimate Enzymes, i26, Nightly Essence, Fucoid Z</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-green-600">Detoxification</h3>
                <p className="text-gray-700 text-sm">Herbal Rainforest, Fucoidan Z, True to Life Cleanse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-health-blue to-blue-sky text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's work together to identify your specific nutritional needs and create a personalized protocol.
            </p>
            <Link href="/contact" className="bg-glorious-sunset hover:bg-tangy-yellow text-white font-semibold px-10 py-5 rounded-lg transition-colors inline-block text-xl">
              Contact Coach AJ
            </Link>
          </div>
        </div>
      </section>

      {/* LSI Keywords */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-xs text-gray-500">
            <p>
              Mighty 90 Essential Nutrients | Nutritional Deficiency | Epigenetics | Plant Derived Minerals | Colloidal Minerals | Healthy Start Pack | Beyond Tangy Tangerine | Ultimate EFAs | Dr. Wallach | Orthomolecular Nutrition | Bioavailable Nutrients | Soil Depletion | RDA vs Optimal | Collagen Peptides | Essential Amino Acids | Essential Fatty Acids | Homeostasis | Chronic Degenerative Disease | Autoimmune Disease | Connective Tissue | Genetic Theory
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
