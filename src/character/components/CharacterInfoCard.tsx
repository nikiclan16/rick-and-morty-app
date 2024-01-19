import { Result } from "@/characters/interfaces/characters-response";
import Image from "next/image";
import React from "react";
import { StatusCharacter } from "./StatusCharacter";
import { CharacterInfo } from "./CharacterInfo";

interface Props {
  character: Result;
}

export const CharacterInfoCard = ({ character }: Props) => {
  return (
    <div className="bg-[#f3f6ff] flex justify-center items-center min-h-screen">
      <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
        <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-9 flex items-center flex-col">
          <p className="text-lg font-semibold text-gray-500">
            {character.name}
          </p>
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
    </div>
  );
};
