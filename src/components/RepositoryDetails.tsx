import { memo } from "react";
import { useContributors } from "../hooks/useContributors";
import { useRepository } from "../hooks/useRepository";

function RepositoryDetails() {
  const { selectedRepo, setSelectedRepo } = useRepository();
  const { contributors, loading } = useContributors(selectedRepo!);

  if (!selectedRepo) return null;

  return (
    <div className="repository-details">
      <button
        type="button"
        onClick={() => setSelectedRepo(null)}
        className="back-button"
      >
        ← Back to List
      </button>

      <div className="repo-header">
        <h1>{selectedRepo.name}</h1>
        <p className="repo-description">{selectedRepo.description}</p>
      </div>

      <div className="repo-stats-details">
        <div className="stat-item">
          <span>⭐ Stars: {selectedRepo.stargazers_count}</span>
        </div>
        <div className="stat-item">
          <span>📝 Language: {selectedRepo.language}</span>
        </div>
        <div className="stat-item">
          <span>
            📅 Last Updated:{" "}
            {new Date(selectedRepo.updated_at).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="contributors-section">
        <h2>Top Contributors</h2>
        {loading ? (
          <p>Loading contributors...</p>
        ) : (
          <div className="contributors-list">
            {contributors.map((contributor) => (
              <div key={contributor.id} className="contributor-item">
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="contributor-avatar"
                />
                <div className="contributor-info">
                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contributor-name"
                  >
                    {contributor.login}
                  </a>
                  <span className="commit-count">
                    - {contributor.contributions} commits
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(RepositoryDetails);
