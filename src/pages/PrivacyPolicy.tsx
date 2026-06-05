import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <section className="section-padding pt-32 pb-12">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6 uppercase">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p>
            At Force Sports United, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">3. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at info@forcesportsunited.com.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
