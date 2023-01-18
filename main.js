console.log("hello javascript");
console.log("ddd")

var varMessage = "Hello var!"

let letMessage = "Hello let!"

const constMessage = "Hellow const!"

console.log(varMessage, "varMessage")
console.log(letMessage, "letMessage")
console.log(constMessage, "constMessage")


varMessage = "Change var!"
letMessage = "Change let!"
//constMessage = "Change const!" 에러난다 왜냐 const는 재할당이 안되기때문

console.log(varMessage, "var 재할당")
console.log(letMessage, "let 재할당")
console.log(constMessage, "constMessage")


// 객체 및 배열

const constArr =[1,2,3]
console.log(constArr[0])
constArr[0]=10
console.log(constArr[0])
console.log(constArr)
constArr.push(4)
console.log(constArr)
const constobj = {name:"홍길동", age : 20}

console.log(constArr, "constArr")
console.log(constobj, "constobj")
console.log(constArr[0], "배열의 첫번째")
console.log(constobj.name, "객체의 이름")

constArr[0] = 4
constobj.name="전우치"
console.log(constArr[0], " 배열읠 값 변경")
console.log(constobj.name, "객체의 이름 변경")


// 2.Function 

// 함수선언식
function addNum1(a,b){
    return a + b
}

// 함수 표현식
const addNum2=function addNum(a,b){
    return a+b;
}


// 화살표 함수
const addNum3 = (a,b) => {
    return a + b;
}


const addNum4 = (a) => a + 3;
// 화살표 함수 생략형


const addNum5 = (a , b = 10 ) => {
    return a + b;
}
console.log(addNum1(1,2),"선언식");
console.log(addNum2(3,4),"표현식");
console.log(addNum3(5,6), " 화살표함수");
console.log(addNum4(7),"생략형");
console.log(addNum5(1 ,2), "default parameter");
console.log(addNum5(1 ), "default parameter");

//Template Literals(템플릿 리터럴)
const generalQuotes ="\'작은따옴표\'";
const templateQuotes =`'작은따옴표\'`;
const generalWhiteSpace = "줄바꿈을 해보겠습니다"+"\n줄이 바꼈습니다."
const templateWhiteSpace = `줄바굼을 해보겠습니다. 줄이 바꼈습니다.`

console.log(generalQuotes);
console.log(templateQuotes);
console.log(generalWhiteSpace)
console.log(templateWhiteSpace)

const first = "영훈"
const last = "주"
console.log("제 이름은"+ last + first + "입니다.")
console.log(`제 이름은 ${last}${first}입니다.`)
//alert(`제 이름은 ${last}${first}입니다.`)

//Destructuring assignment(구조 분해 할당)

// 배열에서 구조 분해 할당
const array = [1, 2, 3, 4, 5];
const [firstArr, secondArr, ...otherArr] = array;
console.log(firstArr, secondArr, "array");
console.log(otherArr)
// 객체에서 구조 분해 할당
const obj = {
	name: "John",
	age: 18,
	memo: "Hello",
};
const obj2= {name : 'jun'}
const { name : otherName, age, memo } = obj;
const {name} = obj2
console.log( otherName, age, memo);
console.log(name)
//향상된 for 문

const iterable = [10, 20, 30]
const myObj = {
    name: '홍길동',
    age: 20,
    address: '울산 광역시'
}
let sum = 0;
// ES5
for(var i = 0; i<iterable.length; i++) {
    console.log(iterable[i])
}

// ES6
// for of : 배열의 길이만큼 순서대로 반복문 실행
for(const i of iterable) {
    console.log(i)
}
// for in : 객체의 속성의 갯수 만큼 속성의 이름으로 반복문 실행
for (const prop in myObj) {
    console.log(prop)
    console.log(myObj[prop]);
}


const memberArr =[
    {name : "홍길동", age :20},
    {name : "전우치", age :30},
    {name : "손흥민", age :31}
]

    for(const member of memberArr){
        const {name, age} =member
       console.log(`이름은 ${name}이고 나이는 ${age}살 입니다.`)
    }
