import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Galib Portfolio",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}