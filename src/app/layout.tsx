import type { Metadata } from 'next';
import './globals.css';



export const metadata: Metadata = {
  title: 'One and done App',
  description: 'Distraction free youtube client',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
