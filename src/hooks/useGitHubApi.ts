import { useCallback, useState } from "react";
import type { Repository } from "../types";

export const useGitHubApi = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRepositories = useCallback(async (username: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      if (!response.ok) {
        throw new Error("User not found or API error");
      }

      const data = await response.json();

      setRepositories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setRepositories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { repositories, loading, error, fetchRepositories };
};
