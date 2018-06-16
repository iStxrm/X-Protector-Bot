const Discord = require("discord.js");
var bot = new Discord.Client();



const prefix = 'x!';
bot.on('ready', () => {
console.log("Ready");
bot.user.setActivity(`${prefix}help| BETA Version`);
bot.user.setStatus(`online`);
  
});



bot.on("message", msg => {
    var lc = msg.content.toLowerCase();

    if (lc.startsWith(prefix + "credits")) {
        msg.channel.send('I was created by iSt_xrm#3096');
    };
  if (lc.startsWith(prefix + "hu")) {
    msg.delete();
    var embed = new Discord.RichEmbed()
    .setColor(0x7fff00)
    .setDescription("Discord Reports")
    .setFooter("Idea Suggested by: kksun77| X Protector Bot Created by iSt_xrm#3096 BETA VERSION")
    .addField("Information:", "This is to log reports people did for actions other made. If need help ask your Head Discord Mod or iSt_xrm")
    .addField("What this is?","Most of times people wanna report other but Mod's are not able to help, here you may keep track of what are the reports",true)
    .addField("How to use it?","When a report pops up, you should add this reaction in order to know that you're taking that report: :+1: . Then head to the report, if it was a fake report you let a warning and add this reaction: :regional_indicator_f: ;however, if it was not and you did it succesfully, then add this: :white_check_mark: .",true)
    .addField("Need Help?", "Ask iSt_xrm", true)
    .addField("How to report someone?", "x!report @user <reason>", true)
    msg.channel.sendEmbed(embed).catch(console.error)
    msg.channel.sendMessage("@everyone").catch(console.error)
  };
   if (lc.startsWith(prefix + "kick")) {
     msg.delete();
     
     let kUser = msg.guild.member(msg.mentions.users.first());
      if (!kUser) msg.channel.sendMessage("Error 103: User not found, command cancelled");
      let args = msg.content.split(" ").slice(1);
     let kReason = args.join(" ").slice(22);
     let role = msg.guild.roles.find('name', "X-P-Bot");
     if (!msg.member.roles.has(role.id)) return msg.channel.sendMessage("Error 101: You do not have permissions.");
     if (msg.member.roles.has(role.id)){
   
       if (kUser.roles.has(role.id)) return msg.channel.sendMessage("Error 102: User has Moderator permissions");
      
     var embed = new Discord.RichEmbed()
     .setTitle("Kick Report")
     .addField("Kicked by" , msg.author, true)
     .addField("Time ", msg.createdAt, true)
     .addField("Reason", kReason)
     .setColor(0xFF2D00)
     .setFooter("X Protector Bot Created by iSt_xrm#3096 BETA VERSION")
     kUser.sendEmbed(embed).catch(console.erorr)
                              msg.guild.member(kUser).kick(kReason);
     let channellog = msg.guild.channels.find(`name`, "bot-logs");
     var embed2 = new Discord.RichEmbed()
     .setTitle("Kick Log")
     .setColor(0xFF2D00)
     .addField("Kicked By" ,  msg.author ,true)
     .addField("Kicked User" ,  kUser ,true)
     .addField("Time", msg.createdAt)
     .addField("Reason", kReason)
     channellog.sendEmbed(embed2).catch(console.error)
     }};
   if (lc.startsWith(prefix+ "notify")) {
     msg.delete();
     let nUser = msg.guild.member(msg.mentions.users.first());
nUser.sendMessage(`Hey! ${msg.author} needs you at ${msg.channel} . :eyes: `).catch(console.error)
   };
  if (lc.startsWith(prefix + "report")) {
  
   
    let rUser = msg.guild.member(msg.mentions.users.first());
    if (!rUser) return msg.channel.send("Error: 203: User not found, report cancelled.");
     let args = msg.content.split(" ").slice(1);
    let reportedchannel = msg.guild.channels.find(`name`, "discord-reports");
    
    if (!reportedchannel) return msg.channel.send("Error 204: Report Log not found, report cancelled.");
    msg.delete().catch(O_o=>{});
    let reason = args.join(" ").slice(22);
    var embed = new Discord.RichEmbed()
    
    .setTitle("Discord Report")
    .setColor(0xFF2D00)
    .addField("Reported User", rUser)
    .addField("Channel Reported In:", msg.channel)
    .addField("Reported By:", msg.author)
    .addField("Time:", msg.createdAt)
    .addField("Reason:", reason)
    .setFooter("Idea Suggested by: kksun77| X Protector Bot Created by iSt_xrm#3096 BETA VERSION")
    reportedchannel.sendEmbed(embed).catch(console.eror)


    var embeded = new Discord.RichEmbed()
    .setColor(0x7fff00)
    .setTitle("Discord Report")
    .addField("Report Done By:", msg.author, true)
    .addField("Reason", reason, true)
    .addField("Status:", "Report Sent, in brief moments a discord or head discord mod will be helping you.")
    .setFooter("AVOID MAKING FALSE REPORTS |  X Protector Bot Created by iSt_xrm#3096 BETA VERSION")
    msg.channel.sendEmbed(embeded).catch(console.error)
      };
    if (lc.startsWith(prefix + "help")) {
      msg.delete();
        var embed = new Discord.RichEmbed()
        .addField("X Protector Discord Bot Commands", "x!credits       x!notify @user     x!kick @user <reason>      x!report @user <reason>       x!perms        x!prune <amount>   x!help", true)
        .setColor(0x06495ED)
        .setFooter("X Protector Bot created by iSt_xrm#3096 BETA VERSION")
         msg.author.sendEmbed(embed).catch(console.error) 

    };
    if (lc.startsWith(prefix + "help")) {
        var embed = new Discord.RichEmbed()
        .setColor(0x06495ED)
        .setDescription("A list of commands has been sent to you!")
        msg.channel.sendEmbed(embed).catch(console.error)
      
    
        
    };
    if (msg.content == ("Lol.")) {
        msg.channel.send('Lol means lots of love which means I LOVE YOU but also means League of Leyedns or however that stupid game is called by so either you play "L.O.L. or you love me (;').catch(console.error)
    };
  if (msg.content == ("clue2")) {
    msg.delete();
        msg.author.sendMessage('Username of the X Protector real co founder. Say the name in bot-hangouts').catch(console.error)
    };
  if (msg.content == ("clue3")) {
    msg.delete();
        msg.author.sendMessage('Working on.... and yeh keep trying nuub ').catch(console.error)
    };
  if (msg.content == ("Hi")) {
        msg.channel.send('Hi.').catch(console.error)
    };
   if (msg.content == ("iSp_xrk")) {
     msg.delete();
        var embed = new Discord.RichEmbed()
        .addField("Storm Family Information", "Gather 5 clues and you will get iSt_xrm real name. To do so say the 5 clues in order. (text of clue 1) (text of clue 2) (text of clue 3) (text of clue 4) (text of clue 5) That is the format.", true)
        .addField("Clue you discovered:", "iSt_xrm lives in Colombia", true)
        .setColor(0x06495ED)
        .setColor(0x06495ED)
        .setFooter("X Protector Bot created by iSt_xrm#3096 BETA VERSION")
     msg.author.sendEmbed(embed).catch(console.error)
    };
   if (msg.content == ("clue1")) {
     msg.delete();
     var embed = new Discord.RichEmbed()
        .addField("Storm Family Information", "Gather 5 clues and you will get iSt_xrm real name. To do so say the 5 clues in order. (text of clue 1) (text of clue 2) (text of clue 3) (text of clue 4) (text of clue 5) That is the format.", true)
        .addField("Clue you discovered:", "Julian is iSt_xrm cousin.", true)
        .setColor(0x06495ED)
        .setFooter("X Protector Bot created by iSt_xrm#3096 BETA VERSION")
        msg.author.sendEmbed(embed).catch(console.error)
     
    };
    if (msg.content == ("Oof")) {
        msg.channel.send('Oofer.').catch(console.error)
    };
   
    if (msg.content == ("OOF")) {
        msg.channel.send('Oofer.').catch(console.error)
    };
    if (msg.content == ("oof")) {
        msg.channel.send('Oofer.').catch(console.error)
    };
      if (lc.startsWith(prefix + "perms")){
        msg.delete();
        let author = msg.member;
        let role = msg.guild.roles.find('name', "X-P-Bot");
        if(author.roles.has(role.id)){
            msg.reply("You have permissions.").catch(console.error)
            return;
        }else{
            msg.reply("You do not have permissions.").catch(console.error)
            return;

        }
    };
    if(lc.startsWith(prefix + "prune")){
        let args = msg.content.split(" ").slice(1);
        let author = msg.member;
        let role = msg.guild.roles.find('name', "X-P-Bot");
        if(author.roles.has(role.id)){
            if(!args[0]){
                msg.delete();
                msg.author.send("No amount given.").catch(console.error)
                return;
            }
            if(args[0] > 100){
                msg.delete();
                msg.author.send("Maxiumum is 100 messages at once.").catch(console.error)
                return;

            }

            msg.delete();
            msg.channel.bulkDelete(args[0]);
            msg.author.send("Done! I deleted " + args[0] + " messages.").catch(console.error)
            return;
        }
  };
});

console.log('Starting...')

console.log('Logged in')
bot.login(process.env.BOT_TOKEN);



