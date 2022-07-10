INSERT INTO owners
(name, city, email, thumbnail_photo)
VALUES
('Angela', 'Calgary', 'ilovecats@yahoo.com', 'photo'),
('Dwight', 'Vancouver', 'supreme_dwight@gmail.com', 'photo'),
('Michael', 'Vancouver', 'nice-to-meet-me@yahoo.com', 'photo'),
('Kevin', 'Vancouver', 'chili_lover@yahoo.com', 'photo'),
('Jimothy', 'Calgary', 'asian_jim@mail.com', 'photo'),
('Toby', 'Montreal', 'stranglehorn@gmail.com', 'photo'),
('Troy', 'Toronto', 'truckdriver@yahoo.com', 'photo'),
('Erin', 'Calgary', 'hannon123@inbox.com', 'photo'),
('Stanley', 'Vancouver', 'manley99@email.com', 'photo'),
('Darryl', 'Montreal', 'big_boi@inbox.com', 'photo'),
('Mose', 'Calgary', 'mastermind111@gmail.com', 'photo');


INSERT INTO dogs 
  (name, breed, gender, age, size, reactive, good_with_people,size_compatibility, gender_compatibility, breed_incompatibility, description, photo, owner_id) 
  VALUES 
  ('Spot', 'pitbull', 'male', 3, 'medium', false, true, ARRAY ['small', 'middle'], ARRAY ['male', 'female'], ARRAY [],'Very playful and kind to people and kids, Spot loves to spend time outdoors', 'https://imgur.com/sQsLVbu', 1),

  ('Bailey', 'poodle', 'female', 2, 'medium', false, true, ARRAY ['small', 'middle', 'large'], ARRAY ['male', 'female'], ARRAY ['pitbull'], 'Smart and happy dog, enjoys playing with everyone', 'https://imgur.com/vqCeSBl', 2),

  ('Flash', 'pug', 'male', 7, 'small', true, true, ARRAY ['small'], ARRAY ['male', 'female'],ARRAY ['german shepherd'], 'Small but quick, Flash loved dog parks more than anything, a little cautious of other dogs', 'https://imgur.com/1GUzYh9', 3),

  ('Gatsby', 'labrador', 'male', 5, 'medium', true, false, ARRAY ['middle'], ARRAY ['male', 'female'], ARRAY [], 'Being a resque dog, Gatsby is a sweet and loving dog, but needs a little time to get adjusted to new faces', 'https://imgur.com/vrmjdeR', 4),

  ('Abby', 'bulldog', 'female', 4, 'medium', true, true, ARRAY ['middle'], ARRAY ['female'],ARRAY ['pitbull', 'doberman'], 'Give Abby a treat, and she will become your best friend', 'https://imgur.com/nexY1Ro', 5),

  ('Jackson', 'german shepherd', 'male', 7, 'large', true, true, ARRAY ['middle', 'large'], ARRAY ['male', 'female'], ARRAY [], 'As a resque dog, Jackson is a bit careful towards other dogs at first, but given a little time, he becomes best friends with everybody', 'https://imgur.com/7r7mbKl', 6),

  ('Grace', 'pug', 'female', 1, 'small', false, true, ARRAY ['small'], ARRAY ['male', 'female'], ARRAY [], 'Absolutely loving dog, I hope you love her too', 'https://imgur.com/Jgjm6VU', 7),

  ('Percy', 'boxer', 'male', 5, 'large', false, true, ARRAY ['middle', 'large'], ARRAY ['male', 'female'], ARRAY [], 'Large dog who thinks he is a puppy, Percy loves long walks and rubs on his back', 'https://imgur.com/C7NvzdK', 8),

  ('Daisy', 'pitbull', 'female', 2, 'medium', true, false, ARRAY ['small', 'middle'], ARRAY ['female'], ARRAY ['rottweiler', 'pitbull'], 'Resque dog, quite careful around other dogs and people, just give her a treat and she will become best friends with you', 'https://imgur.com/4vc6oNS', 9),

  ('Mabel', 'german shepherd', 'female', 2, 'large', false, true, ARRAY ['small', 'middle', 'large'], ARRAY ['female'], ARRAY [], 'Very obedient and well behaved, Mabel lacks good dog friendships, she loves going to the beach and dog parks', 'https://imgur.com/JuOwJTW', 10),

  ('Arnold', 'boxer', 'male', 4, 'large', false, true, ARRAY['small', 'middle'], ARRAY ['male', 'female'], ARRAY ['poodle'], 'Very energetic and playful, Arnord will not leave anyone without a smile', 'https://imgur.com/p6XnnU8', 11);