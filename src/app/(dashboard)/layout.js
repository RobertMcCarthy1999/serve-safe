// File: src/app/(dashboard)/layout.js

export const metadata = {
  title: 'Dashboard | LetSuite',
  description: 'Your landlord toolkit dashboard',
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
