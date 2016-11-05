'use strict';

angular.module('myApp', [])
	.controller('choreCtrl', function($scope){
		$scope.logChore = function(task){
			alert(task + ' is done');
		};
	})
	.controller('drinkCtrl', function($scope){
		$scope.ctrlFlavor = 'Fzz';
	})
	.directive('kid', function(){
		return {
			restrict: 'E',
			scope: {
				done: '&' // & is used to call function and to invoke an expressions
			},
			template: '<input type="text" ng-model="chore">'+
				'{{chore}}<br>'+
				'<button ng-click="done({task:chore})">Done</button>'
		}
	})
	.directive('drink', function(){
		return {
			restrict: 'A',
			scope: {
				flavor: '=' // & is used to call function and to invoke an expressions
			},
			template: '<input type="text" ng-model="flavor">'
		}
	});