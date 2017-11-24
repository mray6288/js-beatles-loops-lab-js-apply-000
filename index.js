function theBeatlesPlay(musicians, instruments){
  sentences = []
  for (i = 0; i < musicians.length; i++){
    sentences.append(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(sentences)
  return sentences
}
