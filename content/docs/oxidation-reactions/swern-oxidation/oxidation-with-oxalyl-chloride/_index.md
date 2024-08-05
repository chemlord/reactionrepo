---
title: Oxidation with Oxalyl chloride
date: 2024-08-02
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

{{<figure-dynamic-toggle
    dark-src="RegularSwernOverviewD.png"
    light-src="RegularSwernOverviewL.png"
    title="General Scheme of the Swern Oxidation"
    link="">}}

<p>The Swern oxidation, developed by Kanji Omura and Daniel Swern in 1978, is a method used to oxidize primary alcohols to aldehydes and secondary alcohols to ketones using activated dimethyl sulfoxide (DMSO), oxalyl chloride as a oxidizing agent, triethylamine (TEA) and dichloromethane (DCM).<a href="#fn1" id="ref1-anchor" class="superscript">1</a></p>

DMSO and Oxalyl chloride form a reactive salt (Lewis Acid) with the alcohol providing a good leaving group required for subsequent elimination.

## Finding the Product for a 1° Alcohol
{{< hextra/hero-subtitle >}}
  This section is a brief overview on how to find the product for a 1° Alcohol (Primary) using a example from a real scientific research paper.
{{< /hextra/hero-subtitle >}}

<br>

{{<figure-dynamic-toggle
    dark-src="primqd.png"
    light-src="primql.png"
    title="Propose a Mechanism for this Reaction."
    caption="We must find out how the product was formed and the steps to form it."
    link="https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1%3C121::AID-CHEM121%3E3.0.CO;2-O">}}

{{% details title="Where did this Reaction come from?" closed="true" %}}

{{<figure-dynamic-toggle
        dark-src="TaxolCitationNoBoxL.png" 
        light-src="TaxolCitationNoBox.png"
        title="Condensed Synthesis Overview of the Asymmetric Total Synthesis of Taxol by Mukaiyama et al. (1990)"
        caption="This 61 step linear synthesis features Swern Oxidation for a total of 4 steps out of 61 steps. L-serine is the starting material and undergoes 61 stpes to form Taxol."
        link="https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1%3C121::AID-CHEM121%3E3.0.CO;2-O"
    >}}

{{% callout type="info" %}}
For simplicity, this image summarizes the total steps displayed in the original paper by [Mukaiyama et al. (1999)](https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1%3C121::AID-CHEM121%3E3.0.CO;2-O), showing that the synthesis of the Taxol underwent a 61 step linear synthesis. The full pathway is not shown in our example. This is to maintain clarity and focus on building towards when Swern Oxidation is used.
{{% /callout %}}

{{<figure-dynamic-toggle
        dark-src="RETROSYNDark.png" 
        light-src="RETROSYNLight.png"
        link="https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1%3C121::AID-CHEM121%3E3.0.CO;2-O"
    >}}

In 1999, Mukaiyama et al. published the Mukaiyama Asymmetric Total Synthesis of Taxol. Taxol, a well-known complex organic molecule, underwent retrosynthetic analysis, revealing an optically active ketone intermediate (3), which could be further simplified into a chiral aldehyde intermediate (4).

{{% callout icon="question-mark-circle" %}}
Retrosynthetic analysis is a technique in organic chemistry that breaks down complex molecules into simpler components by working backward. This method helps chemists plan a synthesis pathway by identifying key bonds to disconnect, guiding the creation of a forward-directing synthetic route.
{{% /callout %}}

{{<figure-dynamic-toggle
        dark-src="PRIMARYqboxd.png" 
        light-src="PRIMARYqboxl.png"
        link="https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1%3C121::AID-CHEM121%3E3.0.CO;2-O"
    >}}

<p>As seen in scheme 4, the chiral aldehyde intermediate (4), compound 18 undergoes a reduction via DIBAL and hexane as a solvent. Next, this reduced intermediate undergoes Swern Oxidation to form the chiral aldehyde intermediate (4).<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p>

{{< /details >}}

{{% steps %}}

### Identify the Reagents

{{<figure-dynamic-toggle
    dark-src="swernreagentsdark.png"
    light-src="swernreagentslight.png"
>}}

