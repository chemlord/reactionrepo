---
title: Resource Catalog
linkTitle: "Site Repository"
type: about
pager: false
type: docs
weight: 1
---

Need more practice or can’t find what you’re looking for? Check out our resource catalog for trusted organic chemistry websites and tools to help you deepen your understanding and hone your skills.

<style>
.hextra-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem; /* Add margin to create space between the header and the cards */
}

.hextra-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
  text-align: center;
  border: 1px solid #2c2c2c; /* Outline color */
  background: transparent; /* Transparent background */
  cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
  padding: 0; /* Remove padding to let image take full space */
}

.hextra-card:hover {
  transform: scale(1.03); /* Slightly reduced scale to avoid large shadows */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Less intense shadow */
  background-color: rgba(0, 0, 0, 0.03); /* Subtle highlight effect for light mode */
}

.dark .hextra-card {
  border-color: #4c4c4c; /* More visible outline color for dark mode */
}

.dark .hextra-card:hover {
  background-color: rgba(255, 255, 255, 0.05); /* Subtle highlight effect for dark mode */
  box-shadow: 0 6px 12px rgba(255, 255, 255, 0.15); /* Consistent shadow effect for dark mode */
}

.hextra-card img {
  user-select: none;
  width: 100%;
  height: 100%; /* Make image take full height */
  object-fit: cover; /* Ensure image covers the entire area */
  display: block; /* Remove any space above the image */
  margin: 0; /* Remove any margin */
  padding: 0; /* Remove any padding */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hextra-card:hover img {
  transform: scale(1.03); /* Consistent scale with card */
  box-shadow: none; /* Remove shadow from the image */
}

.card-title {
  margin: 0.5rem 0 0; /* Adjust spacing for the title */
  transition: color 0.3s ease;
  color: #000; /* Title color in light mode */
}

.dark .card-title {
  color: #3498db; /* Title color in dark mode */
}

.card-body {
  padding: 0.5rem; /* Add padding for text content */
}

.dark .hextra-card svg {
  color: #ffffff66;
}

.dark .hextra-card:hover svg {
  color: currentColor;
}

a.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>

<div class="hextra-cards">
  <a href="/reactionrepo/additional-resources/chemistry-steps" class="card-link">
    <div class="hextra-card">
      <img src="chemstep.png" alt="Chemistry Steps">
      <div class="card-body">
        <h5 class="card-title">Chemistry Steps</h5>
      </div>
    </div>
  </a>
  <a href="/reactionrepo/additional-resources/master-organic-chemistry" class="card-link">
    <div class="hextra-card">
      <img src="moclogo.png" alt="Master Organic Chemistry">
      <div class="card-body">
        <h5 class="card-title">Master Organic Chemistry</h5>
      </div>
    </div>
  </a>
</div>
<div class="hextra-cards">
  <a href="/reactionrepo/additional-resources/chemist.swiswiswift/" class="card-link">
    <div class="hextra-card">
      <img src="cchemswis.png" alt="chemist.swiswiswift">
      <div class="card-body">
        <h5 class="card-title">Chemist.swiswiswift</h5>
      </div>
    </div>
  </a>

