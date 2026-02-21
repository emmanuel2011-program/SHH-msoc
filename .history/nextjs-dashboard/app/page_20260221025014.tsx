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

      {/* Header with Nav */}
      <header className="flex justify-between items-center p-4 bg-blue-500 text-white rounded-lg">
        <AcmeLogo />
        
          <Link href="/login" className="flex items-center gap-2 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
              Log in <ArrowRightIcon className="w-4 h-4" />
          </Link>
    
      </header>

      {/* Hero Section */}
      <section id="home" className="mt-6 flex flex-col md:flex-row gap-6">
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
            width={1000} height={760} alt="Cooperative hero"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Customers Section */}
      <section id="customers" className="mt-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Our Customers</h2>
        <p>Details of our active and valued customers.</p>
      </section>

      {/* Membership Section + Loan Form */}
      <section id="membership" className="mt-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Membership & Loan Application Form</h2>
        <p>Become a member and submit your loan application below:</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {submitted && <p className="text-green-600">Form submitted successfully!</p>}

          {/* Render form steps */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Title" name="title" onBlur={updateField} />
              <Input label="Surname" name="surname" onBlur={updateField} />
              <Input label="First Name" name="firstName" onBlur={updateField} />
              <Input label="Middle Name" name="middleName" onBlur={updateField} />
              <Input label="Date of Birth" type="date" name="dateOfBirth" onBlur={updateField} />
              <Input label="Nationality" name="nationality" onBlur={updateField} />
              <div>
                <label>Gender:</label>
                <label><input type="radio" name="gender" value="Male" onChange={e => updateField('gender', e.target.value)} /> Male</label>
                <label className="ml-4"><input type="radio" name="gender" value="Female" onChange={e => updateField('gender', e.target.value)} /> Female</label>
              </div>
            </div>
          )}

          {step === 2 && (
            <>
              <Textarea label="Residential Address" name="residentialAddress" onBlur={updateField} />
              <Textarea label="Contact Address" name="contactAddress" onBlur={updateField} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="TIN" name="tin" onBlur={updateField} />
                <Input label="Email" type="email" name="email" onBlur={updateField} />
                <Input label="Mobile Phone" name="mobilePhone" onBlur={updateField} />
              </div>
            </>
          )}

          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Loan Amount" name="loanAmount" onBlur={updateField} />
              <Input label="Request Date" type="date" name="requestDate" onBlur={updateField} />
              <Input label="Duration (months)" name="duration" onBlur={updateField} />
              <Input label="Interest (%)" name="interest" onBlur={updateField} />
              <Input label="Repayment Date" type="date" name="repaymentDate" onBlur={updateField} />
            </div>
          )}

          {step === 4 && (
            <>
              <h3 className="text-xl font-semibold">Spouse Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="Spouse Full Name" name="spouseName" onBlur={updateField} />
                <Input label="Title" name="spouseTitle" onBlur={updateField} />
                <Input label="Date of Birth" type="date" name="spouseDOB" onBlur={updateField} />
                <Input label="Gender" name="spouseGender" onBlur={updateField} />
                <Input label="Nationality" name="spouseNationality" onBlur={updateField} />
                <Input label="State of Origin" name="spouseStateOfOrigin" onBlur={updateField} />
                <Input label="Local Govt Area" name="spouseLocalGovt" onBlur={updateField} />
                <Input label="Marital Status" name="spouseMaritalStatus" onBlur={updateField} />
                <Textarea label="Residential Address" name="spouseResidentialAddress" onBlur={updateField} />
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h3 className="text-xl font-semibold">Bank & Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="Bank Name" name="bankName" onBlur={updateField} />
                <Input label="Account Type" name="accountType" onBlur={updateField} />
                <Input label="Account Name" name="accountName" onBlur={updateField} />
                <Input label="Account Number" name="accountNumber" onBlur={updateField} />
              </div>
              <input type="file" onChange={e => updateField('document', e.target.files?.[0] || null)} />
              <input type="text" placeholder="Signature" className="border p-2 rounded mt-2" value={formData.signature} onChange={e=>updateField('signature',e.target.value)} />
            </>
          )}

          {step === 6 && (
            <>
              <h3 className="text-xl font-semibold">Agreements</h3>
              {['agreementName1','agreementName2','agreementName3'].map((field, i)=>(
                <input key={i} className="border p-2 rounded w-full mt-2" placeholder={`Agreement Name ${i+1}`}
                  value={formData[field as keyof FormData] as string}
                  onChange={e=>updateField(field as keyof FormData,e.target.value)} />
              ))}
            </>
          )}

          {/* Step Navigation */}
          <div className="flex gap-4 mt-4">
            {step > 1 && <button type="button" className="px-4 py-2 bg-gray-200 rounded" onClick={prevStep}>Previous</button>}
            {step < 6 && <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded" onClick={nextStep}>Next</button>}
            {step === 6 && <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>}
          </div>

        </form>
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

/* Input and Textarea components */
function Input({ label, name, type='text', onBlur }: any){
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <input type={type} className="border p-2 rounded" onBlur={e=>onBlur(name,e.target.value)} />
    </div>
  );
}

function Textarea({ label, name, onBlur }: any){
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <textarea rows={2} className="border p-2 rounded" onBlur={e=>onBlur(name,e.target.value)} />
    </div>
  );
}