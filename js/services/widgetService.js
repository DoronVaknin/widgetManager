WidgetManager.service('widgetService', function() {
  var widgets = [];

  var addWidget = function(id) {
    var kvp = {};
    for (var i = 0; i < 5; i++) {
      kvp['widget' + id + '_key' + i] = 'widget' + id + '_value' + i;
    }

    widgets.push({
      id: id,
      name: 'widget ' + id,
      kvp: kvp
    });
  };

  var getWidgets = function(id) {
    if (id) {
      for (var i = 0; i < widgets.length; i++) {
        var widget = widgets[i];
        if (widget.id == id) {
          return widgets[i];
        }
      }
    } else
      return widgets;
  };

  var getWidgetIndex = function(id) {
    for (var i = 0; i < widgets.length; i++) {
      var widget = widgets[i];
      if (widget.id == id) {
        return i;
      }
    }
  };

  var removeWidget = function(id) {
    var widgetIndex = getWidgetIndex(id);
    widgets.splice(widgetIndex, 1);
  };

  return {
    addWidget: addWidget,
    getWidgets: getWidgets,
    removeWidget: removeWidget
  };
});