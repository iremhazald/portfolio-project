function showAnswer(response) {
  alert(response.data.answer);
  console.log(response.data.answer);
}

let apiKey = "1e4573e080b57c89fadd0873aeof420t";
let context = "be polite and provide a very short answer";
let prompt = "what is the best cuisine in the world?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=₺${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
