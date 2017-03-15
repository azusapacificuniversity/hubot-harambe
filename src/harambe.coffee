# Description
#   Silly scripts (usually automatic responses) that provide some spice to hubot.
#
# Commands:
#   hubot list lists - returns a list of lists that can be returned 
#
# Notes:
#   You should edit /src/lists.json to include useful information.
#
# Author:
#   ParadoxGuitarist

hellos = [
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
  "How you doin'?"
]

nooo = [
  'http://www.nerdist.com/wp-content/uploads/2014/09/Vader-noooo.gif',
  'http://www.nooooooooooooooo.com/vader.jpg',
  'http://i.imgur.com/fE18keE.gif'
]

lists = require('./lists.json')

module.exports = (robot) ->

  robot.hear /hello|greeting|good morning|good evening|aloha|hola|hi /i, (msg) ->
    msg.send msg.random hellos

  robot.hear /orly/i, (msg) ->
    msg.send "yarly"

  robot.hear /\bno{3,}\b/i, (msg) ->
    msg.send msg.random nooo

  robot.hear /harambe/i, (msg) -> 
    msg.send "Perhaps, you are referring to me, Harambot, brought back to life in this form: a chat bot. #NeverForget." 

  robot.respond /list (.*)$/i, (msg) ->
    key = msg.match[1].toLowerCase().split(" ").join("-")
    msg.send lists[key]

  robot.hear /badge/i, (msg) ->
    msg.send "Badges? BADGES?!? We Don't Need No Stink'n BADGES!!!!"

  robot.hear /it's working|its working|it works/i, (msg) ->
    msg.send "http://cdn.chud.com/6/6c/900x900px-LL-6cfcdaac_70068-Its-working-star-wars-gif-Pe3y.gif"
