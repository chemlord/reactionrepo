---
title: Swern Oxidation
date: 2024-08-01
weight: 3
prev: 
next: 
authors:
  - name: Devraj Bagchi
    link: https://chemlord.github.io/devthechemistt/
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
{{< hextra/hero-badge link="/docs/oxidation-reactions/#mild" >}}
  <span>Mild</span>
  {{< icon name="beaker" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
</div>

<p>The Swern oxidation, developed by Kanji Omura and Daniel Swern in 1978, is a method used to oxidize primary alcohols to aldehydes and secondary alcohols to ketones using activated dimethyl sulfoxide (DMSO), oxalyl chloride, triethylamine (TEA) and dichloromethane (DCM).<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

{{< callout type="info">}}
This page is a directory containing Swern Oxidation Variations, reagent details derived from publications, related articles and references.
{{< /callout >}}

## Oxidation Variations
{{< hextra/hero-subtitle >}}
  Here you can find the various types of Oxidation conditions and reagent combinations that utilize Swern Oxidation.
{{< /hextra/hero-subtitle >}}

{{< tabs items="Oxidation with DMSO Activation using Oxalyl Chloride, Oxidation with Other Methods of DMSO Activation" defaultindex="1" >}}

  {{< tab >}}
  
 {{<figure-dynamic-toggle
    dark-src="RegularSwernOverviewD.png"
    light-src="RegularSwernOverviewL.png"
    title="General Scheme of the Swern Oxidation"
    caption="This general scheme only occurs when DMSO is activated using Oxalyl Chloride."
    link="https://www.sciencedirect.com/science/article/abs/pii/0040402078801975?via%3Dihub">}}

<p>According to Omura and Swern, Oxalyl Chloride was the most effective activator of DMSO which had high yields (>95%) at low temperatures (-60°C to -20°C). There was a minor dependence on reaction temperature reported in the paper. For this reason, Oxalyl chloride is the most preferred oxidizing agent used alongside DMSO in Swern Oxidations for alcohols. <a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

{{< /tab >}}

{{< tab >}}

 {{<figure-dynamic-toggle
    dark-src="DMSOActivationFullBoxDark.png"
    light-src="DMSOActivationFullBoxLight.png"
    title="List of other DMSO Activators"
    caption="This list of chemicals were compiled from the Omura & Swern (1978)."
    link="https://www.sciencedirect.com/science/article/abs/pii/0040402078801975?via%3Dihub">}}

### Comparative Effectiveness of DMSO Activators

| Activator                          | Effectiveness                                        | Specific Cases and Notes                                                                |
|------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------------------------|
| **Oxalyl Chloride**                | Highest yields, effective for most alcohols          | - Generally over 95% yield at -60°C to -20°C regardless of steric factors. Less sensitive to reaction temperature up to -20°C.                |
| **Thionyl Chloride**               | Good yields, slightly less effective than oxalyl chloride | - Effective but yields not as high as oxalyl chloride                                   |
| **Trifluoroacetic Anhydride (TFAA)** | Effective but costly and toxic                        | - Effective for a wide range of alcohols. Less effective for primary alcohols compared to oxalyl chloride                       |
| **Acetic Anhydride**               | Lower yields, significant by-products                | - Yields of carbonyls typically around 30%. Major by-products include alkyl methylthiomethyl ethers and acetates                  |
| **Cyanuric Chloride**              | Useful in specific cases, steric effects observed    | - Effective with secondary alcohols, especially hindered ones. Yields of carbonyls: DIPEA (95%), DECA (93%), TEA (80%), DEMA (47%)                   |
| **Methanesulfonyl Chloride**       | Useful in specific cases, steric effects observed    | - Effective with secondary alcohols, particularly hindered ones. Yields of carbonyls: DIPEA (94%), DECA (92%), TEA (68%), DEMA (45%)                   |

{{< /tab >}}

{{< /tabs >}}

### Full Articles on Variations
{{< hextra/hero-subtitle >}}
  Check out the full articles.
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
    <a href="#" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="RegularSwernOverviewD.png"
            light-src="RegularSwernOverviewL.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Oxidation with Oxalyl chloride</h5>
        </div>
      </div>
    </a>
  </div>
</div>

## The Preferred Oxidizing Agent

{{< hextra/hero-subtitle >}}
  Oxalyl chloride is most preferred. But why?
{{< /hextra/hero-subtitle >}}

<p>Among various DMSO activation methods, **oxalyl chloride** stands out as the most effective, consistently yielding over 95% across a wide range of alcohols, mainly primary and secondary alcohols. Its high efficiency and minimal side reactions make it the **preferred choice** for alcohol oxidation.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

<p>**Thionyl chloride** also produces good yields but is slightly less effective than oxalyl chloride. **TFAA** is effective but its *high cost and toxicity*, lower it's desirability despite good results. <a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

<p>**Acetic anhydride** results in lower yields and significant by-products, making it less favorable. **Cyanuric chloride** and **methanesulfonyl chloride** are useful in specific cases, particularly with hindered alcohols, yielding up to 95% when used with certain bases like DIPEA. <a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

<p>Overall, **oxalyl chloride is the most optimal DMSO activator and oxidizing agent** due to its high yield and broad applicability in alcohol oxidation. <a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

## By-Product Concerns
{{< hextra/hero-subtitle >}}
  Concerns regarding toxicity and chemical exposure.
{{< /hextra/hero-subtitle >}}

<br>

{{<figure-dynamic-toggle
    dark-src="swernreagentsdark.png"
    light-src="swernreagentslight.png"
    title="Main reagents for Swern Oxidation using DMSO, Oxalyl chloride, TEA and DCM"
    caption="This is the most optimal combination of reagents to give the highest yield for the oxidation of alcohols."
    link="https://doi.org/10.1016/S0040-4039(01)93515-4">}}

### Dimethyl Sulfide (DMS)
{{< hextra/hero-subtitle >}}
  This section details the toxicity and exposure of DMS in detail.
{{< /hextra/hero-subtitle >}}

| **Attribute**   | **Details** |
|--------------|-------------|
| **Formation** | DMS is produced as a by-product post oxidation. |
| **Toxicity**  | DMS is flammable and poses health hazards including irritation of the eyes, skin, and respiratory system. Prolonged exposure can lead to more severe health effects such as headaches, dizziness, and nausea. |
| **Odor**      | <p>DMS is known for its strong, unpleasant odor, which can be a **significant issue** in laboratory settings.To effectively manage the strong, unpleasant odor of DMS (dimethyl sulfide), several methods have been documented.<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p><br>{{<figure-dynamic-toggle
    dark-src="newbleachoxd.png"
    light-src="newbleachoxl.png"
    link="https://doi.org/10.1016/S0040-4039(01)93515-4">}} <p>Chemical oxidation is one method which is commonly employed, where bleach oxidation through the usage of sodium hypochlorite pentahydrate (NaOCl·5H2O) can oxidize DMS into less odorous compounds such as dimethyl sulfoxide and dimethyl sulfone.<a href="#fn3" id="ref3-anchor" class="superscript">3</a></p> <p>Another solution is using activated carbon to absorb DMS from vent streams, providing a straightforward scrubbing solution.<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p> <p>Additionally, Atkins et al. (2006) describe using potassium persulfate (Oxone) for similar oxidation processes, further reducing the presence of DMS <a href="#fn2" id="ref2-anchor" class="superscript">2</a></p> |

#### Database Info

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
    <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Dimethyl-sulfide" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="PUBCHEMDMS.png"
            light-src="PUBCHEMDMSL.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">PubChem Entry</h5>
        </div>
      </div>
    </a>
    <!-- New Card -->
    <a href="https://www.osha.gov/chemicaldata/912" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="OSHADMS.png"
            light-src="OSHADMS.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">OSHA Entry</h5>
        </div>
      </div>
    </a>
  </div>
</div>

### Oxalyl Chloride

| **Attribute** | **Details** |
|-----------|---------|
| **Reaction**  | Oxalyl chloride is the most effective activator for DMSO in Swern oxidation, yielding high amounts of carbonyl products. |
| **Toxicity**  | Oxalyl chloride is highly toxic and corrosive, producing harmful gases such as carbon monoxide and phosgene upon decomposition. It can cause severe respiratory damage, skin burns, and eye irritation upon contact. |

#### Database Info

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
            dark-src="puboxad.png"
            light-src="puboxal.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">PubChem Entry</h5>
        </div>
      </div>
    </div>
  </div>
</a>

### Triethylamine (TEA)

| **Attribute** | **Details** |
|-----------|---------|
| **Role**      | TEA acts as a base in the Swern oxidation, facilitating the formation of the carbonyl product. |
| **Toxicity**  | TEA is corrosive and can cause severe burns to the skin and eyes. Inhalation of TEA vapors can result in respiratory irritation and, at higher concentrations, pulmonary edema. It is also flammable and should be handled with care. |

#### Database Info

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
    <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Triethylamine" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="pubchemtead.png"
            light-src="pubchemteal.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">PubChem Entry</h5>
        </div>
      </div>
    </a>
    <!-- New Card -->
    <a href="https://www.osha.gov/chemicaldata/165" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="OSHATea.png"
            light-src="OSHATea.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">OSHA Entry</h5>
        </div>
      </div>
    </a>
  </div>
</div>

### Dichloromethane (DCM)

| **Attribute** | **Details** |
|-----------|---------|
| **Use**       | DCM is commonly used as a solvent in Swern oxidation. |
| **Toxicity**  | DCM is toxic and a potential carcinogen. It can cause central nervous system depression, and chronic exposure may result in liver and kidney damage. Inhalation of high concentrations can lead to dizziness, nausea, and loss of consciousness. |

#### Database Info

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
    <a href="https://pubchem.ncbi.nlm.nih.gov/compound/6344" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="pubdcmd.png"
            light-src="pubdcml.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">PubChem Entry</h5>
        </div>
      </div>
    </a>
    <!-- New Card -->
    <a href="https://www.osha.gov/chemicaldata/572" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="OSHADCM.png"
            light-src="OSHADCM.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">OSHA Entry</h5>
        </div>
      </div>
    </a>
  </div>
</div>

## Tribute to Dr. Daniel A. Swern
{{< hextra/hero-subtitle >}}
  Tribute dedicated to Daniel Swern (1916-1982)
{{< /hextra/hero-subtitle >}}

{{<figure-dynamic-toggle
    dark-src="image.png"
    light-src="image.png"
    link="https://doi.org/10.1016/S0040-4039(01)93515-4">}}

<p>Dr. Daniel A. Swern (1916–1982) was a distinguished chemist known for his works on flexible plastics and advancements in lipid chemistry. During World War II, his work with the USDA led to breakthroughs in transforming polyvinyl chlorides into more versatile plastics.<a href="#fn11" id="ref11-anchor" class="superscript">11</a></p>

<p>Later, as a professor at Temple University, he published over 280 research papers and received numerous awards, including the AOCS Bailey Award and Temple University Faculty Award for Research and Creative Achievements. Dr. Swern sadly passed away aged 66, leaving behind a lasting impact on chemists and materials scientists.<a href="#fn12" id="ref12-anchor" class="superscript">12</a></p>

Rest in Peace,<br>
**Dr. Daniel Swern**

{{< callout type="info">}}
If you would like to read more on Dr. Daniel A. Swern and his personal life, please check out this [article](). Please note that the article is still a work in progress.
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
    <a href="#" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="nail2.png"
            light-src="nail2.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Tribute to Dr. Daniel A. Swern</h5>
        </div>
      </div>
    </a>
    <!-- New Card -->
    <a href="#" class="card-link">
      <div class="hextra-card">
        <div class="card-body">
          {{<figure-dynamic-toggle
            dark-src="RegularSwernOverviewD.png"
            light-src="RegularSwernOverviewL.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Oxidation with Oxalyl chloride</h5>
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

<div>
    <a id="fn1" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="citationdark1978.png" 
        light-src="citationlight1978.png"
        link="https://doi.org/10.1016/0040-4020(78)80197-5"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">1.</span> Omura, K.; Swern, D. Oxidation of Alcohols by “Activated” Dimethyl Sulfoxide. A Preparative, Steric and Mechanistic Study. <i>Tetrahedron</i> <b>1978</b>, <i>34</i> (11), 1651–1660. DOI: <a href="https://doi.org/10.1016/0040-4020(78)80197-5">10.1016/0040-4020(78)80197-5</a>. <a href="#ref1-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn2" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="placeholdercitationd.png" 
        light-src="placeholdercitationl.png"
        link="https://doi.org/10.1021/op068011l"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">2.</span> Atkins, W. J., Jr.; Burkhardt, E. R.; Matos, K. Safe Handling of Boranes at Scale. <i>Org. Process Res. Dev.</i> <b>2006</b>, <i>10</i> (6), 1292–1295. DOI: <a href="https://doi.org/10.1021/op068011l">10.1021/op068011l</a>. <a href="#ref2-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn3" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="citationbox2015d.png" 
        light-src="citationbox2015l.png"
        link="https://doi.org/10.1016/0040-4020(78)80197-5"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">3.</span> Okada, T.; Matsumuro, H.; Kitagawa, S.; Iwai, T.; Yamazaki, K.; Kinoshita, Y.; Kimura, Y.; Kirihara, M. Selective Synthesis of Sulfoxides through Oxidation of Sulfides with Sodium Hypochlorite Pentahydrate Crystals. <i>Synlett</i> <b>2015</b>, <i>26</i> (18), 2547–2552. DOI: <a href="https://doi.org/10.1055/s-0035-1560482">10.1055/s-0035-1560482</a>. <a href="#ref3-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn4" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">4.</span> PubChem Compound Summary for CID 1068, Dimethyl Sulfide. Available at: <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Dimethyl-sulfide">https://pubchem.ncbi.nlm.nih.gov/compound/Dimethyl-sulfide</a>. Accessed July 29, 2024. <a href="#ref4-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn5" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">5.</span> Occupational Safety and Health Administration (OSHA). Dimethyl Sulfide. Available at: <a href="https://www.osha.gov/chemicaldata/912">https://www.osha.gov/chemicaldata/912</a>. Accessed July 29, 2024. <a href="#ref5-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn6" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">6.</span> PubChem Compound Summary for CID 7891, Oxalyl Chloride. Available at: <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Oxalyl-chloride">https://pubchem.ncbi.nlm.nih.gov/compound/Oxalyl-chloride</a>. Accessed July 29, 2024. <a href="#ref6-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn7" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">7.</span> PubChem Compound Summary for CID 8471, Triethylamine. Available at: <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Triethylamine">https://pubchem.ncbi.nlm.nih.gov/compound/Triethylamine</a>. Accessed July 29, 2024. <a href="#ref7-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn8" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">8.</span> Occupational Safety and Health Administration (OSHA). Triethylamine. Available at: <a href="https://www.osha.gov/chemicaldata/165">https://www.osha.gov/chemicaldata/165</a>. Accessed July 29, 2024. <a href="#ref8-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn9" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">9.</span> PubChem Compound Summary for CID 6344, Dichloromethane. Available at: <a href="https://pubchem.ncbi.nlm.nih.gov/compound/dichloromethane">https://pubchem.ncbi.nlm.nih.gov/compound/dichloromethane</a>. Accessed July 29, 2024. <a href="#ref9-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn10" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">10.</span> Occupational Safety and Health Administration (OSHA). Dichloromethane. Available at: <a href="https://www.osha.gov/chemicaldata/572">https://www.osha.gov/chemicaldata/572</a>. Accessed July 29, 2024. <a href="#ref10-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn11" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">11.</span> After Deadline. <i>J. Am. Oil Chem. Soc.</i> <b>1983</b>, <i>60</i> (1), 5. DOI: <a href="https://doi.org/10.1007/BF02540885">10.1007/BF02540885</a>. <a href="#ref11-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn12" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">12.</span> Daniel Swern, 66, Researcher Who Developed New Plastics. <i>The New York Times</i>, December 8, 1982. Available at: <a href="https://www.nytimes.com/1982/12/08/obituaries/daniel-swern-66-researcher-who-developed-new-plastics.html">https://www.nytimes.com/1982/12/08/obituaries/daniel-swern-66-researcher-who-developed-new-plastics.html</a>. Accessed July 29, 2024. <a href="#ref12-anchor">↩</a></span></p>
</div>





