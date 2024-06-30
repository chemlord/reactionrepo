---
title: Original Dess Martin Oxidation
linkTitle: Original Dess Martin Oxidation
prev: /docs/guide/shortcodes
---

{{<figure-dynamic-toggle
    dark-src="DMPOverviewDarkFix.png"
    light-src="DMPOverviewLightFix.png"
    title="General Scheme of Dess Martin Oxidation"
    link="https://pubs.acs.org/doi/10.1021/jo00170a070">}}

<p>The Dess-Martin oxidation is a method used to oxidize primary alcohols to aldehydes and secondary alcohols to ketones using the Dess-Martin periodinane (DMP).<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

## Finding the Product for a 1° Alcohol (Primary) using an Example

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

Often times, Dess Martin Oxidation is always performed with DMP and some kind of a solvent. Usually DCM is preferred due to its high solubility in DMP.

### Identify the Key Features of the Compound

#### Alcohol Type

{{<figure-dynamic-toggle
    dark-src="alcoholsdark.png"
    light-src="alcoholslight.png"
>}}

These are the 3 main types of alcohols: Primary, Secondary and Tertiary.

{{% callout type="warning" %}}
Tertiary alcohols **cannot** go through Dess-Martin oxidation.
{{% /callout %}}

- Secondary alcohols can go through Dess-Martin Oxidation to become a **Ketone**.
- Primary alcohols can go through Dess-Martin Oxidation to become an **Aldehyde**.

By Identifying the Alcohol Type, you now know the <mark>product</mark> to expect.

#### Identifying Side Chains and Alcohol Conversion

{{<figure-dynamic-toggle
    dark-src="DMPPrimaryExampleQ1DarkHighlighted.png"
    light-src="DMPPrimaryExampleQ1LightHighlighted.png"
    title="Tracking Side Chains and Alcohol Conversion in Dess-Martin Oxidation"
    caption="In Dess-Martin oxidation of primary alcohols, the process involves assigning one side chain (R) to understand the reaction better. The colored side chain represents an R group that remains unchanged during the reaction. The alcohol group is selectively oxidized to form an aldehyde. For educational purposes, we conceptually assign the non-alcohol group as R to visualize the changes and reconstruct the molecule post-reaction."
>}}

{{% callout type="warning" %}}
 The molecule isn’t taken apart during the reaction, but for understanding the process, we conceptually take it apart to visualize the changes. This allows for easy reconstruction of the molecule after oxidation, emphasizing the selective nature of the reaction for educational purposes.
 {{% /callout %}}

##### Steps

1. **Assign the Side Chain (R)**: Identify the non-alcohol part of the molecule as the placeholder R.

**Lets Assign the Side Chains Together!**

{{% details title="For Dark Mode Users" %}}

R = Yellow Side Chain

{{% /details %}}

{{% details title="For Light Mode Users" %}}

R = Pink Side Chain

{{% /details %}}

2. **Understand Its Role**: This placeholder helps track the unchanged part of the molecule, aiding in visualizing the structure before and after the reaction.

3. **Focus on the Reaction Center**: The primary alcohol is selectively oxidized to form an aldehyde. The placeholder shows how the structure is altered.

4. **Reassign the Side Chain**: After the reaction, reattach the placeholder R to the new aldehyde, demonstrating the unchanged nature of the side chain.

<hr>

#### Disclaimer Warning for Writing Products

{{<figure-dynamic-toggle
    dark-src="allthesamedark.png" 
    light-src="allthesamelight.png"  
    title="Aldehydes and Ketones Presentation"
    caption="They may be differently presented in different questions as shown in the image, however they are the same structure"
>}}

{{% callout type="info" %}}
Once you've identified the correct reaction and product, you can now proceed to doing the mechanism.
{{% /callout %}}

{{% /steps %}}

## Mechanism for 1° Alcohol (Primary) using the Example

{{% steps %}}

### Reactive Intermediate Formation

{{<figure-dynamic-toggle
    dark-src="dmpstep1dark.png" 
    light-src="dmpstep1light.png"
    title="Formation of Reactive Intermediate"
    caption="Alcohol group (-OH) performs a nucleophilic attack on the iodine center of the DMP molecule, forming a complex with the iodine."
>}}

This step involves the alcohol group attacking the iodine center of the Dess-Martin Periodinane (DMP), resulting in a complex where the alcohol is temporarily bonded to the iodine. During this reaction, an -OAc group is expelled from the compound, setting up the formation of the reactive intermediate.

