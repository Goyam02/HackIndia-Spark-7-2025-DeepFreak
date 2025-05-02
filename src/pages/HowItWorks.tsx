
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, MessageSquare, Brain, Volume2, BookmarkPlus } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-white" />,
      title: "Upload Your Notes",
      description: "Start by uploading your study materials. We support PDF, Word, and plain text formats. Our AI will process and analyze your content within seconds.",
      iconBg: "bg-notedly-blue",
    },
    {
      icon: <Brain className="h-12 w-12 text-white" />,
      title: "AI Processing",
      description: "Our advanced AI reads and understands your documents, creating a knowledge base that powers all Notedly features. This happens securely without storing your content.",
      iconBg: "bg-notedly-purple",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-white" />,
      title: "Ask Questions",
      description: "Have a conversation with your notes through our interactive chat interface. Ask specific questions and get precise answers drawn directly from your materials.",
      iconBg: "bg-notedly-green",
    },
    {
      icon: <Volume2 className="h-12 w-12 text-white" />,
      title: "Listen to Audio",
      description: "Convert any text or AI-generated responses to speech. Perfect for auditory learners or studying on the go with adjustable playback speeds.",
      iconBg: "bg-notedly-pink",
    },
    {
      icon: <BookmarkPlus className="h-12 w-12 text-white" />,
      title: "Create Flashcards",
      description: "Generate study flashcards automatically from your notes. Test your knowledge and retention with interactive card flipping and spaced repetition.",
      iconBg: "bg-notedly-blue",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-notedly-purple to-notedly-blue bg-clip-text text-transparent dark:from-white dark:to-notedly-light-purple"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              How Notedly Works
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              From your notes to personalized learning in seconds. Here's the simple process that makes studying smarter with Notedly.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Timeline Steps */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
              
              {/* Timeline Items */}
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className={`relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-full ${step.iconBg} flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 text-sm font-medium px-2 rounded-full">
                      Step {index + 1}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className={`md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  }`}>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Video Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              See Notedly in Action
            </motion.h2>
            
            <motion.div
              className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden mb-8 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-gray-500 dark:text-gray-400 text-lg">
                Video demonstration coming soon
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-notedly-purple hover:bg-notedly-light-purple text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/hub">Try It Yourself</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
