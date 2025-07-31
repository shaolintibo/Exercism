package isbn

import (
    "strings"
    "strconv"
)

func IsValidISBN(isbn string) bool {
    
    code:=strings.Replace(isbn, "-", "", -1)
    runes := []rune(code)
    runesNumber:=len(runes)
    sum:=0
    if runesNumber!=10{
        return false
    }
    for index, val:= range runes{
        strToConvert := string(val)
        if(val=='X' && index==9){
            strToConvert = "10"
        }
        numInt, err :=strconv.Atoi(strToConvert)
        if(err==nil){
        	sum += (runesNumber-index)*numInt
        }else{
        	return false
        }
    }
	return sum%11==0

}
