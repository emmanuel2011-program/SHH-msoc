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
  signature: string;
  agreementName1: string;
  agreementName2: string;
  agreementName3: string;
  agreementName4: string;
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
  signature: '',
  agreementName1: '',
  agreementName2: '',
  agreementName3: '',
  agreementName4: '',
};

export default function Page() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [step, setStep] = useState(1);

  const updateField = (name: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const stepFields: Record<number, (keyof FormData)[]> = {
      1: ['title','surname','firstName','dateOfBirth','gender','nationality'],
      2: ['residentialAddress','contactAddress','tin','email','mobilePhone'],
      3: ['loanAmount','requestDate','duration','interest','repaymentDate'],
      4: ['spouseName','spouseTitle','spouseDOB','spouseGender','spouseNationality','spouseStateOfOrigin','spouseLocalGovt','spouseMaritalStatus','spouseResidentialAddress'],
      5: ['bankName','accountType','accountName','accountNumber','document','signature'],
      6: ['agreementName1','agreementName2','agreementName3','agreementName4'],
    };

    for (const field of stepFields[step] || []) {
      if (!formData[field] || (field === 'document' && formData.document === null)) {
        alert(`Please fill in ${field}`);
        return false;
      }
    }

    if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?\d{10,15}$/;
      const tinRegex = /^\d{1,11}$/;

      if (!tinRegex.test(formData.tin)) {
        alert('TIN must be numeric and maximum 11 digits');
        return false;
      }

      if (!emailRegex.test(formData.email)) {
        alert('Enter a valid email address');
        return false;
      }

      if (!phoneRegex.test(formData.mobilePhone)) {
        alert('Enter a valid phone number (10–15 digits)');
        return false;
      }
    }

    return true;
  };

  const nextStep = () => validateStep() && setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h1 className="text-2xl font-bold">Customer & Loan Application Form</h1>

      <form className="space-y-6">

        {step === 2 && (
          <>
            <Textarea label="Residential Address" name="residentialAddress" onBlur={updateField} />
            <Textarea label="Contact Address" name="contactAddress" onBlur={updateField} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input 
                label="TIN" 
                name="tin" 
                maxLength={11}
                pattern="\d{1,11}"
                onBlur={updateField}
              />

              <Input 
                label="Email" 
                type="email" 
                name="email" 
                onBlur={updateField}
              />

              <Input 
                label="Mobile Phone" 
                name="mobilePhone" 
                pattern="^\+?\d{10,15}$"
                onBlur={updateField}
              />
            </div>
          </>
        )}

        <div className="flex gap-4 mt-4">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-200 rounded">
              Previous
            </button>
          )}

          <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
            Next
          </button>
        </div>

      </form>
    </div>
  );
}

/* Input Component */
function Input({ label, name, type = 'text', onBlur, maxLength, pattern }: any) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={maxLength}
        pattern={pattern}
        className="border p-2 rounded"
        onBlur={(e) => onBlur(name, e.target.value)}
      />
    </div>
  );
}

/* Textarea Component */
function Textarea({ label, name, onBlur }: any) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold">{label}</label>
      <textarea
        name={name}
        rows={2}
        className="border p-2 rounded"
        onBlur={(e) => onBlur(name, e.target.value)}
      />
    </div>
  );
}