import { useEffect, useState } from "react";
import type { Contributor, Repository } from "../types";

export const useContributors = (repository: Repository) => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repository.owner.login}/${repository.name}/contributors`
        );

        const data = await response.json();

        setContributors(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching contributors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, [repository]);

  return { contributors, loading };
};
