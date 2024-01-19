interface Props {
  info: { [key: string]: string };
}

const formatKey = (key: string): string => {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

export const CharacterInfo = ({ info }: Props) => {
  return (
    <>
      {Object.entries(info).map(([key, value]) => (
        <span key={key} className="mt-1 text-base font-semibold text-gray-500">
          {`${formatKey(key)}: ${value}`}
        </span>
      ))}
    </>
  );
};
