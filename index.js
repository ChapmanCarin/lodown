'use strict';

// YOU KNOW WHAT TO DO //

/**
* identity: Returns any given value unchanged.
* 
* @param {Any value} value: given value
* @return {Any value} value: returns value unchanged
**/
function identity (value){
     return value;
 }
 module.exports.identity = identity;
 
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * typeOf: A function that takes a value as a parameter and tests 
 *          what datatype the value is.
 * The datatype can be - 
 *         -"string"
 *          - "array"
 *          - "object"
 *          - "undefined"
 *          - "number"
 *          - "boolean"
 *          - "null"
 *          - "function"
 * The function puts the value through a series of control flows that 
 * return a string that is the datatype of the value.
 * 
 * @param {Value} value: The value, of unknown datatype, that the function takes.
 * @return {String} value: Returns the datatype of the value as a string.
 */
 function typeOf(value) {
     if(Array.isArray(value)) {
        return 'array';
    } else if(value === null) {
        return 'null';
    } else {
    return typeof value;
}
}
module.exports.typeOf = typeOf;

/**
 * first: A function that takes an array and a number as parameters 
 * and then returns the given number of elements from the array,
 * so long as the array is an array.
 * If the parameter given for array is not an array 
 * or if the number given is negative, the function returns an empty array.
 * If the number given is greater than the length of the array, 
 * the function returns the full array.
 * If the number given is not a number, the function returns 
 * the first element of the array.
 * 
 * @param {Array} array: The value the function takes that may or may not be an array.
 * @param {Number} number: The value the function takes to determine what to return 
 *                          from the array. May be a positive or negative number, 
 *                          or not a number at all.
 * @return {Value} value: Returns either an empty array, the first index of the array, 
 *                  the full array, or the number of elements from the array specificed 
 *                  by the number paramater.
 */
 
function first(array, number) {
    let newArray = [];
    if(!Array.isArray(array) || number <= -1) {
        return [];
    } else if(!number) {
        return array[0];
    } else if (number > array.length) {
        return array;
    } else {
        for(let i = 0; i < number; i++) {
            newArray.push(array[i]);
            console.log(newArray);
        }
            return newArray;
    }
}

module.exports.first = first;

/**
 * last: A function that takes an array and a number as parameters 
 * and then returns the given number of elements from the array,
 * so long as the array is an array. 
 * If the parameter given for array is not an array or if the number given is negative, 
 * the function returns an empty array.
 * If the number given is greater than the length of the array, 
 * the function returns the full array.
 * If the number given is not a number, 
 * the function returns the first element of the array.
 * 
 * @param {Array} array: The value the function takes that may or may not be an array.
 * @param {Number} number: The value the function takes to determine what to return from the array. 
 *                          May be a positive or negative number, or not a number at all.
 * @return {Value} value: Returns either an empty array, the last index of the array, 
 *                          the full array, or the last number of elements from the array 
 *                          specificed by the number paramater.
 */
function last(array, number) {
    let lastArray = [];
    if(!Array.isArray(array) || number <= -1) {
        return [];
    } else if(!number) {
        return array[array.length-1];
    } else if(number > array.length) {
        return array;
    } else {
        for(let i = array.length-number; i < array.length; i++) {
            lastArray.push(array[i]);
        }
    }
        return lastArray;
}
module.exports.last = last;

/**
 * indexOf: A function that takes an array and a value as parameters.
 * Loops through the array and if it finds the given value in the array, 
 * it returns the index number of the first occurance of that value.
 * If the value is not in the array, it returns -1.
 * 
 * @param {Array} array: The collection the function takes, which is an array.
 * @param {Value} value: The value the function takes to determine what to search for in the array.
 * @return {Number}: Returns either the index number of the first occurance of the value 
 *                      if it's found in the array, or it returns -1 if the value is not in the array.
 */
function indexOf(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }

    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: A function that takes an array and a value as parameters, 
 * loops through the array,and if the array contains the value, it returns true. 
 * If not, it returns false.
 * 
 * @param {Array} array: The array the function takes.
 * @param {Value} value: The value the function takes to determine what to return from the array.
 * @return {Boolean} value: Returns either true or false, 
 *                          depending on whether the array contains the value or not.
 */
