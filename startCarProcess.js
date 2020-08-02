function startCarProcess(containerId) {

    function render() {
        var container = document.getElementById(containerId);
        container.innerHTML = `
        <div class='car'>
        <div class="info-panel">
			<label>Status:</label> <span data-role ="status">off</span>
		</div>
		<div class="controls">
			<input data-role="start-car" type="button" value="START" />
			<hr>
			<label>Gear Box: </label> <span data-role="gear-box-value">N</span>
        </div>
        </div>
        `;
    };
    render();

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
        processEls(statusLabels,function(item) { item.innerHTML = status; });
    };
    
    function gearBoxStarted() {
        var gearBoxValue = 1;
    
            processEls(gearBoxValueLabels,function(gearBoxValueLabel) {
                gearBoxValueLabel.innerHTML = gearBoxValue ;
            });
    
            function incrementGearBoxValue() {
                if (gearBoxValue < 5) {
                gearBoxValue++;
    
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
    
            processEls(startButtons,function(startButton) {
                startButton.classList.remove('hide');
            });
    
            processEls(gearBoxValueLabels,function(gearBoxValueLabel) {
                gearBoxValueLabel.innerHTML = "N" ;
            });
    
            window.clearInterval(gearBoxInterval);
        };
        window.setTimeout(engineCrashed, 3000);
    };
    var gearBoxInterval;
    var gearBoxValueLabels = document.getElementById(containerId).querySelectorAll( "[data-role = 'gear-box-value']" );
    var startButtons = document.getElementById(containerId).querySelectorAll( "[data-role = 'start-car']" );
    var statusLabels = document.getElementById(containerId).querySelectorAll( "[data-role = 'status']" );
    
    processEls(startButtons,function(startButton) {
        startButton.addEventListener('click', carStartListener);
    });
    
    function processEls(arrayOfEls,processor) {
        for (var i = 0; i < arrayOfEls.length; i++) {
            var item = arrayOfEls[i];
            processor(item);
        };
    }
    
};