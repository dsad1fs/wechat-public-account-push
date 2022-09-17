export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxb3a82a13d5e8bc4e",
    // 公众号appSecret
    appSecret: "205508883f4bab9b7d70538a51e81f65",
    // 模板消息id
    templateId: "1PHRSgS2uJfCVSv-4Kf4Eb0H7cRv6PFjNr_Aww-fehw",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [o4Ak26vdCv4j_P3ZvuI8FRixkJ-4],
     
    // 信息配置
    // 所在省份
    province: "四川",
    // 所在城市
    city: "遂宁",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "2001", "date": "07-13", "type": 'new'},
      {"name": "家公", "year": "2001", "date": "04-21", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-07-21",
    // 恋爱纪念日
    marryDate: "2022-07-21"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们恩爱的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
