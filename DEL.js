const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const yt = require('ytdl-core');
const fs = require("fs");
const prefix = "!";
const PREFIX = "!";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!help | !inv |  ${client.guilds.size} servers! `,"http://twitch.tv/S-F")
});

client.on("ready", () => {
  function lol() {
    client.guilds.get('513675814705823745').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1600);
});

client.on("message", msg => {
if(msg.content.startsWith(prefix + "help-admin")) {
if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
       msg.channel.send('**تم ارسال رسالة في الخاص**');
msg.author.sendMessage(`**
=>> Admin Cmd <<==
====><=====
${prefix}ban < Mention > لاعطاء العضو بان
${prefix}unban < Mention > لفك البان من العضو
${prefix}kick < Mention > لاعطاء العضو كيك
${prefix}vc يسويلك روم يطلعلك كم فويس اونلاين اذا ما عرفت وش هو الفويس اونلاين
الفويس اونلاين يعني كم واحد داخل روم صوتي
${prefix}ct < Name > يسويلك روم كاتبي
${prefix}cv < Name > يسويلك روم صوتي
====><=====
${prefix}mc يسويلك روم يطلعلك كم عضو في السيرفر
${prefix}clear < Number > لمسح الكلام الي في الشات
${prefix}bc < Message > لارسال لكل الاعضاء رساله في الخاص
${prefix}say < Message > لجعل البوت يقول كلام
${prefix}mute < Mention >  لاعطاء العضو ميوت
لتفعيل خصاية انو اول ما احد يدخل السيرفر يجيه رتبة
لازم توجد رتبة باْسم
member
لا يجود طريقه لتغير اسم الرتبة
====><=====
${prefix}bc-embed < Message > لارسال لكل الاعضاء رساله في الخاص بامبد
لتشغيل خاصية الميوت يجب ان يكون هناك رتبة باْسم
Muted
${prefix}unmute < Mention > لفك الميوت من العضو
${prefix}server يعرضلك معلومات السيرفر
${prefix}s-p < Mention > < Message > يرسل رسالة في خاص الي تمنشنه
=>> Admin Cmd <<==
====><=====
${prefix}closeroom لتقفيل الشات الكاتبي
${prefix}openroom  لفتح الشات الكاتبي
${prefix}roles يوريك الرتب كلها في السيرفر
**`)
}
});

client.on("message", msg => {
if(msg.content === "!help") {
msg.channel.send('**تم ارسال رسالة في الخاص**');
msg.author.sendMessage(`**
=>> Public Cmd <<=
====><=====
${prefix}avatar < Mention > يعرضلك صوره البروفايل الخاصه بك او الشخص الي تمنشنه
${prefix}id يعرضلك معلوماتك
${prefix}ownerbot يعرضلك رئس البوت
${prefix}cc لصنع الوان
${prefix}embed لجعل البوت يكتب كلام بامبد
====><=====
${prefix}ping يعرضلك سرعة استجابة البوت في الوقت الحالي
${prefix}support يعرضلك سيرفر السبورت للبوت
${prefix}inv لدعوة البوت الى سيرفرك
${prefix}bot يعرضلك معلومات البوت
${prefix}rooms يعرضلك كم رومات موجوده و يوريك اسماْهم
====><=====
=>> Credit Cmd <<=
${prefix}credit < Mention > يعرضلك كم معه العضو الي تمنشه كريدت
او اذا كتبت
${prefix}credit بدون منشن بيقلك كم معك انت
${prefix}daily يعطيك كريدت يومينا
${prefix}credits < Mention > تعطي العضو الي تمنشنه كريدت
====><=====
=>> Games Cmd <<=
قم بتفكيك الجمل - فكك
 
قم بتركيب الجمل  - ركب
 
قم بحل المسائل الرياضية  - احسب
 
قم بأيجاد العواصم المطلوبة - عواصم
 
قم بحل الألغاز - لغز
 
قم بتجميع الحروف - تحدي
 
لعبه لو خيروك - لو خيروك
لعبه صراحه - صراحه
لعبه كت تويت - كت تويت
!tic - لعبه اكس او
لعرض النقاط الخاصة بك - نقاطي
====><=====
=>> Music Cmd <<=
!play < Name > Or < URL >
!stop if you want stop the bot and Disconnect From Room
!skip If You Want Skip This Song
====><=====
=>> Public Cmd <<=
**`)
}
});
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', najzx => {
    let user = najzx.mentions.users.first()|| client.users.get(najzx.content.split(' ')[1])
    if(najzx.content.startsWith(prefix + 'unban')) {
        if(!najzx.member.hasPermission('ADMINISTRATOR')) return najzx.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  najzx.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        najzx.guild.unban(user);
        najzx.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${najzx.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(najzx.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${najzx.author.id}> ` , true)
        .setAuthor(najzx.guild.name)
       .setFooter('Requested by '+najzx.author.username, najzx.author.avatarURL)
        najzx.channel.sendEmbed(embed)
}
  });


