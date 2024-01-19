import React from "react";
import { SimpleCharacter } from "../interfaces/simple-character";
import Image from "next/image";
import Link from "next/link";

interface Props {
  character: SimpleCharacter;
}

export const CharacterCard = ({ character }: Props) => {
  const trimName = (text: string): string => {
    if (text.length > 13) {
      return text.slice(0, 13) + "...";
    } else {
      return text;
    }
  };

  const name = trimName(character.name);
  const species = trimName(character.species);

  return (
    <Link href={`/character/${character.id}`}>
      <div className="mx-auto">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <Image
            width={200}
            height={200}
            className="w-full rounded-lg object-cover object-center"
            src={character.Image}
            alt={character.name}
          />
          <p className="mt-4 pl-4 font-bold text-gray-500">{name}</p>
          <p className="mt-1 pl-4 font-bold text-gray-500">{species}</p>
          <p
            className={`my-1 pl-4 font-bold ${
              character.status === "Alive"
                ? "text-green-600"
                : character.status === "Dead"
                ? "text-red-700"
                : "text-gray-500"
            }`}
          >
            {character.status}
          </p>
        </div>
      </div>
    </Link>
  );
};
