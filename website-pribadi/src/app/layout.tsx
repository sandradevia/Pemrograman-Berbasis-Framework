import Layout from '../components/Layout';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout pageId="about_me">
          {children}
        </Layout>
      </body>
    </html>
  );
}
