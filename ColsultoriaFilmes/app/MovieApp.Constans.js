(function () {
    'use strict';

    var UrlAndKeys = GetContans();
    angular
        .module('MovieApp.Constants', [])
        .constant('URL_TheMovieDB', UrlAndKeys[0].themoviedb + '4/list/7065376?page=1&api_key=')
        .constant('Key_ApiUpcomingMovies', UrlAndKeys[1].apiupcomingmovies)
        .constant('Key_TokenApiUpcomingMovies', UrlAndKeys[1].tokenapiupcomingmovies)
        .constant('URL_ImageTMovieDB', UrlAndKeys[0].imagetmoviedb);

    function GetContans() {
        var urls = {};
        var key = {};

        //URL. 0 no array
        urls.themoviedb = 'https://api.themoviedb.org/';
        //Key 1 no array
        key.apiupcomingmovies = "1ff39bd9996698f4d30a01dc4cd82e72";
        //Key 1 no array - Segunda Posição
        key.tokenapiupcomingmovies = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmYzOWJkOTk5NjY5OGY0ZDMwYTAxZGM0Y2Q4MmU3MiIsInN1YiI6IjVmYjY4MmFlOWFlNjEzMDA0MGE0OGNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Svg3CDkRd6rLZdlw1vsEaQg_berGnIK_H7jQ6lRhF18";
        //URL. 2 no array
        urls.imagetmoviedb = 'https://image.tmdb.org/t/p/original';

        var UrlAndKeys = [urls, key]
        return UrlAndKeys;
     };
})();