---
title: Dess-Martin Oxidation
weight: 3
date: 2024-07-27
prev: /docs/corey-schmidt-oxidation
next: /docs/guide/shortcodes/callout
authors:
  - name: Devraj Bagchi
    link: https://chemlord.github.io/devthechemistt/
    image: /contact-us/avatar.jpg
---

<div style="text-align: left; margin-top: -0.2em; display: flex; flex-wrap: wrap; gap: 4px;">
{{< hextra/hero-badge link="/reactionrepo/docs/oxidation-reactions/dess-martin-oxidation/" >}}
  <span>Dess-Martin Oxidation</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
{{< hextra/hero-badge link="/reactionrepo/docs/oxidation-reactions/" >}}
  <span>Oxidation Reaction</span>
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
{{< hextra/hero-badge link="/docs/oxidation-reactions/#mild" >}}
  <span>Mild</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
</div>

{{<figure-dynamic-toggle
    dark-src="dmp1.png"
    light-src="dmp1.png"
>}}

<p>The Dess-Martin oxidation, developed by Dr. J.C Martin and his doctoral student Daniel Benjamin Dess, is a method used to oxidize primary alcohols to aldehydes and secondary alcohols to ketones using the Dess-Martin periodinane (DMP), a hypervalent iodine compound. This reagent is known for its mild conditions, high selectivity, and efficiency, making it a valuable tool in organic synthesis.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

{{< callout type="info">}}
This page is a directory containing Dess-Martin Oxidation Variations, reagent details derived from publications and a tribute to the principal investigator Dr. J.C. Martin.
{{< /callout >}}

## Oxidation Variations
{{< hextra/hero-subtitle >}}
  Here you can find the various types of Oxidation conditions and reagent combinations that utilize Dess Martin Oxidation.
{{< /hextra/hero-subtitle >}}

{{< tabs items="Without Water, With Water or Wet DCM, With IBX in DMSO/Other Solvents" defaultindex="1" >}}

  {{< tab >}}
  
 {{<figure-dynamic-toggle
    dark-src="DMPOverviewDarkFix.png"
    light-src="DMPOverviewLightFix.png"
    title="General Scheme of Dess Martin Oxidation"
    link="https://pubs.acs.org/doi/10.1021/jo00170a070">}}

<p>In the original paper "Readily Accessible 12-I-51 Oxidant for the Conversion of Primary and Secondary Alcohols to Aldehydes and Ketones." by Dess & Martin (1983), they discovered a novel and efficient reagent, periodinane 2 (DMP), used to convert primary alcohols to aldehydes and secondary alcohols to ketones.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

This was performed without the usage of water which was reported to accelerate the rate of oxidation. However, the mechanism is slightly modified in comparison the oxidation with water.

{{< /tab >}}

{{< tab >}}
  
 {{<figure-dynamic-toggle
    dark-src="waterd.png"
    light-src="waterl.png"
    title="General Scheme of Dess Martin Oxidation when water is introduced."
    link="">}}

<p>When water is introduced, the rate of oxidation increases which accelerates the reaction. However, in comparison to the oxidation with water, the mechanism is slightly different.<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p>

{{< /tab >}}

{{< tab >}}
  
 {{<figure-dynamic-toggle
    dark-src="ibxoverviewdark.png"
    light-src="ibxoverviewlight.png"
    title="General Scheme of Dess Martin Oxidation when IBX is used."
    caption="IBX with DMSO in room temperature can be used."
    link="https://pubs.acs.org/doi/10.1021/jo00170a070">}}

<p>In the paper "A mild oxidizing reagent for alcohols and 1,2-diols: o-iodoxybenzoic acid (IBX) in DMSO" by  Frigerio & Santagostino (1994), they discovered that o-Iodoxybenzoic acid (IBX) smoothly oxidizes primary and secondary alcohols to aldehydes and ketones.<a href="#fn3" id="ref3-anchor" class="superscript">3</a></p>

{{< /tab >}}

{{< /tabs >}}

### Full Articles on the Variations
{{< hextra/hero-subtitle >}}
  Use these to explore detailed articles on the variations.
{{< /hextra/hero-subtitle >}}

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
            dark-src="DMPOverviewDarkFix.png"
            light-src="DMPOverviewLightFix.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Oxidation without Water</h5>
        </div>
      </div>
    </a>
  </div>
