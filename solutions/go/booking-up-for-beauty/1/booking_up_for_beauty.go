package booking

import (
    "fmt"
	"time"
)

// Schedule returns a time.Time from a string containing a date.
func Schedule(date string) time.Time {
    fmt.Printf("origin date %s", date)
    layout := "1/02/2006 15:04:05"
    formattedTime, err := time.Parse(layout, date)
    fmt.Println(formattedTime)
    fmt.Println(err)
    return formattedTime
}

// HasPassed returns whether a date has passed.
func HasPassed(date string) bool {
	theDate, err := time.Parse("January 2, 2006 03:04:05", date)
	if err != nil {
		fmt.Println("Could not parse time:", err)
	}
	currentTime := time.Now()
    return theDate.Before(currentTime)
}

// IsAfternoonAppointment returns whether a time is in the afternoon.
func IsAfternoonAppointment(date string) bool {
    theDate, err := time.Parse("Monday, January 2, 2006 03:04:05", date)
	if err != nil {
		fmt.Println("Could not parse time:", err)
	}
	isAfternoon := false
	if (theDate.Hour()>=12 && theDate.Hour()<18){
    	isAfternoon = true
    }
    return isAfternoon
}

// Description returns a formatted string of the appointment time.
func Description(date string) string {
    theDate, err := time.Parse("1/2/2006 15:04:05", date)
    if err != nil {
		fmt.Println("Could not parse time:", err)
	}
	return fmt.Sprintf("You have an appointment on %s, %s %d, %d, at %d:%d.", 
                       theDate.Weekday(),
                       theDate.Month(),
                       theDate.Day(),
                       theDate.Year(),
                       theDate.Hour(),
                       theDate.Minute())
}

// AnniversaryDate returns a Time with this year's anniversary.
func AnniversaryDate() time.Time {
	theDate, err :=  time.Parse("2006-01-02", "2024-09-15")
    if err != nil {
		fmt.Println("Could not parse time:", err)
	}
	return theDate
}
