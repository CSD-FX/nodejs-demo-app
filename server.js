const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Set up EJS templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Data for pages
const pageData = {
  home: {
    title: "Elevate Labs: Where Ideas Take Flight",
    header: "Elevate Labs",
    intro: "Welcome to Elevate Labs, a place where innovation and impact come together. We create seamless, scalable solutions that empower businesses to thrive in the digital age. A key strength is their client-centric approach, which ensures that every solution is tailored to the client's unique vision and goals. They are also committed to fostering a new generation of talent through their valuable internship programs.",
    sections: [
      {
        heading: "Expertise Across Domains",
        content: "From data analytics to design, development, and marketing, Elevate Labs has mastered the skills that drive business growth.",
      },
      {
        heading: "Real-World Impact",
        content: "Elevate Labs doesn't just deliver projects—they create success stories by turning complex challenges into actionable, impactful solutions.",
      },
      {
        heading: "A Commitment to Mentorship",
        content: "Elevate Labs has mentored hundreds of interns, providing them with real-world exposure and hands-on experience on impactful projects. This is a testament to their dedication to nurturing the next generation of tech professionals."
      }
    ]
  },
  contact: {
    title: "Contact Us",
    header: "Get in Touch",
    formIntro: "We would love to hear from you! Please fill out the form below.",
    email: "devops16008121@gmail.com",
    phone: "+91 7975958224",
    address: "Bangalore, Karnataka"
  }
};

// Routes
app.get('/', (req, res) => {
  res.render('index', pageData.home);
});

app.get('/contact', (req, res) => {
  res.render('contact', pageData.contact);
});

// Start server on all interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

