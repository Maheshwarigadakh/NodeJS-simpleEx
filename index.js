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