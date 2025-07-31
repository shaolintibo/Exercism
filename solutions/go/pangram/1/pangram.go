package pangram
import (
    "strings"
    "regexp"
)

func clean(str string) string {
	str = strings.ToLower(str)
	var re = regexp.MustCompile(`[^a-z]`)
	return re.ReplaceAllString(str, "")
}

func countCharacters(str string) map[rune]int {
	frequency := make(map[rune]int)
	for _, char := range str {
		frequency[char] = frequency[char] + 1
	}
	return frequency
}


func IsPangram(input string) bool {
	return len(countCharacters(clean((input))))>=26
}
