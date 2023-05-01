let nums = [3, 2, 4];
let target = 6;

var twoSum = function (nums, target) {
  let myMap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (myMap[complement] !== undefined) {
      return [myMap[complement], i];
    } 
    else myMap[nums[i]] = i; // add to the hashmap of myMap if no match
    console.log(myMap);
  }
};

twoSum(nums, target);
