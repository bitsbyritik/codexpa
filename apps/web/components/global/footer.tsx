import { Github, Heart, MessageCircle } from "lucide-react";
import AnimationContainer from "./animate";

export const Footer = () => {
  return (
    <AnimationContainer delay={0.3}>
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
              © 2025 Codexpa. Open source and built with ❤️ for developers.
            </p>
          </div>
        </div>
      </footer>
    </AnimationContainer>
  );
};
