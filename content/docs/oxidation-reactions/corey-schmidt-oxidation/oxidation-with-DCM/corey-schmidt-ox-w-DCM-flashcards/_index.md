---
title: Practice Flashcards and Problems
linkTitle: Corey Schmidt Oxidation with DCM Practice Problems
prev:
quizdown: true
---

{{< hextra/hero-subtitle >}}
  Here you can test your knowledge on product guessing for the Corey Schmidt Oxidation without the usage of water.
{{< /hextra/hero-subtitle >}}

<div style="text-align: left; margin-top: 0.4em; display: flex; flex-wrap: wrap; gap: 4px;">
{{< hextra/hero-badge >}}
  <span>Education</span>
  {{< icon name="academic-cap" attributes="height=14" >}}
{{< /hextra/hero-badge >}}
</div>

{{< callout type="info" >}}
  Hi Everyone! This section is currently a work in progress, however, we have some sample questions we would love for you to try.
{{< /callout >}}

<style>
    .flashcard-container {
      perspective: 1000px;
      width: 100%;
      max-width: 600px;
      margin: 20px 0;
    }

    .flashcard {
      position: relative;
      width: 100%;
      height: 400px;
      transform-style: preserve-3d;
      transform: rotateY(0deg);
      transition: transform 0.6s;
    }

    .flashcard-side {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #e5e7eb;
      overflow: hidden;
    }

    .flashcard-side img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .flashcard-side.back {
      transform: rotateY(180deg);
      background-color: #f8fafc;
    }

    .flashcard-container.flip .flashcard {
      transform: rotateY(180deg);
    }

    @media (max-width: 600px) {
      .flashcard-container {
        max-width: 300px;
      }

      .flashcard {
        height: 200px;
      }
    }

    .centered-text {
      text-align: center;
    }
  </style>
</head>
<body>

## Concept Testing

{{< hextra/hero-subtitle >}}
  Here you can test your knowledge on concept based questions!
{{< /hextra/hero-subtitle >}}

### Question 1

{{< hextra/hero-subtitle >}}
  What kind of Alcohol cannot undergo Corey Schmidt Oxidation?
{{< /hextra/hero-subtitle >}}

  <div class="flashcard-container" id="flashcardContainer1">
    <div class="flashcard">
      <div class="flashcard-side front">
        <img src="q1c.png" alt="Front Image">
      </div>
      <div class="flashcard-side back">
        <img src="a1cver2.png" alt="Back Image">
      </div>
    </div>
  </div>
  
### Question 2

{{< hextra/hero-subtitle >}}
  Draw the Full Pyridinium dichromate structure.
{{< /hextra/hero-subtitle >}}

  <div class="flashcard-container" id="flashcardContainer2">
    <div class="flashcard">
      <div class="flashcard-side front">
        <img src="q1.png" alt="Front Image">
      </div>
      <div class="flashcard-side back">
        <img src="q1ans.png" alt="Back Image">
      </div>
    </div>
  </div>

## Predict the Product

{{< hextra/hero-subtitle >}}
  Here you can see if you can see if you correctly guess what the product is!
{{< /hextra/hero-subtitle >}}

### Question 1

{{< hextra/hero-subtitle >}}
  Predict the Product.
{{< /hextra/hero-subtitle >}}

  <div class="flashcard-container" id="flashcardContainer3">
    <div class="flashcard">
      <div class="flashcard-side front">
        <img src="q2p.png" alt="Front Image">
      </div>
      <div class="flashcard-side back">
        <img src="q2ans.png" alt="Back Image">
      </div>
    </div>
  </div>

### Question 2

{{< hextra/hero-subtitle >}}
  Guess the Product.
{{< /hextra/hero-subtitle >}}

  <div class="flashcard-container" id="flashcardContainer4">
    <div class="flashcard">
      <div class="flashcard-side front">
        <img src="testingq3.png" alt="Front Image">
      </div>
      <div class="flashcard-side back">
        <img src="q3ver2.png" alt="Back Image">
      </div>
    </div>
  </div>

<script>
  document.querySelectorAll('.flashcard-container').forEach(container => {
    container.addEventListener('click', function () {
      this.classList.toggle('flip');
    });
  });
</script>
</body>
</html>

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
        dark-src="1979CoreyCitationD.png" 
        light-src="1979CoreyCitationL.png"
        link="https://doi.org/10.1021/jo00356a052"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">1.</span> Corey, E. J.; Schmidt, G. Useful Procedures for the Oxidation of Alcohols Involving Pyridinium Dichromate in Aprotic Media. <i>Tetrahedron Lett.</i> <b>1979</b>, <i>20</i> (5), 399–402. DOI: <a href="https://doi.org/10.1016/S0040-4039(01)93515-4">10.1016/S0040-4039(01)86498-0</a>. <a href="#ref1-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn2" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="CITATIONFULLSECdark.png" 
        light-src="CITATIONFULLSEClight.png"
        link="https://doi.org/10.3390/molecules25102377"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">2.</span> Wojtkielewicz, A.; Pawelski, D.; Bazydło, P.; Baj, A.; Witkowski, S.; Morzycki, J. W. A Convenient Synthesis of (16S,20S)-3β-hydroxy-5α-pregnane-20,16-carbolactam and its N-alkyl Derivatives. <i>Molecules</i> <b>2020</b>, <i>25</i> (10), 2377. DOI: <a href="https://doi.org/10.3390/molecules25102377">10.3390/molecules25102377</a>. <a href="#ref3-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn3" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="altverpdcprim.png" 
        light-src="altverpdcprim1.png"
        link="https://doi.org/10.1021/jo00352a019"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">3.</span> Terpstra, J. W.; Van Leusen, A. M. A new synthesis of benzo[b]thiophenes and benzo[c]thiophenes by annulation of disubstituted thiophenes. <i>J. Org. Chem.</i> <b>1986</b>, <i>51</i> (2), 230–238. DOI: <a href="https://doi.org/10.1021/jo00352a019">10.1021/jo00352a019</a>. <a href="#ref2a-anchor">↩</a></span></p>
</div>