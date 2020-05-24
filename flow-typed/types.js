export type State = {
	searchValue: string,
	movies: Movies,
	response: Response,
	cache: Cache,
	filters: Filters
};

export type Cache = { [movieName]: Array<MovieData> };

export type Movies = Array<MovieData>;

export type Response = {
	loading: boolean,
	error: boolean
};

//export type Response = {
//	Response: 'True' | 'False',
//	Search: Array<MovieData>,
//	totalResults: string
//};

export type MovieData = {
	Title: string,
	Year: string,
	Rated: string,
	Released: string,
	Runtime: string,
	Genre: string,
	Director: string,
	Writer: string,
	Actors: string,
	Plot: string,
	Language: string,
	Country: string,
	Awards: string,
	Poster: string,
	Ratings: Array<Rating>,
	Metascore: string,
	imdbRating: string,
	imdbVotes: string,
	imdbID: string,
	Type: 'movie' | 'series' | 'episode',
	DVD: string,
	BoxOffice: string,
	Production: string,
	Website: string,
	Response: string
};
export type Rating = {
	Source: string,
	Value: string
};

export type Filters = {
	year: number
};
