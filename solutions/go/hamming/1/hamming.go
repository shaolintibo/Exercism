package hamming

import (
    "errors"
)

func Distance(a, b string) (int, error) {

    if len(a)!=len(b) {
        return 0, errors.New("Not same length")
    }
	diff:=0
    runesB := []rune(b)
	for index, char := range a {
        if char != runesB[index] {
            diff++
        }
	}
    return diff, nil
}
