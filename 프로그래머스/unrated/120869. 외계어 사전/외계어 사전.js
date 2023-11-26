function solution(spell, dic) {
  spell = spell.sort().join('')
    return dic.map((a)=> a.split('').sort().join('')).find((el)=> el === spell) ? 1 : 2
}