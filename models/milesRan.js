module.exports = function(sequelize, DataTypes) {
  var Miles = sequelize.define("Miles", {
	     miles: {
	      type: DataTypes.INTEGER,
	      allowNull: false,
	      validate: {
	        len: [1]
	      }
	    },

      weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

	     week: {
        type: DataTypes.INTEGER,
        allowNull: true,
		}
	});

  Miles.associate = function(models) {

    Miles.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Miles;
};
