// function superbowlWin(record){
//     if (record.result === 'W'){
//         return record.year
//     }
// }

//record.find(superbowlWin);



function superbowlWin(record){
    const findWin = record.find(item => item.result === 'W')
    if (findWin){
        return findWin.year
    }
    
    
}

