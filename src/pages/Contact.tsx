
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "hello@notedly.com",
      link: "mailto:hello@notedly.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "(555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      value: "123 Innovation Way, Tech City, CA 94043",
      link: "https://maps.google.com/?q=123+Innovation+Way,+Tech+City,+CA+94043"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Discord",
      value: "Join our community",
      link: "https://discord.com"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-notedly-purple to-notedly-blue bg-clip-text text-transparent dark:from-white dark:to-notedly-light-purple">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-notedly-purple hover:bg-notedly-light-purple text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="mt-1 p-2 bg-notedly-purple/10 dark:bg-notedly-purple/20 rounded-full text-notedly-purple dark:text-notedly-light-purple group-hover:bg-notedly-purple group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300">{item.title}</p>
                      <p className="text-notedly-purple dark:text-notedly-light-purple">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Office Hours</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Monday - Friday: 9AM - 5PM PST</p>
                <p className="text-gray-600 dark:text-gray-400">Weekend: Closed</p>
              </div>
            </motion.div>
          </div>
          
          {/* FAQ Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  How quickly will I get a response?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We aim to respond to all inquiries within 24-48 business hours.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  Do you offer educational discounts?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! We provide special pricing for students and educational institutions. Contact us for details.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  I found a bug. Where should I report it?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You can report bugs through our contact form or by emailing support@notedly.com.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  Are you hiring?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We're always looking for talented individuals! Check our careers page or send your resume to careers@notedly.com.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
