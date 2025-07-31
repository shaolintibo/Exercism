package meteorology
import (
    "fmt"
)

type TemperatureUnit int

const (
	Celsius    TemperatureUnit = 0
	Fahrenheit TemperatureUnit = 1
)

// Add a String method to the TemperatureUnit type

type Temperature struct {
	degree int
	unit   TemperatureUnit
}

// Add a String method to the Temperature type

type SpeedUnit int

const (
	KmPerHour    SpeedUnit = 0
	MilesPerHour SpeedUnit = 1
)

// Add a String method to SpeedUnit

type Speed struct {
	magnitude int
	unit      SpeedUnit
}

// Add a String method to Speed

type MeteorologyData struct {
	location      string
	temperature   Temperature
	windDirection string
	windSpeed     Speed
	humidity      int
}

// Add a String method to MeteorologyData

func (tp TemperatureUnit) String() string {
	unit := []string{"°C", "°F"}
    return unit[tp]
}

func (d Temperature) String() string {
	return fmt.Sprintf("%d %s", d.degree, d.unit)
}

func (sp SpeedUnit) String() string {
    unit:= []string{"km/h", "mph"}
    return unit[sp]
} 

func(d Speed) String() string {
    return fmt.Sprintf("%d %v", d.magnitude, d.unit)
}
func (md MeteorologyData) String() string {
	return fmt.Sprintf("%s: %v, Wind %s at %v, %d%% Humidity", md.location, md.temperature, md.windDirection, md.windSpeed, md.humidity)
}