client.on('message',async msg => {
if(msg.content.startsWith(prefix+"server")) {
const members = await msg.guild.members.filter(m=> m.presence.status === 'online').size + msg.guild.members.filter(m=> m.presence.status === 'idle').size + msg.guild.members.filter(m=> m.presence.status === 'dnd').size  
msg.channel.send
var embed = new Discord.RichEmbed()
.setAuthor(`${msg.guild.name}`, msg.guild.iconURL)
.setURL(msg.guild.iconURL)
.addField("👑**Owner**👑⤵", msg.guild.owner, true)
.addField("📜**Name**📜⤵", msg.guild.name, true)
.addField("🆔**ID**🆔⤵", msg.guild.id, true)
.addField("👥**MembersAll**🤖⤵", msg.guild.memberCount, true)
.addField("📕**Roles**📕⤵", msg.guild.roles.size, true)
.addField("📕**Channels**📕⤵", msg.guild.channels.size, true)
.addField("🌐**Region**🌐⤵", msg.guild.region, true)
.addField("🤖**Bots**🤖⤵", msg.guild.members.filter(m => m.user.bot).size, true)
.addField("👥**Humans**👥⤵", msg.guild.memberCount - msg.guild.members.filter(m => m.user.bot).size, true)
.addField("📝**TextRooms**📝⤵", `${msg.guild.channels.filter(e => e.type === "text").size}`, true)
.addField("🔒**verificationLevel**🔒➥", msg.guild.verificationLevel, true)
.addField("🎤**VoiceRooms**🎤⤵", `${msg.guild.channels.filter(e => e.type === "voice").size}`, true)
.addField("📆Created At📆⤵", `${moment(msg.guild.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(msg.guild.createdAt).fromNow()}\``,true)
.addField("👥**Members**👥⤵", members, true)
.addField("🛏AFKRoom🛏⤵", msg.guild.afkChannel, true)
msg.channel.send(embed);                
                 
                     }
});

client.on('message', msg => {
 if(msg.content.startsWith(prefix + "bot")) {
let embed24 = new Discord.RichEmbed()   
   .setThumbnail(client.user.avatarURL)
   .setColor("RANDOM")  
   .setTitle(`🤖**Information about**🤖 || ${client.user.tag}`, true)
   .addField("📜**Name + Tag**📜", client.user.tag, true)
   .addField(`***Prefix Bot***`,`**${prefix}**`, true)
   .addField("🤖**Bot Join Servers**🤖", client.guilds.size, true)
   .addField("👥**Sender**👥", msg.author.tag, true)
   .addField("🤖:id: *Bot ID** :id:🤖 ", client.user.id, true)
   .addField("📆**Bot Created At**📆", `${moment(client.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(client.user.createdAt).fromNow()}\``, true)
   .addField("🤖**User**🤖", client.users.size, true)
   .addField(`👑**Owner**👑`,`👑**DEL.25#1406**👑`, true)
  
   .setFooter(`${msg.author.tag}`, `${msg.author.avatarURL}`, true)
msg.channel.sendEmbed(embed24)
}
 });

client.on("message", msg => {
if(msg.content === "!inv") {
var embed = new Discord.RichEmbed()
.setTitle("Click Here To Invite Bot")
.setURL("https://discordapp.com/oauth2/authorize?client_id=514127083316838400&permissions=2146958583&scope=bot")
msg.channel.sendEmbed(embed);
}
});

client.on("message", msg => {
if(msg.content === "!support") {
var embed = new Discord.RichEmbed()
.setTitle("Click Here To Join a server support Bot")
.setURL("https://discord.gg/rtHJ8qk")
.addField(`or`,`https://discord.gg/rtHJ8qk`,true)
msg.channel.sendEmbed(embed);
}
});

client.on("message", msg => {
    if (msg.content === "!id") {    
let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setAuthor(msg.author.username, msg.author.avatarURL)
     .setTitle('👥**Your Information**👥')
     .addField("📜**Name + Tag**📜", msg.author.tag, true)     
     .setThumbnail(msg.author.avatarURL)
     .addField('**Your ID**', msg.author.id, true)
     .addField('📆**Account Created At**📆',`${moment(msg.author.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(msg.author.createdAt).fromNow()}\``, true)
     .setFooter(msg.guild.name, msg.guild.iconURL, true)
     msg.channel.sendEmbed(embed);
    }
  });


