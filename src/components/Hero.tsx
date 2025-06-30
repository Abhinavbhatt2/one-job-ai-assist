
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-2xl shadow-lg">
              ONE JOB
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Land Your Dream Job with AI Power
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-powered platform that optimizes your entire job search journey. 
            From resume crafting to interview mastery - we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300">
              View Services
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <Sparkles className="h-8 w-8 text-blue-600 mr-4" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">AI-Powered Optimization</h3>
                <p className="text-gray-600">Smart algorithms tailored for success</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <Target className="h-8 w-8 text-purple-600 mr-4" />
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">Personalized Strategy</h3>
                <p className="text-gray-600">Custom approach for your career goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
