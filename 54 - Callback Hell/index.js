function Task1(callback)
{
    setTimeout(() => { console.log("Task 1 Complete")
        callback();
    }, 2000);
}

function Task2(callback)
{
    setTimeout(() => { console.log("Task 2 Complete")
        callback();
    }, 1000);
}

function Task3(callback)
{
    setTimeout(() => { console.log("Task 3 Complete")
        callback();
    }, 3000);
}

function Task4(callback)
{
    setTimeout(() => { console.log("Task 4 Complete")
        callback();
    }, 1500);
}


// Callback Hell ซ้อนท้ายกันจนเยอะ
Task1(() => 
    Task2(() => 
        Task3(() => 
            Task4(() => console.log("All Task Complete"))
)));