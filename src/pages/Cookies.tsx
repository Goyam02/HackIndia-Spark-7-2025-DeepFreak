
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Cookies = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              Last Updated: May 1, 2025
            </p>
            
            <p>
              This Cookie Policy explains how Notedly uses cookies and similar technologies to recognize and remember you when you use our platform. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2>What Are Cookies?</h2>
            
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
            
            <p>
              Cookies allow a website to recognize your device and remember information about your visit, such as your preferred language and other settings. This can make your next visit easier and the site more useful to you.
            </p>
            
            <h2>Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>
            
            <h3>Preference Cookies</h3>
            <p>
              These cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language or the region you are in.
            </p>
            
            <h3>Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website's functionality.
            </p>
            
            <h3>Functionality Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.
            </p>
            
            <h3>Targeting/Advertising Cookies</h3>
            <p>
              These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
            </p>
            
            <h2>How We Use Cookies</h2>
            
            <p>
              We use cookies for several purposes, including:
            </p>
            <ul>
              <li>Authentication: To identify you when you log in and maintain your login session</li>
              <li>Security: To protect your account and data from unauthorized access</li>
              <li>Preferences: To store your settings and preferences</li>
              <li>Analytics: To understand how visitors use our website</li>
              <li>Performance: To ensure the website performs efficiently</li>
            </ul>
            
            <h2>Your Cookie Choices</h2>
            
            <p>
              Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "options" or "preferences" menu of your browser. You can:
            </p>
            <ul>
              <li>Delete all cookies from your browser</li>
              <li>Block all cookies by activating the setting on your browser</li>
              <li>Block specific cookies from particular sites</li>
              <li>Block third-party cookies</li>
            </ul>
            
            <p>
              Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly.
            </p>
            
            <div className="not-prose bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Manage Your Cookie Preferences
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You can customize your cookie preferences for this website below.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Essential Cookies</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Always Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Analytics Cookies</span>
                  <input type="checkbox" checked className="h-5 w-5 rounded border-gray-300" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Preference Cookies</span>
                  <input type="checkbox" checked className="h-5 w-5 rounded border-gray-300" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Marketing Cookies</span>
                  <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-notedly-purple hover:bg-notedly-light-purple text-white">
                  Save Preferences
                </Button>
                <Button variant="outline">
                  Accept All
                </Button>
              </div>
            </div>
            
            <h2>Updates to This Policy</h2>
            
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay informed about our use of cookies.
            </p>
            
            <h2>Contact Us</h2>
            
            <p>
              If you have any questions about our use of cookies, please contact us at:
            </p>
            
            <p>
              Email: privacy@notedly.com<br />
              Address: 123 Innovation Way, Tech City, CA 94043
            </p>
            
            <p>
              For more information about our data practices, please see our <Link to="/privacy" className="text-notedly-purple hover:text-notedly-light-purple dark:text-notedly-light-purple">Privacy Policy</Link> and <Link to="/terms" className="text-notedly-purple hover:text-notedly-light-purple dark:text-notedly-light-purple">Terms of Service</Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
