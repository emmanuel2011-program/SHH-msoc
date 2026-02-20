'use client';

import { useState } from 'react';

type FormData = {
  // Personal Info
  title: string;
  surname: string;
  firstName: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;

  // Contact Info
  residentialAddress: string;
  contactAddress: string;
  tin: string;
  email: string;
  mobilePhone: string;

  // Loan Info
  loanAmount: string;
  requestDate: string;
  duration: string;
  interest: string;
  repaymentDate: string;

  // Spouse Info
  spouseName: string;
  spouseTitle: string;
  spouseDOB: string;
  spouseGender: string;
  spouseNationality: string;
  spouseStateOfOrigin: string;
  spouseLocalGovt: string;
  spouseMaritalStatus: string;
  spouseResidentialAddress: string;

  // Bank Info
  bankName: string;
  accountType: string;
  accountName: string;
  accountNumber: string;

  // Document Upload
  document: File | null;

  // Signature
  signature: string;

  // Agreement Names
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
  const [submitted, setSubmitted] = useState(false);

  const updateField = (name: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const stepFields: Record<number, (keyof FormData)[]> = {
      1: ['title', 'surname', 'firstName', 'dateOfBirth', 'gender', 'nationality'], // middleName optional
      2: ['residentialAddress', 'contactAddress', 'tin', 'email', 'mobilePhone'],
      3: ['loanAmount', 'requestDate', 'duration', 'interest', 'repaymentDate'],
      4: ['spouseName', 'spouseTitle', 'spouseDOB', 'spouseGender', 'spouseNationality', 'spouseStateOfOrigin', 'spouseLocalGovt', 'spouseMaritalStatus', 'spouseResidentialAddress'],
      5: ['bankName', 'accountType', 'accountName','accountNumber','document','signature'],
      6: ['agreementName1','agreementName2','agreementName3','agreementName4'],
    };

    for (const field of stepFields[step] || []) {
      if (!formData[field] || (field === 'document' && formData.document === null)) {
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

    console.log('Submitted Form:', formData);
    setSubmitted(true);
    setFormData(initialState);
    setStep(1);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h1 className="text-2xl font-bold">Customer & Loan Application Form</h1>
      {submitted && <p className="text-green-600">Form submitted successfully!</p>}

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label="Title" name="title" onBlur={updateField} />
            <Input label="Surname" name="surname" onBlur={updateField} />
            <Input label="First Name" name="firstName" onBlur={updateField} />
            <Input label="Middle Name (optional)" name="middleName" onBlur={updateField} />
            <Input label="Date of Birth" type="date" name="dateOfBirth" onBlur={updateField} />
            <Input label="Nationality" name="nationality" onBlur={updateField} />
            <div>
              <label className="block text-sm font-semibold">Gender</label>
              <label><input type="radio" name="gender" value="Male" onChange={e => updateField('gender', e.target.value)} /> Male</label>
              <label className="ml-4"><input type="radio" name="gender" value="Female" onChange={e => updateField('gender', e.target.value)} /> Female</label>
            </div>
          </div>
        )}

        {/* Step 2: Contact Info */}
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

        {/* Step 3: Loan Info */}
        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Loan Amount" name="loanAmount" onBlur={updateField} />
            <Input label="Request Date" type="date" name="requestDate" onBlur={updateField} />
            <Input label="Duration (months)" name="duration" onBlur={updateField} />
            <Input label="Interest (%)" name="interest" onBlur={updateField} />
            <Input label="Repayment Date" type="date" name="repaymentDate" onBlur={updateField} />
          </div>
        )}

        {/* Step 4: Spouse Info */}
        {step === 4 && (
          <>
            <h2 className="text-xl font-semibold">Spouse Information</h2>
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

        {/* Step 5: Bank & Documents */}
        {step === 5 && (
          <>
            <h2 className="text-xl font-semibold">Bank & Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Bank Name" name="bankName" onBlur={updateField} />
              <Input label="Account Type" name="accountType" onBlur={updateField} />
              <Input label="Account Number" name="accountNumber" onBlur={updateField} />
              <Input label="Account Name" name="accountName" onBlur={updateField} />
            </div>

            <div className="flex flex-col mt-4">
              <label className="text-sm font-semibold">Upload Document</label>
              <input type="file" onChange={e => updateField('document', e.target.files?.[0] || null)} />
            </div>

            <div className="flex flex-col mt-4">
              <label className="text-sm font-semibold">Signature</label>
              <input
                type="text"
                placeholder="Type your full name as signature"
                className="border p-2 rounded"
                value={formData.signature}
                onChange={e => updateField('signature', e.target.value)}
              />
            </div>
          </>
        )}

        {/* Step 6: Agreement */}
        {step === 6 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Agreement & Consent</h2>

            {['agreementName1','agreementName2','agreementName3','agreementName4'].map((field, i) => (
              <div key={i} className="flex flex-col mt-2">
                <label className="text-sm font-semibold">Name for agreement line {i+1}</label>
                <input
                  type="text"
                  className="border p-2 rounded"
                  placeholder="Enter your full name"
                  value={formData[field as keyof FormData] as string}
                  onChange={(e) => updateField(field as keyof FormData, e.target.value)}
                />
                <p className="mt-1 text-sm whitespace-pre-line">
                  {i === 0 && 'hereby irrevocably and unconditionally agree to abide by the agreement covering the said institution, to make good any loss the firm may suffer as a result of my non compliance to the said agreement.'}
                  {i === 1 && 'And shall pay to the institution, the bank written demand and any monies due or incurred as a result of my non compliance to this agreement.'}
                  {i === 2 && 'I also agree with the COOPERATIVE institution’s management to further pay for any losses intended or not intended during the transaction.'}
                  {i === 3 && 'I will be so bound to the COOPERATIVE institution if a misconduct, commission or omission is established against him/her.'}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-4">
          {step > 1 && <button type="button" className="px-4 py-2 bg-gray-200 rounded" onClick={prevStep}>Previous</button>}
          {step < 6 && <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded" onClick={nextStep}>Next</button>}
          {step === 6 && <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>}
        </div>

      </form>
    </div>
  );
}

// Input component
function Input({ label, name, type = 'text', onBlur }: any) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        className="border p-2 rounded"
        defaultValue=""
        onBlur={(e) => onBlur(name, e.target.value)}
      />
    </div>
  );
}

// Textarea component
function Textarea({ label, name, onBlur }: any) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold">{label}</label>
      <textarea
        name={name}
        className="border p-2 rounded"
        rows={2}
        defaultValue=""
        onBlur={(e) => onBlur(name, e.target.value)}
      />
    </div>
  );
}