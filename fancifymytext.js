const handleBigger = () => {
    document.getElementById("main-text").style.fontSize = "24pt";
}

const handleFancy = () => {
    document.getElementById("main-text").style.fontWeight = "bold";
    document.getElementById("main-text").style.color = "blue";
    document.getElementById("main-text").style.textDecoration = "underline";
}

const handleBoring = () => {
    document.getElementById("main-text").style.fontWeight = "";
    document.getElementById("main-text").style.color = "";
    document.getElementById("main-text").style.textDecoration = "";
}

const handleMoo = () => {
    const text = document.getElementById("main-text");
    text.value = text.value.toUpperCase();
    let sentences = text.value.split(".");

    // Process each sentence (except any empty one at the end)
    for (let i = 0; i < sentences.length; i++) {
      let words = sentences[i].trim().split(" ");
      if (words.length > 0 && words[0] !== "") {
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
      }
    }
    text.value = sentences.join(". ").trim();
}