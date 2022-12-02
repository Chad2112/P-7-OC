import Banner from "../Components/Banner/Banner";
import Card from "../Components/Card";
import ImgBanner from "../Assets/Banner.png";
import UseFetch from "../Components/Services/Fetch";
import "../SASS/main.css";

function Home() {
  const { locationData, isDataLoading } = UseFetch("../location.json");
  console.log(locationData);
  return (
    <main className="main">
      {isDataLoading ? (
        <main className="main">
          <div className="Banner">
            <Banner BannerCover={ImgBanner} alt="Bannière" title="Chez vous, partout et ailleurs"></Banner>
          </div>
          <section className="Card__content">
            {locationData.map((logements) => (
              <Card logementId={logements.id} key={logements.id} title={logements.title} cover={logements.cover} alt={logements.title} />
            ))}
          </section>
        </main>
      ) : (
        <div className="loader">
          <div className="loader__circle"></div>
        </div>
      )}
    </main>
  );
}

export default Home;
