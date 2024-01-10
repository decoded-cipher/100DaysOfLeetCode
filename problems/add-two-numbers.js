/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let recCalc = (num_1, num_2, carry) => {

        if (!num_1 && !num_2 && !carry) return null

        let sum = (num_1?.val || 0) + (num_2?.val || 0) + carry
        let nextNode = recCalc(num_1?.next, num_2?.next, Math.floor(sum / 10))

        return new ListNode(sum % 10, nextNode)

    }

    return recCalc(l1, l2, 0)

};
