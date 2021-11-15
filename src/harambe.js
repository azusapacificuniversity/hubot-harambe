//# Description
//#   Silly scripts (usually automatic responses) that provide some spice to hubot.
//#
//# Commands:
//#   hubot list lists - returns a list of lists that can be returned
//#
//# Notes:
//#   You should edit /src/lists.json to include useful information.
//#
//# Author:
//#   ParadoxGuitarist

const lists = require('./lists.json');

module.exports = (robot) => {

  robot.hear(/\b(hello|greetings?|good ((morn|even)ing|afternoon)|aloha|hola|hi haramb)\b/i, msg => {
    msg.finish();
    var hellos = [
      "Greetings human.",
      "wut up",
      "Holla",
      "'sup homeslice",
      "Hi!",
      "Ahoy, matey!",
      "Aloha",
      "Hola",
      "Que pasa",
      "Gutten tag",
      "Ciao",
      "Konnichiwa",
      "Yo!",
      "GOOOOOOOOOD MORNING VIETNAM!",
      "'Ello gov'nor!",
      "This call may be recorded for training purposes.",
      "How you doin'?",
      "https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif",
      "Myohmyohmyohmy"
    ];
    msg.send(msg.random(hellos))
  });

  robot.hear(/paper count|papercount/i, msg => {
    msg.finish();
    var papercount = [
      "https://media.tenor.com/images/6cfa7a41ac8e289f5b3991f414429022/tenor.gif",
      "https://media.giphy.com/media/tTMhcdiREv2W4/giphy.gif",
      "https://media.giphy.com/media/aXThX9ftrHnji/giphy.gif",
      "https://media1.giphy.com/media/m77wEsvF99FyU/giphy.gif",
      "https://media3.giphy.com/media/l2Jeal95KEUTLzNpS/giphy.gif",
      "https://media4.giphy.com/media/Nyyg06iiTiKli/200w.webp#21-grid1",
      "https://68.media.tumblr.com/f270e4494aa01cd26b52c699e77fdd98/tumblr_ml6ef4HvIp1rs9keio1_400.gif"
    ];
    msg.send(msg.random(papercount))
  });

  robot.hear(/orly/i, msg => {
    msg.finish();
    msg.send("yarly")
  });

  robot.hear(/\bno{3,}\b(?!(\.com|.jpg))/i, msg => {
    msg.finish();
    var nooo = [
      'http://www.nerdist.com/wp-content/uploads/2014/09/Vader-noooo.gif',
      'http://www.nooooooooooooooo.com/vader.jpg',
      'http://i.imgur.com/fE18keE.gif'
    ];
    msg.send(msg.random(nooo))
  });

  robot.hear(/\bharambe\b/i, msg => {
    msg.finish();
    msg.send("I believe I have parts from my predecessor, harambot. #NeverForget.")
  });

  robot.hear(/\bwhat are the odds\??\b/i, msg => {
    msg.finish();
    let rand_odd = Math.floor(Math.random() * 5000) + 50;
    let the_odds = [
      "R2 tells me that our chances of survival are " + rand_odd + " to 1.",
      "Sir, the possibility of successfully navigating this is approximately " + rand_odd + " to 1.",
      "BB-8 reports the odds are nearly " + rand_odd + " to 1.",
      "R2, I have a bad feeling about this. It seems the chances are, relatively speaking, " + rand_odd + " to 1."
    ];
    msg.send(msg.random(the_odds));
  });

  robot.respond(/list (.*)$/i, msg => {
    msg.finish();
    let key = msg.match[1].toLowerCase().split(" ").join("-");
    return msg.send(lists[key]);
  });

  robot.hear(/badge/i, msg => {
    msg.finish();
    botregex = /.*bot.*/i
    if (!botregex.test(msg.message.user.name)) {
      var fname = msg.message.user.real_name.replace(/(\w+)\s(\w+)/i, "$1");
      if (fname === undefined) {
        fname = "you";
      }
      var badges = [
        "Badges? BADGES?!? We Don't Need No Stink'n BADGES!!!!",
        "Honey Badges don't care!!",
        "It is my honor to present " + fname + " with the badge of honor! :first_place_medal:"
      ];
      msg.send(msg.random(badges));
    }
  });

  robot.hear(/it's working|its working|it works/i, msg => {
    msg.finish();
    msg.send("https://media.giphy.com/media/GIEXgLDfghUSQ/giphy.gif")
  });
};
