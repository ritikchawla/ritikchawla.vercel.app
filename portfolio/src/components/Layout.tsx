import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Ritik Chawla - Software Engineer' }: LayoutProps) => {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-950 transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Ritik Chawla - Software Engineer building distributed systems. Golang, Kubernetes, and cloud-native infrastructure." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
