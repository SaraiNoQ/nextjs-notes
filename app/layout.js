import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={inter.className}>
          <div className="flex w-screen h-screen flex-row overflow-hidden">
            <Sidebar />
            <section className="flex justify-center items-center w-full bg-slate-50">{children}</section>
          </div>
        </div>
      </body>
    </html>
  );
}
