// Complete
function alertDescription() {
    alert(
      "Welcome to Bimey's Calculator! To use the calculator, just change the didgets in the two boxes and hit the Get Answer button. The calculater currently works for Addtion, Subtraction, Multipication, and Division. This calculator doesn't fully work yet so keep it to simple. It should be fine most of the time though. If you get an answer like 1e+64 the 1 is the first didget of the problem and the 64 is the number of zeros after. I still can't figure out what the e means. If anyone can help me with that, that would be nice. Also note that this calculator doesn't work for decimals. Have fun!!😉"
    );
    }
    
    const button = document.querySelector("#button");
    button.addEventListener("click", function() {
      alertDescription()
    });
    
    function solveAddition() {
      const abutton = document.querySelector("#abutton");
      abutton.addEventListener("click", getAanswer);
      function getAanswer() {
        const a1 = document.querySelector("#a1");
        const a2 = document.querySelector("#a2");
        const aanswer = document.querySelector("#aanswer");
        console.log("click!!");
        let num = parseInt(a1.value) + parseInt(a2.value);
        let x = num.toString();
        aanswer.textContent = x;
      }
    }
    function solveSubtraction() {
      const sbutton = document.querySelector("#sbutton");
      sbutton.addEventListener("click", getSanswer);
      function getSanswer() {
        const s1 = document.querySelector("#s1");
        const s2 = document.querySelector("#s2");
        const sanswer = document.querySelector("#sanswer");
        console.log("click!!");
        let num = parseInt(s1.value) - parseInt(s2.value);
        let x = num.toString();
        sanswer.textContent = x;
      }
    }
    function solveMultiplication() {
      const mbutton = document.querySelector("#mbutton");
      mbutton.addEventListener("click", getManswer);
      function getManswer() {
        const m1 = document.querySelector("#m1");
        const m2 = document.querySelector("#m2");
        const manswer = document.querySelector("#manswer");
        console.log("click!!");
        let num = parseInt(m1.value) * parseInt(m2.value);
        let x = num.toString();
        manswer.textContent = x;
      }
    }
    function solveDivision() {
      const dbutton = document.querySelector("#dbutton");
      dbutton.addEventListener("click", getDanswer);
      function getDanswer() {
        const d1 = document.querySelector("#d1");
        const d2 = document.querySelector("#d2");
        const danswer = document.querySelector("#danswer");
        console.log("click!!");
        let num = parseInt(d1.value) / parseInt(d2.value);
        let x = num.toString();
        danswer.textContent = x;
      }
    }
    solveAddition();
    solveSubtraction();
    solveMultiplication();
    solveDivision();
    alertDescription()
    