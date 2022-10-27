import Banner from "../Components/Banner";
import Card from "../Components/Card";
import ImgBanner from "../Assets/Banner.png";
import UseFetch from "../Components/Fetch";
import "../SASS/main.css";

function Home() {
  const { locationData, isDataLoading } = UseFetch("../location.json");
  return (
    <main className="main">
      <Banner
        BannerCover={ImgBanner}
        alt="Bannière"
        title="Chez vous, partout et ailleurs"
      ></Banner>
      <section className="Card__content">
        {locationData.map((logements) => (
          <Card
            Link
            logementId={logements.id}
            key={logements.id}
            title={logements.title}
            cover={logements.cover}
            alt={logements.title}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;

// <div>
//       <CardsContainer>
//         {location.map((logements, id) => (
//           <div key={logements.id} name={logements.title} cover={logements.cover} />
//         ))}
//       </CardsContainer>
//     </div>
