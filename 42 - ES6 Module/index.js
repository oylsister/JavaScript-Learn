import { PI, getCircumference, getArea, getVolume } from './mathUtils.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${getVolume(10).toFixed(2)} cm^3`);
