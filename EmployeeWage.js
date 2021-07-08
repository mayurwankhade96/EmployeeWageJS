// UC1 Check Attendence
{
  const IS_ABSENT = 0;
  let empCheck = Math.floor(Math.random() * 10) % 2;
  if (empCheck == IS_ABSENT) {
    console.log("UC1 - Employee is absent!");
  } else {
    console.log("UC1 - Employee is present...");
  }
}

// UC2 Calculate daily wage on part time or full time work
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHours = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
  case IS_PART_TIME:
    empHours = PART_TIME_HOURS;
    break;

  case IS_FULL_TIME:
    empHours = FULL_TIME_HOURS;
    break;

  default:
    empHours = 0;
}

let empWage = empHours * WAGE_PER_HOUR;
console.log("UC2 - Employee Wage : " + empWage);
