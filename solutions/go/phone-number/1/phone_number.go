package phonenumber
import (
    "regexp"
    "errors"
	"strconv"
)
func RemoveNonDigit (str string) string{
    reg := regexp.MustCompile(`[^\d]`)   
    res:= reg.ReplaceAllString(str, "") 
    return res
}

func Number(phoneNumber string) (string, error) {
    phoneNumber = RemoveNonDigit(phoneNumber)
    if len(phoneNumber)>10 {
        if phoneNumber[:1]!="1"{
        	return "", errors.New("Invalid Phone Number")
        }
    }
        
    re := regexp.MustCompile(`[\d]{10}$`)
    numTab := re.FindStringSubmatch(phoneNumber)
    if len(numTab)>0 {
        N1,_:= strconv.Atoi(numTab[0][:1])
        N2,_:= strconv.Atoi(numTab[0][3:4])
        if N1>1 && N2>1 {
        	return numTab[0], nil
        }
    }
	return "", errors.New("No Phone Number")
}

func AreaCode(phoneNumber string) (string, error) {

    phoneNumber, _ = Number(phoneNumber)
    re := regexp.MustCompile(`^[\d]{3}`)
    areaTab := re.FindStringSubmatch(phoneNumber)
    if len(areaTab)>0 {
        return areaTab[0], nil
    }
	return "", errors.New("No Phone Number")
}

func Format(phoneNumber string) (string, error) {
    phoneNumber, _ = Number(phoneNumber)
    if len(phoneNumber)==10 {
    	return "("+phoneNumber[:3] + ") " + phoneNumber[3:6]+"-"+phoneNumber[6:10], nil
    }
    return "", errors.New("Invalid Phone Number")
}
