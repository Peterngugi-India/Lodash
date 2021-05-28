let _ = {
    clamp(number, lower, upper) {
      let lowerBound = Math.max(number,lower);
      let clampedValue = Math.min(lowerBound, upper);
      return clampedValue;
    },
  
    inRange(number, start, end) {
      // function to swap values
      const swapValues = (num1, num2) => {
        let temp = start;
        
        num1 = num2;
        num2 = temp;
      };
      
    //   return true if number === start 
      if (number === start) {
          return true;
      }
  
      // checking to see if value is undefined
      if(end === undefined) {
        let temp = 0;
        swapValues(start,end);
      }
        //   is the start value larger than the second one?
      if (start > end ) {
          swapValues(start, end);
      } 

      let isRange = start < number && number < end;
      return isRange;
    },

    // Words
    words(str) {
        let splitWords = str.split(' ');
        return splitWords;
    },

    // Pad
    pad(string, length) {
        // check the lengths
        if (string.length >= length) {
            return string;
        };

        // Find the padding to add the the start
        let startPad = Math.floor((length - string.length)/2);

        let endPad = length - (string.length + startPad);

       let paddedString = ' '.repeat(startPad) + string +  ' '.repeat(endPad);

        return paddedString;

    },

    // has
    has(key, value) {
        let hasValue = key[value];
        if (hasValue === undefined) {
            return false;
        } else {
            return true;
        }
    },

    // Invert 
    invert(object) {
        let invertedObject = {};
        for(key in object) {
            let originalValue = object[key];
            invertedObject = {originalValue : key};
        }
        return invertedObject;
    },

    // findKey

    findKey(object, predicate){
       for(key in object) {
        let value = object[key];
        let predicateReurnValue =  predicate(value); 
        if(predicateReurnValue) {
            return key;
        };
       } ;
       undefined
       return undefined;
    }
    
  }
  
  // Do not write or modify code below this line.
  module.exports = _;