module.exports = function(sequelize, DataTypes) {
  var User_weight = sequelize.define("user_weight", {
	    user_weight: {
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

  User_weight.associate = function(models) {
    
    user_weight.belongsTo(models.App_users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User_weight
};
