package raindrops
import "fmt"

func Convert(number int) string {
	isDivibleByThree := number%3==0
    isDivibleByFive :=  number%5==0
    isDivibleBySeven := number%7==0
	res:=""
    if isDivibleByThree {
        res+="Pling"
    }

    if isDivibleByFive {
        res+="Plang"       
    }

    if isDivibleBySeven {
        res+="Plong"        
    }
	if res=="" {
        res+=fmt.Sprintf("%d",number)
    }
	return res
}
