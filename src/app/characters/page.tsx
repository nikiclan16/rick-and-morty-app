import { CharactersGrid } from "@/characters/components/CharactersGrid";
import { Result } from "@/characters/interfaces/characters-response";

export const metadata = {
  title: "Rick and Morty Characters",
  description: "Alls characters.",
};

const getCharacters = async () => {
  let arreglo = new Array(100);
  for (let i = 1; i <= 100; i++) {
    arreglo[i] = i;
  }

  const data: Result[] = await fetch(
    `https://rickandmortyapi.com/api/character/${arreglo}`
  ).then((res) => res.json());

  const characters = data.map((character) => ({
    id: `${character.id}`,
    name: character.name,
    status: character.status,
    species: character.species,
    origin: character.origin.name,
    location: character.location.name,
    Image: character.image,
  }));

  return characters;
};

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <>
      <div className="flex flex-col py-8 bg-[#f3f6ff]">
        <h1 className="text-3xl font-bold text-gray-500 text-center mb-8">
          First 100 Rick and Morty characters.
        </h1>
        <CharactersGrid characters={characters} />
      </div>
    </>
  );
}
