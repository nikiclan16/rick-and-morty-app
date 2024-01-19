import Link from "next/link";
import React from "react";

interface Props {
  url: string;
}

export const BackButton = ({ url }: Props) => {
  return (
    <Link href={url}>
      <svg
        fill="#6b7280"
        height="64px"
        width="64px"
        className="mt-2 ml-5 absolute self-start transition-all hover:fill-black"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 330 330"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            id="XMLID_8_"
            d="M315,150H51.213l11.894-11.894c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0 l-37.5,37.5c-5.858,5.858-5.858,15.355,0,21.213l37.5,37.5c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.607-4.394 c5.858-5.858,5.858-15.355,0-21.213L51.213,180H315c8.284,0,15-6.716,15-15S323.284,150,315,150z"
          ></path>{" "}
        </g>
      </svg>
    </Link>
  );
};
