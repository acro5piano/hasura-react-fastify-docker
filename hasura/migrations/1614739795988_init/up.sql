create table users (
    id serial primary key,
    name varchar(255) not null default '',
    email varchar(255) unique not null default ''
);

CREATE VIEW user_privates AS
  SELECT id AS user_id, email
  FROM users;
