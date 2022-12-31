export function positiveSum(arr:number[]):number {
    return arr.filter((n:number)=>n>0).reduce((acc:number, n:number)=>acc+n,0)
}

// export function positiveSum(arr:number[]):number {
//     let sum = 0;
//     arr.forEach((n:number)=>{
//         if(n>0){
//             sum+=n
//         }
//     })
//     return sum
// }

// export function positiveSum(arr:number[]):number {
//     let sum = 0;
//     for(let i:number = arr.length-1; i >= 0; i--){
//         if(arr[i] > 0){
//             sum+=arr[i];
//         }
//     }
//     return sum
// }


// export function positiveSum(arr:number[]):number {
//     let sum = 0;
//     for(let i:number = 0; i<arr.length; i++){
//         if(arr[i] > 0){
//             sum+=arr[i];
//         }
//     }
//     return sum
// }


// export function positiveSum(arr:number[]):number {
//     return arr.reduce((acc:number,n:number) => {
//         if(n > 0){
//             return acc+n
//         }
//         return acc
//     }, 0)
// }

export const makeNegative = (n: number): number => {
    return n > 0 ? -n : n
};

// export const makeNegative = (n: number): number => {
//     return n > 0 ? n*-1 : n
// };

// export const makeNegative = (n: number): number => {
//     return Math.abs(n)*-1
// };

export function solution(str: string): string {
    return str.split('').reverse().join('')
}

export const boolToWord = (bool: boolean): string => {
    return bool ? 'Yes' : 'No'
};

export class Kata {
    static opposite(n: number) {
        return -n
    }
}

// export class Kata {
//     static opposite(n: number) {
//         return n * -1
//     }
// }

export function numberToString(num: number): string {
    return num.toString();
}

export function stringToArray(s: string): string[] {
    return s.split(' ')
}


export function points(games : string[]): number {
    return games.reduce((acc:number, s:string)=>{
        if(+s[0] > +s[s.length-1]){
            return acc + 3
        } else if(+s[0] < +s[s.length-1]){
            return acc
        } else {
            return acc + 1
        }
    }, 0)
}

