
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AIServices = () => {
  const services = [
    {
      title: "Get Job Fit Analysis",
      description: "AI analyzes your profile against job requirements to show compatibility percentage and improvement areas.",
      icon: (
        <svg className="h-16 w-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.2"/>
        </svg>
      )
    },
    {
      title: "Generate Custom Cover Letter",
      description: "Create personalized cover letters tailored to specific job descriptions and company culture.",
      icon: (
        <svg className="h-16 w-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 13h.01M8 17h8" />
          <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    },
    {
      title: "Get Contact Detail of HR",
      description: "Find verified HR contact information and decision makers for your target companies.",
      icon: (
        <svg className="h-16 w-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          <rect x="9" y="12" width="6" height="2" fill="currentColor" opacity="0.2"/>
        </svg>
      )
    },
    {
      title: "Generate Custom Resume",
      description: "AI creates targeted resumes optimized for specific job descriptions and ATS systems.",
      icon: (
        <svg className="h-16 w-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h.01M9 16h.01" />
          <rect x="6" y="6" width="12" height="2" fill="currentColor" opacity="0.2"/>
          <circle cx="18" cy="10" r="2" fill="currentColor" opacity="0.3"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI Powered Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to supercharge your job search with intelligent, personalized solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 text-center">
                <Button 
                  variant="outline"
                  className="w-full border-2 border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-full group-hover:border-purple-400"
                >
                  Try Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">All AI services are powered by advanced machine learning algorithms</p>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full">
            Explore All AI Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIServices;
