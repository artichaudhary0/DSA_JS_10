
#include <stdio.h>

int binarySearching(int arr[],int size, int target)
{
    int left = 0 , right = size - 1 ;
    
    while( left <= right )
    {
        int mid = left + ( right - left ) / 2 ;
        
        if(arr[mid] == target)
        {
            return mid ;
        }else if(arr[mid] < target)
        {
            left =  mid + 1;
        }else{
            right =  mid - 1;
        }
    }
    return -1;
}


int main() {
    
    int n , target ;
    
    printf("Enter the no. of elements : ");
    scanf("%d",&n);
    printf("Enter the target : ");
    scanf("%d",&target);
    
    int array[n] ;
    
    // input elements in a sorted manner 
    for(int i = 0 ; i <n ; i++)
    {
        scanf("%d",&array[i]);
    }
    
    
    int result = binarySearching(array,n,target);
    
    
    if(result == -1)
    {
        printf("Element not found");
    }else{
        printf("element found at %d",result);
    }

    return 0;
}