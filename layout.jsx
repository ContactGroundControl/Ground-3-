import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Ground Control LLC",
  description: "Site Control & Land Acquisition for Energy Infrastructure",
  metadataBase: new URL("https://www.groundcontrol-llc.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
          <div className="footer">© {new Date().getFullYear()} Ground Control LLC</div>
        </div>
      </body>
    </html>
  );
}
