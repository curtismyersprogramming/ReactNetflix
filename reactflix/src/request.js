const API_Key = "a213a8201ee39253d618e7127088e64a";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchNetflixO: `/discover/tv?api_key=${API_Key}&with_networks=213`,
    fetchAction: `/discover/movie?api_key=${API_Key}&with_genre=28`,
    fetchComedy: `/discover/movie?api_key=${API_Key}&with_genre=35`,
    fetchHorror: `/discover/movie?api_key=${API_Key}&with_genre=27`,
    fetchRomance: `/discover/movie?api_key=${API_Key}&with_genre=10749`,
    fetchDoc: `/discover/movie?api_key=${API_Key}&with_genre=99`,
}

export default requests;