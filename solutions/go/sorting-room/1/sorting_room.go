package sorting
import (
	"fmt"
    "strconv"
)

// DescribeNumber should return a string describing the number.
func DescribeNumber(f float64) string {
	return fmt.Sprintf("This is the number %.1f", f)
}

type NumberBox interface {
	Number() int
}

// DescribeNumberBox should return a string describing the NumberBox.
func DescribeNumberBox(nb NumberBox) string {
    number := float64(nb.Number())
	return fmt.Sprintf("This is a box containing the number %.1f", number)
}

type FancyNumber struct {
	n string
}

func (i FancyNumber) Value() string {
	return i.n
}

type FancyNumberBox interface {
	Value() string
}

// ExtractFancyNumber should return the integer value for a FancyNumber
// and 0 if any other FancyNumberBox is supplied.
func ExtractFancyNumber(fnb FancyNumberBox) int {

    _, isFancyNumber := fnb.(FancyNumber)
    fancyNumber := 0
    if isFancyNumber {
		converted, err := strconv.Atoi(fnb.Value())
        if err == nil {
           fancyNumber = converted
        }
    }
	return fancyNumber
}

// DescribeFancyNumberBox should return a string describing the FancyNumberBox.
func DescribeFancyNumberBox(fnb FancyNumberBox) string {
    nb := float64(ExtractFancyNumber(fnb))
	return fmt.Sprintf("This is a fancy box containing the number %.1f", nb)
}

// DescribeAnything should return a string describing whatever it contains.
func DescribeAnything(i interface{}) string {

	switch v := i.(type) {
        case int:
    		fmt.Printf("the int %d\n", v)
        	return DescribeNumber(float64(v))
    	case float64:
    		fmt.Printf("the float64 %.1f\n", v)
    		return DescribeNumber(float64(v))
        /*case float64, int: //Why this doens't works
    		return DescribeNumber(float64(v))*/
    	case NumberBox:
    		fmt.Printf("the NumberBox %d\n", v)
    		return DescribeNumberBox(v)
        case FancyNumberBox:
    		fmt.Printf("the FancyNumberBox %d\n", v)
    		return DescribeFancyNumberBox(v)
        default:
    		return "Return to sender"
    }
	return "test"
}
