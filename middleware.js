// const middleware = store => next => action => {
//   if (action.request) {
//     return action.request.then(results => results.json()).then(results =>
//       next({
//         type: action.type,
//         request: results,
//       })
//     );
//   }

//   return next(action);
// };

// export default middleware;
