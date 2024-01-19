import React from "react";
import { CharacterCard } from "./CharacterCard";
import { SimpleCharacter } from "../interfaces/simple-character";

interface Props {
  characters: SimpleCharacter[];
}

export const CharactersGrid = ({ characters }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
