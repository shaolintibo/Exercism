package chessboard

// Declare a type named File which stores if a square is occupied by a piece - this will be a slice of bools
type File [8]bool

// Declare a type named Chessboard which contains a map of eight Files, accessed with keys from "A" to "H"
type Chessboard map[string]File

// CountInFile returns how many squares are occupied in the chessboard,
// within the given file.
func CountInFile(cb Chessboard, file string) int {

    /*value, exists := cb[file]
    if !exists {
        return 0
    }
	fmt.Println("Exist", value, exists)
	*/
	if _, exists := cb[file]; !exists {
        return 0
    }

    occupiedSquares := 0
	for _, column := range cb[file] {
        if column {
        	occupiedSquares += 1
        }
    }
	return occupiedSquares
}

// CountInRank returns how many squares are occupied in the chessboard,
// within the given rank.
func CountInRank(cb Chessboard, rank int) int {

    occupiedSquares := 0
    for _, row := range cb {
        //fmt.Println("CountInRank CB item ", columnIndex)//, cb[columnIndex])
        //fmt.Println("CountInRank item ", row)
    	for indexRow, square := range row {
                //fmt.Println("CountInRank item ", indexRow, columnIndex, square, "occupiedSquares: ", occupiedSquares)
        	if square && indexRow == rank-1{
            	occupiedSquares +=1
        	}
        }
    }
    return occupiedSquares
}

// CountAll should count how many squares are present in the chessboard.
func CountAll(cb Chessboard) int {
	squares := 0
    for _, row := range cb {
    	for range row {
            squares++
        }
    }
	return squares
}

// CountOccupied returns how many squares are occupied in the chessboard.
func CountOccupied(cb Chessboard) int {
    occupiedSquares := 0
	for _, row := range cb {
    	for _, square := range row {
            if square {
            	occupiedSquares++
            }
        }
    }
	return occupiedSquares
}
