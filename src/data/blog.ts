export const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Data Structures & Algorithms Roadmap",
    summary: "A step-by-step guide to mastering DSA for technical interviews and competitive programming.",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    tags: ["DSA", "Algorithms", "Career"],
    content: `
      <h2>1. The Foundation</h2>
      <p>Before jumping into complex trees and graphs, you must build a solid foundation with basic data structures. Understanding memory allocation and time complexity (Big O Notation) is crucial.</p>
      <ul>
        <li><strong>Arrays & Strings:</strong> Two pointers, sliding window, prefix sum.</li>
        <li><strong>Linked Lists:</strong> Singly, doubly, fast/slow pointer techniques.</li>
        <li><strong>Stacks & Queues:</strong> LIFO/FIFO principles, monotonic stack.</li>
      </ul>
      
      <h2>2. Searching & Sorting</h2>
      <p>Mastering these fundamental algorithms will make solving complex problems significantly easier.</p>
      <ul>
        <li><strong>Binary Search:</strong> Finding elements in sorted arrays, checking conditions.</li>
        <li><strong>Sorting:</strong> Quick sort, merge sort, counting sort.</li>
      </ul>

      <h2>3. Advanced Data Structures</h2>
      <p>Once the basics are solid, move on to hierarchical and non-linear data structures.</p>
      <ul>
        <li><strong>Trees:</strong> Binary Trees, BSTs, Traversals (Inorder, Preorder, Postorder).</li>
        <li><strong>Heaps / Priority Queues:</strong> Min-heap, max-heap, Top K problems.</li>
        <li><strong>Graphs:</strong> BFS, DFS, Topological Sort, Dijkstra's Algorithm.</li>
      </ul>

      <h2>4. Dynamic Programming & Advanced Algorithms</h2>
      <p>The final boss of technical interviews. Focus on recognizing overlapping subproblems and optimal substructure.</p>
      <ul>
        <li><strong>Dynamic Programming:</strong> Memoization (Top-down), Tabulation (Bottom-up), Knapsack, LCS.</li>
        <li><strong>Greedy Algorithms:</strong> Activity selection, Huffman coding.</li>
        <li><strong>Tries & Segment Trees:</strong> Advanced string matching, range queries.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "The Complete Web Development Journey",
    summary: "From absolute beginner to Full Stack Engineer: A comprehensive roadmap to modern web development.",
    date: "Feb 20, 2026",
    readTime: "10 min read",
    tags: ["Web Dev", "Roadmap", "Full Stack"],
    content: `
      <h2>1. The Fundamentals (Frontend Basics)</h2>
      <p>Every web developer must start here. These are the building blocks of the web.</p>
      <ul>
        <li><strong>HTML5:</strong> Semantic tags, forms, accessibility (a11y), SEO basics.</li>
        <li><strong>CSS3:</strong> Box model, Flexbox, Grid, Responsive Design (Media Queries), Animations.</li>
        <li><strong>JavaScript (ES6+):</strong> Variables, functions, DOM manipulation, Promises/Async-Await, fetch API.</li>
      </ul>

      <h2>2. Frontend Frameworks</h2>
      <p>Vanilla JS is great, but modern development requires powerful frontend libraries to build complex SPAs (Single Page Applications).</p>
      <ul>
        <li><strong>React.js:</strong> Components, JSX, Hooks (useState, useEffect), State Management (Redux/Zustand), React Router.</li>
        <li><strong>CSS Frameworks:</strong> Tailwind CSS, Shadcn UI, Framer Motion for animations.</li>
        <li><strong>TypeScript:</strong> Adding static typing to JavaScript to build robust, bug-free applications.</li>
      </ul>

      <h2>3. Backend Development</h2>
      <p>Learn how to process data, handle authentication, and communicate with the frontend.</p>
      <ul>
        <li><strong>Node.js & Express:</strong> Creating RESTful APIs, middleware, routing.</li>
        <li><strong>Python (Django/FastAPI):</strong> Excellent alternatives for building scalable backends, especially for data-heavy applications.</li>
        <li><strong>API Design:</strong> REST vs GraphQL, Postman for testing.</li>
      </ul>

      <h2>4. Databases</h2>
      <p>Where does the data live? You need to understand both relational and non-relational paradigms.</p>
      <ul>
        <li><strong>SQL (Relational):</strong> PostgreSQL, MySQL. Understand JOINS, indexing, normalization.</li>
        <li><strong>NoSQL (Non-Relational):</strong> MongoDB. Understand documents, collections, aggregations.</li>
        <li><strong>ORMs/ODMs:</strong> Prisma, Mongoose, SQLAlchemy.</li>
      </ul>

      <h2>5. DevOps & Deployment</h2>
      <p>Getting your code from your local machine to the internet so the world can see it.</p>
      <ul>
        <li><strong>Version Control:</strong> Git & GitHub. Branching, merging, pull requests.</li>
        <li><strong>Hosting:</strong> Vercel/Netlify for frontend, Render/Railway for backend.</li>
        <li><strong>Cloud Providers:</strong> AWS Basics (EC2, S3), Docker containerization.</li>
      </ul>
    `
  }
];
