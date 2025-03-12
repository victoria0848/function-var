
//Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById('calculateButt');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    gatherInputData();
});




// indsamling af data fra dom (model code fra MVC)
function gatherInputData() {
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;

    const myDanishAmount = document.getElementById('danishAmount').value;




    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}






// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}

/* skriv din kode herunder... */
// Funktion der returnerer en veksel udregning
function calculateExchange(danishAmount, exchangeRate) {
    return danishAmount * exchangeRate;
}

// Funktion der kalder calculateExchange to gange med forskellige vekselrater
function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {
    let danishAmount = parseFloat(myDanishAmount);
    let euroRate = parseFloat(myEuroRate);
    let dollarRate = parseFloat(myDollarRate); 
    if (isNaN(danishAmount) || isNaN(euroRate) || isNaN(dollarRate)) {
        alert("Indtast venligst gyldige tal for alle felter.");
        return;
    }

    let myDollars = calculateExchange(danishAmount, dollarRate);
    let myEuros = calculateExchange(danishAmount, euroRate);}