export interface User {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  rank?: number;
}

export interface AppState {
  users: User[];
  searchedUser: string | null;
}
