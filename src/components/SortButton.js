// import React, { useState, useEffect } from 'react';
// import { getConst } from '../../constants';
// import { sortAction } from '../../actions';
// import Button from 'react-bootstrap/Button';

// import '../../App.css';

// export default function SortButton() {
//   //Watch the status of sort status (asc or desc), default is sort by asc
//   const [sortTitleAsc, setSortTitleAsc] = useState(true);
//   const [sortDateAsc, setSortDateAsc] = useState(true);
//   const [sortCountAsc, setSortCountAsc] = useState(true);
//   const [sortAvgAsc, setSortAvgAsc] = useState(true);

//   useEffect(() => {
//     store.subscribe(() => {
//       let curstate = store.getState().curState;
//       switch (store.getState().actionType) {
//         case 'SORTAVG':
//           setSortAvgAsc(curstate);
//           return null;

//         case 'SORTCOUNT':
//           setSortCountAsc(curstate);
//           return null;

//         case 'SORTTITLE':
//           setSortTitleAsc(curstate);
//           return null;

//         case 'SORTDATE':
//           setSortDateAsc(curstate);
//           return null;
//         default:
//           return null;
//       }
//     });
//   }, []);

//   return (
//     <>
//       <div className="buttonGroup">
//         <Button
//           className="sortButton"
//           variant="outline-secondary"
//           onClick={() => {
//             store.dispatch(
//               actions.sortAction(getConst.SORTTITLE, sortTitleAsc)
//             );
//           }}
//         >
//           Sort by title {sortTitleAsc ? ' ↑' : ' ↓'}
//         </Button>

//         <Button
//           className="sortButton"
//           variant="outline-secondary"
//           onClick={() => {
//             store.dispatch(actions.sortAction(getConst.SORTDATE, sortDateAsc));
//           }}
//         >
//           Sort by date{sortDateAsc ? ' ↑' : ' ↓'}
//         </Button>

//         <Button
//           className="sortButton"
//           variant="outline-secondary"
//           onClick={() => {
//             store.dispatch(
//               actions.sortAction(getConst.SORTCOUNT, sortCountAsc)
//             );
//           }}
//         >
//           Sort by vote count{sortCountAsc ? ' ↑' : ' ↓'}
//         </Button>

//         <Button
//           className="sortButton"
//           variant="outline-secondary"
//           onClick={() => {
//             store.dispatch(actions.sortAction(getConst.SORTAVG, sortAvgAsc));
//           }}
//         >
//           Sort by vote avg{sortAvgAsc ? ' ↑' : ' ↓'}
//         </Button>
//       </div>
//     </>
//   );
// }
