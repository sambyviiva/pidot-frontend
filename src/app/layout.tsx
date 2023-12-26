import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { APP_BACKGROUNG_RGB_COLOR_STRING } from "./_common/styles";
import AppContainer from "./_components/Container";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";
import ThemeRegistry from "./_theme/ThemeRegistry";
import Provider from "./_trpc/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pidot",
  description: "Make meeting great again",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: APP_BACKGROUNG_RGB_COLOR_STRING }}
      >
          <ThemeRegistry options={{ key: "mui-theme" }}>
            <Provider>
              <Header />
              <AppContainer>{children}</AppContainer>
              <Footer />
            </Provider>
          </ThemeRegistry>
      </body>
    </html>
  );
}
