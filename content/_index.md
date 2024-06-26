---
title: Reaction Repo
layout: hextra-home
toc: false
width: normal
---
<style>
  body {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

/* Light mode background */
@media (prefers-color-scheme: light) {
  body {
    background-image: url('https://chemlord.github.io/reactionrepo/image-test/hexagonlight2.svg');
  }
}

/* Dark mode background */
@media (prefers-color-scheme: dark) {
  body {
    background-image: url('https://chemlord.github.io/reactionrepo/image-test/hexagonlight2.svg');
  }
}

.content-wrapper {
  position: relative;
  z-index: 1;
}

.highlight {
  background-color: #bdd4f4; /* Adjust the highlight color as needed */
  border-radius: 15px; /* Make the corners slightly rounded */
  padding: 0.1em -0.2em; /* Fine-tune padding to match text bounds */
  display: inline; /* Ensures the highlight only covers the text */
  line-height: 1.4; /* Adjust line-height to ensure vertical alignment */
  margin: 0; /* Remove any default margin */
  color: #1a73e8; /* Set the text color to match */
}

.highlight2 {
  background-color: #bdd4f4; /* Adjust the highlight color as needed */
  border-radius: 10px; /* Make the corners slightly rounded */
  padding: 0.1em 0.2em; /* Fine-tune padding to match text bounds */
  display: inline; /* Ensures the highlight only covers the text */
  line-height: 1.4; /* Adjust line-height to ensure vertical alignment */
  margin: 0; /* Remove any default margin */
  color: #1a73e8; /* Set the text color to match */
}

.custom-image-class {
  margin-top: 20px; /* Adjust as needed */
  margin-bottom: 20px; /* Adjust as needed */
  margin-right: 150px;
  /* Additional styling */
}

.hx-wide {
  width: 100%; /* Or any other width you need */
  max-width: 100%; /* Ensure it doesn't exceed the container */
}

  </style>

{{< hextra/hero-container
  image="/images/process.png"
  imageClass="hx-block hx-overflow-hidden hx-wide"
  imageWidth="595" imageHeight="800"
  imageTitle="REACTIONREPO"
>}}

{{< hextra/hero-badge link="/reactionrepo/docs/oxidation-reactions/dess-martin-oxidation/">}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  <span>Showcasing our new Dess Martin Oxidation Entry</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx-mt-6 hx-mb-6">
  {{< hero-headline >}}
Discover ⌕&nbsp;<br class="sm:hx-block hx-hidden" />
Learn ✎<br />
<mark class="highlight">Master 🕮</mark>
{{< /hero-headline >}}
</div>

<div class="hx-mb-4">
{{< hextra/hero-subtitle >}}
  Here to Make Mastery <mark class="highlight2">easy ✔</mark>
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx-mb-8">
{{< hextra/hero-button text="Browse Reactions" link="/docs/" >}}
</div>

{{< /hextra/hero-container >}}

{{< hextra/feature-grid >}}
  {{< feature-card
    title="Steps by Steps Guides" icon="search"
    subtitle="Detailed tutorials to master complex reactions with ease. Comprehensive summaries of essential organic reactions. Sorted and Curated Meticulously for Users."
    link="/reactionrepo/docs"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(203, 28, 66, 0.15),hsla(0,0%,100%,0));"
  >}}
  
  {{< feature-card
    title="Open Source and Free" icon="book-open"
    subtitle="Access a plethora of free resources and quizzes to solidify your learning."
    link="/doc/applications"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(45,175,233,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< feature-card
    title="Interactive Visuals" icon="cursor-click"
    subtitle="Resources to help you visualize and understand reactions better."
    link="/doc/addons"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
  >}}
   {{< hextra/feature-card
    title="Detailed Entries"
    subtitle="In-depth entries with mechanisms and conditions."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/test12.png"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    link="/k3s-cluster/"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(203, 28, 66, 0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Meticulous Referencing"
    subtitle="Entries are thoroughly referenced to ensure accuracy."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/test5.png"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    link="/k3s-cluster/tutorials/handbook/argocd/"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(45,175,233,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Practice Problems and Quizzes"
    subtitle="Over 600+ practice problems to test your knowledge."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/logoroundedsquare.png"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    link="/k3s-cluster/"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
  >}}

{{< /hextra/feature-grid >}}
