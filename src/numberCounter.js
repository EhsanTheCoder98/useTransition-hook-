export function num(value){
    const number = [];
    if(!value){
        for (let i=100;i>0;i--){
            number.push(i)
        }
    }else{
        for(let i =value ; i>0;i--){
            number.push(i)
        }
    }
    return number;
}