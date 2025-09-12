import Card from "../components/card";
import Header from "../components/header";

const pokemons = [
  { id: 1, name: "Bulbasaur", image: "/bulbasaur.png", types: ["Grass", "Poison"] },
  { id: 4, name: "Charmander", image: "/charmander.png", types: ["Fire"] },
  { id: 7, name: "Squirtle", image: "/squirtle.png", types: ["Water"] },
  { id: 2, name: "Ivysaur", image: "/ivysaur.png", types: ["Grass", "Poison"] },
  { id: 5, name: "Charmeleon", image: "/charmeleon.png", types: ["Fire"] },
  { id: 8, name: "Wartortle", image: "/wartortle.png", types: ["Water"] },
];

export default function Page() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 px-[142px]">
        {pokemons.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            types={item.types}
          />
        ))}
      </div>
    </div>
  );
}
