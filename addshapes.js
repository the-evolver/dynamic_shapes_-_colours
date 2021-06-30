
 var cntcolor=1;
 var cntshape=1;
 
function changec() {
	 if(cntcolor<3){
	 	cntcolor++;
	 }
	 else{
	 	cntcolor=1;
	 }


	if(cntcolor==1){
		col.style.backgroundColor="green";
		col.style.transitionDuration="1s";

		

	} 
	else if(cntcolor==2){
		col.style.backgroundColor="brown";
		col.style.transitionDuration="1s";
		
		
	}
	else if(cntcolor==3){
		col.style.backgroundColor="grey";
		col.style.transitionDuration="1s";
		
	}
    


   
	
};

function changes(){
   if(cntshape<3){
	 	cntshape++;
	 }
	 else{
	 	cntshape=1;
	 }

	 if(cntshape==1){
	 	shp.style.borderRadius="0%";
	 	shp.style.transitionDuration="1s";
	 	

	 }
	 else if(cntshape==2){

	 	shp.style.borderRadius=" 0% 50%";

	 	
	 	shp.style.transitionDuration="1s";

	 }
	 else{
	 	
        shp.style.borderRadius="50%";
	 	

	 	shp.style.transitionDuration="1s";
         

	 }

};

var x=document.getElementsByClassName('b1');
var col=document.getElementById('color');
var shp=document.getElementById('shape');
x[0].addEventListener('click',changec);
x[1].addEventListener('click',changes);
