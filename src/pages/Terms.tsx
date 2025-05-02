
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Terms = () => {
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
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              Last Updated: May 1, 2025
            </p>
            
            <p>
              Welcome to Notedly! These Terms of Service ("Terms") govern your access to and use of the Notedly platform, website, and services. By using Notedly, you agree to these Terms. If you do not agree to these Terms, please do not use our platform.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            
            <p>
              By accessing or using Notedly, you agree to be bound by these Terms and our Privacy Policy. If you are using Notedly on behalf of an organization, you are agreeing to these Terms on behalf of that organization.
            </p>
            
            <h2>2. Description of Service</h2>
            
            <p>
              Notedly is an AI-powered educational platform that helps users study more effectively by providing tools to interact with uploaded study materials, including:
            </p>
            <ul>
              <li>Document upload and processing</li>
              <li>AI-powered question answering</li>
              <li>Text summarization</li>
              <li>Text-to-speech conversion</li>
              <li>Automatic flashcard generation</li>
            </ul>
            
            <h2>3. User Accounts</h2>
            
            <p>
              To access certain features of Notedly, you may need to create an account. When you create an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h2>4. User Content</h2>
            
            <p>
              You retain ownership of any content you upload to Notedly ("User Content"). By uploading User Content, you grant Notedly a non-exclusive, worldwide, royalty-free license to use, process, and analyze your User Content solely for the purpose of providing and improving our services to you.
            </p>
            
            <p>
              You represent and warrant that:
            </p>
            <ul>
              <li>You own or have the necessary rights to your User Content</li>
              <li>Your User Content does not violate the rights of any third party</li>
              <li>Your User Content does not violate any applicable laws</li>
            </ul>
            
            <h2>5. Prohibited Conduct</h2>
            
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use Notedly for any illegal purpose or in violation of any laws</li>
              <li>Upload content that infringes on intellectual property rights</li>
              <li>Attempt to gain unauthorized access to Notedly's systems</li>
              <li>Use Notedly to distribute malware or other harmful code</li>
              <li>Interfere with the proper functioning of Notedly</li>
              <li>Engage in any automated use of Notedly without our permission</li>
            </ul>
            
            <h2>6. Subscription and Billing</h2>
            
            <p>
              Notedly offers both free and paid subscription plans. By subscribing to a paid plan, you agree to pay the applicable fees as specified on our website. We may change our fees at any time, but will provide advance notice of any changes.
            </p>
            
            <h2>7. Termination</h2>
            
            <p>
              We reserve the right to suspend or terminate your access to Notedly at any time, with or without cause, and with or without notice. Upon termination, your right to use Notedly will immediately cease.
            </p>
            
            <h2>8. Disclaimer of Warranties</h2>
            
            <p>
              NOTEDLY IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            
            <h2>9. Limitation of Liability</h2>
            
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL NOTEDLY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF NOTEDLY.
            </p>
            
            <h2>10. Changes to Terms</h2>
            
            <p>
              We may modify these Terms at any time. If we make material changes, we will provide notice through our website or by other means. Your continued use of Notedly after the changes take effect constitutes your acceptance of the revised Terms.
            </p>
            
            <h2>11. Contact Information</h2>
            
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <p>
              Email: legal@notedly.com<br />
              Address: 123 Innovation Way, Tech City, CA 94043
            </p>
            
            <p>
              For more information about how we handle your data, please see our <Link to="/privacy" className="text-notedly-purple hover:text-notedly-light-purple dark:text-notedly-light-purple">Privacy Policy</Link> and <Link to="/cookies" className="text-notedly-purple hover:text-notedly-light-purple dark:text-notedly-light-purple">Cookie Policy</Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
