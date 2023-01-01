// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/service-worker.js");
//   });
// }

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: ".",
    })
    .then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
}

self.addEventListener("install", (event) => {
  console.log("Inside the install handler:", event);
});

self.addEventListener("activate", (event) => {
  console.log("Inside the activate handler:", event);
});

self.addEventListener(fetch, (event) => {
  console.log("Inside the fetch handler:", event);
});
