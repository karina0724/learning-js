//https://javascript.info/map-set

const aclean = arr => {
    let tmp = Array.from(new Set(arr.map((element, index)=> element.toLowerCase().split("").sort().join(""))));
    
   

    return tmp;
    
}
 let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
 
 console.log(aclean(arr));           
