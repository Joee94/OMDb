export type State = {
	searchValue: string,
	movies: Movies,
	response: ApiResponse,
	cache: Cache,
	filters: Filters,
	page: number,
	totalResults: number
};

export type Cache = { [movieName]: { movies: Array<MovieData>, page: number, totalResults: number } };

export type Movies = Array<MovieData>;

export type ApiResponse = {
	loading: boolean,
	error: string
};

//export type ApiResponse = {
//	ApiResponse: 'True' | 'False',
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
	ApiResponse: string
};
export type Rating = {
	Source: string,
	Value: string
};

export type Filters = {
	year: number
};
