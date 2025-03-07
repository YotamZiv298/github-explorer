import { useGitHubApi } from "../hooks/useGitHubApi";
import { useRepository } from "../hooks/useRepository";
import RepositoryDetails from "./RepositoryDetails";
import RepositoryList from "./RepositoryList";
import SearchBar from "./SearchBar";

function Content() {
  const { repositories, loading, error, fetchRepositories } = useGitHubApi();
  const { selectedRepo } = useRepository();

  return (
    <main className="main">
      <SearchBar onSearch={fetchRepositories} />
      {error && <div className="error-message">{error}</div>}
      {selectedRepo ? (
        <RepositoryDetails />
      ) : (
        <RepositoryList repositories={repositories} loading={loading} />
      )}
    </main>
  );
}

export default Content;
