package thefarm
import "fmt"

// TODO: define the 'DivideFood' function
func DivideFood(fc FodderCalculator, numberOfCows int) (float64, error) {
    amount, err := fc.FodderAmount(numberOfCows)
    if err != nil {
       return 0, err 
    }

	fatten, err2 := fc.FatteningFactor()
    if err2!= nil {
        return 0, err2
    }
	return amount / float64(numberOfCows) * fatten, nil
}
// TODO: define the 'ValidateInputAndDivideFood' function
func ValidateInputAndDivideFood( fc FodderCalculator, numberOfCows int) (float64, error) {
    if numberOfCows<=0 {
        return 0, &InvalidCowsError {
            message: "invalid number of cows",
        } 
    }
    food, err:= DivideFood( fc, numberOfCows)
    return food, err
}
// TODO: define the 'ValidateNumberOfCows' function
func ValidateNumberOfCows (numberOfCows int) error {
    if numberOfCows <= 0 {
        return &InvalidCowsError {
            numberOfCows: numberOfCows,
            message: "",
        }
    }
	return nil
}

type InvalidCowsError struct {
  message string
  numberOfCows int
}

func (e *InvalidCowsError) Error() string {
	if e.message == "" {
        e.message = "there are no negative cows"
        if e.numberOfCows == 0{
            e.message = "no cows don't need food"
        }
    	return fmt.Sprintf("%d cows are invalid: %s", e.numberOfCows, e.message)
    } else {
    	return fmt.Sprintf(e.message)
    }
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
