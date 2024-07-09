---
title: Oxidation without Water
linkTitle: Oxidation without Water
prev: /docs/oxidation-reactions/dess-martin-oxidation
date: 2024-07-05
authors:
  - name: Devraj Bagchi
    link: https://chemlord.github.io/devthechemistt/
    image: /contact-us/avatar.jpg
---
<div style="text-align: left; margin-top: 0.2em; display: flex; flex-wrap: wrap; gap: 5px;">
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

{{% details title="Where did this Reaction come from?" %}}

{{<figure-dynamic-toggle
    dark-src="cortinoboxdark.png"
    light-src="cortinoboxlight.png"
    title="Condensed Synthesis Overview of (+)-Cortistatin A from Hajos-Parrish Ketone."
    caption="The overall synthesis of (+)-Cortistatin A started with an enantiomerically pure Hajos-Parrish ketone undergoing key reactions such as diastereoselective hydrogenation, Rubottom oxidation, the Dess-Martin oxidation and other types of reactions to eventually form the target compound (+)-Cortistatin A. This occurs over a 26 step synthesis pathway."
    link="https://doi.org/10.1021/ja8071918">}}

{{% callout type="info" %}}
For simplicity, this image summarizes the start and end products of the synthesis in the original paper by [Lee et al. (2008)](https://doi.org/10.1021/ja8071918), highlighting the step count and reaction materials. The full pathway is not shown to maintain clarity and focus on building towards when Dess-Martin oxidation is used.
{{% /callout %}}

<p>This reaction showing the Dess-Martin oxidation of this alcohol intermediate was part of the overall synthesis pathway of the formation of (+)-Cortistatin A. (+)-Cortistatin A is a potent inhibitor of endothelial cell proliferation. This compound was synthesized through the conversion of an enantiomerically pure Hajos-Parrish ketone to a known enone and then to a silyloxydiene intermediate.<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p>

{{<figure-dynamic-toggle
    dark-src="cortioxidationdark.png"
    light-src="cortioxidationlight.png"
    link="https://doi.org/10.1021/ja8071918">}}

<p>A crucial step in this multi-step process, as depicted above, was the oxidation of a primary alcohol intermediate (14e) formed in the overall synthesis pathway. The alcohol intermediate was converted to an aldehyde intermediate using Dess-Martin periodinane (DMP) (1.2 equiv) in dichloromethane (DCM) at room temperature for 1 hour. The resulting aldehyde intermediate (14f) was then further utilized in subsequent steps towards the total synthesis of (+)-Cortistatin A.<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p>

{{< /details >}}

{{% steps %}}

### Identify the Reagents

{{<figure-dynamic-toggle
    dark-src="ReagentsDMPdark.png"
    light-src="ReagentsDMP.png"
>}}

Often times, Dess Martin Oxidation is always performed with DMP and a solvent. Usually DMP prefers DCM as a solvent it is highly soluble in DCM. This applies to both primary and secondary alcohol oxidations.

{{% callout type="warning" %}}
If you missed the [**Reagent Variations section**](/reactionrepo/docs/oxidation-reactions/dess-martin-oxidation/#reagent-variations) on the Dess-Martin oxidation landing page, please check it out. It's highly recommended to review the information as it covers the variations and key characteristics of key Dess-Martin periodinane (DMP).
{{% /callout %}}

### Identify the Key Features of the Compound

#### Alcohol Type

{{<figure-dynamic-toggle
    dark-src="alcoholsdark.png"
    light-src="alcoholslight.png"
>}}

These are the 3 main types of alcohols: **Primary**, **Secondary** and **Tertiary**.

{{% callout type="warning" %}}
Tertiary alcohols **cannot** go through Dess-Martin oxidation.
{{% /callout %}}

- Primary alcohols can go through Dess-Martin Oxidation to become an **Aldehyde**.

By identifying the Alcohol Type, you now know the **product** to expect.

#### Identifying Side Chains and Alcohol Conversion

{{<figure-dynamic-toggle
    dark-src="DMPPrimaryExampleQ1DarkHighlighted.png"
    light-src="DMPPrimaryExampleQ1LightHighlighted.png"
    title="Tracking Side Chains and Alcohol Conversion"
    caption="In Dess-Martin oxidation of primary alcohols, the process involves assigning one side chain (R) to understand the reaction better. The colored side chain represents an R group that remains unchanged during the reaction. The alcohol group is selectively oxidized to form an aldehyde. For educational purposes, we conceptually assign the non-alcohol group as R (Side chain) to visualize the changes and reconstruct the molecule post-reaction."
>}}

{{% callout type="warning" %}}
 The molecule isn’t taken apart during the reaction, but for understanding the process, we conceptually take it apart to visualize the changes. This allows for easy reconstruction of the molecule after oxidation, emphasizing the selective nature of the reaction for educational purposes.
 {{% /callout %}}

##### Guide to Side Chains

1. **Assign the Side Chain (R)**: Identify the non-alcohol part of the molecule and assign it as the placeholder 'R' or side chain.

2. **Understand Its Role**: This placeholder helps track the unchanged part of the molecule, aiding in visualizing the structure before and after the reaction.

3. **Focus on the Reaction Center**: The primary alcohol is selectively oxidized to form an aldehyde. The placeholder shows how the structure is altered.

4. **Reassign the Side Chain**: After the reaction, reattach the placeholder R to the new aldehyde, demonstrating the unchanged nature of the side chain.

<hr>

#### Disclaimer Warning for Writing Products

{{<figure-dynamic-toggle
    dark-src="allthesamedark.png" 
    light-src="allthesamelight.png"  
    title="Variations on how Aldehydes may appear"
    caption="They may be differently presented in different questions as shown in the image, however they are the same structure."
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
    caption="Alcohol group (-OH) performs a nucleophilic attack on the iodine center of the DMP molecule, forming a complex with the iodine. Acetoxy group is expelled and acts as a good leaving group that leaves with an extra electron pair."
>}}

This step involves the alcohol group attacking the iodine center of the Dess-Martin Periodinane (DMP), resulting in a complex where the alcohol is temporarily bonded to the iodine. During this reaction, an OAc group is expelled from the compound. The expelled OAc group, initially part of the molecule as an acetoxy group, becomes a negatively charged acetate ion (CH₃COO⁻) once it leaves. This transition occurs because the OAc group acts as a good leaving group, taking an extra electron pair with it, thereby gaining a negative charge and stabilizing as an acetate ion.

{{% details title="See the Shortform Version of this step." %}}

{{<figure-dynamic-toggle
    dark-src="primmd1.png"
    light-src="primml1.png"
    >}}

{{< /details >}}

### Stabilization with Acetate Ion

{{<figure-dynamic-toggle
    dark-src="priml2.png" 
    light-src="primd2.png"
    title="Charge Stabilization using a Acetate Ion"
    caption="The newly formed intermediate is stabilized by the previously expelled OAc (Acetoxy) group (now an acetate ion)."
>}}

The stabilization of the intermediate occurs when the acetate ion interacts with the intermediate, ensuring the reaction progresses smoothly by stabilizing the charge.

{{% details title="See the Shortform Version of this step." %}}

{{<figure-dynamic-toggle
    dark-src="primmd2.png"
    light-src="primml2.png"
    >}}

{{< /details >}}

### Product Formation and Acetic Acid Recovery

{{<figure-dynamic-toggle
    dark-src="priml3.png" 
    light-src="primd3.png"
    title="Acetic Acid Recovery and Product Formation"
    caption="Acetic acid is recovered, and the intermediate undergoes proton transfer initiated by another acetate ion to form the aldehyde product."
>}}

In the final steps, one mole of acetic acid is recovered. The intermediate then undergoes a proton transfer, initiated by another acetate ion, leading to the formation of the aldehyde product.

{{% details title="See the Shortform Version of this step." %}}

{{<figure-dynamic-toggle
    dark-src="primmd3.png"
    light-src="primml3.png"
    >}}

{{< /details >}}

### Overview of Final Products

{{<figure-dynamic-toggle
    dark-src="dmpproductsdark.png" 
    light-src="dmpproductslight.png"
    title="Overall Products recovered post-oxidation"
    caption="Formation of the aldehyde product and iodinane and acetic acid as by-products."
>}}

The overall products of the Dess-Martin oxidation include the aldehyde formed from the primary alcohol, iodinane as a by-product, and the recovery of two moles of acetic acid.

{{% details title="See the Shortform Products" %}}

{{<figure-dynamic-toggle
    dark-src="proddarkp.png"
    light-src="prodlightp.png"
    >}}

{{< /details >}}

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
    title="Propose a Mechanism for this Reaction"
    caption="Oxidation of a secondary alcohol intermediate to an ketone. The groundwork to determine the product is similar to how a primary alcohol is converted."
    link="https://doi.org/10.1021/ja044123l">}}

