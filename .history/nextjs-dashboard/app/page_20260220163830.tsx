import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-50">

      {/* Header with Nav */}
      <header className="flex justify-between items-center p-4 bg-blue-500 text-white rounded-lg">
        <AcmeLogo />
        <nav className="flex gap-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Activities</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <Link
            href="/login"
            className="flex items-center gap-2 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100"
          >
            Log in <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col justify-center gap-4 md:w-2/5 bg-gray-50 p-6 rounded-lg shadow">
          <p className="text-xl md:text-3xl font-bold text-gray-800">
            Welcome to <br />
            SULEJA H H MULTIPURPOSE COOPERATIVE SOC NIGERIA LIMITED
          </p>
          <p className="text-gray-700">
            Working Together to Empower Others. Learn more about our cooperative activities below.
          </p>
        </div>
        <div className="md:w-3/5 flex justify-center items-center">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="Cooperative hero image"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">About Us</h2>
        <p>
          SULEJA H H MULTIPURPOSE COOPERATIVE SOC NIGERIA LIMITED is dedicated to empowering
          our members through various cooperative activities, loans, and community projects.
        </p>
      </section>

      {/* Activities Section */}
      <section id="services" className="mt-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Our Activities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Providing micro-loans to members</li>
          <li>Organizing community savings schemes</li>
          <li>Financial literacy and empowerment workshops</li>
          <li>Supporting cooperative businesses and projects</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>Email: info@shh.coop</p>
        <p>Phone: +234 800 000 0000</p>
        <p>Address: SULEJA, Niger State, Nigeria</p>
      </section>
    </main>
  );
}