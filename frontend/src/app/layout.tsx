'use client';
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthProvider, { useAuth } from '@/providers/NextAuthContext';
import Loader from '@/components/common/Loader';

const RootLayoutContent = ({ children }: { children: React.ReactNode }) => {
 // const [loading, setLoading] = useState<boolean>(true);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin');
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loader />;
  }

  return <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>;
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <RootLayoutContent>{children}</RootLayoutContent>
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
