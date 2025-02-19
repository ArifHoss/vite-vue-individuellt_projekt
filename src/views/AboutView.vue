<template>
  <div class="about-container">
    <!-- About Section -->
    <section class="about-hero">
      <h1>About University Finder 🎓</h1>
      <p>
        University Finder helps students, researchers, and professionals find universities worldwide
        with ease.
      </p>
    </section>

    <!-- Purpose Section -->
    <section class="about-purpose">
      <h2>Our Mission</h2>
      <p>
        We aim to provide an easy-to-use platform to search for universities globally. Whether
        you’re looking for a university in the United States, Europe, or anywhere in the world,
        we’ve got you covered.
      </p>
    </section>

    <!-- Features Section -->
    <section class="about-features">
      <h2>What You Can Do</h2>
      <ul>
        <li>Search universities by country.</li>
        <li>Get direct links to university websites.</li>
        <li>Discover top institutions worldwide.</li>
        <li>Filter by state/province (if available).</li>
      </ul>
    </section>

    <!-- Contact Section -->
    <section class="about-contact">
      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? Reach out to us at
        <a href="mailto:support@universityfinder.com">support@universityfinder.com</a>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 800px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
}

.about-hero {
  background: #17a2b8;
  color: white;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.about-hero h1 {
  font-size: 2rem;
}

.about-purpose,
.about-features,
.about-contact {
  margin-bottom: 30px;
}

.about-features ul {
  list-style: none;
  padding: 0;
}

.about-features li {
  background: #f8f9fa;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
}

.about-contact a {
  color: #007bff;
  text-decoration: none;
}
</style>
