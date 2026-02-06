import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AILO Privacy Policy. Learn how we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-white/40 text-sm mb-12">
              Effective Date: February 18, 2025 | Last Update: February 2, 2026
            </p>

            <div className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-8">
              {/* Introduction */}
              <section>
                <p className="text-white/60 leading-relaxed mb-4">
                  AILO International Inc. is a unique platform designed to help people seeking meaningful, compatible relationships connect with one another—but with more to offer! AILO, which stands for Authentic, Intelligence, Love, Optimization, significantly boosts your chances of building a successful, fulfilling connection.
                </p>
                <p className="text-white/60 leading-relaxed">
                  This Privacy Policy (&ldquo;Policy&rdquo;) applies to personal data AILO International, Inc. (&ldquo;AILO,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects. This Policy also covers rights and choices related to your personal data.
                </p>
              </section>

              {/* Age Restriction */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Age Restriction & Protection of Minors</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  AILO (Package Name: com.katana.ailo) is designed exclusively for adults <strong className="text-white">21 years of age or older</strong>. We do not knowingly collect or allow the submission of personal data from anyone under 21.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  Although the Apple App Store and Google Play may classify AILO under an 18+ age rating for platform compliance purposes, AILO&apos;s internal policy strictly prohibits access to anyone under 21.
                </p>
                <ul className="text-white/60 leading-relaxed space-y-2 list-disc pl-5">
                  <li>You must be at least 21 years old to create an account or use AILO in any capacity.</li>
                  <li>During registration, users are required to provide their date of birth, and our system prevents the entry of any birth year that would result in an age below 21.</li>
                  <li>Any attempt to misrepresent age or bypass verification will result in immediate account suspension and permanent removal.</li>
                </ul>
              </section>

              {/* Zero Tolerance */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Zero Tolerance for Child Exploitation (CSAM / CSAE)</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  AILO maintains a <strong className="text-white">strict zero-tolerance policy</strong> toward any form of Child Sexual Abuse Material (CSAM), Child Sexual Abuse or Exploitation (CSAE), grooming, or solicitation involving minors.
                </p>
                <ul className="text-white/60 leading-relaxed space-y-2 list-disc pl-5 mb-4">
                  <li>The creation, possession, distribution, request, or promotion of such content is strictly forbidden.</li>
                  <li>Any user suspected of engaging in such conduct will be immediately suspended and reported to the National Center for Missing & Exploited Children (NCMEC) and relevant law enforcement authorities.</li>
                  <li>All associated data may be retained and disclosed for investigative and legal compliance purposes.</li>
                </ul>
              </section>

              {/* Reporting & Enforcement */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Reporting & Enforcement</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Users may report any content or behavior involving potential child endangerment, exploitation, or age misrepresentation by:
                </p>
                <ul className="text-white/60 leading-relaxed space-y-2 list-disc pl-5 mb-4">
                  <li>Using the in-app &ldquo;Report&rdquo; function, or</li>
                  <li>Contacting us directly at{" "}
                    <a href="mailto:safety@ailoapp.com" className="text-[var(--color-accent)] hover:underline">safety@ailoapp.com</a>
                  </li>
                </ul>
                <p className="text-white/60 leading-relaxed">
                  All reports are reviewed within 24 hours. Accounts under investigation may be temporarily restricted or suspended. Confirmed violations will result in permanent account removal and referral to law enforcement.
                </p>
              </section>

              {/* Data We Collect */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Data We Collect</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  We collect data about you in different ways:
                </p>
                <ul className="text-white/60 leading-relaxed space-y-2 list-disc pl-5 mb-6">
                  <li><strong className="text-white/80">Directly from you.</strong> This includes when you make an account, create a profile, sign up to receive our emails, purchase premium features, or contact us.</li>
                  <li><strong className="text-white/80">Automatically.</strong> This includes through cookies, server logs, and other tools on our website and mobile app.</li>
                  <li><strong className="text-white/80">From other sources.</strong> These can include our affiliates, vendors, publicly available sources, and other companies.</li>
                </ul>

                {/* Data Collection Table */}
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Account Registration</h4>
                    <p className="text-white/60 text-sm">We collect your name and contact information when you create an account to provide account related functionalities and configure your settings.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Assessment Questionnaire</h4>
                    <p className="text-white/60 text-sm">We collect information about you such as your physical features and lifestyle preferences to evaluate your compatibility with potential matches.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">User Chats</h4>
                    <p className="text-white/60 text-sm">We collect information you provide to send to your matches to facilitate communications between our users.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Distance/Location</h4>
                    <p className="text-white/60 text-sm">When you use our apps, we collect your location from GPS, Wi-Fi, and/or cellular technology to determine your proximity to potential matches.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Purchase Information</h4>
                    <p className="text-white/60 text-sm">We collect billing information when you purchase premium features to perform our contract to provide products or services.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">User Profile</h4>
                    <p className="text-white/60 text-sm">We collect information such as your name, location, photos, age-range, and lifestyle and gender preferences to build and display user profiles for compatible matches.</p>
                  </div>
                </div>
              </section>

              {/* How We Use Data */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">How We Use Data</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  The questions in our assessment may seem odd at first, but your answers are never shown on your profile or anywhere else throughout our platform. Your answers are only used for our scientific and proven analysis of your natural behavior, lifestyle preferences, perception and tolerance.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">We also use data to:</p>
                <ul className="text-white/60 leading-relaxed space-y-2 list-disc pl-5">
                  <li>Evaluate your compatibility with other users of the app.</li>
                  <li>Identify you when you use our mobile app.</li>
                  <li>Complete transactions.</li>
                  <li>Improve or create services and products.</li>
                  <li>Conduct analytics.</li>
                  <li>Connect with you (e.g., addressing your requests, inquiries, issues, or feedback).</li>
                  <li>Market our products or services.</li>
                  <li>Find and prevent malicious, deceptive, fraudulent, or illegal activity.</li>
                  <li>Find and prevent security incidents.</li>
                  <li>Enforce our policies and agreements.</li>
                  <li>Debug, find, and fix errors that impair our website and services.</li>
                  <li>Comply with legal or regulatory obligations.</li>
                </ul>
              </section>

              {/* Joint Assessments (AILO Duo) */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Joint Assessments (AILO Duo)</h2>
                <p className="text-white/60 leading-relaxed">
                  For AILO Duo, assessment data provided by each participant is used to generate joint compatibility results that are visible to both participants. Duo reports are stored within the Services and may be removed by a user. Removed reports cannot be restored.
                </p>
              </section>

              {/* How We Share Data */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">How We Share Data</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  <strong className="text-white">We do not share, sell, or distribute any of your personal information with a third-party entity for reasons other than to operate our services and run our company.</strong> Your information is stored and used for AILO&apos;s profile creation and compatibility analysis.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">We may share personal data in the following situations:</p>
                <ul className="text-white/60 leading-relaxed space-y-3 list-disc pl-5">
                  <li><strong className="text-white/80">Public Profile.</strong> The data included in your public profile will be displayed on your profile and shared with the matches we add to your feed.</li>
                  <li><strong className="text-white/80">Affiliates and Acquisitions.</strong> We may share data with our affiliates (e.g., parent company, sister companies, subsidiaries, joint ventures, or other companies under common control).</li>
                  <li><strong className="text-white/80">Other Disclosures without Your Consent.</strong> We may share data to cooperate with law enforcement, participate in a legal process, or for legal compliance.</li>
                  <li><strong className="text-white/80">Service Providers.</strong> We may share your data with service providers who help us run our website, conduct surveys, provide technical support, process payments, and fulfill orders.</li>
                  <li><strong className="text-white/80">Professional Services.</strong> We may share personal data with our professional service providers, such as auditors or lawyers.</li>
                  <li><strong className="text-white/80">Other Disclosures with Your Consent.</strong> We may share your data with third parties when you consent or direct us to.</li>
                </ul>
              </section>

              {/* Your Choices */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Your Choices</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Some jurisdictions give you a right to make the following choices about your personal data:
                </p>
                <ul className="text-white/60 leading-relaxed space-y-2 list-disc pl-5 mb-4">
                  <li><strong className="text-white/80">Update and Change Profile Information.</strong> After you register, you can change the Personal Details in your profile, other than your birthday, at any time through your account setting. You are responsible for making sure your account details are kept up to date.</li>
                  <li><strong className="text-white/80">Online Tracking.</strong> We do not recognize the &ldquo;Do Not Track&rdquo; signal.</li>
                </ul>
                <p className="text-white/60 leading-relaxed">
                  Not all the rights above are absolute, and they do not apply in all circumstances. We may limit or deny some requests because the law permits or requires us to. We will not discriminate against individuals who exercise their privacy rights under applicable law.
                </p>
              </section>

              {/* How We Protect and Retain Data */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">How We Protect and Retain Data</h2>
                <p className="text-white/60 leading-relaxed">
                  No method of internet transmission or electronic storage is fully secure. While we use reasonable efforts to protect your personal data, we cannot guarantee its security. If we are required to inform you about a security incident, we will do so electronically, in writing, or by phone, as the law permits.
                </p>
              </section>

              {/* User Messages & Communications */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">User Messages & Communications</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  AILO may offer messaging or communication features that allow users to exchange content within the Services. Communications are visible to the participating users and are stored in accordance with the functionality of the Services.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  Users are responsible for managing their own conversations, including deleting or removing chat history within the app. AILO does not guarantee the retention, availability, or restoration of any messages or communication history.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Blocking or reporting another user may restrict future communications but does not automatically remove prior messages. Users acknowledge that any information shared through messaging features is provided at their own discretion and risk.
                </p>
              </section>

              {/* Third-Party Applications/Websites */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Third-Party Applications/Websites</h2>
                <p className="text-white/60 leading-relaxed">
                  We may provide links to websites and other third-party content or services that we do not own or operate. We have no control over the privacy practices of websites or services we do not own. For details about such third parties&apos; privacy practices, see their privacy policies.
                </p>
              </section>

              {/* Changes To This Privacy Policy */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Changes To This Privacy Policy</h2>
                <p className="text-white/60 leading-relaxed">
                  We may change our Policy and privacy practices. New Policies will be published on our website. If changes are material, the Policy that was in place when you submitted personal data to us will generally govern that data unless you consent to the new Policy. Our Policy shows &ldquo;effective&rdquo; and &ldquo;last updated&rdquo; dates below. The effective date is the date the current version took effect. The last updated date is the date the current version was last substantively changed.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Contact Information</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  If you have questions, comments, or complaints on our privacy practices, or if you need to access this Policy in a different form due to a disability, please contact us. We will try to address your requests and provide you with additional privacy-related information.
                </p>
                <ul className="text-white/60 leading-relaxed space-y-2">
                  <li>
                    <strong className="text-white/80">Email:</strong>{" "}
                    <a href="mailto:support@ailoapp.com" className="text-[var(--color-accent)] hover:underline">support@ailoapp.com</a>
                  </li>
                  <li>
                    <strong className="text-white/80">Mail:</strong> P.O. Box 450134 Miami Florida 33245
                  </li>
                  <li>
                    <strong className="text-white/80">Safety Center:</strong>{" "}
                    <a href="https://www.ailoapp.com/safety" className="text-[var(--color-accent)] hover:underline">www.ailoapp.com/safety</a>
                  </li>
                </ul>
              </section>

              {/* Related Links */}
              <section className="pt-8 border-t border-white/10">
                <p className="text-white/60 leading-relaxed">
                  Please also review our{" "}
                  <Link href="/terms" className="text-[var(--color-accent)] hover:underline">
                    Terms of Service
                  </Link>
                  , which governs your use of the Services.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
