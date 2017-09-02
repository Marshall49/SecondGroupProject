module.exports = function(sequelize, DataTypes) {
  var User_calories = sequelize.define("User_calories", {
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
		}
	});

  User_calories.associate = function(models) {

    User_calories.belongsTo(models.App_users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User_calories;
};
