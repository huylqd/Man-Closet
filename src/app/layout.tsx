import "./globals.css";
import "@/assets/scss/customize.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Man Closet",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body
        className={cn(font.className, "bg-slate-50 dark:bg-zinc-800 relative")}
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="web-theme"
          >
              {children}
            <ToastContainer position="top-center" />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
