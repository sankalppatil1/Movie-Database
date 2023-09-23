import { HOME_PAGE_TABS_DATA } from "../../../constants/AppConstants"
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const getHeaderTabsData = () => {
    return [
        {   title: HOME_PAGE_TABS_DATA.HOME.title,
            redirectionLink: HOME_PAGE_TABS_DATA.HOME.viewMoreLink,
            icon: HomeIcon
        },
        {   title: HOME_PAGE_TABS_DATA.FAVOURITE.title,
            redirectionLink: HOME_PAGE_TABS_DATA.FAVOURITE.viewMoreLink,
            icon: FavoriteBorderIcon
        },
        {   title: HOME_PAGE_TABS_DATA.POPULAR.title,
            redirectionLink: HOME_PAGE_TABS_DATA.POPULAR.viewMoreLink,
            icon: MovieIcon
        },
        {   title: HOME_PAGE_TABS_DATA.TOP_RATED.title,
            redirectionLink: HOME_PAGE_TABS_DATA.TOP_RATED.viewMoreLink,
            icon: ArrowCircleUpIcon
        },
        {   title: HOME_PAGE_TABS_DATA.NOW_PLAYING.title,
            redirectionLink: HOME_PAGE_TABS_DATA.NOW_PLAYING.viewMoreLink,
            icon: PlayArrowIcon
        },
        {   title: HOME_PAGE_TABS_DATA.UPCOMING.title,
            redirectionLink: HOME_PAGE_TABS_DATA.UPCOMING.viewMoreLink,
            icon: UpcomingIcon
        },
        {   title: HOME_PAGE_TABS_DATA.SEARCH.title,
            redirectionLink: HOME_PAGE_TABS_DATA.SEARCH.viewMoreLink,
            icon: SearchIcon
        },
    ]
}