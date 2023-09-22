// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

// document.body.appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/@faker-js/faker@8.0.2/locale/af_ZA.min.js';
let cardComponent = document.createElement("div");
cardComponent.innerHTML = `
<div class="card">
 <input type="text" placeholder="Access Token" id="access_token" value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1MDAzMjI0LCJpYXQiOjE2OTUzNjU2NjUsImV4cCI6MTY5NTM5NDQ2NX0.xXN1JUODVkOcWGenodr4szrrhpzzO6IBDFuws9IR8f8"/>
  <button class="btn draw-border" id="btnGetAnswer">Lấy câu trả lời</button>
</div>
`;
cardComponent.style.position = "fixed";
cardComponent.style.top = "100px";
cardComponent.style.zIndex = 999999;
cardComponent.style.right = "100px";


document.body.appendChild(cardComponent);
btnGetAnswer.addEventListener("click", async(e) => {
    let access_token = document.getElementById("access_token").value;
    console.log(access_token);
    // chrome.devtools.network.onRequestFinished.addListener(
    //     function(request) {
    //       if (request.response.bodySize > 40*1024) {
    //         chrome.devtools.inspectedWindow.eval(
    //             'console.log("Large image: " + unescape("' +
    //             escape(request.request.url) + '"))');
    //       }
    //     }
    //   );
    // console.log(chrome.devtools);
});
// let loading = document.createElement("span");
// loading.classList.add("loader");
// loading.style.position = "fixed";
// loading.style.top = "105px";
// loading.style.zIndex = 999999;
// loading.style.right = "230px";
// loading.style.display = "none";
// document.body.appendChild(loading);

// let statusRuning = false;
// startBtn.addEventListener("click", async (e) => {
//     statusRuning = !statusRuning;
//     console.log("statusRuning: " + statusRuning);
//     startBtn.textContent = statusRuning ? "Stop running" : "Start running";
//     if (statusRuning) {
//         startBtn.classList.remove("btn-start");
//         loading.style.display = "block";
//         startBtn.classList.add("btn-stop");
//     } else {
//         startBtn.classList.remove("btn-stop");
//         loading.style.display = "none";
//         startBtn.classList.add("btn-start");
//     }
// });
// (async () => {
//     while (true) {
//         startBtn.textContent = statusRuning ? "Stop running" : "Start running";
//         if (statusRuning) {
//             startBtn.classList.remove("btn-start");
//             loading.style.display = "block";
//             startBtn.classList.add("btn-stop");
//             await startRunning();
//             await delay(1000);
//         } else {
//             startBtn.classList.remove("btn-stop");
//             loading.style.display = "none";
//             startBtn.classList.add("btn-start");
//             await delay(200);
//         }
//     }
// })();

// async function startRunning() {
//     try {
//         await delay(800);
//         // Kiểm tra  Major
//         // chọn key
//         await chooseKey();
//         // Chọn speed
//         await chooseSpeed();
//         // create
//         if (startRunning == false) {
//             return;
//         }
//         let createPreviewBtn = document.querySelector(
//             'button[data-testid="createPreview"]'
//         );
//         if (!createPreviewBtn) {
//             createPreviewBtn = document.querySelector(
//                 'button[data-testid="createNewPreview"]'
//             );
//         }
//         createPreviewBtn.click();
//         let saveBtn = null;
//         while (saveBtn == null) {
//             saveBtn = document.querySelector(
//                 'button[data-testid="save"]:not([disabled])'
//             );
//             await delay(1000);
//         }
//         await delay(2000);
//         downloadTrack();
        
//     } catch (error) {
//         statusRuning = false;
//         alert(error.message);
//     }
// }

async function delay(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
// async function createName() {
//     if (startRunning == false) {
//         return;
//     }
//     let errorMessageName = document.querySelector(
//         'div[data-testid="createTrack.trackName"]+div span'
//     );
//     do {
//         const trackName = document.getElementById("trackName");
//         trackName.value = generateRandomName();
//         trackName.dispatchEvent(new Event("input", { bubbles: true }));
//         await delay(800);
//     } while (errorMessageName.innerHTML.length > 0);
// }
// async function checkMajor() {
//     if (startRunning == false) {
//         return Error("You have stopped");
//     }
//     const switchMajor = document.querySelector(".PrivateSwitchBase-input");
//     if (!switchMajor) {
//         return Error("Major not found");
//     }
//     console.log("major status " + switchMajor.checked);
//     if (!switchMajor.checked) {
//         switchMajor.click();
//         console.log("Đã bật major " + switchMajor.checked);
//     }
//     switchMajor.dispatchEvent(new Event("change", { bubbles: true }));
//     await delay(800);
// }
// async function chooseKey() {
//     if (startRunning == false) {
//         return Error("You have stopped");
//     }
//     const listKey = document.querySelectorAll(
//         "div[translate='no']  > div:nth-child(2) button, div[translate='no']  > div:nth-child(4) button"
//     );

//     const key = listKey[Math.floor(Math.random() * (listKey.length - 1))];
//     key.click();
//     await delay(800);
// }
// async function chooseSpeed() {
//     if (startRunning == false) {
//         return Error("You have stopped");
//     }
//     const inputSpeed = document.querySelector(
//         ".MuiGrid-spacing-xs-2 input[step='1'] "
//     );
//     const speedMax = inputSpeed.getAttribute("aria-valuemax");
//     const speedMin = inputSpeed.getAttribute("aria-valuemin");
//     console.log("speed: " + speedMax);
//     console.log("speed: " + speedMin);
//     const randomNumberSpeed =
//         Math.floor(Math.random() * (speedMax - speedMin + 1)) +
//         parseInt(speedMin);
//     console.log(randomNumberSpeed);
//     const speed = document.querySelector('div[data-testid="BPM"] input');
//     speed.value = randomNumberSpeed;
//     speed.dispatchEvent(new Event("change", { bubbles: true }));
//     console.log("đã chọn speed: " + speed.value);
//     await delay(1000);
// }
// function downloadTrack() {
//     if (startRunning == false) {
//         return Error("You have stopped");
//     }
//     let requestList = performance
//         .getEntriesByType("resource")
//         .filter((resource) =>
//             resource.name.startsWith(
//                 "https://api.soundful.com/original/editor/"
//             )
//         );
//     performance.clearResourceTimings();
//     console.log(requestList);
//     if(requestList.length > 0) {
//         let url = requestList[requestList.length - 1].name;
//         console.log(url);
//         var param = {
//             url: url,
//             name: generateNameTrack(),
//         };
//         console.log("đang download track");
//         chrome.runtime.sendMessage(param);
//     }else {
//         console.warn("Không tìm thấy track nào");
//     }

// }
// function generateNameTrack() {
//     let gene = document.querySelector(
//         "h6[data-testid='playerTrackGenre']"
//     ).innerHTML;
//     let template = document.querySelector(
//         "p[data-testid='playerTrackTemplate']"
//     ).innerHTML;
//     return (
//         gene +
//         "_" +
//         template +
//         "_" +
//         Date.now() +
//         "_" +
//         Math.floor(Math.random() * 10000)
//     );
// }
