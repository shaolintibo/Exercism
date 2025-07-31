package luhn
import (
    "fmt"
    "strings"
	"regexp"
    "strconv"
)
func Valid(id string) bool {

    
	re := regexp.MustCompile(`^\d+$`)
    code:=strings.ReplaceAll(id, " ", "")
    isNumber := re.MatchString(code)
    lengthCode:=len(code)

    fmt.Println("Valid : ", lengthCode<=1, isNumber)
    
    if lengthCode<=1 || !isNumber{
        return false
    }
	
	runes := []rune(code)
    num := make([]int, 0, len(runes))
    //convert ta valid int tab
    for _, val := range runes {
        if string(val)!="" {
        	val,_ := strconv.Atoi(string(val))
       		num = append([]int{val}, num...)
        }
    }

    //valid code 
    sum:=0
    for index, val :=range num{
        newV:=val
        if index%2==1 {
            newV*=2
            if newV>9{
                newV-=9
            }
        }
    	num[index]=newV
    	sum+=num[index]
    }
	return sum%10==0
}
