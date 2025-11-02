function getImgUrl(url) {
    return new URL(`../assets/movie-covers/${url}`, import.meta.url).href;
}

export { getImgUrl };