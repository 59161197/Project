const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = [ 
{name:"yuyi",phoneNumber:"0633782124"},
{name:"ศูนย์ดับเพลิงศรีอยุธยา",phoneNumber:"199"},
{name:"หน่วยแพทย์กู้ชีพ กทม.",phoneNumber:"1554"},
{name:"กองปราบปราม ",phoneNumber:"1195"},
{name:"ตำรวจทางหลวง",phoneNumber:"1193"},
{name:"สายด่วนกรมทางหลวง",phoneNumber:"1586"},
{name:"ตำรวจท่องเที่ยว ",phoneNumber:"1155"},
{name:"ศูนย์นเรนทร",phoneNumber:"0633782124"},
{name:"ศูนย์รับแจ้งอุบัติเหตุ 24 ชม.",phoneNumber:"1669"},
{name:"ศูนย์ควบคุมระบบการจราจรบนทางด่วน",phoneNumber:"1543"},
{name:"ศูนย์วิทยุปอเต็กตึ๊ง 24 ชม.",phoneNumber:" 0-2226-4444-8"},
{name:"ศูนย์ส่งกลับและรถพยาบาลกรมตำรวจ ",phoneNumber:"1691"},
{name:"ศูนย์จราจรอุบัติเหตุ จส.100",phoneNumber:"1137"},
{name:"ศูนย์ควบคุมและสั่งการจราจร",phoneNumber:"1197"},
{name:"ศูนย์คุ้มครองผู้โดยสารสาธารณะ",phoneNumber:"1584"},
]

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts




app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
