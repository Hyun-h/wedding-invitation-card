export interface IGreeting {
  title: string;
  quotation: {
    message: string;
    title: string;
  };
  message: string;
  host: {
    groom: {
      name: string;
      relation: string;
      parents: Parent;
    };
    bride: {
      name: string;
      relation: string;
      parents: Parent;
    };
  };
  eventDetail: string;
}

export interface IHostInfo {
  host: string;
  accountInfo: {
    name: string;
    relation: string;
    bank: string;
    account: string;
  }[];
}

export interface IMapInfo {
  address1: string;
  address2: string;
  naverMap: string;
  kakaoMap: string;
  lat: number;
  lon: number;
}

export interface ILocationInfo {
  title: string;
  desc: string;
}

export interface ILocationNotice {
  notice1: string;
  notice2: string;
  notice3: string;
}

type Parent = {
  relation: string;
  name: string;
}[];
