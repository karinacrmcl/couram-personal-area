import React from "react";

type Props = {};

export function getRandomId(props: Props) {
  //   return <div>getRandomId</div>;
}
// // Will return a joke id between the min and max values. Once the joke ID has
// // been generated for the day, it is persisted in a cookie until midnight.
// function getJokeId(minId, maxId) {
//   var jokeId = getCookie("joke");

//   if (jokeId !== null) {
//     return jokeId;
//   }

//   let expire = new Date();
//   expire.setHours(23, 59, 59, 0);

//   jokeId = Math.floor(Math.random() * (maxId - minId + 1) + minId);

//   document.cookie =
//     "joke=" + jokeId + ";expires=" + expire.toGMTString() + ";path=/";

//   return jokeId;
// }

// // Just a helper function for accessing cookies in JS - could be replaced with
// // jQuery plugin or similar if needed.
// function getCookie(name) {
//   var value = "; " + document.cookie;
//   var parts = value.split("; " + name + "=");

//   if (parts.length == 2) {
//     console.log("Found joke ID from cookie");
//     return parts.pop().split(";").shift();
//   }

//   console.log("No joke ID found - new one needed");
//   return null;
// }

// getJokeId(0, 5);
