// Predefined "Response" JavaScript functions provided by Paymentech. Function Names are defined by Paymentech and cannot be modified.
// Function implementations can be modified as per Application requirement.


//Payment Completed - Called when a transaction is processed successfully.
function completeCREPayment(transaction) {
    
    console.log(transaction);
    
    //alert("Payment Completed!");
    
    try {    
        
        /// Submitting (POST) the request to Payment pageParentPage.aspx page.
        var form = document.getElementById("paymentForm");
        form.hdnHPFuID.value = transaction.uID;
        /// Setting the Form attributes.
        form.setAttribute("method", "post");
        form.setAttribute("action", "PaymentProcess.asp");
        form.submit();
        
    } 
    catch( e ) {
        console.log("Error " + e.message);
        return false;
    }           
  }


/// Cancel Payment - Called when the customer clicks the cancel button. 
/// The function closes the iFrame and indicates that the customer‰Ûªs card was not charged.
function cancelCREPayment() {
    
    alert("cancelCREPayment called!");
    /// Redirect user back to Default / Home / Checkout page.
    document.location.href="../CheckoutPage.asp";
    
}
    
/// Called when the customer clicks the link for more information about CVV2 numbers. 
/// The function displays a popup window, which describes what the CVV2 number is and where to find it on the card.
function whatCVV2() {

    alert("whatCVV2 called!");

}


/// Called when a transaction error occurs. 
function creHandleErrors(errorCode)
{
  //alert("creHandleErrors called! ME");
  var message = handleError(errorCode, "|");
  alert(message);
  return false;
}


/// OPTIONAL Function
/// Optionally called for transaction errors when more detailed information is required for debugging. 
/*
function creHandleDetailErrors(errorCode, gatewayCode, gatewayMessage) {

    alert("creHandleDetailErrors called!, errorCode :" + errorCode + ", gatewayCode:" + gatewayCode +", gatewayMessage:"+ gatewayMessage);
    creHandleErrors(errorCode);      
    return false;
}
*/


function handleError(stringToSplit, separator) {
    
    console.log("handleError called " + stringToSplit);
    var arrErrors = stringToSplit.split(separator);
    //console.log('The original string is: "' + stringToSplit + '"');
    //console.log('The separator is: "' + separator + '"');
    //console.log('The array has ' + (arrayOfStrings.length) + ' elements: ' + arrayOfStrings);
    arrErrors = arrErrors.sort();
    console.log('After Sort elements: ' + arrErrors);

    var errorMessage = "";
    
    for(ecCtr=0; ecCtr<arrErrors.length; ecCtr++){
        var errorcode = arrErrors[ecCtr];
        
        if( errorcode == '360' ){
            try {
                errorMessage += "EC:360, Server configuration Issue.\n";
                //return "EC:360, Server configuration Issue.";

            } catch( e ) {
                alert( "Error " + e.message );
                }                        
        } else if( errorcode == '310' ) {
        try {    
                errorMessage += "Credit card required. \n";
                //return "Credit Card required.";
            
            } catch( e ) {
                alert( "Error \n" + e.message );
                }
        }
        else if( errorcode == '355' ){

            try {    
                errorMessage += "CVC required. \n";
                //return "CVC required.";

            } catch( e ) {
                alert( "Error " + e.message );
                }                        
        } else if( errorcode == '315' ){

            try {    
                errorMessage += "Invalid credit card number. \n";
                //return "Invalid Credit Card.";

            } catch( e ) {
                alert( "Error " + e.message );
                }                        
        } else if( errorcode == '357' ){

            try {
                errorMessage += "Invalid CVC. \n";
                //return "Invalid CVC.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '200' ){

            try {
                errorMessage += "Name required. \n";
                //return "Name not present.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '300' ){

            try {
                errorMessage += "Amount entered is invalid. \n";
                //return "Invalid Amount.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '320' ){

            try {
                errorMessage += "Invalid credit card type. \n";
                //return "Invalid CC type.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '330' ){

            try {    
                errorMessage += "Invalid credit card month. \n";
                //return "CC Expiration month invalid.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '340' ){

            try {    
                errorMessage += "Invalid credit card expiration year. \n";
                //return "CC Expiration year invalid.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '350' ){

            try {    
                errorMessage += "Invalid CVC. \n";
                //return "Invalid CVC.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '370' ){

            try {   
                errorMessage += "Invalid credit card expiration date. \n";
                //return "CC Expiration date invalid.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '500' ){

            try {    
                errorMessage += "Address required. \n";
                //return "Address required.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '510' ){

            try {    
                errorMessage += "City required. \n";
                //return "City required.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '520' ){

            try {    
                errorMessage += "State required. \n";
                //return "State required.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '530' ){

            try {
                errorMessage += "Zip code required. \n";
                //return "ZIP code required.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '531' ){

            try {    
                errorMessage += "Invalid Zip code. \n";
                //return "Invalid ZIP code.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        } else if( errorcode == '550' ){

            try {    
                return "Country required.";

            } catch( e ) {
                alert( "Error " + e.message );
                //return false;
            }                        
        }

    }
    
    console.log(errorMessage);
    
    return errorMessage;
}




          
      
      