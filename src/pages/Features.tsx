
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, Brain, Volume2, BookmarkPlus, Search, Lock } from "lucide-react";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const features = [
    {
      icon: <FileText className="h-12 w-12 text-notedly-blue" />,
      title: "Upload Notes",
      description: "Upload your study materials in PDF, Word, or plain text format. We'll process them instantly so you can start exploring and learning right away."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-notedly-purple" />,
      title: "Ask Questions",
      description: "Have a conversation with your notes. Ask specific questions and get detailed answers drawn directly from your uploaded documents."
    },
    {
      icon: <Brain className="h-12 w-12 text-notedly-green" />,
      title: "AI Summaries",
      description: "Get concise summaries of lengthy documents, highlighting key concepts and important points to focus your study time efficiently."
    },
    {
      icon: <Volume2 className="h-12 w-12 text-notedly-pink" />,
      title: "Text-to-Speech",
      description: "Listen to your notes and AI responses. Perfect for auditory learners or studying on the go when reading isn't convenient."
    },
    {
      icon: <BookmarkPlus className="h-12 w-12 text-notedly-blue" />,
      title: "Flashcard Generator",
      description: "Transform your notes into interactive flashcards automatically. Quiz yourself to reinforce learning and prepare for exams."
    },
    {
      icon: <Search className="h-12 w-12 text-notedly-purple" />,
      title: "Smart Search",
      description: "Find exactly what you need with semantic search that understands context and meaning, not just keywords."
    },
    {
      icon: <Lock className="h-12 w-12 text-notedly-green" />,
      title: "End-to-End Privacy",
      description: "Your notes stay private and secure. We prioritize data protection with end-to-end encryption and strict privacy protocols."
    }
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
              Features That Transform Your Study Experience
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Notedly combines powerful AI capabilities with intuitive design to help you study smarter, not harder.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className="mb-4 bg-gray-50 dark:bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-notedly-purple/10 to-notedly-blue/10 dark:from-notedly-purple/20 dark:to-notedly-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready to experience these features yourself?
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-notedly-purple hover:bg-notedly-light-purple text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/hub">Try the Learning Hub</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
