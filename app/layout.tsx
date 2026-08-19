import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asma-benzaoucha.vercel.app"),
  title: "Asma Benzaoucha | Computer Systems Engineer",
  description:
    "Computer Systems Engineer specializing in Artificial Intelligence, Enterprise Systems, Cybersecurity and Identity & Access Management.",
  openGraph: {
    title: "Asma Benzaoucha | Computer Systems Engineer",
    description:
      "Computer Systems Engineer specializing in Artificial Intelligence, Enterprise Systems, Cybersecurity and Identity & Access Management.",
    type: "website",
    locale: "en_US"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

// Runs before paint to avoid a light/dark flash, and keeps the mobile
// browser chrome (address bar / app switcher) in sync with the chosen theme.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = stored ? stored === 'dark' : true;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"   suppressHydrationWarning
    className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta name="theme-color" content="#090B13" />
      </head>
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
