import React from "react";

function App() {
  const [activeFaq, setActiveFaq] = React.useState(null);
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);

  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  const pricing = [
    {
      name: "Starter",
      price: "29 CHF/mo",
      highlight: false,
      features: [
        "Includes 1 free first email or 15-min advisory",
        "Up to 20 forwarded emails analyzed",
        "Quick verdict: Legit or Scam",
        "Risk notes + recommended action",
        "Basic phishing checks",
        "2 suspicious SMS checks"
      ],
      cta: "Choose Starter",
      stripeLink: "#"
    },
    {
      name: "Growth",
      price: "49 CHF/mo",
      highlight: true,
      features: [
        "Includes 1 free first email or 15-min advisory",
        "Up to 50 forwarded emails analyzed",
        "Detailed analysis with red flags",
        "Attachment & link safety review",
        "Priority response (within 6 hours)",
        "5 suspicious SMS checks"
      ],
      cta: "Choose Growth",
      stripeLink: "#"
    },
    {
      name: "Unlimited",
      price: "79 CHF/mo",
      highlight: false,
      features: [
        "Includes 1 free first email or 15-min advisory",
        "Unlimited email checks",
        "Unlimited suspicious SMS checks",
        "Ongoing protection advice",
        "Personalized scam watchlist",
        "Monthly security tips"
      ],
      cta: "Choose Unlimited",
      stripeLink: "#"
    }
  ];

  const faqs = [
    {
      q: "How do I forward suspicious emails?",
      a: "After subscribing, you'll receive a dedicated forwarding address. Forward the email, and we'll reply with an analysis and recommended action."
    },
    {
      q: "How fast is the response?",
      a: "Starter/Unlimited within 12 hours; Growth plan within 6 hours."
    },
    {
      q: "Do you ever open risky attachments?",
      a: "We analyze headers, URLs, and metadata safely. We never execute unknown attachments."
    },
    {
      q: "Can you check phone calls or voicemails?",
      a: "Yes, send a summary, screenshot, or transcript and we'll review."
    },
    {
      q: "Is this a replacement for antivirus?",
      a: "No. We complement AV by catching scams and impersonations AV misses."
    },
    {
      q: "What languages do you support?",
      a: "English by default. Localized responses in German, French, Italian."
    },
    {
      q: "How does the free trial work?",
      a: "Your first suspicious email analysis or 15 min advisory is free."
    }
  ];

  if (showPrivacy) return <PrivacyPolicy onBack={() => setShowPrivacy(false)} />;
  if (showTerms) return <TermsOfService onBack={() => setShowTerms(false)} />;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header onShowPrivacy={() => setShowPrivacy(true)} onShowTerms={() => setShowTerms(true)} />
      <Hero />
      <TrustBar />
      <LanguageSupport />
      <HowItWorks />
      <Pricing cards={pricing} />
      <FreeTrial />
      <Features />
      <FAQ faqs={faqs} active={activeFaq} onToggle={toggleFaq} />
      <CTA />
      <Footer onShowPrivacy={() => setShowPrivacy(true)} onShowTerms={() => setShowTerms(true)} />
    </div>
  );
}

function Header({ onShowPrivacy, onShowTerms }) {
  return (
    <header className="p-6 flex justify-between bg-white shadow">
      <h2 className="text-xl font-bold">SafeSignal Advisor</h2>
      <nav className="space-x-4">
        <button onClick={onShowPrivacy}>Privacy</button>
        <button onClick={onShowTerms}>Terms</button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="text-center py-20 bg-blue-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Spot Scams Before They Spot You</h1>
      <p className="mb-6">Forward us suspicious emails, texts, or offers. Get expert analysis and peace of mind.</p>
      <a href="#pricing" className="bg-white text-blue-600 px-6 py-2 rounded">Choose Your Plan</a>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="bg-white py-4 flex justify-center space-x-8 text-gray-500">
      <span>✔ Trusted Individuals</span>
      <span>✔ Security Experts</span>
      <span>✔ Fast Responses</span>
    </div>
  );
}

function LanguageSupport() {
  return (
    <section className="text-center py-12 bg-gray-100">
      <h3 className="text-2xl font-bold mb-2">Available Languages</h3>
      <p>English (default), German, French, Italian.</p>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        <div className="p-4 bg-white shadow rounded">1. Forward suspicious content</div>
        <div className="p-4 bg-white shadow rounded">2. We analyze scams</div>
        <div className="p-4 bg-white shadow rounded">3. Receive advice</div>
      </div>
    </section>
  );
}

function Pricing({ cards }) {
  return (
    <section id="pricing" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Plans</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((plan, i) => (
          <div key={i} className={`p-6 rounded shadow ${plan.highlight ? 'bg-blue-100 border-2 border-blue-600' : 'bg-white'}`}>
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="text-left mb-4 space-y-2">
              {plan.features.map((f, j) => <li key={j}>• {f}</li>)}
            </ul>
            <a href={plan.stripeLink} className="bg-blue-600 text-white px-4 py-2 rounded">{plan.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function FreeTrial() {
  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-2xl font-bold mb-2">First Check Free</h2>
      <p className="mb-4">Analyze one suspicious email or get a 15‑minute call free.</p>
      <a href="#pricing" className="bg-blue-600 text-white px-6 py-2 rounded">Start Free Trial</a>
    </section>
  );
}

function Features() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-4 bg-white shadow rounded">🔒 Privacy-first</div>
        <div className="p-4 bg-white shadow rounded">⚡ Fast turnaround</div>
        <div className="p-4 bg-white shadow rounded">🌍 Multilingual support</div>
      </div>
    </section>
  );
}

function FAQ({ faqs, active, onToggle }) {
  return (
    <section className="py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
      {faqs.map((item, i) => (
        <div key={i} className="mb-4 border-b pb-2">
          <button onClick={() => onToggle(i)} className="w-full text-left font-semibold">
            {item.q}
          </button>
          {active === i && <p className="mt-2 text-gray-600">{item.a}</p>}
        </div>
      ))}
    </section>
  );
}

function CTA() {
  return (
    <section className="text-center py-16 bg-blue-600 text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Stay Safe?</h2>
      <a href="#pricing" className="bg-white text-blue-600 px-6 py-2 rounded">Get Started</a>
    </section>
  );
}

function Footer({ onShowPrivacy, onShowTerms }) {
  return (
    <footer className="text-center py-6 bg-gray-800 text-white space-x-4">
      <button onClick={onShowPrivacy}>Privacy Policy</button>
      <button onClick={onShowTerms}>Terms of Service</button>
    </footer>
  );
}

function PrivacyPolicy({ onBack }) {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
      <p>We do not ask for email credentials. We only analyze what you forward.</p>
      <button onClick={onBack} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">Back</button>
    </div>
  );
}

function TermsOfService({ onBack }) {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
      <p>Subscriptions are billed monthly. Analysis advice is for security awareness only.</p>
      <button onClick={onBack} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">Back</button>
    </div>
  );
}

export default function Home() {
  return <App />;
}
