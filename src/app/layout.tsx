import "./globals.css";
import Sidebar from "./components/sidebar/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="flex h-screen">
          <Sidebar />

          <div className="flex flex-1 flex-col overflow-hidden">
            {/* Main Content Area */}
            <main className="flex-1 overflow-auto pb-12">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
