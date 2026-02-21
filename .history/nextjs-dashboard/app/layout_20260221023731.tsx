import '@/app/ui/global.css';
import Navbar from "@/app/ui/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <div style={{ background: "red", color: "white" }}>NAVBAR TEST</div>
  {children}
</body>
    </html>
  );
}

