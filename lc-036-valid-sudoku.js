// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function (board) {
   for (let row = 0; row < 9; row++) {
     for (let col = 0; col < 9; col++) {
       let cur = board[row][col];
       if (cur != ".") {
         let isDuplicateInRow = checkInRow(cur, row, col,board);
         if (isDuplicateInRow) {
           return !isDuplicateInRow;
         }

         let isDuplicateInCol = checkInCol(cur, row, col,board);
         if (isDuplicateInCol) {
           return !isDuplicateInCol;
         }

         let isDuplicateInSub = checkInSub(cur, row, col,board);
         if (isDuplicateInSub) {
           return !isDuplicateInSub;
         }
       }
     }
   }
   return true;
 };

 function checkInRow(cur, row, col,board) {
   for (let i = 0; i < 9; i++) {
     if (board[row][i] == cur && i != col) {
       return true;
     }
   }
 }

 function checkInCol(cur, row, col,board) {
   for (let i = 0; i < 9; i++) {
     if (board[i][col] == cur && i != row) {
       return true;
     }
   }
 }

 function checkInSub(cur, row, col,board) {
   let startRow = getStartingSub(row);
   let startCol = getStartingSub(col);
   for (let i = startRow; i < startRow + 3; i++) {
     for (let j = startCol; j < startCol + 3; j++) {
       if (cur == board[i][j] && row != i && col != j) {
         return true;
       }
     }
   }

   return false;
 }

 function getStartingSub(i) {
   let start = 0;
   if (i < 3) {
     start = 0;
   } else if (i < 6) {
     start = 3;
   } else if (i < 9) {
     start = 6;
   }
   return start;
 }
// let board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]];

let  board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".","3","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board));