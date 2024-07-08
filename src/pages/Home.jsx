import Contacts from "../components/Contacts";
import Gallery from "../components/Gallery";
import Services from "../components/Services";

function Home() {
  return (
    <>
      {/* Home section */}
      <section className="bg-home">
        <div className="home-layer relative h-home bg-[rgba(255,255,255,0.3)] flex items-center justify-center text-white">
          <div className="container text-center">
            <h1 className="text-customBlue font-reddit text-6xl font-bold mb-12">Reality SimSuit</h1>
            <p className="text-customBlue font-medium  text-3xl">
              Experience immersive reality with haptic and force feedback
            </p>
            <div className="text-center my-10">
              <a href="#gallery" className="bg-customBlue outline-0 hover:text-customBlue hover:bg-white hover:ring-2 hover:ring-customBlue duration-300  px-4 py-2 mr-6">Gallery</a>
              <a href="#contacts" className="bg-customBlue outline-0 hover:text-customBlue hover:bg-white hover:ring-2 hover:ring-customBlue duration-300  px-4 py-2">Contacts</a>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <Contacts />
    </>
  );
}

export default Home;
