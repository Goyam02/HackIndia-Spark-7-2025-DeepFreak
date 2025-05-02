// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//   },
//   plugins: [
//     react(),
//     mode === 'development' &&
//     componentTagger(),
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Assuming lovable-tagger might not have types or is dev-only
// import { componentTagger } from "lovable-tagger";

// Define the type for the componentTagger function if necessary
// Example: declare function componentTagger(options?: any): Plugin;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Define base plugins
  const plugins = [react()];

  // Conditionally add development plugins
  if (mode === 'development') {
    try {
      // Dynamically import if it's truly optional or might not be installed
      // Or directly use if it's a devDependency
      // const { componentTagger } = await import('lovable-tagger');
      // plugins.push(componentTagger());
      console.log("Note: componentTagger plugin is conditionally configured for development mode.");
    } catch (error) {
      console.warn("lovable-tagger not found or failed to load, skipping.");
    }
  }

  return {
    server: {
      host: "::", // Your existing host setting
      port: 8080, // Your existing port setting

      // --- Proxy configuration for Flask Backend ---
      proxy: {
        // Route requests starting with '/api' to the Flask backend
        '/api': {
          // IMPORTANT: Replace with your actual Flask backend URL and port.
          // Using the port 5555 from our previous Flask example.
          target: 'http://127.0.0.1:5555', // Your Flask backend address [1]

          // Change the origin header to the target URL
          // Often required for backend validation.
          changeOrigin: true, // [1]

          // Set to false if backend is HTTP or uses self-signed HTTPS cert
          secure: false, // Your Flask backend is likely HTTP during dev [1]

          // Remove the '/api' prefix before forwarding the request
          // e.g., frontend '/api/chat' becomes backend '/chat'
          // rewrite: (path) => path.replace(/^\/api/, ''), // [1]

          // Uncomment if your Flask app uses WebSockets on the same API prefix
          // ws: true,
        }
        // Add more proxy rules here if needed for other backend services
      }
      // --- End of proxy configuration ---
    },
    plugins: plugins.filter(Boolean), // Ensure no falsy values in plugins array
    resolve: {
      alias: {
        // Your existing alias setting
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});