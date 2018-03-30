var investments = [];
function addInvestment(){
    var investment = {};
    investment.principal = document.getElementById("field_principal").value;
    investment.rate      = document.getElementById("field_rate").value;
    investment.tenure    = document.getElementById("field_tenure").value;
    investment.amount    = 0;
    calculateAmount(investment);
    investments.push(investment);
    resetForm();
    renderResults();
}
function resetForm(){
  //Implement code to reset the form fields
    document.getElementById("field_principal").value=""
    document.getElementById("field_rate").value=""
    document.getElementById("field_tenure").value=""
}
function submitForm(){
  //Implement code on form submit
    addInvestment();
}
function renderResults(){
 //Imlement to render the results in DOM	
    for(index in investments){
var resultElement=	"<div>"
			+"Principal :"
			+"</div>"
			+investments[index].principal
			+"<div>"
			+"Rate of Interest :"
			+investments[index].rate
			+"</div>"
			+"<div>"
			+"Tenure:"
			+investments[index].tenure
			+"</div>"
			+"<div>"
			+"Maturity Amount :"+investments[index].amount
			+"</div>";
    
}
document.getElementById("userresultsection").innerHTML=document.getElementById("userresultsection").innerHTML+resultElement;
}
function calculateAmount(investment){
  //Imlement calculation of amount
    var exp = Math.pow((1+(investment.rate/100)),investment.tenure)
    investment.amount=investment.principal*exp;    
}