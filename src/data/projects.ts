export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  // Main Featured Projects
  {
    title: "Entertainment App",
    description: "Responsive web app for watching trailers and browsing 100,000+ entries with authentication and RESTful API.",
    technologies: ["React", "Tailwind CSS", "Redux Toolkit", "MongoDB", "Express"],
    liveUrl: "https://entertainment-app-sandy.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/entertainment-app.git",
    category: "Full Stack",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Entertainment-App.jpg"
  },
  {
    title: "Crypto Dashboard",
    description: "React app visualizing 100+ cryptocurrencies with real-time prices and 300+ days of history using React charts.",
    technologies: ["React", "Tailwind CSS", "React Charts", "Redux Toolkit"],
    liveUrl: "https://crypto-dashboard-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/crypto-dashboard.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Crypto-Dashboard.jpg"
  },
  {
    title: "Book My Show",
    description: "Movie ticket booking website with REST API. Built from scratch including design, API, frontend, and backend.",
    technologies: ["React", "CSS", "Express", "MongoDB", "Mongoose"],
    liveUrl: "https://book-my-show-nine-psi.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/bookMyShow.git",
    category: "Full Stack",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Book-My-Show.jpg"
  },
  {
    title: "Wild Oasis",
    description: "Internal hotel management app with React, managing 14+ cabins using Supabase for backend and authentication.",
    technologies: ["React", "Styled Components", "React Query", "Supabase"],
    liveUrl: "https://react-wild-oasis-omega.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-wild-Oasis.git",
    category: "Full Stack",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Wild-Oasis.png"
  },
  {
    title: "Wild Oasis Customer",
    description: "SEO-optimized Next.js full-stack customer site for cabin bookings with RSC architecture, Supabase, and OAuth-based login/signup.",
    technologies: ["Next.js", "Styled Components", "Supabase"],
    liveUrl: "https://nextjs-wild-oasis-website.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Nextjs-wildOasis-website.git",
    category: "Full Stack",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Wild-Oasis-Customer.jpg"
  },
  {
    title: "NPM Package",
    description: "Published package featuring 7 essential React hooks for data fetching, form handling, and performance optimization.",
    technologies: ["React", "TypeScript", "NPM"],
    liveUrl: "https://www.npmjs.com/package/react-hooks-fundamental",
    githubUrl: "https://github.com/Sharatdevadiga/React-fundamental-hooks.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Npm-Package.png"
  },
  {
    title: "Natours",
    description: "Tour booking website with authentication, login/signup, and Stripe payment gateway integration.",
    technologies: ["JavaScript", "Express", "MongoDB", "Mongoose", "Pug"],
    liveUrl: "https://natours-u57k.onrender.com/",
    githubUrl: "https://github.com/Sharatdevadiga/natours.git",
    category: "Node.js",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Natours.jpg"
  },
  {
    title: "Forkify",
    description: "Recipe search web app with bookmarking facility. Built using MVC architecture and modern JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://forkefy-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Forkefy-javascript.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Forkefy.jpg"
  },
  {
    title: "Corso",
    description: "Bootstrap website for training courses with mixed design and modern look.",
    technologies: ["HTML", "SASS", "JavaScript", "Bootstrap"],
    liveUrl: "https://corso-website-mu.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Bootstrap-corso-website.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Corso.png"
  },
  {
    title: "Pokemon Search",
    description: "Pokemon search web app built completely from scratch including design and development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://pokemon-search-app-sharath.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Pokemon-search-app.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Pokemon-Search.jpg"
  },
  {
    title: "Pizza Ordering App",
    description: "Pizza ordering web app with cart functionality and order management system.",
    technologies: ["React", "CSS"],
    liveUrl: "https://react-pizza-ordering-app.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-Pizza-Menu.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/mainProjectImages/Pizza-Ordering.jpg"
  },
  
  // Additional Projects (Show More)
  {
    title: "Bankist Landing Page",
    description: "Modern banking website landing page with smooth animations and interactive features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://bankist-marketing-page-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Bankist-Landing-page.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Bankist-Landing-page.jpg"
  },
  {
    title: "Blog Mastery",
    description: "Landing page for an eBook website with modern Bootstrap design and responsive layout.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://ebook-website-five-nu.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/ebook-website.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Blog-Mastery.jpg"
  },
  {
    title: "Mapty",
    description: "Workout tracking app with interactive maps powered by Leaflet library.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://mapety-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Mapty.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Mapty.jpg"
  },
  {
    title: "World-Wise",
    description: "Location bookmarking app with Leaflet maps and Local Storage API integration.",
    technologies: ["React", "CSS", "Leaflet"],
    liveUrl: "https://weather-app-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/react-WorldWise.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/World-wise.jpg"
  },
  {
    title: "Velocity Bikes",
    description: "Modern landing page for a fictional bicycle company with clean design.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://velocity-bikes-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/HTML-and-CSS-projects.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Velocity-Bikes.jpg"
  },
  {
    title: "Omnifood",
    description: "Food delivery company landing page with modern design and smooth animations.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://omnifood-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/HTML-and-CSS-projects.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Omnifood.jpg"
  },
  {
    title: "Atomic Blog",
    description: "Blog website built with React featuring post management and search functionality.",
    technologies: ["React", "CSS"],
    liveUrl: "https://react-atomic-blog-zeta.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-Atomic-blog.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Atomic-blog.png"
  },
  {
    title: "Weather App",
    description: "Weather checking app with city search functionality using weather API.",
    technologies: ["React", "CSS"],
    liveUrl: "https://react-weather-app-beta-nine.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-weather-app.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Weather-app.png"
  },
  {
    title: "Use-Popcorn",
    description: "Movie search website powered by TMDB API with rating and watchlist features.",
    technologies: ["React", "CSS"],
    liveUrl: "https://react-use-popcorn-inky.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-usePopcorn.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/UsePopcorn.png"
  },
  {
    title: "Pizza Menu",
    description: "Simple pizza menu website showcasing React basics with component structure.",
    technologies: ["React", "CSS"],
    liveUrl: "https://pizza-menu-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-Pizza-Menu.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Pizza-menu.jpg"
  },
  {
    title: "Dice Game",
    description: "Interactive dice game with score tracking and game state management.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://dice-game-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Dice-game.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Dice-game.jpg"
  },
  {
    title: "Eat and Split",
    description: "Bill splitting app for friends with expense calculation and payment tracking.",
    technologies: ["React", "CSS"],
    liveUrl: "https://react-eat-n-split-jet.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-Eat-N-Split.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Eat-and-split.png"
  },
  {
    title: "Cash Register Manager",
    description: "Cash register management tool for calculating change and denominations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://cash-register-sdev.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Javascript-projects.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/CashRegister.png"
  },
  {
    title: "Tip Calculator",
    description: "Simple tip calculator with percentage options and bill splitting functionality.",
    technologies: ["React", "CSS"],
    liveUrl: "https://react-tip-calculator-indol.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-tip-calculator.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Tip-calculator.jpg"
  },
  {
    title: "Far Away",
    description: "Travel checklist app with item management and packing progress tracking.",
    technologies: ["React", "CSS"],
    liveUrl: "https://react-far-away.vercel.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-far-away.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Far-away.png"
  },
  {
    title: "Date Counter",
    description: "Date calculation tool for finding days between dates with step controls.",
    technologies: ["React", "CSS"],
    liveUrl: "https://date-counter-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-date-counter.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Date-Counter.png"
  },
  {
    title: "Advice Generator",
    description: "Random advice generator with API integration and modern UI design.",
    technologies: ["React", "CSS"],
    liveUrl: "https://advice-generator-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/React-Random-Advice-Generator.git",
    category: "React",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Advice-generator.png"
  },
  {
    title: "Guess My Number",
    description: "Number guessing game with high score tracking and interactive gameplay.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://guess-my-number-game-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Guess-my-number.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Guess-my-Number.png"
  },
  {
    title: "Phone Number Validator",
    description: "Phone number validation tool with local storage for validated numbers.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://phonenumbervalidator-sharath.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/Javascript-projects.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Phone-Num-Validator.jpg"
  },
  {
    title: "Tribute Page",
    description: "Tribute page dedicated to Thomas Alva Edison with biographical information.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://tribute-page1-sdev.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/HTML-and-CSS-projects.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Tribute-page.jpg"
  },
  {
    title: "Technical Documentation",
    description: "Technical documentation page for CSS with comprehensive guides and examples.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://technical-documentation-sdev.netlify.app/",
    githubUrl: "https://github.com/Sharatdevadiga/HTML-and-CSS-projects.git",
    category: "Frontend",
    image: "https://sharath-devadiga-portfolio.netlify.app/otherProjectImages/Technical-Documentation.png"
  }
];
