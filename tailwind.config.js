const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      
      colors:{
        unnamed:'#333333',
        black:"#141414",
        secondary:"#325093",
        neutral:"#384d70",
        blue:'#3D61B0',
        red:'#FF6142',
        grey:'#F6FAFC',
        white:'#FFFFFF'
        
       },
       height:{
       '01':'320px',
       '002':'89px',
       '681':'115px',
       '682':'116.36',
       '683':'166.32',
       '684':'144.47',
       '67':'209px',
       '52':'52px',
       '640':'640px',
       '511':'511px',
       '22':'22.33px',
       '11':'11.08px'
     
       },
       width:{
         '1920':'1920px',
         '674':'674px',
         '90':'90px',
         '010':'812px',
         '001':'400px',
         '230':'230px',
         '44':'44px',
         '681':'115px',
         '682':'189.13',
         '683':'153.72',
         '684':'163.14',
         '243':'243px',
         '1640':'1640px',
         '22':'22.33px',
        

         
        
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
      padding: {
        '17':'17px',
        '38': '38px',
        '31':'31px',
        '101':'101.22',
        '37':'37px',
        '1':'16px',
        '45':'71.45px',
        '00':'4px'
      },
      margin:{
        '98':'98px',
        '17':'17px',
        '35':'35px',
        '39':'39px',
        '37':'37px',
        '60':'60px',
        '102':'71px',
        '88':'57px',
        '77':'46px',
        '82':'82px',
        '140':'140px',
        '146':'146px',
        '46':'46px',
         '00':'2px',
        '117':'117px',
        '29':'29px',
        '35':'35px',
        '43':'43px',
        '79':'79px',
        '76':'76px',
        '106':'106px'
      },
      borderWidth: {
        '5': '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },

  },
  plugins: [],
}
