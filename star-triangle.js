/*
    *
    *
    **
    ***
    ****
*/

var str = '\n'; 
for( let i=0; i< 5; i++){
	for(let j= 0; j< i; j++){
         str += '*';
     }
        /* Move to the next line */
    str += '\n';
}

//++++++++++++++++++++++++++++++++++
/** 
"
*    
**   
* *  
*  * 
*****
"
*/

var str = '\n'; 
for( let i=0; i< 5; i++){
	for(let j= 0; j< 5; j++){
		if( j == 0 || j == i || i == 4){
			str += '*';
		} else {
			str += ' ';
		}   
    }
    /* Move to the next line */
    str += '\n';
}

//++++++++++++++++++++++++++++++=

/** 

"
     *
    **
   ***
  ****
 *****
"

*/

var str = '\n'; 
for( let i=0; i< 5; i++){
	for(let j= i; j< 5; j++){
           str += ' ';
      }

    /* Print stars after spaces */
    for( let j=0; j<= i; j++){	
            str += '*';
    }

    /* Move to the next line */
    str += '\n';
}

// ++++++++++++++++++++++++++++++++++++

/** 
"
     *
    **
   * *
  *  *
 *****
"
*/

var str = '\n'; 
for( let i=0; i< 5; i++){
	for(let j= i; j< 5; j++){
           str += ' ';
      }

    /* Print stars after spaces */
    for( let j=0; j<= i; j++){	
            if(i==4 || j==0 || j==i)
            str += '*';
        else 
            str += " "
    }

    /* Move to the next line */
    str += '\n';
}

//++++++++++++++++++++++++++++++++

/** 

"
*****
****
***
**
*
"

*/

var str = '\n'; 
for( let i=0; i< 5; i++){
	for(let j= i; j< 5; j++){
           str += '*';
      }
        /* Move to the next line */
    str += '\n';
 }

 //++++++++++++++++++++++
/**
 "
*****
*  *
* *
**
*
"
 */
var str = '\n'; 
for( let i=0; i< 5; i++){
	for(let j= i; j< 5; j++){
		if(i == 0 || j == i || j == 4)
           str += '*';
		else 
			str += ' ';
      }
        /* Move to the next line */
    str += '\n';
 }

