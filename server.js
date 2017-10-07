const express = require('express')  /*ภาษาjava scrip*/ /*constเป็นการกำหนดวิธีการเก็บตัแรปรอย่างหนึ่ง เก็บแล้วแก้ไขไม่ได้ ตัวแปรคือ express*/
const { twig } = require('twig')

const app = express() /*สั่งให้รันฟังชัน expressในapp*/

app.set('view engine', 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)

//app.get('/', function(req,res){ /*function is callback*/ '/'เป็นเสาน์ที่เรียกว่าเราต้องไปดึงจากไหนมาไหนบ้าง
	//res.send('Hello') /*ตัวแสดงข้อมูล*/
//})

app.use('/assets', express.static(__dirname + '/static/assets',{
	maxAge: 86400000
}))

app.listen(8000, function(err){  
	console.log('Server is running on the port 8000') /*console.log เป้นการแสดงค่าตัวที่รันออกมา*/
})