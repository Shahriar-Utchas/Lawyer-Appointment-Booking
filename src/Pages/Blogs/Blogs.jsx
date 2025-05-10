import React from 'react';
import { Lightbulb, Code, BookOpen, ShieldCheck, FileText } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Helmet } from 'react-helmet';

const blogData = [
    {
        icon: <Lightbulb className="text-green-500" />,
        question: "What is useState and how does it work in React?",
        answer: `useState is a React hook that allows you to add state to functional components. It returns a state value and a function to update it. Updating the state triggers a re-render.`,
        code: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increment</button>`
    },
    {
        icon: <Code className="text-green-500" />,
        question: "What is the purpose of useEffect in React?",
        answer: `useEffect lets you perform side effects (like fetching data or interacting with the DOM) in function components. It runs after the component mounts or updates.`,
        code: `useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData);
}, []);`
    },
    {
        icon: <BookOpen className="text-green-500" />,
        question: "What is a custom hook in React and when should you use one?",
        answer: `A custom hook is a function that starts with 'use' and encapsulates reusable hook logic. Use it to cleanly share behavior between components.`,
        code: `function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}`
    },
    {
        icon: <ShieldCheck className="text-green-500" />,
        question: "Difference between controlled and uncontrolled components. Which one is better?",
        answer: `Controlled components manage form inputs via React state. Uncontrolled components rely on refs to access DOM values. Controlled is generally preferred for React apps.`,
        code: `// Controlled:
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />

// Uncontrolled:
const inputRef = useRef();
<input ref={inputRef} />`
    },
    {
        icon: <FileText className="text-green-500" />,
        question: "Tell us something about useFormStatus() in React.",
        answer: "`useFormStatus()` is not part of React core — it's a hook from Next.js (App Router) used in Server Actions. It helps track the form submission status (e.g., loading, pending) in client components, enabling better user experience.",
        code: `function SubmitButton() {
      const { pending } = useFormStatus();
    
      return (
        <button disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      );
    }`
    }

];

const Blogs = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <Helmet>
                <title>Lawyer | Blogs</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center mb-8 text-green-600">Blog Articles</h1>
            <div className="space-y-8">
                {blogData.map((blog, idx) => (
                    <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            {blog.icon}
                            <h2 className="text-xl font-semibold text-gray-800">{blog.question}</h2>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">{blog.answer}</p>
                        <SyntaxHighlighter language="jsx" style={oneDark} className="rounded-lg text-sm">
                            {blog.code}
                        </SyntaxHighlighter>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;