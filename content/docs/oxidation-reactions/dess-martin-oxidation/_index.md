---
title: Dess-Martin Oxidation
weight: 3
prev: /docs/guide/diagrams
next: /docs/guide/shortcodes/callout
---

{{<figure-dynamic-toggle
    dark-src="DMPOverviewDarkFix.png"
    light-src="DMPOverviewLightFix.png"
    title="General Scheme of Dess Martin Oxidation"
    link="https://pubs.acs.org/doi/10.1021/jo00170a070">}}

<p>The Dess-Martin oxidation is a method used to oxidize primary alcohols to aldehydes and secondary alcohols to ketones using the Dess-Martin periodinane (DMP). This reagent is known for its mild conditions, high selectivity, and efficiency, making it a valuable tool in organic synthesis.<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

## Finding the Correct Product for a 1° Alcohol

{{<figure-dynamic-toggle
    dark-src="DMPPrimaryExampleQ1Dark.png"
    light-src="DMPPrimaryExampleQ1Light.png"
    title="Propose a Mechanism for this Reaction."
    caption="We must find out how the product was formed and the steps to form it."
    link="https://doi.org/10.1021/ja8071918">}}

<p>(+)-Cortistatin A, a potent inhibitor of endothelial cell proliferation, was synthesized using enantiomerically pure Hajos-Parrish ketone as the starting material. The synthesis involved converting the Hajos-Parrish ketone to a known enone and then to a silyloxydiene intermediate.<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p>

<p>A crucial step in this multi-step process, as depicted in the image, was the oxidation of a primary alcohol intermediate to an aldehyde using Dess-Martin periodinane (DMP) (1.2 equiv) in dichloromethane (DCM) at room temperature for 1 hour. This transformation played a vital role in advancing the synthesis.<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p>

The resulting aldehyde intermediate was then further utilized in subsequent steps towards the total synthesis of (+)-Cortistatin A.

{{% steps %}}

### Identify the Reagents

{{<figure-dynamic-toggle
    dark-src="ReagentsDMPdark.png"
    light-src="ReagentsDMP.png"
>}}

Often times, Dess Martin Oxidation is performed with these 2 reagents mainly
- Dess-Martin Periodinane (DMP)
- DCM as a solvent

### Identify the Key Features of the Compound

#### Alcohol Type

{{<figure-dynamic-toggle
    dark-src="alcoholtypedark.png"
    light-src="alcoholtypelight.png"
>}}

These are the 3 main types of alcohols: Primary, Secondary and Tertiary.

{{% callout warning %}}
Tertiary alcohols **cannot** go through Dess-Martin oxidation.
{{% /callout %}}

- Secondary alcohols can go through Dess-Martin Oxidation to become a <mark>Ketone</mark>.
- Primary alcohols can go through Dess-Martin Oxidation to become an <mark>Aldehyde</mark>.

By Identifying the Alcohol Type, you now know the <mark>product</mark> to expect.

#### Side Chain and Product

{{<figure-dynamic-toggle
    dark-src="DMPPrimaryExampleQ1DarkHighlighted.png"
    light-src="DMPPrimaryExampleQ1LightHighlighted.png"
    title="Always Identify the Side Chain vs. Alcohol"
>}}

1. **Identify Colored Side Chains**: Recognize the colored side chains in the diagrams. These colors are placeholders represent R groups on both sides of the Ketone or a singular R group on one side of the Aldehyde that remain unchanged during the reaction.

2. **Understand Their Role**: The colored side chains help track which parts of the molecule on both sides of the Ketone or a singular R group on one side of the Aldehyde are not involved in the reaction. They stay constant, ensuring clarity in following the chemical changes.

3. **Focus on the Reaction Center**: Concentrate on the alcohol group, which undergoes oxidation to become a ketone or aldehyde. The side chains, highlighted in colors, will guide you in visualizing the molecular structure before and after the reaction.

4. **Reassign Side Chains**: Once the reaction is complete, use the colored side chains to reattach them conceptually to the new ketone or aldehyde, demonstrating the selective nature of this oxidation without altering the side chains' position or identity.

Remember, the colored side chains are visual tools to help you understand and follow the molecular changes during the Dess-Martin oxidation.

<hr>

