-- Create the database
CREATE DATABASE IF NOT EXISTS book_portal;
USE book_portal;

-- Table: users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

-- Table: books
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    genre VARCHAR(100),
    mood VARCHAR(100),
    time VARCHAR(50),
    image_url TEXT
);

-- Sample data for books
INSERT INTO books (title, genre, mood, time, image_url) VALUES
('Atomic Habits', 'self-help', 'curious', 'medium', 'https://covers.openlibrary.org/b/id/10589745-L.jpg'),
('1984', 'fiction', 'sad', 'long', 'https://covers.openlibrary.org/b/id/7222246-L.jpg'),
('Sapiens', 'history', 'curious', 'long', 'https://covers.openlibrary.org/b/id/8369251-L.jpg'),
('The Martian', 'sci-fi', 'happy', 'medium', 'https://covers.openlibrary.org/b/id/8167898-L.jpg'),
('The Alchemist', 'fiction', 'happy', 'short', 'https://covers.openlibrary.org/b/id/8231997-L.jpg');