</div>

{{< callout type="info" >}}
  Currently we only have an entry for oxidation without water. We are working dilligently to have more variations released.
{{< /callout >}}

## Dess-Martin Periodinane
{{< hextra/hero-subtitle >}}
  This section briefly goes over Dess-Martin Periodinane in detail ranging from definition to preparation.
{{< /hextra/hero-subtitle >}}

<p>Periodinane 2, also known as Dess-Martin Periodinane (DMP), was originally derived from 2-iodobenzoic acid and exhibited remarkable efficiency and selectivity. It was reported that DMP was soluble in other solvents such as in hexane or ether were deemed sparingly soluble. Additionally, it was deemed very soluble in dichloromethane, chloroform and acetonitrile. Dichloromethane (DCM) was reported as the primary solvent used as stated by Dess & Martin (1983).<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

{{<figure-dynamic-toggle
    dark-src="ReagentsDMPdark.png"
    light-src="ReagentsDMP.png"
    title="DMP and DCM"
    caption="Dess-Martin Periodinane (DMP) has three acetoxy groups bonded to the central iodine atom. DMP is highly soluble in DCM which makes DCM, the ideal solvent to use."
    link="https://pubs.acs.org/doi/10.1021/jo00170a070">}}

### Reagent Variations
{{< hextra/hero-subtitle >}}
  This section briefly goes variations of Dess Martin Periodinane.
{{< /hextra/hero-subtitle >}}

You may see different variations on how DMP is written out. The OAc group (Acetoxy) is a functional group you've seen before. The two Dess-Martin Periodinane structures depicted here are the same compound, shown in different notations and with varying ring structures.

{{<figure-dynamic-toggle
    dark-src="red2.png"
    light-src="red3.png"
    title="Variations of the Dess-Martin Periodinane"
    caption="Note: The Acetoxy group has been shortened. However an image reference has been provided to show what it looks like."
    >}}

{{<figure-dynamic-toggle
    dark-src="redhigh3.png"
    light-src="redhigh1.png"
    title="Acetoxy group highlighted in the full-form version of DMP alongside the hypervalent Iodine centre."
    caption="Note: The Acetoxy group has been shortened. However an image reference has been provided to show what it looks like."
    >}}

#### Acetoxy Group vs Acetate Ion
{{< hextra/hero-subtitle >}}
  This section briefly goes over the difference between a Acetoxy group vs Acetate ion.
{{< /hextra/hero-subtitle >}}

Understanding the distinction between the acetate ion and the acetoxy group is crucial in grasping the chemical behavior and reactivity of molecules like DMP. While the acetoxy group is part of the structure of DMP, it becomes an acetate ion upon leaving the molecule during the oxidation reaction, playing the as role as a good leaving group to become a stable, negatively charged ion.

{{<figure-dynamic-toggle
    dark-src="PURP2.png"
    light-src="whygod.png"
    title="Differences Between Acetoxy Group and Acetate Ion"
    caption="Here are the essential distinctions to understand."
>}}

|   | **Acetoxy Group (OAc)**   | **Acetate Ion (CH₃COO⁻)**  |
|---|---|---|
|  **Definition** | The OAc group (acetoxy) is a familiar functional group consisting of an acetyl group (CH₃CO) bonded to an oxygen atom. | The acetate ion is a charged particle with a negative electrical charge, formed when an acetoxy group is expelled and loses a hydrogen atom. |
| **Role in DMP**  | In DMP, three acetoxy groups are bonded to the central iodine atom, making them part of the larger molecule. | Has no role in DMP itself. |
|  **Formation & Notation** | R-OAc, where R represents the rest of the DMP molecule. | In reactions, when the OAc group is expelled from DMP, it becomes an acetate ion (CH₃COO⁻), carrying a negative charge as it takes an extra electron pair. |

## Reagent Preparation
{{< hextra/hero-subtitle >}}
  This section briefly explains how to prepare Dess Martin Periodinane.
{{< /hextra/hero-subtitle >}}

{{<figure-dynamic-toggle
    dark-src="dmpcreatedark.png"
    light-src="dmpcreatelight.png"
    title="Creation of DMP in a 2 step synthesis."
    caption="Note: Dess-Martin Periodinane is written in with in it's shortform."
    link="https://doi.org/10.1021/jo00103a067"
    >}}

