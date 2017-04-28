var listado_opiniones = angular.module("app", []);

listado_opiniones.controller("OpinionController", ["$scope", function ($scope) {
    $scope.opiniones = [
        {
            fecha: "01/01/2017",
            nick: "Nickname 01",
            objeto: "Bar Alba",
            voto: "2",
            comentario: "La comida muy mala y muy mal trato"
        },
        {
            fecha: "02/01/2017",
            nick: "Nickname 02",
            objeto: "Taller Muñoz",
            voto: "3",
            comentario: "Un poco caro pero entregan a tiempo"
        },
        {
            fecha: "03/01/2017",
            nick: "Nickname 03",
            objeto: "Buffete Ortega",
            voto: "4",
            comentario: "Muy disponibles, me han ayudado y asesorado en cada momento"
        },
        {
            fecha: "04/01/2017",
            nick: "Nickname 04",
            objeto: "Software factory",
            voto: "5",
            comentario: "Muy buena empresa, gran equipo"
        },
    ]
    
    $scope.Save = function () {
        $scope.opiniones.push({
            fecha: $scope.nuevaOpinion.fecha,
            nick: $scope.nuevaOpinion.nick,
            objeto: $scope.nuevaOpinion.objeto,
            voto: $scope.nuevaOpinion.voto,
            comentario: $scope.nuevaOpinion.comentario,
        });
        
        $scope.formVisibility = false;
    };
    
    $scope.formVisibility = false;
    $scope.ShowForm = function () {
        $scope.formVisibility = true;
        }
}]);