client.on('message', message =>{
    let args = message.content.split(' ');
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

client.on('message', message =>{
    if(message.content === '!ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});


  
  
  

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

message.channel.send(args.join("  "))
    message.delete();
  }



});



client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
   
    if(mention.hasPermission('MUTE_MEMBERS')) return message.channel.send(`**لا يمكن آعطاء ميوت لآحد آدارة السيرفر ❌**`);
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source:  ${mention.user.username} Already muted!** `);
 
       
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let duration = args[2];
    if(!duration)  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ ** __لاتسب | بدون سبام__** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ])
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000);
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:  ${mention.user.username} تم فك الميوت عنه مسبقاً! **`)
 
  await toMute.removeRole(role)
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});

client.on ('message', Sal => { //By Salto7#4595
  if (Sal.content ===  'الله يلعن امك') { 
    Sal.reply('لا تسب').then(sb => {  
    Sal.delete(30)
   sb.delete(1200);
      
  })
  }
});

client.on ('message', Sal => { //By Salto7#4595
  if (Sal.content ===  'كل خرا') { 
    Sal.reply('لا تسب').then(sb => {  
    Sal.delete(30)
   sb.delete(1200);
      
  })
  }
});

client.on ('message', Sal => { //By Salto7#4595
  if (Sal.content ===  'كل زق') { 
    Sal.reply('لا تسب').then(sb => {  
    Sal.delete(30)
   sb.delete(1200);
      
  })
  }
});

client.on ('message', Sal => { //By Salto7#4595
  if (Sal.content ===  'كس امك') { 
    Sal.reply('لا تسب').then(sb => {  
    Sal.delete(30)
   sb.delete(1200);
      
  })
  }
});

client.on ('message', Sal => { //By Salto7#4595
  if (Sal.content ===  'الله يلعن ابوك') { 
    Sal.reply('لا تسب').then(sb => {  
    Sal.delete(30)
   sb.delete(1200);
      
  })
  }
});

client.on('message',async message => {
  if(message.author.bot || message.channel.type === '!bc') return;
  let args = message.content.split(' ');
  if(args[0] === `!bc`) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        });
      });
    });
  }
});


client.on('message', message => {

  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
 
  message.guild.member(user).kick(7, user);
 
  
}
});

client.on("message", message => { //clear
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**للأسف لا تمتلك صلاحية** `MANAGE_MESSAGES`' );
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "***تــم مسح الشات ***",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });



client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  

if(cmd === `${prefix}sugg`) {
    var suggestMessage = message.content.substring(8)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(message.author.avatarURL)
    .setTitle("اقتراح جديد!!")
    .setDescription(`الاقتراح **${args}**`)
    .setFooter(`صحاب الاقتراح : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggests");
    if (!suggests) return message.channel.send("You should make A **suggests** channel!")
    suggests.send(suggestEMBED).then(msgS => {
msgS.react("✅")
msgS.react("❌")   
})

}

});


 


client.on("message", msg => {
let args = msg.content.split(" ").slice(2);
let men = msg.mentions.users.first();
var all = msg.content.split(" ").slice(1) - msg.mentions.users.first();
if(msg.content.startsWith(prefix + "s-p")) {
msg.delete(1500);
msg.channel.send(`تم الارساله الى ${men}`).then(msgS => {
msgS.delete(1500);
if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let embed = new Discord.RichEmbed()
.setTitle("Message!!!!")
.addField("Sender", msg.author.tag, true)
.addField("Guild", msg.guild.name, true)
.addField(`Message`,`${args}`,  true)
men.sendMessage(embed);
})
}
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!bc3')){
 if (message.author.id !== '424313545421750274') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



client.on('message',async msg => {

  if(msg.content.startsWith(prefix + "mc")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );  
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Members : ◤ → ${msg.guild.memberCount} ← ◢`);
 },1000);
  });
  }
 
});

