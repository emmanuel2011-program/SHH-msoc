'use client';

{/* Header with Nav */}
      <header className="flex justify-between items-center p-4 bg-blue-500 text-white rounded-lg">
        <AcmeLogo />
        
          <Link href="/login" className="flex items-center gap-2 bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100">
              Log in <ArrowRightIcon className="w-4 h-4" />
          </Link>
      </header>



export default function DashboardHomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
      <p>Welcome to the dashboard home page.</p>
    </div>
  );
}