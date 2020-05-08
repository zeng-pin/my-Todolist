//控制向下符号的旋转

function  rotation(){
	var pointer1=$(".pointer1");
	var pointer1Checkbox=$(".pointer1Checkbox");
	pointer1.click(function(){
		
		
		if(pointer1Checkbox.prop("checked")){
			pointer1Checkbox.attr("checked",false);
			pointer1.rotate({animateTo:90});
		}
		else{
			pointer1Checkbox.attr("checked",true);
			pointer1.rotate({animateTo:180});
			console.log(1);
		}
		
		
	})
	
	var pointer2=$(".pointer2");
	var pointer2Checkbox=$(".pointer2Checkbox");
	pointer2.click(function(){
		
		
		if(pointer2Checkbox.prop("checked")){
			pointer2Checkbox.attr("checked",false);
			pointer2.rotate({animateTo:90});
		}
		else{
			pointer2Checkbox.attr("checked",true);
			pointer2.rotate({animateTo:180});
			console.log(2);
		}
		
		
	})
	
	var pointer3=$(".pointer3");
	var pointer3Checkbox=$(".pointer3Checkbox");
	pointer3.click(function(){
		
		
		if(pointer3Checkbox.prop("checked")){
			pointer3Checkbox.attr("checked",false);
			pointer3.rotate({animateTo:90});
		}
		else{
			pointer3Checkbox.attr("checked",true);
			pointer3.rotate({animateTo:180});
			console.log(3);
		}
		
		
	})
	
	
	
}