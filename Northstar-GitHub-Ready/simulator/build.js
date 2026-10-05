const fs=require('fs'),path=require('path');
const read=f=>fs.readFileSync(path.join(__dirname,f),'utf8');
const html=read('index.html').replace('<link rel="stylesheet" href="style.css">','<style>'+read('style.css')+'</style>').replace('<script src="app.js"></script>','<script>'+read('app.js').replace(/<\/script/gi,'<\\/script')+'</script>');
fs.writeFileSync(path.join(__dirname,'Northstar IT Lab.html'),html);
console.log('Standalone app built. Open Northstar IT Lab.html in Edge or Chrome.');
