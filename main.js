let inputs = [1, 2, 3, 2.5];
let weights1 = [0.2, 0.8, -0.5, 1.0];
let weights2 = [0.5, -0.91, 0.26, -0.5];
let weights3 = [-0.26, -0.27, 0.17, 0.87];
let bias1 = 2;
let bias2 = 3;
let bias3 = 0.5;

let makeCb = (arr) => {
    return (acc,cur,i) => {
        return acc + cur * arr[i];
    }
}


let output1 = inputs.reduce(makeCb(weights1),bias1);
let output2 = inputs.reduce(makeCb(weights2),bias2);
let output3 = inputs.reduce(makeCb(weights3),bias3);

console.log(output1);
console.log(output2);
console.log(output3);
console.log(inputs[0] * weights1[0]);
console.log(inputs[1] * weights1[1]);
console.log(inputs[2] * weights1[2]);
console.log(inputs[0] * weights1[0] + inputs[1] * weights1[1] + inputs[2] * weights1[2] + inputs[3] * weights1[3] + bias1)

console.log([output1, output2, output3])