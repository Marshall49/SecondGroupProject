-- creating new rows of user info
INSERT INTO App_users (first_name, last_name, user_name, password, city, state,
zip_code, height, current_weight)
VALUES ("John", "Davis", "JDavis", "Exercise", "Phoenix", "AZ", 85001, "5ft 10in" ,163);

INSERT INTO User_calories (user_name, calories_burned)
VALUES ("JDavis", 1500);
INSERT INTO User_calories (user_name, calories_burned)
VALUES ("JDavis", 2000);
INSERT INTO User_calories (user_name, calories_burned)
VALUES ("JDavis", 300);
INSERT INTO User_calories (user_name, calories_burned)
VALUES ("JDavis", 2000);
INSERT INTO User_calories (user_name, calories_burned)
VALUES ("JDavis", 1000);

INSERT INTO Activity_mileages (user_name, total_mileage)
VALUES ("JDavis", 5);
INSERT INTO Activity_mileages (user_name, total_mileage)
VALUES ("JDavis", 15);
INSERT INTO Activity_mileages (user_name, total_mileage)
VALUES ("JDavis", 20);
INSERT INTO Activity_mileages (user_name, total_mileage)
VALUES ("JDavis", 11);
INSERT INTO Activity_mileages (user_name, total_mileage)
VALUES ("JDavis", 28);

INSERT INTO User_weights (user_name, current_weight)
VALUES ("JDavis", 163);
INSERT INTO User_weights (user_name, current_weight)
VALUES ("JDavis", 163);
INSERT INTO User_weights (user_name, current_weight)
VALUES ("JDavis", 158);
INSERT INTO User_weights (user_name, current_weight)
VALUES ("JDavis", 153);
INSERT INTO User_weights (user_name, current_weight)
VALUES ("JDavis", 150);
