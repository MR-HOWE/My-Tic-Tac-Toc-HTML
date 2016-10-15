
var background = document.getElementById("myBackground");
var context = background.getContext("2d");
var imageBoard = new Image();
imageBoard.src = "./图片素材/九宫格.jpg";

onload = function(){
	context.drawImage(imageBoard,0,0);
	context.drawImage(imageAturn,0,300);
	context.drawImage(imageRight,300,0);
};

var imageCross = new Image();
imageCross.src = "./图片素材/小叉.jpg";

var imageCircle = new Image();
imageCircle.src = "./图片素材/小圆.jpg";

var imageAturn = new Image();
imageAturn.src = "./图片素材/A下子.jpg";

var imageBturn = new Image();
imageBturn.src = "./图片素材/B下子.jpg";

var imageAWin = new Image();
imageAWin.src = "./图片素材/A胜利.jpg";

var imageBWin = new Image();
imageBWin.src = "./图片素材/B胜利.jpg";

var imageRight = new Image();
imageRight.src = "./图片素材/右框.jpg";

var imageDraw = new Image();
imageDraw.src = "./图片素材/平局.jpg";

var board = new Array(10);
for(var i = 0;i < 11;i++)
{
	board[i] = " ";
}

var length_of_square = 100;
var beginX = 0;
var beginY = 0;
var pos1X = beginX; var pos1Y = beginY;
var pos2X = beginX+length_of_square; var pos2Y = beginY;
var pos3X = beginX+length_of_square*2; var pos3Y = beginY;
var pos4X = beginX; var pos4Y = beginY+length_of_square;
var pos5X = beginX+length_of_square; var pos5Y = beginY+length_of_square;
var pos6X = beginX+length_of_square*2; var pos6Y = beginY+length_of_square;
var pos7X = beginX; var pos7Y = beginY+length_of_square*2;
var pos8X = beginX+length_of_square; var pos8Y = beginY+length_of_square*2;
var pos9X = beginX+length_of_square*2; var pos9Y = beginY+length_of_square*2;

var check = 0;
var turn = 1;
var sbHasWon = false;

function cmp(num)
{
	var a = Math.floor(num / 100);
	var b = Math.floor(num / 10 % 10);
	var c = num % 10;
	if (board[a] == board[b] && board[b] == board[c])
	{
		if (board[a] == 'X' || board[a] == 'O') {
			check++;
		}
	}
}

function scan()
{
	cmp(123);
	cmp(456);
	cmp(789);
	cmp(147);
	cmp(258);
	cmp(369);
	cmp(159);
	cmp(357);
    console.log("扫描过一次！");
    console.log("check == "+check);
	if(check != 0)
    {
        check = 0;
        return true;
    }
    else
        check = 0;
}


