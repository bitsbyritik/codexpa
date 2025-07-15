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
      data-oid="f47s-6o"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden" data-oid="1atqbfg">
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"
          data-oid="cdsl3ta"
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.269_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.269_0_0)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
          data-oid="0.xa6u2"
        />

        <div
          className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
          data-oid="xh7lp0c"
        >
          <div className="mx-auto max-w-4xl text-center" data-oid="cpjb38l">
            {/* Main headline */}
            <h1
              className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
              data-oid="z4n5c-v"
            >
              <span
                className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
                data-oid="e0v07ls"
              >
                See Everything.
              </span>
              <br data-oid="ifpgc.y" />
              <span
                className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"
                data-oid="ps6u.ci"
              >
                Automate Anything.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-8 text-xl leading-8 text-muted-foreground sm:text-2xl"
              data-oid="fa-hd4y"
            >
              Onlook is your AI-powered observer for code, infra, and data.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="yayr4c-"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-primary/20"
                data-oid="avmer6s"
              >
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-border hover:border-primary/50 transition-all duration-200"
                data-oid="b0-q.ah"
              >
                Learn More
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  data-oid="rvnct_v"
                />
              </Button>
            </div>

            {/* Terminal-style code snippet */}
            <div className="mt-16 mx-auto max-w-2xl" data-oid="y4vz0sr">
              <div
                className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 font-mono text-sm"
                data-oid="wunt4f0"
              >
                <div
                  className="flex items-center gap-2 mb-4"
                  data-oid="-4m7jgy"
                >
                  <div
                    className="h-3 w-3 rounded-full bg-destructive"
                    data-oid="5orlkge"
                  />

                  <div
                    className="h-3 w-3 rounded-full bg-chart-4"
                    data-oid="gutj-mb"
                  />

                  <div
                    className="h-3 w-3 rounded-full bg-chart-2"
                    data-oid="fx65h07"
                  />

                  <span
                    className="ml-2 text-muted-foreground"
                    data-oid="4._e-bh"
                  >
                    onlook-cli
                  </span>
                </div>
                <div className="space-y-2" data-oid="jad_eam">
                  <div className="flex items-center gap-2" data-oid="wf2xsw8">
                    <span className="text-chart-2" data-oid="8d8kb32">
                      $
                    </span>
                    <span className="text-foreground" data-oid="dxwzazu">
                      onlook observe --all
                    </span>
                  </div>
                  <div className="text-muted-foreground" data-oid="9_ca3.x">
                    ✓ Monitoring 47 services across 3 environments
                  </div>
                  <div className="text-muted-foreground" data-oid="7:v72wz">
                    ✓ AI analysis active - 0 anomalies detected
                  </div>
                  <div className="flex items-center gap-2" data-oid="bcz-f:8">
                    <span className="text-chart-2" data-oid="1nkm6mp">
                      $
                    </span>
                    <span className="animate-pulse" data-oid="al17epa">
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
      <section className="py-24 sm:py-32" data-oid=".bo3h7f">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="yqw2qys">
          <div className="mx-auto max-w-2xl text-center" data-oid="_8p_6d9">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="0-2rcna"
            >
              What Onlook Does
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="c_e1cmv"
            >
              Three core capabilities that transform how you manage your systems
            </p>
          </div>

          <div
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3"
            data-oid="k7qe:ab"
          >
            {/* Observes */}
            <Card
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
              data-oid="w_uerd9"
            >
              <CardContent className="p-8" data-oid="vpnou7q">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                  data-oid="uc77hj1"
                >
                  <Brain className="h-6 w-6" data-oid="jib9f16" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="cn6367m">
                  Observes your system
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="1ka:tkw"
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
              data-oid="j3ceo:p"
            >
              <CardContent className="p-8" data-oid="i02154r">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1"
                  data-oid="wu.hr9c"
                >
                  <Zap className="h-6 w-6" data-oid="kr3oa0i" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="bt03frv">
                  Detects anomalies
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="p:5hn89"
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
              data-oid="0ulhb8-"
            >
              <CardContent className="p-8" data-oid=".j_z7zh">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2"
                  data-oid="-tby-az"
                >
                  <Bot className="h-6 w-6" data-oid="rjl8xqn" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="4ip7uh4">
                  Suggests or automates fixes
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="480o7:e"
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
      <section className="py-24 sm:py-32 bg-muted/20" data-oid="we:exz-">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="66:sgc9">
          <div className="mx-auto max-w-2xl text-center" data-oid="6m3zcy:">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="4u6.cx."
            >
              How It Works
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="mqk4f84"
            >
              Seamless integration with your existing development workflow
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl" data-oid="6uofips">
            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
              data-oid="a89dga5"
            >
              {/* Step 1 */}
              <div className="relative" data-oid="hnhb23j">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6"
                  data-oid="e_4ctlw"
                >
                  <Eye className="h-8 w-8" data-oid="50y0l6x" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid=".wxklb0">
                  1. Connect & Observe
                </h3>
                <p className="text-muted-foreground" data-oid="eavo6fu">
                  Install Onlook agents across your infrastructure. They begin
                  monitoring immediately with zero configuration.
                </p>
                {/* Connection line */}
                <div
                  className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                  data-oid="k0fskfs"
                />
              </div>

              {/* Step 2 */}
              <div className="relative" data-oid="641_z_q">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/10 text-chart-1 mb-6"
                  data-oid="cv2ancz"
                >
                  <Brain className="h-8 w-8" data-oid="c0b1z3p" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="7ao55ka">
                  2. AI Analysis
                </h3>
                <p className="text-muted-foreground" data-oid="6-ce-lt">
                  Our AI processes patterns, learns your system behavior, and
                  identifies potential issues in real-time.
                </p>
                {/* Connection line */}
                <div
                  className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-chart-1/50 to-transparent"
                  data-oid="::u_x64"
                />
              </div>

              {/* Step 3 */}
              <div className="relative" data-oid="frzu:wx">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10 text-chart-2 mb-6"
                  data-oid="94fw4ku"
                >
                  <Zap className="h-8 w-8" data-oid="4ig6e7-" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="pd8ym5h">
                  3. Automated Action
                </h3>
                <p className="text-muted-foreground" data-oid=":-br6-a">
                  Receive intelligent alerts and automated fixes, keeping your
                  systems running smoothly 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup Section */}
      <section className="py-24 sm:py-32" data-oid="uj_gwmy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="xcfa4h5">
          <div className="mx-auto max-w-2xl text-center" data-oid="q0codqv">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="lz2roul"
            >
              Join the Waitlist
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="t.qiqin"
            >
              Be among the first to experience the future of system
              observability
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="-e_s1qy"
            >
              <div className="relative flex-1 max-w-md" data-oid="qdf5n8-">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-4 transition-all duration-200 focus:ring-primary/20"
                  required
                  data-oid="t90._zk"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-primary/20 hover:ring-primary/30"
                disabled={isSubmitted}
                data-oid="-12qxy5"
              >
                {isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" data-oid=":5pogrj" />
                    Added to Waitlist!
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>

            <p
              className="mt-4 text-sm text-muted-foreground"
              data-oid="e33n34v"
            >
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/10" data-oid="fqk-jlj">
        <div
          className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
          data-oid="b8wj:ru"
        >
          <div
            className="flex flex-col items-center justify-between gap-8 sm:flex-row"
            data-oid="ph2ld.-"
          >
            {/* Logo and copyright */}
            <div className="flex items-center gap-4" data-oid="u.b-krk">
              <div
                className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-mono font-bold"
                data-oid=".u8ik.v"
              >
                O
              </div>
              <div className="text-sm text-muted-foreground" data-oid="48mkb3g">
                © 2024 Onlook. All rights reserved.
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6" data-oid="b3_h7l6">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="98ayd4o"
              >
                <FileText className="h-4 w-4" data-oid="itf8npa" />
                Docs
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="462_cle"
              >
                <Twitter className="h-4 w-4" data-oid="y:3ptsu" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="u2uqqgq"
              >
                <Github className="h-4 w-4" data-oid="07sso_o" />
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="nay4n0q"
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
