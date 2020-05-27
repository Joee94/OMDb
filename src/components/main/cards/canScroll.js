// @flow

const canScroll = (document: Document, loading: boolean, movies: Movies, totalResults: number): boolean => {
	const documentElement = document.documentElement;
	if (!documentElement) return false;
	if (loading) return false;
	if (movies.length >= totalResults) return false;
	if (window.innerHeight + documentElement.scrollTop <= documentElement.offsetHeight - 50) return false;
	return true;
};

export default canScroll;
