# XOrithm Server Status | Web Application

A a web-based server status dashboard that displays the real-time status of multiple servers, along with authentication for authorized access.

## Live Preview
The application is deployed on vercel platform, you can check out  [Live Preview](https://server-status-five.vercel.app)

## Demo
You can watch a demo video through [demo]()

## App Usage
`npm install`
`npm run dev`

## App Features

1. User can register, log in, log out (authentication with email & password)
2. Dashboard Page includes:
  - List of servers with their current status (online or offline)
  - Color coded indicators for the server statues through the past 60 days
  - Detailed server information on clicking on each server

## Technology Stack 
<Strong>Frontend</Strong>
<p><strong>Approach 1: (Angualr)</strong></p>
<li>pros: Angular is highly scalable and suitable for building large-scale applications with complex features.</li>
<li>cons: Has a steeper learning curve than other fronend frameworks</li>
<p><strong>Approach 2: (Next.js)</strong></p>
<li>pros: A full-stack framework based on React, which follows a component-based architecture.</li>
<li>cons: Complexity for simple projects</li>
<p>My Choice: I am more familiar with react than angular. So, I choose (Next.js)</p>

<Strong>Styling</Strong>
<p><strong>Approach 1: (Bootstrap)</strong>
<li>pros: Comes with extensive component library</li>
<li>cons: Less flexible, relies on pre-made components</li>
<p><strong>Approach 2: (Tailwind)</strong></p>
<li>pros: Highly customizable with composable utilities</li>
<li>cons: Steeper learning curve due to new utility-first paradigm.</li>
<p>My Choice: I prefer using tailwind to customize the components myself.

<Strong>Authentication</Strong>
<p><strong>Approach 1: (Database like: prisma)</strong></p>
<li>pros: Data consistancy and full control over user data, authentication logic, permissions, and access management.</li>
<li>cons: Implementing custom authentication logic is more time-consuming compared to using pre-built authentication services.</li>
<p><strong>Approach 2: (Firebase)</strong></p>
<li>pros: Provides simple integration into the application and designed to scale easily</li>
<li>cons: User authentication data is stored separately from your application data</li>
<p><strong>Approach 3: (Local Storage)</strong></p>
<li>pros: Local storage is easy to implement, especially for small-scale applications</li>
<li>cons: Storing authentication tokens in local storage poses security risks, especially in the case of cross-site scripting (XSS) attacks.</li>
<p>My Choice: I prefer using firebase authentication because it is easier than the first approach and secured than local storage.</p>
<p>Updates: I changed authentication to local storage (due to facing errors, and to finish the assignment within the due date)</p>

<Strong>Data Fetching</Strong>
<p><strong>Approach 1: (Mockup API)</strong></p>
<li>pros: APIs provide real-time or near-real-time data updates, ensuring that your application stays current with the latest information.</li>
<li>cons: Depending on external service and frequent API calls may introduce latency especially in scenarios with slow network connections.</li>
<p><strong>Approach 2: (Static Data)</strong></p>
<li>pros: Static data is served quickly as it is already preloaded, users can access application offline.</li>
<p>My Choice: I searched for fake apis for servers status but in vain. So, I choosed static data approach.</p>

<Strong>Real Time Updates</<Strong>
<p>Ensuring that the dashboard reflects real-time server status could be achieved by some options like polling technique and web sockets, but as I choosed static data approach, no need for these techniques.
<p>However, in order to have the effect of real-time, I have applied a rondom function some of the servers data like response time and up time.

## Wireframe

## Code Documentation
<strong>Folder Structure</strong>
<li>The App folder includes 4 pages components (Welcome Page, Register Page, Login Page, Dashboard Page)
<li>The App folder includes a global css file
<li>The Src folder includes a separate components folder used in pages (button, navbar, record, serverDetails ...etc.)

<strong>Welcome Page Content</strong>
<li>A hero section which is the (Welcome Component)
<li>Two (Link Components, imported from "next/link" module) to allow user to choose whether to register or login

<strong>Register Page Content</strong>
<li>A hero section (Welcome Component)
<li>A Registeration form 
<li>A button redirect to login page on successful registration
  
<strong>Login Page Content</strong>
<li>A hero section (Welcome Component)
<li>A Login form 
<li>A button redirect to dashboard page on successful login

<strong>Dashboard Page Content</strong>
<li>A (Navbar Component) includes a logout (Link Component) redirecting to the login page
<li>A (Server Component) that maps on the servers array
<li>Inside Server Component, below it name, a (Record Component) represents the history of each server status per last 60 days
<li>A show details button that show a (ServerDetails Component) 

## Conclusion
The Assignment duration was 3 days
Day 1: 
<li>Understanding the problem statement
<li>Doing search about some topics in the assignment 
<li>Gathering information and searching for servers status api
<li>Writting the user stories and setting the System Outline
Day 2:
<li>Making the system design
<li>Drawing a wireframe to the application
<li>Make a breakdown structure of the ui components 
<li>Starting implementing the pages user interface
Day 3:
<li>Adding functionality to pages 
<li>Deploying the application 
<li>Writting the documentation
  
<strong>To Do in the next sprint</strong>
<li>Refactoring Code
<li>Modifying pages to be responsive
<li>Putting more restrictions and data validation on registration and login forms
<li>Preventing returning back to the login form after logging-In to the dashboard
<li>Preventing returning back to the dashboard page after logging out (returning should be via logging-In again)
<li>Trying again with OAuth to enable user to LogIn with social media accounts
<li>Allow users to report issues in a "comment" components
<li>Testing the application functions

<strong>Proposed More Features</strong>
<li>Providing the application with charts of the system metrics to facilitace analyzing the performance
<li>Set up a notification system to alert admins in case of critical server issues or status changes


