var schemes = [];
function addScheme(){
    scheme	  = {};
    scDetails 	  = [];
    scheme.bName 	 = document.getElementById("bank_name").value;
    scheme.sID      	 = document.getElementById("scheme_number").value;
    scheme.minBal        = document.getElementById("min_bal").value;
    addCondition();
}
function addCondition(){
    scDetail	  = {};
    var conditionElement="<div>"
			+"Principal upper range :<input type='number' id='p_uprange'><br/><br/>"
			+"</div>"
			+"<div>"
			+"Tenure upper range :<input type='number' id='t_uprange'><br/><br/>"
			+"</div>"
			+"<div>"
			+"Rate of Interest:<input type='number' id='rate'><br/><br/>"
			+"</div>"
			+"<br/><Button onclick='addValue()'>Update Conditions</Button>";
document.getElementById("condition").innerHTML= conditionElement;

 
}
function addValue(){
 scDetail.pr_uprange    = document.getElementById("p_uprange").value;
    scDetail.te_uprange    = document.getElementById("t_uprange").value;
    scDetail.rate          = document.getElementById("rate").value;
    scDetails.push(scDetail);
    scheme.Sdet=scDetails;
    showConditions();
    addCondition();

}
function showConditions(){
 //Imlement to render the results in DOM	
    for(index in scDetails){
var displayElement=	"<div>"
			+"Principle upper cap : "
			+"</div>"
			+scDetails[index].pr_uprange
			+"<div>"
			+"Tenure upper cap : "
			+scDetails[index].te_uprange
			+"</div>"
			+"<div>"
			+"Rate of Interest : "
			+scDetails[index].rate
			+"</div>";
    
}
document.getElementById("condition_display").innerHTML=document.getElementById("condition_display").innerHTML+displayElement;
}
function submitValue(){
    schemes.push(scheme);
    resetForm();
}
function resetForm(){
  //Implement code to reset the form fields
    var clearElement= "";
    document.getElementById("condition").innerHTML = clearElement;
    document.getElementById("condition_display").innerHTML = clearElement;
    document.getElementById("bank_name").value     = "";
    document.getElementById("scheme_number").value = "";
    document.getElementById("min_bal").value       = "";
    
}