export const randomValue = (min: number, max: number) => {
    return Math.floor(Math.random()*(max-min +1)+min) //between min&max,length=(max-min+1) 
}

