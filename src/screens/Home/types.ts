export interface UserDataList {
  [key: string]: UserDataType;
}

export interface UserDataType {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}
