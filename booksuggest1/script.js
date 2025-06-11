const books = [
  { title: "Atomic Habits", genre: "self-help", mood: "curious", time: "medium", image: "https://covers.openlibrary.org/b/id/10589745-L.jpg" },
  { title: "1984", genre: "fiction", mood: "sad", time: "long", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  { title: "Sapiens", genre: "history", mood: "curious", time: "long", image: "https://covers.openlibrary.org/b/id/8369251-L.jpg" },
  { title: "The Martian", genre: "sci-fi", mood: "happy", time: "medium", image: "https://covers.openlibrary.org/b/id/8167898-L.jpg" },
  { title: "The Alchemist", genre: "fiction", mood: "happy", time: "short", image: "https://covers.openlibrary.org/b/id/8231997-L.jpg" }
];

function suggestBooks() {
  const genre = document.getElementById('genre').value;
  const mood = document.getElementById('mood').value;
  const time = document.getElementById('time').value;

  const results = books.filter(book =>
    (genre === "" || book.genre === genre) &&
    (mood === "" || book.mood === mood) &&
    (time === "" || book.time === time)
  );

  const container = document.getElementById('suggestions');
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = "<p>No books match your criteria. Try different filters!</p>";
    return;
  }

  results.forEach(book => {
    const div = document.createElement('div');
    div.className = "book";
    div.innerHTML = `<img src="${book.image}" alt="${book.title}"><h3>${book.title}</h3>`;
    container.appendChild(div);
  });
}
