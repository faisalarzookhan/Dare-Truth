const truths = [
  "What's your biggest fear?",
  "What's the most embarrassing thing you've ever done?",
  "What's your biggest regret?",
  "What's the worst lie you've ever told?",
  "What's one secret you've never told anyone?",
  "What's the most trouble you've ever been in?",
];

const dares = [
  "Do 10 push-ups",
  "Sing your favorite song",
  "Call your mom and tell her you love her",
  "Do your best dance move",
  "Tell a joke in a funny accent",
  "Make up a short rap about another player",
];

export const getRandomQuestion = (type: 'truth' | 'dare'): string => {
  const questions = type === 'truth' ? truths : dares;
  return questions[Math.floor(Math.random() * questions.length)];
};