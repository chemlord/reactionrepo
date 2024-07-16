---
title: Blog
description: "Open source projects powered by Hextra"
toc: false
layout: wide
---

<div class="hx-mt-4"></div>

<div style="text-align: center; margin-top: -0.4em; display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; align-items: center;">
{{< hextra/hero-badge link="index.xml" >}}
  <span>Education</span>
  {{< icon name="academic-cap" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
{{< hextra/hero-badge link="index.xml" >}}
  <span>Paper Review</span>
  {{< icon name="document-search" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
{{< hextra/hero-badge link="index.xml" >}}
  <span>Reactions</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
</div>

<p class="hx-mb-4 hx-text-center hx-text-lg hx-text-gray-500 dark:hx-text-gray-400">
👋 Welcome to our Blog!
</p>

<p class="hx-mb-8 hx-text-center hx-text-lg hx-text-gray-500 dark:hx-text-gray-400">
We're excited to share our thoughts, insights, and stories with you. <br> Here we provide something for everyone whether its a good read or some inspiration. <br> Dive in, explore, enjoy!
</p>

<style>
.hextra-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Adjust width to make cards longer */
  gap: 1rem;
  margin-top: 1.5rem; /* Add margin to create space between the header and the cards */
}

.hextra-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  padding: 1rem;
  text-align: left; /* Align content to the left */
  background: transparent; /* Transparent background */
  cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
}

.hextra-card img {
  user-select: none;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1rem; /* Add more space below the image */
}

.hextra-card:hover img {
  transform: scale(1.05); /* Scale the image on hover */
  box-shadow: none; /* Remove shadow from the image */
}

.card-title {
  margin: 0.5rem 0 0; /* Adjust spacing for the title */
  transition: background-size 0.3s ease;
  color: #000; /* Title color in light mode */
  position: relative;
  font-size: 1.25rem;
  font-weight: 600;
  display: inline-block;
  background-image: linear-gradient(transparent 50%, rgba(0, 0, 255, 0.5) 50%);
  background-position: 0 60%; /* Adjust position to embed halfway through the text */
  background-size: 0 40%; /* Initial background size to 0 width */
  background-repeat: no-repeat;
}

.hextra-card:hover .card-title {
  background-size: 100% 40%; /* Full width underline on hover */
}

.dark .card-title {
  color: #3498db; /* Title color in dark mode */
  background-image: linear-gradient(transparent 50%, rgba(52, 152, 219, 0.5) 50%);
  background-position: 0 60%; /* Adjust position to embed halfway through the text */
  background-size: 0 40%; /* Initial background size to 0 width */
}

.dark .hextra-card:hover .card-title {
  background-size: 100% 40%; /* Full width underline on hover */
}

.card-body {
  padding-top: 0; /* Remove top padding */
  text-align: left; /* Align content to the left */
}

.card-date {
  margin: 0.25rem 0 0; /* Adjust spacing for the date */
  color: #666; /* Date color */
  font-size: 0.9rem; /* Slightly smaller font size */
}

.card-description {
  margin: 0.25rem 0 0; /* Adjust spacing for the description */
  color: #666; /* Description color */
  font-size: 0.9rem; /* Slightly smaller font size */
}

.dark .card-date, .dark .card-description {
  color: #aaa; /* Date and description color for dark mode */
}

a.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.group:hover .card-title {
  background-size: 100% 40%; /* Full width underline on hover for the entire group */
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .hextra-cards {
    grid-template-columns: 1fr; /* On mobile, make it a single column */
  }

  .hextra-card {
    padding: 0.5rem; /* Reduce padding for mobile */
  }

  .hextra-card img {
    margin-bottom: 0.5rem; /* Reduce space below the image for mobile */
  }

  .card-title {
    font-size: 1rem; /* Reduce font size for mobile */
  }

  .card-date, .card-description {
    font-size: 0.75rem; /* Reduce font size for date and description for mobile */
  }
}
</style>

<div class="hextra-cards">
  <a href="/reactionrepo/article-repository/light-dark-mode-learning/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="decal.jpg"
          light-src="decal.jpg"
          title=""
          width="350"
          height="200"
        >}}
        <h2 class="card-title">Light and Dark Mode Learning</h2>
        <p class="card-description">Should existing resources cater to students?</p>
        <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
      </div>
    </div>
  </a>
  <a href="#" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="decal.jpg"
          light-src="decal.jpg"
          title=""
          width="350"
          height="200"
        >}}
        <h2 class="card-title">Corey-Suggs Oxidation</h2>
        <p class="card-description">A brief overview of Corey-Suggs Oxidation.</p>
        <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
      </div>
    </div>
  </a>
  <a href="/reactionrepo/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="decal.jpg"
          light-src="decal.jpg"
          title=""
          width="350"
          height="200"
        >}}
        <h2 class="card-title">Dess Martin Oxidation</h2>
        <p class="card-description">A brief overview of Dess Martin Oxidation.</p>
        <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
      </div>
    </div>
  </a>
  <a href="/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="decal.jpg"
          light-src="decal.jpg"
          title=""
          width="350"
          height="200"
        >}}
        <h2 class="card-title">Swern Oxidation</h2>
        <p class="card-description">A brief overview of Swern Oxidation.</p>
        <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
      </div>
    </div>
  </