export type Show = {
  score: number;
  show:singleShow;
};

export type singleShow = {
    id: number;
    url: string;
    name: string; 
    type: string; 
    language: string; 
    genres: string[]; 
    status: string; 
    runtime: number;
    averageRuntime: number;
    premiered: string; 
    ended: string; 
    yearPremiered: string; //campo aggiunto in un secondo momento 
    yearEnded: string; //campo aggiunto in un secondo momento
    officialSite: string; 
    schedule: {
      time: string; 
      days: string[]; 
    };
    rating: {
      average: number | null; 
    };
    weight: number;
    network: {
      id: number;
      name: string; 
      country: {
        name: string; 
        code: string; 
        timezone: string; 
      };
      officialSite: string | null;  
    };
    webChannel: string | null;  
    dvdCountry: string | null;  
    externals: {
      tvrage: number;
      thetvdb: number;
      imdb: string | null;  
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string; 
    updated: number;
    _links: {
      self: {
        href: string; 
      };
      previousepisode: {
        href: string; 
      };
    };
  };

export type Season = [
  bigArray: Episode,
  specialArray: Episode,
]

export type Episode = {
  id: number,
  url: string,
  name: string,
  season: number,
  number: number,
  type: string,
  airdate: string,
  airtime: string,
  airstamp: string,
  runtime: number,
  rating: {
    average: number
  },
  image: {
    medium: string,
    original: string
  },
  summary: string,
  _links: {
    self: {
      href: string
    },
    show: {
      href: string
    }
  }
}

export type Cast = {
  person: {
    id: number,
    url: string,
    name: string,
    country: {
      name: string,
      code: string,
      timezone: string
    },
    birthday: string,
    deathday: null,
    gender: string,
    image: {
      medium: string,
      original: string
    },
    updated: number,
    _links: {
      self: {
        href: string
      }
    }
  },
  character: {
    id: number,
    url: string,
    name: string,
    image: {
      medium: string,
      original: string
    },
    _links: {
      self: {
        href: string
      }
    }
  },
  self: false,
  voice: false
}