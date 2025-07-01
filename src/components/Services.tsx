
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Linkedin, MessageSquare, Search, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "AI-Powered Job Search Optimization",
      description: "Our revolutionary AI analyzes thousands of job postings to match you with perfect opportunities and optimize your application strategy.",
      features: ["Smart job matching", "Application tracking", "Success analytics", "Market insights"],
      price: "Starting at ₹99",
      popular: true
    },
    {
      icon: <FileText className="h-12 w-12 text-green-600" />,
      title: "Professional Resume Writing",
      description: "Expert-crafted resumes that pass ATS systems and impress hiring managers. Tailored to your industry and career level.",
      features: ["ATS-optimized format", "Industry-specific keywords", "Multiple revisions", "Cover letter included"],
      price: "Starting at ₹149"
    },
    {
      icon: <Linkedin className="h-12 w-12 text-blue-700" />,
      title: "LinkedIn Profile Optimization",
      description: "Transform your LinkedIn into a powerful networking and job-searching tool that attracts recruiters and opportunities.",
      features: ["Compelling headline", "Optimized summary", "Skills optimization", "Network strategy"],
      price: "Starting at ₹79"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-purple-600" />,
      title: "Mock Interview Sessions",
      description: "Practice with industry experts and AI-powered feedback to master your interview skills and boost confidence.",
      features: ["1-on-1 sessions", "Industry-specific prep", "Detailed feedback", "Follow-up coaching"],
      price: "Starting at ₹749"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive career solutions designed to accelerate your job search and maximize your success rate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <ArrowRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 mb-4">
                    {service.price}
                  </div>
                  <Button 
                    className={`w-full ${service.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-800 hover:bg-gray-900'
                    } text-white rounded-full transition-all duration-300`}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Need a custom package? We've got you covered.</p>
          <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full">
            Contact for Custom Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
