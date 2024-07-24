---
title: Corey Schmidt Oxidation
date: 2024-07-06
weight: 3
prev: /docs/oxidation-reactions/dess-martin-oxidation
next: /docs/guide/shortcodes/callout
authors:
  - name: Devraj Bagchi
    link: https://github.com/imfing
    image: /contact-us/avatar.jpg
---

<div style="text-align: left; margin-top: -0.2em; display: flex; flex-wrap: wrap; gap: 4px;">
{{< hextra/hero-badge link="/reactionrepo/docs/oxidation-reactions/" >}}
  <span>Oxidation</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
{{< hextra/hero-badge link="/reactionrepo/docs/oxidation-reactions/#aldehyde" >}}
  <span>Aldehyde</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
{{< hextra/hero-badge link="/reactionrepo/docs/oxidation-reactions/#aldehyde" >}}
  <span>Ketone</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
{{< hextra/hero-badge link="/reactionrepo/docs/oxidation-reactions/#aldehyde" >}}
  <span>Carboxylic Acid</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
{{< hextra/hero-badge link="/docs/oxidation-reactions/#mild" >}}
  <span>Mild</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
{{< hextra/hero-badge link="/docs/oxidation-reactions/#mild" >}}
  <span>Harsh</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
</div>

<div style="text-align: left; margin-top: 0.4em;">
{{< hextra/hero-badge link="/docs/oxidation-reactions/#mild" >}}
  <span>Harsh</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
</div>

<p>The Corey-Schmidt oxidation, developed by E.J Corey and Greg Schmidt, is a method used to oxidize primary alcohols to aldehydes and secondary alcohols to ketones using pyridinium dichromate (PDC), also known as the Cornforth reagent.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

{{< callout type="info">}}
This page is a directory containing Corey-Schmidt Oxidation Variations, reagent details derived from publications and a brief author section dedicated Elias J. Corey.
{{< /callout >}}

## Oxidation Variations

{{< tabs items="Oxidation with DCM, Oxidation with DMF" defaultindex="1" >}}

  {{< tab >}}
  
 {{<figure-dynamic-toggle
    dark-src="PDCReagentOverviewFixD.png"
    light-src="PDCReagentOverviewFixL.png"
    title="General Scheme of the Corey-Schmidt Oxidation"
    link="https://doi.org/10.1016/S0040-4039(01)93515-4">}}

<p>In the original paper "Useful procedures for the oxidation of alcohols involving pyridinium dichromate in aprotic media." by Corey & Schmidt (1979), they discovered a novel method using pyridinium dichromate (PDC), used to convert primary alcohols to aldehydes and secondary alcohols to ketones.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

{{< /tab >}}

{{< tab >}}

 {{<figure-dynamic-toggle
    dark-src="PDCReagentOverviewFixDMFD.png"
    light-src="PDCReagentOverviewFixDMFL.png"
    title="General Scheme of Corey-Schmidt Oxidation when DMF is used as a solvent for Primary and Secondary Alcohols"
    link="">}}

PDC with DMF as a solvent can selectively oxidize a multitude of different functional groups and compounds. Here are a brief list of what it can oxidize: PDCacrossDMFD

### Primary and Secondary Alcohols

{{<figure-dynamic-toggle
    dark-src="PDCacrossDMFD.png"
    light-src="PDCacrossDMFL.png"
    title="DMF is used as a solvent for Primary and Secondary Alcohols in order to oxidize them into Carboxylic Acids and Ketones"
    link="">}}

<p>In the original paper "Useful procedures for the oxidation of alcohols involving pyridinium dichromate in aprotic media." by Corey & Schmidt (1979) reported that PDC/DMF can be used to readily oxidize non-conjugated primary alcohols to carboxylic acids at 25°C.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

<p>Additionally, Corey & Schmidt reported that PDC/DMF can be used to oxidize secondary alcohols to Ketones.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

### Aldehydes to Carboxylic Acids

<p>There are also more additional uses for this reagent combination such as allowing for Aldehydes to be converted to Carboxylic Acids. Lactols can also be converted to Lactones under mild conditions.<a href="#fn2" id="ref2-anchor" class="superscript">2</a> <a href="#fn3" id="ref3-anchor" class="superscript">3</a></p>

### Lactols (Acetals) to Lactones

### Tertiary allylic alcohols to enones

### Allylic positions in alkenes to enones

<p>Lastly, PDC in DMF can oxidize tertiary allylic alcohols to enones and allylic positions in alkenes to enones.<a href="#fn3" id="ref3-anchor" class="superscript">3</a></p>

{{< /tab >}}

{{< /tabs >}}

### Full Articles on the Variations

<style>
.hextra-container .hextra-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem; /* Add margin to create space between the header and the cards */
}

.hextra-container .hextra-card {
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

.hextra-container .hextra-card:hover {
  transform: scale(1.03); /* Slightly reduced scale to avoid large shadows */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Less intense shadow */
  background-color: rgba(0, 0, 0, 0.03); /* Subtle highlight effect for light mode */
}

.dark .hextra-container .hextra-card {
  border-color: #4c4c4c; /* More visible outline color for dark mode */
}

.dark .hextra-container .hextra-card:hover {
  background-color: rgba(255, 255, 255, 0.05); /* Subtle highlight effect for dark mode */
  box-shadow: 0 6px 12px rgba(255, 255, 255, 0.15); /* Consistent shadow effect for dark mode */
}

.hextra-container .hextra-card img {
  user-select: none;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 0.5rem; /* Adjust spacing below the image */
}

.hextra-container .hextra-card:hover img {
  transform: scale(1.03); /* Consistent scale with card */
  box-shadow: none; /* Remove shadow from the image */
}

.hextra-container .card-title {
  margin: 0.5rem 0 0; /* Adjust spacing for the title */
  transition: color 0.3s ease;
  color: #000; /* Title color in light mode */
}

.dark .hextra-container .card-title {
  color: #3498db; /* Title color in dark mode */
}

.hextra-container .card-body {
  padding-top: 0; /* Remove top padding */
}

.dark .hextra-container .hextra-card svg {
  color: #ffffff66;
}

.dark .hextra-container .hextra-card:hover svg {
  color: currentColor;
}

.hextra-container a.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>

<div class="hextra-container">
  <div class="hextra-cards">
    <a href="/reactionrepo/docs/oxidation-reactions/dess-martin-oxidation/oxidation-without-water" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="fullpdcmechdark.png"
            light-src="fullpdcmechlight.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Oxidation with DCM</h5>
        </div>
      </div>
    </a>
    <a href="/docs" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="primsdfull.png"
            light-src="fullprimmechl.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Oxidation with DMF</h5>
        </div>
      </div>
    </a>
  </div>
</div>

{{< callout type="info" >}}
  Currently we only have an entry for oxidation with DCM. We are working dilligently to have more variations released.
{{< /callout >}}

## Pyridinium dichromate

<p>PDC is a stable, bright orange solid soluble in various organic solvents, including DMF and DCM, which allows for anhydrous conditions. It offers advantages over PCC for acid-sensitive substrates, providing high selectivity and effectiveness under mild conditions suitable for complex and sensitive molecules.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

{{<figure-dynamic-toggle
    dark-src="pdcreagentsdark.png"
    light-src="guessreagentlightpdc.png"
    title=""
    caption=""
>}}

### Reagent Variations

### Reagent Preparation

{{% steps %}}

### Step 1

This is the first step.

### Step 2

This is the second step.

{{< cards >}}
  {{< card link="../callout" title="Callout" icon="warning" >}}
  {{< card link="/" title="No Icon" >}}
{{< /cards >}}

{{% /steps %}}
