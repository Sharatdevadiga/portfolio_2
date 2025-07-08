import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: "react-hooks-journey",
    title: "My Journey with React Hooks: From Class Components to Modern React",
    excerpt: "Discovering React Hooks transformed my development workflow. Learn about the practical benefits, common pitfalls, and why hooks make React code more maintainable and enjoyable to write.",
    date: "Jan 02, 2025",
    readTime: "7 min read",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    featured: true,
    content: `# My Journey with React Hooks: From Class Components to Modern React

When I first started learning React, class components were the standard way to manage state and lifecycle methods. They seemed logical at the time—you have a class, methods, and state. But as I built more complex applications, I noticed something: my code was becoming verbose, difficult to test, and hard to maintain.

## The Breaking Point

The moment I knew I had to learn hooks was during the development of my entertainment hub application. I had a component with over 15 different methods, nested this.setState calls, and a componentDidMount that was 50 lines long. The component was doing too much, and splitting it up seemed impossible because the logic was so tightly coupled.

## Starting with useState: The First Revelation

The first hook I learned was useState, and honestly, it blew my mind. Compare these two approaches:

**Before (Class Component):**
\`\`\`javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loading: false
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
\`\`\`

**After (Hooks):**
\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
\`\`\`

The difference was immediately clear. Less boilerplate, more readable, and I could focus on the logic rather than the ceremony of class components.

## useEffect: Understanding the Lifecycle

Understanding useEffect took me longer. I kept thinking of it as componentDidMount, but it's so much more powerful. The dependency array was confusing at first, but once I understood it, I could control exactly when my effects ran.

Here's what I learned about useEffect:

**Data Fetching:**
\`\`\`javascript
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); // Empty dependency array means run once on mount
\`\`\`

The learning curve is worth it, and once you understand hooks, you'll wonder how you ever lived without them.`
  },
  {
    id: "responsive-design-guide",
    title: "Mastering Responsive Design: CSS Grid, Flexbox, and Modern Techniques",
    excerpt: "Creating truly responsive layouts that work on all devices. Learn practical techniques using CSS Grid, Flexbox, and modern CSS features that make responsive design easier than ever.",
    date: "Dec 28, 2024",
    readTime: "9 min read",
    tags: ["CSS", "Responsive Design", "Grid", "Flexbox"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    featured: true,
    content: `# Mastering Responsive Design: CSS Grid, Flexbox, and Modern Techniques

Responsive design has evolved significantly since the early days of fluid layouts and media queries. With CSS Grid and Flexbox, we now have powerful tools that make creating responsive layouts not just easier, but more intuitive and maintainable.

## The Evolution of Responsive Design

When I started web development, responsive design meant lots of media queries and float-based layouts. We had to think about every breakpoint, calculate percentages, and deal with clearfix hacks. Today's CSS gives us superpowers that make responsive design feel natural.

## CSS Grid: The Layout Revolution

CSS Grid changed everything. It's not just about making grids—it's about thinking in two dimensions and creating layouts that adapt intelligently.

### The Power of Auto-Fit and Minmax

Here's my favorite Grid pattern that I use in almost every project:

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

This single line of CSS creates a grid that:
- Automatically adjusts the number of columns based on available space
- Ensures each column is at least 300px wide
- Distributes extra space evenly
- Works perfectly from mobile to desktop

Remember: responsive design isn't just about making things fit on small screens—it's about creating optimal experiences for every device and context.`
  },
  {
    id: "javascript-performance-optimization",
    title: "JavaScript Performance Optimization: Techniques That Actually Matter",
    excerpt: "Real-world JavaScript performance techniques that make a measurable difference. Learn about code splitting, lazy loading, and optimization strategies that improve user experience.",
    date: "Dec 22, 2024",
    readTime: "11 min read",
    tags: ["JavaScript", "Performance", "Optimization", "Web Development"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    featured: false,
    content: `# JavaScript Performance Optimization: Techniques That Actually Matter

Performance optimization can feel overwhelming with all the advice out there. After profiling and optimizing several production applications, I've learned which techniques actually make a difference and which ones are just premature optimization.

## The Performance Mindset

Before diving into techniques, it's crucial to understand that performance optimization should be data-driven. Don't optimize what you think is slow—measure what is actually slow.

## Code Splitting: The Biggest Impact

In my experience, code splitting provides the most significant performance improvement for most applications.

### Route-Based Code Splitting

Here's how I implement route-based code splitting in my React applications:

\`\`\`javascript
import { lazy, Suspense } from 'react';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

Performance is a feature, and your users will notice the difference.`
  }
];

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPostById = (id: string) => blogPosts.find(post => post.id === id);
export const getPostsByTag = (tag: string) => blogPosts.filter(post => 
  post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
);
