export interface IGreeting {
  title: string;
  quotation: {
    message: string;
    title: string;
  };
  message: string;
  host: { name: string; relation: string; parents: Parent }[];
  eventDetail: string;
}

type Parent = {
  relation: string;
  name: string;
}[];

export interface IHostInfo {
  host: string;
  accountInfo: AccountInfo;
}

export type AccountInfo = {
  name: string;
  relation: string;
  bank: string;
  account: string;
}[];

export interface ICharterInfo {
  url: string;
  schedule: Schedule;
}

export type Schedule = {
  type: string;
  position: string;
  time: string;
  toDo: string;
  location: string;
}[];

export interface IMapInfo {
  naverMap: string;
  kakaoMap: string;
  lat: number;
  lon: number;
}

export interface ILocationInfo {
  title: string;
  desc: string;
}
[];

export type LocationNotice = Array<string>;

export interface IDeveloper {
  role: string;
  name: string;
  url: string;
}
[];
