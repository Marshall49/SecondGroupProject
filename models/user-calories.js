module.exports = function(sequelize, DataTypes) {
  var User_calories = sequelize.define("user_calories", {
	    user_calories: {
	      type: DataTypes.INTEGER,
	      allowNull: false,
	      validate: {
	        len: [1]
	      }
	    },
	    week: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
		};
	});

  Post.associate = function(models) {
    
    user_calories.belongsTo(models.App_users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User_calories
};