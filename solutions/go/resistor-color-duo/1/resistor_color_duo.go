package resistorcolorduo

import (
	"fmt"
    "strconv"
)

func IndexOf(arr []string, searchedValue string) int{
    for index, val:= range arr{
        if searchedValue==val{
            return index
        }
    }
    return -1
}

// Value should return the resistance value of a resistor with a given colors.
func Value(colors []string) int {
    colorsValues := []string{"black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"}
    res := ""
    for index, color := range colors{
        res+=fmt.Sprintf("%d", IndexOf(colorsValues, color))
        if index==1{
            colorValue, err := strconv.Atoi(res)
            if err != nil {
                // ... handle error
                panic(err)
            }
            return int(colorValue)
        }
    }
	return 0
}
