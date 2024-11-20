// Occurance of each no. in an array.

// let obj = {
//     // 1 : 2,
//     // 2 : 1,
//     // 3 : 3,
//     // 4 : 1,
//     // 5 : 1,
//     // 6 : 1,

// };

// obj[1] = 2;
// obj[2] = 1;
// obj[3] = 3;
// obj[4] = 1;
// obj[5] = 1;
// obj[6] = 1 ;

// console.log(obj)

let array = [1,1,2,3,3,3,4,5,6]
let count = {} // object => key - value
for(let i = 0 ; i <array.length ; i++) 
{
    if(!count[array[i]]){
        count[array[i]] = 1
    }else{
        count[array[i]]++
    }

    /*
        Dry run : 
            loop 1 : 
                step 1 : i = 0 
                step 2 : i < 9 => 0 < 9 true
                step 3 : 
                    count[array[0]] => count[1] => undefined => falsy => !falsy => true
                    count[1] = 1
                step 4 : i++ => 1
                
            loop 2 :
                step 2 : 1 < 9 true
                step 3 : 
                    count[array[1]] => count[1] => true => !true => false
                    
                    else 
                        count[1]++    1++ => 2  
                step 4 : i++ => 2

            loop 3 :
                step 2 : 2 < 9 true
                step 3 :     
                    count[array[2]] => count[2] => undefined => falsy => !falsy => true
                    count[2] = 1
                step 4 : i++ => 3   
            
            loop 4 : 
                step 2 : 3 < 9 true
                step 3 :     
                    count[array[3]] => count[3] => undefined => falsy => !falsy => true
                    count[3] = 1
                step 4 : i++ => 4  
            
            loop 5 : 
                step 2 : 4 < 9 true
                step 3 : 
                    count[array[4]] => count[3] => true => !true => false
                    
                    else 
                        count[3]++    1++ => 2  
                step 4 : i++ => 5
            
            loop 5 : 
                step 2 : 5 < 9 true
                step 3 : 
                    count[array[5]] => count[3] => true => !true => false
                    
                    else 
                        count[3]++    1++ => 3 
                step 4 : i++ => 6  
            
            loop 6 : 
                step 2 : 6 < 9 true
                step 3 :     
                    count[array[6]] => count[4] => undefined => falsy => !falsy => true
                    count[4] = 1
                step 4 : i++ => 7
            
            loop 7 : 
                step 2 : 7 < 9 true
                step 3 :     
                    count[array[7]] => count[5] => undefined => falsy => !falsy => true
                    count[5] = 1
                step 4 : i++ => 8
            
            loop 8 : 
                step 2 : 8 < 9 true
                step 3 :     
                    count[array[8]] => count[6] => undefined => falsy => !falsy => true
                    count[6] = 1
                step 4 : i++ => 9    
            loop 9 :
                step 2 : 9 < 9 false 
                exit the loop    
    */


}

// Space : O(n)
// Time : O(n)

for(let key in count)
{
    console.log(key+ " : " + count[key])
}


