function replace_empty(str){

 var tst;

 var cp = str.split('');
 for(var i = 0; i < cp.length; i++){
 
       if(cp[i] === ' ')
          tst = tst;
       else
          tst = tst + cp[i];
     //alert(cp[i]);
   }
 return tst;
}
replace_empty('test1 2 3 4');
