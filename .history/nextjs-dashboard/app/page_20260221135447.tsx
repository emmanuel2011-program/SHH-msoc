'use client'


import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/app/ui/home.module.css';



  

  return (
    <main className="flex flex-col min-h-screen p-6 bg-gray-50">

      

      {/* Hero Section */}
      <section id="home" className="mt-6 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col justify-center gap-4 md:w-2/5 bg-gray-50 p-6 rounded-lg shadow">
          <p className="text-xl md:text-3xl font-bold text-gray-800">
            WELCOME TO <br />
            SULEJA H H MULTIPURPOSE COOPERATIVE SOC NIGERIA LIMITED
          </p>
          <p className="text-gray-700">
            Working Together with God to Empower Others. Learn more about our cooperative activities below.
          </p>
        </div>
        <div className="md:w-3/5 flex justify-center items-center">
          <Image
            src="/hero-desktop.png"
            width={1000} height={760} alt="Cooperative hero"
            className="rounded-lg"
          />
        </div>
      </section>

      Customers Section
      <section id="customers" className="mt-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Our Customers</h2>
        <p>Details of our active and valued customers.</p>
      </section>

      {/* Membership Section + Loan Form */}
      <section id="membership" className="mt-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Loan Application Form</h2>
        <p>Become a member and submit your loan application below:</p>

      </section>

        