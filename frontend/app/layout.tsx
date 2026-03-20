export const metadata = {
  title: "CineVine",
  description: "CineVine Productions",
  icons: {
    icon: "/images/cinevine-footer-logo.png?v=20260320",
    shortcut: "/images/cinevine-footer-logo.png?v=20260320",
    apple: "/images/cinevine-footer-logo.png?v=20260320"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
