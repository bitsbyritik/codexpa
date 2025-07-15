"use client";

import { useState } from "react";
import { Button } from "@codexpa/ui/components/ui/button";
import { Input } from "@codexpa/ui/components/ui/input";
import { Card, CardContent } from "@codexpa/ui/components/ui/card";
import {
  Brain,
  Zap,
  Bot,
  ArrowRight,
  Github,
  Twitter,
  FileText,
  Check,
  Eye,
  Code,
  Database,
  Server,
} from "lucide-react";

export function LandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      data-oid="5gim-4p"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden" data-oid="e4wj_x.">
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"
          data-oid="4mwr6jl"
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.269_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.269_0_0)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
          data-oid="ika9cr."
        />

        <div
          className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
          data-oid="y0arqj0"
        >
          <div className="mx-auto max-w-4xl text-center" data-oid="chn4hbm">
            {/* Main headline */}
            <h1
              className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
              data-oid="h:xm-3u"
            >
              <span
                className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
                data-oid="-vwhkfr"
              >
                See Everything.
              </span>
              <br data-oid="x_sg162" />
              <span
                className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"
                data-oid="b833zti"
              >
                Automate Anything.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-8 text-xl leading-8 text-muted-foreground sm:text-2xl"
              data-oid="yv_w-c9"
            >
              Onlook is your AI-powered observer for code, infra, and data.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="8l17vx:"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-primary/20"
                data-oid="5vy5pg9"
              >
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-border hover:border-primary/50 transition-all duration-200"
                data-oid="dtyr-tb"
              >
                Learn More
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  data-oid="gzuws9t"
                />
              </Button>
            </div>

            {/* Terminal-style code snippet */}
            <div className="mt-16 mx-auto max-w-2xl" data-oid="eunod.1">
              <div
                className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 font-mono text-sm"
                data-oid="xpl8g5k"
              >
                <div
                  className="flex items-center gap-2 mb-4"
                  data-oid="hederyx"
                >
                  <div
                    className="h-3 w-3 rounded-full bg-destructive"
                    data-oid=":7g5o8u"
                  />
                  <div
                    className="h-3 w-3 rounded-full bg-chart-4"
                    data-oid="wyl3h5x"
                  />
                  <div
                    className="h-3 w-3 rounded-full bg-chart-2"
                    data-oid="--wpans"
                  />
                  <span
                    className="ml-2 text-muted-foreground"
                    data-oid="9t:xf1f"
                  >
                    onlook-cli
                  </span>
                </div>
                <div className="space-y-2" data-oid="n.zu7gr">
                  <div className="flex items-center gap-2" data-oid="-t0hs69">
                    <span className="text-chart-2" data-oid="66jiff.">
                      $
                    </span>
                    <span className="text-foreground" data-oid="6ps0jsd">
                      onlook observe --all
                    </span>
                  </div>
                  <div className="text-muted-foreground" data-oid="-.vtmox">
                    ✓ Monitoring 47 services across 3 environments
                  </div>
                  <div className="text-muted-foreground" data-oid="1unyj0b">
                    ✓ AI analysis active - 0 anomalies detected
                  </div>
                  <div className="flex items-center gap-2" data-oid=".q7ko6_">
                    <span className="text-chart-2" data-oid=".z31w:k">
                      $
                    </span>
                    <span className="animate-pulse" data-oid="23o7bzo">
                      _
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Onlook Does Section */}
      <section className="py-24 sm:py-32" data-oid="lvpqcew">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="7xhiu60">
          <div className="mx-auto max-w-2xl text-center" data-oid="6ek7ze:">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="-w64twt"
            >
              What Onlook Does
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="mn515hx"
            >
              Three core capabilities that transform how you manage your systems
            </p>
          </div>

          <div
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3"
            data-oid="1-xab-j"
          >
            {/* Observes */}
            <Card
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
              data-oid="qnku1nq"
            >
              <CardContent className="p-8" data-oid="6mrcb5d">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                  data-oid="apjyx8g"
                >
                  <Brain className="h-6 w-6" data-oid="_k6c2sl" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="wmpo--b">
                  Observes your system
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="n:hz7jy"
                >
                  Continuously monitors your code, infrastructure, and data
                  flows with intelligent pattern recognition and deep system
                  understanding.
                </p>
              </CardContent>
            </Card>

            {/* Detects */}
            <Card
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-chart-1/20 transition-all duration-300"
              data-oid="mkyg2fe"
            >
              <CardContent className="p-8" data-oid=":5vyzcm">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1"
                  data-oid="f93pfp."
                >
                  <Zap className="h-6 w-6" data-oid=".y2i39w" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="3tl3eiv">
                  Detects anomalies
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="szmb-_7"
                >
                  Uses advanced AI to identify performance issues, security
                  vulnerabilities, and system irregularities before they impact
                  users.
                </p>
              </CardContent>
            </Card>

            {/* Automates */}
            <Card
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-chart-2/20 transition-all duration-300"
              data-oid="zct6c2e"
            >
              <CardContent className="p-8" data-oid="pjyjfsg">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2"
                  data-oid="msmr-vc"
                >
                  <Bot className="h-6 w-6" data-oid="ik3._0s" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid=".-cma:_">
                  Suggests or automates fixes
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="q_-bkl0"
                >
                  Provides intelligent recommendations and can automatically
                  resolve common issues, reducing manual intervention and
                  downtime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 sm:py-32 bg-muted/20" data-oid="ie_fiur">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="u2-q8ec">
          <div className="mx-auto max-w-2xl text-center" data-oid="h6.2e3t">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid=":oifmk_"
            >
              How It Works
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="26.gvor"
            >
              Seamless integration with your existing development workflow
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl" data-oid="a0.e-uk">
            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
              data-oid="jid952o"
            >
              {/* Step 1 */}
              <div className="relative" data-oid="dyq8an1">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6"
                  data-oid="tx9e1c2"
                >
                  <Eye className="h-8 w-8" data-oid="ht2vilz" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="0.y94sz">
                  1. Connect & Observe
                </h3>
                <p className="text-muted-foreground" data-oid="d1u8q:1">
                  Install Onlook agents across your infrastructure. They begin
                  monitoring immediately with zero configuration.
                </p>
                {/* Connection line */}
                <div
                  className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                  data-oid="gy3eut5"
                />
              </div>

              {/* Step 2 */}
              <div className="relative" data-oid="hu6ng19">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/10 text-chart-1 mb-6"
                  data-oid="3w.27xm"
                >
                  <Brain className="h-8 w-8" data-oid="qu9_e9d" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid=":_1knu9">
                  2. AI Analysis
                </h3>
                <p className="text-muted-foreground" data-oid="f1:x6xe">
                  Our AI processes patterns, learns your system behavior, and
                  identifies potential issues in real-time.
                </p>
                {/* Connection line */}
                <div
                  className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-chart-1/50 to-transparent"
                  data-oid="-er1m42"
                />
              </div>

              {/* Step 3 */}
              <div className="relative" data-oid="f718j:7">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10 text-chart-2 mb-6"
                  data-oid="-bo2rhu"
                >
                  <Zap className="h-8 w-8" data-oid="wnxgou1" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="-cbi-i-">
                  3. Automated Action
                </h3>
                <p className="text-muted-foreground" data-oid="gde-dr.">
                  Receive intelligent alerts and automated fixes, keeping your
                  systems running smoothly 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup Section */}
      <section className="py-24 sm:py-32" data-oid="imvm.dh">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="9wn5wpz">
          <div className="mx-auto max-w-2xl text-center" data-oid="gr-o0c9">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="o_-bcda"
            >
              Join the Waitlist
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="p5oijog"
            >
              Be among the first to experience the future of system
              observability
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="7dcjfvy"
            >
              <div className="relative flex-1 max-w-md" data-oid="b_2m92y">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-4 transition-all duration-200 focus:ring-primary/20"
                  required
                  data-oid="ff5nll9"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-primary/20 hover:ring-primary/30"
                disabled={isSubmitted}
                data-oid="3gxmg79"
              >
                {isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" data-oid=".slapsj" />
                    Added to Waitlist!
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>

            <p
              className="mt-4 text-sm text-muted-foreground"
              data-oid="v-v6yp4"
            >
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/10" data-oid="f6_0-ou">
        <div
          className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
          data-oid="pylcyp3"
        >
          <div
            className="flex flex-col items-center justify-between gap-8 sm:flex-row"
            data-oid="qb.cx53"
          >
            {/* Logo and copyright */}
            <div className="flex items-center gap-4" data-oid="s26uvf9">
              <div
                className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-mono font-bold"
                data-oid="vm6vxt9"
              >
                O
              </div>
              <div className="text-sm text-muted-foreground" data-oid="psr3.2t">
                © 2024 Onlook. All rights reserved.
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6" data-oid="bds93q3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="dz5e3dd"
              >
                <FileText className="h-4 w-4" data-oid="b8r43er" />
                Docs
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="891-p4m"
              >
                <Twitter className="h-4 w-4" data-oid="vu_8bqt" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="po99cbj"
              >
                <Github className="h-4 w-4" data-oid="xm9j:4m" />
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="z2_8qb."
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
