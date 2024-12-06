// pages/about.js
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-6">
          I'm Ambreen, a front-end developer passionate about creating beautiful, functional web applications. With a strong background in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I focus on crafting seamless user experiences.
        </p>
        <p className="text-lg mb-6">
          I believe in writing clean, efficient code, and constantly learning new technologies to stay on top of the latest trends in web development.
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="inline-block px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg transition-all hover:bg-blue-200">
            Learn More contact Me
          </a>
        </Link>
        
      </div>
    </div>
  );
}
