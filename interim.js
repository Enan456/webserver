var template = '<div class="match-display"> <center>   <h2>Sandstorm</h2> </center> <div class="container">   <center><!--flex-grid 1 --><div class="flex-grid">  <div class="col-5">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="Slvl2PlatformL" class="platform2'+ check_checkbox(matches.platform2)+'">  </div>  <div class="col-2" id="checkbox"> <p id="Slvl3Platform" class="platform3'+ check_checkbox(matches.platform3)+'">  </div>  <div class="col-1" id="checkbox"> <p id="Slvl2PlatformR" class="platform2'+ check_checkbox(matches.platform2)+'">  </div>  <div class="col-5">    <p></p>  </div></div><!--flex-grid 2 --><div class="flex-grid">  <div class="col-5">    <p></p>  </div>  <div class="col-4" id="checkbox"> <p id="Slvl1Platform" class="platform1'+ check_checkbox(matches.platform1)+'">  </div>  <div class="col-5">    <p></p>  </div></div><!--Spacing--><div class="flex-grid">  <br></div><!--flex-grid 3 --><div class="flex-grid">  <div class="col-5">    <p></p>  </div>  <div class="col-1">    <p class="LeftRover"></p>  </div>  <div class="col-1" id="checkbox"> <p id="ScCTLHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="ScCTRHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1">    <p class="RightRover"></p>  </div>  <div class="col-5">    <p></p>  </div></div><!--flex-grid 4 --><div class="flex-grid">  <div class="col-5">    <p></p>  </div>  <div class="col-1">    <p class="RoverBox"></p>  </div>  <div class="col-1" id="checkbox"> <p id="ScCHTLCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="ScCHTRCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1">    <p class="RoverBox"></p>  </div>  <div class="col-5">    <p></p>  </div></div><!--flex-grid 5 --><div class="flex-grid">  <div class="col-1">    <p class="RightLeft"></p>  </div>  <div class="col-1" id="checkbox"> <p id="SlRRHHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SlRRMHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SlRRLHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="SlCLTHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SlCCTCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="SrCCTCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="SrCLTHatch" class="roverHatch'+ check_checkbox(roverHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="SrRRLHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SrRRMHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SrRRHHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1">    <p class="LeftRight"></p>  </div></div><!--flex-grid 6 --><div class="flex-grid">  <div class="col-1">    <p class="Ports"></p>  </div>  <div class="col-1" id="button"> <button onclick=incrementHigh(this) value=0 type="button" id="SlRCHCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1" id="button"> <button onclick=incrementMed(this) value=0 type="button" id="SlRCMCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1" id="button"> <button onclick=incrementLow(this) value=0 type="button" id="SlRCLCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="SlCLMHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SlCCMCargo" class="port'+ check_checkbox(matches.port)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SrCCMCargo" class="port'+ check_checkbox(matches.port)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SrCRMHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="button"> <button onclick=incrementLow(this) value=0 type="button" id="SrRCLCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1" id="button"> <button onclick=incrementMed(this) value=0 type="button" id="SrRCMCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1" id="button"> <button onclick=incrementHigh(this) value=0 type="button" id="SrRCHCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1">    <p class="Ports"></p>  </div></div><!--flex-grid 7 --><div class="flex-grid">  <div class="col-1">    <p class="LeftLeft"></p>  </div>  <div class="col-1" id="checkbox"> <p id="SlRLHHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SlRLMHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SlRLLHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="SlCLLHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SlCCLCargo" class="port'+ check_checkbox(matches.port)+'" value="2">   </div>  <div class="col-1" id="checkbox"> <p id="SrCCLCargo" class="port'+ check_checkbox(matches.port)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SrCRLHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="SrRLHHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SrRLMHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="SrRLLHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1">    <p class="RightRight"></p>  </div></div>   </center> </div> <br> <br> <br> <center>   <h2>Rest of the Game</h2> </center> <div class="container">   <center><!--flex-grid 1 --><div class="flex-grid">  <div class="col-5">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="lvl2PlatformL" class="platform2'+ check_checkbox(matches.platform2)+'" >  </div>  <div class="col-2" id="checkbox"> <p id="lvl3Platform" class="platform3'+ check_checkbox(matches.platform3)+'">  </div>  <div class="col-1" id="checkbox"> <p id="lvl2PlatformR" class="platform2'+ check_checkbox(matches.platform2)+'">  </div>  <div class="col-5">    <p></p>  </div></div><!--flex-grid 2 --><div class="flex-grid">  <div class="col-5">    <p></p>  </div>  <div class="col-4" id="checkbox"> <p id="lvl1Platform" class="platform1'+ check_checkbox(matches.platform1)+'">  </div>  <div class="col-5">    <p></p>  </div></div><!--Spacing--><div class="flex-grid">  <br></div><!--flex-grid 3 --><div class="flex-grid">  <div class="col-5">    <p></p>  </div>  <div class="col-1">    <p class="LeftRover"></p>  </div>  <div class="col-1" id="checkbox"> <p id="cCTLHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="cCTRHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1">    <p class="RightRover"></p>  </div>  <div class="col-5">    <p></p>  </div></div><!--flex-grid 4 --><div class="flex-grid">  <div class="col-5">    <p></p>  </div>  <div class="col-1">    <p class="RoverBox"></p>  </div>  <div class="col-1" id="checkbox"> <p id="cCHTLCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="cCHTRCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1">    <p class="RoverBox"></p>  </div>  <div class="col-5">    <p></p>  </div></div><!--flex-grid 5 --><div class="flex-grid">  <div class="col-1">    <p class="RightLeft"></p>  </div>  <div class="col-1" id="checkbox"> <p id="lRRHHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="lRRMHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="lRRLHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="lCLTHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="lCCTCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="rCCTCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="rCLTHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="rRRLHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="rRRMHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="rRRHHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1">    <p class="LeftRight"></p>  </div></div><!--flex-grid 6 --><div class="flex-grid">  <div class="col-1">    <p class="Ports"></p>  </div>  <div class="col-1" id="button"> <button onclick=incrementHigh(this) value=0 type="button" id="lRCHCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1" id="button"> <button onclick=incrementMed(this) value=0 type="button" id="lRCMCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1" id="button"> <button onclick=incrementLow(this) value=0 type="button" id="lRCLCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="lCLMHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="lCCMCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="rCCMCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="rCRMHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="button"> <button onclick=incrementLow(this) value=0 type="button" id="rRCLCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1" id="button"> <button onclick=incrementMed(this) value=0 type="button" id="rRCMCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1" id="button"> <button onclick=incrementHigh(this) value=0 type="button" id="rRCHCargo" class="rocket'+ click_button(matches.rocket)+'"></button>  </div>  <div class="col-1">    <p class="Ports"></p>  </div></div><!--flex-grid 7 --><div class="flex-grid">  <div class="col-1">    <p class="LeftLeft"></p>  </div>  <div class="col-1" id="checkbox"> <p id="lRLHHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="lRLMHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="lRLLHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="lCLLHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="lCCLCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="rCCLCargo" class="port'+ check_checkbox(matches.port)+'">  </div>  <div class="col-1" id="checkbox"> <p id="rCRLHatch" class="roverHatch'+ check_checkbox(matches.roverHatch)+'" value="2">  </div>  <div class="col-1">    <p></p>  </div>  <div class="col-1" id="checkbox"> <p id="rRLHHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="rRLMHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1" id="checkbox"> <p id="rRLLHatch" class="rocketHatch'+ check_checkbox(matches.rocketHatch)+'" value="2">  </div>  <div class="col-1">    <p class="RightRight"></p>  </div></div>   </center> </div>    </div>    <center></div>';
var userDataRef = firebase.database().ref("/" + yourTeam + "/" + regional + "/" + scoutteam).orderByKey();
userDataRef.once("value").then(function (matches) {
		matches.forEach(function (match) {
				numMatches++;
				console.log(match.toString());
				match.forEach(function (tag) {
						var index = 0;
						console.log(tag.toString());
						//Hey it goes through the matches here
						tag.forEach(function (dataPoint) {
							console.log(template);
							console.log(dataPoint.toString());
							match= document.getElementById("main-content");
							match.innerHTML+= template;
							});
				});
		}); clicked(!clicked());
});

var userDataRef = firebase.database().ref("/Team/Test/Scout").orderByKey();
userDataRef.once("value").then(function (matches) {
		matches.forEach(function (match) {
				numMatches++;
				console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
				console.log(match.toJSON());
				match.forEach(function (tag) {
						var index = 0;
console.log("-------------------------------------------------------");
						console.log(tag.toJSON());
						
				});
		}); 
});