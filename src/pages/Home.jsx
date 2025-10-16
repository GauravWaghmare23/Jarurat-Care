import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900 font-sans pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 tracking-tight">
            Welcome to <span className="bg-gradient-to-tr from-green-400 via-gray-400 to-gray-700 text-transparent bg-clip-text">JaruratCare</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Next-level, privacy-first healthcare management—power for doctors, empowerment for patients.
          </p>
          <a
            href="/patients"
            className="inline-block mt-6 px-8 sm:px-10 py-3 sm:py-4 bg-gray-900 text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:bg-gray-700 transition"
          >
            Try Dashboard
          </a>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
          <div className="rounded-2xl bg-white shadow-xl p-8 flex flex-col items-center">
            <div className="text-5xl mb-6 text-green-700">🏥</div>
            <h3 className="font-extrabold text-xl mb-2">Patient Management</h3>
            <p className="text-gray-600 text-center">Records, visits, prescriptions—together with privacy and speed.</p>
          </div>
          <div className="rounded-2xl bg-white shadow-xl p-8 flex flex-col items-center">
            <div className="text-5xl mb-6 text-green-700">📊</div>
            <h3 className="font-extrabold text-xl mb-2">Analytics</h3>
            <p className="text-gray-600 text-center">Actionable health insights and visual dashboards for all users.</p>
          </div>
          <div className="rounded-2xl bg-white shadow-xl p-8 flex flex-col items-center">
            <div className="text-5xl mb-6 text-green-700">🔒</div>
            <h3 className="font-extrabold text-xl mb-2">Secure & Compliant</h3>
            <p className="text-gray-600 text-center">Encrypted cloud storage, GDPR compliant, with fast recovery.</p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 border-t border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-5 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Why JaruratCare?</h2>
            <ul className="text-base sm:text-lg space-y-2 text-gray-700">
              <li><span className="text-green-700 font-bold mr-2">•</span> Scheduling and records management, all-in-one</li>
              <li><span className="text-green-700 font-bold mr-2">•</span> Fast onboarding for clinics</li>
              <li><span className="text-green-700 font-bold mr-2">•</span> Designed for patients, trusted by professionals</li>
              <li><span className="text-green-700 font-bold mr-2">•</span> Real-time care and analytics</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-48 sm:w-64 h-48 sm:h-64 rounded-3xl bg-gradient-to-br from-gray-200 via-white to-gray-50 flex items-center justify-center shadow-xl">
              <span className="text-5xl sm:text-7xl text-gray-400">🗂️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-4">
          <div className="bg-gray-50 rounded-2xl text-center p-8 border border-gray-100">
            <div className="font-black text-3xl text-green-700 mb-2">48K+</div>
            <div className="text-lg text-gray-600">Patients Managed</div>
          </div>
          <div className="bg-gray-50 rounded-2xl text-center p-8 border border-gray-100">
            <div className="font-black text-3xl text-gray-700 mb-2">150+</div>
            <div className="text-lg text-gray-600">Medical Partners</div>
          </div>
          <div className="bg-gray-50 rounded-2xl text-center p-8 border border-gray-100">
            <div className="font-black text-3xl text-green-700 mb-2">99.9%</div>
            <div className="text-lg text-gray-600">Uptime</div>
          </div>
          <div className="bg-gray-50 rounded-2xl text-center p-8 border border-gray-100">
            <div className="font-black text-3xl text-gray-700 mb-2">8 Years</div>
            <div className="text-lg text-gray-600">Service</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">What Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg text-gray-700 p-6 sm:p-8">
              <p className="mb-4 text-sm sm:text-base">“JaruratCare simplified our workflow and keeps records super safe!”</p>
              <span className="font-bold">—Dr. Anjali Singh</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg text-gray-700 p-6 sm:p-8">
              <p className="mb-4 text-sm sm:text-base">“I love the design, everything just works. The support team is excellent.”</p>
              <span className="font-bold">—Nurse Sameer</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg text-gray-700 p-6 sm:p-8">
              <p className="mb-4 text-sm sm:text-base">“The analytics help us improve quality and outcomes for patients.”</p>
              <span className="font-bold">—Clinic Admin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Preview */}
      <section className="py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center px-8">
          <img
            src="/dashboard-preview.png"
            alt=""
            className="w-full md:w-1/2 object-cover rounded-2xl shadow-2xl border-2 border-gray-200"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">See Your Data, Beautifully</h2>
            <p className="text-gray-600 mb-5">
              Modern dashboards make data easy to view and export for your clinic or hospital.
            </p>
            <a
              href="/patients"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-xl font-medium shadow hover:bg-gray-700 transition"
            >
              Explore Patients Grid
            </a>
          </div>
        </div>
      </section>

      {/* Patient Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="p-6 sm:p-8 rounded-xl shadow bg-white">
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-900">Personal Access</h3>
            <p className="text-gray-600 text-sm sm:text-base">Patients manage their own records securely & privately.</p>
          </div>
          <div className="p-6 sm:p-8 rounded-xl shadow bg-white">
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-900">Family Sharing</h3>
            <p className="text-gray-600 text-sm sm:text-base">Easily share medical history with authorized family.</p>
          </div>
          <div className="p-6 sm:p-8 rounded-xl shadow bg-white">
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-900">Updates & Alerts</h3>
            <p className="text-gray-600 text-sm sm:text-base">Timely reminders for appointments and follow-ups.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-14 bg-white border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">Meet Our Team</h2>
          <div className="flex flex-wrap gap-7 justify-center">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-64">
              <span className="text-4xl sm:text-5xl mb-4 text-green-700 block">👨‍⚕️</span>
              <div className="font-bold text-base sm:text-lg mb-1">Dr. Rohan Mehta</div>
              <div className="text-gray-600 text-sm">Chief Medical Officer</div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-64">
              <span className="text-4xl sm:text-5xl mb-4 text-green-700 block">🧑‍💻</span>
              <div className="font-bold text-base sm:text-lg mb-1">Simran Kaur</div>
              <div className="text-gray-600 text-sm">Lead Engineer</div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 w-64">
              <span className="text-4xl sm:text-5xl mb-4 text-green-700 block">🧑‍⚕️</span>
              <div className="font-bold text-base sm:text-lg mb-1">Amit Sharma</div>
              <div className="text-gray-600 text-sm">Support Head</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-black mb-6 text-gray-900">Ready to get started?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Experience a smarter, more beautiful platform for patient care.
          </p>
          <a
            href="/patients"
            className="inline-block px-9 py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-xl hover:bg-gray-700 transition text-lg"
          >
            Launch Dashboard
          </a>
        </div>
      </section>

      {/* FAQ and Footer */}
      <section className="bg-white border-t border-gray-200 pt-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Frequently Asked Questions</h2>
          <div className="space-y-7">
            <div>
              <h4 className="font-semibold text-gray-800">Is JaruratCare free?</h4>
              <p className="text-gray-600">All patient features are free for individuals. Clinics can book a demo for premium tools.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Is my data safe?</h4>
              <p className="text-gray-600">Absolutely. We use strong encryption; data is private and stays in your control.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Can I export my data?</h4>
              <p className="text-gray-600">Download/share your records and reports with one click.</p>
            </div>
          </div>
        </div>
        <footer className="bg-gray-900 text-gray-400 py-10 px-5 mt-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-5 md:mb-0">
              <span className="font-black text-white text-xl">JaruratCare</span> &copy; 2025
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">Dashboard</a>
              <a href="#" className="hover:text-white">Support</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Home;