{{% details title="Where did this Reaction come from?" %}}

{{<figure-dynamic-toggle
    dark-src="Ingenolnoboxdark.png"
    light-src="Ingenolnoboxlight.png"
    title="Synthesis Overview of the Total Synthesis of Ingenol"
    caption="𝛽-ketoester (2) is subjected through a 32 steps synthesis path to form the target compound Ingenol (1)."
    link="https://doi.org/10.1021/ja044123l">}}

{{% callout type="info" %}}
For simplicity, this image summarizes the start and end products of the synthesis in the original paper by [Nickel et al. (2004)](https://doi.org/10.1021/ja044123l), showing the starting material and the overall product. The full pathway is not shown. This is to maintain clarity and focus on building towards when Dess-Martin oxidation is used.
{{% /callout %}}

<p>This reaction showing the Dess-Martin oxidation of the alcohol intermediate was part of the overall synthesis pathway of the formation of Ingenol. Ingenol is the parent compound of several naturally occurring ingenanes with varied peripheral functionalities. These ingenanes display a range of interesting biological profiles, from tumor-promoting to anti-leukemic and anti-HIV activities.<a href="#fn3" id="ref3-anchor" class="superscript">3</a></p>

{{<figure-dynamic-toggle
    dark-src="ingenoloxdark.png"
    light-src="ingenoloxlight.png"
    link="https://doi.org/10.1021/ja044123l">}}

<p>One key step in the synthesis involved the oxidation of a secondary alcohol intermediate (8) to a ketone intermediate (8f) using Dess-Martin periodinane (DMP) in dichloromethane (DCM). This transformation was achieved with a 74% yield and was crucial in advancing the synthesis.<a href="#fn3" id="ref3-anchor" class="superscript">3</a></p>

{{< /details >}}

{{% steps %}}

### Identify the Reagents

{{<figure-dynamic-toggle
    dark-src="ReagentsDMPdark.png"
    light-src="ReagentsDMP.png"
>}}

Often times, Dess Martin Oxidation is always performed with DMP and a solvent. Usually DMP prefers DCM as a solvent it is highly soluble in DCM. This applies to both primary and secondary alcohol oxidations.

{{% callout type="warning" %}}
If you missed the [**Reagent Variations section**](/reactionrepo/docs/oxidation-reactions/dess-martin-oxidation/#reagent-variations) on the Dess-Martin oxidation landing page, please check it out. It's highly recommended to review the information as it covers the variations and key characteristics of Dess-Martin periodinane (DMP).
{{% /callout %}}

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

By identifying the Alcohol Type, you now know the **product** to expect.

### Identifying Side Chains and Alcohol Conversion

{{<figure-dynamic-toggle
    dark-src="DMPSecondaryQ1DarkHighlighted.png" 
    light-src="DMPSecondaryQ1LightHighlighted.png"
    title="Tracking Side Chains and Alcohol Conversion in Dess-Martin Oxidation"
    caption="In Dess-Martin oxidation of secondary alcohols, the colored side chains represent R groups that remain unchanged during the reaction. The alcohol group is selectively oxidized to form a ketone. For educational purposes,parts of the molecule are assigned and used as placeholders to demonstrate the reaction. Students! Please use parts of the molecule as placeholders: R¹ can be one part of the molecule on one side of the molecule and R² can be the remainder of the full molecule (except the secondary alcohol and the first side chain of course). This allows for easy reconstruction of the molecule after oxidation, to visually see the selective nature of the reaction."
>}}

{{% callout type="warning" %}}
The molecule isn't taken apart during the reaction, but for understanding the process, we conceptually take it apart to visualize the changes.
{{% /callout %}}

##### Guide to Side Chains

1. **Identify Side Chains (R¹ and R²)**: Use parts of the molecule as placeholders (R¹ and R²), representing parts of the molecule flanking the alcohol group.

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

In this step, the secondary alcohol group (-OH) reacts with the Dess-Martin Periodinane (DMP), similar to the primary alcohol mechanism. The difference lies in the presence of an additional side chain (R²) attached to the carbon bearing the hydroxyl group.

{{% details title="See the Shortform Version of this step." %}}

{{<figure-dynamic-toggle
    dark-src="darkshort1sec.png"
    light-src="lightshort1sec.png"
    >}}

{{< /details >}}

### Stabilization of Reactive Intermediate

{{<figure-dynamic-toggle
    dark-src="secdarkmech2.png" 
    light-src="seclightmech2.png"
    title="Stabilization of Reactive Intermediate Using an Acetate Ion"
    caption="The intermediate is stabilized by the expelled OAc group (Acetoxy group).The expelled acetoxy group becomes an acetate ion (CH₃COO⁻)."
>}}

After the initial reaction, the intermediate is stabilized by the expulsion of the acetoxy group (OAc). In the molecule, the OAc group is initially an acetoxy group (CH₃COO-). However, once it is expelled from the Dess-Martin Periodinane (DMP), it becomes an acetate ion (CH₃COO⁻). This occurs because the acetoxy group acts as a good leaving group, taking an extra electron pair with it and becoming a stable, negatively charged acetate ion.

{{% details title="See the Shortform Version of this step." %}}

{{<figure-dynamic-toggle
    dark-src="darkshort2sec2.png"
    light-src="lightshort2sec2.png"
    >}}

{{< /details >}}

### Ketone Formation and Acetic Acid Recovery

{{<figure-dynamic-toggle
    dark-src="secdarkmech3.png" 
    light-src="seclightmech3.png"
    title="Formation of Ketone Product and Recovery of Acetic Acid"
    caption="Acetic acid is recovered, and the intermediate becomes a ketone after proton transfer."
>}}

In this step, one mole of acetic acid is recovered. The intermediate undergoes a proton transfer, initiated by another acetate ion, resulting in the formation of the ketone product and acetic acid as a by-product.

{{% details title="See the Shortform Version of this step." %}}

{{<figure-dynamic-toggle
    dark-src="darkshort3sec2.png"
    light-src="lightshort3sec2.png"
    >}}

{{< /details >}}

### Final Overall Products

{{<figure-dynamic-toggle
    dark-src="Darkprod.png" 
    light-src="Lightprod.png"
    title="Final Products of Dess-Martin Oxidation with Secondary Alcohol"
    caption="The products are similar to those in the primary alcohol oxidation mechanism, with the key difference being the formation of a ketone instead of an aldehyde."
>}}

The final products of the Dess-Martin oxidation for secondary alcohols include the ketone formed from the secondary alcohol, iodinane as a by-product, and the recovery of two moles of acetic acid. 

{{% details title="See the Shortform Products" %}}

{{<figure-dynamic-toggle
    dark-src="secprod1light.png"
    light-src="seccdarkprod1.png"
    >}}

{{< /details >}}

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
    title="Guess the Product"
    link="https://doi.org/10.1038/ncomms7445"
>}}

