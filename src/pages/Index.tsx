import { Button } from "@/components/ui/button";
import posterImage from "@/assets/cottage-prayer-poster.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl">
        {/* Poster Image */}
        <div className="mb-8 flex justify-center">
          <img 
            src={posterImage} 
            alt="Cottage Prayer - October 21, 2025 at 6:30 PM" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Join Meeting Section */}
        <div className="text-center space-y-6 bg-card p-8 rounded-lg shadow-md border border-border">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground tracking-wide">
              Join Us Online
            </h2>
            <p className="text-muted-foreground text-sm">
              Click below to join the Cottage Prayer meeting
            </p>
          </div>

          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <a 
              href="https://meet.google.com/mrd-tzfb-ouc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg 
                className="w-6 h-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-4.896 0-8.015-2.366-8.015-8s3.119-8 8.015-8c7.733 0 11.985 8.449 11.985 8.449zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
              </svg>
              Join Google Meet
            </a>
          </Button>

          <div className="pt-4 border-t border-border mt-6">
            <p className="text-sm text-muted-foreground italic">
              "For where two or three gather in my name, there am I with them."
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              - Matthew 18:20
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Let's Seek the Kingdom of God Together
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
