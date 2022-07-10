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
  size_compatibility TEXT[3] NOT NULL, -- small, medium, large(max 3)
  gender_compatibility TEXT[2] NOT NULL, -- male, female (max 2)
  breed_incompatibility TEXT[] NOT NULL,
  description VARCHAR(255) NOT NULL,
  photo_url VARCHAR(255) NOT NULL, --bytea
  owner_id INTEGER REFERENCES owners(id) ON DELETE CASCADE
  );

