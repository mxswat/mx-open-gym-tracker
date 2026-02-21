import git from 'isomorphic-git';
import http from 'isomorphic-git/http/web';
import LightningFS from 'lightning-fs';
import { get, set } from 'idb-keyval';

type CloneRepositoryInput = {
  remoteUrl: string;
  branch: string;
  dir: string;
};

const FS_NAME = 'mx-gym-tracker-fs';

export class GitSyncService {
  private fs = new LightningFS(FS_NAME, {
    wipe: false,
  });

  async cloneRepository({ remoteUrl, branch, dir }: CloneRepositoryInput) {
    if (!remoteUrl) {
      throw new Error('Remote URL is required.');
    }

    await git.clone({
      fs: this.fs,
      http,
      dir,
      corsProxy: 'https://cors.isomorphic-git.org',
      url: remoteUrl,
      ref: branch,
      singleBranch: true,
      depth: 1,
    });

    await set('git:lastRemote', remoteUrl);
    await set('git:lastBranch', branch);
  }

  async getLastConnection() {
    const [remoteUrl, branch] = await Promise.all([
      get<string>('git:lastRemote'),
      get<string>('git:lastBranch'),
    ]);

    return {
      remoteUrl: remoteUrl ?? '',
      branch: branch ?? 'main',
    };
  }
}
