const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./*.html'],
  theme: {
   
    screens:{
      xs:'260',
      sm:'360px',
      md:'1080px',
      lg:'1580px',
      xl:'1920px'
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      spacing:{
        '22.25':'89px',
        '41.5':'166.32',
        '50.22':'209px',
        '127.75':'511px',
        '110.5':'442.35px',
        '480':'1920px',
        '203':'812px',
        '100':'400px',
        '57.5':'230px',
        '38.43':'153.72',
        '60.75':'243px',
        '22':'22.33px',
        '180.25'  :'721.71px'  ,
        '4.25':'17px',
        '9.5': '38px',
        '7.75':'31px',
        '25.30':'101.22',
        '17.75':'71.45px',
        '34':'136px',
        '35.5':'142px',
        '8.20':'32.82px',
        '24.5':'98px',
        '4.25':'17px',
        '9.75':'29px',
        '9.25':'37px',
        '15':'60px',
        '17.75':'71px',
        '14.25':'57px',
        '11.5':'46px',
        '35':'140px',
        '36.5':'146px',
        '11.5':'46px',
         '0.5':'2px',
        '29.25':'117px',
        '7.5':'25px',
        '10.75':'39px',
        '19.75':'73px',
        '19':'76px',
        '26.5':'103px',
        '28.5':'114px',
        '9.5':'38px',
        '24.75':'99px',
        '18.5'  :'74px',
        '24.5':'98.65px',
        '40.5':'162px',
        '168.5':'674px'
  
      },
      
      colors:{
        unnamed:'#333333',
        black:"#141414",
        secondary:"#325093",
        neutral:"#384d70",
        blue:'#3D61B0',
        red:'#FF6142',
        grey:'#F6FAFC',
        white:'#FFFFFF',
        yello:'#FFDB0A'
        
       },
       fontSize: {
        'smr': ['14px', {
          lineHeight: '20px',
        },
      ],
      'smr0':[
        '15px',
        {
          lineHeight:'23px'
        }
      ],
      'smr1':[
        '16px',
        {
          lineHeight:'22px'
        }
      ],
      'smr2':[
        '18px',
        {
          lineHeight:'27px'
        }
      ],
      'smr3':[
        '24px',
        {
          lineHeight:'35px'
        }
      ],
      'smr4':[
        '18px',
        {
          lineHeight:'27px'
        }
      ],
      'smr5':[
        '34px',
        {
          lineHeight:'62px'
        }
      ],
      'smr6':[
        '44px',
        {
          lineHeight:'62px'
        }
      ],
      'smr7':[
        '16px',
        {
          lineHeight:'25px'
        }
      ],
      'smr8':[
        '12px',
        {
          lineHeight:'18px'
        }
      ],
      'smr9':[
        '16px',
        {
          lineHeight:'22px'
        }
      ],
      },
      
      borderWidth: {
        '0.25': '1px',
       
      }
    },

  },
  plugins: [],
}
