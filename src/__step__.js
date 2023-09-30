/**
 * ---------------------------------
 *      INITIAL INSTALLATION
 * ---------------------------------
 * 1. visit console.firebase.google.com 
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add  config file in project
 * 6. DANGER: Do net publish or make firebase config to public by pushing to github
 * ---------------------------------
 *          INTEGRATION
 * ---------------------------------
 *  7. visit: Go to docs > Build > Authentication > Web > Get Started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth 
 * 10. Login.jsx: create const auth = getAuth(app)
 * ---------------------------------
 *          PROVIDER SETUP
 * ---------------------------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use handleGoogleSignIn and pass auth amd provider
 * 13. activate sign-in method (google, facebook, github, etc.)
 * 14. [vite]: 127.0.0.1 to localhost
 * ---------------------------------
 *        MORE AUTH PROVIDER
 * ---------------------------------
 * 1. active the auth provider (create app, provide redirect url, client id, client secret)
 * 2. 
 */