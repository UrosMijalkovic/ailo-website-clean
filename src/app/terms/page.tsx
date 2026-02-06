import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "AILO Terms of Service Agreement. Read about the terms and conditions for using AILO's premium matchmaking service.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service Agreement
            </h1>
            <p className="text-white/40 text-sm mb-12">
              Last Updated: February 2, 2026
            </p>

            <div className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
                <p className="text-white/80 leading-relaxed text-sm">
                  PLEASE READ THIS AGREEMENT CAREFULLY. BY ACCESSING OR USING THE SERVICES OR OTHERWISE AGREEING TO THIS AGREEMENT, YOU UNDERSTAND AND AGREE TO BE BOUND BY THIS AGREEMENT AND RECOGNIZE THAT YOU MAY BE WAIVING CERTAIN RIGHTS.
                </p>
              </div>

              {/* Table of Contents */}
              <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold text-white mb-4">Table of Contents</h2>
                <ul className="text-white/60 text-sm space-y-2 columns-1 sm:columns-2 gap-8">
                  <li><a href="#acceptance" className="hover:text-[var(--color-accent)] transition-colors">Acceptance of Terms</a></li>
                  <li><a href="#definitions" className="hover:text-[var(--color-accent)] transition-colors">Definitions</a></li>
                  <li><a href="#age-requirements" className="hover:text-[var(--color-accent)] transition-colors">User Age Requirements</a></li>
                  <li><a href="#child-exploitation" className="hover:text-[var(--color-accent)] transition-colors">Zero Tolerance for Child Exploitation</a></li>
                  <li><a href="#user-accounts" className="hover:text-[var(--color-accent)] transition-colors">User Accounts</a></li>
                  <li><a href="#service-availability" className="hover:text-[var(--color-accent)] transition-colors">Service Availability</a></li>
                  <li><a href="#access-levels" className="hover:text-[var(--color-accent)] transition-colors">Access Level & Core Offering</a></li>
                  <li><a href="#premium-services" className="hover:text-[var(--color-accent)] transition-colors">Premium Services, Billing & Payments</a></li>
                  <li><a href="#account-deletion" className="hover:text-[var(--color-accent)] transition-colors">Account Deletion & No-Pause Policy</a></li>
                  <li><a href="#assessment" className="hover:text-[var(--color-accent)] transition-colors">Assessment & Insights</a></li>
                  <li><a href="#no-guarantee" className="hover:text-[var(--color-accent)] transition-colors">No Guarantee of Matches or Outcomes</a></li>
                  <li><a href="#safety" className="hover:text-[var(--color-accent)] transition-colors">Safety Notice</a></li>
                  <li><a href="#disclaimer" className="hover:text-[var(--color-accent)] transition-colors">Disclaimer of Warranty</a></li>
                  <li><a href="#liability" className="hover:text-[var(--color-accent)] transition-colors">Limitation of Liability</a></li>
                  <li><a href="#indemnity" className="hover:text-[var(--color-accent)] transition-colors">Indemnity</a></li>
                  <li><a href="#refunds" className="hover:text-[var(--color-accent)] transition-colors">Non-Refundability</a></li>
                  <li><a href="#intellectual-property" className="hover:text-[var(--color-accent)] transition-colors">Intellectual Property Rights</a></li>
                  <li><a href="#arbitration" className="hover:text-[var(--color-accent)] transition-colors">Disputes, Arbitration & Class Action Waiver</a></li>
                  <li><a href="#geographic" className="hover:text-[var(--color-accent)] transition-colors">Terms for Certain Geographic Locations</a></li>
                  <li><a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact Us</a></li>
                </ul>
              </nav>

              {/* Acceptance of Terms */}
              <section id="acceptance">
                <h2 className="text-xl font-semibold text-white mb-3">Acceptance of Terms</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  This Terms of Service Agreement (&ldquo;Agreement&rdquo;) is a legally binding agreement between you and AILO International, Inc. (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and governs your access to and use of our websites, mobile and other online services or applications that link to this Agreement, including our Mobile App (each a &ldquo;Site,&rdquo; and collectively the &ldquo;Sites&rdquo;) and the features, content, programs, and services we make available through the Sites (collectively with the Sites, the &ldquo;Services&rdquo;).
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white/70 text-sm leading-relaxed">
                    <strong className="text-white">THIS AGREEMENT CONTAINS A BINDING ARBITRATION AGREEMENT</strong> WHICH LIMITS YOUR RIGHTS TO BRING AN ACTION IN COURT, BRING A CLASS ACTION, AND HAVE DISPUTES DECIDED BY A JUDGE OR JURY, AS WELL AS PROVISIONS THAT LIMIT OUR LIABILITY TO YOU.
                  </p>
                </div>
              </section>

              {/* Definitions */}
              <section id="definitions">
                <h2 className="text-xl font-semibold text-white mb-3">Definitions</h2>
                <ul className="text-white/60 leading-relaxed space-y-2">
                  <li><strong className="text-white/80">&ldquo;Free User&rdquo;</strong>: A registered user who has not been granted access to AILO Unlimited.</li>
                  <li><strong className="text-white/80">&ldquo;AILO Unlimited&rdquo;</strong>: A premium access level providing matchmaking and expanded features, subject to approval.</li>
                  <li><strong className="text-white/80">&ldquo;AILO Duo&rdquo;</strong>: A standalone compatibility feature allowing two individuals to receive joint assessment results.</li>
                  <li><strong className="text-white/80">&ldquo;Active Matching Region&rdquo;</strong>: A geographic area where AILO matching services are live.</li>
                  <li><strong className="text-white/80">&ldquo;Account&rdquo;</strong>: A registered AILO user profile.</li>
                </ul>
              </section>

              {/* User Age Requirements */}
              <section id="age-requirements">
                <h2 className="text-xl font-semibold text-white mb-3">User Age Requirements</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  AILO (Package Name: com.katana.ailo) is exclusively intended for users who are <strong className="text-white">21 years of age or older</strong>.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  While the Apple App Store and Google Play may classify AILO under an 18+ content rating for platform compliance purposes, AILO&apos;s internal policy enforces a higher standard of eligibility.
                </p>
                <ul className="text-white/60 leading-relaxed space-y-2 list-disc pl-5">
                  <li>You must be at least 21 years old to create an account or use AILO in any capacity.</li>
                  <li>During registration, users are required to provide their date of birth, and our system does not permit entry of a birth year that would result in an age below 21.</li>
                  <li>Any attempt to falsify age information, bypass age verification, or otherwise misrepresent eligibility will result in immediate account suspension and data removal.</li>
                </ul>
              </section>

              {/* Zero Tolerance for Child Exploitation */}
              <section id="child-exploitation">
                <h2 className="text-xl font-semibold text-white mb-3">Zero Tolerance for Child Exploitation</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  AILO strictly prohibits the creation, possession, distribution, or promotion of any content involving minors in sexual, harmful, or exploitative contexts (including CSAM/CSAE — Child Sexual Abuse Material / Exploitation).
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  Any account found to be engaging in such activity will be <strong className="text-white">immediately reported to the National Center for Missing & Exploited Children (NCMEC)</strong> and law enforcement authorities, and permanently banned from the platform.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Users may report any content or behavior involving potential child endangerment, exploitation, or age misrepresentation by using the in-app &ldquo;Report&rdquo; function or by contacting{" "}
                  <a href="mailto:safety@ailoapp.com" className="text-[var(--color-accent)] hover:underline">safety@ailoapp.com</a>
                </p>
              </section>

              {/* User Accounts */}
              <section id="user-accounts">
                <h2 className="text-xl font-semibold text-white mb-3">User Accounts</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  To access certain features of the Services, a User must create an account (&ldquo;Account&rdquo;). Users are required to provide accurate, current, and complete information during registration and to keep such information updated.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  Each User may maintain only one Account at any given time. Accounts are personal and non-transferable and may not be shared, sold, assigned, or used by any other individual.
                </p>
                <p className="text-white/60 leading-relaxed">
                  AILO reserves the right, at its sole discretion, to suspend, restrict, or terminate any Account that violates these Terms of Service, the Code of Conduct, applicable law, or otherwise compromises the integrity, security, or operation of the Services.
                </p>
              </section>

              {/* Service Availability */}
              <section id="service-availability">
                <h2 className="text-xl font-semibold text-white mb-3">Service Availability</h2>
                <p className="text-white/60 leading-relaxed">
                  AILO&apos;s matching services are currently available only within designated geographic regions, including South Florida. Users located outside an active matching region will not receive matches until matching services become available in their area. Any regional limitations will be clearly disclosed at the time of sign-up and prior to any purchase that requires an active matching region.
                </p>
              </section>

              {/* Access Level & Core Offering */}
              <section id="access-levels">
                <h2 className="text-xl font-semibold text-white mb-3">Access Level & Core Offering</h2>

                <h3 className="text-lg font-medium text-white/90 mb-2 mt-4">Free Users</h3>
                <p className="text-white/60 leading-relaxed mb-2">Free Users may:</p>
                <ul className="text-white/60 leading-relaxed space-y-1 list-disc pl-5 mb-4">
                  <li>Create an Account</li>
                  <li>Complete the AILO assessment</li>
                  <li>View a limited Profile Preview</li>
                  <li>View a limited Needs Insight</li>
                  <li>View one sample match</li>
                  <li>Use AILO Duo as a standalone feature</li>
                </ul>
                <p className="text-white/60 leading-relaxed mb-4">Free Users are not included in the matchmaking pool.</p>

                <h3 className="text-lg font-medium text-white/90 mb-2">AILO Unlimited</h3>
                <p className="text-white/60 leading-relaxed mb-2">AILO Unlimited provides approved users with access to:</p>
                <ul className="text-white/60 leading-relaxed space-y-1 list-disc pl-5 mb-4">
                  <li>Full matchmaking features</li>
                  <li>Feed and Match Lounge</li>
                  <li>Chat functionality</li>
                  <li>Full Needs Insight & Compatibility Analysis</li>
                  <li>Monthly AILO Duo session and assessment retake</li>
                </ul>

                <h3 className="text-lg font-medium text-white/90 mb-2">AILO Duo</h3>
                <p className="text-white/60 leading-relaxed">
                  AILO Duo is an optional, standalone compatibility feature that allows two Users to participate in a joint assessment experience and receive a paired compatibility analysis. Use of AILO Duo requires both participants to maintain active AILO accounts and complete the required profile information and assessments.
                </p>
              </section>

              {/* Premium Services, Billing & Payments */}
              <section id="premium-services">
                <h2 className="text-xl font-semibold text-white mb-3">Premium Services, Billing & Payments</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Premium services require payment through approved app store providers. All pricing and billing terms are disclosed at the point of purchase.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  AILO Unlimited is offered through an application and approval process. Access is granted only after approval by AILO and completion of any applicable payment and profile requirements.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  Payments for paid features may be processed through third-party payment providers, including Apple&apos;s App Store, Google Play, or other authorized processors. AILO does not store or process payment card information directly.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Where required by law, applicable taxes may be added to purchases at checkout and collected by the applicable payment provider.
                </p>
              </section>

              {/* Account Deletion */}
              <section id="account-deletion">
                <h2 className="text-xl font-semibold text-white mb-3">Account Deletion & No-Pause Policy</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Deleting the AILO mobile application does not delete a User&apos;s Account and does not cancel any active access or entitlements.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  Account deletion includes a seven (7) day grace period before permanent removal, during which the Account may be reactivated by logging back in.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Any matches, chat histories, Saved or Sample Lounge content, AILO Duo history, Profile Preview, Needs Insight, and Compatibility information associated with the account will not be available after the account deletion cycle has been completed.
                </p>
              </section>

              {/* Assessment & Insights */}
              <section id="assessment">
                <h2 className="text-xl font-semibold text-white mb-3">Assessment & Insights</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  AILO provides assessments, compatibility analyses, and related insights designed to offer informational guidance regarding personal preferences, communication styles, and relational dynamics. These assessments are based on User-provided information and AILO&apos;s proprietary analytical framework.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  AILO&apos;s assessments and insights are not psychological evaluations, medical assessments, therapeutic services, diagnoses, or professional advice of any kind. They are intended solely for informational and self-reflective purposes.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Users remain solely responsible for how they interpret and apply any insights provided through the Services.
                </p>
              </section>

              {/* No Guarantee of Matches or Outcomes */}
              <section id="no-guarantee">
                <h2 className="text-xl font-semibold text-white mb-3">No Guarantee of Matches or Outcomes</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Users acknowledge that access to AILO&apos;s Services, including AILO Unlimited or any other paid feature, <strong className="text-white">does not guarantee any minimum number of matches</strong>, compatibility results, interactions, communications, or successful connections.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Match availability, timing, and frequency depend on multiple factors outside of AILO&apos;s control, including but not limited to user density, geographic region, stated preferences, activity levels, and eligibility criteria. Use of the Services does not guarantee personal, relational, or emotional outcomes.
                </p>
              </section>

              {/* Safety Notice */}
              <section id="safety">
                <h2 className="text-xl font-semibold text-white mb-3">Safety Notice</h2>
                <p className="text-white/60 leading-relaxed">
                  AILO does not conduct criminal background checks or identity verification on users unless expressly stated. You are solely responsible for your interactions with other users, both online and offline. AILO does not screen, endorse, or guarantee the conduct, identity, intentions, or compatibility of any user. Exercise caution and common sense when interacting with others, particularly when meeting in person.
                </p>
              </section>

              {/* Disclaimer of Warranty */}
              <section id="disclaimer">
                <h2 className="text-xl font-semibold text-white mb-3">Disclaimer of Warranty</h2>
                <p className="text-white/60 leading-relaxed text-sm">
                  WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE, VALIDITY, ACCURACY, OR RELIABILITY OF THE CONTENT AVAILABLE ON THE SERVICES OR ANY OTHER SITES LINKED TO OR FROM THE SERVICES. THE SERVICES AND CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND ON AN &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT POSSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section id="liability">
                <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
                <p className="text-white/60 leading-relaxed text-sm mb-4">
                  WE AND OUR AFFILIATES, SUBSIDIARIES, DIVISIONS AND RELATED COMPANIES AS WELL AS OUR AGENTS, SUPPLIERS, SERVICE PROVIDERS, AND RETAILERS (COLLECTIVELY, THE &ldquo;RELEASEES&rdquo;) WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE USE OR THE INABILITY TO USE THE SERVICES, CONTENT OR EXTERNAL LINKS, INCLUDING BUT NOT LIMITED TO DAMAGES CAUSED BY OR RELATED TO ERRORS, OMISSIONS, INTERRUPTIONS, DEFECTS, DELAY IN OPERATION OR TRANSMISSION, OR ANY COMPUTER VIRUS OR FAILURE.
                </p>
                <p className="text-white/60 leading-relaxed text-sm">
                  REGARDLESS OF THE PREVIOUS SENTENCES, IF WE ARE FOUND TO BE LIABLE, OUR LIABILITY TO YOU OR TO ANY THIRD-PARTY IS LIMITED TO THE GREATER OF THE ACTUAL TOTAL AMOUNT RECEIVED BY US FROM YOU IN THE SIX (6) MONTHS PRECEDING THE CLAIM, OR THE LOWEST LIABILITY LIMITATION ALLOWED BY APPLICABLE LAW.
                </p>
              </section>

              {/* Indemnity */}
              <section id="indemnity">
                <h2 className="text-xl font-semibold text-white mb-3">Indemnity</h2>
                <p className="text-white/60 leading-relaxed">
                  You agree to indemnify, defend, and hold us and the Releasees and all of our directors, officers, employees, agents, shareholders, successors, assigns, and contractors harmless from and against any and all claims, damages, suits, actions, liabilities, judgments, losses, costs (including without limitation reasonable attorneys&apos; fees), or other expenses that arise directly or indirectly out of or from (i) your breach of any provision of this Agreement; (ii) your activities in connection with the Services; or (iii) User Content or other information you provide to us through the Services.
                </p>
              </section>

              {/* Non-Refundability */}
              <section id="refunds">
                <h2 className="text-xl font-semibold text-white mb-3">Non-Refundability</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Except as required by applicable law or the refund policies of the applicable app store or payment provider, <strong className="text-white">all purchases of AILO Duo and AILO Unlimited are final and non-refundable</strong>.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Refund requests, if any, are handled solely by Apple&apos;s App Store or Google Play in accordance with their respective refund policies. AILO does not issue refunds or credits for unused features, partial use, lack of activity, dissatisfaction with results, or changes to the Services or features over time.
                </p>
              </section>

              {/* Intellectual Property Rights */}
              <section id="intellectual-property">
                <h2 className="text-xl font-semibold text-white mb-3">Intellectual Property Rights</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  All names, logos, text, designs, graphics, trade dress, characters, interfaces, code, software, images, sounds, videos, photographs, and other content appearing in or on the Services (&ldquo;Content&rdquo;) are protected intellectual property of, or used with permission or under license by, our Company.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Subject to your compliance with this Agreement, we grant you a limited license to access and use the Services and their Content for personal purposes. No Content from the Services may be copied, reproduced, republished, performed, displayed, downloaded, posted, transmitted, or distributed in any way without written permission of the rights owner.
                </p>
              </section>

              {/* Disputes, Arbitration, and Class Action Waiver */}
              <section id="arbitration">
                <h2 className="text-xl font-semibold text-white mb-3">Disputes, Arbitration, and Class Action Waiver</h2>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                  <p className="text-white/70 text-sm leading-relaxed">
                    <strong className="text-white">PLEASE READ THIS SECTION CAREFULLY</strong> – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT OR TO PURSUE CLAIMS IN A CLASS OR REPRESENTATIVE CAPACITY.
                  </p>
                </div>
                <p className="text-white/60 leading-relaxed mb-4">
                  You and we agree that any dispute, claim or controversy, including those known or unknown that may be later discovered, arising out of or relating to this Agreement, shall be either determined by binding arbitration in Miami Florida before one arbitrator or submitted to small claims court in Miami Florida.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  <strong className="text-white">No Class Actions:</strong> YOU AGREE THAT ANY CLAIMS OR ARBITRATION UNDER THIS AGREEMENT WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED AND YOU ARE AGREEING TO GIVE UP THE ABILITY TO PARTICIPATE IN A CLASS ARBITRATION OR CLASS ACTION.
                </p>
                <p className="text-white/60 leading-relaxed">
                  This Agreement and the rights of the parties hereunder shall be governed by and construed in accordance with the laws of the State of Florida.
                </p>
              </section>

              {/* Terms for Users in Certain Geographic Locations */}
              <section id="geographic">
                <h2 className="text-xl font-semibold text-white mb-3">Terms for Users in Certain Geographic Locations</h2>
                <h3 className="text-lg font-medium text-white/90 mb-2">New Jersey Residents</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  If you are a consumer residing in New Jersey, the following provisions of this Agreement do not apply to you (and do not limit any rights that you may have) to the extent that they are unenforceable under New Jersey law: (i) Disclaimer of Warranty; (ii) Limitation of Liability; (iii) Indemnity; and (iv) under the Disputes, Arbitration, and Class Action Waiver section.
                </p>
                <h3 className="text-lg font-medium text-white/90 mb-2">California Residents</h3>
                <p className="text-white/60 leading-relaxed">
                  Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice: California residents may reach the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by mail at 1625 North Market Blvd., Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.
                </p>
              </section>

              {/* Contact Us */}
              <section id="contact">
                <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  If you have questions about this Agreement, or if you have technical questions about the operation of the Services, please contact us:
                </p>
                <ul className="text-white/60 leading-relaxed space-y-2">
                  <li>
                    <strong className="text-white/80">Email:</strong>{" "}
                    <a href="mailto:support@ailoapp.com" className="text-[var(--color-accent)] hover:underline">support@ailoapp.com</a>
                  </li>
                  <li>
                    <strong className="text-white/80">Mail:</strong> P.O. Box 450134, Miami Florida 33245
                  </li>
                </ul>
              </section>

              {/* Related Links */}
              <section className="pt-8 border-t border-white/10">
                <p className="text-white/60 leading-relaxed">
                  Your use of the Services is also governed by our{" "}
                  <Link href="/privacy" className="text-[var(--color-accent)] hover:underline">
                    Privacy Policy
                  </Link>
                  , which is incorporated into these Terms by reference.
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
