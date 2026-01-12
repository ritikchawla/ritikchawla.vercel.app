import { Html, Head, Main, NextScript } from 'next/document';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          {/* Fonts - Inter + Playfair Display */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
            rel="stylesheet"
          />

          {/* SEO Meta Tags */}
          <meta name="description" content="Ritik Chawla - Platform Engineer building distributed systems at scale. Golang, Kubernetes, and cloud-native infrastructure specialist." />
          <meta name="keywords" content="Ritik Chawla, Platform Engineer, Software Engineer, Golang, Kubernetes, Distributed Systems, DevOps, GoTo Group, Gojek" />
          <meta name="author" content="Ritik Chawla" />

          {/* Open Graph */}
          <meta property="og:title" content="Ritik Chawla - Platform Engineer" />
          <meta property="og:description" content="Building distributed systems at scale. Golang, Kubernetes, and cloud-native infrastructure." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ritikchawla.vercel.app" />
          <meta property="og:image" content="https://ritikchawla.vercel.app/pic.jpg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@ritikchawla_" />
          <meta name="twitter:title" content="Ritik Chawla - Platform Engineer" />
          <meta name="twitter:description" content="Building distributed systems at scale." />
          <meta name="twitter:image" content="https://ritikchawla.vercel.app/pic.jpg" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Theme Color */}
          <meta name="theme-color" content="#6366f1" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
