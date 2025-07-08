import "./globals.css";

export const metadata = {
  title: "Taskify - Minimal Task App",
  description: "A clean fullstack task manager in Next.js and Supabase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
