<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"> 
</head>
<body>

  <h1>JobBoard - MERN Stack Job Posting Platform</h1>
  <p>A full-stack job posting platform that allows users to <strong>post</strong>, <strong>search</strong>, and <strong>filter</strong> job listings based on category and keywords. Built with <strong>React (Vite)</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</p>

  <h2>Features</h2>
  <ul>
    <li>Post a new job listing</li>
    <li>Search jobs by title or company name</li>
    <li>Filter jobs by category (Design, Development, Marketing)</li>
    <li>Fast and responsive UI with Tailwind CSS</li>
    <li>RESTful APIs with Express and MongoDB</li>
    <li>Works locally on <code>localhost</code></li>
  </ul>

  <h2>Tech Stack</h2>
  <h3>Frontend</h3>
  <ul>
    <li>React (with Vite)</li>
    <li>Tailwind CSS</li>
    <li>Axios</li>
    <li>React Router DOM</li>
  </ul>
  <h3>Backend</h3>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB (Mongoose)</li>
    <li>CORS</li>
  </ul>

  <h2>Project Structure</h2>
  <pre>
job-board/
├── client/               # Frontend React App
│   ├── components/       # Reusable UI components (Header, Footer, JobCard)
│   ├── pages/            # Pages (Home, PostJob, Contact)
│   ├── App.jsx           # Main App Component
│   ├── main.jsx          # Vite entry point
│   ├── index.css         # Global styles
│   └── tailwind.config.js# Tailwind configuration
│
├── server/               # Backend Express API
│   ├── models/           # Mongoose schema for Job
│   ├── controllers/      # Business logic for jobs
│   ├── routes/           # Job routes
│   ├── server.js         # Entry point
│   └── .env              # Environment variables
│
└── README.md             # Project documentation
  </pre>

  <h2>Local Setup Instructions</h2>
  <h3>Requirements</h3>
  <ul>
    <li>Node.js and npm</li>
    <li>MongoDB (local or Atlas)</li>
  </ul>

  <h3>Backend Setup</h3>
  <ol>
    <li>Navigate to the <code>server/</code> directory:</li>
    <pre><code>cd Server</code></pre>

    Install dependencies:
    npm install

    Create a .env  file in server
    
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobboard
    </code></pre>

    Start the backend server:
    npm start
  </ol>
  <p><strong>Backend will run on:</strong> <code>http://localhost:5000</code></p>

  <h3>Frontend Setup</h3>
  <ol>
    <li>Navigate to the <code>client/</code> directory:</li>
    <pre><code>cd Client</code></pre>
 <pre><code>cd vite-project</code></pre>
    Install dependencies:
    npm install

    Ensure Tailwind CSS is configured (already set up)
    
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
    </code></pre>

    Start the frontend server:
    npm run dev
  </ol>
  <p><strong>Frontend will run on:</strong> <code>http://localhost:5173</code></p>

  <h2>API Endpoints</h2>
  <table>
    <thead>
      <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>GET</td><td><code>/jobs</code></td><td>Fetch all jobs (searchable)</td></tr>
      <tr><td>POST</td><td><code>/jobs</code></td><td>Create a new job listing</td></tr>
    </tbody>
  </table>

  <h2>Sample Job Object</h2>
  <pre><code>
{
  "title": "UI/UX Designer",
  "company": "DesignCo",
  "category": "Design",
  "location": "Remote",
  "description": "Create user-friendly designs."
}
  </code></pre>

 
  <p>GitHub: <a href="https://github.com/NithinDivakaranNair/job-board.git" target="_blank">https://github.com/NithinDivakaranNair/job-board.git</a></p>

</body>
</html>
