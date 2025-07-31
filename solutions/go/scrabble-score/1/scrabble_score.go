package scrabble
import (
    "errors"
    "strings"
)
func getLetterValue(searchedLetter string) (int, error) {

	searchedLetter = strings.ToUpper(searchedLetter)
	points := map[int][]string{
		1:  {"A", "E", "I", "O", "U", "L", "N", "R", "S", "T"},
		2:  {"D", "G"},
		3:  {"B", "C", "M", "P"},
		4:  {"F", "H", "V", "W", "Y"},
		5:  {"K"},
		8:  {"J", "X"},
		10: {"Q", "Z"},
	}
	for point, letters := range points {
		for _, letter := range letters {
			if searchedLetter == letter {
				return point, nil
			}
		}
	}
	return 0, errors.New("Invalid letter")
}

func Score(word string) int {
	score := 0
    for _,letter := range word{
        points, _ := getLetterValue(string(letter))   
        score += points
    }
    return score
}
