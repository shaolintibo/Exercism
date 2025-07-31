//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {

  const pt= {'Team':'','MP':0, 'W':0, 'D':0, 'L':0, 'P':0}
  let headers = Object.assign({}, pt)
  let result = ''
  
  const formatScore = (id, val, values) =>{
    let line = ''
    if(id>0){
      line+= String(val).padStart(3, ' ')
    }else{
      line+= String(val).padEnd(30, ' ')
    }

    if(id<values.length-1) line+= ' |'
    return line
  }
  
  result = (Object.keys(headers).reduce((acc, key, id, keys)=> acc += formatScore(id, key, keys), ''))
  
  const lines = input.split('\n')

  if(input==='') return result
  
  let teams = new Set()
  let score=[]
  
  lines.forEach(line=>{
    score= line.split(';')
    teams.add(score[0])
    teams.add(score[1])
  })

  let res2 = []
  let index=0;
  const updateTeam = (teamName, status) => {
    let index = res2.findIndex( it => it.Team===teamName);
    const sub=res2[index]

    sub.MP++
    switch(status){
      case 'loss':
        sub.L++
        break;
      case 'win':
        sub.W++
        sub.P+=3
        break;
      case 'draw':
        sub.D++
        sub.P+=1
        break;
    }
  }
  teams.forEach((it)=>{
    res2[index]= Object.assign({}, pt)
    res2[index].Team = it
    index++
  })
  
  lines.forEach(line=>{
    score = line.split(';')
    const statusTeam2 = score[2]==='draw' ? 'draw':(score[2]==='win' ? 'loss' : 'win' )
    updateTeam(score[0], score[2])
    updateTeam(score[1], statusTeam2)
  })

  res2.sort((a, b)=>{
    if(b.P==a.P){
      return a.Team.localeCompare(b.Team)
    }
    return (b.P-a.P)
  })

  for(let key in res2){
    result += "\n" + Object.values(res2[key]).reduce((acc, val, id, values)=> acc+= formatScore(id, val, values), '')
  }
  return result
};
