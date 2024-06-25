---
title: Oxidation Reactions
weight: 2
prev: /docs/getting-started
next: /docs/oxidation-reactions/organize-files
sidebar:
  open: true
---
{{<figure-dynamic-toggle
    dark-src="oxidationoverviewdark.png"
    light-src="oxidationoverviewlightt.png"
>}}

## Search by Reaction

### B

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
  <a href="/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="baeyeroverviewdark.png"
          light-src="baeyeroverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Baeyer-Villiger Oxidation</h5>
      </div>
    </div>
  </a>
</div>

### C

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
  <a href="/docs/oxidation-reactions/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="pdcoverviewdark.png"
          light-src="pdcoverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Corey-Schmidt Oxidation</h5>
      </div>
    </div>
  </a>
  <a href="#" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="pccoxidationoverviewdark.png"
          light-src="pccoxidationoverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Corey-Suggs Oxidation</h5>
      </div>
    </div>
  </a>
</div>

### D

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
  <a href="/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="dmoreactionoverviewdark.png"
          light-src="dmoreactionoverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Dess Martin Oxidation</h5>
      </div>
    </div>
  </a>
</div>

### J

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
  <a href="/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="jonesoverviewdark.png"
          light-src="jonesoverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Jones Oxidation</h5>
      </div>
    </div>
  </a>
</div>

### S

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
  <a href="/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="sreactionoverviewnewdark.png"
          light-src="sreactionoverviewnewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Swern Oxidation</h5>
      </div>
    </div>
  </a>
</div>
    
## Search by Product

### Aldehyde

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
  <a href="/docs/oxidation-reactions/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="pdcoverviewdark.png"
          light-src="pdcoverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Corey-Schmidt Oxidation</h5>
      </div>
    </div>
  </a>
  <a href="#" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="pccoxidationoverviewdark.png"
          light-src="pccoxidationoverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Corey-Suggs Oxidation</h5>
      </div>
    </div>
  </a>
  <a href="/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="dmoreactionoverviewdark.png"
          light-src="dmoreactionoverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Dess Martin Oxidation</h5>
      </div>
    </div>
  </a>
  <a href="/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="sreactionoverviewnewdark.png"
          light-src="sreactionoverviewnewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Swern Oxidation</h5>
      </div>
    </div>
  </a>
</div>

### Carboxylic Acid

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
  <a href="/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="baeyeroverviewdark.png"
          light-src="baeyeroverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Baeyer-Villiger Oxidation</h5>
      </div>
    </div>
  </a>
  <a href="/docs/oxidation-reactions/dess-martin-oxidation/" class="card-link">
    <div class="hextra-card">
      <div class="card-body">
        {{<figure-dynamic-toggle
          dark-src="jonesoverviewdark.png"
          light-src="jonesoverviewlight.png"
          title=""
          width="300"
          height="150"
        >}}
        <h5 class="card-title">Jones Oxidation</h5>
      </div>
    </div>
  </a>
</div>


## Search by Reaction Type

### Mild

### Harsh

<!--more-->

{{< cards >}}
  {{< card link="organize-files" title="Organize Files" icon="document-duplicate" >}}
  {{< card link="configuration" title="Configuration" icon="adjustments" >}}
  {{< card link="markdown" title="Markdown" icon="markdown" >}}
  {{< card link="syntax-highlighting" title="Syntax Highlighting" icon="sparkles" >}}
  {{< card link="latex" title="LaTeX" icon="variable" >}}
  {{< card link="diagrams" title="Diagrams" icon="chart-square-bar" >}}
  {{< card link="shortcodes" title="Shortcodes" icon="template" >}}
  {{< card link="deploy-site" title="Deploy Site" icon="server" >}}
{{< /cards >}}
