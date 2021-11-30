
/* HINTS DOCUMENT
Disclaimer: FEEL FREE TO DEVIATE FROM THE FILL IN THE BLANKS OR WRITE OVER
SKELETON CODE. THEY ARE JUST TO PROVIDE HINTS TO THE COURSE STAFF SOLUTION BUT THERE
ARE MANY WAYS TO APPROACH ANYTHING IN WEB DEVELOPMENT. YOU DO NOT HAVE TO 
COMPLETE FROM TOP TO BOTTOM (in fact we encourage you not to). */

/* Assign/declare variables. We started you off with some variables to help you.
Hint: We need:
      (1) a variable for keeping track of the total number,
      (2) the string value that is shown on the display screen
      (3) the operator (+, x, -, and ÷) that is selected.  */
      
let total = 0;
let strbuffer = "0";
let operator = null; 


    function calculations() {
        const intBuffer = parseInt(strbuffer); 
        if (operator === "+") {
            total += intBuffer;
        } else if (operator === "-") {
            total -= intBuffer;
        } else if (operator === "x") {
            total *= intBuffer;
        } else if (operator === "÷") {
            total /= intBuffer;
        } else {
          return;
        }
    }
    
    function makesNumber(value) {
        if (strbuffer == "0") {
            strbuffer = value;
        } else {
            strbuffer = strbuffer + value;
        }
    }
        
    function makesSymbol(symbol) {
        if (symbol === "C") {
          total = 0;
          strbuffer = "0";
        } else if (symbol === "←") {
          strbuffer = strbuffer.substring(0, strbuffer.length - 1);
        } else if (symbol === "=") {
          if (operator == null) {
            return;
          }
          calculations();
          strbuffer = total;
          operator = null;
        } else { 
            const intBuffer = parseInt(strbuffer);
            if (total === 0) {
              total = intBuffer;
            } else {
              calculations();
            }
            operator = symbol;
            strbuffer = "0";
        }
    }
    
    function setListeners() {
        let buttonList = document.querySelectorAll(".buttons");
        for (item of buttonList) {
          item.addEventListener("click", function(event) {buttonClicked(event.target.innerText)});
        }
    }
    
    setListeners();
    
    function buttonClicked(valueClicked) {
        if (isNaN(parseInt(valueClicked))) { 
            makesSymbol(valueClicked);
        } else {
            makesNumber(valueClicked);
        }
        document.querySelector(".result-screen").innerText = strbuffer;
    }
