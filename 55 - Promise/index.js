// Promise to return a value.

// Pending => Resolved or Rejected.
// new Promise((resolve, reject) => {code});

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
            const cleanedkitchen = false;
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
            const trashed = true;
            if(trashed)
                resolve("you took out the trash");
            else
                reject("you didn't take out the trash");
        }, 500);
    });
}

WalkDog().then(value => {console.log(value); return CleanKitchen()})
        .then(value => {console.log(value); return TakeoutTrash()})
        .then(value => {console.log(value); console.log("You finished all the chore")})
        .catch(error => console.error(error));