The preparation of Dess-Martin Periodinane (DMP) involves **two key steps**:

{{% steps %}}

### Initial Treatment

<p>First, 2-iodobenzoic acid is treated with potassium bromate (KBrO<sub>3</sub>) in sulfuric acid (H<sub>2</sub>SO<sub>4</sub>), maintaining the temperature below 55°C during the addition of KBrO<sub>3</sub>. The mixture is then warmed to 65°C and stirred for 3.6 hours, producing the cyclic tautomer of 2-iodoxybenzoic acid with a 93% yield.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

### Product Formation

Next, a stirred slurry of 2-iodoxybenzoic acid in acetic anhydride and acetic acid is heated to 100°C until the solid dissolves. The solvent is then removed under vacuum at room temperature, resulting in a thick slurry, which is filtered in an inert atmosphere and washed with ether, yielding Periodinane 2 with an 87% overall yield from the iodobenzoic acid.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

{{% /steps %}}

### Reagent Facts
{{< hextra/hero-subtitle >}}
  This section goes over some universally known facts retrieved from the original paper by Dess & Martin (1983). 
{{< /hextra/hero-subtitle >}}

<p>DMP is easy to prepare, remains stable under proper storage conditions and is environmentally friendly, producing benign by-products compared to toxic chromium-based oxidizers which often required time-consuming filitration procedures.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

#### Reagent Resources
{{< hextra/hero-subtitle >}}
  This section displays different databases that host more information on Dess Martin Periodinane.
{{< /hextra/hero-subtitle >}}

{{< callout type="info" >}}
  Due to the variations in data such as molecular weight, melting point, etc., reported on the Dess-Martin Periodinane across various accredited databases, here are some reagent resources you can use to find more reagent data from specialized sources.
{{< /callout >}}

##### Chemspider

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
  color: #fff; /* Title color in dark mode */
}

.hextra-container .card-body {
  padding-top: 0; /* Remove top padding */
  color: #000; /* Body text color in light mode */
}

.dark .hextra-container .card-body {
  color: #fff; /* Body text color in dark mode */
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
    <a href="http://www.chemspider.com/Chemical-Structure.139925.html" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="chemspider1.png"
            light-src="chemspider1.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Chemspider Database Entry</h5>
        </div>
      </div>
    </a>
  </div>
</div>

##### Pubchem

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
  color: #fff; /* Title color in dark mode */
}

.hextra-container .card-body {
  padding-top: 0; /* Remove top padding */
  color: #000; /* Body text color in light mode */
}

.dark .hextra-container .card-body {
  color: #fff; /* Body text color in dark mode */
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
    <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Dess-Martin-periodinane" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="pubchemd.png"
            light-src="pubcheml.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Pubchem Database Entry</h5>
        </div>
      </div>
    </a>
  </div>
</div>

## Tribute to Dr. James Cullen Martin
{{< hextra/hero-subtitle >}}
  This section is a tribute to the late Dr. James Cullen Martin (1928-1999).
{{< /hextra/hero-subtitle >}}

{{<figure-dynamic-toggle
    dark-src="image.png"
    light-src="image.png"
    >}}

<p>James Cullen Martin (1928-1999), a prominent figure in organic chemistry community known for his work on hypervalent compounds, passed away on April 20, 1999. Martin's most notable contribution is the invention of the Dess-Martin Periodinane (DMP) in 1983, developed with his doctoral student Daniel Benjamin Dess.<a href="#fn4" id="ref4-anchor" class="superscript">4</a></p>

This reagent revolutionized the oxidation of alcohols, offering a straightforward synthesis and mild reaction conditions. DMP efficiently oxidizes primary alcohols to aldehydes and secondary alcohols to ketones, avoiding toxic by-products and simplifying the process. Its selective and environmentally friendly properties have made it a staple in laboratories worldwide.

Rest in Peace,<br>
**Dr. J.C. Martin**

{{< callout type="info">}}
If you would like to read more on Dr. James Cullen Martin and his personal life, please check out this [article](/reactionrepo/article-repository/tribute-to-jcmartin)
{{< /callout >}}

## Related Articles
{{< hextra/hero-subtitle >}}
  Browse all related Articles.
{{< /hextra/hero-subtitle >}}

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
  color: #fff; /* Title color in dark mode */
}

