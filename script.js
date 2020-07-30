// for push
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

        // for (var i = 0; i < startButtons.length; i++) {
        //     var startButton = startButtons[i];
        // startButton.classList.add('hide');
        // };
        processEls(startButtons,function(startButton) {
            startButton.classList.add('hide');
        });

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
    // for (var i = 0; i < statusLabels.length; i++) {
    //     var statusLabel = statusLabels[i];
    //     statusLabel.innerHTML = status;
    // };
    // function drawStatusProcessor(item) {
    //     item.innerHTML = status;
    // };

    processEls(statusLabels,function(item) {
        item.innerHTML = status;
    });
};

function gearBoxStarted() {
    var gearBoxValue = 1;
        // gearBoxValueLabel.innerHTML = gearBoxValue ;

        processEls(gearBoxValueLabels,function(gearBoxValueLabel) {
            gearBoxValueLabel.innerHTML = gearBoxValue ;
        });

        function incrementGearBoxValue() {
            if (gearBoxValue < 5) {
            gearBoxValue++;

            // gearBoxValueLabel.innerHTML = gearBoxValue ;
            processEls(gearBoxValueLabels,function(gearBoxValueLabel) {
                gearBoxValueLabel.innerHTML = gearBoxValue ;
            });
            }
        };
        gearBoxInterval = window.setInterval(incrementGearBoxValue,1000);
};
function plannedCrashStarted() {
    function engineCrashed() {
        drawStatus('engine has crashed!') ;
        conslog('engine has crashed!');

        // for (var i = 0; i < startButtons.length; i++) {
        //     var startButton = startButtons[i];
        // startButton.classList.remove('hide');
        // };
        processEls(startButtons,function(startButton) {
            startButton.classList.remove('hide');
        });

        // gearBoxValueLabel.innerHTML = "N";

        processEls(gearBoxValueLabels,function(gearBoxValueLabel) {
            gearBoxValueLabel.innerHTML = "N" ;
        });

        window.clearInterval(gearBoxInterval);
    };
    window.setTimeout(engineCrashed, 3000);
};
var gearBoxInterval;
var gearBoxValueLabels = document.querySelectorAll( "[data-role = 'gear-box-value']" );
var startButtons = document.querySelectorAll( "[data-role = 'start-car']" );
var statusLabels = document.querySelectorAll( "[data-role = 'status']" );

// for (var i = 0; i < startButtons.length; i++) {
//     var startButton = startButtons[i];
//     startButton.addEventListener('click', carStartListener);
// };
processEls(startButtons,function(startButton) {
    startButton.addEventListener('click', carStartListener);
});

function processEls(arrayOfEls,processor) {
    for (var i = 0; i < arrayOfEls.length; i++) {
        var item = arrayOfEls[i];
        processor(item);
    };
}