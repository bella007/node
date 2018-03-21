var widthScreen='100%';
var heightScreen='100%';

var game = new Phaser.Game(
        widthScreen,
        heightScreen,
        Phaser.AUTO,
        'game',
        {
            preload: preload,
            create: create,
            update: update
			
        }
    );


function preload() { 
game.load.image('star', 'assets/star.png',550,50);
game.load.image('fon', 'assets/fon.jpg',50,50);

}
function create() {
	// this.fon.scale.setTo(2,2);
	game.add.sprite(0,0,'fon');
	game.add.sprite(50,50,'star');
	
}
function update() {}