DMSO is used alongside the preferred oxidizing agent Oxalyl chloride, TEA (Triethylamine) and DCM.

{{% callout type="warning" %}}
If you missed the [**Background section**](/reactionrepo/docs/oxidation-reactions/swern-oxidation) on the Swern Oxidation landing page, please check it out. It's highly recommended to review the information as it covers the key characteristics the reaction and the reactants.
{{% /callout %}}

### Identify the Key Features of the Compound

#### Alcohol Type

{{<figure-dynamic-toggle
    dark-src="AlcoholsNewR3Dark.png"
    light-src="AlcoholsNewR3Light.png"
>}}

These are the 3 main types of alcohols: **Primary**, **Secondary** and **Tertiary**.

{{% callout type="warning" %}}
Tertiary alcohols **cannot** go through Swern oxidation.
{{% /callout %}}

- Primary alcohols can go through Swern Oxidation to become an **Aldehyde**.

By identifying the Alcohol Type, you now know the **product** to expect.

#### Identifying Side Chains and Alcohol Conversion

<br>

{{<figure-dynamic-toggle
    dark-src="primqdhigh.png"
    light-src="primqlhigh.png"
    title="Tracking Side Chains and Alcohol Conversion"
    caption="In the Swern oxidation of primary alcohols, the process involves assigning one side chain (R) to understand the reaction better. The colored side chain represents an R group that remains unchanged during the reaction. The alcohol group is selectively oxidized to form an aldehyde. For educational purposes, we conceptually assign the non-alcohol group as R (Side chain) to visualize the changes and reconstruct the molecule post-reaction."
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

## Mechanism for 1° Alcohol
{{< hextra/hero-subtitle >}}
  This section is a brief overview on how to perform the mechanism for a 1° Alcohol (Primary) using the example from above.
{{< /hextra/hero-subtitle >}}

{{% steps %}}

### DMSO undergoes Resonance

{{<figure-dynamic-toggle
    dark-src="step0dark.png" 
    light-src="step0light.png"
    title="Resonance forms of DMSO"
    caption="DMSO is capable of undergoing resonance. This is important for the next step."
>}}

In the first step of Swern Oxidation, DMSO undergoes resonance to prepare the DMSO to perform a nucleophilic attack on Oxalyl chloride.

### Chlorosulfonium Ion Formation

<br>

{{<figure-dynamic-toggle
    dark-src="step1dark.png" 
    light-src="step1light.png"
    title="Nucleophillic attack using DMSO Resonance structure"
    caption="DMSO Resonance Structure performs Nucleophilic Attack, Chloride Ion acts as a Leaving Group."
>}}

In this step, the newly formed chromium-alcohol complex undergoes protonation. This protonation stabilizes the intermediate, preparing it for further rearrangement and facilitating the subsequent steps in the oxidation process.

### Chlorodimethyl Sulfonium Ion and Byproduct Formation

<br>

{{<figure-dynamic-toggle
    dark-src="step2dark.png" 
    light-src="step2light.png"
    title="Chlorodimethyl Sulfonium Ion Formation"
    caption="The nucleophilic attack initiates proton transfer within the Chlorosulfonium Ion to form Chlorodimethyl Sulfonium Ion its Byproduct."
>}}

In this step, the Chlorosulfonium Ion decomposes after proton transfer is initiated from the chloride ion. This action releases carbon dioxide, carbon monoxide and a chloride ion.

### Alcohol and Base Addition

{{<figure-dynamic-toggle
    dark-src="steptestdark.png" 
    light-src="step3light.png"
    title="Addition of the Primary Alcohol and 2 equivalents of TEA (Triethylamine)."
    caption="This process produces a alkoxysulfonium ion intermediate. However the octet rule is violated in the newly produced ion, so TEA (Triethylamine) is needed to stabilize the molecule for further transformation."
>}}

In this step, the primary alcohol is added and SN2 substitution occurs. Chloride is a good leaving group and leaves the Chlorosulfonium Ion to produce alkoxysulfonium ion intermediate. Next, 2 equivalents of TEA (Triethylamine) is added to neutralize changes and stabilize the intermediate. This eventually forms a sulfur ylide.

### Ylide Formation and Intramolecular Elimination

<br>

{{<figure-dynamic-toggle
    dark-src="finalstepprimdark.png" 
    light-src="finalightstepprim.png"
    title="Aldehyde product and DMS byproduct Formation"
    caption="Sulfur Ylide decomposes to form DMS and the desired aldehyde product."
>}}

The Sulfur ylide undergoes intramolecular elimination to cleave the ylide into the desired product and by-products.

### Reconstructing the Target Intermediate

{{< callout type="warning">}}
This animation in this section is still a work in progress.
{{< /callout >}}

{{% /steps %}}

## Finding the Product for a 2° Alcohol
{{< hextra/hero-subtitle >}}
  This section is a brief overview on how to find the product for a 2° Alcohol (Secondary) using a example from a real scientific research paper.
{{< /hextra/hero-subtitle >}}

<br>

{{<figure-dynamic-toggle
    dark-src="secondaryqdark.png"
    light-src="secondaryqlight.png"
    title="Propose a Mechanism for this Reaction"
    caption="Oxidation of a secondary alcohol intermediate to an ketone. The groundwork to determine the product is similar to how a primary alcohol is converted."
    link="https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1%3C121::AID-CHEM121%3E3.0.CO;2-O">}}

{{% details title="Where did this Reaction come from?" closed="true" %}}

{{<figure-dynamic-toggle
        dark-src="TaxolCitationNoBoxL.png" 
        light-src="TaxolCitationNoBox.png"
        title="Condensed Synthesis Overview of the Asymmetric Total Synthesis of Taxol by Mukaiyama et al. (1990)"
        caption="This 61 step linear synthesis features Swern Oxidation for a total of 4 steps out of 61 steps."
        link="https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1%3C121::AID-CHEM121%3E3.0.CO;2-O"
    >}}

{{% callout type="info" %}}
For simplicity, this image summarizes the total steps displayed in the original paper by [Mukaiyama et al. (1999)](https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1%3C121::AID-CHEM121%3E3.0.CO;2-O), showing that synthesis of the Taxol underwent a 61 step linear synthesis. The full pathway is not shown in our example. This is to maintain clarity and focus on building towards when Swern Oxidation is used.
{{% /callout %}}

{{<figure-dynamic-toggle
        dark-src="RETROSYNDark.png" 
        light-src="RETROSYNLight.png"
        link="https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1%3C121::AID-CHEM121%3E3.0.CO;2-O"
    >}}

The Mukaiyama Asymmetric Total Synthesis of Taxol was published in 1999 by Mukaiyama et al (1999). Taxol, a well known and difficult complex organic molecule, underwent retrosynthetic analysis. This revealed a optically active ketone intermediate (3) which could be further broken down into another basic unit (4)

{{% callout icon="question-mark-circle" %}}
Retrosynthetic analysis is a technique in organic chemistry that breaks down complex molecules into simpler components by working backward, helping chemists plan a synthesis pathway. It identifies key bonds to disconnect, guiding the creation of a forward directing synthetic route.
{{% /callout %}}

{{<figure-dynamic-toggle
    dark-src="secsourced.png"
    light-src="secsourcel.png"
    link="https://doi.org/10.3390/molecules25102377">}}

<p>As seen in Scheme 5 of the paper, the synthesis of an optically active ketone (3) involved a single step process using two sets of reagent combinations. First, the alkylation (Grignard reaction) of compound 22 using Methyl Magnesium Bromide (MeMgBr) This yielded an alcohol intermediate.<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p>

<p>Next, this secondary alcohol intermediate was oxidized to a ketone (3) using Swern Oxidation (Oxidation with Oxalyl chloride).<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p>

{{< /details >}}

{{% steps %}}

### Identify the Reagents

{{<figure-dynamic-toggle
    dark-src="swernreagentsdark.png"
    light-src="swernreagentslight.png"
>}}

Often times, Swern Oxidation with oxalyl chloride is performed alongside TEA (Triethylamine) and 

{{% callout type="warning" %}}
If you missed the [**Swern Oxidation**](/reactionrepo/docs/oxidation-reactions/swern-oxidation) page on the Swern oxidation in detail. please check it out. It's highly recommended to review the information as it covers interesting information on the reaction and the reagents.
{{% /callout %}}

### Identify the Key Features of the Compound

#### Alcohol Type

{{<figure-dynamic-toggle
    dark-src="AlcoholsNewR3Dark.png"
    light-src="AlcoholsNewR3Light.png"
>}}

These are the 3 main types of alcohols: **Primary**, **Secondary** and **Tertiary**.

{{% callout type="warning" %}}
Tertiary alcohols **cannot** go through Swern oxidation.
{{% /callout %}}

- Primary alcohols can go through Swern Oxidation to become an **Aldehyde**.

By identifying the Alcohol Type, you now know the **product** to expect.

### Identifying Side Chains and Alcohol Conversion

<br>

{{<figure-dynamic-toggle
    dark-src="secondaryqdhigh.png" 
    light-src="secondaryqlighthigh.png"
    title="Tracking Side Chains and Alcohol Conversion in Swern Oxidation"
    caption="Be careful when assigning side chain placeholders. If you do not see a side chain visible that is not denoted by H or another group. Assume its a Methyl group. In the example, it was not shown, however for group tracking we have shown it in red."
>}}

When oxidizing secondary alcohols, the colored side chains represent unchanged R groups. The alcohol is selectively oxidized to form a ketone. For educational purposes, use R¹ and R² as placeholders for parts of the molecule, excluding the secondary alcohol and first side chain. This helps visualize the reaction and reconstruct the molecule post-oxidation.

{{% callout type="warning" %}}
The molecule isn't taken apart during the reaction, but for understanding the process, we conceptually take it apart to visualize the changes. Additionally for the sake of visual aid, we've slightly moved the yellow side chain group.
{{% /callout %}}

##### Guide to Side Chains

1. **Identify Side Chains (R¹ and R²)**: Use parts of the molecule as placeholders (R¹ and R²), representing parts of the molecule flanking the alcohol group.

2. **Understand Their Role**: These placeholders help track the unchanged parts of the molecule, aiding in visualizing the structure before and after the reaction.

3. **Focus on the Reaction Center**: The secondary alcohol is selectively oxidized to form a ketone. The placeholders show how the structure is altered.

4. **Reassign Side Chains**: After the reaction, reattach the placeholders (R¹ and R²) to the new ketone, demonstrating the unchanged nature of the side chains.

{{% /steps %}}

## Mechanism for 2° Alcohol
{{< hextra/hero-subtitle >}}
  This section is a brief overview on how to perform the mechanism for a 2° Alcohol (Secondary) using the example from above.
{{< /hextra/hero-subtitle >}}

{{% steps %}}

### DMSO undergoes Resonance

{{<figure-dynamic-toggle
    dark-src="step0dark.png" 
    light-src="step0light.png"
    title="Resonance forms of DMSO"
    caption="DMSO is capable of undergoing resonance. This is important for the next step."
>}}

In the first step of Swern Oxidation, DMSO undergoes resonance to prepare the DMSO to perform a nucleophilic attack on Oxalyl chloride.

### Chlorosulfonium Ion Formation

<br>

{{<figure-dynamic-toggle
    dark-src="step1dark.png" 
    light-src="step1light.png"
    title="Nucleophillic attack using DMSO Resonance structure"
    caption="DMSO Resonance Structure performs Nucleophilic Attack, Chloride Ion acts as a Leaving Group."
>}}

In this step, the newly formed chromium-alcohol complex undergoes protonation. This protonation stabilizes the intermediate, preparing it for further rearrangement and facilitating the subsequent steps in the oxidation process.

### Chlorodimethyl Sulfonium Ion and Byproduct Formation

<br>

{{<figure-dynamic-toggle
    dark-src="step2dark.png" 
    light-src="step2light.png"
    title="Chlorodimethyl Sulfonium Ion Formation"
    caption="The nucleophilic attack initiates proton transfer within the Chlorosulfonium Ion to form Chlorodimethyl Sulfonium Ion its Byproduct."
>}}

In this step, the Chlorosulfonium Ion decomposes after proton transfer is initiated from the chloride ion. This action releases carbon dioxide, carbon monoxide and a chloride ion.

### Alcohol and Base Addition

{{<figure-dynamic-toggle
    dark-src="newstep3dark.png" 
    light-src="step3seclight.png"
    title="Addition of the Secondary Alcohol and 2 equivalents of TEA (Triethylamine)."
    caption="This process produces a alkoxysulfonium ion intermediate. However the octet rule is violated in the newly produced ion, so TEA (Triethylamine) is needed to stabilize the molecule for further transformation. This process is the same as the primary alcohol, except there is an additional side chain."
>}}

In this step, the primary alcohol is added and SN2 substitution occurs. Chloride is a good leaving group and leaves the Chlorosulfonium Ion to produce alkoxysulfonium ion intermediate. Next, 2 equivalents of TEA (Triethylamine) is added to neutralize changes and stabilize the intermediate. This eventually forms a sulfur ylide.

### Ylide Formation and Intramolecular Elimination

{{<figure-dynamic-toggle
    dark-src="finalstepsecdark.png" 
    light-src="finalstepseclight.png"
    title="Ketone product and DMS byproduct Formation"
    caption="Sulfur Ylide decomposes to form DMS and the desired aldehyde product."
>}}

The Sulfur ylide undergoes intramolecular elimination to cleave the ylide into the desired product and by-products.

### Reconstructing the Final Overall Product

{{< callout type="warning">}}
This animation in this section is still a work in progress.
{{< /callout >}}

{{% /steps %}}

## Sample Problems
{{< hextra/hero-subtitle >}}
  Test your Knowledge.
{{< /hextra/hero-subtitle >}}

### Question 1
{{< hextra/hero-subtitle >}}
  Predict the Product.
{{< /hextra/hero-subtitle >}}

{{<figure-dynamic-toggle
    dark-src="guesswhatprimdark.png"
    light-src="guesswhatprimlight.png"
    link="https://pubs.acs.org/doi/10.1021/acs.orglett.5b00345">}}

{{% details title="Reveal the Answer." closed="true" %}}

{{<figure-dynamic-toggle
    dark-src="guesswhatprimdarkans.png"
    light-src="guesswhatprimlightans.png"
    link="https://pubs.acs.org/doi/10.1021/acs.orglett.5b00345">}}

This should form the expected aldehyde product as a result of oxidation of the primary alcohol on this compound.

{{< /details >}}

{{% details title="Where did this Reaction come from?" closed="true" %}}

{{<figure-dynamic-toggle
    dark-src="fittestdark.png"
    light-src="fittestlight.png"
    title="Overall Reaction used to form Mycalol (Proposed Structure) from Fragment A (6) and Fragment B (11)"
    caption="The synthesis of Mycalol involved Fragments A and B (6 and 11) undergoing several other reactions to form the proposed structure of Mycalol. The proposed structure was revised based on detailed NMR analysis, changing the position of the acetate group and the stereochemistry of the glycerol unit."
    link="https://doi.org/10.1021/acs.orglett.5b00345">}}

{{% callout type="info" %}}
For simplicity, this image summarizes the reactions and the main compounds used to complete the synthesis in the original paper by [Seetharamsingh et al. (2015)](https://doi.org/10.1021/acs.orglett.5b00345), highlighting the reaction conditions and compounds. The full pathway is not shown to maintain clarity and focus on building towards when Corey Schmidt oxidation is used.
{{% /callout %}}

{{<figure-dynamic-toggle
    dark-src="pdcprimnoboxdark1.png"
    light-src="pdcprimnoboxlight1.png"
    link="https://pubs.acs.org/doi/10.1021/acs.orglett.5b00345">}}

This reaction showing the Corey Schmidt oxidation of this alcohol intermediate (3) was part of the proposed synthesis pathway of the formation of Mycalol, a potent anticancer agent, which was synthesized through a series of steps, notably PDC oxidation. These steps resulted in the formation of the desired aldehyde intermediate (3a), which underwent further reactions to complete the synthesis. 

{{<figure-dynamic-toggle
        dark-src="fragmentAdark.png" 
        light-src="fragmentAlight.png"
        link="https://pubs.acs.org/doi/10.1021/acs.orglett.5b00345"
    >}}

One main reagent used in the synthesis of Mycalol was Fragment A. Fragment A (6) was formed from the conversion process of compound 2 to compound 6 (Fragment A) over a four step synthesis pathway.

<p>A crucial step in this multi-step process was the oxidation of a primary alcohol intermediate (3a) to an aldehyde intermediate using Pyridinium dichromate (PDC) in dichloromethane (DCM) for 4 hours. The resulting aldehyde intermediate (3a) was then further utilized in subsequent steps towards the proposed synthesis of Mycalol.<a href="#fn2" id="ref2-anchor" class="superscript">2</a></p>

{{< /details >}}

### Question 2
{{< hextra/hero-subtitle >}}
  Propose a Mechanism for this Reaction.
{{< /hextra/hero-subtitle >}}

{{<figure-dynamic-toggle
    dark-src="PDCcitefulldarknoboxver2.png"
    light-src="PDCcitefulllightnoboxver2.png"
    link="https://doi.org/10.1021/ja044123l">}}

{{% callout type="info" %}}
Focus on creating the compound in the box.
{{% /callout %}}

{{% details title="Reveal the Answer." closed="true" %}}

{{<figure-dynamic-toggle
    dark-src="secproblemdark.png" 
    light-src="secproblemlight.png"
    title="Start by identifying the non-alcohol portion of the molecule and determine the product"
    caption="Colored side chains in these diagrams represent constant R groups. Focus on the central alcohol, which transforms into a ketone or aldehyde. Use the colored chains to track and restore these groups post-reaction, highlighting the selective oxidation process. Once you have done this proceed to the mechanism."
>}}

{{<figure-dynamic-toggle
    dark-src="darknonumberssec.png" 
    light-src="lightnonumberssec.png"
>}}

**Form the Overall Product**

{{% callout type="warning" %}}
This animation is currently being worked on.
{{% /callout %}}

This should form the expected Ketone product as a result of oxidation of the secondary alcohol on this compound.

{{< /details >}}

{{% details title="Where did this Reaction come from?" closed="true" %}}

{{<figure-dynamic-toggle
    dark-src="PDCcitefulldarknobox.png"
    light-src="PDCcitefulllightnobox.png"
    title="Completion of the Enantioselective total synthesis of (-)-epoxyquinols A and B"
    caption="The diastereomeric (E)-dienone (-)-19 and (Z)-dienone (-)-20 were readily separated and fully characterized to form the desired product (-)-epoxyquinols A and B."
    link="https://doi.org/10.1016/j.tetlet.2004.03.057">}}

{{% callout type="info" %}}
For simplicity, this image summarizes the reagents and products of the synthesis in the original paper by [Mehta & Islam (2004)](https://doi.org/10.1016/j.tetlet.2004.03.057), showing the formation of the products. The full pathway is not shown. This is to effectively summarize the article's main reaction to form the desired product.
{{% /callout %}}

<p>This reaction showing the Corey-Schmidt Oxidation of the alcohol intermediate (18d or 18e) to an (E)-dienone (-)-19 and (Z)-dienone (-)-20 with a selectively oxidized aldehyde group was part of the synthesis pathway of the formation of (-)-epoxyquinols A and B. (-)-epoxyquinols A and B are anti-podes of the angiogenesis inhibiting natural products which contain various biological activity profiles. These epoxyquinone natural products and their associated biological profiles, according to the authors, have sparked interest in the synthetic community.<a href="#fn5" id="ref5-anchor" class="superscript">5</a></p>

{{% callout type="info" %}}
The paper was not officially specific as to which number the compound undergoing the PDC oxidation was. It is suggested that it is 18d or 18e. However since the pathway diverges multiple times it is unsure it's exact number.  **However the placement of the compound in the pathway are correct.**
{{% /callout %}}

{{<figure-dynamic-toggle
    dark-src="mehtadark2.png"
    light-src="mehtalight2.png"
    link="https://doi.org/10.1016/j.tetlet.2004.03.057"
>}}

<p>Mehta and Islam (2004), in this non-linear synthetic pathway, describe the successful yielding process of a epoxyquinone building block (5) derived from a Diels-Alder Adduct of cyclopentadiene and p-benzoquinone. This building block is split into two smaller pathways where they are converted to Compounds (+)-7 and (-)-7. The first pathway consisting of one step (a) Lipase PS 30 (Amano), vinyl acetate, t-butylmethylether, 0°C, 6 h, 82%; and the second pathway which consisted of two steps.

{{<figure-dynamic-toggle
    dark-src="mehtadark3.png"
    light-src="mehtalight3.png"
    link="https://doi.org/10.1016/j.tetlet.2004.03.057">}}

<p>Compounds (+)-7 is subjected to a 9 step pathway which eventually yielded the (E)-dienone (-)-19 and (Z)-dienone (-)-20. They were readily separated and fully characterized to form the desired product (-)-epoxyquinols A and B.<a href="#fn5" id="ref5-anchor" class="superscript">5</a></p>

{{<figure-dynamic-toggle
    dark-src="PDCsecdarkbox.png"
    light-src="PDCseclightbox.png"
    link="https://doi.org/10.1016/j.tetlet.2004.03.057">}}

<p>One key step was the oxidation of the secondary alcohol group on Compound 18d or 18e. PDC in DCM was officially used which successfully yielded the dieones needed to synthetize the epoxyquinone products.<a href="#fn5" id="ref5-anchor" class="superscript">5</a></p>

{{< /details >}}

<br>

## Summary
{{< hextra/hero-subtitle >}}
  The reaction entry summary. Find the general scheme and full summarized mechanisms here.
{{< /hextra/hero-subtitle >}}

### General Scheme
{{< hextra/hero-subtitle >}}
  This section briefly summarizes what can and cannot undergo reactions.
{{< /hextra/hero-subtitle >}}

{{<figure-dynamic-toggle
        dark-src="darksum.png" 
        light-src="lightsum.png"
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

{{% details title="Full Primary Mechanism" closed="true" %}}

{{<figure-dynamic-toggle
    dark-src="primfulldark.png" 
    light-src="primarylightfullnonum.png"
>}}

{{< /details >}}

{{% details title="Full Secondary Mechanism" closed="true" %}}

{{<figure-dynamic-toggle
    dark-src="fullsecswerndark.png" 
    light-src="fullsecswernlight.png"
>}}

{{< /details >}}

{{% callout type="info" %}}
Always remember to repeatedly practice your mechanisms and getting your reagents correct. Take advantage of our materials and/or keep practicing on a whiteboard or paper until you get it right every single time.
{{% /callout %}}

## Links and Related Articles
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
            dark-src="swern.png"
            light-src="swern.png"
            title=""
            width="300"
            height="150"
          >}}
          <h5 class="card-title">Swern Oxidation</h5>
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
    {{<figure-dynamic-toggle
        dark-src="TaxolCitationNewBox.png" 
        light-src="TaxolCitationNewBoxL.png"
        link="https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1<121::AID-CHEM121>3.0.CO;2-O"
    >}}
    <a id="fn2" class="anchor"></a>
    <p class="hanging-indent"><span class="reference"><span class="bold-number">2.</span> Mukaiyama, T.; Shiina, I.; Iwadare, H.; Saitoh, M.; Nishimura, T.; Ohkawa, N.; Sakoh, H.; Nishimura, K.; Tani, Y.-i.; Hasegawa, M.; Yamada, K.; Saitoh, K. Asymmetric Total Synthesis of Taxol. <i>Chem. Eur. J.</i> <b>1999</b>, <i>5</i> (1), 121–161. DOI: <a href="https://doi.org/10.1002/(SICI)1521-3765(19990104)5:1<121::AID-CHEM121>3.0.CO;2-O">10.1002/(SICI)1521-3765(19990104)5:1&lt;121::AID-CHEM121&gt;3.0.CO;2-O</a>. <a href="#ref2-anchor">↩</a></span></p>
</div>
