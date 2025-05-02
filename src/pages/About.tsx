
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Alex is passionate about improving education through technology. With a background in AI and education, he founded Notedly to transform how students learn.",
      image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=500&auto=format&fit=crop&q=60"
    },
    {
      name: "Maya Patel",
      role: "Lead AI Researcher",
      bio: "Maya specializes in natural language processing and has developed Notedly's core AI technology that powers the question answering and summarization features.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=500&auto=format&fit=crop&q=60"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "David brings over a decade of experience in edtech. He's focused on creating an intuitive, accessible learning experience for all Notedly users.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60"
    },
    {
      name: "Sarah Johnson",
      role: "Education Specialist",
      bio: "With 15 years as an educator, Sarah ensures Notedly's features align with how people actually learn and retain information effectively.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60"
    }
  ];
  
  const valueProps = [
    {
      title: "Our Mission",
      description: "Make studying feel like a superpower, not a chore. We're building tools that amplify human learning capabilities through AI that understands context, not just keywords."
    },
    {
      title: "Our Vision",
      description: "We envision a world where every learner has access to personalized, intelligent tools that adapt to their unique learning style and needs, making education more accessible and effective for all."
    },
    {
      title: "Our Values",
      description: "We believe in putting learners first, maintaining the highest privacy standards, designing with accessibility in mind, and continuously improving based on user feedback and educational research."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 z-0" />
        
        {/* Animated circles */}
        <motion.div 
          className="absolute top-20 -right-32 w-64 h-64 bg-notedly-purple/10 rounded-full blur-3xl dark:bg-notedly-purple/20"
          animate={{ 
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-notedly-purple to-notedly-blue bg-clip-text text-transparent dark:from-white dark:to-notedly-light-purple"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              About Notedly
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              We're on a mission to transform the way people learn and study by creating AI tools that feel like an extension of your own thinking.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {prop.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.h2>
            
            <motion.div
              className="prose prose-lg max-w-none dark:prose-invert"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p>
                Notedly began with a simple observation: despite all the technological advancements in recent years, the way we study hasn't fundamentally changed. Students still struggle with information overload, inefficient note-taking, and difficulty finding exactly what they need when they need it.
              </p>
              <p>
                Our founder, Alex, experienced this firsthand while pursuing his graduate studies. Overwhelmed by reading materials and lecture notes, he found himself wishing for a smart study assistant that could help him navigate and extract insights from his growing collection of notes and textbooks.
              </p>
              <p>
                In 2023, he assembled a team of AI researchers, educators, and product designers to create what would become Notedly: a platform that uses artificial intelligence to transform static study materials into interactive learning experiences.
              </p>
              <p>
                Today, Notedly is helping thousands of students, professionals, and lifelong learners study more effectively by making their notes work harder for them. And we're just getting started.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-notedly-purple dark:text-notedly-light-purple font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-notedly-purple dark:hover:text-notedly-light-purple">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-notedly-purple dark:hover:text-notedly-light-purple">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-notedly-purple dark:hover:text-notedly-light-purple">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Join us in transforming how the world studies
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Experience the future of learning with Notedly today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                asChild
                size="lg"
                className="bg-notedly-purple hover:bg-notedly-light-purple text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/signup">Join Notedly</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 rounded-full border-notedly-purple text-notedly-purple hover:text-notedly-light-purple hover:border-notedly-light-purple dark:border-notedly-light-purple dark:text-notedly-light-purple"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
