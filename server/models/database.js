const userSeed = `
DROP TABLE IF EXISTS users CASCADE;
DROP TYPE IF EXISTS status;
CREATE TYPE status AS ENUM('user','admin');
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role status DEFAULT 'user');
INSERT INTO users(name,email,password)
VALUES ('maureen','maureen@gmail.com','maureen123');`;

const requestSeed = `
DROP TABLE IF EXISTS requests CASCADE;
DROP TYPE IF EXISTS request_status;
DROP TYPE IF EXISTS accepted_status;
CREATE TYPE request_status AS ENUM('approved','disapproved');
CREATE TYPE accepted_status AS ENUM('inProgress','resolved');
CREATE TABLE requests(
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  title VARCHAR(50) NOT NULL,
  department VARCHAR(50) NOT NULL,
  equipment VARCHAR(50) NOT NULL,
  serialNumber VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  requestStatus request_status DEFAULT 'disapproved',
  acceptedStatus accepted_status DEFAULT 'inProgress',
  FOREIGN KEY (user_id) REFERENCES users(id));
INSERT INTO requests(
  user_id,
  title,
  department,
  equipment,
  serialNumber,
  description)
VALUES (1, 'bad computer', 'technical', 'computer', 00000006, 'faulty battery');`;

const queries = `${userSeed}${requestSeed}`;

export default queries;
