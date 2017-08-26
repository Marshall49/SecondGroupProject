module.exports = function(sequelize, DataTypes) {
  var App_users = sequelize.define("app_users", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
     password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
     city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
     state: {
      //do we want two letter abbreviations?
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      len: [1] 
      } 
    },
    height_feet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      len: [1] 
      } 
    },
    height_inches: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      len: [1] 
      } 
    }
    
  });

  App_users.associate = function(models) {
    // Associating App_users with stat models
    // When an App user is deleted, also delete any associated Posts
    App_users.hasMany(models.User_weight, {
      onDelete: "cascade"

    });
  };

  App_users.associate = function(models) {
    App_users.hasMany(models.User_calories, {
      onDelete: "cascade"

    });
  };

  App_users.associate = function(models) {
    App_users.hasMany(models.User_calories, {
      onDelete: "cascade"

    });
  };
  App_users.associate = function(models) {
    App_users.hasMany(models.Activity_mileage, {
      onDelete: "cascade"

    });
  };

  return App_users;
};








