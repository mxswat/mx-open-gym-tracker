import { FormEvent, useMemo, useState } from 'react';
import { GitSyncService } from '../services/gitSyncService';

export function SyncRoute() {
  const gitSync = useMemo(() => new GitSyncService(), []);
  const [remoteUrl, setRemoteUrl] = useState('');
  const [branch, setBranch] = useState('main');
  const [status, setStatus] = useState('Idle');

  async function handleClone(event: FormEvent) {
    event.preventDefault();

    setStatus('Cloning...');
    try {
      await gitSync.cloneRepository({
        remoteUrl,
        branch,
        dir: '/gym-data',
      });
      setStatus('Clone complete.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Clone failed');
    }
  }

  return (
    <section>
      <h2>Headless Git Sync</h2>
      <p>
        Connect to a remote git repository without shelling out to the system git
        binary. This mirrors Obsidian-style repository sync workflows.
      </p>

      <form onSubmit={handleClone} className="sync-form">
        <label>
          Remote URL
          <input
            type="url"
            value={remoteUrl}
            onChange={(event) => setRemoteUrl(event.target.value)}
            required
            placeholder="https://github.com/org/repo.git"
          />
        </label>

        <label>
          Branch
          <input
            type="text"
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
            placeholder="main"
          />
        </label>

        <button type="submit">Clone Repository</button>
      </form>

      <p className="status">Status: {status}</p>
    </section>
  );
}
