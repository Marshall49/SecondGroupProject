module.exports = function(sequelize, DataTypes) {
  var User_weight = sequelize.define("User_weight", {
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
		}
	});

  User_weight.associate = function(models) {
<<<<<<< HEAD

    User_weight.belongsTo(models.App_users, {
=======
    
    user_weight.belongsTo(models.App_users, {
>>>>>>> e221ed75dd20ac266f7b43f54470e19e6c7a0ce5
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User_weight;
};
