import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Daniyar Kangozhayev',
  description: 'Portfolio Daniyar Kangozhayev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
