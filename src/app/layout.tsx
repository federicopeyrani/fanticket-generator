import "./globals.css";

export const metadata = {
  title: "FanTicket Generator",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
