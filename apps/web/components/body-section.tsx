"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@codexpa/ui/components/ui/card";
import AnimationContainer from "./global/animate";
import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Code,
  GitBranch,
  Github,
  HardDrive,
  Heart,
  Laptop,
  Monitor,
  Server,
  Smartphone,
  Terminal,
  Users,
  Zap,
} from "lucide-react";
import { Input } from "@codexpa/ui/components/ui/input";
import { Button } from "@codexpa/ui/components/ui/button";

export const BodySection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
    <div>
      <AnimationContainer delay={0.3}>
        <section className="py-24 sm:py-32 bg-muted/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Simple architecture, powerful results
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Github className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">GitHub Login</h3>
                    <p className="text-sm text-muted-foreground">
                      Authenticate with GitHub and access your repositories
                      instantly
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">tRPC Frontend</h3>
                    <p className="text-sm text-muted-foreground">
                      Type-safe API calls connect the frontend to backend
                      services
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                      <Server className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Docker Workspace</h3>
                    <p className="text-sm text-muted-foreground">
                      Express backend spins up sandboxed, ephemeral containers
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
                      <Code className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Start Coding</h3>
                    <p className="text-sm text-muted-foreground">
                      Full IDE experience with terminal access in your browser
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimationContainer>

      {/* Core Features Section */}
      <AnimationContainer delay={0.3}>
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Core Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need for cloud-based development
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <CardTitle>Cloud Editor (VS Code / Monaco)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full VS Code experience powered by Monaco Editor. Syntax
                    highlighting, IntelliSense, and extensions support.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:border-chart-1/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-1/10 text-chart-1">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <CardTitle>Terminal Access (xterm.js)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full terminal access via xterm.js. Run commands, install
                    packages, and debug your applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:border-chart-2/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <CardTitle>GitHub Push/Pull</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seamless Git integration. Push, pull, create branches, and
                    manage pull requests directly from the IDE.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:border-chart-3/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10 text-chart-3">
                    <Clock className="h-5 w-5" />
                  </div>
                  <CardTitle>Auto Idle Shutdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Intelligent resource management. Workspaces automatically
                    shut down when idle to save costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:border-chart-4/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10 text-chart-4">
                    <HardDrive className="h-5 w-5" />
                  </div>
                  <CardTitle>Persistent Volume Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your work is always saved. Persistent volumes ensure your
                    files and configurations survive restarts.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:border-chart-5/20 transition-all duration-300">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-chart-5/10 text-chart-5">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <CardTitle>Any Device Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Code from anywhere. Works on laptops, tablets, Chromebooks,
                    and even mobile devices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimationContainer>

      {/* Use Cases Section */}
      <AnimationContainer delay={0.3}>
        <section className="py-24 sm:py-32 bg-muted/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Perfect For
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Who benefits most from Codexpa
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Laptop className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Students coding on Chromebooks
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Code on low-spec devices without expensive hardware or
                    complex local setups. Perfect for computer science students.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/10 text-chart-1">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Open source contributors
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Quickly contribute to projects without cloning repos
                    locally. Jump into any codebase instantly and start
                    contributing.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Freelancers avoiding setup mess
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Switch between client projects without the setup hassle.
                    Consistent environments and instant project access.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimationContainer>

      {/* Waitlist Section */}
      <AnimationContainer delay={0.3}>
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Join the Waitlist
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Be among the first to use Codexpa. We'll notify you on early
                access.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
              >
                <div className="relative flex-1 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="transition-all duration-200"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Added to Waitlist!
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button variant="outline" className="group">
                  <Github className="mr-2 h-4 w-4" />
                  Sign up with GitHub
                </Button>
                <Button variant="outline" className="group">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />

                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />

                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />

                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign up with Google
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </AnimationContainer>

      <AnimationContainer delay={0.3}>
        {/* FAQ Section */}
        <section className="py-24 sm:py-32 bg-muted/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                    >
                      <h3 className="font-semibold">{faq.question}</h3>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-muted-foreground leading-relaxed">
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
      </AnimationContainer>
    </div>
  );
};
