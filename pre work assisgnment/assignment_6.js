var array = [ "Retta", "Vern", "Marica", "Cyrus",  "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele" ];
	   var i;
	   var max_len = 0;
	   var final_name = "";
	   for (i=0; i < array.length; i++){

            var cur_str = array[i];

            if  (cur_str.length > max_len){
                max_len = cur_str.length;
                final_name = cur_str;
            }
	   }
	   console.log(final_name);
