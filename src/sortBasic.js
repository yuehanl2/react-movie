import React,{useState} from 'react';


export default function App(){


    //Watch the status of sort status (asc or desc), default is sort by asc
    const [sortNameAsc,setSortNameAsc] = useState(true)
    const [sortDateAsc,setSortDateAsc] = useState(true)
    const [sortCountAsc,setSortCountAsc] = useState(true)
    const [sortAvgAsc,setSortAvgAsc] = useState(true)

    //temp list, for test, will replace later
    const [movieList,setmovieList] = useState([{"adult":false,"backdrop_path":"/2RSirqZG949GuRwN38MYCIGG4Od.jpg","genre_ids":[53],"id":985939,"original_language":"en","original_title":"Fall","overview":"For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights","popularity":6306.828,"poster_path":"/spCAxD99U1A6jsiePFoqdEcY0dG.jpg","release_date":"2022-08-11","title":"Fall","video":false,"vote_average":7.4,"vote_count":837},{"adult":false,"backdrop_path":"/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg","genre_ids":[14,12,10751],"id":532639,"original_language":"en","original_title":"Pinocchio","overview":"A wooden puppet embarks on a thrilling adventure to become a real boy.","popularity":4592.717,"poster_path":"/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg","release_date":"2022-09-07","title":"Pinocchio","video":false,"vote_average":6.8,"vote_count":625},{"adult":false,"backdrop_path":"/1n7ZGr6WeDOW4rFiQKmFel8baWH.jpg","genre_ids":[12,18,27],"id":760741,"original_language":"en","original_title":"Beast","overview":"A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.","popularity":4332.634,"poster_path":"/iRV0IB5xQeOymuGGUBarTecQVAl.jpg","release_date":"2022-08-11","title":"Beast","video":false,"vote_average":7.1,"vote_count":414},{"adult":false,"backdrop_path":"/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg","genre_ids":[28,18,878],"id":629176,"original_language":"en","original_title":"Samaritan","overview":"Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.","popularity":3090.172,"poster_path":"/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg","release_date":"2022-08-25","title":"Samaritan","video":false,"vote_average":7,"vote_count":1087},{"adult":false,"backdrop_path":"/i0Y0wP8H6SRgjr6QmuwbtQbS24D.jpg","genre_ids":[28,18],"id":579974,"original_language":"te","original_title":"రౌద్రం రణం రుధిరం","overview":"A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.","popularity":2789.346,"poster_path":"/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg","release_date":"2022-03-24","title":"RRR","video":false,"vote_average":7.8,"vote_count":364},{"adult":false,"backdrop_path":"/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg","genre_ids":[16,878,28],"id":610150,"original_language":"ja","original_title":"ドラゴンボール超 スーパーヒーロー","overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.","popularity":2413.302,"poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg","release_date":"2022-06-11","title":"Dragon Ball Super: Super Hero","video":false,"vote_average":8,"vote_count":1689},{"adult":false,"backdrop_path":"/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg","genre_ids":[14,28,35],"id":616037,"original_language":"en","original_title":"Thor: Love and Thunder","overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.","popularity":2466.001,"poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg","release_date":"2022-07-06","title":"Thor: Love and Thunder","video":false,"vote_average":6.8,"vote_count":3613},{"adult":false,"backdrop_path":"/geYUecpFI2AonDLhjyK9zoVFcMv.jpg","genre_ids":[16,28,14],"id":810693,"original_language":"ja","original_title":"劇場版 呪術廻戦 0","overview":"Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?","popularity":2503.997,"poster_path":"/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg","release_date":"2021-12-24","title":"Jujutsu Kaisen 0","video":false,"vote_average":8,"vote_count":349},{"adult":false,"backdrop_path":"/yaze6df9AMIA9oeDEbIZ4zOTRCJ.jpg","genre_ids":[28,12,14],"id":960700,"original_language":"ja","original_title":"鋼の錬金術師 完結編 復讐者スカー","overview":"In this sequel to the 2017 live-action netflix Adaptation of the manga the Elric brothers meet their toughest opponent yet — a lone serial killer with a large scar on his forehead.","popularity":2074.941,"poster_path":"/c5OwwBNyJkwyroIOIJL9IiRjydR.jpg","release_date":"2022-05-20","title":"Fullmetal Alchemist: The Revenge of Scar","video":false,"vote_average":7,"vote_count":104},{"adult":false,"backdrop_path":"/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg","genre_ids":[53,28,878],"id":766507,"original_language":"en","original_title":"Prey","overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.","popularity":1970.527,"poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg","release_date":"2022-08-02","title":"Prey","video":false,"vote_average":7.9,"vote_count":3960},{"adult":false,"backdrop_path":"/skL7c4ZhZqo1IFbMcHNrol4fvkc.jpg","genre_ids":[28,80,53],"id":921360,"original_language":"en","original_title":"Wire Room","overview":"New recruit Justin Rosa must monitor arms-smuggling cartel member Eddie Flynn — and keep him alive at all costs. When a SWAT team descends on Flynn’s home, Rosa breaks protocol and contacts the gangster directly to save his life. As gunmen break into the Wire Room and chaos erupts, Mueller and Rosa make a final, desperate stand against the corrupt agents and officials who seek to destroy evidence and kill them both.","popularity":1820.525,"poster_path":"/b9ykj4v8ykjRoGB7SpI1OuxblNU.jpg","release_date":"2022-09-02","title":"Wire Room","video":false,"vote_average":7,"vote_count":71},{"adult":false,"backdrop_path":"/5luJmy21N3bYCkjzRHsoZfvLtPP.jpg","genre_ids":[53,18,80],"id":773975,"original_language":"en","original_title":"End of the Road","overview":"Recently widowed mom Brenda fights to protect her family during a harrowing road trip when a murder and a missing bag of cash plunge them into danger.","popularity":1730.567,"poster_path":"/tLFIMuPWJHlTJ6TN8HCOiSD6SdA.jpg","release_date":"2022-09-09","title":"End of the Road","video":false,"vote_average":6.6,"vote_count":143},{"adult":false,"backdrop_path":"/qwtT5a7ZiLtUyjGggHmHw958OxT.jpg","genre_ids":[53],"id":781099,"original_language":"fr","original_title":"Inexorable","overview":"Desperately seeking inspiration for the follow-up novel to his bestseller \"Inexorable\", Marcel Bellmer moves in his wife's old family mansion with his family.","popularity":1757.224,"poster_path":"/iiclsw6zgRJz5D5Cc6sn4Cs9GQo.jpg","release_date":"2022-04-06","title":"Inexorable","video":false,"vote_average":5.6,"vote_count":19},{"adult":false,"backdrop_path":"/rHzoz94bRfyfNLjiIB26Wt5KDHE.jpg","genre_ids":[28,80,35,12],"id":773867,"original_language":"ko","original_title":"서울대작전","overview":"Chasing speed, dreams and money, a team of drivers get involved in the slush fund investigation of a powerful figure during the 1988 Seoul Olympics.","popularity":1638.898,"poster_path":"/ffX0TL3uKerLXACkuZGWhAPMbAq.jpg","release_date":"2022-08-26","title":"Seoul Vibe","video":false,"vote_average":6.9,"vote_count":74},{"adult":false,"backdrop_path":"/3PieOs1t6dPHWlgvX3XoqTIQLqN.jpg","genre_ids":[12,28,878],"id":507086,"original_language":"en","original_title":"Jurassic World Dominion","overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.","popularity":1710.588,"poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg","release_date":"2022-06-01","title":"Jurassic World Dominion","video":false,"vote_average":7.1,"vote_count":3415},{"adult":false,"backdrop_path":"/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg","genre_ids":[28,18],"id":361743,"original_language":"en","original_title":"Top Gun: Maverick","overview":"After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.","popularity":1691.164,"poster_path":"/62HCnUTziyWcpDaBO2i1DX17ljH.jpg","release_date":"2022-05-24","title":"Top Gun: Maverick","video":false,"vote_average":8.4,"vote_count":3873},{"adult":false,"backdrop_path":"/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg","genre_ids":[27,53],"id":760161,"original_language":"en","original_title":"Orphan: First Kill","overview":"After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.","popularity":2288.856,"poster_path":"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg","release_date":"2022-07-27","title":"Orphan: First Kill","video":false,"vote_average":7.1,"vote_count":653},{"adult":false,"backdrop_path":"/qaTzVAW1u16WFNsepjCrilBuInc.jpg","genre_ids":[16,28,12],"id":539681,"original_language":"en","original_title":"DC League of Super-Pets","overview":"When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.","popularity":1589.069,"poster_path":"/r7XifzvtezNt31ypvsmb6Oqxw49.jpg","release_date":"2022-07-27","title":"DC League of Super-Pets","video":false,"vote_average":7.5,"vote_count":607},{"adult":false,"backdrop_path":"/9mprVUhXPjdpSaiSon44uG9Dnv2.jpg","genre_ids":[35,28],"id":838197,"original_language":"it","original_title":"Altrimenti ci arrabbiamo","overview":"Carezza and Sorriso, brothers very different from each other and in quarrel since childhood, will have to put aside their controversies to recover the legendary Dune Buggy, once belonged to their beloved father and now stolen from him by Torsillo, an unscrupulous building speculator, and his son Raniero. In doing so, they will forge an unusual alliance with a circus community, headed by the beautiful and dangerous Miriam and threatened by Torsillo's dirty business. Between daring chases, memorable fights and delicate meals based on beer and sausages, will the two brothers be able to find their beloved car?","popularity":1484.263,"poster_path":"/qlrRi05x5hjoM29hz6TDLGTUSop.jpg","release_date":"2022-03-23","title":"Watch Out, We're Mad","video":false,"vote_average":5.1,"vote_count":70},{"adult":false,"backdrop_path":"/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg","genre_ids":[16,12,35,14],"id":438148,"original_language":"en","original_title":"Minions: The Rise of Gru","overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.","popularity":1426.66,"poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg","release_date":"2022-06-29","title":"Minions: The Rise of Gru","video":false,"vote_average":7.6,"vote_count":2000}])

    

    // function, sort by Avg
    const sortByAvg=()=>{

        // temp list to store new sorted list

         let tempList = [...movieList];

         // if statement, determint sort by asc or desc
         (sortAvgAsc?tempList.sort((a,b)=> b.vote_average-a.vote_average):tempList.sort((a,b)=> a.vote_average-b.vote_average))


         
         // renew the current list
         setmovieList(tempList)
       
         //renew the sort states
         setSortAvgAsc(!sortAvgAsc)
    
        }


        // function, sort by count
        const sortByCount=()=>{


             let tempList = [...movieList];

             // if statement, determint sort by asc or desc
             (sortCountAsc?tempList.sort((a,b)=> b.vote_count-a.vote_count):tempList.sort((a,b)=> a.vote_count-b.vote_count))
             
             // renew the current list
             setmovieList(tempList)

             //renew the sort states
           
             setSortCountAsc(!sortCountAsc)

            }

            const sortByDate=()=>{

                // console.log("sort")
        
                 let tempList = [...movieList];

                 // if statement, determint sort by asc or desc
                 (sortDateAsc?tempList.sort(function(a,b){return a.release_date < b.release_date ? 1 : -1}):tempList.sort(function(a,b){return a.release_date < b.release_date ? -1 : 1}))

                 // renew the current list
           
                 setmovieList(tempList)     
                 
                 //renew the sort states
                 setSortDateAsc(!sortDateAsc)
                }

                const sortByName=()=>{


            
                     let tempList = [...movieList];

                     // if statement, determint sort by asc or desc
                     (sortNameAsc?tempList.sort(function(a,b){return a.title < b.title ? 1 : -1}):tempList.sort(function(a,b){return a.title< b.title ? -1 : 1}))

                     // renew the current list

                     setmovieList(tempList)   
                     
                     //renew the sort states
                     setSortNameAsc(!sortNameAsc)
                    }


        return(<>

        {/* set the box to show each card */}
        <div style={{margin:"10px"}}>

            {/* button,sort by title */}
            <button onClick={()=>{
                sortByName()

               // handle event
                

            }}>Sort by title {sortNameAsc?" ↑":" ↓"}</button>


            <button onClick={()=>{
                sortByDate()
            }}>Sort by date{sortDateAsc?" ↑":" ↓"}</button>

            <button  onClick={()=>{
                sortByCount()
            }}>Sort by vote count{sortCountAsc?" ↑":" ↓"}</button>

            <button onClick={()=>{
                sortByAvg()
            }}>Sort by vote avg{sortAvgAsc?" ↑":" ↓"}</button>
        </div>


         {/* map the move list, to show each movie's details */}
        {movieList.map((item=>
        <div style={{border:'2px solid black',margin:"10px"}}>
            {/* show the img */}
            <img alt='img' src={'https://image.tmdb.org/t/p/w1280'+item.poster_path} height={200} width={150}></img>

            {/* show the information */}
            <div key={item.id}>Title: {item.title}</div>
            <div>relase Date: {item.release_date}</div>
            
            <div>Vote count: {item.vote_count}</div>
            <div>Vote Average: {item.vote_average}</div>
        </div>))}
        

       

        
        </>)
    

   


    }


   



