import { BackButton } from "@/character/components/BackButton";
import { CharacterInfoCard } from "@/character/components/CharacterInfoCard";
import { CharactersGridByName } from "@/character/components/CharactersGridByName";
import { CharactersResponse } from "@/characters/interfaces/characters-response";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { name: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Results with ${params.name}`,
    description: `Characters With ${params.name}.`,
  };
}

const getCharacter = async (name: string): Promise<CharactersResponse> => {
  const character = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 30,
      },
    }
  ).then((resp) => resp.json());

  return character;
};

export default async function CharacterPage({ params }: Props) {
  const { results } = await getCharacter(params.name);

  if (results === undefined) notFound();

  return (
    <div className="h-full items-center justify-center pb-20 bg-[#f3f6ff]">
      <BackButton url="/characters" />
      <h1 className="text-4xl font-bold text-gray-500 text-center mb-8 pt-14 pb-10">
        Results with: {`"${params.name}"`}
      </h1>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {results.map((character) => (
          <CharactersGridByName character={character} key={character.name} />
        ))}
      </div>
    </div>
  );
}
