INSERT INTO owners
(name, password, city, email, thumbnail_photo_url, location)
VALUES
('Angela', 's565ds8d5h8s75f8h57858s5s', 'Calgary', 'ilovecats@yahoo.com', '/owners/angela.jpeg', 5),
('Dwight', 's565ds8d5h8s75f8h57858s5s', 'Vancouver', 'supreme_dwight@gmail.com', '/owners/dwight.jpeg', 8),
('Michael','s565ds8d5h8s75f8h57858s5s', 'Vancouver', 'nice-to-meet-me@yahoo.com', '/owners/michael.jpeg', 6),
('Kevin','s565ds8d5h8s75f8h57858s5s', 'Vancouver', 'chili_lover@yahoo.com', '/owners/kevin.jpeg', 5),
('Jimothy','s565ds8d5h8s75f8h57858s5s', 'Calgary', 'asian_jim@mail.com', '/owners/jim.jpeg', 5),
('Toby', 's565ds8d5h8s75f8h57858s5s','Montreal', 'stranglehorn@gmail.com', '/owners/toby.jpeg', 7),
('Robert','s565ds8d5h8s75f8h57858s5s', 'Toronto', 'california@yahoo.com', '/owners/robert.jpeg', 3),
('Erin', 's565ds8d5h8s75f8h57858s5s','Calgary', 'hannon123@inbox.com', '/owners/erin.jpeg', 9),
('Stanley','s565ds8d5h8s75f8h57858s5s', 'Vancouver', 'manley99@email.com', '/owners/stanley.jpeg', 2),
('Darryl','s565ds8d5h8s75f8h57858s5s', 'Montreal', 'big_boi@inbox.com', '/owners/darryl.jpeg', 4),
('Kelly','s565ds8d5h8s75f8h57858s5s', 'Montreal', 'OMG@inbox.com', '/owners/kelly.jpeg', 4),
('Mose','s565ds8d5h8s75f8h57858s5s', 'Calgary', 'mastermind111@gmail.com', '/owners/mose.jpeg', 6);


INSERT INTO dogs 
  (name, breed, gender, age, size, reactive, good_with_reactive_dogs,size_compatibility, gender_compatibility, breed_incompatibility, description, photo_url, owner_id) 
  VALUES 
  ('Spot', 'Pit Bull', 'male', 3, 'medium', false, true, '{"small": true, "medium": true, "large": true}', '{"male": true, "female": true}', '{"pitbull": true}','Very playful and kind to people and kids, Spot loves to spend time outdoors', '/dogs/spot.jpeg', 1),

  ('Bailey', 'Poodle', 'female', 2, 'medium', false, true, '{"small": true, "medium": true, "large": true}', '{"male": true, "female": true}', '{"pitbull": true}', 'Smart and happy dog, enjoys playing with everyone', '/dogs/bailey.jpeg', 2),

  ('Flash', 'Pug', 'male', 7, 'small', true, true, '{"small": true}', '{"male": true, "female": true}', '{"husky": true}', 'Small but quick, Flash loved dog parks more than anything, a little cautious of other dogs', '/dogs/flash.jpeg', 3),

  ('Gatsby', 'Labrador', 'male', 5, 'medium', true, false, '{"medium": true}', '{"male": true, "female": true}', '{"german shepherd": true}', 'Being a rescue dog, Gatsby is a sweet and loving dog, but needs a little time to get adjusted to new faces', '/dogs/gatsby.jpeg', 4),

  ('Abby', 'Bulldog', 'female', 4, 'medium', true, true, '{"medium": true}', '{"female": true}', '{"pitbull": true}', 'Give Abby a treat, and she will become your best friend', '/dogs/abby.jpeg', 5),

  ('Jackson', 'German Shepherd', 'male', 7, 'large', true, true, '{"small": true, "medium": true}', '{"male": true, "female": true}', '{}', 'As a resque dog, Jackson is a bit careful towards other dogs at first, but given a little time, he becomes best friends with everybody', '/dogs/jackson.jpeg', 6),

  ('Grace', 'Pug', 'female', 1, 'small', false, true, '{"small": true}', '{"male": true, "female": true}', '{"pitbull": true}', 'Absolutely loving dog, I hope you love her too', '/dogs/grace.jpeg', 7),

  ('Percy', 'Boxer', 'male', 5, 'large', false, true, '{"small": true, "medium": true, "large": true}', '{"male": true}', '{}', 'Large dog who thinks he is a puppy, Percy loves long walks and rubs on his back', '/dogs/percy.jpeg', 8),

  ('Daisy', 'Pit Bull', 'female', 2, 'medium', true, false, '{"small": true, "medium": true}', '{"female": true}', '{}', 'Resque dog, quite careful around other dogs and people, just give her a treat and she will become best friends with you', '/dogs/daisy.jpeg', 9),

  ('Mabel', 'German Shepherd', 'female', 2, 'large', false, true, '{"small": true, "medium": true, "large": true}', '{"female": true}', '{"doberman": true}', 'Very obedient and well behaved, Mabel lacks good dog friendships, she loves going to the beach and dog parks', '/dogs/mabel.jpeg', 10),

  ('Arnold', 'Boxer', 'male', 4, 'large', false, true, '{"small": true, "medium": true}', '{"male": true, "female": true}', '{}', 'Very energetic and playful, Arnord will not leave anyone without a smile', '/dogs/arnold.jpeg', 11),

  ('Rocky', 'Pit Bull', 'male', 2, 'large', false, true, '{"medium": true, "large": true}', '{"male": true, "female": true}', '{}', 'Rocky is a good boy who likes jumping in puddles! He would absolutely
  love to go on a walk with you.', '/dogs/happy_baby.jpeg', 12);

INSERT INTO favourites
  (owner_id, dog_id)
  VALUES
  (1, 7),
  (1, 3),
  (1, 6),
  (2, 8),
  (2, 4),
  (3, 10),
  (3, 9),
  (4, 3),
  (6, 1),
  (6, 10),
  (6, 7),
  (7, 4),
  (7, 5),
  (9, 10);