### Stabilization with Carboxylate Ion

{{<figure-dynamic-toggle
    dark-src="dmpstep2dark.png" 
    light-src="dmpstep2light.png"
    title="Charge Stabilization Using a Carboxylate Ion"
    caption="The newly formed intermediate is stabilized by the expelled -OAc group (carboxylate ion)."
>}}

The stabilization of the intermediate occurs when the expelled carboxylate ion (-OAc) interacts with the intermediate, ensuring the reaction progresses smoothly by stabilizing the charge.

### Product Formation and Acetic Acid Recovery

{{<figure-dynamic-toggle
    dark-src="dmpstep3dark.png" 
    light-src="dmpstep3light.png"
    title="Acetic Acid Recovery and Product Formation"
    caption="Acetic acid is recovered, and the intermediate undergoes proton transfer initiated by another carboxylate ion to form the aldehyde product."
>}}

In the final steps, one mole of acetic acid is recovered. The intermediate then undergoes a proton transfer, initiated by another carboxylate ion, leading to the formation of the aldehyde product.

### Overview of Final Products

{{<figure-dynamic-toggle
    dark-src="dmpproductsdark.png" 
    light-src="dmpproductslight.png"
    title="Formation of aldehyde, iodinane by-product, and recovery of acetic acid post-oxidation."
>}}

The overall products of the Dess-Martin oxidation include the aldehyde formed from the primary alcohol, iodinane as a by-product, and the recovery of two moles of acetic acid.

### Reconstructing the Target Intermediate

{{<figure-dynamic-toggle
    dark-src="DMPPrimaryDarkVid1.gif" 
    light-src="DMPPrimaryLightVid1.gif"  
    title="Reconstruction of the Target Intermediate"
>}}

This visual demonstrates the reconstruction process of the target intermediate, showcasing the transformation and tracking the molecular changes during the Dess-Martin oxidation.

{{% /steps %}}

## Finding the Product for a 2° Alcohol (Secondary) using an Example

{{<figure-dynamic-toggle
    dark-src="DMPSecondaryQ1Dark.png"
    light-src="DMPSecondaryQ1Light.png"
    title="Propose a Mechanism for this Reaction."
    link="https://doi.org/10.1021/ja044123l">}}

<p>Ingenol, the parent compound of several naturally occurring ingenanes with varied peripheral functionalities, was synthesized through a series of steps. These ingenanes display a range of interesting biological profiles, from tumor-promoting to anti-leukemic and anti-HIV activities.<a href="#fn3" id="ref3-anchor" class="superscript">3</a></p>

<p>One key step in the synthesis involved the oxidation of a secondary alcohol intermediate to an ketone using Dess-Martin periodinane (DMP) in dichloromethane (DCM). This transformation was achieved with a 74% yield and was crucial in advancing the synthesis.<a href="#fn3" id="ref3-anchor" class="superscript">3</a></p>

The resulting ketone intermediate was further utilized in the total synthesis of Ingenol to form additional intermediates.

{{% steps %}}

### Identify the Reagents

{{<figure-dynamic-toggle
    dark-src="ReagentsDMPdark.png"
    light-src="ReagentsDMP.png"
>}}

Often times, Dess Martin Oxidation is always performed with DMP and some kind of a solvent. Usually DCM is preferred due to its high solubility in DMP.

### Identify the Key Features of the Compound

#### Alcohol Type

{{<figure-dynamic-toggle
    dark-src="alcoholsdark.png"
    light-src="alcoholslight.png"
>}}

These are the 3 main types of alcohols: Primary, Secondary and Tertiary.

{{% callout type="warning" %}}
Tertiary alcohols **cannot** go through Dess-Martin oxidation.
{{% /callout %}}

- Secondary alcohols can go through Dess-Martin Oxidation to become a **Ketone**.
- Primary alcohols can go through Dess-Martin Oxidation to become an **Aldehyde**.

By Identifying the Alcohol Type, you now know the <mark>product</mark> to expect.

### Identifying Side Chains and Alcohol Conversion

{{<figure-dynamic-toggle
    dark-src="DMPSecondaryQ1DarkHighlighted.png" 
    light-src="DMPSecondaryQ1LightHighlighted.png"
    title="Tracking Side Chains and Alcohol Conversion in Dess-Martin Oxidation."
    caption="In Dess-Martin oxidation of secondary alcohols, the colored side chains represent R groups that remain unchanged during the reaction. The alcohol group is selectively oxidized to form a ketone. For educational purposes,parts of the molecule are assigned and used as placeholders to demonstrate the reaction. Students! Please use parts of the molecule as placeholders: R¹ can be one part of the molecule on one side of the molecule and R² can be the remainder of the full molecule (except the secondary alcohol and the first side chain of course). This allows for easy reconstruction of the molecule after oxidation, to visually see the selective nature of the reaction."
>}}

