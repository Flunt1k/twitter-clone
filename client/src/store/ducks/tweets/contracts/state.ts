export enum LoadingState {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export interface Tweet {
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  text: string;
}

export interface TweetsState {
  items: Tweet[]
  loadingState: LoadingState
}
