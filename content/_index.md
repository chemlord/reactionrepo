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

  .highlight, .highlight2, .highlight3 {
    background-color: transparent; /* Remove highlight background */
    border-radius: 0; /* Remove rounded corners */
    padding: 0; /* Remove padding */
    color: inherit; /* Use the default text color */
    font-weight: normal; /* Remove bold text */
    font-size: inherit; /* Use the default font size */
  }

  .hx-wide {
    width: 100%; /* Or any other width you need */
    max-width: 100%; /* Ensure it doesn't exceed the container */
  }
</style>

{{< hextra/hero-badge link="/reactionrepo/docs/oxidation-reactions/dess-martin-oxidation/">}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  <span>Showcasing our new Dess Martin Oxidation Entry</span>
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx-mt-6 hx-mb-4">
{{< hextra/hero-headline >}}
  Confused with Reactions? <br> We can help.
{{< /hextra/hero-headline >}}
</div>

<div class="hx-mb-6">
{{< hextra/hero-subtitle >}}
  Chemistry Documentation and guides,&nbsp;<br class="sm:hx-block hx-hidden" />to learn and master chemical reactions.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx-mb-6">
{{< hextra/hero-button text="Browse Reactions" link="docs" >}}
</div>

{{< hextra/feature-grid >}}

{{< hextra/feature-card
    title="Detailed Entries"
    subtitle="In-depth entries with mechanisms and conditions."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/homepage1.png"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    link="/reactionrepo/docs/"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(203, 28, 66, 0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Meticulous Referencing"
    subtitle="Entries are thoroughly referenced to ensure accuracy."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/homepage2.png"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    link="/reactionrepo/docs/"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(45,175,233,0.15),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Practice Flashcards"
    subtitle="Plenty of Flashcards to test your knowledge."
    class="hx-aspect-auto md:hx-aspect-[1.1/1] max-md:hx-min-h-[340px]"
    image="/images/homepage3.png"
    imageClass="hx-top-[20%] hx-left-[24px] hx-w-[180%] sm:hx-w-[110%] dark:hx-opacity-80"
    link="/reactionrepo/docs/"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
  >}}
{{< /hextra/feature-grid >}}

