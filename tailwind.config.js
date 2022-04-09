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
        grey:'#F6FAFC'
        
        
       },
       height:{
       '01':'320px',
       '002':'89px',
       '681':'115px',
       '682':'116.36',
       '683':'166.32',
       '684':'144.47',
       '67':'209px'
       },
       width:{
         '90':'90px',
         '010':'812px',
         '001':'400px',
         '230':'230px',
         '44':'44px',
         '681':'115px',
         '682':'189.13',
         '683':'153.72',
         '684':'163.14',
         '243':'243px'
         
        
       },
       fontSize: {
        'smr': ['14px', {
          lineHeight: '20px',
        },
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
      ]
      },
      padding: {
        '17':'17px',
        '38': '38px',
        '31':'31px',
        '101':'101.22',
        '37':'37px',
        '1':'16px'
        
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

        '117':'117px'
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
