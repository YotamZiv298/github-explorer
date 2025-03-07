import { createContext } from "react";
import type { Repository } from "../types";

export interface RepositoryContextType {
  selectedRepo: Repository | null;
  setSelectedRepo: (repo: Repository | null) => void;
}

export const RepositoryContext = createContext<
  RepositoryContextType | undefined
>(undefined);
