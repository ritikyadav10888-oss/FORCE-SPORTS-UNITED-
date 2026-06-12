
import Layout from "@/components/Layout";

const TermsOfService = () => (
  <Layout>
    <section className="section-padding pt-32 pb-12">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6 uppercase">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p>
            Please read these terms of service carefully before using our website and services operated by Force Sports United.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">1. Conditions of Use</h2>
          <p>
            By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">2. Intellectual Property</h2>
          <p>
            You agree that all materials, products, and services provided on this website are the property of Force Sports United, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground mt-8 mb-4">3. Applicable Law</h2>
          <p>
            By visiting this website, you agree that the laws of India, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between Force Sports United and you.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsOfService;
