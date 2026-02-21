'use client';

import { useState } from 'react';

type FormData = {
  title: string;
  surname: string;
  firstName: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;

  residentialAddress: string;
  contactAddress: string;
  tin: string;
  email: string;
  mobilePhone: string;

  loanAmount: string;
  requestDate: string;
  duration: string;
  interest: string;
  repaymentDate: string;

  spouseName: string;
  spouseMobilePhone: string;
  spouseTitle: string;
  spouseDOB: string;
  spouseGender: string;
  spouseNationality: string;
  spouseStateOfOrigin: string;
  spouseLocalGovt: string;
  spouseMaritalStatus: string;
  spouseResidentialAddress: string;

  bankName: string;
  accountType: string;
  accountName: string;
  accountNumber: string;

  document: File | null;
  passportPhoto: File | null;
  signature: string;

  agreementName1: string;
  agreementName2: string;
  agreementName3: string;
};

const initialState: FormData = {
  title: '',
  surname: '',
  firstName: '',
  middleName: '',
  dateOfBirth: '',
  gender: '',
  nationality: '',
  residentialAddress: '',
  contactAddress: '',
  tin: '',
  email: '',
  mobilePhone: '',
  loanAmount: '',
  requestDate: '',
  duration: '',
  interest: '',
  repaymentDate: '',
  spouseName: '',
  spouseMobilePhone: '',
  spouseTitle: '',
  spouseDOB: '',
  spouseGender: '',
  spouseNationality: '',
  spouseStateOfOrigin: '',
  spouseLocalGovt: '',
  spouseMaritalStatus: '',
  spouseResidentialAddress: '',
  bankName: '',
  accountType: '',
  accountName: '',
  accountNumber: '',
  document: null,
  passportPhoto: null,
  signature: '',
  agreementName1: '',
  agreementName2: '',
  agreementName3: '',
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
      1: ['title','surname','firstName','dateOfBirth','gender','nationality'],
      2: ['residentialAddress','contactAddress','tin','email','mobilePhone'],
      3: ['loanAmount','requestDate','duration','interest','repaymentDate'],
      4: ['spouseName','spouseMobilePhone','spouseTitle','spouseDOB','spouseGender','spouseNationality','spouseStateOfOrigin','spouseLocalGovt','spouseMaritalStatus','spouseResidentialAddress'],
      5: ['bankName','accountType','accountName','accountNumber','document','signature'],
      6: ['agreementName1','agreementName2','agreementName3'],
    };

    for (const field of stepFields[step] || []) {
      if (!formData[field]) {
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

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-20 p-6 bg-green-100 border border-green-400 rounded text-center">
        <h2 className="text-2xl font-bold text-green-800">✅ Application Submitted</h2>
        <p className="mt-2">Your loan application has been successfully submitted.</p>
        <button
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h1 className="text-2xl font-bold">Customer & Loan Application Form</h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label="Title" name="title" onBlur={updateField} />
            <Input label="Surname" name="surname" onBlur={updateField} />
            <Input label="First Name" name="firstName" onBlur={updateField} />
            <Input label="Middle Name" name="middleName" onBlur={updateField} />
            <Input label="Date of Birth" type="date" name="dateOfBirth" onBlur={updateField} />
            <Input label="Nationality" name="nationality" onBlur={updateField} />

            <div>
              <label>Gender</label>
              <input type="radio" value="Male" onChange={e => updateField('gender', e.target.value)} /> Male
              <input type="radio" value="Female" className="ml-4" onChange={e => updateField('gender', e.target.value)} /> Female
            </div>
          </div>
        )}

        {step === 2 && (
          <>
            <Textarea label="Residential Address" name="residentialAddress" onBlur={updateField} />
            <Textarea label="Contact Address" name="contactAddress" onBlur={updateField} />
            <Input label="TIN" name="tin" onBlur={updateField} />
            <Input label="Email" name="email" onBlur={updateField} />
            <Input label="Mobile Phone" name="mobilePhone" onBlur={updateField} />
          </>
        )}

        {step === 3 && (
          <>
            <Input label="Loan Amount" name="loanAmount" onBlur={updateField} />
            <Input label="Request Date" type="date" name="requestDate" onBlur={updateField} />
            <Input label="Duration" name="duration" onBlur={updateField} />
            <Input label="Interest" name="interest" onBlur={updateField} />
            <Input label="Repayment Date" type="date" name="repaymentDate" onBlur={updateField} />
          </>
        )}

        {step === 6 && (
          <>
            <Input label="Agreement Name 1" name="agreementName1" onBlur={updateField} />
            <Input label="Agreement Name 2" name="agreementName2" onBlur={updateField} />
            <Input label="Agreement Name 3" name="agreementName3" onBlur={updateField} />
          </>
        )}

        <div className="flex gap-4">
          {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
          {step < 6 && <button type="button" onClick={nextStep}>Next</button>}
          {step === 6 && <button type="submit">Submit</button>}
        </div>

      </form>
    </div>
  );
}

function Input({ label, name, type='text', onBlur }: any) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        className="border p-2"
        onBlur={e => onBlur(name, e.target.value)}
      />
    </div>
  );
}

function Textarea({ label, name, onBlur }: any) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <textarea
        className="border p-2"
        rows={2}
        onBlur={e => onBlur(name, e.target.value)}
      />
    </div>
  );
}