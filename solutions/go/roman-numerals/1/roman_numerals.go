package romannumerals
import (
    "fmt"
    "strconv"
    "strings"
    "errors"
)

func ToRomanNumeral(input int) (string, error) {

    romansSymbols := []string{ "M", "D", "C", "L", "X", "V", "I"}
    symbolsNb := len(romansSymbols)
   
 	if input<=0 {
        return "", errors.New("Zero, or negative cannot be used")
    } else if input>=4000{
       return "", errors.New("4000 is out of range")
    }
	//code := strconv.Itoa(input)
	code := fmt.Sprintf("%04d", input)
    
    romanRes :=""
    for index, val := range code {
        subIndex := symbolsNb-(7-index*2)
     	integerValue, _ := strconv.Atoi(string(val)) 

        if(index==0){
        		romanRes += strings.Repeat(romansSymbols[subIndex], integerValue)
        }else if (index >=1 && index<=3){
			if integerValue>= 1 && integerValue <=3 {
            	romanRes += strings.Repeat(romansSymbols[subIndex], integerValue)
            } else if integerValue>= 5 && integerValue <=8 {
                romanRes+= romansSymbols[subIndex-1]
                romanRes+= strings.Repeat(romansSymbols[subIndex], integerValue%5)
            }else if integerValue==4 || integerValue==9 {
             	romanRes+= romansSymbols[subIndex]+romansSymbols[subIndex-(1+integerValue%4)]
                    
            }
        }
    }
    
	return romanRes, nil
}