- Dess-Martin Oxidation is always carried out in <mark>mild [O] conditions</mark>.
- Side chain (R) remains the <mark>same</mark> the entire reaction. 
- The 1° (Primary) alcohol is the section of the molecule that undergoes <mark>change</mark>.

#### Disclaimer Warning for Writing Products

{{<figure-dynamic-toggle
    dark-src="allthesamedark.png" 
    light-src="allthesamelight.png"  
    title="Aldehydes and Ketones may be presented differently in different questions but in the end they are all the same"
>}}

{{% callout note %}}
Once you've identified the correct reaction and product, you can now proceed to doing the mechanism
{{% /callout %}}

{{% /steps %}}

## How do I perform the Mechanism?

{{% steps %}}

### Formation of Reactive Intermediate

{{<figure-dynamic-toggle
    dark-src="dmpstep1dark.png" 
    light-src="dmpstep1light.png"
    title="Alcohol group (-OH) performs a nucleophilic attack on the iodine center of the DMP molecule. This interaction results in the formation of a complex where the alcohol is temporarily bonded to the iodine."
>}}

As a result of this reaction intermediate forming, an OAc group is expelled from the compound.

### Charge Stabilization using a Carboxylate Ion

{{<figure-dynamic-toggle
    dark-src="dmpstep2dark.png" 
    light-src="dmpstep2light.png"
    title="The Newly formed Intermediate is stabilized using the expelled -OAc group (Carboxylate Ion)."
>}}

### Acetic Acid Recovery and Product Formation

{{<figure-dynamic-toggle
    dark-src="dmpstep3dark.png" 
    light-src="dmpstep3light.png"
    title="1 mole of Acetic Acid is recovered and the intermediate undergoes proton transfer initiated by another carboxylate ion to form the Aldehyde product"
>}}

### Overall Products

{{<figure-dynamic-toggle
    dark-src="dmpproductsdark.png" 
    light-src="dmpproductslight.png"
>}}

1. Aldehyde is formed as a result of a primary alcohol
2. Iodinane is one of the by-products post-oxidation
3. 2 moles of Acetic Acid is recovered post-oxidation

### Reconstructing the Overall Product

{{<figure-dynamic-toggle
    dark-src="DMPPrimaryDarkVid1.gif" 
    light-src="DMPPrimaryLightVid1.gif"  
    title="Reconstruction of the Target Intermediate"
>}}

{{% /steps %}}

## Mechanism for 2° Alcohol

{{<figure-dynamic-toggle
    dark-src="DMPSecondaryQ1Dark.png"
    light-src="DMPSecondaryQ1Light.png"
    title="Propose a Mechanism for this Reaction."
    link="https://doi.org/10.1021/ja044123l">}}

<p>Ingenol, the parent compound of several naturally occurring ingenanes with varied peripheral functionalities, was synthesized through a series of steps. These ingenanes display a range of interesting biological profiles, from tumor-promoting to anti-leukemic and anti-HIV activities.<a href="#fn3" id="ref3-anchor" class="superscript">3</a></p>

<p>One key step in the synthesis involved the oxidation of a secondary alcohol intermediate to an ketone using Dess-Martin periodinane (DMP) in dichloromethane (DCM). This transformation was achieved with a 74% yield and was crucial in advancing the synthesis.<a href="#fn3" id="ref3-anchor" class="superscript">3</a></p>

The resulting ketone intermediate was further utilized in the total synthesis of Ingenol to form additional intermediates.

{{% steps %}}

### Identify the Side Chains and Alcohol Type

{{<figure-dynamic-toggle
    dark-src="DMPSecondaryQ1DarkHighlighted.png" 
    light-src="DMPSecondaryQ1LightHighlighted.png"
    title="The side chains are colored to denote unchanging R groups. Observe how the alcohol group is selectively oxidized to form a ketone or aldehyde. The colors help you visually track and reposition these side chains after the reaction, showing the specificity of the oxidation."
>}}

### Perform the Mechanism: Form Intermediate

{{<figure-dynamic-toggle
    dark-src="dmpstep1darksecondary.png" 
    light-src="dmpstep1lightsecondary.png"
    title="The steps are the same as the mechanism of a primary alcohol, just add an extra side chain group in your mechanism"
>}}

### Carboxylate Ion stabilizes Intermediate

