var names_array = ["bob","jimmy","max b", "bernie", "jordan", "future hendrix"];

function myFunction(names_array)
{


	   var odd = [];
	   var even = [];

	   for (i=0; i < names_array.length; i++){

            var cur_str = names_array[i];

            if  (cur_str.length %2 === 0){
                cur_str = "b"+ cur_str.substring(1);
                even.push(cur_str);

            }
            else{
                cur_str = cur_str.substring(0,cur_str.length-1) +'c'
                odd.push(cur_str);
            }
	   }
	   console.log(even);
	   console.log(odd);
	   even_array = even;
	   return even_array;
}
myFunction(names_array);
