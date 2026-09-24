import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Mount Shasta Union School District",
  description: "Learn about Mount Shasta Union School District and our commitment to student success.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-5 py-3.5 sticky top-0 z-50">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-[#8b1a2e] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-base font-semibold text-gray-900 tracking-tight">
            Mount Shasta Union School District
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">About Us</h1>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Who We Are
            </h2>
            <p className="leading-relaxed">
              Mount Shasta Union School District serves the students and families of Mount Shasta, California. We are committed to providing a safe, inclusive, and high-quality educational environment that prepares students for success in a rapidly changing world. Our district offers comprehensive K-8 education with dedicated staff, modern facilities, and strong community partnerships.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              To inspire and empower every student to achieve their full potential through innovative education, strong community partnerships, and a commitment to excellence.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Our Commitment to Communication
            </h2>
            <p className="leading-relaxed">
              Mount Shasta Union School District is committed to keeping students, parents, and community members informed and connected. We use modern communication tools, including SMS text messaging, to deliver important transactional account alerts and customer care notifications directly to families. Our messaging is used exclusively for account-related updates, important announcements, and customer support — never for unsolicited marketing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="leading-relaxed">
              We welcome your questions and feedback. Please reach out to us at:
            </p>
            <ul className="list-none space-y-2 mt-3">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@msusd.org" className="text-[#8b1a2e] underline">
                  support@msusd.org
                </a>
              </li>
              <li>
                <strong>Phone:</strong> 530-926-3434
              </li>
              <li>
                <strong>Address:</strong> 595 E Alma St, Mount Shasta, CA 96067
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
