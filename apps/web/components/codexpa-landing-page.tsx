"use client";

import { useState } from "react";
import { Button } from "@codexpa/ui/components/ui/button";
import { Input } from "@codexpa/ui/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@codexpa/ui/components/ui/card";
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
  Server
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
      answer: "Yes! Codexpa is open-source and free to use. We offer generous free tiers for individual developers and students. Premium features and enterprise support will be available for teams and organizations."
    },
    {
      question: "How is it different from Replit/Codespaces?",
      answer: "Codexpa is fully open-source, giving you complete control and transparency. It's designed to be lightweight, fast, and easily self-hostable. Unlike proprietary solutions, you own your data and can customize the platform to your needs."
    },
    {
      question: "Can I self-host it?",
      answer: "Absolutely! Being open-source, you can deploy Codexpa on your own infrastructure. We provide Docker images and deployment guides for various cloud providers and on-premise setups."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono font-bold">
                C
              </div>
              <span className="text-xl font-bold">Codexpa</span>
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-8 w-8 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main headline */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Build, run, and ship code
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
                from any device
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="mt-6 text-xl leading-8 text-muted-foreground sm:text-2xl font-medium">
              No setup. Just code.
            </p>
            
            {/* Subtext */}
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Launch any GitHub repo in one click. Cloud-based workspaces without the pain of local setup.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Join the Waitlist
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group border-border hover:border-primary/50 transition-all duration-200"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* IDE Mockup */}
            <div className="mt-16 mx-auto max-w-4xl">
              <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
                {/* IDE Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-muted/20 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>codexpa.dev/workspace/my-project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="h-6 px-2">
                      <Play className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                
                {/* IDE Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 min-h-[300px]">
                  {/* File Explorer */}
                  <div className="border-r border-border bg-muted/5 p-4">
                    <div className="text-sm font-medium mb-3 text-muted-foreground">EXPLORER</div>
                    <div className="space-y-1 font-mono text-sm">
                      <div className="flex items-center gap-2 text-foreground">
                        <ChevronDown className="h-3 w-3" />
                        <FileCode className="h-3 w-3" />
                        <span>my-project</span>
                      </div>
                      <div className="ml-5 space-y-1">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <FileCode className="h-3 w-3" />
                          <span>index.js</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <FileCode className="h-3 w-3" />
                          <span>package.json</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <FileCode className="h-3 w-3" />
                          <span>README.md</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Code Editor */}
                  <div className="md:col-span-2 p-4 font-mono text-sm">
                    <div className="mb-2 text-xs text-muted-foreground">index.js</div>
                    <div className="space-y-1">
                      <div><span className="text-purple-400">const</span> <span className="text-blue-400">express</span> <span className="text-muted-foreground">=</span> <span className="text-green-400">require</span><span className="text-muted-foreground">(</span><span className="text-orange-400">'express'</span><span className="text-muted-foreground">);</span></div>
                      <div><span className="text-purple-400">const</span> <span className="text-blue-400">app</span> <span className="text-muted-foreground">=</span> <span className="text-blue-400">express</span><span className="text-muted-foreground">();</span></div>
                      <div></div>
                      <div><span className="text-blue-400">app</span><span className="text-muted-foreground">.</span><span className="text-green-400">get</span><span className="text-muted-foreground">(</span><span className="text-orange-400">'/'</span><span className="text-muted-foreground">,</span> <span className="text-muted-foreground">(</span><span className="text-blue-400">req</span><span className="text-muted-foreground">,</span> <span className="text-blue-400">res</span><span className="text-muted-foreground">)</span> <span className="text-purple-400">=></span> <span className="text-muted-foreground">{</span></div>
                      <div className="ml-4"><span className="text-blue-400">res</span><span className="text-muted-foreground">.</span><span className="text-green-400">send</span><span className="text-muted-foreground">(</span><span className="text-orange-400">'Hello from Codexpa!'</span><span className="text-muted-foreground">);</span></div>
                      <div><span className="text-muted-foreground">});</span></div>
                      <div></div>
                      <div><span className="text-blue-400">app</span><span className="text-muted-foreground">.</span><span className="text-green-400">listen</span><span className="text-muted-foreground">(</span><span className="text-orange-400">3000</span><span className="text-muted-foreground">);</span></div>
                    </div>
                  </div>
                </div>
                
                {/* Terminal */}
                <div className="border-t border-border bg-muted/10 p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Terminal</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span className="text-foreground">npm start</span>
                    </div>
                    <div className="text-green-400">Server running on http://localhost:3000</div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
                    Authenticate with GitHub and access your repositories instantly
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
                    Type-safe API calls connect the frontend to backend services
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

      {/* Core Features Section */}
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
                  Full VS Code experience powered by Monaco Editor. Syntax highlighting, IntelliSense, and extensions support.
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
                  Full terminal access via xterm.js. Run commands, install packages, and debug your applications.
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
                  Seamless Git integration. Push, pull, create branches, and manage pull requests directly from the IDE.
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
                  Intelligent resource management. Workspaces automatically shut down when idle to save costs.
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
                  Your work is always saved. Persistent volumes ensure your files and configurations survive restarts.
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
                  Code from anywhere. Works on laptops, tablets, Chromebooks, and even mobile devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
                <h3 className="text-xl font-semibold mb-4">Students coding on Chromebooks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Code on low-spec devices without expensive hardware or complex local setups. Perfect for computer science students.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/10 text-chart-1">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Open source contributors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quickly contribute to projects without cloning repos locally. Jump into any codebase instantly and start contributing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/10 text-chart-2">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Freelancers avoiding setup mess</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Switch between client projects without the setup hassle. Consistent environments and instant project access.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Join the Waitlist
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Be among the first to use Codexpa. We'll notify you on early access.
            </p>
            
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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

      {/* Footer */}
      <footer className="border-t border-border bg-muted/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            {/* Logo and Open Source Badge */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-mono font-bold">
                  C
                </div>
                <span className="font-bold">Codexpa</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-chart-2/10 text-chart-2 text-sm">
                <Heart className="h-3 w-3" />
                <span>Open Source</span>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub repo link
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Discord
              </a>
              <a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Socials
              </a>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Codexpa. Open source and built with ❤️ for developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}"use client";

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