function contains(array, value){
  let valueExists = array.indexOf(value);
   return ((valueExists === -1) ? false : true);
}

module.exports.contains = contains;

/**
 * unique: A function that iterates over the given array and checks 
 *           if there are any duplicate values in the array.
 *          Pushes the values into a new array but does not repeat any value, 
 *          such that there are no duplicates in the new array.
 * 
 * @param {Array} array: The array the function takes and then iterates over, 
 *                          checking for duplicates.
 * @return {Array} array: Returns an array that has all the duplicates removed.
 */

function unique(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
    if(result.indexOf(array[i]) === -1){
        result.push(array[i]);
    }
    }
    return result;
}
module.exports.unique = unique;

/**
 * filter: A function that takes a collection and a function as parameters, 
 * loops through the collection, and applies the given function to the collection. 
 * If the collection's elements return true after the function tests
 * them, they are pushed into a new array which is returned by the function. 
 * 
 * @param {Array or Object} collection: The collection the function takes and then iterates over and tests.
 * @param {Function} test: The function to be applied to each element in the collection. Should return a Boolean.
 * @return {Array} array: An array consisting of the elements that returned true from the function.
 */
function filter(collection, test) {
   let newArray = [];
   each(collection, function(e, i, a){
       if(test(e,i,a)) {
    newArray.push(e);
   }
   }); return newArray;
}
module.exports.filter = filter;

/**
 * reject: A function that takes a collection and a function as parameters, 
 * iterates over the collection, and applies the given function to the collection. 
 * If the collection's elements return false after the function tests
 * them, they are pushed into a new array which is returned by the function. 
 * 
 * @param {Array or Object} collection: The collection the function takes and then iterates over and tests.
 * @param {Function} callback: The function to be applied to each element in the collection. Should return a Boolean.
 * @return {Array} array: An array consisting of the elements that returned false from the function.
 */
function reject(collection, callback) {
    let rejectArray = [];
    filter(collection, function(e, i, a) {
        if(!callback(e, i, a)) {
            rejectArray.push(e);
        }
    }); return rejectArray;
}
module.exports.reject = reject;

/**
 * partition: A function that takes a collection and a function as parameters, 
 * iterates over the collection, and applies the given function--which tests the elements 
 * and returns a Boolean--to the collection. If the collection's elements return something truthy 
 * after the function tests them, they are pushed into a new array. 
 * If the elements return something falsy, they are pushed into another array. 
 * The function returns both of these arrays as subarrays within one array.
 *  
 * @param {Array or Object} collection: The collection the function takes and then iterates over and tests.
 * @param {Function} func: The function to be applied to each element in the collection. Should return a Boolean.
 * @return {Array} array: An array consisting of two subarrays: one of which holds the elements that returned a truthy value,
 *                  while the other holds the elements that returned a falsy value.
 */
function partition(collection, func) {
    let truthyArray = [];
    let falsyArray = [];
    let truthyAndFalsy = [];
    filter(collection, function(e, i, a) {
        if(func(e, i, a)) {
            truthyArray.push(e);
        } else {
            falsyArray.push(e);
        }
    }); console.log(truthyArray);
    console.log(falsyArray);
    truthyAndFalsy.push(truthyArray, falsyArray);
    return truthyAndFalsy;
}
module.exports.partition = partition;

/**
 * map: A function that takes a collection and a function as parameters, iterates over the collection,
 * and applies the given function to each element and index of the collection, as well as the full colleciton itself.
 * Then returns an array that contains the values that resulted from the application of the function to the collection.
 *  
 * @param {Array or Object} collection: The collection the function takes and then iterates over.
 * @param {Function} action: The function to be applied to each element/index/collection in the collection. 
 * @return {Array}: An array consisting of the values that result from applying the function to the collection.
 */
function map(collection, action) {
    let mapArray = [];
    each(collection, function(e, i, a) {
        mapArray.push((action(e, i, a)));
    });
    return mapArray;
}
module.exports.map = map;

