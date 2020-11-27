var MovieTransformer = (function () {

    function MovieTransformer() {
        this.ApiToMovieList = this.ApiToMovieList.bind(this);
    }

    //Formata e retorna os valores da API
    MovieTransformer.prototype.ApiToMovieList = function ApiToMovieList(data) {
        {
            var list = [];

            data.forEach(item => {
                var obj = ({
                    "video": item.video,
                    "vote_average": item.vote_average,
                    "popularity": item.popularity,
                    "vote_count": item.vote_count,
                    "release_date": item.release_date,
                    "overview": item.overview,
                    "adult": item.adult,
                    "backdrop_path": item.backdrop_path,
                    "media_type": item.media_type,
                    "genre_ids": item.genre_ids,
                    "title": item.title,
                    "original_language": item.original_language,
                    "original_title": item.original_title,
                    "poster_path": item.poster_path,
                    "id": item.id,
                    'Coracoes': []
                });
                list.push(obj);
            });

            console.log(list)

            return list;
        }
    };

    return MovieTransformer;
})();