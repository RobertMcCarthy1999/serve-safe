export const metadata = {
  title: 'LetSuite Dashboard',
  description: 'Manage your letting tools from one place',
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
