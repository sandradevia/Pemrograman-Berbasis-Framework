import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>
        Selamat Datang di Website Saya!
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
        Ini adalah halaman utama. Terima kasih telah berkunjung!
      </p>
      <Link href="/about" legacyBehavior>
        <a style={{
          textDecoration: 'none',
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          Tentang Kami →
        </a>
      </Link>
    </div>
  );
};

export default HomePage;
