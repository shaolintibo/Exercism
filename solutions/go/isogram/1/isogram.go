package isogram
import (
    "strings"
    "regexp"
    "sort"
)
func SortString(w string) string {
	s := strings.Split(w, "")
	sort.Strings(s)
	return strings.Join(s, "")
}
func IsIsogram(word string) bool {

    lower := strings.ToLower(word)
    re := regexp.MustCompile(`[^a-z]`)
	sortedCleanString := 		strings.ToLower(re.ReplaceAllString(SortString(lower), ""))

	runes := []rune(sortedCleanString)
	for index, val := range runes {
		if index > 0 && runes[index-1] == val {
			return false
		}
	}
	return true
}
