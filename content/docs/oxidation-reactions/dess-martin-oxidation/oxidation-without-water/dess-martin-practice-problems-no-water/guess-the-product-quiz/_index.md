---
title: Dess-Martin Oxidation without Water Practice Problems
linkTitle: Practice Flashcards
prev:
quizdown: true
---

{{< hextra/hero-subtitle >}}
  Here you can test your knowledge on product guessing for the Dess Martin Oxidation without the usage of water.
{{< /hextra/hero-subtitle >}}

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
  What kind of Alcohol cannot undergo Dess Martin Oxidation?
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
  Draw the Full Dess-Martin Periodinane structure.
{{< /hextra/hero-subtitle >}}

  <div class="flashcard-container" id="flashcardContainer2">
    <div class="flashcard">
      <div class="flashcard-side front">
        <img src="q2c.png" alt="Front Image">
      </div>
      <div class="flashcard-side back">
        <img src="a2c.png" alt="Back Image">
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
        <img src="q1front.png" alt="Front Image">
      </div>
      <div class="flashcard-side back">
        <img src="q1new.png" alt="Back Image">
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
        <img src="newq2p.png" alt="Front Image">
      </div>
      <div class="flashcard-side back">
        <img src="newq2pans.png" alt="Back Image">
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
        dark-src="darkcitation.png" 
        light-src="lightcitation.png"
        link="https://doi.org/10.1021/jo00356a052"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">1.</span> Dess, D. B.; Martin, J. C. Readily Accessible 12-I-51 Oxidant for the Conversion of Primary and Secondary Alcohols to Aldehydes and Ketones. <i>J. Org. Chem.</i> <b>1983</b>, <i>48</i>, 4155–4156. DOI: <a href="https://doi.org/10.1021/jo00356a052">10.1021/jo00356a052</a>. <a href="#ref1-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn2" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="ingenolboxnewdark.png" 
        light-src="ingenolboxnewlight.png"
        link="https://doi.org/10.1021/ja044123l"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">2.</span> Nickel, A.; Maruyama, T.; Tang, H.; Murphy, P. D.; Greene, B.; Yusuff, N.; Wood, J. L. Total synthesis of ingenol. <i>J. Am. Chem. Soc.</i> <b>2004</b>, <i>126</i> (50), 16300–16301. DOI: <a href="https://doi.org/10.1021/ja044123l">10.1021/ja044123l</a>. <a href="#ref1-anchor">↩</a></span></p>
</div>

<div>
    <a id="fn3" class="anchor"></a>
    {{<figure-dynamic-toggle
        dark-src="preuboxdark.png" 
        light-src="preuboxlight.png"
        link="https://doi.org/10.1021/ol000289p"
    >}}
    <p class="hanging-indent"><span class="reference"><span class="bold-number">3.</span> Lee, K.-Y.; Kim, Y.-H.; Oh, C.-Y.; Ham, W.-H. Facile and efficient total synthesis of (+)-preussin. <i>Org. Lett.</i> <b>2000</b>, <i>2</i> (25), 4041–4042. DOI: <a href="https://doi.org/10.1021/ol000289p">10.1021/ol000289p</a>. <a href="#ref5-anchor">↩</a></span></p>
</div>

