import { action, computed, makeObservable, observable } from 'mobx';
import { fromPromise, IPromiseBasedObservable } from 'mobx-utils';
import { getData } from './httpService';
import { dummyBranches } from './dummyData/branches';
import type { Branch } from './types';

class BranchesStore {
  @observable branch: Branch = {
    name: 'master',
    created_at: new Date(),
    modified_at: new Date(),
  };
  @observable _branches:
    | IPromiseBasedObservable<undefined | Branch[]>
    | undefined = undefined;

  constructor() {
    makeObservable(this);
  }

  @action.bound changeBranch(branch: Branch) {
    this.branch = branch;
  }

  private async getBranches() {
    return getData('/branches', dummyBranches);
  }

  @computed get branches() {
    if (!this._branches) {
      this._branches = fromPromise(this.getBranches());
    }

    return this._branches;
  }
}

export const branchesStore = new BranchesStore();
