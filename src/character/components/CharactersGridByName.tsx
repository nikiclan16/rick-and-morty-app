import { Result } from "@/characters/interfaces/characters-response";
import Image from "next/image";
import { StatusCharacter } from "./StatusCharacter";
import { CharacterInfo } from "./CharacterInfo";

interface Props {
  character: Result;
}

const trimName = (text: string): string => {
  if (text.length > 22) {
    return text.slice(0, 22) + "...";
  } else {
    return text;
  }
};

export const CharactersGridByName = ({ character }: Props) => {
  const name = trimName(character.name);

  return (
    <div className="flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center -mr-10 -ml-10">
      <div className="text-center bg-white shadow-lg w-[80%] rounded-xl z-10 p-9 flex items-center flex-col">
        <p className="text-lg font-semibold text-gray-500">{name}</p>
        <Image
          priority
          src={character.image}
          alt={character.name}
          height={300}
          width={300}
          className="w-[40%] rounded-full my-3"
        />
        <StatusCharacter status={character.status} />
        <CharacterInfo
          info={{
            id: `${character.id}`,
            species: character.species,
            origin: character.origin.name,
            gender: character.gender,
            first_apparition: `Episode ${character.episode[0]
              .split("/")
              .at(-1)}`,
          }}
        />
      </div>
    </div>
  );
};
