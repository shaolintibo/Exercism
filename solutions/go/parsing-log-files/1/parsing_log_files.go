package parsinglogfiles
import (
	"fmt"
    "regexp"
	)

func IsValidLine(text string) bool {
    re:= regexp.MustCompile(`^\[TRC\]|^\[DBG\]|^\[INF\]|^\[WRN\]|^\[ERR\]|^\[FTL\]`)
	return re.MatchString(text)

}

func SplitLogLine(text string) []string {
    out := []string{}
	t:=regexp.MustCompile(`<[^a-zA-Z0-9]*>`).Split(text, -1)
    fmt.Println("regt:",t, len(t))
    for _,val := range t {
        if val!="" {
            out = append(out, val)
         }
    }
	if len(out)==0 {
        out = append(out, "")
    }
    fmt.Println("out :",out, len(out))
    return out
}

func CountQuotedPasswords(lines []string) int {
    counter := 0
    re:= regexp.MustCompile(`"{1}((.*)(?i)password(?-i))(.*)"{1}`)
	for _, line := range lines {
        if re.MatchString(line) {
            counter++
        }
    }
	return counter
}

func RemoveEndOfLineText(text string) string {
    re:= regexp.MustCompile(`((?i)end-of-line\d*(?-i))`)

	fmt.Println(re.ReplaceAllLiteralString(text, ""))
    return re.ReplaceAllLiteralString(text, "")
}

func TagWithUserName(lines []string) []string {
    
	out := []string{}
    re:= regexp.MustCompile(`User\s+((?i)[a-z\d]*(?-i))`)
	for _, line := range lines {
        datas2:=re.FindStringSubmatch(line)
        if len(datas2)>1 {
            name := datas2[len(datas2)-1]
            line = fmt.Sprintf("[USR] %s %s", name, line)
        }
        fmt.Println("line : ",line)
        out = append(out, line)
    }
	return out
}
