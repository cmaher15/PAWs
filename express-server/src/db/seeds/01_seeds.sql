INSERT INTO owners
(name, city, email, thumbnail_photo_url, location)
VALUES
('Angela', 'Calgary', 'ilovecats@yahoo.com', 'photo', '(-194.0, 53.0)'),
('Dwight', 'Vancouver', 'supreme_dwight@gmail.com', 'photo', '(-194.0, 53.0)'),
('Michael', 'Vancouver', 'nice-to-meet-me@yahoo.com', 'photo', '(-194.0, 53.0)'),
('Kevin', 'Vancouver', 'chili_lover@yahoo.com', 'photo', '(-194.0, 53.0)'),
('Jimothy', 'Calgary', 'asian_jim@mail.com', 'photo', '(-194.0, 53.0)'),
('Toby', 'Montreal', 'stranglehorn@gmail.com', 'photo', '(-194.0, 53.0)'),
('Troy', 'Toronto', 'truckdriver@yahoo.com', 'photo', '(-194.0, 53.0)'),
('Erin', 'Calgary', 'hannon123@inbox.com', 'photo', '(-194.0, 53.0)'),
('Stanley', 'Vancouver', 'manley99@email.com', 'photo', '(-194.0, 53.0)'),
('Darryl', 'Montreal', 'big_boi@inbox.com', 'photo', '(-194.0, 53.0)'),
('Mose', 'Calgary', 'mastermind111@gmail.com', 'photo', '(-194.0, 53.0)');


INSERT INTO dogs 
  (name, breed, gender, age, size, reactive, good_with_people,size_compatibility, gender_compatibility, breed_incompatibility, description, photo_url, owner_id) 
  VALUES 
  ('Spot', 'pitbull', 'male', 3, 'medium', false, true, ARRAY ['small', 'middle'], ARRAY ['male', 'female'], ARRAY ['none'],'Very playful and kind to people and kids, Spot loves to spend time outdoors', './public/spot.jpeg', 1),

  ('Bailey', 'poodle', 'female', 2, 'medium', false, true, ARRAY ['small', 'middle', 'large'], ARRAY ['male', 'female'], ARRAY ['pitbull'], 'Smart and happy dog, enjoys playing with everyone', './public/bailey.jpeg', 2),

  ('Flash', 'pug', 'male', 7, 'small', true, true, ARRAY ['small'], ARRAY ['male', 'female'],ARRAY ['german shepherd'], 'Small but quick, Flash loved dog parks more than anything, a little cautious of other dogs', './public/flash.jpeg', 3),

  ('Gatsby', 'labrador', 'male', 5, 'medium', true, false, ARRAY ['middle'], ARRAY ['male', 'female'], ARRAY ['none'], 'Being a resque dog, Gatsby is a sweet and loving dog, but needs a little time to get adjusted to new faces', './public/gatsby.jpeg', 4),

  ('Abby', 'bulldog', 'female', 4, 'medium', true, true, ARRAY ['middle'], ARRAY ['female'],ARRAY ['pitbull', 'doberman'], 'Give Abby a treat, and she will become your best friend', './public/abby.jpeg', 5),

  ('Jackson', 'german shepherd', 'male', 7, 'large', true, true, ARRAY ['middle', 'large'], ARRAY ['male', 'female'], ARRAY ['none'], 'As a resque dog, Jackson is a bit careful towards other dogs at first, but given a little time, he becomes best friends with everybody', './public/jackson.jpeg', 6),

  ('Grace', 'pug', 'female', 1, 'small', false, true, ARRAY ['small'], ARRAY ['male', 'female'], ARRAY ['none'], 'Absolutely loving dog, I hope you love her too', './public/grace.jpeg', 7),

  ('Percy', 'boxer', 'male', 5, 'large', false, true, ARRAY ['middle', 'large'], ARRAY ['male', 'female'], ARRAY ['none'], 'Large dog who thinks he is a puppy, Percy loves long walks and rubs on his back', './public/percy.jpeg', 8),

  ('Daisy', 'pitbull', 'female', 2, 'medium', true, false, ARRAY ['small', 'middle'], ARRAY ['female'], ARRAY ['rottweiler', 'pitbull'], 'Resque dog, quite careful around other dogs and people, just give her a treat and she will become best friends with you', './public/daisy.jpeg', 9),

  ('Mabel', 'german shepherd', 'female', 2, 'large', false, true, ARRAY ['small', 'middle', 'large'], ARRAY ['female'], ARRAY ['none'], 'Very obedient and well behaved, Mabel lacks good dog friendships, she loves going to the beach and dog parks', './public/mabel.jpeg', 10),

  ('Arnold', 'boxer', 'male', 4, 'large', false, true, ARRAY['small', 'middle'], ARRAY ['male', 'female'], ARRAY ['poodle'], 'Very energetic and playful, Arnord will not leave anyone without a smile', './public/arnold.jpeg', 11);