// Package weather provides tools to get forecast.
package weather

// CurrentCondition contains weather condition.
var CurrentCondition string
// CurrentLocation contains location condition.
var CurrentLocation string

// Forecast return a string value containing current location and condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
