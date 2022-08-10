## Jigsaw Puzzle

### Idea

Graphic puzzle has jigsaw they are connected to each other with hint of graphic, each jigsaw has 4 sides. In repo, we try to simulate this kind of puzzle with code.

![alt text](https://github.com/freemany/jigsaw-puzzle/blob/master/images/puzzle_sample.png?raw=true)

Flat edge: 0

Stick-out/outward edge: postive number

Stick-in/inword edge: negative number

Connect with positve and negative number edges which has the sum is zero, like -3 and 3 they are connected.
You run `generatePuzzle(w, h)`, `w` and `h` are the size of the puzzle, number of jigsaw in width and height. The you can run `sortPuzzle()` to sort this generated one. Both puzzles are displayed in the puzzle board on page.

### Run and play

In Chrome browser Console, run: `generatePuzzle(4,3)` to the shuffled puzzle.
run: `sortPuzzle()` to sort them on board.

![alt text](https://github.com/freemany/jigsaw-puzzle/blob/master/images/demo.png?raw=true)

### NO Node NO WebPack

We can ustilise the modern Chrome browser to run modular Js/html from file system without NodeJs or WebPack installed, that spares a whole layer of complexity to your code as in this repo we focus on Logic, prototying and experiment. Siimpliciy is the Ultimate of Sophistication.

To do that, you have to Open a new instance of Chrome from Terminal/Command prompt with a flag:

Mac:

`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-access-from-files`

Windows 10:

`cd C:\Program Files (x86)\Google\Chrome\Application`

`chrome.exe --allow-file-access-from-files`

Windows 11:

`cd C:\Program Files\Google\Chrome\Application`

`chrome.exe --allow-file-access-from-files`

You can run the index with address: `Users/YOUR_USERNAME/jigsaw-puzzle/index.html`
