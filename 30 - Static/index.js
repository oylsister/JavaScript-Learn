class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }
}

// you don't declare object just to access static variable
// so you declare class directly to access it.
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));