---
linkTitle: "Reaction Catalog"
title: Reaction Catalog
---

<div class="hx-mb-12">
{{< hextra/hero-subtitle >}}
  Freely select the type of Reaction you wish to study.
{{< /hextra/hero-subtitle >}}
</div>

## Search by Reaction Type

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
  padding: 1rem;
  text-align: center;
  border: 1px solid #2c2c2c; /* Outline color */
  background: transparent; /* Transparent background */
  cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
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
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 0.5rem; /* Adjust spacing below the image */
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
  padding-top: 0; /* Remove top padding */
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
  <a href="/reactionrepo/docs/oxidation-reactions/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="oxidationoverviewdark.png"
          light-src="oxidationoverviewlightt.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Oxidation Reactions</h5>
      </div>
    </div>
  </a>
  <a href="#" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="dark.png"
          light-src="light.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Pericyclic Reactions</h5>
      </div>
    </div>
  </a>
  <a href="#" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="dark.png"
          light-src="light.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Addition Reactions</h5>
      </div>
    </div>
  </a>
  <a href="#" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="dark.png"
          light-src="light.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Elimination Reactions</h5>
      </div>
    </div>
  </a>
  <a href="#" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="dark.png"
          light-src="light.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Substitution Reactions</h5>
      </div>
    </div>
  </a>
  <a href="#" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="dark.png"
          light-src="light.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Redox Reactions</h5>
      </div>
    </div>
  </a>
</div>

## Search by Products


## Search by Author/Reaction Name

### A

### B

## Features

<div class="hx-mb-12">
{{< hextra/hero-subtitle >}}
  See our Step-By-Step Tutorials.
{{< /hextra/hero-subtitle >}}
</div>

  {{< feature-grid >}}

  {{< feature-card
    title="Find your framework"
    subtitle="Deploy your favorite framework with our step by step guides."
    link="/guides"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(203, 28, 66, 0.15),hsla(0,0%,100%,0));"
  >}}
  {{< feature-card
    title="Starter tutorials"
    subtitle="Make a starter app and deploy it on Clever Cloud."
    link="/guides/#starter-tutorials"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(58, 56, 113, 0.15),hsla(0,0%,100%,0));"
  >}}
  {{< feature-card
    title="Add-ons guides"
    subtitle="Take your dependencies management to the next level."
    link="/guides/#level-up-your-add-ons"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(165, 16, 80, 0.15),hsla(0,0%,100%,0));"
  >}}

{{< /feature-grid >}}

## Questions or Feedback?

{{< callout icon="exclamation-circle">}}
  Reaction Repo is still in active development.
  Have a question or feedback? Feel free to [open an issue](https://chemlord.github.io/devthechemistt/)!
{{< /callout >}}
