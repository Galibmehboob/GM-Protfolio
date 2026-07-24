import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import BackToTop from "@/components/BackToTop";
import Loading from "@/components/Loading";

export const metadata = {
  title: "Galib Portfolio",
  description: "Modern Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">

          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}