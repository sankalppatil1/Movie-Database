import { SearchActionTypes } from '../../constants/ActionConstants';
import { API_STATES } from '../../constants/AppConstants';
import { ActionType, IMovie, ISearch } from '../../models/model';

export interface ISearchState {
  searchQuery: string;
  searchPage: number;
  searchResult: ISearch<IMovie> | null;
  fetchStatus: API_STATES | null;
}

const initialState: ISearchState = {
  searchQuery: '',
  searchPage: 1,
  searchResult: null,
  fetchStatus: null,
};

function reducer(state: ISearchState = initialState, action: ActionType): ISearchState {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SearchActionTypes.SET_SEARCH_PAGE:
      return {
        ...state,
        searchPage: action.payload,
      };
    case SearchActionTypes.CLEAR_SEARCH_PAGE:
      return {
        ...state,
        searchPage: 1,
      };
    case SearchActionTypes.GET_SEARCH_START:
      return {
        ...state,
        fetchStatus: API_STATES.LOADING,
      };
    case SearchActionTypes.GET_SEARCH_FAILURE:
      return {
        ...state,
        fetchStatus: API_STATES.FAILED,
      };
    case SearchActionTypes.GET_SEARCH_SUCCESS:
      const { shouldConcat } = action.payload;

      if (shouldConcat && state.searchResult) {
        return {
          ...state,
          searchResult: {
            ...action.payload.movies,
            results: [...state.searchResult.results, ...action.payload.movies.results],
          },
          fetchStatus: API_STATES.SUCCESS,
        };
      }

      return {
        ...state,
        searchResult: action.payload.movies,
        fetchStatus: API_STATES.SUCCESS,
      };

    default:
      return state;
  }
}

export default reducer;
