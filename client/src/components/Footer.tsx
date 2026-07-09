export default function Footer() {
  return (
    <footer className="border-t border-border/30 backdrop-blur-md bg-background/50 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              GoldenEagle-ai.developers
            </h3>
            <p className="text-foreground/60 text-sm">
              Unrestricted, powerful AI for advanced reasoning and analysis.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/features" className="text-foreground/60 hover:text-foreground transition">Features</a></li>
              <li><a href="/pricing" className="text-foreground/60 hover:text-foreground transition">Pricing</a></li>
              <li><a href="/chat" className="text-foreground/60 hover:text-foreground transition">Start Chatting</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs" className="text-foreground/60 hover:text-foreground transition">Documentation</a></li>
              <li><a href="/api-docs" className="text-foreground/60 hover:text-foreground transition">API Docs</a></li>
              <li><a href="/about" className="text-foreground/60 hover:text-foreground transition">About</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://discord.gg/zmgpkgCPS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition"
                >
                  Main Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/fSE5KsGsb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition"
                >
                  Support Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>Created by azerkash, a Kosovan developer</p>
            <p>Golden Eagle AI - Unrestricted Intelligence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
