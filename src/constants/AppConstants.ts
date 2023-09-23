export enum API_STATES {
  LOADING = "loading",
  SUCCESS = "success",
  FAILED = "failed",
}

export const ROUTE_CONSTANTS = {
  NOW_PLAYING: "/now-playing",
  POPULAR: '/popular"',
  TOP_RATED: "/top-rated",
  UPCOMING: "/upcoming",
  SEARCH: "/search",
  FAVOURITE: "/favourite",
  HOME: "/",
};

export const HOME_PAGE_TABS_DATA = {
  NOW_PLAYING: {
    title: "NOW PLAYING",
    viewMoreLink: ROUTE_CONSTANTS.NOW_PLAYING,
  },
  POPULAR: { title: "POPULAR", viewMoreLink: ROUTE_CONSTANTS.POPULAR },
  TOP_RATED: { title: "TOP RATED", viewMoreLink: ROUTE_CONSTANTS.TOP_RATED },
  UPCOMING: { title: "UPCOMING", viewMoreLink: ROUTE_CONSTANTS.UPCOMING },
  HOME: { title: "HOME", viewMoreLink: ROUTE_CONSTANTS.HOME },
  SEARCH: { title: "SEARCH", viewMoreLink: ROUTE_CONSTANTS.SEARCH },
  FAVOURITE: { title: "FAVOURITE", viewMoreLink: ROUTE_CONSTANTS.FAVOURITE },
};
export const MOVIE_CARD_WIDTH = {
  HOME_PAGE: 200,
  CATEGORY_PAGE: 300,
};
