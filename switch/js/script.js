var sign = prompt("What is your astrological sign?").toLoWerCase();
alert("Sensing your future...")

switch(sign){
    case "taurus":
    	alert("Lucky Day is today!");
    	break;
    case "virgo":
    	alert("This hour is your lucky hour!");
    	break;
    case "leo":
    	alert("This minute is your lucky minute!");
    	break;
  	default:
    	alert("Please enter a valid Sign");
    	break;
}