.hextra-container .card-body {
  padding-top: 0; /* Remove top padding */
  color: #000; /* Body text color in light mode */
}

.dark .hextra-container .card-body {
  color: #fff; /* Body text color in dark mode */
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
    <a href="/reactionrepo/article-repository/tribute-to-jcmartin" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="nail3.png"
            light-src="nail3.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Tribute to James Cullen Martin</h5>
        </div>
      </div>
    </a>
    <!-- New Card -->
    <a href="/reactionrepo/docs/oxidation-reactions/dess-martin-oxidation/oxidation-without-water/" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="DMPOverviewDarkFix.png"
            light-src="DMPOverviewLightFix.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Dess Martin Oxidation w/o Water</h5>
        </div>
      </div>
    </a>
  </div>
</div>

## References

<style>
  .hanging-indent {
    margin-left: 2em; /* Adjust as needed */
    text-indent: -2em; /* Matches the margin-left */
  }
  .reference {
    font-size: 1em; /* Normal sized number */
  }
  .superscript {
    font-size: 0.8em; /* Superscripted number */
    vertical-align: super;
  }
  .bold-number {
    font-weight: bold;
  }
  .anchor {
    display: block;
    height: 50px; /* Adjust the height to position the anchor correctly */
    margin-top: -50px; /* Adjust the margin to match the height */
    visibility: hidden;
  }
</style>

<!-- Content with custom footnotes -->

<!-- Additional invisible anchor at the desired return position -->
<a id="ref1-top" class="anchor"></a>

<!-- Image with the first citation -->
<div>
    <a id="fn1" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="darkcitation.png" 
        light-src="lightcitation.png"
        link="https://doi.org/10.1021/jo00356a052"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">1.</span> Dess, D. B.; Martin, J. C. Readily Accessible 12-I-51 Oxidant for the Conversion of Primary and Secondary Alcohols to Aldehydes and Ketones. <i>J. Org. Chem.</i> <b>1983</b>, <i>48</i>, 4155–4156. DOI: <a href="https://doi.org/10.1021/jo00356a052">10.1021/jo00356a052</a>. <a href="#ref1-anchor">↩</a></span></p>
</div>

<!-- Updated citations with figure-dynamic-toggle -->

<div>
    <a id="fn2" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="dmpwaterd.png" 
        light-src="dmpwaterl.png"
        link="https://doi.org/10.1021/jo00103a067"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">2.</span> Meyer, S. D.; Schreiber, S. L. Acceleration of the Dess-Martin Oxidation by Water. <i>J. Org. Chem.</i> <b>1994</b>, <i>59</i>, 7549–7552. DOI: <a href="https://doi.org/10.1021/jo00103a067">10.1021/jo00103a067</a>. <a href="#ref2-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn3" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="ibxcitation2.png" 
        light-src="ibxcitation1.png"
        link="https://doi.org/10.1016/0040-4039(94)80038-3"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">3.</span> Frigerio, M.; Santagostino, M. A mild oxidizing reagent for alcohols and 1,2-diols: o-iodoxybenzoic acid (IBX) in DMSO. <i>Tetrahedron Lett.</i> <b>1994</b>, <i>35</i>, 8019–8022. DOI: <a href="https://doi.org/10.1016/0040-4039(94)80038-3">10.1016/0040-4039(94)80038-3</a>. <a href="#ref3-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn4" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">4.</span> University of Illinois Archives, "Martin, James C." Available at: <a href="https://archives.library.illinois.edu/archon/?p=creators/creator&id=3886">https://archives.library.illinois.edu/archon/?p=creators/creator&id=3886</a>. Accessed June 29, 2024. <a href="#ref4-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn5" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">5.</span> Akiba, K.-y. Memoirs of Professor James Cullen Martin. <i>Phosphorus, Sulfur, and Silicon</i> <b>2006</b>, <i>181</i>, 1201–1215. DOI: <a href="https://doi.org/10.1080/10426500500326321">10.1080/10426500500326321</a>. <a href="#ref5-anchor">↩</a></span></p>
</div>