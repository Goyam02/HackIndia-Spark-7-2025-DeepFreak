
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold text-notedly-purple dark:text-notedly-light-purple">
              Notedly
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Your smarter study companion. Transform the way you learn with AI-powered notes.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/hub" className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple">
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Twitter
              </motion.a>
              <motion.a
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Discord
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Notedly. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple text-sm">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple text-sm">
              Privacy
            </Link>
            <Link to="/cookies" className="text-gray-600 hover:text-notedly-purple dark:text-gray-400 dark:hover:text-notedly-light-purple text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
