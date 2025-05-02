
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Privacy = () => {
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              Last Updated: May 1, 2025
            </p>
            
            <p>
              At Notedly, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
            
            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Register for an account</li>
              <li>Sign up for our newsletter</li>
              <li>Contact our support team</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            
            <p>
              This information may include your name, email address, and other contact details.
            </p>
            
            <h3>User Content</h3>
            <p>
              When you upload documents or notes to our platform, we process this content to provide our services. Your uploaded content is:
            </p>
            <ul>
              <li>Processed securely using encryption</li>
              <li>Used only to provide the requested services</li>
              <li>Never shared with third parties without your explicit permission</li>
            </ul>
            
            <h3>Usage Information</h3>
            <p>
              We automatically collect certain information about your device and how you interact with our platform, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages viewed and time spent</li>
              <li>Referring websites</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            
            <p>We may use the information we collect for various purposes, including to:</p>
            
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative messages, updates, and security alerts</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Protect against fraudulent, unauthorized, or illegal activity</li>
            </ul>
            
            <h2>Data Security</h2>
            
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
            
            <h2>Your Privacy Rights</h2>
            
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to our processing of your information</li>
              <li>Data portability</li>
            </ul>
            
            <p>
              To exercise these rights, please contact us at privacy@notedly.com.
            </p>
            
            <h2>Updates to this Policy</h2>
            
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and will be effective as soon as it is accessible.
            </p>
            
            <h2>Contact Us</h2>
            
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            
            <p>
              Email: privacy@notedly.com<br />
              Address: 123 Innovation Way, Tech City, CA 94043
            </p>
            
            <p>
              For more information about our data practices, please see our <Link to="/terms" className="text-notedly-purple hover:text-notedly-light-purple dark:text-notedly-light-purple">Terms of Service</Link> and <Link to="/cookies" className="text-notedly-purple hover:text-notedly-light-purple dark:text-notedly-light-purple">Cookie Policy</Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
