(function() {
  "use strict";

  angular.module("MovieApp").controller("MovieController", MovieController);

  function MovieController(MovieService, URL_ImageTMovieDB) {
      var vm = this;

    //URL raiz do site TheMovie. Usada pra completar as imagens que retornam da API
    vm.URLImage = URL_ImageTMovieDB;

    //Controla as telas a serem exibidas
    vm.Screen = "NCurados";

    vm.SynopseModalDesktop = SynopseModalDesktop; //Funcao que ativa sinopse na tela principal - Desktop
    vm.SynopseOnLikesDeslikes = SynopseOnLikesDeslikes; //Funcao que ativa sinopse das telas de Curtidos e Não - Desktop
    vm.SynopseOnFromLikesDeslikes = false; //Usada no ngif que abilita as sinopses das telas de Curtidos e Não - Desktop

    vm.AnimeMenu = AnimeMenu; //Funcao que anima o menu - Desktop

    //Funcções que montam os respectivos arrays ou só pulam
    vm.Liked = Liked;
    vm.Disliked = Disliked;
    vm.Jumped = Jumped;

    //Variavel que conta os objetos dentro do array - Principalmente usada no Array de objetos da tela principal
    vm.Index = 0;

    //Variaveis que contam os objetos de seus arrays
    var DislikedIndex = 0;
    var LikedIndex = 0;
    vm.JumpedIndex = 0;

    //Que se tornam os arrays/listas dos filmes
    vm.List = [];
    vm.LikedMovies = [];
    vm.DislikedMovies = [];

    vm.SynopseModal = SynopseModal; //Função que ativa o modal sinopse - Mobile
    vm.SynopseOn = false; //Variavel que ativa o modal sinopse - Mobile

    vm.EvaluationFunc = EvaluationFunc; //Funcao que calcula os corações

    vm.Resolution = screen.width; //Pra saber a resolução da tela / Usada no loadind da page pra carregar html correto. PS: O HTML correto pra resoluaão da tela só carrega ao reiniciar a pagina na respectiva resolução.

    //Que conta o array de objetos de Filmes Curtidos para exibir os corações
    vm.IndexLikesCoracao = 0;

    function init() {
      GetMovies();
    }

    init();

    //Traz o retorno da API - Lista de Filmes
    function GetMovies() {
      MovieService.getMovies()
        .then(response => {
          vm.MoviesList = response;
          UpdateMovie();
        })
        .catch(error => {
          alert("Erro ao trazer a Lista!");
        });
    }

    //Monta o array de Filmes Curtidos
    function Liked() {
      if (vm.List.length <= vm.Index) return;
      vm.LikedMovies[LikedIndex] = vm.List[vm.Index];
      var nota = vm.LikedMovies[vm.IndexLikesCoracao].vote_average;
      var EvaluationIndex = vm.IndexLikesCoracao;

      //Calcula os corações que foram inserindos juntos do objeto do filme
      if (nota <= 2) {
        vm.LikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      if (nota <= 4 && nota > 2) {
        vm.LikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      if (nota <= 6 && nota > 4) {
        vm.LikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      if (nota <= 8 && nota > 6) {
        vm.LikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite_.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      if (nota <= 10 && nota > 8) {
        vm.LikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      vm.Index++;
      vm.IndexLikesCoracao++;
      LikedIndex++;
      UpdateMovie();
    }

    //Monta o array de Filmes não Curtidos
    function Disliked() {
      if (vm.List.length <= vm.Index) return;
      vm.DislikedMovies[DislikedIndex] = vm.List[vm.Index];
      var nota = vm.DislikedMovies[DislikedIndex].vote_average;
      var EvaluationIndex = DislikedIndex;

      //Calcula os corações inserindos juntos do objeto do filme
      if (nota <= 2) {
        vm.DislikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      if (nota <= 4 && nota > 2) {
        vm.DislikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      if (nota <= 6 && nota > 4) {
        vm.DislikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite_.png" },
          { link: "../assets/favorite_.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      if (nota <= 8 && nota > 6) {
        vm.DislikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite_.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      if (nota <= 10 && nota > 8) {
        vm.DislikedMovies[EvaluationIndex].Coracoes.push([
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" },
          { link: "../assets/favorite.png" }
        ]);

        vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
      }

      vm.Index++;
      DislikedIndex++;
      UpdateMovie();
    }

    //Pula um filme da lista
    function Jumped() {
      if (vm.List.length <= vm.Index) return;

      vm.Index++;
      UpdateMovie();
    }

    //Função que calcula as imagens(corações) de cada filme apartir da nota. PS: *Usada na tela inicial
    function EvaluationFunc(data, index) {
      if (data == vm.MoviesList) {
        var nota = vm.MoviesList[vm.Index].vote_average;
        var EvaluationIndex = vm.Index;

        if (nota <= 2) {
          vm.Evaluation = [
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite_.png" },
            { link: "../assets/favorite_.png" },
            { link: "../assets/favorite_.png" },
            { link: "../assets/favorite_.png" }
          ];

          vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
        }

        if (nota <= 4 && nota > 2) {
          vm.Evaluation = [
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite_.png" },
            { link: "../assets/favorite_.png" },
            { link: "../assets/favorite_.png" }
          ];

          vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
        }

        if (nota <= 6 && nota > 4) {
          vm.Evaluation = [
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite_.png" },
            { link: "../assets/favorite_.png" }
          ];

          vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
        }

        if (nota <= 8 && nota > 6) {
          vm.Evaluation = [
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite_.png" }
          ];

          vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
        }

        if (nota <= 10 && nota > 8) {
          vm.Evaluation = [
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" },
            { link: "../assets/favorite.png" }
          ];

          vm.EvaluationsCount = vm.List[EvaluationIndex].vote_count;
        }
      }
    }

    //Função que exibe os valores da API na View
    function UpdateMovie() {
      if (vm.MoviesList.length > vm.Index) {
        vm.List = vm.MoviesList;
      }

      if (vm.Index < vm.List.length) {
        vm.MovieTitle =
          vm.List[vm.Index].original_title.length >= 15
            ? vm.List[vm.Index].original_title.substring(0, 18) + "..."
            : vm.List[vm.Index].original_title;
        vm.MovieTitleSynopse = vm.List[vm.Index].original_title;
        vm.PosterImage = `${vm.URLImage}` + `${vm.List[vm.Index].poster_path}`;
        vm.Evaluation = [];
        vm.SinopePreview = vm.List[vm.Index].overview.substring(0, 23) + "...";
        vm.SynopseComplete = vm.List[vm.Index].overview;
        EvaluationFunc(vm.MoviesList, "nopass");

        //Feita para Desktop
        vm.SinopePreviewDesktop =
          vm.List[vm.Index].overview.substring(0, 95) + "...";
      }
    }

    //Funções que ativam os modais de sinopse
    function SynopseModal() {
      vm.SynopseOn = vm.SynopseOn == false ? true : false;
    }

    function SynopseModalDesktop() {
      vm.SynopseOn = vm.SynopseOn == false ? true : false;
    }

    function SynopseOnLikesDeslikes() {
      vm.SynopseOnFromLikesDeslikes =
        vm.SynopseOnFromLikesDeslikes == false ? true : false;
    }

    function AnimeMenu() {
      $(".li-anime-desktop").on("click", "li", function() {
        $(this)
          .siblings()
          .removeClass("active-desktop");
        $(this).addClass("active-desktop");
      });
    }
  }
})();
