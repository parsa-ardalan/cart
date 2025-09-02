import { Geist, Geist_Mono } from "next/font/google";
import MainPage from "@/components/main-page/MainPage";
import App from "@/pages/app"
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {

  return (

    <div className="grid grid-cols-3 w-screen h-screen">

      {/* header */}

      <Header />

      {/* main part */}

      <MainPage />

      {/* footer */}

      <Footer />

      <App />

    </div>
  );
}
