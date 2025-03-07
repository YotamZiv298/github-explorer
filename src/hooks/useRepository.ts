import { useContext } from "react";
import { RepositoryContext } from "../Context/RepositoryContext";
import { RepositoryProvider } from "../Context/RepositoryProvider";

export function useRepository() {
  const context = useContext(RepositoryContext);

  if (context === undefined) {
    throw new Error(
      `${useRepository.name} must be used within a ${RepositoryProvider.name}`
    );
  }

  return context;
}
