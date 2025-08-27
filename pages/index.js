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
      stripeLink: "https://buy.stripe.com/starter-plan", // Replace with your actual Stripe link
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
      stripeLink: "https://buy.stripe.com/growth-plan", // Replace with your actual Stripe link
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
      stripeLink: "https://buy.stripe.com/unlimited-plan", // Replace with your actual Stripe link
    },
  ];

  const faqs = [
    {
      q: "How do I forward suspicious emails to you?",
      a: "After subscribing, you'll receive a dedicated forwarding address (e.g., review@yoursafeadvisor.com). Simply forward the email, and we'll reply with an analysis and recommended action.",
    },
    {
      q: "How fast is the response?",
      a: "Starter and Unlimited plans are typically within 12 hours; Growth includes priority response within 6 hours. During business peaks we still aim to reply same-day.",
    },
    {
      q: "Do you ever open risky attachments?",
      a: "We analyze headers, URLs, and file metadata safely. We never execute unknown attachments. If deeper forensics is needed, we do it in isolated environments.",
    },
    {
      q: "Can you check phone calls or voicemails?",
      a: "Yes. Send a short summary, a screenshot, or transcript, and we'll assess red flags and advise on next steps.",
    },
    {
      q: "Is this a replacement for antivirus?",
      a: "No. We complement your security by catching social engineering and impersonation attempts that AV often misses.",
    },
    {
      q: "What languages do you support?",
      a: "Our service is primarily available in English, but we can localize our responses to German (DE), French (FR), or Italian (IT) upon request. Just mention your preferred language when forwarding emails.",
    },
    {
      q: "How does the free trial work?",
      a: "Your first suspicious email analysis or a 15-minute advisory call is completely free. No credit card required. Simply contact us with your question and we'll provide our full analysis at no charge.",
    },
  ];

  if (showPrivacy) {
    return <PrivacyPolicy onBack={() => setShowPrivacy(false)} />;
  }

  if (showTerms) {
    return <TermsOfService onBack={() => setShowTerms(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
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
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white font-bold">🛡️</span>
          <span className="font-semibold text-lg">SafeSignal Advisor</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#how" className="hover:text-blue-600">How it works</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#languages" className="hover:text-blue-600">Languages</a>
          <a href="#faq" className="hover:text-blue-600">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm hover:text-blue-600">Contact</a>
          <a href="#free-trial" className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700">Try Free</a>
          <a href="#pricing" className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">Get Started</a>
        </div>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden p-2 rounded hover:bg-gray-100">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#how" className="hover:text-blue-600">How it works</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#languages" className="hover:text-blue-600">Languages</a>
            <a href="#faq" className="hover:text-blue-600">FAQ</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="#free-trial" className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium text-center">Try Free</a>
            <a href="#pricing" className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium text-center">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-20 grid md:grid-cols-2 gap-8 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
            🛡️ Scam Protection Advisor
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Get peace of mind: forward suspect emails, SMS, or calls for expert review
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            I help you recognize common scams online, in email, and by phone. Quick verdicts, clear action steps, and education to stay safe.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#free-trial" className="px-6 py-3 rounded-md bg-green-600 text-white font-medium text-center hover:bg-green-700">Try Free First</a>
            <a href="#pricing" className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium text-center hover:bg-blue-700">See Plans</a>
            <a href="#how" className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-medium text-center hover:bg-gray-50">How it works</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">⚡ Fast turnaround</div>
            <div className="flex items-center gap-2">🇨🇭 Switzerland-based</div>
            <div className="flex items-center gap-2">🔒 Confidential</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-100/60 blur-2xl rounded-full"></div>
          <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            <img src="https://cdn.abacus.ai/images/79f9d8a2-1e55-4dd3-bb5e-d087aee0644a.png" alt="Professional working on email security analysis" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-3">👤 1:1 human expert review</div>
        <div className="flex items-center gap-3">🔐 Data handled privately</div>
        <div className="flex items-center gap-3">⚡ Same-day responses</div>
        <div className="flex items-center gap-3">🎓 Learn to spot scams</div>
      </div>
    </section>
  );
}

function LanguageSupport() {
  return (
    <section id="languages" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Multi-language Support</h2>
        <p className="mt-3 text-gray-600 text-lg">Our service is available in English, with localization options for Swiss markets</p>
        
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
            <div className="text-3xl mb-3">🇬🇧</div>
            <h3 className="font-semibold">English</h3>
            <p className="text-sm text-gray-600 mt-2">Primary language - full service available</p>
          </div>
          <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
            <div className="text-3xl mb-3">🇩🇪</div>
            <h3 className="font-semibold">Deutsch</h3>
            <p className="text-sm text-gray-600 mt-2">Localized responses available on request</p>
          </div>
          <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
            <div className="text-3xl mb-3">🇫🇷</div>
            <h3 className="font-semibold">Français</h3>
            <p className="text-sm text-gray-600 mt-2">Localized responses available on request</p>
          </div>
          <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
            <div className="text-3xl mb-3">🇮🇹</div>
            <h3 className="font-semibold">Italiano</h3>
            <p className="text-sm text-gray-600 mt-2">Localized responses available on request</p>
          </div>
        </div>
        
        <div className="mt-8 p-4 rounded-lg bg-blue-100 text-blue-800">
          <p className="text-sm">💡 <strong>How it works:</strong> Simply mention your preferred language (German, French, or Italian) when forwarding suspicious content, and we'll respond in that language.</p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Subscribe to a plan",
      desc: "Pick the coverage you need. You'll receive your dedicated forwarding address right away.",
      icon: "📋",
    },
    {
      title: "Forward anything suspicious",
      desc: "Emails, screenshots of SMS, or call notes. No need to explain—just forward.",
      icon: "📧",
    },
    {
      title: "Get a clear verdict",
      desc: "We reply with Legit/Scam, red flags found, and safe next steps.",
      icon: "🔍",
    },
    {
      title: "Stay safer over time",
      desc: "We teach patterns scammers use so you can spot them instantly.",
      icon: "💡",
    },
  ];
  return (
    <section id="how" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">How it works</h2>
        <p className="mt-2 text-center text-gray-600">Simple steps to get trustworthy answers fast.</p>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ cards }) {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Simple, transparent pricing</h2>
        <p className="mt-2 text-center text-gray-600">Choose the protection level that suits your inbox.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className={`relative p-6 rounded-xl border ${c.highlight ? 'border-blue-300 shadow-xl ring-2 ring-blue-100' : 'border-gray-200 shadow'} bg-white` }>
              {c.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full bg-blue-600 text-white shadow">Most popular</div>
              )}
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{c.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {idx === 0 ? <span className="text-green-600">🎁</span> : <span>✅</span>}
                    <span className={idx === 0 ? "text-green-600 font-medium" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={c.stripeLink} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-md font-medium ${c.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-black'}`}>{c.cta}</a>
              <p className="mt-3 text-xs text-gray-500 text-center">Cancel anytime. VAT included where applicable.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreeTrial() {
  return (
    <section id="free-trial" className="py-16 bg-green-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium mb-4">
          🎁 No Risk Trial
        </div>
        <h2 className="text-3xl font-bold">Try it free — No commitment</h2>
        <p className="mt-4 text-lg">
          Your first suspicious email analysis or a <strong>15‑minute advisory call</strong> is completely <strong>free of charge</strong>.
          Test our service and see the value before you subscribe.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-md bg-white text-green-700 font-semibold shadow hover:bg-gray-50"
          >
            Claim your free analysis
          </a>
          <a 
            href="#pricing" 
            className="px-6 py-3 rounded-md border-2 border-white text-white font-semibold hover:bg-white hover:text-green-700"
          >
            View paid plans
          </a>
        </div>
        <p className="mt-4 text-sm opacity-90">✅ No credit card required  ✅ No signup needed  ✅ Get results in 24 hours</p>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: "Human + Tools",
      desc: "Expert analysis enriched by robust technical checks for links, headers, and sender reputation.",
      icon: "🤝"
    },
    {
      title: "Confidentiality first",
      desc: "Strict privacy practices. We minimize data and never share your content externally.",
      icon: "🔒"
    },
    {
      title: "Education-forward",
      desc: "Short, practical tips so you learn to spot scams in seconds and stay ahead.",
      icon: "📚"
    },
    {
      title: "Switzerland-based",
      desc: "Service tailored for Swiss users with CHF pricing and local scam patterns in mind.",
      icon: "🇨🇭"
    },
  ];
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold">Built for real-world safety</h2>
          <p className="mt-3 text-gray-600">Most scams rely on urgency and impersonation. We help you slow down, verify, and act confidently.</p>
          <ul className="mt-6 space-y-3">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="text-2xl">{it.icon}</div>
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-gray-600 text-sm">{it.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-blue-100/60 blur-2xl rounded-full"></div>
          <div className="relative rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
            <img src="https://cdn.abacus.ai/images/d11c0fd5-0865-4267-bbdb-04aa1ad9655a.png" alt="Cybersecurity features illustration" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ faqs, active, onToggle }) {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-gray-200 border border-gray-200 rounded-lg bg-white">
          {faqs.map((f, i) => (
            <div key={i} className="p-5">
              <button className="w-full flex items-center justify-between text-left" onClick={() => onToggle(i)}>
                <span className="font-medium">{f.q}</span>
                <span className="text-gray-500">{active === i ? '−' : '+'}</span>
              </button>
              {active === i && <p className="mt-3 text-gray-600 text-sm">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">Ready to feel safer online?</h2>
          <p className="mt-3 text-gray-600">Tell me what you're seeing. I'll reply with a plan and next steps. No pressure.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">✅ Same-day replies</li>
            <li className="flex items-center gap-2">✅ Private & confidential</li>
            <li className="flex items-center gap-2">✅ Cancel anytime</li>
          </ul>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="p-6 rounded-xl border border-gray-200 bg-white shadow">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input type="email" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Preferred Language</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="fr">Français</option>
                <option value="it">Italiano</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-600">What do you need help with?</label>
              <textarea rows="4" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none" placeholder="Describe the suspicious email/SMS/call or your question..."></textarea>
            </div>
            <button className="mt-2 px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">Send message</button>
            <p className="text-xs text-gray-500">By contacting, you agree not to forward illegal content. We never share your data outside our analysis process.</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer({ onShowPrivacy, onShowTerms }) {
  return (
    <footer className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            <span className="font-semibold">SafeSignal Advisor</span>
          </div>
          <p className="mt-3 text-gray-600">Human help to recognize scams in your inbox and on your phone. Swiss-based, privacy-first.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-2">
            <li><a href="#how" className="hover:text-blue-600">How it works</a></li>
            <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
            <li><a href="#features" className="hover:text-blue-600">Features</a></li>
            <li><a href="#languages" className="hover:text-blue-600">Languages</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-2">
            <li><button onClick={onShowPrivacy} className="hover:text-blue-600 text-left">Privacy Policy</button></li>
            <li><button onClick={onShowTerms} className="hover:text-blue-600 text-left">Terms of Service</button></li>
            <li><a href="#" className="hover:text-blue-600">Impressum</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-6 text-xs text-gray-500">© {new Date().getFullYear()} SafeSignal Advisor. All rights reserved.</div>
    </footer>
  );
}

function PrivacyPolicy({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={onBack} className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700">
          ← Back to website
        </button>
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="p-4 rounded-lg bg-green-50 border border-green-200 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">🔒 Our Privacy Promise</h3>
              <p className="text-green-700 text-sm">
                <strong>We never ask for access to your email accounts, passwords, or personal information.</strong> 
                We only work with the specific content you choose to forward to us for analysis. 
                We do not request, store, or access any of your personal accounts or data beyond what you explicitly provide.
              </p>
            </div>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email address) - only when you contact us</li>
              <li>Forwarded emails, SMS screenshots, and call descriptions that you choose to send us for analysis</li>
              <li>Payment information (processed securely through Stripe - we never store your payment details)</li>
              <li>Communication preferences and language settings</li>
            </ul>
            <p className="mb-4 text-sm bg-blue-50 p-3 rounded border-l-4 border-blue-400">
              <strong>Important:</strong> We never request access to your email accounts, social media, or any other personal accounts. 
              We only analyze the specific content you forward to us.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide scam analysis and advisory services for the content you send us</li>
              <li>Communicate with you about our services and your specific requests</li>
              <li>Process payments and manage subscriptions</li>
              <li>Improve our detection capabilities (using anonymized data only)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">3. Information Sharing</h2>
            <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers (like Stripe for payments) who are bound by confidentiality agreements</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">4. Data Security</h2>
            <p className="mb-4">We implement appropriate security measures to protect your information, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure storage practices with limited access</li>
              <li>Regular security audits and updates</li>
              <li>Safe analysis environments that never execute potentially harmful content</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">5. Data Retention</h2>
            <p className="mb-4">We retain your information only as long as necessary:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Analyzed content is typically deleted within 30 days unless retention is required for ongoing protection</li>
              <li>Contact information is kept while you maintain an active subscription</li>
              <li>Payment records are retained as required by law (typically 7 years)</li>
              <li>You can request deletion of your data at any time</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Data portability (receive your data in a structured format)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">7. What We Don't Do</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <ul className="list-disc pl-6 text-red-800">
                <li><strong>We never ask for your email passwords or account access</strong></li>
                <li><strong>We never request access to your social media accounts</strong></li>
                <li><strong>We never ask for banking or financial account information</strong></li>
                <li><strong>We never request remote access to your computer or devices</strong></li>
                <li><strong>We never ask for personal identification documents unless legally required</strong></li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-3">8. Contact Us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy or want to exercise your rights, please contact us at:</p>
            <p className="mb-4">Email: privacy@safesignaladvisor.com</p>
            <p className="mb-4">We will respond to your request within 30 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TermsOfService({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={onBack} className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700">
          ← Back to website
        </button>
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Service Description</h2>
            <p className="mb-4">SafeSignal Advisor provides email, SMS, and call analysis services to help identify potential scams and fraudulent communications. Our service includes human expert review and educational guidance.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">2. Free Trial</h2>
            <p className="mb-4">New users receive one free email analysis or 15-minute advisory call before subscribing to any paid plan. This trial requires no credit card or payment information.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">3. Subscription Plans</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Starter (29 CHF/month):</strong> Up to 20 email analyses per month, includes free trial</li>
              <li><strong>Growth (49 CHF/month):</strong> Up to 50 email analyses per month with priority response, includes free trial</li>
              <li><strong>Unlimited (79 CHF/month):</strong> Unlimited analyses and ongoing protection advice, includes free trial</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">4. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information when using our services</li>
              <li>Not forward illegal, harmful, or malicious content</li>
              <li>Use our service for legitimate security purposes only</li>
              <li>Respect our analysis capacity limits based on your chosen plan</li>
              <li>Only forward content you have the right to share for analysis</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">5. Service Limitations</h2>
            <p className="mb-4">Our service:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provides advisory opinions, not legal advice</li>
              <li>Cannot guarantee 100% accuracy in scam detection</li>
              <li>Should complement, not replace, other security measures</li>
              <li>May have response time variations during high-demand periods</li>
              <li>Is based on the information you provide - we cannot analyze what we don't receive</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">6. Payment and Cancellation</h2>
            <p className="mb-4">Subscriptions are billed monthly in advance via Stripe. You may cancel at any time, with cancellation taking effect at the end of your current billing period. No refunds are provided for partial months. The free trial does not require payment information.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">7. Privacy and Data Handling</h2>
            <p className="mb-4">We never request access to your email accounts, passwords, or personal accounts. We only analyze content you explicitly forward to us. See our Privacy Policy for complete details on data handling.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">8. Limitation of Liability</h2>
            <p className="mb-4">SafeSignal Advisor's liability is limited to the amount paid for services in the preceding 12 months. We are not liable for indirect, consequential, or punitive damages resulting from scams or security incidents.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">9. Governing Law</h2>
            <p className="mb-4">These terms are governed by Swiss law. Any disputes will be resolved in Swiss courts.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3">10. Contact Information</h2>
            <p className="mb-4">For questions about these terms, contact us at legal@safesignaladvisor.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}