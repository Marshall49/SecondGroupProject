module.exports = function(sequelize, DataTypes) {
  var Activity_mileage = sequelize.define("Activity_mileage", {
	    activity_mileage: {
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

  Activity_mileage.associate = function(models) {
<<<<<<< HEAD

    Activity_mileage.belongsTo(models.App_users, {
=======
    
    activity_mileage.belongsTo(models.App_users, {
>>>>>>> e221ed75dd20ac266f7b43f54470e19e6c7a0ce5
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Activity_mileage;
};
