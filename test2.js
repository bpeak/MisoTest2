const readline = require("readline")

var r = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

r.question("enter a first number(kor) : ", (arg1) => {
    r.question("enter a second number(kor) : ", (arg2) => {

        const num1 = korNumToRealNum(arg1.trim())      
        const num2 = korNumToRealNum(arg2.trim())

        const result = num1 + num2
        console.log(result)

        setTimeout(() => {
            
        }, 1000 * 60)

        r.close()
    })
})

const korNumToRealNum = (function(){
    let numbers = "영일이삼사오육칠팔구"
    let units = {
        "십" : 10,
        "백" : 100,
        "천" : 1000,
        "만" : 10000,
        "억" : 100000000,
        "조" : 1000000000000,
    }
    return (korNum) => {
        let number = 0
        let result = 0
        let tmp = 0
        for(let i = 0; i < korNum.length; i++){
            const char = korNum[i]
            if(numbers.indexOf(char) == -1) {
                //case unit
                if("만억조".indexOf(char) == -1) {
                    tmp += (number != 0 ? number : 1) * units[char]
                } else {
                    tmp += number
                    result += (tmp != 0 ? tmp : 1) * units[char]
                    tmp = 0
                }
                number = 0
            } else {
                // case: number
                number = numbers.indexOf(char)
            }
        }  
        return result + tmp + number
    }
})()