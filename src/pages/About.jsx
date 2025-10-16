import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="pb-14 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            About <span className="bg-gradient-to-tr from-green-300 via-gray-300 to-gray-600 text-transparent bg-clip-text">JaruratCare</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-600 font-medium">
            Empowering healthcare professionals & patients with next-generation technology and real care.
          </p>
        </div>

        {/* Mission */}
        <div className="rounded-2xl shadow-2xl bg-white py-12 px-8 mb-14 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-7">Our Mission</h2>
          <p className="text-gray-700 text-lg max-w-2xl mb-4">
            We aim to transform healthcare management through fast, secure, and human-centered digital solutions.
            JaruratCare is built for both medical teams and patients, enabling everyone to achieve better outcomes
            with tools that feel as good as they work.
          </p>
        </div>

        {/* Highlights Grid */}
        <section className="grid md:grid-cols-3 gap-10 mb-14">
          <div className="bg-gray-50 rounded-2xl shadow p-8">
            <span className="text-4xl mb-3 text-green-600 block">🗂️</span>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Comprehensive Records</h3>
            <p className="text-gray-600">Every detail, securely stored and instantly accessed.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-8">
            <span className="text-4xl mb-3 text-green-600 block">⚡</span>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Realtime Analytics</h3>
            <p className="text-gray-600">Track trends, spot insights, and improve care everyday.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-8">
            <span className="text-4xl mb-3 text-green-600 block">🔒</span>
            <h3 className="font-bold text-lg mb-3 text-gray-900">Privacy First</h3>
            <p className="text-gray-600">Data is encrypted, compliant, and never sold or shared.</p>
          </div>
        </section>

        {/* Technology & Features */}
        <section className="grid md:grid-cols-2 gap-10 mb-14">
          <div className="bg-white rounded-2xl shadow-lg p-9 border border-gray-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">What We Offer</h3>
            <ul className="text-gray-600 grid gap-3 text-lg">
              <li><span className="text-green-700 font-bold mr-2">✓</span> Patient record management</li>
              <li><span className="text-green-700 font-bold mr-2">✓</span> Secure data storage</li>
              <li><span className="text-green-700 font-bold mr-2">✓</span> Real-time health tracking</li>
              <li><span className="text-green-700 font-bold mr-2">✓</span> User friendly dashboard</li>
              <li><span className="text-green-700 font-bold mr-2">✓</span> Advanced search & filters</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-9 border border-gray-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Technology</h3>
            <ul className="text-gray-600 grid gap-3 text-lg">
              <li><span className="text-green-700 font-bold mr-2">✓</span> Built on React & modern stacks</li>
              <li><span className="text-green-700 font-bold mr-2">✓</span> Full mobile & desktop support</li>
              <li><span className="text-green-700 font-bold mr-2">✓</span> Lightning fast performance</li>
              <li><span className="text-green-700 font-bold mr-2">✓</span> API integrations ready</li>
              <li><span className="text-green-700 font-bold mr-2">✓</span> Scalable, secure infrastructure</li>
            </ul>
          </div>
        </section>

        {/* Team */}
        <section className="mb-14">
          <div className="bg-gray-50 rounded-2xl shadow-xl p-10 text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="bg-white rounded-xl shadow p-7 w-56">
                <span className="text-4xl mb-2 text-green-700">👩‍⚕️</span>
                <div className="font-bold text-lg mb-1">Dr. Rohan Mehta</div>
                <div className="text-gray-500 text-sm">Chief Medical Officer</div>
              </div>
              <div className="bg-white rounded-xl shadow p-7 w-56">
                <span className="text-4xl mb-2 text-green-700">🧑‍💻</span>
                <div className="font-bold text-lg mb-1">Simran Kaur</div>
                <div className="text-gray-500 text-sm">Lead Engineer</div>
              </div>
              <div className="bg-white rounded-xl shadow p-7 w-56">
                <span className="text-4xl mb-2 text-green-700">🧑‍⚕️</span>
                <div className="font-bold text-lg mb-1">Amit Sharma</div>
                <div className="text-gray-500 text-sm">Support Head</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-14">
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gray-50 rounded-xl shadow p-7 text-center">
                <div className="font-bold text-lg mb-2 text-green-700">Trust</div>
                <div className="text-gray-500">Security and reliability in every service we provide.</div>
              </div>
              <div className="bg-gray-50 rounded-xl shadow p-7 text-center">
                <div className="font-bold text-lg mb-2 text-green-700">Compassion</div>
                <div className="text-gray-500">Always people-first, caring for every individual.</div>
              </div>
              <div className="bg-gray-50 rounded-xl shadow p-7 text-center">
                <div className="font-bold text-lg mb-2 text-green-700">Innovation</div>
                <div className="text-gray-500">Continually improving and pushing new boundaries in care.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-6">
          <div className="bg-gray-50 rounded-2xl shadow-xl p-10 border border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 text-lg mb-2">
              For support or questions, reach out at <a href="mailto:support@jaruratcare.com" className="text-green-700 hover:underline font-bold">support@jaruratcare.com</a>
            </p>
            <p className="text-gray-500">We typically reply within 24 hours.</p>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About
