function Car(containerId) {
    //Business Logic Layer
    this.engine = new Engine();
    this.gearBox = new GearBox();

    this._view = new CarView(this);
    // Utility Logic Layer
    this._logger = new Logger();

    this._view.render(containerId);
};
Car.prototype = {
    // interface
    start: function() {
        var randomNumber = Math.random();
    
        if (randomNumber > 0.5) {
            this._carStarted();
    
        } else {
            this._carCannotBeStarted();
        };
    },
    // private methods
    _carStarted: function() {
        this._logger.log('started');
    },

    _carCannotBeStarted: function() {
        this._view.drawStatus('Cant start,engine brocken!') ;
        this._logger.log('cant get started');
    },
}