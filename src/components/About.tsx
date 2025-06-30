
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, number: "10,000+", label: "Job Seekers Helped" },
    { icon: <TrendingUp className="h-8 w-8 text-green-600" />, number: "85%", label: "Success Rate" },
    { icon: <Award className="h-8 w-8 text-purple-600" />, number: "500+", label: "Partner Companies" },
    { icon: <Clock className="h-8 w-8 text-orange-600" />, number: "30%", label: "Faster Job Placement" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-semibold">
            Why Choose ONE JOB
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Revolutionizing Career Success with AI
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We combine cutting-edge artificial intelligence with human expertise to deliver 
            unparalleled job search optimization. Our platform doesn't just find jobs – 
            it transforms careers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              The ONE JOB Advantage
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">AI-Driven Insights</h4>
                  <p className="text-gray-600">Our proprietary algorithms analyze market trends, salary data, and hiring patterns to give you a competitive edge.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Personalized Strategy</h4>
                  <p className="text-gray-600">Every job search is unique. We create customized strategies based on your experience, goals, and target industry.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">End-to-End Support</h4>
                  <p className="text-gray-600">From resume optimization to interview coaching, we support you through every step of your career journey.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="mb-6 opacity-90">
              Join thousands of professionals who have successfully landed their dream jobs with ONE JOB's AI-powered platform.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Free consultation available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Money-back guarantee</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>24/7 support included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
