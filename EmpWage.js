//variables
const IS_ABSENT =0
let empCheck = Math.flore(Math.random() *10) % 2;
if (empCheck == IS_ABSENT){
    console.log("uc1 - Employee is ABSENT.");
}else {
    console.log("uc1 - Employee ie PRESENT")
}



//uc2 switch case
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck){
    getWorkingHours
}













let totalEmpHrs =0;
let totalWorkingDays =0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck =Math.floor()
}



let empHrs =0;
let empCheck=Math.flore(Math.random)






//uc6 Arryas

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;

}

const MAX_HRS_IN_MONTH =260;
const NUM_OF_WORKING_DAYS=30;
let totalEmpHrs =0;
let totalWorkingDays =0;
let empDailyW






//uc9 Arrow Function

const findTotal = (totalVal,dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMAp.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage >0).reduce(findTotal,0);
console.log("uc9A - Emp Wage with Arrow.:" + "total Hours:" + totalHours + "total Wages:" + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMAp.forEach(  (value, key, map) =>{
    if (value ==8) fullWorkingDays.push(key);
    else if (value ==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("full Working Days:"+fullWorkingDays);
console.log("part working days:"+partWorkingDays);
console.log("non working says:"+nonWorkingDays);


//uc10 Object Creation
let totalEmpHrs =0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString(){
            return '\nday' + this.dayNum + '=> Working Hours is' + this.dailyHours + ' And Wage Earned =' + this.dailyWage
        },
    });
}
console.log("uc10 showing daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArr)

//uc 10A to uc 11d using object along with Arrow function

let toatalWages = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).reduce((toatalWage, dailyHrsAndWage) => toatalWage += dailyHrsAndWage.dailyWage,0);
let totalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage >0).reduce((totalHours,dailyHrsAndWage) +> totalHours += dailyHrsAndWage.dailyHours,o);
console.log("uc")
