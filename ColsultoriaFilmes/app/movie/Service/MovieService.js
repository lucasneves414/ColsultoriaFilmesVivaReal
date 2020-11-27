(function() {
  "use strict";

  angular.module("MovieApp").service("MovieService", MovieService);

  function MovieService(
    $q,
    $http,
    URL_TheMovieDB,
    Key_ApiUpcomingMovies,
      Key_TokenApiUpcomingMovies,
  ) {
    return {
      getMovies
      };

      //Acessa a API
      function getMovies(data, chave) {
          var transformer = new MovieTransformer();
      return $q(function(resolve, reject) {
        $http({
          method: "GET",
          url: `${URL_TheMovieDB}${Key_ApiUpcomingMovies}`,
          headers: {
            Chave: chave,
            "Content-Type": "application/json",
            Authorization: "Bearer" + Key_TokenApiUpcomingMovies
          },
          data: data
        }).then(function(response) {
          if (response.xhrStatus != "complete") {
            reject(response.statusText);
          }

            resolve(transformer.ApiToMovieList(response.data.results));
        });
      });
    }
  }
})();
