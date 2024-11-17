import Footer from "@/components/setup/Footer";
import Header from "@/components/setup/Header";
// import GymBgImage from "../../public/images/homePage.png";

export default function Home() {
  return (
    <section>
      <div
        className=" h-screen bg-cover text-white"
        style={{
          backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-an-old-gym-setting-with-dumbbells-image_2569910.jpg")`,
        }}
      >
        <Header />
        <div className="flex flex-grow h-[calc(100%-5em)] items-end pb-[5em] justify-center w-full ">
          <div className="py-[5em] px-[5vw] text-lg  border-blue-600 rounded-xl border">
            StayFit is your ultimate fitness companion, helping you stay fit and
            reach your goals.
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
