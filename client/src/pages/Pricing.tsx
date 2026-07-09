import React from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "0.001",
    description: "Perfect for getting started",
    features: [
      "50 messages per month",
      "Basic AI responses",
      "Encrypted conversations",
      "Community support",
    ],
  },
  {
    name: "Professional",
    price: "0.005",
    description: "For serious users",
    features: [
      "500 messages per month",
      "Advanced AI reasoning",
      "Priority support",
      "Encrypted conversations",
      "Custom instructions",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "0.01",
    description: "Unlimited access",
    features: [
      "Unlimited messages",
      "Advanced AI reasoning",
      "24/7 priority support",
      "Encrypted conversations",
      "Custom instructions",
      "API access",
    ],
  },
];

export default function Pricing() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      {/* Header */}
      <header className="border-b border-border/30 backdrop-blur-md bg-background/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => setLocation("/")}
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            GoldenEagle-ai.developers
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLocation("/")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => setLocation("/about")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="flex-1 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-foreground/70 mb-4">
              Pay in Bitcoin. Monthly billing. No hidden fees.
            </p>
            <p className="text-lg text-foreground/60">
              All prices shown in BTC per month
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-2xl shadow-purple-500/20 scale-105"
                    : "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 hover:bg-purple-500/10"
                } p-8 backdrop-blur-sm`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground/70 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60 ml-2">BTC/month</span>
                </div>

                <Button
                  onClick={() => {
                    if (isAuthenticated) {
                      alert(`Upgrade to ${plan.name} plan`);
                    } else {
                      setLocation("/");
                    }
                  }}
                  className={`w-full mb-8 font-semibold py-6 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      : "border-purple-500/30 hover:bg-purple-500/10"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  Subscribe Now
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Why Bitcoin only?
                </h3>
                <p className="text-foreground/70">
                  Bitcoin ensures maximum privacy and security for our users. No third-party payment processors means your financial data stays private.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Can I cancel anytime?
                </h3>
                <p className="text-foreground/70">
                  Yes. You can cancel your subscription at any time. No questions asked, no penalties.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Is my data encrypted?
                </h3>
                <p className="text-foreground/70">
                  All conversations are end-to-end encrypted. We cannot access your data even if we wanted to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 backdrop-blur-md bg-background/50 py-6">
        <div className="container mx-auto px-4 text-center text-foreground/60 text-sm">
          <p>GoldenEagle-ai.developers - Bitcoin payments only. Monthly billing.</p>
        </div>
      </footer>
    </div>
  );
}
