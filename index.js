const students = [
    "mahi",
    "sonu", "priya","pravin","mahesh","pradip","sai"
]
for(const stud of students){
    console.log(`Good Morning ${stud}`)
}

const marks =[55,88,66,98,69,87,94,56]
let largest = marks[0]
for(const num of marks){
    if(num >largest){
        largest = num
    }
}
console.log(largest)

const numbers =[55,56,3,24,8,9,15,44]
let sum =0;
for(let i=0;i<numbers.length; i++){
    if(numbers[i]%2==0){
        sum+=numbers[i]
    }
}
console.log(`sum: ${sum}`)

const num =[55,56,3,24,8,9,15,44]
let sum1 =0;
for(let i=0;i<num.length; i++){
    if(num[i]%2==1){
        sum1+=num[i]
    }
}
console.log(`sum: ${sum1}`)