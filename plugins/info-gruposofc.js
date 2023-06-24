
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, Bienvenido a los grupos oficiales, te invito a unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de 𝐆𝐞𝐫𝐚𝐥-𝐁𝐨𝐭 💙👨🏻‍💻*

➤ Grupos oficiales del bot:
 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Grupos del amistades donde esta el bot

*꧁⁣𓆩Aᴹᴵᴳᴼˢ Cᴴᴬᵀˢ Y Aᴾᴼᴿᵀᴱ*
https://chat.whatsapp.com/KnQXMl0VGec71K9K42Vaon

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

Si quieres que tu grupo aparezca aca habla con mi creador
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' 𝐆𝐞𝐫𝐚𝐥-𝐁𝐨𝐭 ', 'status@broadcast')
}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i

export default handler