{{% callout type="info" %}}
You do not need to calculate yield for this question.
{{% /callout %}}


{{% details title="Reveal the Answer." %}}

{{<figure-dynamic-toggle
    dark-src="DMPMechanismQ1Dark.png" 
    light-src="DMPSecondaryQ2Light.png"
    title="This compound was a secondary alcohol"
    caption="It was oxidized to a ketone."
>}}

<p>As depicted in the image, the alcohol intermediate was oxidized to a ketone using Dess-Martin periodinane (DMP) in dichloromethane (DCM) in room temperature (RT) for 1 minute.<a href="#fn4" id="ref4-anchor" class="superscript">4</a></p>

<p>This transformation was achieved with an 83% yield and preserved the sulfur-containing functionalities<a href="#fn4" id="ref4-anchor" class="superscript">4</a></p>

{{% callout type="info" %}}
The **83%** was reported in the [paper](https://doi.org/10.1038/ncomms7445) where this reaction came from, you do did not need to calculate this.
{{% /callout %}}

{{< /details >}}

{{% details title="Where did this Reaction come from?" %}}

{{<figure-dynamic-toggle
    dark-src="DMPSecondaryDarknoBox3.png" 
    light-src="DMPSecondarylightnoBox3.png"
    title="Completion of the synthesis of clostrubin"
    caption="The completion of the clostrubin (1) synthesis using a stabilized diazo compound and a thioester with several conditions. This caused the formation of a metal-carbenoid intermediate, which was reduced to an episulfide intermediate to a tetrasubstituted olefin, followed by ultraviolet light-induced electrocyclization and final global deprotection, which yielded the desired natural product efficiently."
    link="https://doi.org/10.1038/ncomms7445"
>}}

{{% callout type="info" %}}
For simplicity, this image summarizes the start and end products of the synthesis in the original paper by Yang et al. (2015), highlighting key reactions and the overall product. The full pathway is not shown to maintain clarity and focus on building towards when Dess-Martin oxidation is used.
{{% /callout %}}

<p>This reaction showing the Dess-Martin oxidation of this alcohol intermediate was part of the overall synthesis pathway of the formation of Clostrubin. Clostrubin is a potent antibiotic against methicillin- and vancomycin-resistant bacteria, which was synthesized through a series of steps, including the desilylation of a silylated intermediate during acid workup, which ultmately resulted in the formation of a secondary alcohol intermediate.<a href="#fn4" id="ref4-anchor" class="superscript">4</a></p>

One main reagent used to form clostrubin was the thioester compound (4)

{{<figure-dynamic-toggle
        dark-src="clos7to4dark.png" 
        light-src="clos7to4light.png"
        title="Formation of the Thioester"
        link="https://doi.org/10.1038/ncomms7445"
    >}}

<p>2-Iodophenol underwent a 7-step synthesis to form the needed thioester required to form clostrubin.<a href="#fn4" id="ref4-anchor" class="superscript">4</a></p>

{{<figure-dynamic-toggle
        dark-src="clos20to21darkk.png" 
        light-src="clos20to21light.png"
        link="https://doi.org/10.1038/ncomms7445"
    >}}

<p>A crucial step in this multi-step process to form the thioester was the oxidation of a secondary alcohol intermediate (20) formed in the synthesis pathway to a ketone intermediate (21) using Dess-Martin periodinane (DMP) in dichloromethane (DCM) at room temperature for 1 minute. The resulting ketone intermediate was then further utilized in subsequent steps to form the needed thioester required to synthesize Clostrubin<a href="#fn4" id="ref4-anchor" class="superscript">4</a></p>

{{< /details >}}

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

{{% details title="Reveal the Answer." %}}

{{<figure-dynamic-toggle
    dark-src="DMPMechanismQ1DarkHighlighted.png" 
    light-src="DMPMechanismQ1LightHighlighted.png"
    title="Start by identifying the non-alcohol portion of the molecule and determine the product"
    caption="Colored side chains in these diagrams represent constant R groups. Focus on the central alcohol, which transforms into a ketone or aldehyde. Use the colored chains to track and restore these groups post-reaction, highlighting the selective oxidation process. Once you have done this proceed to the mechanism."
>}}

{{<figure-dynamic-toggle
    dark-src="primsdfull.png" 
    light-src="fullprimmechl.png"
>}}

**Form the Overall Product**

{{<figure-dynamic-toggle
    dark-src="dmpmechdark.gif" 
    light-src="dmpmechlight.gif"
>}}

This should form the expected Ketone product as a result of oxidation of the primary alcohol on this compound.

{{< /details >}}

{{% details title="Where did this Reaction come from?" %}}

{{<figure-dynamic-toggle
    dark-src="preu6to1dark4.png" 
    light-src="preu6to1light4.png"
    title="Completion of the synthesis of (+)-Preussin"
    caption="Scheme for the enantioselective total synthesis of (+)-Preussin (1) from protected L-N-benzoylphenylalaninol (6) over 10 steps."
    link="https://doi.org/10.1021/ol000289p"
>}}

{{% callout type="info" %}}
For simplicity, this image summarizes the start and end products of the synthesis in the original paper by [Lee et al. (2000)](https://doi.org/10.1021/ol000289p), highlighting the starting and the end product. The full pathway is not shown to maintain clarity and focus on building towards when Dess-Martin oxidation is used.
{{% /callout %}}

<p>This reaction showing the Dess-Martin oxidation of this alcohol intermediate was part of the overall synthesis pathway of the formation of (+)-Preussin, a potent antifungal agent, which was synthesized using protected L-N-benzoyl phenylalaninol as a starting material.<a href="#fn5" id="ref5-anchor" class="superscript">5</a></p>

{{<figure-dynamic-toggle
        dark-src="preu6to6aboxd.png" 
        light-src="preu6to6aboxl.png"
        link="https://doi.org/10.1021/ol000289p"
    >}}

<p>A crucial step in this synthesis was the oxidation of the primary alcohol compound: protected L-N-benzoyl phenylalaninol (6). It was subsequently was converted to a aldehyde intermediate (6a) using Dess-Martin periodinane (DMP) in dichloromethane (DCM). The resulting aldehyde intermediate was then further utilized in the synthesis pathway to synthesize (+)-Preussin<a href="#fn5" id="ref5-anchor" class="superscript">5</a></p>

{{< /details >}}

{{< cards >}}
  {{< card url="/chemdatabase/dmp-mechanisms-1/" title="Want more Mechanisms? Click here!" icon="academic-cap" >}}
{{< /cards >}}

## Summary

- 1° Alcohols (Primary) get oxidized to **Aldehydes**.
- 2° Alcohols (Secondary) get oxidized to **Ketones**.
- 3° Alcohols (Tertiary) **do not** get oxidized at all.

**Quick steps to finding the product for any alcohol**
1. Identify the reagents.
2. Assign side chains (non alcohol part).
3. Selectively convert Alcohol to correct product based on alcohol type. Nothing else.
4. Keep the side chains (non alcohol part) the same and piece together the full molecule together again.

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

<!-- Content with another custom footnote -->


<!-- Additional invisible anchor at the desired return position -->
<a id="ref2-top" class="anchor"></a>

<!-- Image with the second citation -->
<div>
    <a id="fn2" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="cortiboxdark.png" 
        light-src="cortiboxlight.png"
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
        dark-src="ingenolboxdark.png" 
        light-src="ingenolboxlight.png"
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
        dark-src="DMPSecondaryguessboxd.png" 
        light-src="DMPSecondaryguessboxl.png"
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
        dark-src="preuboxdark.png" 
        light-src="preuboxlight.png"
        link="https://doi.org/10.1021/ol000289p"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">5.</span> Lee, K.-Y.; Kim, Y.-H.; Oh, C.-Y.; Ham, W.-H. Facile and efficient total synthesis of (+)-preussin. <i>Org. Lett.</i> <b>2000</b>, <i>2</i> (25), 4041–4042. DOI: <a href="https://doi.org/10.1021/ol000289p">10.1021/ol000289p</a>. <a href="#ref5-anchor">↩</a></span></p>
</div>
