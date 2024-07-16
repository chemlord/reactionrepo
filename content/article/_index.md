---
title: "Articles"
width: full
type: blog
toc: false
---

<div style="text-align: center; margin-top: 0.4em; display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; align-items: center;">
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
We're excited to share our thoughts, insights, and stories with you. Whether you're here to learn something new, find inspiration, or just enjoy a good read, we have something for everyone. Dive in, explore, enjoy!
</p>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Two columns layout */
  gap: 1rem;
  margin-top: 1.5rem; /* Add margin to create space between the header and the cards */
}

.card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  padding: 1rem;
  text-align: left; /* Align content to the left */
  background: transparent; /* Transparent background */
  cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease; /* Add transition effects */
}

.card img {
  user-select: none;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1rem; /* Add more space below the image */
}

.card-title {
  margin: 0.5rem 0 0; /* Adjust spacing for the title */
  transition: background-size 0.3s ease;
  color: #000; /* Title color in light mode */
  position: relative;
  font-size: 1.25rem;
  font-weight: 600;
  display: inline-block;
  background-image: linear-gradient(transparent 50%, rgba(173, 216, 230, 1) 50%);
  background-position: 0 60%; /* Adjust position to embed halfway through the text */
  background-size: 0 40%; /* Initial background size to 0 width */
  background-repeat: no-repeat;
}

.card:hover {
  background-color: rgba(173, 216, 230, 0.2); /* Subtle highlight effect on hover */
}

.card:hover .card-title {
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
</style>

<div class="cards">
  <a href="https://github.com/axivo/website" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://github.com/imfing/hextra/assets/19806136/f22f0710-23a0-430b-8bad-616283b8a3e5"
        light-src="https://github.com/imfing/hextra/assets/19806136/f22f0710-23a0-430b-8bad-616283b8a3e5"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">AXIVO Docs</h2>
      <p class="card-description">Documentation for AXIVO projects.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
  <a href="https://github.com/infracourse/web" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://github.com/imfing/hextra/assets/5097752/8c29470b-3994-41c8-be9a-5b41476e6f3c"
        light-src="https://github.com/imfing/hextra/assets/5097752/8c29470b-3994-41c8-be9a-5b41476e6f3c"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">Stanford CS 40</h2>
      <p class="card-description">Stanford Computer Science 40 documentation.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
  <a href="https://github.com/helixml/docs" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://github.com/imfing/hextra/assets/5097752/78045af0-4922-4358-ae73-624770909db6"
        light-src="https://github.com/imfing/hextra/assets/5097752/78045af0-4922-4358-ae73-624770909db6"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">Helix Docs</h2>
      <p class="card-description">Documentation for Helix projects.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
  <a href="https://developers.clever-cloud.com/" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://cellar-c2.services.clever-cloud.com/documentation/doc-screenshot.png"
        light-src="https://cellar-c2.services.clever-cloud.com/documentation/doc-screenshot.png"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">Clever Cloud Documentation</h2>
      <p class="card-description">Documentation for Clever Cloud.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
  <a href="https://owaspai.org/" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://github.com/imfing/hextra/assets/5097752/fbb1d3a5-a0e8-4cfc-88cf-3523b0176c89"
        light-src="https://github.com/imfing/hextra/assets/5097752/fbb1d3a5-a0e8-4cfc-88cf-3523b0176c89"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">OWASP AI Security and Privacy Guide</h2>
      <p class="card-description">Guide on AI Security and Privacy by OWASP.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
  <a href="https://developers.osuny.org" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://raw.githubusercontent.com/noesya/osuny-developers/main/static/images/showcase-hextra/screenshot.png"
        light-src="https://raw.githubusercontent.com/noesya/osuny-developers/main/static/images/showcase-hextra/screenshot.png"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">Osuny</h2>
      <p class="card-description">Documentation for Osuny developers.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
  <a href="https://porter.sh/" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://github.com/imfing/hextra/assets/5097752/401abc3a-b4c3-4336-b95a-a6dd9afbc1de"
        light-src="https://github.com/imfing/hextra/assets/5097752/401abc3a-b4c3-4336-b95a-a6dd9afbc1de"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">Porter</h2>
      <p class="card-description">Documentation for Porter.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
  <a href="https://hoa.moe/" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://raw.githubusercontent.com/HITSZ-OpenAuto/hoa.moe/main/static/images/showcase-new.png"
        light-src="https://raw.githubusercontent.com/HITSZ-OpenAuto/hoa.moe/main/static/images/showcase-new.png"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">HITSZ OpenAuto</h2>
      <p class="card-description">Documentation for HITSZ OpenAuto.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
  <a href="https://lutheranconfessions.org/" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://github.com/imfing/hextra/assets/5097752/ad6625e4-88cd-4cad-b102-5399997d0359"
        light-src="https://github.com/imfing/hextra/assets/5097752/ad6625e4-88cd-4cad-b102-5399997d0359"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">LutheranConfessions</h2>
      <p class="card-description">Documentation for LutheranConfessions.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
  <a href="https://github.com/imfing/hextra-starter-template/" class="card card-link">
    <div class="card-body">
      {{<figure-dynamic-toggle
        dark-src="https://user-images.githubusercontent.com/5097752/263551418-c403b9a9-a76c-47a6-8466-513d772ef0b7.jpg"
        light-src="https://user-images.githubusercontent.com/5097752/263551418-c403b9a9-a76c-47a6-8466-513d772ef0b7.jpg"
        title=""
        width="350"
        height="200"
      >}}
      <h2 class="card-title">Hextra Starter Template</h2>
      <p class="card-description">Starter template for Hextra projects.</p>
      <time class="card-date" datetime="2024-07-05">Jul 5, 2024</time>
    </div>
  </a>
</div>












