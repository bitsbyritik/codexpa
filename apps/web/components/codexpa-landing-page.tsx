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
      data-oid="jzffcl9"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden" data-oid=".6siv91">
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"
          data-oid="ne::s0h"
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.269_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.269_0_0)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
          data-oid="014:3e:"
        />

        <div
          className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
          data-oid="9lb.jjy"
        >
          <div className="mx-auto max-w-4xl text-center" data-oid="q3gqh-o">
            {/* Main headline */}
            <h1
              className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
              data-oid="98g9z2r"
            >
              <span
                className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
                data-oid="-70:7_9"
              >
                See Everything.
              </span>
              <br data-oid="iwv6ocu" />
              <span
                className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"
                data-oid="rz.zvp1"
              >
                Automate Anything.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-8 text-xl leading-8 text-muted-foreground sm:text-2xl"
              data-oid="cdovx7_"
            >
              Onlook is your AI-powered observer for code, infra, and data.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="ao8:l23"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-primary/20"
                data-oid="7yg29ed"
              >
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-border hover:border-primary/50 transition-all duration-200"
                data-oid="6r4yutu"
              >
                Learn More
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  data-oid="nbiaj47"
                />
              </Button>
            </div>

            {/* Terminal-style code snippet */}
            <div className="mt-16 mx-auto max-w-2xl" data-oid="59p10fi">
              <div
                className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 font-mono text-sm"
                data-oid="e6-ib00"
              >
                <div
                  className="flex items-center gap-2 mb-4"
                  data-oid="wng9j.6"
                >
                  <div
                    className="h-3 w-3 rounded-full bg-destructive"
                    data-oid="_n3.d:-"
                  />
                  <div
                    className="h-3 w-3 rounded-full bg-chart-4"
                    data-oid="mg5rr.o"
                  />
                  <div
                    className="h-3 w-3 rounded-full bg-chart-2"
                    data-oid="twoi4xa"
                  />
                  <span
                    className="ml-2 text-muted-foreground"
                    data-oid="uk6k4.y"
                  >
                    onlook-cli
                  </span>
                </div>
                <div className="space-y-2" data-oid="qtapp7q">
                  <div className="flex items-center gap-2" data-oid="3sf:37c">
                    <span className="text-chart-2" data-oid="5yzc0nc">
                      $
                    </span>
                    <span className="text-foreground" data-oid="q_3-62x">
                      onlook observe --all
                    </span>
                  </div>
                  <div className="text-muted-foreground" data-oid="h7xf7fd">
                    ✓ Monitoring 47 services across 3 environments
                  </div>
                  <div className="text-muted-foreground" data-oid="gkw2aun">
                    ✓ AI analysis active - 0 anomalies detected
                  </div>
                  <div className="flex items-center gap-2" data-oid="9sr7g79">
                    <span className="text-chart-2" data-oid="a.jfhf0">
                      $
                    </span>
                    <span className="animate-pulse" data-oid="9f4dpsb">
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
      <section className="py-24 sm:py-32" data-oid="55sdvdb">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="2-_t_q2">
          <div className="mx-auto max-w-2xl text-center" data-oid="aw:u0f7">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="__nvcll"
            >
              What Onlook Does
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="a3qc-.m"
            >
              Three core capabilities that transform how you manage your systems
            </p>
          </div>

          <div
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3"
            data-oid="4uu6qo6"
          >
            {/* Observes */}
            <Card
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
              data-oid="m9eq3hg"
            >
              <CardContent className="p-8" data-oid="ximghxw">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                  data-oid="6l:cffx"
                >
                  <Brain className="h-6 w-6" data-oid="1g4ccet" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="iu:pehm">
                  Observes your system
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="c8cprg_"
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
              data-oid="t8w1g-q"
            >
              <CardContent className="p-8" data-oid="o99:v:r">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1"
                  data-oid="k4djy_1"
                >
                  <Zap className="h-6 w-6" data-oid="3i1ngqr" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="40jtvve">
                  Detects anomalies
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="d414yfy"
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
              data-oid="vufoh0p"
            >
              <CardContent className="p-8" data-oid="zzmypel">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2"
                  data-oid="348ql1_"
                >
                  <Bot className="h-6 w-6" data-oid="31agmuh" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="0fvl7or">
                  Suggests or automates fixes
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="3ahxkul"
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
      <section className="py-24 sm:py-32 bg-muted/20" data-oid="wyzg-cu">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="iuc.w.i">
          <div className="mx-auto max-w-2xl text-center" data-oid="86g6e2i">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="0wobqqv"
            >
              How It Works
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="2qgjma4"
            >
              Seamless integration with your existing development workflow
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl" data-oid=":nsz6hl">
            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
              data-oid="gbg0x_8"
            >
              {/* Step 1 */}
              <div className="relative" data-oid="cne6g0x">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6"
                  data-oid="1iyr9wz"
                >
                  <Eye className="h-8 w-8" data-oid="07rqtoh" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="xlq7z78">
                  1. Connect & Observe
                </h3>
                <p className="text-muted-foreground" data-oid="n1horh_">
                  Install Onlook agents across your infrastructure. They begin
                  monitoring immediately with zero configuration.
                </p>
                {/* Connection line */}
                <div
                  className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                  data-oid=".l2d1c6"
                />
              </div>

              {/* Step 2 */}
              <div className="relative" data-oid="w8cywis">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/10 text-chart-1 mb-6"
                  data-oid="gzwxuet"
                >
                  <Brain className="h-8 w-8" data-oid="2jh_-en" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="iw60h3p">
                  2. AI Analysis
                </h3>
                <p className="text-muted-foreground" data-oid="dj_32me">
                  Our AI processes patterns, learns your system behavior, and
                  identifies potential issues in real-time.
                </p>
                {/* Connection line */}
                <div
                  className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-chart-1/50 to-transparent"
                  data-oid="drn_w-m"
                />
              </div>

              {/* Step 3 */}
              <div className="relative" data-oid="ukijm51">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10 text-chart-2 mb-6"
                  data-oid="hy5.e:b"
                >
                  <Zap className="h-8 w-8" data-oid="_083s_d" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="cwcey-_">
                  3. Automated Action
                </h3>
                <p className="text-muted-foreground" data-oid="tvtsuv.">
                  Receive intelligent alerts and automated fixes, keeping your
                  systems running smoothly 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup Section */}
      <section className="py-24 sm:py-32" data-oid="wzl:9lo">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="r20ue19">
          <div className="mx-auto max-w-2xl text-center" data-oid="p:hjk:t">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="xv5viea"
            >
              Join the Waitlist
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="i7utdow"
            >
              Be among the first to experience the future of system
              observability
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="zdq-k9f"
            >
              <div className="relative flex-1 max-w-md" data-oid="yktnzsl">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-4 transition-all duration-200 focus:ring-primary/20"
                  required
                  data-oid="w8eh3pt"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-primary/20 hover:ring-primary/30"
                disabled={isSubmitted}
                data-oid="191cq6o"
              >
                {isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" data-oid="bgyn9ef" />
                    Added to Waitlist!
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>

            <p
              className="mt-4 text-sm text-muted-foreground"
              data-oid="6u4eo-7"
            >
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/10" data-oid=":h7j978">
        <div
          className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
          data-oid="2md75rs"
        >
          <div
            className="flex flex-col items-center justify-between gap-8 sm:flex-row"
            data-oid="2im57_f"
          >
            {/* Logo and copyright */}
            <div className="flex items-center gap-4" data-oid="b.wb7ry">
              <div
                className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-mono font-bold"
                data-oid="uj76kr_"
              >
                O
              </div>
              <div className="text-sm text-muted-foreground" data-oid="6-diisf">
                © 2024 Onlook. All rights reserved.
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6" data-oid="3ubi5mq">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="my93c:e"
              >
                <FileText className="h-4 w-4" data-oid="d-4fpj4" />
                Docs
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="2:hi5t4"
              >
                <Twitter className="h-4 w-4" data-oid="ra27bcy" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="dme5cfl"
              >
                <Github className="h-4 w-4" data-oid="f00emfr" />
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="j0k.89a"
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
