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
