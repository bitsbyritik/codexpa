import {
  ChevronDown,
  ExternalLink,
  FileCode,
  Github,
  Globe,
  Play,
  Terminal,
} from "lucide-react";
import AnimationContainer from "./global/animate";
import { Button } from "@codexpa/ui/components/ui/button";

export const HeroSection = () => {
  return (
    <AnimationContainer delay={0.5}>
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
              Launch any GitHub repo in one click. Cloud-based workspaces
              without the pain of local setup.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Join the Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer group border-border hover:border-primary/50 transition-all duration-200"
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
                    <div className="text-sm font-medium mb-3 text-muted-foreground">
                      EXPLORER
                    </div>
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
                    <div className="mb-2 text-xs text-muted-foreground">
                      index.js
                    </div>
                    <div className="space-y-1">
                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-400">express</span>{" "}
                        <span className="text-muted-foreground">=</span>{" "}
                        <span className="text-green-400">require</span>
                        <span className="text-muted-foreground">(</span>
                        <span className="text-orange-400">'express'</span>
                        <span className="text-muted-foreground">);</span>
                      </div>
                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-400">app</span>{" "}
                        <span className="text-muted-foreground">=</span>{" "}
                        <span className="text-blue-400">express</span>
                        <span className="text-muted-foreground">();</span>
                      </div>
                      <div></div>
                      <div>
                        <span className="text-blue-400">app</span>
                        <span className="text-muted-foreground">.</span>
                        <span className="text-green-400">get</span>
                        <span className="text-muted-foreground">(</span>
                        <span className="text-orange-400">'/'</span>
                        <span className="text-muted-foreground">,</span>{" "}
                        <span className="text-muted-foreground">(</span>
                        <span className="text-blue-400">req</span>
                        <span className="text-muted-foreground">,</span>{" "}
                        <span className="text-blue-400">res</span>
                        <span className="text-muted-foreground">)</span>{" "}
                        <span className="text-purple-400">{"=> "}</span>
                        <span className="text-muted-foreground">{"{"}</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-blue-400">res</span>
                        <span className="text-muted-foreground">.</span>
                        <span className="text-green-400">send</span>
                        <span className="text-muted-foreground">(</span>
                        <span className="text-orange-400">
                          'Hello from Codexpa!'
                        </span>
                        <span className="text-muted-foreground">);</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">{"});"}</span>
                      </div>
                      <div></div>
                      <div>
                        <span className="text-blue-400">app</span>
                        <span className="text-muted-foreground">.</span>
                        <span className="text-green-400">listen</span>
                        <span className="text-muted-foreground">(</span>
                        <span className="text-orange-400">3000</span>
                        <span className="text-muted-foreground">);</span>
                      </div>
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
                    <div className="text-green-400">
                      Server running on http://localhost:3000
                    </div>
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
    </AnimationContainer>
  );
};
