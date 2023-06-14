//document.body.style.display = "none";
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}



const context = {
  kind: 'user',
  key: 'context-key-123abc'
};
const client = LDClient.initialize(
  '6475b1b40b0fce12786b7091', 
  context,
  options = {
      bootstrap: 'localStorage'
    }
  );


client.on('ready', () => {
  // initialization succeeded, flag values are now available
  const flagValue = client.variation('flag-1', false);
  console.log("Flag value: " + flagValue);
  client.setStreaming(true); 

  if(flagValue == true){
    //document.querySelector("#about-me").innerHTML = 'About Me (flag is true)';
  }
  if(flagValue == false){
    //document.querySelector("#about-me").innerHTML = 'About Me (flag is false)';

  }
  //document.body.style.display = "block";

});