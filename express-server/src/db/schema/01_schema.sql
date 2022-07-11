DROP TABLE IF EXISTS dogs CASCADE;
DROP TABLE IF EXISTS owners CASCADE;

CREATE TABLE owners (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  thumbnail_photo_url VARCHAR(255) NOT NULL,
  location POINT NOT NULL
  );

CREATE TABLE dogs (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  breed VARCHAR(100) NOT NULL,
  gender VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL,
  size VARCHAR(100) NOT NULL,
  reactive BOOLEAN NOT NULL,
  good_with_people BOOLEAN NOT NULL,
  size_compatibility JSONB NOT NULL, -- small, medium, large
  gender_compatibility JSONB NOT NULL, -- male, female
  breed_incompatibility JSONB NOT NULL,
  description VARCHAR(255) NOT NULL,
  photo_url VARCHAR(255) NOT NULL,
  owner_id INTEGER REFERENCES owners(id) ON DELETE CASCADE
  );

