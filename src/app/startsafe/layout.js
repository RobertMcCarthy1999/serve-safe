import NavBar from '@/app/components/NavBar';

export const metadata = {
  title: 'StartSafe - Upload Documents',
  description: 'Securely deliver tenancy documents to tenants.',
};

export default function StartSafeLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
