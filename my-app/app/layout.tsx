import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Load Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add necessary weights
});

export const metadata: Metadata = {
  title: "Ask Your Valentine – Create a Cute Invite 💖",
  description: "Generate a special link to ask your Valentine on a date in a fun and adorable way! Surprise them with a personalized invite. 💌",
  keywords: "Valentine, love, date invite, valentine's day, ask out, romantic, couple, dating, personalized invitation",
  authors: [{ name: "Sai Karthik", url: "https://www.saikarthikketha.tech/" }],
  openGraph: {
    title: "Ask Your Valentine – Create a Cute Invite 💖",
    description: "Generate a personalized invite link to ask your Valentine out in a fun and creative way!",
    url: "/preview.jpg", // Update this with the actual URL
    siteName: "Ask Your Valentine",
    images: [
      {
        url: "/preview.jpg", // Change this to a relevant image URL
        width: 1200,
        height: 630,
        alt: "Ask Your Valentine - Generate a Cute Invite",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@invalid.dev", // Replace with your Twitter handle if available
    title: "Ask Your Valentine – Generate a Cute Invite 💖",
    description: "Create a fun, romantic invite to ask your Valentine out!",
    images: ['/preview.jpg'], // Update this if you have an image for preview
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}