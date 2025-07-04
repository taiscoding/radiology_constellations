import { Brain, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/ThemeContext";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-black/80 backdrop-blur-xl border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Brain className="text-orange-400 h-8 w-8" />
              <span className="ml-3 text-xl font-semibold text-white">RadiologyConstellation</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-orange-400 font-medium hover:text-orange-300 transition-colors">Dashboard</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Cases</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white hidden sm:inline-flex transition-all duration-200">
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-700 py-4 bg-gray-900/50 backdrop-blur-xl">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-orange-400 font-medium">Dashboard</a>
              <a href="#" className="text-gray-300">Cases</a>
              <a href="#" className="text-gray-300">Resources</a>
              <a href="#" className="text-gray-300">About</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit transition-all duration-200">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
