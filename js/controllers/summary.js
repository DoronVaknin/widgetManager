WidgetManager.controller('summaryCtrl', function($scope, $uibModal, $log, widgetService) {
	if (widgetService.getWidgets().length == 0)
		for (var i = 1; i <= 8; i++) {
			widgetService.addWidget(i);
		}
	$scope.widgets = $scope.widgets = widgetService.getWidgets();

	$scope.askWidgetRemoval = function(id) {
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'templates/modal.html',
			controller: 'ModalInstanceCtrl',
			resolve: {
				widget: function() {
					return widgetService.getWidgets(id);
				}
			}
		});
		modalInstance.result.then(function(id) {
			widgetService.removeWidget(id);
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
})

.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, widget) {
	$scope.widget = widget;

	$scope.removeWidget = function(id) {
		$uibModalInstance.close(id);
	};
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
});