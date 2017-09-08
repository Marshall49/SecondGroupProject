//Define arrays for plot data sets
var calorieX = [];
var calorieY = [];
var weightX = [];
var weightY = [];
var mileageX = [];
var mileageY = [];
db.user_caloriesBurned.findAll({
 	attributes: calories_burned,
  	limit: 5,
  	where: {
    	user_name = JDavis;
  	},
  	order: [ [ 'createdAt', 'DESC' ]]
}).then(function(entries){
  calorieY = entries
}); 

db.user_caloriesBurned.findAll({
 	attributes: week,
  	limit: 5,
  	where: {
    	user_name = JDavis;
  	},
  	order: [ [ 'createdAt', 'DESC' ]]
}).then(function(entries){
  calorieX = entries
}); 
var calorieTrace = {

 	x: calorieX, 
 	y: calorieY, 
 	type: 'scatter'
};

db.user_weight.findAll({
 	attributes: current_weight,
  	limit: 5,
  	where: {
    	user_name = JDavis;
  	},
  	order: [ [ 'createdAt', 'DESC' ]]
}).then(function(entries){
  weightY = entries
}); 

db.user_weight.findAll({
 	attributes: week,
  	limit: 5,
  	where: {
    	user_name = JDavis;
  	},
  	order: [ [ 'createdAt', 'DESC' ]]
}).then(function(entries){
  weightX = entries
}); 

var weightTrace = {
 	x: weightX, 
 	y: weightY, 
 	type: 'scatter'
};

db.user_mileage.findAll({
 	attributes: total_mileage,
  	limit: 5,
  	where: {
    	user_name = JDavis;
  	},
  	order: [ [ 'createdAt', 'DESC' ]]
}).then(function(entries){
  activityY = entries
}); 

db.user_mileage.findAll({
 	attributes: week,
  	limit: 5,
  	where: {
    	user_name = JDavis;
  	},
  	order: [ [ 'createdAt', 'DESC' ]]
}).then(function(entries){
  activityX = entries
});
var mileageTrace = {
 	x: mileageX, 
 	y: mileageY, 
 	type: 'scatter'
};

var dataCalorie = [calorieTrace];
var dataWeight = [weightTrace];
var dataMileage = [mileageTrace];

var calorieLayout = {
  title: 'Calories Burned Per Week',
  xaxis: {
    title: 'Week',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  },
  yaxis: {
    title: 'Calories',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  }
};

var weightLayout = {
  title: 'Weight Per Week',
  xaxis: {
    title: 'Week',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  },
  yaxis: {
    title: 'Weight',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  }
};

var mileageLayout = {
  title: 'Activity in Mileage Per Week',
  xaxis: {
    title: 'Week',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  },
  yaxis: {
    title: 'Mileage',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  }
};

Plotly.newPlot('caloriePlot', dataCalorie, calorieLayout);

Plotly.newPlot('weightPlot', dataWeight, weightLayout);

Plotly.newPlot('mileagePlot', dataMileage, mileageLayout);