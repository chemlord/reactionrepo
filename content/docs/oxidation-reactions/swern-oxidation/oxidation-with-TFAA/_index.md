---
title: Oxidation with TFAA
linkTitle: Oxidation with TFAA
date: 2024-08-26
authors:
  - name: Devraj Bagchi
    link: https://chemlord.github.io/devthechemistt/
    image: /contact-us/avatar.jpg
---

<div style="text-align: left; margin-top: -0.2em; display: flex; flex-wrap: wrap; gap: 4px;">
{{< hextra/hero-badge link="/reactionrepo/docs/oxidation-reactions/dess-martin-oxidation/" >}}
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

{{<figure-dynamic-toggle
    dark-src="tfaadark.png"
    light-src="tfaalight.png"
    title="General Scheme of Swern Oxidation using TFAA"
    link="#">}}

<p> Swern Oxidation, a mild oxidation method used to oxidize primary alcohols to aldehydes and secondary alcohols to ketones is able to use TFAA as an activator of DMSO. This method is costly and less effective than Oxalyl chloride but was a effective activator prior to the usage of oxalyl chloride.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

## Summary
{{< hextra/hero-subtitle >}}
  The reaction entry summary. Find the general scheme and full summarized mechanisms here.
{{< /hextra/hero-subtitle >}}

### General Scheme
{{< hextra/hero-subtitle >}}
  This section briefly summarizes what can and cannot undergo reactions.
{{< /hextra/hero-subtitle >}}

{{<figure-dynamic-toggle
        dark-src="TFAASumdark.png" 
        light-src="tfaasumlight.png"
    >}}

- 1° Alcohols (Primary) get oxidized to **Aldehydes**.
- 2° Alcohols (Secondary) get oxidized to **Ketones**.
- 3° Alcohols (Tertiary) **do not** get oxidized at all.

### General Mechanism
{{< hextra/hero-subtitle >}}
  This section briefly summarizes steps to find the product and perform the mechanisms.
{{< /hextra/hero-subtitle >}}

**Quick steps to finding the product for any alcohol**
1. Identify the reagents.
2. Assign side chains (non alcohol part).
3. Selectively convert Alcohol to correct product based on alcohol type. Nothing else.
4. Keep the side chains (non alcohol part) the same and piece together the full molecule together again.

{{% details title="Full Primary Alcohol to Aldehyde Mechanism" closed="true" %}}

{{<figure-dynamic-toggle
    dark-src="TFAAdarkmechsecondarynonumbersprimary3.png" 
    light-src="TFAAlighttmechsecondarynonumbersprimary.png"   
>}}

{{< /details >}}

{{% details title="Full Secondary Alcohol to Ketone Mechanism" closed="true" %}}

{{<figure-dynamic-toggle
    dark-src="TFAAdarkmechsecondarynonumbers2.png" 
    light-src="TFAAlightmechsecondarynonumbers2.png"   
>}}

{{< /details >}}

{{% callout type="info" %}}
Always remember to repeatedly practice your mechanisms and getting your reagents correct. Take advantage of our materials and/or keep practicing on a whiteboard or paper until you get it right every single time.
{{% /callout %}}

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