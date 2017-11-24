function theBeatlesPlay(musicians, instruments){
  sentences = []
  for (i = 0; i < musicians.length; i++){
    sentences.push(`${musicians[i]} plays ${instruments[i]}`)
    // console.log(`${musicians[i]} plays ${instruments[i]}`)
  }
  // console.log(sentences)
  return sentences
}



// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
//
// theBeatlesPlay(musicians, instruments)
