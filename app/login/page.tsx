// import Head from 'next/head';
// import LoginLayout from '../components/loginlayout';

// const Home: React.FC = () => {
//   return (
//     <div>
//       <Head>
//         <title>Next.js and Tailwind CSS Login Form</title>
//       </Head>
//       <LoginLayout />
//     </div>
//   );
// };

// export default Home;

const Login: React.FC = () => {
  return (
    <><p><a href="/api/auth/login">Login</a></p><p><a href="/api/auth/logout">Logout</a></p></>
  );
}
export default Login;
