import React from 'react';
import { BUSINESS_INFO } from '../data/business';

const TermsOfServicePage = () => {
  return (
    <>
      <>
        <title>Terms of Service | {BUSINESS_INFO.name}</title>
        <meta name="description" content={`Terms of Service for ${BUSINESS_INFO.name}.`} />
      </>
      
      <main className="pt-32 pb-24 bg-pearl-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-pearl-100">
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-8 tracking-tight">Terms of Service</h1>
            <div className="prose prose-charcoal max-w-none text-charcoal-700 leading-relaxed font-light">
              <p className="mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="mb-6">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and {BUSINESS_INFO.name} ("Company," "we," "us," or "our"), concerning your access to and use of this website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">2. Intellectual Property Rights</h2>
              <p className="mb-6">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">3. User Representations</h2>
              <p className="mb-6">
                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">4. Services Provided</h2>
              <p className="mb-6">
                {BUSINESS_INFO.name} offers architectural design, planning, interior design, and construction consultation. The details, scope, and deliverables of any specific project will be governed by a separate, signed contract between the client and {BUSINESS_INFO.name}. Nothing on this website constitutes a binding offer to provide services without an executed agreement.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">5. Disclaimer</h2>
              <p className="mb-6">
                The Site is provided on an as-is and as-available basis. You agree that your use of the Site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Site and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">6. Contact Us</h2>
              <p className="mb-6">
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <address className="not-italic bg-pearl-50 p-6 rounded-xl border border-pearl-100 shadow-inner">
                <strong>{BUSINESS_INFO.name}</strong><br />
                {BUSINESS_INFO.location}<br />
                Phone: {BUSINESS_INFO.phones.join(" / ")}<br />
                Email: {BUSINESS_INFO.email}
              </address>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfServicePage;
