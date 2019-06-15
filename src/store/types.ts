export interface RootState {
  version: string
}

export interface AppState {
  loggedIn: boolean,
  title: string,
  back: boolean,
  levelNumber: string,
  levelName: string,
  time: number
}
