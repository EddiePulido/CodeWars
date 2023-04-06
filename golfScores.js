const golfScoreCalculator = (pars, scores) => [...scores].reduce((a,c,i) => a + (+c - +pars[i]),0)
