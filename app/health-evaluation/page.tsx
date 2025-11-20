import Link from 'next/link'
import { Metadata } from 'next'
import { ClipboardCheck, UserCheck, TrendingUp, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personalized Health Evaluation | Coach AJ',
  description: 'Get a comprehensive, personalized health assessment. Discover your nutritional deficiencies, understand your unique health challenges, and create an actionable plan with Coach AJ.',
  keywords: 'health evaluation, personalized health assessment, nutritional deficiency testing, health coach consultation, holistic health evaluation, wellness assessment',
}

export default function HealthEvaluationPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-glorious-sunset to-tangy-yellow text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Personalized Health Evaluation
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover the root causes of your health challenges and create a personalized roadmap to optimal wellness
            </p>
            <a 
              href="https://myhealthevaluation.com/?ygid=102742703"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-glorious-sunset hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center text-lg"
            >
              Start Your Health Evaluation <ExternalLink className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-health-blue text-center">
              What to Expect
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-health-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-health-blue">Comprehensive Assessment</h3>
                <p className="text-gray-700">
                  Complete a detailed health questionnaire covering your symptoms, lifestyle, diet, and health history.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-glorious-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-glorious-sunset">Personalized Review</h3>
                <p className="text-gray-700">
                  I'll personally review your results and identify patterns, nutritional deficiencies, and root causes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-tangy-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-tangy-yellow">Action Plan</h3>
                <p className="text-gray-700">
                  Receive a customized protocol addressing the Triangle of Disease specific to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Evaluation is Different */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue text-center">
              Why This Evaluation is Different
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-health-blue">Root Cause Focus</h3>
                <p className="text-gray-700">
                  Unlike conventional approaches that treat symptoms, this evaluation identifies the underlying biochemical imbalances following the <strong>Triangle of Disease</strong> framework.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-glorious-sunset">Nutritional Foundation</h3>
                <p className="text-gray-700">
                  Based on the principle that <strong>disease is nutritional deficiency</strong>, not genetics. We identify what your body is missing and provide the orthomolecular substances needed for healing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-tangy-yellow">Epigenetics Over Genetics</h3>
                <p className="text-gray-700">
                  Your genes don't determine your destiny. Through <strong>epigenetics</strong>, we show how environmental factors—particularly nutrition—determine how genes are expressed, giving you control over your health outcomes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-health-blue">Empowerment & Education</h3>
                <p className="text-gray-700">
                  You'll understand <em>why</em> your body is experiencing challenges and <em>how</em> to address them. This knowledge empowers you to become your own health authority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue text-center">
              What You'll Learn
            </h2>

            <div className="bg-blue-50 p-8 rounded-xl mb-6">
              <h3 className="text-2xl font-bold mb-4 text-health-blue">Your Unique Health Pattern</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-glorious-sunset mr-2 text-xl">•</span>
                  <span>Which point of the Triangle of Disease is your primary issue (digestive, blood sugar, or stress/hormones)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glorious-sunset mr-2 text-xl">•</span>
                  <span>Specific nutritional deficiencies affecting your symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glorious-sunset mr-2 text-xl">•</span>
                  <span>Food sensitivities and inflammatory triggers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-glorious-sunset mr-2 text-xl">•</span>
                  <span>Systemic patterns connecting seemingly unrelated symptoms</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-glorious-sunset">Your Personalized Protocol</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-health-blue mr-2 text-xl">•</span>
                  <span>Foundation: The <strong>Mighty 90 Essential Nutrients</strong> tailored to your body weight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-health-blue mr-2 text-xl">•</span>
                  <span>Targeted supplements ("secret sauces") for your specific conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-health-blue mr-2 text-xl">•</span>
                  <span>Dietary modifications: Good Foods/Bad Foods list customized to your sensitivities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-health-blue mr-2 text-xl">•</span>
                  <span>Lifestyle practices to support healing (breathing exercises, stress management, etc.)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-health-blue text-center">
              Your Investment in Health
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <p className="text-xl text-gray-700 mb-6">
                This comprehensive evaluation and personalized review session gives you clarity, direction, and a concrete action plan to transform your health.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Unlike conventional medical approaches that can cost thousands with limited results, this evaluation addresses root causes and empowers you with lifelong knowledge.
              </p>
              <a 
                href="https://myhealthevaluation.com/?ygid=102742703"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-glorious-sunset to-tangy-yellow hover:from-tangy-yellow hover:to-glorious-sunset text-white font-semibold px-10 py-5 rounded-lg transition-all inline-flex items-center text-xl"
              >
                Begin Your Health Evaluation <ExternalLink className="ml-2" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Combine with AO Scan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-health-blue to-blue-sky text-white p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-4">Enhance Your Results with AO Scan Technology</h2>
              <p className="text-xl mb-6 text-blue-100">
                For the most comprehensive assessment, combine your health evaluation with an AO Scan session. The frequency-based technology provides additional insights into your energetic state and can track your progress over time.
              </p>
              <Link href="/ao-scan" className="bg-white text-health-blue hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
                Learn About AO Scan Technology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
