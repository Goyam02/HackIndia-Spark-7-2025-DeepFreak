
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, FileText, MessageSquare, Search } from "lucide-react";

const Home = () => {
  // Animation variants
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
      icon: <FileText className="h-8 w-8 text-notedly-blue" />,
      title: "Upload Notes",
      description: "PDF, Word, or plain text - upload your study materials and start exploring them instantly."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-notedly-purple" />,
      title: "Ask Questions",
      description: "Engage with your documents through natural language questions and get detailed responses."
    },
    {
      icon: <Brain className="h-8 w-8 text-notedly-green" />,
      title: "AI Summaries",
      description: "Get concise summaries of lengthy documents to focus on what matters most."
    },
    {
      icon: <Search className="h-8 w-8 text-notedly-pink" />,
      title: "Smart Search",
      description: "Find exactly what you need with semantic search that understands meaning, not just keywords."
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 z-0" />
        
        {/* Animated circles */}
        <motion.div 
          className="absolute -top-24 -right-24 w-64 h-64 bg-notedly-purple/10 rounded-full blur-3xl dark:bg-notedly-purple/20"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-notedly-blue/10 rounded-full blur-3xl dark:bg-notedly-blue/20"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-notedly-purple to-notedly-blue bg-clip-text text-transparent dark:from-white dark:to-notedly-light-purple"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              Smarter Notes. Smarter You.
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            >
              Upload notes, ask questions, get answers. Learn in your own style.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-notedly-purple hover:bg-notedly-light-purple text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg"
              >
                <Link to="/hub">Start Studying Smarter</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 rounded-full border-notedly-purple text-notedly-purple hover:text-notedly-light-purple hover:border-notedly-light-purple dark:border-notedly-light-purple dark:text-notedly-light-purple font-medium text-lg"
              >
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Transform How You Study
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Notedly gives you superpowers to learn faster, remember longer, and understand deeper.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700 glass-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-50 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-notedly-purple/10 to-notedly-blue/10 dark:from-notedly-purple/20 dark:to-notedly-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to revolutionize your study routine?
            </motion.h2>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of students who are learning smarter, not harder.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Button 
                asChild
                className="bg-notedly-purple hover:bg-notedly-light-purple text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg"
              >
                <Link to="/login">Get Started For Free</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
