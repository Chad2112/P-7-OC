import Banner from "../Components/Banner";
import Card from "../Components/Card";
import location from "../location.json";
import "../SASS/main.css";
// import UseFetch from "../Utils/useFetch";

function Home() {
  // const [datas, isLoading] = UseFetch(`../location.json`);
  // const ll = datas;
  // console.log(ll);
  return (
    <div>
      <Banner></Banner>
      <section className="Card__content">
        {location.map((logements) => (
          <Card
            key={logements.id}
            title={logements.title}
            cover={logements.cover}
            alt={logements.title}
          />
        ))}
      </section>
    </div>
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
