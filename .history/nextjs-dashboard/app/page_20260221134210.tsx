'use client'


import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/app/ui/home.module.css';

type FormData = {
  title: string; surname: string; firstName: string; middleName: string;
  dateOfBirth: string; gender: string; nationality: string;
  residentialAddress: string; contactAddress: string; tin: string;
  email: string; mobilePhone: string;
  loanAmount: string; requestDate: string; duration: string;
  interest: string; repaymentDate: string;
  spouseName: string; spouseTitle: string; spouseDOB: string; spouseGender: string;
  spouseNationality: string; spouseStateOfOrigin: string; spouseLocalGovt: string;
  spouseMaritalStatus: string; spouseResidentialAddress: string;
  bankName: string; accountType: string; accountName: string; accountNumber: string;
  document: File | null; signature: string;
  agreementName1: string; agreementName2: string; agreementName3: string;
};

const initialState: FormData = {
  title:'', surname:'', firstName:'', middleName:'', dateOfBirth:'', gender:'', nationality:'',
  residentialAddress:'', contactAddress:'', tin:'', email:'', mobilePhone:'',
  loanAmount:'', requestDate:'', duration:'', interest:'', repaymentDate:'',
  spouseName:'', spouseTitle:'', spouseDOB:'', spouseGender:'',
  spouseNationality:'', spouseStateOfOrigin:'', spouseLocalGovt:'',
  spouseMaritalStatus:'', spouseResidentialAddress:'',
  bankName:'', accountType:'', accountName:'', accountNumber:'',
  document:null, signature:'', agreementName1:'', agreementName2:'', agreementName3:'',
};

export default function Page() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (name: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const stepFields: Record<number, (keyof FormData)[]> = {
      1:['title','surname','firstName','dateOfBirth','gender','nationality'],
      2:['residentialAddress','contactAddress','tin','email','mobilePhone'],
      3:['loanAmount','requestDate','duration','interest','repaymentDate'],
      4:['spouseName','spouseTitle','spouseDOB','spouseGender','spouseNationality','spouseStateOfOrigin','spouseLocalGovt','spouseMaritalStatus','spouseResidentialAddress'],
      5:['bankName','accountType','accountName','accountNumber','document','signature'],
      6:['agreementName1','agreementName2','agreementName3'],
    };
    for (const field of stepFields[step] || []) {
      if (!formData[field] || (field==='document' && !formData.document)) {
        alert(`Please fill in ${field}`);
        return false;
      }
    }
    return true;
  };

  const nextStep = () => validateStep() && setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setFormData(initialState);
    setStep(1);
  };

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

      {/*  */}