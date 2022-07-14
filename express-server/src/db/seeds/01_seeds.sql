INSERT INTO owners
(name, password, city, email, thumbnail_photo_url, location)
VALUES
('Angela', 's565ds8d5h8s75f8h57858s5s', 'Calgary', 'ilovecats@yahoo.com', '../../../public/owners/angela.jpeg', '(-194.0, 53.0)'),
('Dwight', 's565ds8d5h8s75f8h57858s5s', 'Vancouver', 'supreme_dwight@gmail.com', '../../../public/owners/dwight.jpeg', '(-194.0, 53.0)'),
('Michael','s565ds8d5h8s75f8h57858s5s', 'Vancouver', 'nice-to-meet-me@yahoo.com', '../../../public/owners/michael.jpeg', '(-194.0, 53.0)'),
('Kevin','s565ds8d5h8s75f8h57858s5s', 'Vancouver', 'chili_lover@yahoo.com', '../../../public/owners/kevin.jpeg', '(-194.0, 53.0)'),
('Jimothy','s565ds8d5h8s75f8h57858s5s', 'Calgary', 'asian_jim@mail.com', '../../../public/owners/jim.jpeg', '(-194.0, 53.0)'),
('Toby', 's565ds8d5h8s75f8h57858s5s','Montreal', 'stranglehorn@gmail.com', '../../../public/owners/toby.jpeg', '(-194.0, 53.0)'),
('Robert','s565ds8d5h8s75f8h57858s5s', 'Toronto', 'california@yahoo.com', '../../../public/owners/robert.jpeg', '(-194.0, 53.0)'),
('Erin', 's565ds8d5h8s75f8h57858s5s','Calgary', 'hannon123@inbox.com', '../../../public/owners/erin.jpeg', '(-194.0, 53.0)'),
('Stanley','s565ds8d5h8s75f8h57858s5s', 'Vancouver', 'manley99@email.com', '../../../public/owners/stanley.jpeg', '(-194.0, 53.0)'),
('Darryl','s565ds8d5h8s75f8h57858s5s', 'Montreal', 'big_boi@inbox.com', '../../../public/owners/darryl.jpeg', '(-194.0, 53.0)'),
('Mose','s565ds8d5h8s75f8h57858s5s', 'Calgary', 'mastermind111@gmail.com', '../../../public/owners/mose.jpeg', '(-194.0, 53.0)');


INSERT INTO dogs 
  (name, breed, gender, age, size, reactive, good_with_people,size_compatibility, gender_compatibility, breed_incompatibility, description, photo_url, owner_id) 
  VALUES 
  ('Spot', 'pitbull', 'male', 3, 'medium', false, true, '{"small": true, "middle": true}', '{"male": true, "female": true}', '{"pitbull": true}','Very playful and kind to people and kids, Spot loves to spend time outdoors', './public/spot.jpeg', 1),

  ('Bailey', 'poodle', 'female', 2, 'medium', false, true, '{"small": true, "middle": true, "large": true}', '{"male": true, "female": true}', '{"pitbull": true}', 'Smart and happy dog, enjoys playing with everyone', './public/bailey.jpeg', 2),

  ('Flash', 'pug', 'male', 7, 'small', true, true, '{"small": true}', '{"male": true, "female": true}', '{"husky": true}', 'Small but quick, Flash loved dog parks more than anything, a little cautious of other dogs', './public/flash.jpeg', 3),

  ('Gatsby', 'labrador', 'male', 5, 'medium', true, false, '{"small": true}', '{"male": true, "female": true}', '{"german shepherd": true}', 'Being a resque dog, Gatsby is a sweet and loving dog, but needs a little time to get adjusted to new faces', './public/gatsby.jpeg', 4),

  ('Abby', 'bulldog', 'female', 4, 'medium', true, true, '{"middle": true}', '{"female": true}', '{"pitbull": true}', 'Give Abby a treat, and she will become your best friend', './public/abby.jpeg', 5),

  ('Jackson', 'german shepherd', 'male', 7, 'large', true, true, '{"small": true, "middle": true}', '{"male": true, "female": true}', '{}', 'As a resque dog, Jackson is a bit careful towards other dogs at first, but given a little time, he becomes best friends with everybody', './public/jackson.jpeg', 6),

  ('Grace', 'pug', 'female', 1, 'small', false, true, '{"small": true}', '{"male": true, "female": true}', '{"pitbull": true}', 'Absolutely loving dog, I hope you love her too', './public/grace.jpeg', 7),

  ('Percy', 'boxer', 'male', 5, 'large', false, true, '{"small": true, "middle": true, "large": true}', '{"male": true}', '{}', 'Large dog who thinks he is a puppy, Percy loves long walks and rubs on his back', './public/percy.jpeg', 8),

  ('Daisy', 'pitbull', 'female', 2, 'medium', true, false, '{"small": true, "middle": true}', '{"female": true}', '{}', 'Resque dog, quite careful around other dogs and people, just give her a treat and she will become best friends with you', './public/daisy.jpeg', 9),

  ('Mabel', 'german shepherd', 'female', 2, 'large', false, true, '{"small": true, "middle": true, "large": true}', '{"female": true}', '{"doberman": true}', 'Very obedient and well behaved, Mabel lacks good dog friendships, she loves going to the beach and dog parks', './public/mabel.jpeg', 10),

  ('Arnold', 'boxer', 'male', 4, 'large', false, true, '{"small": true, "middle": true}', '{"male": true, "female": true}', '{}', 'Very energetic and playful, Arnord will not leave anyone without a smile', './public/arnold.jpeg', 11);