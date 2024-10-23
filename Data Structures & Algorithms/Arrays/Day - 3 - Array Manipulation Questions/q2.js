// Rotate an array by k position.

let array = [1,2,3,4,5]
let k = 2 
let rotate = []

/*
space complexity : O(n)
time : O(n)

*/

for(let i = 0 ;i <array.length ; i++)
{
    rotate[(i+k)%array.length] = array[i]
    /*
        loop 1 : 
            step 1 : i = 0
            step 2 : i < 5 true
            step 3 :
                (2) % 5 => 2 
                rotate[2] = arry[0] 1
            step 4 : i++ = 1
        loop 2 : 
            step 2 : 1 < 5  true
            step 3 : 
                (3)%5 = 3
                rotate[3] = arry[1] 2      
            step 4 : i++ 2
        loop 3 : 
            step 2 : 2 < 5 true
            step 3 : 
                (4)%5 => 4
                rotate[4] = array[2]
            step 4 : i++ => 3
        loop 4 :
            step 2 : 3 < 5 true
            step 3 : 
                5%5 = 0 
                rotate[0] = array[3] 
            step 4 : i++ => 4
        loop 5 : 
            step 2 : 4 < 5 true
            step 3 : 
                (6) % 5 => 1
                rotate[1] = array[4]
            step 4 : i++ = 5
        loop 6 :
            step 2 : 5 < 5 false
            exit the loop                        
    */

    console.log(rotate)

}

array = rotate

console.log(array)
                          


// for(let i = 0 ; i<array.length ; i++)
// {
//     array[i] = rotate[i]
// }

// for(let i = 0 ;  i < array.length ; i++)
// {
//     console.log(array[i])
// }


