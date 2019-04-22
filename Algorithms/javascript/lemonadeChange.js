/**
 * At a lemonade stand, each lemonade costs $5. 

 * Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

 * Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

 * Note that you don't have any change in hand at first.

 * Return true if and only if you can provide every customer with correct change.
 */

 /**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let money = []
  if (bills[0] !== 5) return false
  return !bills.some((bill, i) => {
    if (i === 0) {
      if (bill === 5) {
        money.push(bill)
      } else {
        return true
      }
    } else if (bill === 5) {
      money.unshift(bill)
    } else if (bill === 10) {
      if (money[0] === 5) {
        money.shift()
        money.push(bill)
      } else {
        return true
      }
    } else {
      if (money[money.length-1] === 10) {
        if (money[0] === 5) {
          money.shift()
          money.pop()
        } else {
          return true
        }
      } else {
        if (money[2] && money[2] === 5) {
          money.splice(0, 3)
        } else {
          return true
        }
      }
    }
  })
};

