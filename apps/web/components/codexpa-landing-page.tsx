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
      data-oid="j5lnrj:"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden" data-oid="8.khcx:">
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"
          data-oid="c__1kso"
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.269_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.269_0_0)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
          data-oid="g-x-k:d"
        />

        <div
          className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
          data-oid="inxngon"
        >
          <div className="mx-auto max-w-4xl text-center" data-oid="xd.l.i1">
            {/* Main headline */}
            <h1
              className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
              data-oid="jurbhqy"
            >
              <span
                className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
                data-oid="i0yd2ak"
              >
                See Everything.
              </span>
              <br data-oid="k7bm3hk" />
              <span
                className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"
                data-oid="ki-hnz7"
              >
                Automate Anything.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-8 text-xl leading-8 text-muted-foreground sm:text-2xl"
              data-oid="ow70mw7"
            >
              Onlook is your AI-powered observer for code, infra, and data.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="h28v87z"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-primary/20"
                data-oid="u3dt1tc"
              >
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-border hover:border-primary/50 transition-all duration-200"
                data-oid="o8fufbp"
              >
                Learn More
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  data-oid="nbb483y"
                />
              </Button>
            </div>

            {/* Terminal-style code snippet */}
            <div className="mt-16 mx-auto max-w-2xl" data-oid="fyc.71c">
              <div
                className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 font-mono text-sm"
                data-oid="7hmzxg9"
              >
                <div
                  className="flex items-center gap-2 mb-4"
                  data-oid="7a3lk48"
                >
                  <div
                    className="h-3 w-3 rounded-full bg-destructive"
                    data-oid="crte5.7"
                  />

                  <div
                    className="h-3 w-3 rounded-full bg-chart-4"
                    data-oid="nw8x6so"
                  />

                  <div
                    className="h-3 w-3 rounded-full bg-chart-2"
                    data-oid="k6au4vf"
                  />

                  <span
                    className="ml-2 text-muted-foreground"
                    data-oid="wqoy0s9"
                  >
                    onlook-cli
                  </span>
                </div>
                <div className="space-y-2" data-oid="0_bpzos">
                  <div className="flex items-center gap-2" data-oid="xmuk:fd">
                    <span className="text-chart-2" data-oid="t5g0nni">
                      $
                    </span>
                    <span className="text-foreground" data-oid="09aj2y-">
                      onlook observe --all
                    </span>
                  </div>
                  <div className="text-muted-foreground" data-oid="vs.96u2">
                    ✓ Monitoring 47 services across 3 environments
                  </div>
                  <div className="text-muted-foreground" data-oid="s3-mcn7">
                    ✓ AI analysis active - 0 anomalies detected
                  </div>
                  <div className="flex items-center gap-2" data-oid="hpzviqa">
                    <span className="text-chart-2" data-oid="_2eiu:w">
                      $
                    </span>
                    <span className="animate-pulse" data-oid="aov:0ka">
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
      <section className="py-24 sm:py-32" data-oid="szpwi9h">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="pzd0-id">
          <div className="mx-auto max-w-2xl text-center" data-oid="c4jjjyx">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="9uosa_y"
            >
              What Onlook Does
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="8q4qrys"
            >
              Three core capabilities that transform how you manage your systems
            </p>
          </div>

          <div
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3"
            data-oid="ect1jle"
          >
            {/* Observes */}
            <Card
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
              data-oid="p7d8dp:"
            >
              <CardContent className="p-8" data-oid="gmruow:">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                  data-oid="mhrumlw"
                >
                  <Brain className="h-6 w-6" data-oid="g1lq7_-" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="ju6131e">
                  Observes your system
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="u5xoaq4"
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
              data-oid="f-i3g:8"
            >
              <CardContent className="p-8" data-oid="49f2m-h">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1"
                  data-oid="mo-rh.h"
                >
                  <Zap className="h-6 w-6" data-oid="rhi1e95" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="s1awdos">
                  Detects anomalies
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="ac-y-km"
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
              data-oid="ofr.luc"
            >
              <CardContent className="p-8" data-oid="v.lhkoz">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2"
                  data-oid="yhc08ps"
                >
                  <Bot className="h-6 w-6" data-oid="wgde:vn" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-oid="xku54yq">
                  Suggests or automates fixes
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="hx3iw38"
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
      <section className="py-24 sm:py-32 bg-muted/20" data-oid="h7rl907">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid=":yf303_">
          <div className="mx-auto max-w-2xl text-center" data-oid="k9cux-b">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="h3gbuy-"
            >
              How It Works
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="-rom6g."
            >
              Seamless integration with your existing development workflow
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl" data-oid="x3l52o-">
            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
              data-oid="h7dumtp"
            >
              {/* Step 1 */}
              <div className="relative" data-oid="8qnm:2e">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6"
                  data-oid="sw3cd48"
                >
                  <Eye className="h-8 w-8" data-oid="p33skwi" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="cyz87s3">
                  1. Connect & Observe
                </h3>
                <p className="text-muted-foreground" data-oid="57m2t:.">
                  Install Onlook agents across your infrastructure. They begin
                  monitoring immediately with zero configuration.
                </p>
                {/* Connection line */}
                <div
                  className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                  data-oid="bd-bdoj"
                />
              </div>

              {/* Step 2 */}
              <div className="relative" data-oid="ky4nkcg">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/10 text-chart-1 mb-6"
                  data-oid="16x17wc"
                >
                  <Brain className="h-8 w-8" data-oid="j_ydtsb" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="wrq6g4l">
                  2. AI Analysis
                </h3>
                <p className="text-muted-foreground" data-oid="4iftz43">
                  Our AI processes patterns, learns your system behavior, and
                  identifies potential issues in real-time.
                </p>
                {/* Connection line */}
                <div
                  className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-chart-1/50 to-transparent"
                  data-oid="ly89.u1"
                />
              </div>

              {/* Step 3 */}
              <div className="relative" data-oid="hfqpsjz">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10 text-chart-2 mb-6"
                  data-oid="uqy_lsd"
                >
                  <Zap className="h-8 w-8" data-oid="mx6yuzw" />
                </div>
                <h3 className="text-lg font-semibold mb-3" data-oid="njkwy8m">
                  3. Automated Action
                </h3>
                <p className="text-muted-foreground" data-oid="8-xadcy">
                  Receive intelligent alerts and automated fixes, keeping your
                  systems running smoothly 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup Section */}
      <section className="py-24 sm:py-32" data-oid="op:.be.">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="ycea1ks">
          <div className="mx-auto max-w-2xl text-center" data-oid="2ftoxjt">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="_2xzek9"
            >
              Join the Waitlist
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="c5i0v6x"
            >
              Be among the first to experience the future of system
              observability
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="w:dkbul"
            >
              <div className="relative flex-1 max-w-md" data-oid="2pae68b">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-4 transition-all duration-200 focus:ring-primary/20"
                  required
                  data-oid="kws-7e0"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-primary/20 hover:ring-primary/30"
                disabled={isSubmitted}
                data-oid="11auc1s"
              >
                {isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" data-oid="kl18:y:" />
                    Added to Waitlist!
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>

            <p
              className="mt-4 text-sm text-muted-foreground"
              data-oid="-.lh0zf"
            >
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/10" data-oid="jcdz0t5">
        <div
          className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
          data-oid="p3a035v"
        >
          <div
            className="flex flex-col items-center justify-between gap-8 sm:flex-row"
            data-oid="3wxdwq9"
          >
            {/* Logo and copyright */}
            <div className="flex items-center gap-4" data-oid="vpo80md">
              <div
                className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-mono font-bold"
                data-oid="0stpwlv"
              >
                O
              </div>
              <div className="text-sm text-muted-foreground" data-oid="xa7cw2p">
                © 2024 Onlook. All rights reserved.
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6" data-oid="_2rd8ca">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="yo_ig7y"
              >
                <FileText className="h-4 w-4" data-oid="wm-mu1c" />
                Docs
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="eh1v.to"
              >
                <Twitter className="h-4 w-4" data-oid="7cjrx_j" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="twkp7oy"
              >
                <Github className="h-4 w-4" data-oid="c:fkv62" />
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="m83qtxn"
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
