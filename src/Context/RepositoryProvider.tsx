import { type ReactNode, useState } from "react";
import type { Repository } from "../types";
import { RepositoryContext } from "./RepositoryContext";

export function RepositoryProvider({ children }: { children: ReactNode }) {
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  return (
    <RepositoryContext.Provider value={{ selectedRepo, setSelectedRepo }}>
      {children}
    </RepositoryContext.Provider>
  );
}
