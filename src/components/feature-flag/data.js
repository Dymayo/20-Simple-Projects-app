const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToe: true,
  showRandomColorGenerator: true,
  showAccordion: false,
  showTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      setTimeout(() => resolve(dummyApiResponse), 500);
    } else reject("some error occured!");
  });
}

export default featureFlagsDataServiceCall;
