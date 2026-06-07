import React from 'react';
import { BUSINESS_INFO } from '../data/business';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO 
        title={`Privacy Policy | ${BUSINESS_INFO.name}`}
        description={`Privacy Policy for ${BUSINESS_INFO.name}. Learn how we handle your data.`}
      />
      
      <main className="pt-32 pb-24 bg-pearl-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-pearl-100">
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal-900 mb-8 tracking-tight">Privacy Policy</h1>
            <div className="prose prose-charcoal max-w-none text-charcoal-700 leading-relaxed font-light">
              <p className="mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">1. Introduction</h2>
              <p className="mb-6">
                Welcome to {BUSINESS_INFO.name}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at {BUSINESS_INFO.email}.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">2. Information We Collect</h2>
              <p className="mb-6">
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website, or otherwise contacting us.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Personal Information Provided by You:</strong> We may collect names; phone numbers; email addresses; mailing addresses; job titles; and other similar information.</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="mb-6">
                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To fulfill and manage your orders and inquiries.</li>
                <li>To send administrative information to you.</li>
                <li>To request feedback and to contact you about your use of our Website.</li>
                <li>To protect our Services.</li>
              </ul>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">4. Will Your Information Be Shared With Anyone?</h2>
              <p className="mb-6">
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share data based on various legal bases as outlined globally.
              </p>

              <h2 className="text-2xl font-bold text-charcoal-900 mt-8 mb-4">5. Contact Us</h2>
              <p className="mb-6">
                If you have questions or comments about this policy, you may contact us at:
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

export default PrivacyPolicyPage;
