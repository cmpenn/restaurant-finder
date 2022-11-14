CREATE TABLE restaurant_types(
type_id SERIAL PRIMARY KEY,
type VARCHAR
);

CREATE TABLE user_choices(
name VARCHAR(50) NOT NULL UNIQUE,
type_id VARCHAR REFERENCES restaurant_types(type_id),
rating INT
);
        
CREATE TABLE resturants(
name VARCHAR(50) NOT NULL UNIQUE,
type VARCHAR,
rating INT
);

INSERT INTO restaurant_types (type)
 VALUES ('mexican/fast-food'),
 ('chinese/fast-food'),
 ('thai/fast-food'),
 ('italian/fast-food'),
 ('american/fast-food'),
 ('greek/fast-food'),
 ('mediterranean/fast-food'),
 ('south american/fast-food'),
 ('korrean/fast-food'),
 ('mexican/sit-down'),
 ('chinese/sit-down'),
 ('thai/sit-down'),
 ('italian/sit-down'),
 ('american/sit-down'),
 ('greek/sit-down'),
 ('mediterranean/sit-down'),
 ('south american/sit-down'),
 ('korrean/sit-down'),
 ('all you can eat')

CREATE TABLE fast_food(
    name VARCHAR()
);

CREATE TABLE sitdown_food(
    name VARCHAR()
);

CREATE TABLE utah_food(
    name VARCHAR()
);

INSERT INTO fast_food(name)
VALUES ('McDonalds'),
('Subway'),
('Taco Bell'),
('Chick-Fil-A'),
('Wendys'),
('Burger King'),
('Dominos'),
('Chipotle'),
('KFC'),
('Arbys');

INSERT INTO sitdown_food(name)
VALUES ('Texas Roadhouse'),
('MOD Pizza'),
('Cracker Barrel'),
('Carrabbas'),
('Blaze Pizza'),
('Olive Garden'),
('Red Lobster'),
('Outback Steakhouse'),
('Cheesecake Factory'),
('Chilis');

INSERT INTO utah_food(name)
VALUES ('The Pie Pizzeria'),
('Red Iguana'),
('Asa Ramen'),
('Takashi'),
('11hauz Jamaican Food');