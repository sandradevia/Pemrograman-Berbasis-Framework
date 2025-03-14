// pages/users/[id].js
import { useRouter } from 'next/router';

const UserDetail = ({ user }) => {
  const router = useRouter();

  // Jika halaman sedang di-render secara dinamis (mungkin saat halaman sedang dimuat)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

// Mengambil daftar ID pengguna untuk dijadikan rute dinamis
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() }, // Menyusun ID sebagai string untuk rute dinamis
  }));

  return { paths, fallback: true }; // fallback:true untuk mendukung SSG dinamis
};

// Mengambil data pengguna berdasarkan ID untuk ditampilkan
export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return {
    props: {
      user, // Mengirimkan data pengguna ke komponen
    },
  };
};

export default UserDetail;
