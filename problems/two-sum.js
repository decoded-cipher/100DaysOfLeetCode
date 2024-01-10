/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    for (i = 0; i < nums.length; i++) {
        let item = target - nums[i];
        if (nums.includes(item) && nums.indexOf(item) != i) {
            let indeces = []
            indeces.push(i, nums.indexOf(item))
            return indeces;
        }
    }


    // for(i=0; i<nums.length; i++) {
    //     for(j=0; j<nums.length; j++) {
    //         if(i != j) {
    //             let result = nums[i] + nums[j];
    //             if(result == target) {
    //                 return [i,j]
    //             }
    //         }
    //     }   
    // }

};
