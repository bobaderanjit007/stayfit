import Footer from "@/components/setup/Footer";
import Header from "@/components/setup/Header";
import GymBgImage from "../../public/images/gym.jpg";

export default function Home() {
  return (
    <section>
      <div
        className=" h-screen bg-cover text-white"
        style={{
          backgroundImage: `url(${GymBgImage.src})`,
        }}
      >
        <Header />
        <div className="flex flex-grow h-[calc(100%-5em)] items-end pb-[5em] justify-center w-full ">
          {/* <div className="py-[5em] px-[5vw] text-lg  border-blue-600 rounded-xl border">
            StayFit is your ultimate fitness companion, helping you stay fit and
            reach your goals.
          </div> */}
        </div>
      </div>

      <Footer />
    </section>
  );
}
