import Footer from "@/components/Footer";
import "./globals.css";
import { Poppins, Inter } from 'next/font/google';

// Poppins font initialized 
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins', 
  weight: ['400', '700', '900'],
});


export const metadata = {
  title: "Tripplis",
  description: "Tripplis is a travel agency website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${poppins.className}`}> 
      <body
        className={`antialiased`}>
        {children}  
        <Footer/>    
      </body>
    </html>
  );
}
