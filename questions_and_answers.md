<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

In the code, there is a typo in the variable name. It's declared as greeting, but in the assignment statement, it's misspelled as greetign. Due to this typo, JavaScript does not recognize greetign as a variable that was declared, hence it throws a ReferenceError indicating that greetign is not defined.
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

In the code, the sum function takes two parameters a and b and returns their sum. However, when the sum function is called with sum(1, "2");, JavaScript performs type coercion, converting the number 1 to a string "1", and then performs string concatenation because one of the operands is a string. So, "1" and "2" are concatenated to form the string "12".
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

Here,In the code, "info.favoriteFood" is initially assigned the value "🍕", which is the first element of the food array. However, later in the code, it is reassigned the value "🍝". This reassignment does not affect the food array itself. Therefore, when you console.log(food), it will output the original array ['🍕', '🍫', '🥑', '🍔'].
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

In the code, the sayHi function expects one argument, name, to be passed when it is called. However, in the console.log(sayHi()); statement, no argument is provided, so name inside the function becomes undefined. As a result, the function returns "Hi there, undefined", which is logged to the console.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The code initializes a variable count to '0' and an array nums with values [0, 1, 2, 3]. It then uses the 'forEach' method to iterate over each element in the nums array. For each element num, it checks if num is truthy (not equal to 0) and increments the count by '1' if it is. Since the nums array contains three truthy values (1, 2, and 3), the count variable is incremented three times. As a result, the final value of count is "3".
</p>
</details>
