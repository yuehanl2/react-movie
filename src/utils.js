// store globle function

    // function, sort by Avg
    function sortByAvg(curList,nowStatus){

        // temp list to store new sorted list

         let tempList = [...curList];

         // if statement, determint sort by asc or desc
         (nowStatus?tempList.sort((a,b)=> b.vote_average-a.vote_average):tempList.sort((a,b)=> a.vote_average-b.vote_average))

         // return the result
         return tempList
    
        }

function sortByCount(curList,nowStatus){
    
             let tempList = [...curList];
             (nowStatus?tempList.sort((a,b)=> b.vote_count-a.vote_count):tempList.sort((a,b)=> a.vote_count-b.vote_count))
             
             
             return tempList
    }

function sortByDate(curList,nowStatus){

                // console.log("sort")
        
                let tempList = [...curList];
                 (nowStatus?tempList.sort(function(a,b){return a.release_date < b.release_date ? 1 : -1}):tempList.sort(function(a,b){return a.release_date < b.release_date ? -1 : 1}))
                
                 return tempList
                }

function sortByName(curList,nowStatus){

            
     let tempList = [...curList];
      (nowStatus?tempList.sort(function(a,b){return a.title < b.title ? 1 : -1}):tempList.sort(function(a,b){return a.title< b.title ? -1 : 1}))
      return tempList
}

export const getFunction = {
    sortByAvg,
    sortByCount,
    sortByDate,
    sortByName
  };