client.on('message',async msg => {

  if(msg.content.startsWith(prefix + "vc")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
if(!msg.member.hasPermission('ADMINISTRATOR')) return      msg.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );    
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Voice Online : ◤ → ${msg.guild.members.filter(g => g.voiceChannel).size} ← ◢`);
 },1000);
  });
  }
 
});

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "PC");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})

client.on('message', message =>{
var AsciiTable = require('ascii-data-table').default
    if(message.content == "Droles"){
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});




   





var points = JSON.parse(fs.readFileSync('points.json', 'utf8'));
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {points : 0}
    if (message.content == 'نقاطي'){
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField(`نقاطك : ${points[message.author.id].points}`,`@${message.author.tag}`,   true)
        .setColor('RANDOM')
        .setFooter('DELBOT GAMES', client.user.avatarURL);
        message.channel.sendEmbed(embed)
    };
    if (message.content == "فكك") {    
        var x = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'اكسيفو ذا بيست'];
        var x2 = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ه ك و ن ا م ط ا ط ا', 'ا ك س ي ف و ذ ا ب ي س ت'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`فكك الكلمة الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
        points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points }}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
        if (message.content == "ركب") {    
        var x = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ر و ق ن'];
        var x2 = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'روقن'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ركب الكلمة  الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points }}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
        if (message.content == "احسب") {    
        var x = ['50×50', '1000000×1', '89×10', '90×5', '30×3', '10×10', '1000×1000', '44,5+44,5'];
        var x2 = ['2500', '1000000', '890', '450', '90', '100', '1000000' , '89'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ركب الكلمة  الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
   
  if (message.content == "عواصم") {
        var x = ['اليمن', 'مصر', 'الجزائر', 'السعودية', 'الصومال', 'العراق' , 'الامارات' , 'سوريا' , 'المغرب'];
        var x2 = ['صنعاء', 'القاهرة', 'الجزائر', 'الرياض', 'الخرطوم', 'بغداد', 'ابو ظبي','دمشق ','الر باط'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ماهي عاصمة :${x[x3]}, لديك 15 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
    if (message.content == "لغز") {
        var x = ['كلي ثقوب ومع ذلك أحفظ الماء فمن أكون ؟', 'ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟', 'ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟', 'يسمع بلا أذن ويتكلم بلا لسان فما هو ؟', 'ماهو الشيء الذي يكتب و لا يقرأ ؟', 'ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟', 'عائلة مؤلفة من 6 بنات وأخ لكل منهن، فكم عدد أفراد العائلة ؟', 'يتحرك دائماً حواليك لكنك لاتراه فما هو ؟' ,'ما هو البليون ؟'];
        var x2 = ['الاسفنج', 'الساعة', 'البحر', 'التلفون', 'العمر', 'الشاي', 'سبعة اشخاص' ,'الهواء' ,'الف مليون'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`حل اللغز الأتي :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
  if (message.content == "تحدي") {    
        var x = ['ف ض ع د', 'ص ش خ', 'ة د ا ر ج', 'ا ر ي ة س', 'ي ت ب', 'ئ ا ع ل ة', ' ا ش ي', 'ن ح و ي ا', 'س د و ي ك ر د', 'ر ط ي ا ة' , 'ن ح ز ل و', 'ك ا ف ي س و'];
        var x2 = ['ضفدع', 'شخص', 'دراجة', 'سيارة', 'بيت', 'عائلة', 'شاي', 'حيوان', 'ديسكورد', 'طيارة', 'حلزون', 'اكسيفو'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`عدل الكلمة  الآتية :${x[x3]}, لديك 25 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 25000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
    });
 
   
   
   
   
   
   
   
    
   
   
   

let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith('!credit')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith("!daily")) {
 
 
  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`**${message.author.username} you collect your \`310\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith('!credits')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}credits @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}credits @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
                 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : Amount**  \n \`${x[x3]}\` ** : Write the Number to Complete **`).then(msg1=> {
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
var embed = new Discord.RichEmbed()           
r.catch(() => {
            message.delete()
            r.delete()
            message.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
var embed = new Discord.RichEmbed()               
message.channel.sendEmbed(embed)
        })
        })
       
       
 
 
 
 
}
 


 
});

client.on('message', message => {
         if(message.content === prefix + "closeroom") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                });
                  }
      if(message.content === prefix + "openroom") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__:white_check_mark:**")
                });
      }
         
});
client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** Not allowed to advertising Here :angry: ! **`)
  }
}
});



client.on('message', message => {
    if (message.content === "!rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on("message", (message) => {
if (message.content.startsWith("!cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

client.on("message", (message) => {
if (message.content.startsWith("!ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| Online ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:|  Dnd ',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('Member Server Count',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("لو خيروك")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('صراحه')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});

const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد 10 سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


 

 
 

 
 





const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

 
/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/
 




client.on('message' , message => {
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "tic")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:'] 
  var grid_message;

  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1); 
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(What a loser, playing this game with yourself :joy:)_'
    }
    message.channel.send(`Tic-tac-toe! ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./alpha.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`_Beldum Beldum_ :anger: \`(Type This : ${prefix}tictactoe @Mention You @Mention Member)\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });


 client.on('message', ra3d => {
var prefix = "!";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'cc')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**');
              ra3d.channel.send(`**✅ |تم انشاء __${args}__ لون**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });




client.login(process.env.BOT_TOKEN);
