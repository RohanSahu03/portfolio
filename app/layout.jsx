import './globals.css';

export const metadata = {
  metadataBase: new URL('https://rohansahu.tech'),
  title: 'Rohan Sahu — Full Stack Developer',
  description: 'Full Stack Developer crafting elegant digital experiences. Specializing in React, Next.js, Node.js, and modern web technologies.',
  keywords: ['developer', 'portfolio', 'full stack', 'react', 'next.js'],
  openGraph: {
    title: 'Rohan Sahu — Full Stack Developer',
    description: 'Full Stack Developer crafting elegant digital experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
