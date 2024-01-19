"use client";

import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

export const NextUIProviderClient = ({ children }: Props) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
