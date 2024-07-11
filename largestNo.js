function largestNo(arr){

      let  large=0;
      for(let i =0;i<arr.length;i++){

        if(arr[i]>large){
            large=arr[i]

        }

      }
      return large
    
}

console.log(largestNo([80,2,6,4,5]));