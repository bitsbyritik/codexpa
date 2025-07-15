"use client";

import React, { useState } from "react";
import { Button } from "@codexpa/ui/components/ui/button";
import { Input } from "@codexpa/ui/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@codexpa/ui/components/ui/card";
import { useTheme } from "next-themes";
import {
  Github,
  Play,
  Terminal,
  Cloud,
  Zap,
  Shield,
  Users,
  Code,
  GitBranch,
  HardDrive,
  Clock,
  Monitor,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Star,
  Heart,
  MessageCircle,
  Check,
  ArrowRight,
  Laptop,
  Smartphone,
  Globe,
  Sun,
  Moon,
  Settings,
  FileCode,
  Database,
  Server,
} from "lucide-react";

export function CodexpaLandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { theme, setTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Is it free?",
      answer:
        "Yes! Codexpa is open-source and free to use. We offer generous free tiers for individual developers and students. Premium features and enterprise support will be available for teams and organizations.",
    },
    {
      question: "How is it different from Replit/Codespaces?",
      answer:
        "Codexpa is fully open-source, giving you complete control and transparency. It's designed to be lightweight, fast, and easily self-hostable. Unlike proprietary solutions, you own your data and can customize the platform to your needs.",
    },
    {
      question: "Can I self-host it?",
      answer:
        "Absolutely! Being open-source, you can deploy Codexpa on your own infrastructure. We provide Docker images and deployment guides for various cloud providers and on-premise setups.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      data-oid="_1d-8ed"
    >
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm"
        data-oid="wne1oxb"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="x01k.zw">
          <div
            className="flex h-16 items-center justify-between"
            data-oid="_rmdvtq"
          >
            {/* Logo */}
            <div className="flex items-center gap-3" data-oid="69dj:qp">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono font-bold"
                data-oid="vng-.1m"
              >
                C
              </div>
              <span className="text-xl font-bold" data-oid="0s4nxk2">
                Codexpa
              </span>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 p-0"
              data-oid="39scu_t"
            >
              <Sun
                className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                data-oid="zswzll6"
              />

              <Moon
                className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                data-oid="8w7fp2h"
              />

              <span className="sr-only" data-oid="xc:0g4u">
                Toggle theme
              </span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-24 sm:py-32"
        data-oid="dhe4s5u"
      >
        {/* Background effects */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10"
          data-oid="ewhlf7y"
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
          data-oid="msq:ib3"
        />

        <div
          className="relative mx-auto max-w-7xl px-6 lg:px-8"
          data-oid="sz9k2is"
        >
          <div className="mx-auto max-w-4xl text-center" data-oid=":aamqtu">
            {/* Main headline */}
            <h1
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              data-oid="1o_u77:"
            >
              <span
                className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
                data-oid="1gmb.z:"
              >
                Build, run, and ship code
              </span>
              <br data-oid="3p9ycxb" />
              <span
                className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"
                data-oid="1a-e9j9"
              >
                from any device
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="mt-6 text-xl leading-8 text-muted-foreground sm:text-2xl font-medium"
              data-oid="n62v4y3"
            >
              No setup. Just code.
            </p>

            {/* Subtext */}
            <p
              className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
              data-oid="o3w0v.s"
            >
              Launch any GitHub repo in one click. Cloud-based workspaces
              without the pain of local setup.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="bh1cf4s"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
                data-oid="6shbzz2"
              >
                Join the Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-border hover:border-primary/50 transition-all duration-200"
                data-oid=":buu2nd"
              >
                <Github className="mr-2 h-5 w-5" data-oid="g0inj7v" />
                View on GitHub
                <ExternalLink
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  data-oid="yrn.gds"
                />
              </Button>
            </div>

            {/* IDE Mockup */}
            <div className="mt-16 mx-auto max-w-4xl" data-oid="ixqu_5d">
              <div
                className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
                data-oid="2:o:7nr"
              >
                {/* IDE Header */}
                <div
                  className="flex items-center justify-between px-4 py-3 bg-muted/20 border-b border-border"
                  data-oid=":c416yb"
                >
                  <div className="flex items-center gap-2" data-oid="hyd8wd6">
                    <div
                      className="h-3 w-3 rounded-full bg-red-500"
                      data-oid="djk.aa7"
                    />

                    <div
                      className="h-3 w-3 rounded-full bg-yellow-500"
                      data-oid=":sj193m"
                    />

                    <div
                      className="h-3 w-3 rounded-full bg-green-500"
                      data-oid="4no_etb"
                    />
                  </div>
                  <div
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    data-oid="_q7egze"
                  >
                    <Globe className="h-4 w-4" data-oid=".zmvfjz" />
                    <span data-oid="nllou6w">
                      codexpa.dev/workspace/my-project
                    </span>
                  </div>
                  <div className="flex items-center gap-2" data-oid="iufbqd8">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 px-2"
                      data-oid="wjfasi2"
                    >
                      <Play className="h-3 w-3" data-oid="8ps4sb:" />
                    </Button>
                  </div>
                </div>

                {/* IDE Content */}
                <div
                  className="grid grid-cols-1 md:grid-cols-3 min-h-[300px]"
                  data-oid="w5z575y"
                >
                  {/* File Explorer */}
                  <div
                    className="border-r border-border bg-muted/5 p-4"
                    data-oid="r9vzzwr"
                  >
                    <div
                      className="text-sm font-medium mb-3 text-muted-foreground"
                      data-oid="v9qln4t"
                    >
                      EXPLORER
                    </div>
                    <div
                      className="space-y-1 font-mono text-sm"
                      data-oid="3m-ks_-"
                    >
                      <div
                        className="flex items-center gap-2 text-foreground"
                        data-oid="vk4e1ai"
                      >
                        <ChevronDown className="h-3 w-3" data-oid="07mkvn4" />
                        <FileCode className="h-3 w-3" data-oid="k7y51.e" />
                        <span data-oid="4nx2faq">my-project</span>
                      </div>
                      <div className="ml-5 space-y-1" data-oid="ctcmax.">
                        <div
                          className="flex items-center gap-2 text-muted-foreground"
                          data-oid="vggqpm-"
                        >
                          <FileCode className="h-3 w-3" data-oid=".zurove" />
                          <span data-oid="0fict87">index.js</span>
                        </div>
                        <div
                          className="flex items-center gap-2 text-muted-foreground"
                          data-oid="7s48s1m"
                        >
                          <FileCode className="h-3 w-3" data-oid="b8w9xzy" />
                          <span data-oid="vs1a:vy">package.json</span>
                        </div>
                        <div
                          className="flex items-center gap-2 text-muted-foreground"
                          data-oid="dr2njof"
                        >
                          <FileCode className="h-3 w-3" data-oid="9p7k:hx" />
                          <span data-oid="nvp-lu2">README.md</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Code Editor */}
                  <div
                    className="md:col-span-2 p-4 font-mono text-sm"
                    data-oid="av_rued"
                  >
                    <div
                      className="mb-2 text-xs text-muted-foreground"
                      data-oid="z8z8.64"
                    >
                      index.js
                    </div>
                    <div className="space-y-1" data-oid="yh3:5ul">
                      <div data-oid="9p03k0c">
                        <span className="text-purple-400" data-oid="bn-25ux">
                          const
                        </span>{" "}
                        <span className="text-blue-400" data-oid="ry77dlp">
                          express
                        </span>{" "}
                        <span
                          className="text-muted-foreground"
                          data-oid="ssj4m2k"
                        >
                          =
                        </span>{" "}
                        <span className="text-green-400" data-oid="hp0esud">
                          require
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="toxpk8-"
                        >
                          (
                        </span>
                        <span className="text-orange-400" data-oid=".s-dnvv">
                          'express'
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="yo5pjug"
                        >
                          );
                        </span>
                      </div>
                      <div data-oid="k3op314">
                        <span className="text-purple-400" data-oid="13q.44_">
                          const
                        </span>{" "}
                        <span className="text-blue-400" data-oid="du8kl44">
                          app
                        </span>{" "}
                        <span
                          className="text-muted-foreground"
                          data-oid="4tlrt03"
                        >
                          =
                        </span>{" "}
                        <span className="text-blue-400" data-oid="y-frz2l">
                          express
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="v7jnw_4"
                        >
                          ();
                        </span>
                      </div>
                      <div data-oid="a7ff13a"></div>
                      <div data-oid="r_2wtq2">
                        <span className="text-blue-400" data-oid="cqd.c:a">
                          app
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="-s40yzi"
                        >
                          .
                        </span>
                        <span className="text-green-400" data-oid="ykdwwj0">
                          get
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="1ti8y9j"
                        >
                          (
                        </span>
                        <span className="text-orange-400" data-oid="7g5mpsu">
                          '/'
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="0f4_:y:"
                        >
                          ,
                        </span>{" "}
                        <span
                          className="text-muted-foreground"
                          data-oid="9om:xkd"
                        >
                          (
                        </span>
                        <span className="text-blue-400" data-oid="pgozh_x">
                          req
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="4hxu3lh"
                        >
                          ,
                        </span>{" "}
                        <span className="text-blue-400" data-oid=".71p79r">
                          res
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="bt.v00m"
                        >
                          )
                        </span>{" "}
                        <span className="text-purple-400" data-oid="_fyjz8f">
                          {"=> "}
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="fhish7j"
                        >
                          {"{"}
                        </span>
                      </div>
                      <div className="ml-4" data-oid="n3eysod">
                        <span className="text-blue-400" data-oid="sn4aez_">
                          res
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="meowhe5"
                        >
                          .
                        </span>
                        <span className="text-green-400" data-oid="vaacg9x">
                          send
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="nh11k7t"
                        >
                          (
                        </span>
                        <span className="text-orange-400" data-oid="569udne">
                          'Hello from Codexpa!'
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="gx1gth_"
                        >
                          );
                        </span>
                      </div>
                      <div data-oid=".--rvbz">
                        <span
                          className="text-muted-foreground"
                          data-oid="tu:c47u"
                        >
                          {"});"}
                        </span>
                      </div>
                      <div data-oid="5pwii5z"></div>
                      <div data-oid="mg98h5:">
                        <span className="text-blue-400" data-oid="2mzmvlh">
                          app
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="zfz:uis"
                        >
                          .
                        </span>
                        <span className="text-green-400" data-oid="i:9uieu">
                          listen
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="rvw4iml"
                        >
                          (
                        </span>
                        <span className="text-orange-400" data-oid="55rcml2">
                          3000
                        </span>
                        <span
                          className="text-muted-foreground"
                          data-oid="78wn13i"
                        >
                          );
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terminal */}
                <div
                  className="border-t border-border bg-muted/10 p-4 font-mono text-sm"
                  data-oid="giqa9xr"
                >
                  <div
                    className="flex items-center gap-2 mb-2"
                    data-oid="ardtwos"
                  >
                    <Terminal
                      className="h-4 w-4 text-muted-foreground"
                      data-oid=".h9meez"
                    />

                    <span className="text-muted-foreground" data-oid="oha0i9d">
                      Terminal
                    </span>
                  </div>
                  <div className="space-y-1" data-oid="44tc6we">
                    <div className="flex items-center gap-2" data-oid="k1pixbk">
                      <span className="text-green-400" data-oid="16tjlkc">
                        $
                      </span>
                      <span className="text-foreground" data-oid="ppld1zv">
                        npm start
                      </span>
                    </div>
                    <div className="text-green-400" data-oid="gd09rxx">
                      Server running on http://localhost:3000
                    </div>
                    <div className="flex items-center gap-2" data-oid="z6fluo_">
                      <span className="text-green-400" data-oid="smbn3lm">
                        $
                      </span>
                      <span className="animate-pulse" data-oid="vnt-ijc">
                        _
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 sm:py-32 bg-muted/5" data-oid="xekh2fr">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="zo41q2_">
          <div className="mx-auto max-w-2xl text-center" data-oid="r-mftsk">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="ssglt_2"
            >
              How It Works
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="w12kxhd"
            >
              Simple architecture, powerful results
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl" data-oid="5xam471">
            <div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
              data-oid="6zx2qz9"
            >
              <Card
                className="text-center hover:shadow-lg transition-shadow"
                data-oid="r:f73.e"
              >
                <CardContent className="p-6" data-oid="j.xwbk1">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    data-oid="nlxpsi9"
                  >
                    <Github className="h-6 w-6" data-oid="uig6isc" />
                  </div>
                  <h3 className="font-semibold mb-2" data-oid="isrxsj9">
                    GitHub Login
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="oll.eel"
                  >
                    Authenticate with GitHub and access your repositories
                    instantly
                  </p>
                </CardContent>
              </Card>

              <Card
                className="text-center hover:shadow-lg transition-shadow"
                data-oid="amtmohu"
              >
                <CardContent className="p-6" data-oid="b.v7bz.">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1"
                    data-oid="5.pmm4n"
                  >
                    <Zap className="h-6 w-6" data-oid="e_znni1" />
                  </div>
                  <h3 className="font-semibold mb-2" data-oid="kcy1szw">
                    tRPC Frontend
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="f_mn0lh"
                  >
                    Type-safe API calls connect the frontend to backend services
                  </p>
                </CardContent>
              </Card>

              <Card
                className="text-center hover:shadow-lg transition-shadow"
                data-oid="iw0_mxh"
              >
                <CardContent className="p-6" data-oid="pe:_yl8">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2"
                    data-oid="tstzlrx"
                  >
                    <Server className="h-6 w-6" data-oid="5ic4cy7" />
                  </div>
                  <h3 className="font-semibold mb-2" data-oid="ek91.i.">
                    Docker Workspace
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="mk..lxc"
                  >
                    Express backend spins up sandboxed, ephemeral containers
                  </p>
                </CardContent>
              </Card>

              <Card
                className="text-center hover:shadow-lg transition-shadow"
                data-oid="kblflw-"
              >
                <CardContent className="p-6" data-oid="dv4iytf">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3"
                    data-oid="babd_dv"
                  >
                    <Code className="h-6 w-6" data-oid="-q1q-v4" />
                  </div>
                  <h3 className="font-semibold mb-2" data-oid="ff4k2cr">
                    Start Coding
                  </h3>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="sojhcxa"
                  >
                    Full IDE experience with terminal access in your browser
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 sm:py-32" data-oid="5xikcch">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="d4b1pgm">
          <div className="mx-auto max-w-2xl text-center" data-oid="jyiyqwz">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="re4a5yj"
            >
              Core Features
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="1hzblqa"
            >
              Everything you need for cloud-based development
            </p>
          </div>

          <div
            className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            data-oid="bh:vwie"
          >
            <Card
              className="group hover:border-primary/20 transition-all duration-300"
              data-oid="v7:8irr"
            >
              <CardHeader data-oid="ln8cbrg">
                <div
                  className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
                  data-oid="bdnz7xi"
                >
                  <Monitor className="h-5 w-5" data-oid=".g-.yl6" />
                </div>
                <CardTitle data-oid="lmy28-5">
                  Cloud Editor (VS Code / Monaco)
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="talwq2u">
                <p className="text-muted-foreground" data-oid="iu7khe9">
                  Full VS Code experience powered by Monaco Editor. Syntax
                  highlighting, IntelliSense, and extensions support.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group hover:border-chart-1/20 transition-all duration-300"
              data-oid="yiefcfj"
            >
              <CardHeader data-oid="baept_h">
                <div
                  className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1"
                  data-oid="8fhocvp"
                >
                  <Terminal className="h-5 w-5" data-oid=".qt3y.:" />
                </div>
                <CardTitle data-oid="7:7ilve">
                  Terminal Access (xterm.js)
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="cne-bsp">
                <p className="text-muted-foreground" data-oid="0oedx4n">
                  Full terminal access via xterm.js. Run commands, install
                  packages, and debug your applications.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group hover:border-chart-2/20 transition-all duration-300"
              data-oid="bkwr8yz"
            >
              <CardHeader data-oid="wr73m56">
                <div
                  className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2"
                  data-oid="3o.eg:3"
                >
                  <GitBranch className="h-5 w-5" data-oid="e.amgeq" />
                </div>
                <CardTitle data-oid="n3-9.sv">GitHub Push/Pull</CardTitle>
              </CardHeader>
              <CardContent data-oid="52rgsy-">
                <p className="text-muted-foreground" data-oid="m.w7gz1">
                  Seamless Git integration. Push, pull, create branches, and
                  manage pull requests directly from the IDE.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group hover:border-chart-3/20 transition-all duration-300"
              data-oid=".ljr2z6"
            >
              <CardHeader data-oid="v9ic.x9">
                <div
                  className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3"
                  data-oid="dbd:4it"
                >
                  <Clock className="h-5 w-5" data-oid="ad2zke2" />
                </div>
                <CardTitle data-oid="e6olxob">Auto Idle Shutdown</CardTitle>
              </CardHeader>
              <CardContent data-oid="._bf_-j">
                <p className="text-muted-foreground" data-oid=":h6fus-">
                  Intelligent resource management. Workspaces automatically shut
                  down when idle to save costs.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group hover:border-chart-4/20 transition-all duration-300"
              data-oid="m8k4hm."
            >
              <CardHeader data-oid="8cgn6zk">
                <div
                  className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10 text-chart-4"
                  data-oid="5xr602e"
                >
                  <HardDrive className="h-5 w-5" data-oid="ruv5h6f" />
                </div>
                <CardTitle data-oid="22198v8">
                  Persistent Volume Storage
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="kq2pe9r">
                <p className="text-muted-foreground" data-oid="ckm2uo.">
                  Your work is always saved. Persistent volumes ensure your
                  files and configurations survive restarts.
                </p>
              </CardContent>
            </Card>

            <Card
              className="group hover:border-chart-5/20 transition-all duration-300"
              data-oid="r:35r3c"
            >
              <CardHeader data-oid="83v13ln">
                <div
                  className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-5/10 text-chart-5"
                  data-oid="yu1q3t4"
                >
                  <Smartphone className="h-5 w-5" data-oid="9q250is" />
                </div>
                <CardTitle data-oid="ad:2b93">Any Device Access</CardTitle>
              </CardHeader>
              <CardContent data-oid="vc2877u">
                <p className="text-muted-foreground" data-oid="ithv05y">
                  Code from anywhere. Works on laptops, tablets, Chromebooks,
                  and even mobile devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 sm:py-32 bg-muted/5" data-oid="8_say7a">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="d_mk9sf">
          <div className="mx-auto max-w-2xl text-center" data-oid="ishq_q2">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="thtnnfi"
            >
              Perfect For
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="lpk-sdl"
            >
              Who benefits most from Codexpa
            </p>
          </div>

          <div
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
            data-oid="i4r--tb"
          >
            <Card
              className="text-center hover:shadow-lg transition-shadow"
              data-oid="cb9t:j."
            >
              <CardContent className="p-8" data-oid="-p:jgj:">
                <div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary"
                  data-oid="08ez3vo"
                >
                  <Laptop className="h-8 w-8" data-oid="0tsivgm" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-oid="txzdw94">
                  Students coding on Chromebooks
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="9z:l9q0"
                >
                  Code on low-spec devices without expensive hardware or complex
                  local setups. Perfect for computer science students.
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-shadow"
              data-oid="3if-r0v"
            >
              <CardContent className="p-8" data-oid="ubywigq">
                <div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/10 text-chart-1"
                  data-oid="pyu3d-b"
                >
                  <Heart className="h-8 w-8" data-oid="o3cde6j" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-oid="olbz_4d">
                  Open source contributors
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="yv81akc"
                >
                  Quickly contribute to projects without cloning repos locally.
                  Jump into any codebase instantly and start contributing.
                </p>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-shadow"
              data-oid="f0q8b.."
            >
              <CardContent className="p-8" data-oid="h7lwqfv">
                <div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10 text-chart-2"
                  data-oid=":xhi_ox"
                >
                  <Users className="h-8 w-8" data-oid="ivrrhxj" />
                </div>
                <h3 className="text-xl font-semibold mb-4" data-oid="tqleh16">
                  Freelancers avoiding setup mess
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-oid="pri_445"
                >
                  Switch between client projects without the setup hassle.
                  Consistent environments and instant project access.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 sm:py-32" data-oid="49opr1.">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="6w8x0gq">
          <div className="mx-auto max-w-2xl text-center" data-oid="5p.17cy">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="1:u8.2c"
            >
              Join the Waitlist
            </h2>
            <p
              className="mt-4 text-lg text-muted-foreground"
              data-oid="u5-npn9"
            >
              Be among the first to use Codexpa. We'll notify you on early
              access.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="q5oh-4t"
            >
              <div className="relative flex-1 max-w-md" data-oid="s6g9.8s">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="transition-all duration-200"
                  required
                  data-oid="_l_w8jj"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={isSubmitted}
                data-oid="02xfgko"
              >
                {isSubmitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" data-oid=":sz-muh" />
                    Added to Waitlist!
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>

            <div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
              data-oid="vpuh12l"
            >
              <Button variant="outline" className="group" data-oid="f2pthlr">
                <Github className="mr-2 h-4 w-4" data-oid="2sg0z6v" />
                Sign up with GitHub
              </Button>
              <Button variant="outline" className="group" data-oid="9ifq5w2">
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  data-oid="6pc4yrq"
                >
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    data-oid="q52ztxk"
                  />

                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    data-oid="0h3d61k"
                  />

                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    data-oid="sccj.wo"
                  />

                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    data-oid="0x938vx"
                  />
                </svg>
                Sign up with Google
              </Button>
            </div>

            <p
              className="mt-4 text-sm text-muted-foreground"
              data-oid="wh0rypu"
            >
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-muted/5" data-oid="y6hyp09">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-oid="-.0_imk">
          <div className="mx-auto max-w-2xl text-center" data-oid="3ignyvu">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-oid="iu16pay"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl" data-oid="c9220cq">
            <div className="space-y-4" data-oid=".nyt21n">
              {faqData.map((faq, index) => (
                <Card
                  key={index}
                  className="overflow-hidden"
                  data-oid="myprzws"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                    data-oid="lw8ige:"
                  >
                    <h3 className="font-semibold" data-oid="9lq23wb">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp
                        className="h-5 w-5 text-muted-foreground"
                        data-oid="b:v7l7u"
                      />
                    ) : (
                      <ChevronDown
                        className="h-5 w-5 text-muted-foreground"
                        data-oid="c7t8lte"
                      />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4" data-oid="8yw.9qe">
                      <p
                        className="text-muted-foreground leading-relaxed"
                        data-oid="8.6ll:r"
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/10" data-oid="n120v_4">
        <div
          className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
          data-oid="sfhg240"
        >
          <div
            className="flex flex-col items-center justify-between gap-8 sm:flex-row"
            data-oid="s9l48tk"
          >
            {/* Logo and Open Source Badge */}
            <div className="flex items-center gap-6" data-oid="2sg41n0">
              <div className="flex items-center gap-3" data-oid="7:ndo.m">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-mono font-bold"
                  data-oid="fcdiml4"
                >
                  C
                </div>
                <span className="font-bold" data-oid=":bngphd">
                  Codexpa
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-chart-2/10 text-chart-2 text-sm"
                data-oid="d61jblz"
              >
                <Heart className="h-3 w-3" data-oid="xj37y3i" />
                <span data-oid="qxrfmy5">Open Source</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6" data-oid="dvqwtvr">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="bj0nl60"
              >
                <Github className="h-4 w-4" data-oid="yn--x24" />
                GitHub repo link
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="k8jludd"
              >
                <MessageCircle className="h-4 w-4" data-oid="8iounkx" />
                Discord
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-oid="sg3d6i8"
              >
                Socials
              </a>
            </div>
          </div>

          <div
            className="mt-8 border-t border-border pt-8 text-center"
            data-oid="3dp45t:"
          >
            <p className="text-sm text-muted-foreground" data-oid="nzu-_5s">
              © 2024 Codexpa. Open source and built with ❤️ for developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
