"use client";

import { Link } from "react-router-dom";
import { FaArrowLeft, FaFileContract } from "react-icons/fa";

export default function TermsPage() {
  const lastUpdated = "June 19, 2026";

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-6"
          >
            <FaArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-2xl">
              <FaFileContract className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Terms and Conditions
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 prose prose-zinc dark:prose-invert">
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Welcome to <strong>GitHub Tracker</strong>. By accessing or using
              our website and services, you agree to be bound by these Terms and
              Conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              To access certain features, you may need to create an account. You
              are responsible for maintaining the confidentiality of your
              account and password. You agree to notify us immediately of any
              unauthorized use of your account.
            </p>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              You agree not to use our service for any unlawful purpose or in
              any way that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Violates GitHub’s Terms of Service</li>
              <li>Infringes on intellectual property rights</li>
              <li>Attempts to reverse engineer or scrape our platform</li>
              <li>Harasses, threatens, or harms other users</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              All content, design, and functionality on GitHub Tracker are the
              property of GitMetricsLab or its licensors. You may not copy,
              modify, distribute, or create derivative works without explicit
              permission.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We reserve the right to suspend or terminate your access to the
              service at any time, with or without cause, and without prior
              notice.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Disclaimers</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our service is provided "as is" without any warranties, express or
              implied. We do not guarantee that the service will be
              uninterrupted, error-free, or secure.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              In no event shall GitHub Tracker or its owners be liable for any
              indirect, incidental, special, consequential, or punitive damages
              arising out of your use of the service.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              These terms are governed by the laws of India. Any disputes shall
              be resolved exclusively in the courts of [Your City], India.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We may update these Terms from time to time. We will notify you of
              significant changes by posting the new Terms on this page and
              updating the "Last updated" date.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="mt-3">
              <a
                href="mailto:support@githubtracker.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                support@githubtracker.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} GitHub Tracker. All rights reserved.
        </div>
      </div>
    </div>
  );
}
