// Async/Await to return a value.

// Async = make a function return a promise
// Await = make an async function wait for a promise.

function WalkDog()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;
            if(dogwalked)
            {
                resolve("you walked the dog");
            }

            else {
                reject("you didn't walk the dog");
            }
        }, 1500);
    });
}

function CleanKitchen()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedkitchen = true;
            if(cleanedkitchen)
                resolve("you cleaned the kitchen");

            else
                reject("you didn't clean the kitchen");
        }, 3500);
    });
}

function TakeoutTrash()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashed = false;
            if(trashed)
                resolve("you took out the trash");
            else
                reject("you didn't take out the trash");
        }, 500);
    });
}

async function DoChore()
{
    try {
        const walked = await WalkDog();
        console.log(walked);

        const cleansd = await CleanKitchen();
        console.log(cleansd);

        const trashed = await TakeoutTrash();
        console.log(trashed);

        console.log("You finished all the chores.");
    }
    catch(error) {
        console.error(error);
    }
}

DoChore();