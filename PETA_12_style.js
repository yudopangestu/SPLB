var size = 0;
var placement = 'point';

var style_PETA_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "center";
    var offsetX = 15;
    var offsetY = 10;
    var feature
	var value
    var clusteredFeatures = feature.get("features");
    size = clusteredFeatures.length;
    if (size == 1) { // If cluster has one feature
        var feature = clusteredFeatures[0];
        value = clusteredFeatures[0].get("");
        if ("" !== null) {
            labelText = String("");
        }
    } else { // If cluster has more than one feature
		labelText = size.toString();
		var radius = 6 + Math.log(size) * 3;
		var maxClusterSize = 80;
		var relativeSize = Math.min(size / maxClusterSize, 1);
		var redComponent, greenComponent, blueComponent = 0;
		if (relativeSize < 0.5) {
			redComponent = Math.floor(210 * (relativeSize / 0.5));
			greenComponent = 210;
		} else {
			redComponent = 210;
			greenComponent = Math.floor(210 * (1 - (relativeSize - 0.5) / 0.5));
		}
		var color = `rgba(${redComponent}, ${greenComponent}, ${blueComponent}, 0.75)`;
		return [
			new ol.style.Style({
				image: new ol.style.Circle({
					radius: radius + 4,
					fill: new ol.style.Fill({
						color: `rgba(${redComponent}, ${greenComponent}, ${blueComponent}, 0.3)`
					})
				})
			}),
			new ol.style.Style({
				image: new ol.style.Circle({
					radius: radius,
					fill: new ol.style.Fill({
						color: color
					})
				}),
				text: new ol.style.Text({
					font: labelFont,
					text: labelText,
					fill: new ol.style.Fill({
						color: labelFill
					}),
					placement: placement
				})
			})
		];
	}
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 2.8 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.603)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(255,255,255,0.603)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 1.145454 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.603)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(250,176,124,0.603)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
