/** 
        *****
        *****
        *****
        *****
        *****

*/

var str = '\n';
for(let i= 0; i< 5; i++){
	for (let j= 0; j< 5; j++ ){
		str += "*";	
	}
	str += "\n"
	
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/** 
 
*   *
 * * 
  *  
 * * 
*   *

*/ 

var str = '\n';
for(let i= 0; i< 5; i++){
	for (let j= 0; j< 5; j++ ){
		if(i == j ||  i+j == 4){
			str += "*";	
		} else {
			str += " ";	
		}
	}
	str += "\n"
	
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/** 
            
                *****
                *   *
                *   *
                *   *
                *****
*/

var str = '\n';
for(let i= 0; i< 5; i++){
	for (let j= 0; j< 5; j++ ){
		if(i == 0 || j == 0 || i == 4 || j == 4){
			str += "*";	
		} else {
			str += " ";	
		}
	}
	str += "\n"
	
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++=
/** 
                "
                *****
                **  *
                * * *
                *  **
                *****
                "
*/

var str = '\n';
for(let i= 0; i< 5; i++){
	for (let j= 0; j< 5; j++ ){
		if(i == 0 || j == 0 || i == 4 || j == 4 || i == j){
			str += "*";	
		} else {
			str += " ";	
		}
	}
	str += "\n"
	
}

// +++++++++++++++++++++++++++++++++++++++++++=

/** 
    *****
   *****
  *****
 *****
*****

*/

var str = '\n'; 
for( let i=1; i<= 5; i++){
    /* Print trailing spaces */
    for(let j=1; j<= 5 - i; j++)
    {
        str += ' ';
    }

    /* Print stars after spaces */
    for(j=1; j<= 5; j++)
    {
        str += '*';
    }

    /* Move to the next line */
    str += '\n';
}

// +++++++++++++++++++++++++++++++++++++++++++++++
/*
     ******
    *   * 
   *   * 
  *   * 
 ******

*/

var str = '\n'; 
for( let i=0; i< 5; i++) {
    /* Print trailing spaces */
    for(let j= 0; j< (5 - i); j++){
        str += ' ';
    }

    /* Print stars after spaces */
    for(j=0; j<= 5; j++){	
        if(i == 0 || j == 0 || i == 4 || j == 4){
            str += '*';
        } else {
            str += " ";
        }
        
    }

    /* Move to the next line */
    str += '\n';
}