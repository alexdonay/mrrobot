const board ={
    minX: 0,
    maxX: 9,
    minY:0,
    maxY: 9
}
var target ={
    position:{
        x: 7,
        y: 4,
    }
}
var mrRobot ={
    position:{
        x: 9,
        y: 9    ,
    },
    move:{
        up: ()=>{
            mrRobot.position.y++
            console.log("movendo pra cima")
        },
        down: ()=>{
            mrRobot.position.y--
            console.log("movendo para baixo")
        },
        left: ()=>{
            mrRobot.position.x--
            console.log("movendo para a esquerda")
        },
        right:()=>{
            mrRobot.position.x++
            console.log("movendo para direita")
        }

    },
    findTarget:()=>{
        while((mrRobot.position.x!=target.position.x) || (mrRobot.position.y!=target.position.y)){

            if(mrRobot.position.x<target.position.x){
                mrRobot.move.right()
            }
            if(mrRobot.position.x>target.position.x){
                mrRobot.move.left()
            }
            if(mrRobot.position.y<target.position.y){
                mrRobot.move.up()
            }
            if(mrRobot.position.y>target.position.y){
                mrRobot.move.down()
            }
            console.log(mrRobot.position)
        }
    }
}
mrRobot.findTarget()
