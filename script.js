function findingDuplicate(){
    let str="abcadeecfb";
    let s=new Set();
    for(let i=0;i<=str.length-1;i++){
        s.add(str[i])
    }
    console.log(s);
}
findingDuplicate();

function countingOccurence(){
    let string="abcadeecfb";
    let obj={};
    for(let i=0;i<string.length;i++){
        let ch=string[i];
        if(!obj[ch]){
            obj[ch]=0;
        }
        obj[ch]++;

    }
    console.log(obj);
}
countingOccurence();