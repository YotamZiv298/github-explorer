import { memo, useCallback, useState } from "react";
import { useRepository } from "../hooks/useRepository";
import type { Repository } from "../types";

interface RepositoryListProps {
  repositories: Repository[];
  loading: boolean;
}

function RepositoryList({ repositories, loading }: RepositoryListProps) {
  const [sortByStars, setSortByStars] = useState(false);
  const { setSelectedRepo } = useRepository();

  const handleRepoSelect = useCallback(
    (repo: Repository) => {
      setSelectedRepo(repo);
    },
    [setSelectedRepo]
  );

  const sortedRepositories = sortByStars
    ? [...repositories].sort((a, b) => b.stargazers_count - a.stargazers_count)
    : repositories;

  if (loading) {
    return <div className="loading">Loading repositories...</div>;
  }

  return (
    <div className="repository-list">
      {repositories.length > 0 && (
        <button
          type="button"
          onClick={() => setSortByStars((prev) => !prev)}
          className="sort-button"
        >
          Sort by Stars
        </button>
      )}
      <div className="repos-grid">
        {sortedRepositories.map((repo) => (
          <div
            key={repo.id}
            className="repo-card"
            onClick={() => handleRepoSelect(repo)}
            onKeyDown={(e) => e.key === "Enter" && handleRepoSelect(repo)}
          >
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available"}</p>
            <div className="repo-stats">
              <span>⭐ {repo.stargazers_count}</span>
              <span>{repo.language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(RepositoryList);
