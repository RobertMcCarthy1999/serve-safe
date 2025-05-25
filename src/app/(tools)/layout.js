// File: src/app/(tools)/layout.js

import NavBar from '@/app/components/NavBar';

export default function ToolsLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
