WidgetManager.controller('detailCtrl', function($scope, $stateParams, widgetService) {
	$scope.widget = widgetService.getWidgets($stateParams.id);
});