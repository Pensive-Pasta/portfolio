export const metadata = {
  title: "Ricky Butcher Portfolio",
  description:
    "A website portfolio to showcase some highlighted projects, built in React with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
