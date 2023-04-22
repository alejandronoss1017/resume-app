import Sidebar from './components/sidebar';
import './globals.css';
import { personal } from './data/page-data';
import Head from './head';

/**
 *  In this file, we define the layout of the application.
 *
 *  Contains the skeleton of the page, which includes common
 *  elements such as the navigation bar, footer, and any other
 *  section of the page that is repeated on all views of the application.
 *  Instead of having to duplicate this code on every page, it is defined
 *  once in the layout.tsx file and used as a template for all pages.
 *  The layout.tsx file acts as a container component that wraps around
 *  each page of the application.
 *
 *  is that this is part of the inner workings of Next.js. In particular,
 *  Next.js uses a component-based approach to render pages, where each page is
 *  a React component that is exported from a page.tsx file.
 *
 *  When Next.js processes a page request, it looks for the corresponding page component
 * in the page.tsx file and renders it. The result is then automatically inserted into the
 * <main> container of the RootLayout component. This is possible because Next.js uses React's
 * routing system to determine which page component to render for a given URL.
 */

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Head />
      </head>
      <body className="flex flex-col sm:flex-row">
        {/*
          From here we pass the data to the sidebar component and render it
          and the main content of the page.
        */}
        <Sidebar data={personal} />
        <main className="bg-green grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
