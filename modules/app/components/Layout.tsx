import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: NextPage = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="evmos-alliance">
      <Head>
        <title>EVMOS Alliance</title>
        <meta name="description" content="EVMOS Alliance" />
        <link rel="icon" href="/evmos.png" />
      </Head>
      <Header />
      <div className="content">{children}</div>
      <Footer />
      <style jsx>{`
        .evmos-alliance {
          min-height: 100vh;
        }
        .container {
          padding: 0 2rem;
        }
      `}</style>
    </div>
  );
};
