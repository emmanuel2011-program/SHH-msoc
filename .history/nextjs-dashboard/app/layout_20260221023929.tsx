import '@/app/ui/global.css';
import Navbar from "@/app/ui/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><Navbar/>{children}</body>
    </html>
  );
}

