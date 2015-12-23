/*
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

 */
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(),
        sum = 0,
        carry = 0,
        temp = res;
    while(l1 || l2) {
        if(l1 && l2) {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        } else if(!l1) {
            sum = l2.val + carry;
            l2 = l2.next;
        } else if(!l2) {
            sum = l1.val + carry;
            l1 = l1.next;
        }
        carry = Math.floor(sum / 10);
        temp.val = sum % 10;
        if(l1 || l2) {
            temp.next = new ListNode();
            temp = temp.next;
        }
    }
    if(carry > 0) {
        temp.next = new ListNode();
        temp = temp.next;
        temp.val = carry;
    }
    return res;
};