{{% callout type="warning" %}}
The molecule isn't taken apart during the reaction, but for understanding the process, we conceptually take it apart to visualize the changes.
{{% /callout %}}

1. **Identify Side Chains (R¹ and R²)**: Use parts of the molecule as placeholders (R¹ and R²), representing parts of the molecule flanking the alcohol group.

**Lets Assign the Side Chains Together!**

{{% details title="For Dark Mode Users" %}}

R¹ = Pink Side Chain; R² =  Yellow Side Chain for Dark Mode

{{% /details %}}

{{% details title="For Light Mode Users" %}}

R¹ = Dark Green/Blue Side Chain; R² =  Pink Side Chain for Dark Mode

{{% /details %}}

2. **Understand Their Role**: These placeholders help track the unchanged parts of the molecule, aiding in visualizing the structure before and after the reaction.

3. **Focus on the Reaction Center**: The secondary alcohol is selectively oxidized to form a ketone. The placeholders show how the structure is altered.

4. **Reassign Side Chains**: After the reaction, reattach the placeholders (R¹ and R²) to the new ketone, demonstrating the unchanged nature of the side chains.

{{% /steps %}}

## Mechanism for 2° Alcohol (Secondary)

{{% steps %}}

### Reactive Intermediate Formation

{{<figure-dynamic-toggle
    dark-src="dark1.png" 
    light-src="light1.png"
    title="Formation of Reactive Intermediate with Secondary Alcohol"
    caption="The mechanism follows the same steps as the primary alcohol oxidation but includes an additional side chain."
>}}

In this step, the secondary alcohol group (-OH) reacts with the Dess-Martin Periodinane (DMP), similar to the primary alcohol mechanism. The difference lies in the presence of an additional side chain (R2) attached to the carbon bearing the hydroxyl group.

### Stabilization of Reactive Intermediate

{{<figure-dynamic-toggle
    dark-src="dark2.png" 
    light-src="light2.png"
    title="Stabilization of Reactive Intermediate Using Carboxylate Ion"
    caption="The intermediate is stabilized by the expelled -OAc group (carboxylate ion)."
>}}

After the initial reaction, the intermediate is stabilized by the expelled carboxylate ion (-OAc). This stabilization is crucial for the reaction to proceed smoothly, maintaining the integrity of the molecule's structure.

### Ketone Formation and Acetic Acid Recovery

{{<figure-dynamic-toggle
    dark-src="dark3.png" 
    light-src="light3.png"
    title="Formation of Ketone Product and Recovery of Acetic Acid"
    caption="Acetic acid is recovered, and the intermediate undergoes proton transfer initiated by another carboxylate ion to form a ketone."
>}}

In this step, one mole of acetic acid is recovered. The intermediate undergoes a proton transfer, initiated by another carboxylate ion, resulting in the formation of the ketone product.

### Final Overall Products

{{<figure-dynamic-toggle
    dark-src="Darkprod.png" 
    light-src="Lightprod.png"
    title="Final Products of Dess-Martin Oxidation with Secondary Alcohol"
    caption="The products are similar to those in the primary alcohol oxidation mechanism, with the key difference being the formation of a ketone instead of an aldehyde."
>}}

The final products of the Dess-Martin oxidation for secondary alcohols include the ketone formed from the secondary alcohol, iodinane as a by-product, and the recovery of two moles of acetic acid. 

### Reconstructing the Final Overall Product

{{<figure-dynamic-toggle
    dark-src="DMPSecDark1.gif" 
    light-src="DMPSecLight1.gif"  
    title="Target Intermediate Reconstruction"
>}}

This visual demonstrates the reconstruction process of the target intermediate, showcasing the transformation and tracking the molecular changes during the Dess-Martin oxidation.

 This visual demonstrates the reconstruction process of the target intermediate by conceptual reattachment of the side chains (R¹ = Pink Side Chain for Dark or Dark Green/Blue for Light) and (R² =  Yellow Side Chain for Dark or Pink for Light) to the newly formed ketone. This step emphasizes the unchanged nature of the side chains and the selective oxidation process.

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

{{% details title="Reveal the Answer." %}}

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

### Sample Mechanism Problem

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