{{<figure-dynamic-toggle
    dark-src="dmpstep2darksecondary.png" 
    light-src="dmpstep2lightsecondary.png"
    title="Intermediate is stabilized using the expelled -OAc group (Carboxylate Ion)"
>}}

### Acetic Acid Recovery and Product Formation

{{<figure-dynamic-toggle
    dark-src="dmpstep3darksecondary.png" 
    light-src="dmpstep3lightsecondary.png"
    title="Acetic Acid is recovered and the intermediate undergoes proton transfer initiated by another carboxylate ion to form a Ketone"
>}}

### Overall Products

{{<figure-dynamic-toggle
    dark-src="dmpproductsdarksecondary.png" 
    light-src="dmpproductslightsecondary.png"
    title="Same Products as the Primary Mechanism except instead of an Aldehyde Product, its a Ketone"
>}}

### Reconstructing the Overall Product

{{<figure-dynamic-toggle
    dark-src="DMPSecDark1.gif" 
    light-src="DMPSecLight1.gif"  
    title="Target Intermediate Reconstruction"
>}}

{{% /steps %}}

## Sample Problems

### Predict the Product

{{<figure-dynamic-toggle
    dark-src="DMPSecondaryQ2DarkQuestion.png" 
    light-src="DMPSecondaryQ2LightQuestion.png"
    title="Guess the Product."
    link="https://doi.org/10.1038/ncomms7445"
>}}

<p>Clostrubin, a potent antibiotic against methicillin- and vancomycin-resistant bacteria, was synthesized through a series of steps, including the desilylation of a silylated intermediate during acid workup, resulting in the formation of a secondary alcohol intermediate.<a href="#fn4" id="ref4-anchor" class="superscript">4</a></p>

{{% details title="Will more Themes be added?" %}}

{{<figure-dynamic-toggle
    dark-src="DMPMechanismQ1Dark.png" 
    light-src="DMPSecondaryQ2Light.png"
    title="This compound had a secondary alcohol that was oxidized to a Ketone"
>}}

<p>This alcohol intermediate, as depicted in the image, was then oxidized to a ketone using Dess-Martin periodinane (DMP) in dichloromethane (DCM).<a href="#fn4" id="ref4-anchor" class="superscript">4</a></p>

<p>This transformation was achieved with an 83% yield and preserved the sulfur-containing functionalities.<a href="#fn4" id="ref4-anchor" class="superscript">4</a></p>

The resulting ketone intermediate was further utilized in the total synthesis of clostrubin to form additional intermediates.

{{< /details >}}

<hr>

{{< cards >}}
  {{< card url="/chemdatabase/dmp-mechanisms-1/" title="Want more problems? Click here!" icon="academic-cap" >}}
{{< /cards >}}

### Mechanism Problems

{{<figure-dynamic-toggle
    dark-src="DMPRealMechanismQ1Dark.png" 
    light-src="DMPMechanismQ1Light.png"
    title="Propose a Mechanism for this Reaction."
    link="https://doi.org/10.1021/ol000289p"
>}}

<p>(+)-Preussin, a potent antifungal agent, is synthesized using protected L-N-benzoyl phenylalaninol as a starting material.<a href="#fn5" id="ref5-anchor" class="superscript">5</a></p>

<p>This alcohol intermediate underwent oxidation using Dess-Martin periodinane (DMP) in dichloromethane (DCM) to yield the corresponding aldehyde without racemization. This transformation was achieved with a specific yield that was unreported in the paper and was a crucial step towards advancing the synthesis.<a href="#fn5" id="ref5-anchor" class="superscript">5</a></p>

The resulting aldehyde intermediate was then further utilized in subsequent steps towards the total synthesis of (+)-Preussin.

{{% details title="Reveal the Answer." %}}

{{<figure-dynamic-toggle
    dark-src="DMPMechanismQ1DarkHighlighted.png" 
    light-src="DMPMechanismQ1LightHighlighted.png"
    title="Colored side chains in these diagrams represent constant R groups. Focus on the central alcohol, which transforms into a ketone or aldehyde. Use the colored chains to track and restore these groups post-reaction, highlighting the selective oxidation process."
>}}

{{<figure-dynamic-toggle
    dark-src="FULLMECHdmpdark.png" 
    light-src="FULLMECHdmplight.png"
>}}

<hr>

**Form the Overall Product**

{{<figure-dynamic-toggle
    dark-src="dmpmechdark.gif" 
    light-src="dmpmechlight.gif"
>}}

