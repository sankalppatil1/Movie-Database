import {IMovieDetails } from "../../models/model"
import { getFormattedDate } from "../../Utility/Utilities"

export const getMovieDetailsKeyValueArray = (movieData: IMovieDetails) => {
    return [
        {
            key: 'Genre',
            value: movieData.genres.map(data=>data.name).join(', ')
        },
        {
            key: 'Release Date',
            value: getFormattedDate(movieData.release_date)
        },
        {
            key: 'Rating',
            value: `${movieData.vote_average} / 10`
        },
        {
            key: 'Language',
            value: movieData.original_language
        },
        {
            key: 'Status',
            value: movieData.status
        },
        {
            key: 'Budget',
            value: `$ ${movieData.budget.toLocaleString()}`
        },
        {
            key: 'Website',
            value: movieData.homepage,
            redirection: ()=> window.open(movieData.homepage, 'blank')
        },
    ]
}