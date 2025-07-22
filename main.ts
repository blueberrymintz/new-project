mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    shield()
})
function shield () {
	
}
controller.player1.onEvent(ControllerEvent.Connected, function () {
	
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
	
})
let player4Sprite: Sprite = null
let playerSprite3: Sprite = null
let player2Sprite: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`redProfile`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`blueProfile`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`orangeProfile`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`greenProfile`, SpriteKind.Player))
let player1Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let playerSpeed = 100
characterAnimations.runFrames(
player1Sprite,
assets.animation`kaijuBabyWalkLeft2`,
500,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.runFrames(
player2Sprite,
assets.animation`kaijuBabyWalkLeft1`,
100,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.runFrames(
playerSprite3,
assets.animation`kaijuBabyWalkLeft0`,
100,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.runFrames(
player4Sprite,
assets.animation`kaijuBabyWalkLeft`,
100,
characterAnimations.rule(Predicate.FacingLeft)
)
game.onUpdate(function () {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Left)) {
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), playerSpeed, playerSpeed)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), playerSpeed, playerSpeed)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), playerSpeed, playerSpeed)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), playerSpeed, playerSpeed)
    }
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), playerSpeed, playerSpeed)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), playerSpeed, playerSpeed)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), playerSpeed, playerSpeed)
})
