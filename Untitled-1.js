<head>
    <title>Ulosoton nettopalkka-laskuri</title>
    <script>
      function calculateNetPay() {
        // Haetaan lomakkeen tiedot
        var grossPay = document.getElementById("grossPay").value;
        var taxRate = document.getElementById("taxRate").value;
        var debtRepaymentRate = document.getElementById("debtRepaymentRate").value;
        
        // Lasketaan veron määrä
        var taxAmount = grossPay * (taxRate / 100);
        
        // Lasketaan velan takaisinmaksun määrä
        var debtRepaymentAmount = grossPay * (debtRepaymentRate / 100);
        
        // Lasketaan nettopalkka
        var netPay = grossPay - taxAmount - debtRepaymentAmount;
        
        // Näytetään tulos
        document.getElementById("netPayOutput").innerHTML = "Nettopalkkasi on " + netPay.toFixed(2) + " euroa";
        document.getElementById("taxOutput").innerHTML = "Veroprosentti: " + taxRate + "%, verojen määrä: " + taxAmount.toFixed(2) + " euroa";
        document.getElementById("debtRepaymentOutput").innerHTML = "Ulosoton takaisinmaksu: " + debtRepaymentRate + "%, takaisinmaksettava määrä: " + debtRepaymentAmount.toFixed(2) + " euroa";
      }
    </script>
  </head>
  <body>
    <h1>Ulosoton nettopalkka-laskuri</h1>
    <form>
      <label for="grossPay">Bruttopalkka (euroa):</label>
      <input type="number" id="grossPay"><br><br>
      
      <label for="taxRate">Veroprosentti:</label>
      <input type="number" id="taxRate"><br><br>
      
      <label for="debtRepaymentRate">Ulosoton takaisinmaksuprosentti:</label>
      <input type="number" id="debtRepaymentRate"><br><br>
      
      <button type="button" onclick="calculateNetPay()">Laske nettopalkka</button>
    </form>
    
    <h2>Tulos:</h2>
    <p id="netPayOutput"></p>
    <p id="taxOutput"></p>
    <p id="debtRepaymentOutput"></p>
  </body>
</html>
