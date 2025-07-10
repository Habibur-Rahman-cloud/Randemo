const tasks = [
  { text: "Go to sleep", emoji: "🛌" },
  { text: "Study for 4 hours without any break", emoji: "📚" },
  { text: "Learn a new language for 6 hours", emoji: "🗣️" },
  { text: "Meditate for 30 minutes", emoji: "🧘‍♂️" },
  { text: "Drink 8 glasses of water today", emoji: "💧" },
  { text: "Write 2 pages in your journal", emoji: "📓" },
  { text: "Clean your workspace", emoji: "🧹" },
  { text: "Organize your digital files", emoji: "💻" },
  { text: "Call a friend or family member", emoji: "📞" },
  { text: "Take a 10-minute walk", emoji: "🚶‍♂️" },
  { text: "Watch a motivational video", emoji: "🎥" },
  { text: "Read a book for 1 hour", emoji: "📖" },
  { text: "Plan your next week", emoji: "🗓️" },
  { text: "Write down your top 3 goals", emoji: "🎯" },
  { text: "Practice a hobby", emoji: "🎨" },
  { text: "Do 50 pushups", emoji: "💪" },
  { text: "Learn 10 new English words", emoji: "📘" },
  { text: "Cook something new", emoji: "🍳" },
  { text: "Do a digital detox for 2 hours", emoji: "📵" },
  { text: "Sort your clothes", emoji: "👕" },
  { text: "Clean your inbox", emoji: "📬" },
  { text: "Fix something broken", emoji: "🛠️" },
  { text: "Stretch for 15 minutes", emoji: "🤸" },
  { text: "Listen to a podcast", emoji: "🎧" },
  { text: "Sleep early today", emoji: "🌙" },
  { text: "Wake up at 6am tomorrow", emoji: "⏰" },
  { text: "Watch a documentary", emoji: "🎬" },
  { text: "Unfollow 5 distractions", emoji: "🚫" },
  { text: "Paint or draw something", emoji: "🖌️" },
  { text: "Take a nature break", emoji: "🌳" },
  { text: "Write a to-do list", emoji: "📝" },
  { text: "Delete unused apps", emoji: "🗑️" },
  { text: "Read a news article", emoji: "📰" },
  { text: "Do breathing exercises", emoji: "🌬️" },
  { text: "Make a healthy smoothie", emoji: "🥤" },
  { text: "Walk barefoot on grass", emoji: "🌿" },
  { text: "Talk to a stranger (safely)", emoji: "🙋‍♂️" },
  { text: "Dance to your favorite song", emoji: "💃" },
  { text: "Do 15 squats", emoji: "🏋️" },
  { text: "Visualize your dream life", emoji: "🧠" },
  { text: "Skip sugar today", emoji: "🚫🍬" },
  { text: "Write a letter to your future self", emoji: "📨" },
  { text: "Spend time with a pet", emoji: "🐶" },
  { text: "Do something kind anonymously", emoji: "💖" },
  { text: "Research a topic you like", emoji: "🔍" },
  { text: "Watch the sunrise/sunset", emoji: "🌅" }
];

function generateTask() {
  const task = tasks[Math.floor(Math.random() * tasks.length)];
  document.getElementById("task").textContent = task.text;
  document.getElementById("emoji").textContent = task.emoji;
}

function copyTask() {
  const text = document.getElementById("task").textContent;
  if (text !== "--") {
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied: " + text))
      .catch(() => alert("Failed to copy"));
  }
}
