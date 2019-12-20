
var detectNetwork = function(cardNumber) {
  var firstTwo = Number(cardNumber.slice(0,2));
 if ((firstTwo === 34 || firstTwo === 37) && cardNumber.length === 15){
   return "American Express";
 }else if((firstTwo === 38 || firstTwo === 39) && cardNumber.length === 14){
   return "Diner's Club";
 }else if (
			( Number(cardNumber.slice(0,4)) === 4903 || Number(cardNumber.slice(0,4)) === 4905 || Number(cardNumber.slice(0,4)) === 4911 || Number(cardNumber.slice(0,4)) === 4936 || Number(cardNumber.slice(0,4)) === 6333 || Number(cardNumber.slice(0,4)) === 6759 || Number(cardNumber.slice(0,6)) === 564182 ||Number(cardNumber.slice(0,6)) === 633110)
		&&
			( cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19 )

	){
	return "Switch"
}else if(Number(cardNumber[0]) === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
 	return "Visa";
 }else if ((51 <= firstTwo && firstTwo <= 55) && cardNumber.length === 16){
   return "MasterCard"; 	
 }else if (
  			( 
  				(Number(cardNumber.slice(0,4)) === 6011) || (644 <= Number(cardNumber.slice(0,3)) && Number(cardNumber.slice(0,3)) <= 649) || (firstTwo === 65) 
  					) 
  					&& 
  				(cardNumber.length === 16 || cardNumber.length === 19) 
  				){
  return "Discover";
}else if (
	(
       Number(cardNumber.slice(0,4)) === 5018 || Number(cardNumber.slice(0,4)) === 5020 || Number(cardNumber.slice(0,4)) === 5038 || Number(cardNumber.slice(0,4)) === 6304
		)
		&&
			(
					(12 <= cardNumber.length && cardNumber.length <= 19)
				)

	){
  return "Maestro";
}else if (
	(
		(622126 <= Number(cardNumber.slice(0,6)) && Number(cardNumber.slice(0,6)) <= 622925 ) || (624 <= Number(cardNumber.slice(0,3)) && Number(cardNumber.slice(0,3)) <= 626) || (6282 <= Number(cardNumber.slice(0,4)) && Number(cardNumber.slice(0,3)) <= 6288)
		)
		&&
			(
					16 <=cardNumber.length && cardNumber.length <= 19
				)
	){
	return "China UnionPay";
}
return "Not one of our networks (Diner's Club, American Express, Visa, MasterCard, Discover, Maestro, China UnionPay, Switch)";
}


console.log(detectNetwork('5641827890123456'))
