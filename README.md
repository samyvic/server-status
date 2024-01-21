# XOrithm Server Status | Web Application

A a web-based server status dashboard that displays the real-time status of multiple servers, along with authentication for authorized access.

## Live Preview
The application is deployed on vercel platform, you can check out  [Live Preview](https://server-status-five.vercel.app)

## Demo
You can watch a demo video through [demo]()

## App Usage
`npm install`
`npm run dev`

### App Features
1. User can register, log in, log out (authentication with email & password)
2. Dashboard Page includes:
  - List of servers with their current status (online or offline)
  - Color coded indicators for the server statues through the past 60 days
  - Detailed server information on clicking on each server

### Technology Stack 
<Strong>Frontend</Strong>
Approach 1: (Angualr)
pros: Angular is highly scalable and suitable for building large-scale applications with complex features.
cons: Has a steeper learning curve than other fronend frameworks
Approach 2: (Next.js)
pros: A full-stack framework based on React, which follows a component-based architecture.
cons: Complexity for simple projects
My Choice: I am more familiar with react than angular. So, I choose (Next.js)

<Strong>Styling</Strong>
Approach 1: (Bootstrap)
pros: Comes with extensive component library
cons: Less flexible, relies on pre-made components
Approach 2: (Tailwind)
pros: Highly customizable with composable utilities
cons: Steeper learning curve due to new utility-first paradigm.
My Choice: I prefer using tailwind to customize the components myself.

<Strong>Authentication</Strong>
Approach 1: (Database like: prisma)
pros: Data consistancy and full control over user data, authentication logic, permissions, and access management.
cons: Implementing custom authentication logic is more time-consuming compared to using pre-built authentication services.
Approach 2: (Firebase)
pros: Provides simple integration into the application and designed to scale easily 
cons: User authentication data is stored separately from your application data
Approach 3: (Local Storage)
pros: Local storage is easy to implement, especially for small-scale applications
cons: Storing authentication tokens in local storage poses security risks, especially in the case of cross-site scripting (XSS) attacks. 
My Choice: I prefer using firebase authentication because it is easier than the first approach and secured than local storage.
Updates: I changed authentication to local storage (due to facing errors, and to finish the assignment within the due date)

<Strong>Data Fetching</<Strong>
Approach 1: (Mockup API)
pros: APIs provide real-time or near-real-time data updates, ensuring that your application stays current with the latest information.
cons: Depending on external service and frequent API calls may introduce latency especially in scenarios with slow network connections.
Approach 2: (Static Data)
pros: Static data is served quickly as it is already preloaded, users can access application offline.
My Choice: I searched for fake apis for servers status but in vain. So, I choosed static data approach.

<Strong>Real Time Updates</<Strong>
Ensuring that the dashboard reflects real-time server status could be achieved by some options like polling technique and web sockets, but as I choosed static data approach, no need for these techniques.
However, in order to have the effect of real-time, I have applied a rondom function some of the servers data like response time and up time.

## Wireframe

## Code Documentation
<strong>Folder Structure</strong>
- The App folder includes 4 pages components (Welcome Page, Register Page, Login Page, Dashboard Page)
- The App folder includes a global css file
- The Src folder includes a separate components folder used in pages (button, navbar, record, serverDetails ...etc.)

<strong>Welcome Page Content</strong>
- A hero section which is the (Welcome Component)
- Two (Link Components, imported from "next/link" module) to allow user to choose whether to register or login

<strong>Register Page Content</strong>
- A hero section (Welcome Component)
- A Registeration form 
- A button redirect to login page on successful registration
  
<strong>Login Page Content</strong>
- A hero section (Welcome Component)
- A Login form 
- A button redirect to dashboard page on successful login

<strong>Dashboard Page Content</strong>
- A (Navbar Component) includes a logout (Link Component) redirecting to the login page
- A (Server Component) that maps on the servers array
- Inside Server Component, below it name, a (Record Component) represents the history of each server status per last 60 days
- A show details button that show a (ServerDetails Component) 

## Conclusion
The Assignment duration was 3 days
Day 1: 
- Understanding the problem statement
- Doing search about some topics in the assignment 
- Gathering information and searching for servers status api
- Writting the user stories and setting the System Outline
Day 2:
- Making the system design
- Drawing a wireframe to the application
- Make a breakdown structure of the ui components 
- Starting implementing the pages user interface
Day 3:
- Adding functionality to pages 
- Deploying the application 
- Writting the documentation
  
<strong>To Do in the next sprint</strong>
- Refactoring Code
- Modifying pages to be responsive
- Putting more restrictions and data validation on registration and login forms
- Preventing returning back to the login form after logging-In to the dashboard
- Preventing returning back to the dashboard page after logging out (returning should be via logging-In again)
- Trying again with OAuth to enable user to LogIn with social media accounts
- Allow users to report issues in a "comment" components
- Testing the application functions

<strong>Proposed More Features</strong>
- Providing the application with charts of the system metrics to facilitace analyzing the performance
- Set up a notification system to alert admins in case of critical server issues or status changes


