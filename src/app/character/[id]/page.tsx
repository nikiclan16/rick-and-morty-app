import { Result } from "../../../characters/interfaces/characters-response";
import { BackButton } from "@/character/components/BackButton";
import { CharacterInfoCard } from "@/character/components/CharacterInfoCard";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const static150Characters = Array.from({ length: 100 }).map(
    (v, i) => `${i + 1}`
  );

  return static150Characters.map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getCharacter(params.id);

    return {
      title: `#${id} - ${name}`,
      description: `Info of ${name}`,
    };
  } catch (error) {
    return {
      title: "Page of character",
      description: "Rick and Morty Character.",
    };
  }
}

const getCharacter = async (id: string): Promise<Result> => {
  const character = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    {
      next: {
        revalidate: 60 * 60 * 24 * 30,
      },
    }
  ).then((resp) => resp.json());

  return character;
};

export default async function CharacterPage({ params }: Props) {
  const character = await getCharacter(params.id);

  if (character.name === undefined) notFound();

  return (
    <>
      <BackButton url="/characters" />
      <CharacterInfoCard character={character} />
    </>
  );
}
