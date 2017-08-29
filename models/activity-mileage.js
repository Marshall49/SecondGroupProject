module.exports = function(sequelize, DataTypes) {
  var Activity_mileage = sequelize.define("activity_mileage", {
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

  Post.associate = function(models) {
    
    activity_mileage.belongsTo(models.App_users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Activity_mileage
};