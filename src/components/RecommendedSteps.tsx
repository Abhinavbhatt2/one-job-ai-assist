
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Target, Mail, Users, Eye } from "lucide-react";

const RecommendedSteps = () => {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-blue-600" />,
      title: "Paste Resume & Job Description",
      description: "Upload your current resume and paste the job description you want to apply for to get started.",
      stepNumber: "Step 1"
    },
    {
      icon: <Target className="h-12 w-12 text-green-600" />,
      title: "Click See Job Fit Button",
      description: "Our AI will analyze your profile against the job requirements and provide a compatibility score.",
      stepNumber: "Step 2"
    },
    {
      icon: <Mail className="h-12 w-12 text-purple-600" />,
      title: "Generate Cover Letter (Score >6)",
      description: "If your compatibility score is above 6, proceed to generate a personalized cover letter for the position.",
      stepNumber: "Step 3"
    },
    {
      icon: <Users className="h-12 w-12 text-orange-600" />,
      title: "Generate HR Contact Details",
      description: "Get verified contact information of HR personnel and decision makers at your target company.",
      stepNumber: "Step 4"
    },
    {
      icon: <Eye className="h-12 w-12 text-red-600" />,
      title: "Verify & Send Application",
      description: "Click 'View Source' to cross-verify HR details accuracy, then email your custom generated cover letter.",
      stepNumber: "Step 5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Recommended way to use ONEJOB AI Tool
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these 5 simple steps to maximize your job search success with our AI-powered platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-2">
                  {step.stepNumber}
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 text-center">
                <Button 
                  variant="outline"
                  className="w-full border-2 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-full group-hover:border-blue-400"
                >
                  Start Step {index + 1}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to optimize your job search with AI?</p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSteps;
