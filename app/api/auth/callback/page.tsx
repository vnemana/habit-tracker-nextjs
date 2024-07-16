import ProfileClient from "@/app/components/client";
import Head from "next/head";
const LoggedIn: React.FC = () => {
    return (
      <div>
        <Head>
          <title>You are logged in!</title>
        </Head>
        <p>Hurray!</p>
        <ProfileClient/>
        <p>Displayed Profile client</p>
      </div>
    );
  };
  
  export default LoggedIn;