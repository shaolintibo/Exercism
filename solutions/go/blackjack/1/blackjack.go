package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
    value := 0
    switch(card){
        case "ace":
            value = 11	
        case "eight":
            value = 8
        case "two":
            value = 2	
        case "nine":
            value = 9
        case "three":
            value = 3	
        case "ten":
            value = 10
        case "four":
            value = 4	
        case "jack":
            value = 10
        case "five":
            value = 5	
        case "queen":
            value = 10
        case "six":
            value = 6	
        case "king":
            value = 10
        case "seven":
            value = 7	
        case "other":
        	value = 0
        default:
        	value = 0
    }
	return value
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
    sum := ParseCard(card1)+ParseCard(card2)

	switch {
        case sum == 22:
        	return "P"
    	case sum == 21:
        	val := "S"
    		if (ParseCard(dealerCard) != 10 &&
        		ParseCard(dealerCard) != 11) {
        		val = "W"
            }
        	return val
        case sum >=12 && sum<=16:
    		val := "S"
        	if (ParseCard(dealerCard) >=7 ){
    			val = "H"
            }
    		return val
        case sum <= 11:
    		return "H"
        case sum >=17 && sum<=20:
			return "S"
        default:
    		return "S"
    }
}
