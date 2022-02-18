let userName = window.prompt("What is your name?");

let insult = [" you are a nerd", " you smell funny", " did an animal die in here or is that your natural scent?", " silence is the best answer for a fool", " the salt on this food is enough to kill an earthworm", " you’re not glowing, honey; you’re basically bathed in oil", " if you could smell you, you wouldn’t be friends with you", " I know I make stupid choices, but you’re the worst of all my choices", " being friends with you is only useful if I’m looking to have a good time", " you’ve been trying to get your summer body since two winters ago", " serial killers would run mad if they tried to make you a victim", " you can attract bees with honey; in your case, it’s flies and faeces"];

for (let i = 0; i < insult.length; i++) {
    window.alert (userName + insult[i]);
}