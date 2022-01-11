const audioFileUrl = 'https://static.deepgram.com/examples/deep-learning-podcast-clip.wav'

const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DG_KEY)

deepgram.transcription.preRecorded(
  { url: audioFileUrl },
  { 
    punctuate: true, // adds punctuated_word property
    utterances: true, // adds utterances array
    diarize: true // adds speaker property
    // https://developers.deepgram.com/documentation/features/
  }
).then(data => {
  console.dir(data, { depth: null })
})