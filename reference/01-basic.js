const audioFileUrl = 'https://static.deepgram.com/examples/deep-learning-podcast-clip.wav'

const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DG_KEY)

deepgram.transcription.preRecorded({ url: audioFileUrl }).then(data => {
  console.dir(data, { depth: null })
})