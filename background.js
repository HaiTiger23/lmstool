// chrome.runtime.onMessage.addListener(
//     function(arg, ) {
//       var url=arg.url;
//       var name = arg.name;
//        chrome.downloads.download({
//        url: url,
//        filename: name+".mp3",
//       saveAs: false
//       });
//   });

  // chrome.devtools.network.onRequestFinished.addListener(
  //   function(request) {
  //     if (request.response.bodySize > 40*1024) {
  //       chrome.devtools.inspectedWindow.eval(
  //           'console.log("Large image: " + unescape("' +
  //           escape(request.request.url) + '"))');
  //     }
  //   }
  // );