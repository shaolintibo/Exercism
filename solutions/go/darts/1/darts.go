package darts

import "math"

func Score(x, y float64) int {
    r := math.Pow(math.Pow(x,2)+math.Pow(y,2),.5)
	score:=10
    switch {
        case r>10:
    		score=0
		case r>5:
    		score=1
        case r>1:
    		score=5
    }
	return score
}
