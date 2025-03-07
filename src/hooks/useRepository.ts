import { useContext } from "react";
import { RepositoryContext } from "../context/RepositoryContext";
import { RepositoryProvider } from "../context/RepositoryProvider";

export function useRepository() {
	const context = useContext(RepositoryContext);

	if (context === undefined) {
		throw new Error(
			`${useRepository.name} must be used within a ${RepositoryProvider.name}`,
		);
	}

	return context;
}
