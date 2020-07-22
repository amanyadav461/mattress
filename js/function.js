$(document).ready(function () {
	var stepfirstvalue = "";
	var stepsecondvalue = "";
	$(document).on("click", "#buttoncalculator", function(){
		var value = $(this).val();
		$("#nxtbuttonsec2, #nxtbuttonsec2mob").trigger("click");
		if(value=="sidesleeper" ||value=="stomachsleeper" ||value=="backsleeper" ||value=="allsleepingposition"){
			  stepfirstvalue = value;
			  console.log(value);
		}else {
			  stepsecondvalue = value;
			  console.log(value);
		}
		if(stepfirstvalue !== '' && stepsecondvalue !== ''){
			console.log(stepfirstvalue+" "+stepsecondvalue);
			if(stepfirstvalue == "sidesleeper" && stepsecondvalue == "softmattress"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-mattresstoppers?v=3")
			}else if(stepfirstvalue == "sidesleeper" && stepsecondvalue == "mediumfirm"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-pillowsandpillowcovers")
			}else if(stepfirstvalue == "sidesleeper" && stepsecondvalue == ""){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-blanketsandquilts?v=3")
			}else if(stepfirstvalue == "stomachsleeper" && stepsecondvalue == "softmattress"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-mattresstoppers?v=3")
			}else if(stepfirstvalue == "stomachsleeper" && stepsecondvalue == "mediumfirm"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-pillowsandpillowcovers")
			}else if(stepfirstvalue == "stomachsleeper" && stepsecondvalue == "firmmattress"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-blanketsandquilts?v=3")
			}else if(stepfirstvalue == "backsleeper" && stepsecondvalue == "softmattress"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-mattresstoppers?v=3")
			}else if(stepfirstvalue == "backsleeper" && stepsecondvalue == "mediumfirm"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-pillowsandpillowcovers")
			}else if(stepfirstvalue == "backsleeper" && stepsecondvalue == "firmmattress"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-blanketsandquilts?v=3")
			}else if(stepfirstvalue == "allsleepingposition" && stepsecondvalue == "softmattress"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-mattresstoppers?v=3")
			}else if(stepfirstvalue == "allsleepingposition" && stepsecondvalue == "mediumfirm"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-pillowsandpillowcovers")
			}else if(stepfirstvalue == "allsleepingposition" && stepsecondvalue == "firmmattress"){
				$("#step3finalpro, #step3finalpromob").attr("href","https://www.homecentre.in/in/en/c/furnishing-bedding-blanketsandquilts?v=3")
			}else{
				window.location.href = "https://www.homecentre.in/";
			}
		}
	});
});