This should form the expected Ketone product as a result of oxidation of the primary alcohol on this compound.

{{< /details >}}

<hr>

{{< cards >}}
  {{< card url="/chemdatabase/dmp-mechanisms-1/" title="Want more Mechanisms? Click here!" icon="academic-cap" >}}
{{< /cards >}}

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
        dark-src="DMPPaperDark.png" 
        light-src="DMPPaperLight.png"
        link="https://doi.org/10.1021/jo00356a052"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">1.</span> Dess, D. B.; Martin, J. C. Readily Accessible 12-I-51 Oxidant for the Conversion of Primary and Secondary Alcohols to Aldehydes and Ketones. <i>J. Org. Chem.</i> <b>1983</b>, <i>48</i>, 4155–4156. DOI: <a href="https://doi.org/10.1021/jo00356a052">10.1021/jo00356a052</a>. <a href="#ref1-anchor">↩</a></span></p>
</div>

<!-- Content with another custom footnote -->


<!-- Additional invisible anchor at the desired return position -->
<a id="ref2-top" class="anchor"></a>

<!-- Image with the second citation -->
<div>
    <a id="fn2" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="DMPPrimaryExampleQ1DarkBox.png" 
        light-src="DMPPrimaryExampleQ1LightBox.png"
        link="https://doi.org/10.1021/ja8071918"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">2.</span> Lee, H. M.; Nieto-Oberhuber, C.; Shair, M. D. Enantioselective synthesis of (+)-cortistatin A, a potent and selective inhibitor of endothelial cell proliferation. <i>J. Am. Chem. Soc.</i> <b>2008</b>, <i>130</i> (50), 16864–16866. DOI: <a href="https://doi.org/10.1021/ja8071918">10.1021/ja8071918</a>. <a href="#ref2-anchor">↩</a></span></p>
</div>

<!-- Content with another custom footnote -->


<!-- Additional invisible anchor at the desired return position -->
<a id="ref3-top" class="anchor"></a>

<!-- Image with the third citation -->
<div>
    <a id="fn3" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="DMPSecondaryQ1DarkBox.png" 
        light-src="DMPSecondaryQ1LightBox.png"
        link="https://doi.org/10.1021/ja044123l"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">3.</span> Nickel, A.; Maruyama, T.; Tang, H.; Murphy, P. D.; Greene, B.; Yusuff, N.; Wood, J. L. Total synthesis of ingenol. <i>J. Am. Chem. Soc.</i> <b>2004</b>, <i>126</i> (50), 16300–16301. DOI: <a href="https://doi.org/10.1021/ja044123l">10.1021/ja044123l</a>. <a href="#ref3-anchor">↩</a></span></p>
</div>

<!-- Content with another custom footnote -->

<!-- Additional invisible anchor at the desired return position -->
<a id="ref4-top" class="anchor"></a>

<!-- Image with the fourth citation -->
<div>
    <a id="fn4" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="DMPSecondaryQ2DarkBoxGuess.png" 
        light-src="DMPMechanismQ1DarkBox.png"
        link="https://doi.org/10.1038/ncomms7445"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">4.</span> Yang, M.; Li, J.; Li, A. Total synthesis of clostrubin. <i>Nat. Commun.</i> <b>2015</b>, <i>6</i>, 6445. DOI: <a href="https://doi.org/10.1038/ncomms7445">10.1038/ncomms7445</a>. <a href="#ref4-anchor">↩</a></span></p>
</div>

<!-- Content with another custom footnote -->


<!-- Additional invisible anchor at the desired return position -->
<a id="ref5-top" class="anchor"></a>

<!-- Image with the fifth citation -->
<div>
    <a id="fn5" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="DMPRealMechanismQ1LightBox.png" 
        light-src="DMPMechanismQ1LightBox.png"
        link="https://doi.org/10.1021/ol000289p"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">5.</span> Lee, K.-Y.; Kim, Y.-H.; Oh, C.-Y.; Ham, W.-H. Facile and efficient total synthesis of (+)-preussin. <i>Org. Lett.</i> <b>2000</b>, <i>2</i> (25), 4041–4042. DOI: <a href="https://doi.org/10.1021/ol000289p">10.1021/ol000289p</a>. <a href="#ref5-anchor">↩</a></span></p>
</div>