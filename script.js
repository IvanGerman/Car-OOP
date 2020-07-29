function carStartListener() {
    var randomNumber = Math.random();

    if (randomNumber > 0.5) {
        carStarted();

    } else {
        carCannotBeStarted();
    };
};

function carStarted () {
    drawStatus('Car has started!') ;
        conslog('Car has started!');

        startButton.classList.add('hide');

        gearBoxStarted();

        plannedCrashStarted();
        
        conslog('we are waiting for crash');
};
function carCannotBeStarted() {
    drawStatus('Cant start,engine brocken!') ;
    conslog('Cant start,engine brocken!');
};
function conslog(message) {
    console.log(message);
};
function drawStatus (status) {
    statusLabel.innerHTML = status;
};
function gearBoxStarted() {
    var gearBoxValue = 1;
        gearBoxValueLabel.innerHTML = gearBoxValue ;

        function incrementGearBoxValue() {
            if (gearBoxValue < 5) {
            gearBoxValue++;
            gearBoxValueLabel.innerHTML = gearBoxValue ;
            }
        };
        gearBoxInterval = window.setInterval(incrementGearBoxValue,1000);
};
function plannedCrashStarted() {
    function engineCrashed() {
        drawStatus('engine has crashed!') ;
        conslog('engine has crashed!');
        startButton.classList.remove('hide');
        gearBoxValueLabel.innerHTML = "N";
        window.clearInterval(gearBoxInterval);
    };
    window.setTimeout(engineCrashed, 3000);
};
var gearBoxInterval;
var gearBoxValueLabel = document.querySelector('#gear-box-value');
var startButton = document.querySelector('#start-car');
var statusLabel = document.querySelector('#status');
startButton.addEventListener('click', carStartListener);