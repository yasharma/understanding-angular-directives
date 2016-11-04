'use strict';

angular.module('myApp', [])
	.controller('choreCtrl', function($scope){
		$scope.logChore = function(task){
			console.log(task, ' is done');
		};
	})
	.directive('kid', function(){
		return {
			restrict: 'E',
			scope: {
				done: '&' // & is used to call function and for expressions
			},
			template: '<input type="text" ng-model="chore">'+
				'{{chore}}'+
				'<button ng-click="done({task:chore})">Done</button>'
		}
	});