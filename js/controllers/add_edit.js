WidgetManager.controller('addEditCtrl', function($scope, $stateParams, widgetService) {
	$scope.widget = widgetService.getWidgets($stateParams.id);
});