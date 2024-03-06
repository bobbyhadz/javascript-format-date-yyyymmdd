// EXAMPLE 1 - Format a Date as YYYY-MM-DD in JavaScript

function formatDate(date = new Date()) {
  const year = date.toLocaleString('default', {year: 'numeric'});
  const month = date.toLocaleString('default', {
    month: '2-digit',
  });
  const day = date.toLocaleString('default', {day: '2-digit'});

  return [year, month, day].join('-');
}

// 👇️ 2023-07-26 (YYYY-MM-DD)
console.log(formatDate(new Date()));

//  👇️️ 2025-05-09 (YYYY-MM-DD)
console.log(formatDate(new Date(2025, 4, 9)));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Format a Date as YYYY-MM-DD using getFullYear, getMonth and getDate

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//   return [
//     date.getFullYear(),
//     padTo2Digits(date.getMonth() + 1),
//     padTo2Digits(date.getDate()),
//   ].join('-');
// }

// // 👇️ 2023-07-26 (yyyy-mm-dd)
// console.log(formatDate(new Date()));

// //  👇️️ 2025-05-09 (yyyy-mm-dd)
// console.log(formatDate(new Date(2025, 4, 9)));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Format a Date as YYYYMMDD using JavaScript

// function formatDate(date = new Date()) {
//   const year = date.toLocaleString('default', {year: 'numeric'});
//   const month = date.toLocaleString('default', {
//     month: '2-digit',
//   });
//   const day = date.toLocaleString('default', {day: '2-digit'});

//   return [year, month, day].join('');
// }

// // 👇️ 20230726 (YYYYMMDD)
// console.log(formatDate(new Date()));

// //  👇️️ 20250509 (YYYYMMDD)
// console.log(formatDate(new Date(2025, 4, 9)));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Format a Date as YYYYMMDD using getFullYear, getMonth and getDate

// // ✅ Using a one-liner hack
// const result = new Date()
//   .toLocaleDateString('sv')
//   .replaceAll('-', '');
// console.log(result); // 👉️ "20230726" (today is Jan 13th, 2023)

// // ----------------------------------------------------------

// // ✅ Or create a reusable function
// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date = new Date()) {
//   return [
//     date.getFullYear(),
//     padTo2Digits(date.getMonth() + 1),
//     padTo2Digits(date.getDate()),
//   ].join('');
// }

// // 👇️ 20230726 (get today's date) (YYYYMMDD)
// console.log(formatDate());

// //  👇️️ 20250509 (YYYYMMDD)
// console.log(formatDate(new Date(2025, 4, 9)));