background.addEventListener("mousedown",function(e){
	var mouseX = e.pageX - background.clientLeft;
	var mouseY = e.pageY - background.clientTop;
	var chartemp = " ";

	if(sbHasWon == true && mouseX <= 300)
	{
		return;
	}
	if(turn % 2 == 1)
	{
		chartemp = "X";
	}
	if(turn % 2 == 0)
	{
		chartemp = "O";
	}

	if(mouseX >= pos1X&& mouseX <= pos1X + length_of_square)
	{
		if(mouseY >= pos1Y&& mouseY <= pos1Y + length_of_square )
		{
			if(board[1] != ' ')
			{
				return;
			}
			board[1] = chartemp;
			if(turn % 2 == 1)
			{
				context.drawImage(imageCross,pos1X,pos1Y );
			}
			if(turn % 2 == 0)
			{
				context.drawImage(imageCircle,pos1X ,pos1Y);
			}
			turn++;
		}

		else if(mouseY >= pos4Y && mouseY <= pos4Y + length_of_square )
		{
			if(board[4] != ' ')
			{
				return;
			}
			board[4] = chartemp;
			if(turn % 2 == 1)
			{
				context.drawImage(imageCross,pos4X,pos4Y);
			}
			if(turn % 2 == 0)
			{
				context.drawImage(imageCircle,pos4X,pos4Y);
			}
			turn++;
		}
		else if(mouseY >= pos7Y && mouseY <= pos7Y + length_of_square )
		{
			if(board[7] != ' ')
			{
				return;
			}
			board[7] = chartemp;
			if(turn % 2 == 1)
			{
				context.drawImage(imageCross,pos7X,pos7Y);
			}
			if(turn % 2 == 0)
			{
				context.drawImage(imageCircle,pos7X,pos7Y);
			}
			turn++;
		}
	}
	else if(mouseX >= pos2X && mouseX <= pos2X + length_of_square)
	{
		if(mouseY >= pos2Y  && mouseY <= pos2Y + length_of_square)
		{
			if(board[2] != ' ')
			{
				return;
			}
			board[2] = chartemp;
			if(turn % 2 == 1)
			{
				context.drawImage(imageCross,pos2X,pos2Y);
			}
			if(turn % 2 == 0)
			{
				context.drawImage(imageCircle,pos2X,pos2Y);
			}
			turn++;
		}

		else if(mouseY >= pos5Y  && mouseY <= pos5Y + length_of_square )
		{
			if(board[5] != ' ')
			{
				return;
			}
			board[5] = chartemp;
			if(turn % 2 == 1)
			{
				context.drawImage(imageCross,pos5X,pos5Y);
			}
			if(turn % 2 == 0)
			{
				context.drawImage(imageCircle,pos5X,pos5Y);
			}
			turn++;
		}
		else if(mouseY >= pos8Y && mouseY <= pos8Y + length_of_square )
		{
			if(board[8] != ' ')
			{
				return;
			}
			board[8] = chartemp;
			if(turn % 2 == 1)
			{
				context.drawImage(imageCross,pos8X,pos8Y);
			}
			if(turn % 2 == 0)
			{
				context.drawImage(imageCircle,pos8X,pos8Y);
			}
			turn++;
		}
	}
	else if(mouseX >= pos3X  && mouseX <= pos3X + length_of_square)
	{

		if(mouseY >= pos3Y && mouseY <= pos3Y + length_of_square )
		{
			if(board[3] != ' ')
			{
				return;
			}
			board[3] = chartemp;
			if(turn % 2 == 1)
			{
				context.drawImage(imageCross,pos3X,pos3Y);
			}
			if(turn % 2 == 0)
			{
				context.drawImage(imageCircle,pos3X,pos3Y);
			}
			turn++;
		}

		else if(mouseY >= pos6Y  && mouseY <= pos6Y + length_of_square )
		{
			if(board[6] != ' ')
			{
				return;
			}
			board[6] = chartemp;
			if(turn % 2 == 1)
			{
				context.drawImage(imageCross,pos6X,pos6Y);
			}
			if(turn % 2 == 0)
			{
				context.drawImage(imageCircle,pos6X,pos6Y);
			}
			turn++;
		}
		else if(mouseY >= pos9Y  && mouseY <= pos9Y + length_of_square)
		{
			if(board[9] != ' ')
			{
				return;
			}
			board[9] = chartemp;
			if(turn % 2 == 1)
			{
				context.drawImage(imageCross,pos9X,pos9Y);
			}
			if(turn % 2 == 0)
			{
				context.drawImage(imageCircle,pos9X,pos9Y);
			}
			turn++;
		}
	}
    //turn++;
	//38+300,162+300,222,267
	if(mouseX >= 338 && mouseX <= 462 && mouseY <= 267 && mouseY >= 222)
	{
		location.reload( true );
	}

	if(turn % 2 == 1)
	{
		context.drawImage(imageAturn,0,300);
		//chartemp = "X";
	}
	if(turn % 2 == 0)
	{
		context.drawImage(imageBturn,0,300);
		//chartemp = "O";
	}
	if(turn == 10)
	{
		context.drawImage(imageDraw,0,300);
	}

	sbHasWon = scan();

	if(sbHasWon == true)
	{
        if(turn % 2 == 1){
            context.drawImage(imageBWin,0,300);
        }
        if(turn % 2 == 0) {
			context.drawImage(imageAWin, 0, 300);
		}
	}
},false);




