const isPalindrome=(str)=>{
     
   let reverseStr= str.split("").reverse().join();
   if(str===reverseStr){
    return "it is Palindrome "
   }

   return "it Not Palindrome "




}

console.log(isPalindrome("rafewae"));