/**
 * pluck: A function that takes an array full of objects and a property parameters, iterates over the array,
 * and returns an array that contains the values that are associated with the keys that are given in the property parameter.
 * In other words, the function searches through the key names in all the objects inside the array, and if a key name
 * matches the given property, the value attached to that key is pushed into an array which is returned by the function.
 *  
 * @param {Array} array: The collection the function takes and then iterates over.
 * @param {Property} property: A value which could be the name of a key in one of the objects in the array.
 * @return {Array}: An array consisting of the values that were associated with--eg key/value pairs that had the key of--the given property name.
 */
function pluck(array, property) {
    return map(array, function (e, i, a) {
          return e[property];
        });
}
module.exports.pluck = pluck;

/**
 * every: A function that takes, as parameters, a collection and a function which is a test that returns a Boolean, iterates over the collection,
 * and the callback function checks to see if every element/value in the collection passes the test. If it does, the function returns true. 
 * If even one element/value does not pass the test, the function returns false. If no function is given, it tests the truthiness
 * of all elements/values and if all are true, it returns true. If even one element/value is false, it returns false.
 *  
 * @param {Array or Object} collection: The collection the function takes and then iterates over and tests the elements/values of.
 * @param {Function} action: A function which returns a Boolean value.
 * @return {Boolean}: Either true or false, depending on whether every element/value passed the function's test or not.
 */
function every(collection, callback){
    let result = true;
    each(collection, function (e, i ,a){
    if(callback === undefined){
            if(!e){
                result = false;
            }
        } else{
            if(!callback(e, i, a)){
                result = false;
        }
        }
        });
        return result;
    }

module.exports.every = every;

/**
 * some: A function that takes, as parameters, a collection and a function which is a test that returns a Boolean, iterates over the collection,
 * and the callback function checks to see if any element/value in the collection passes the test. If even one does, the function returns true. 
 * If all element/value do not pass the test, the function returns false. If no function is given, it tests the truthiness
 * of all elements/values and if even one is true, it returns true. If all are false, it returns false.
 *  
 * @param {Array or Object} collection: The collection the function takes and then iterates over and tests the elements/values of.
 * @param {Function} action: A function which returns a Boolean value.
 * @return {Boolean}: Either true or false, depending on whether any element/value passed the function's test or not.
 */
function some(collection, action) {
    let booleanValue = false;
    if(action === undefined) {
       each(collection, function(e, i, a) {
            if(e) {
            booleanValue = true;
        }
     });
    return booleanValue;
 } else if (action) {
         each(collection, function(e, i, a) {
         if(action(e, i, a)) {
    booleanValue = true;
    }
 });
 return booleanValue;
 }
        return booleanValue;
}
module.exports.some = some;

/**
 * reduce: A function that takes, as parameters, a collection, a function, and a seed.
 * It iterates over the collection, and using the seed as the starting value 
 * (if no seed is given, it uses the first element/value of the collection as the starting value), 
 * applies the function to the elements/values of the collection and returns the result of applying the function to the collection.
 * The callback function takes the parameters of previous result, element, index, such that applying the callback to the collection
 * ultimately results in a single value.
 * 
 * @param {Array or Object} collection: The collection the function takes and then condenses into a single value.
 * @param {Function} action: A function which takes the parameters of previous result, element, index and is applied to the collection.
 * @param {Accumulator} seed: The starting value that the function uses, if a seed is given. If it not, seed is set to the collection's first element/value.
 * @return {Value}: After the function's last call, a value is returned which is the single, condensed value resulting from applying the function to all elements/values of the collection.
 */

function reduce(collection, action, seed) {
    let noSeed = arguments.length < 3;
    each(collection, function(e, i, a) {
        if (noSeed) {
            noSeed = false;
            seed = e;
        } else seed = action(seed, e, i, a);
    });
    return seed;
       }
module.exports.reduce = reduce;

/**
 * extend: A function that takes at least two objects as parameters. May be just two objects, but may be many more.
 * The function iterates over all objects beginning with the second one, pulls out their properties,
 * and copies those properties to the first object given, in the order in which the properties appear in the other given object(s).
 * 
 * @param {Object} obj: The object the function takes and then iterates over.
 * @return {Object}: Returns the first object, now with all the properties of all other given objects included in it.
 */

function extend(obj) {
    each(arguments, function(extendObj) {
        for (var key in extendObj)
            obj[key] = extendObj[key];
    });
    return obj;
}
module.exports.extend = extend;

