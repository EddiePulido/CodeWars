
/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns {number} The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param {string} month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param {object} subscription - May be null
 *   If present, has the following structure:
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param {array} users - May be empty, but not null
 *   Has the following structure:
 *   [
 *     {
 *       'id': 1,
 *       'name': "Employee #1",
 *       'customerId': 1,
 *
 *       // when this user started
 *       'activatedOn': new Date("2021-11-04"),
 *
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       'deactivatedOn': new Date("2022-04-10")
 *     },
 *     {
 *       'id': 2,
 *       'name': "Employee #2",
 *       'customerId': 1,
 *
 *       // when this user started
 *       'activatedOn': new Date("2021-12-04"),
 *
 *       // hasn't been deactivated yet
 *       'deactivatedOn': null
 *     },
 *   ]
 */

//  function monthlyCharge(month, subscription, users) {
//   // Your code here
//   if(!subscription) return 0
//   if(!users.length) return 0
//   let monthDate = new Date(month)
//   let firstDay = firstDayOfMonth(monthDate)
//   let lastDay = lastDayOfMonth(monthDate)
//   let activeUsers = users.filter(user => {
//     if(user.deactivatedOn === null) return true
//     return user.deactivatedOn >= firstDay && user.activatedOn <= lastDay
//   }
//   )
//   console.log(Math.round(activeUsers.length * subscription.monthlyPriceInCents))
//   return Math.round(activeUsers.length * subscription.monthlyPriceInCents)

// }

function monthlyCharge(month, subscription, users) {
  const lastMonthFirstDay = new Date(month);
  const monthFirstDay = nextDay(lastDayOfMonth(lastMonthFirstDay));
  const nextMonthFirstDay = nextDay(lastDayOfMonth(monthFirstDay));
  const milisecPerDay = 1000 * 60 * 60 * 24;

  let total = 0;

  // 1. Calculate a daily rate for the subscription tier
  const { monthlyPriceInCents } = subscription;
  const dailyRate = (monthlyPriceInCents * 12) / 365;

  // 2. For each day of the month, identify which users had an active subscription on that day
  const usersOnThisMonth = users.filter((user) =>
    user.activatedOn === undefined
      ? user.activatedon < nextMonthFirstDay
      : user.activatedOn < nextMonthFirstDay
  );

  // 3. Multiply the number of active users for the day by the daily rate to calculate the total for the day
  for (let user of usersOnThisMonth) {
    const { activatedon, activatedOn, deactivatedon, deactivatedOn } = user;

    let activated = activatedOn === undefined ? activatedon : activatedOn;
    let deactivated =
      deactivatedOn === undefined ? deactivatedon : deactivatedOn;

    !deactivated && (deactivated = Infinity);

    // console.log(activated <= monthFirstDay && nextMonthFirstDay <= deactivated);
    // console.log(monthFirstDay < activated && nextMonthFirstDay <= deactivated);
    // console.log(monthFirstDay < activated && deactivated < nextMonthFirstDay);
    // console.log(activated <= monthFirstDay && deactivated < nextMonthFirstDay);

    // ----------o----------|----------|----------x----------   = monthlyPriceInCents
    //        active       currM     nextM      deactive

    activated <= monthFirstDay &&
      nextMonthFirstDay <= deactivated &&
      (total += monthlyPriceInCents);

    // ----------|----------o----------|----------x----------   = (nextM - active) * dailyRate
    //         currM      active     nextM      deactive

    monthFirstDay < activated &&
      nextMonthFirstDay <= deactivated &&
      (total +=
        (Math.round(nextMonthFirstDay - activated) / milisecPerDay) *
        dailyRate);

    // ----------|----------o----------x----------|----------   = (deactive - active) * dailyRate
    //         currM      active     deactive   nextM

    monthFirstDay < activated &&
      deactivated < nextMonthFirstDay &&
      (total +=
        (Math.round(deactivated - activated) / milisecPerDay) * dailyRate);

    // ----------o----------|----------x----------|----------   = (deactive - currM) * dailyRate
    //        active       currM    deactive     nextM

    activated <= monthFirstDay &&
      deactivated < nextMonthFirstDay &&
      (total +=
        (Math.round(deactivated - monthFirstDay) / milisecPerDay) * dailyRate);

    // console.log(user.id, "-------------------");
  }

  // 4. Return the running total for the month at the end
  return Math.round(total);
}

/*******************
 * Helper functions *
 *******************/

/**
 * Takes a Date instance and returns a Date which is the first day
 * of that month. For example:
 *
 * firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)
 *
 * Input type: Date
 * Output type: Date
 **/
 function firstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Takes a Date object and returns a Date which is the last day of that month.
 *
 * lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)
 *
 * Input type: Date
 * Output type: Date
 **/
function lastDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * Takes a Date object and returns a Date which is the next day.
 * For example:
 *
 * nextDay(new Date(2022, 3, 17))  // => new Date(2022, 3, 18)
 * nextDay(new Date(2022, 3, 31))  // => new Date(2022, 4, 1)
 *
 * Input type: Date
 * Output type: Date
 **/
function nextDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

let assert = require("chai").assert;

const users = [
  {
    id: 1,
    name: "Employee #1",
    activatedon: new Date("2019-01-01"),
    deactivatedon: null,
    customerId: 1,
  },
  {
    id: 2,
    name: "Employee #2",
    activatedon: new Date("2019-01-01"),
    deactivatedon: null,
    customerId: 1,
  },
];

const plan = {
  id: 1,
  customerId: 1,
  monthlyPriceInCents: 5000,
};

describe("monthlyCharge", function () {
  it("works when no users are active", function () {
    assert.equal(monthlyCharge("2018-10", plan, users), 0);
  });
  it("works when the active users are active the entire month", function () {
    const expectedUserCount = 2;
    assert.closeTo(
      monthlyCharge("2020-12", plan, users),
      expectedUserCount * 5000,
      1
    );
  });
});