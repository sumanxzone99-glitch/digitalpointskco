import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: DigitalPointSKWebsite,
})

function DigitalPointSKWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-700 text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-blue-400">
        <div>
          <h1 className="text-3xl font-bold">DiGiTAL POiNT SK</h1>
          <p className="text-sm text-blue-200">Online Form & Admission Updates</p>
        </div>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-2xl font-bold shadow-lg hover:scale-105 transition">
          Join Now
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-5xl font-extrabold leading-tight">
          Online Form <br />
          <span className="text-yellow-300">Update Portal</span>
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
          Get latest online form updates, admission notices, exam dates, scholarships, result updates, and university news in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://digitalpointsk.com"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
          >
            Apply Online
          </a>

          <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-blue-900 transition">
            Latest Updates
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-16">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold text-yellow-300">Admission Notice</h3>
          <p className="mt-3 text-blue-100">
            UG admission, online form, and student portal updates available here.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold text-yellow-300">Important Dates</h3>
          <p className="mt-3 text-blue-100">
            Check application deadlines and important university announcements.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold text-yellow-300">Student Help</h3>
          <p className="mt-3 text-blue-100">
            Easy updates for students through WhatsApp, Telegram, and website.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 text-center py-6 text-blue-100 border-t border-blue-400">
        <p>© 2026 DiGiTAL POiNT SK | Student Update Portal</p>
      </footer>
    </div>
  )
}
