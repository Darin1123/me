window.onload = function () {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let user_hits = 0;  // keep track of the number of times the player ball collides with enemy
    let border_hits = 0;
    const default_velocity = 10;

    function random_y(v) {
        return (600 - 2 * v) * Math.random() + v;
    }

    class Ball {
        constructor(x, y, vx, vy, bvx, bvy, radius, color, role) {
            this.x = x;  // x position
            this.y = y;  // y position
            this.vx = vx; // x velocity
            this.vy = vy; // y velocity
            this.bvx = bvx; // x velocity after bounce = vx * bvx
            this.bvy = bvy; // y velocity after bounce = vy * bvy
            this.radius = radius;
            this.color = color;
            this.role = role;
        }

        draw() {
            context.beginPath();
            context.fillStyle = this.color;
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.fill();
        }

        // move the ball according to the velocity
        move() {
            this.x = this.x + this.vx;
            this.y = this.y + this.vy;
        }

        // determine if the ball has hit a boundary, multiply it by the
        // bounce values for the desired effect
        boundary_check() {
            if (this.role === 'enemy' && (this.x - this.radius) + this.vx < 0) {
                border_hits++;
                this.radius = Math.random()*40+25;
                this.x = 1200 - this.radius;
                this.y = random_y(this.radius);
                this.vx = -1*(8 * Math.random() + 8);
                this.vy = Math.random()*8+8;
            }

            if ((this.y + this.radius) + this.vy > canvas.height ||
                (this.y - this.radius) + this.vy < 0) {
                this.vy = this.bvy * this.vy;
            }
            if ((this.x + this.radius) + this.vx > canvas.width ||
                (this.x - this.radius) + this.vx < 0) {
                this.vx = this.bvx * this.vx;
            }
        }
    }

    let player_ball = new Ball(25, 250, 0, 0, 0, 0, 25, 'green', 'player');
    let enemy_ball = new Ball(canvas.width - 50, random_y(25), -1*(8 * Math.random() + 8), 8 * Math.random() + 8, -1, -1, 25, 'red', 'enemy');


    function move_player(touch_x, touch_y) {
        let user_x = player_ball.x;
        let user_y = player_ball.y;
        let delta_x = Math.abs(touch_x - user_x);
        let delta_y = Math.abs(touch_y - user_y);
        let distance = Math.sqrt(delta_x*delta_x + delta_y*delta_y);
        console.log(distance);
        let user_velocity;
        if (distance > 30) {
            user_velocity = default_velocity;
        } else {
            // user_velocity = distance*distance/10;
            user_velocity = 0;
        }
        let x_direction = touch_x > player_ball.x; // true -> right; false -> left
        let y_direction = touch_y > player_ball.y; // true -> up; false -> down
        if (delta_y>0 && delta_x===0) {
            if (y_direction) {
                player_ball.vy = -1*user_velocity;
            } else {
                player_ball.vy = user_velocity;
            }
            player_ball.vx = 0;
        } else {
            let ratio = delta_y/delta_x;
            let vx = Math.sqrt(user_velocity*user_velocity/(1+ratio*ratio));
            let vy = ratio*vx;
            if (x_direction) {
                player_ball.vx = vx;
            } else {
                player_ball.vx = -1*vx;
            }
            if (y_direction) {
                player_ball.vy = vy;
            } else {
                player_ball.vy = -1*vy;
            }
        }
    }

    /**
     * touch screen event
     */
    function handleStart(e) {
        let touch_x = e.touches[0].pageX;
        let touch_y = e.touches[0].pageY;
        move_player(touch_x, touch_y);
    }

    function handleMove(e) {
        let touch_x = e.touches[0].pageX;
        let touch_y = e.touches[0].pageY;
        move_player(touch_x, touch_y);
    }

    function handleEnd(e) {
        player_ball.vx = 0;
        player_ball.vy = 0;
    }


    // recognizes and carries out any game logic, i.e. collisions
    function game_logic() {
        player_ball.boundary_check();
        // check if the player ball collides with any other balls
        // calculate the distance between the future ball positions
        let dx = (enemy_ball.x + enemy_ball.vx) - (player_ball.x + player_ball.vx);
        let dy = (enemy_ball.y + enemy_ball.vy) - (player_ball.y + player_ball.vy);
        let distance = Math.sqrt(dx * dx + dy * dy);

        // if a collision occurs
        if (distance < enemy_ball.radius + player_ball.radius) {
            user_hits++;
            // enemy_ball.x = 600 - enemy_ball.radius;
            // enemy_ball.y = (600 - 2 * this.radius) * Math.random() + this.radius;
            enemy_ball = new Ball(canvas.width - 50, random_y(25), -8, 20 * Math.random() + 5, -1, -1, 25, 'red', 'enemy');

        }

        enemy_ball.boundary_check();

        // move the balls
        player_ball.move();
        enemy_ball.move();
    }

    // draws the game state to the canvas
    function draw() {
        // clear the canvas so that we start off with a blank canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // draw the balls to the screen
        player_ball.draw();
        enemy_ball.draw();

        // draw the user_hits to the screen in the top-left corner
        context.font = "20px serif";
        context.fillText("User hits: " + user_hits, 5, 20);
        context.fillText("Border hits: " + border_hits, 5, 40);
    }

    // game loop runs every 30 milliseconds
    setInterval(function () {
        game_logic();
        draw();
    }, 30);

    canvas.ontouchstart = handleStart;
    canvas.ontouchmove = handleMove;
    canvas.ontouchend = handleEnd;
}