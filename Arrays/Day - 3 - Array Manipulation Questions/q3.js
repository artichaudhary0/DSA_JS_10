// find the second largest elememt in the array.

let array = [10,200,30,14,35] 
let max = -Infinity
let secondLargest = -Infinity
for(let i = 0 ; i < array.length ; i++)
{
    if(array[i]>max)
    {
        secondLargest = max
        max = array[i]
    }else if(array[i]>secondLargest && array[i] != max)
    {
        secondLargest = array[i]
    }

    /*
        loop 1 : 
            step 1 : i = 0
            step 2 : 0 < 5 true
            step 3 :
                array[0] (10) > -Infinity => true
                second = -Infinity
                max =  10
            step 4 : i ++ => 1
        loop 2 : 
            step 2 : 1 < 5 true 
            step 3 :  
                array[i] (200) > max (10) true
                second = 10
                max = 200
            step 4 : i++ = 2
        
        loop 3 
            step 2 : 2 < 5 true 
            step 3 : 
                array[2] (30) > max (200)  false
                else if : 30 > 10 && 30 != 200 true && true => true
                    second = 30
            step 4 : i ++ => 3
        loop 4 : 
            step 2 : 3 < 5 true 
            step 3 : 
                array[3] (14) > max (200) false
                else if : 14 >30 && 14 != 200 false && true => false 
            step 4 : i++ => 4
        loop 5 : 
            step 2 : 4 < 5 true
            step 3 : 
                array[4] 35 > max (200) false        
                else if : 35 > 30 && 35 != 200  true && true => true
                second = 35
            step 4 : i++ => 5
        loop 6  :
            step 2 : 5 < 5 false
            exit the loop      
    
    */
}

console.log(secondLargest)






// let array1 = [22,100,21,23,24]

// array1.sort()
// console.log(array1)