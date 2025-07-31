package purchase
import "fmt"

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	if kind=="car" || kind=="truck" {   
    	return true
    }
    return false
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {
    selectedVehicle := option1
	if option1 > option2{   
    	selectedVehicle = option2
    }
    return fmt.Sprintf("%s is clearly the better choice.", selectedVehicle)
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
    rate:=0.5
	if age < 3 {   
    	rate = .8
    } else if age >= 3 && age < 10 {
    	rate = .7
    }
    return float64(rate*originalPrice)
}
