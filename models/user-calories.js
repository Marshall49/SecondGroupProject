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
<<<<<<< HEAD

    User_calories.belongsTo(models.App_users, {
=======
    
    user_calories.belongsTo(models.App_users, {
>>>>>>> e221ed75dd20ac266f7b43f54470e19e6c7a0ce5
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User_calories;
};
