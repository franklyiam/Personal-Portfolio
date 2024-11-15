"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6260],{6260:(C,d,s)=>{s.r(d),s.d(d,{HomePageModule:()=>T});var h=s(6814),o=s(3582),l=s(95),m=s(3044),e=s(6689),Z=s(9862);function f(i,A){if(1&i&&(e.ynx(0),e.TgZ(1,"ion-card",7)(2,"ion-item")(3,"ion-label"),e._uU(4),e.ALo(5,"date"),e.qZA(),e._UZ(6,"img",26),e.TgZ(7,"ion-label"),e._uU(8),e.qZA()()(),e.BQk()),2&i){const n=A.$implicit;e.xp6(4),e.Oqu(e.xi3(5,4,n.date,"EEE, d MMM")),e.xp6(2),e.Q6J("src",n.weatherIcon,e.LSH),e.xp6(2),e.AsE("",(n.maxTemp-273.15).toFixed(0),"\xb0/",(n.minTemp-273.15).toFixed(0),"\xb0")}}const p="0e02ee60add605f55e7550992577d472",u="https://api.openweathermap.org/data/2.5/",y=[{path:"",component:(()=>{class i{constructor(n){this.httpClient=n,this.todayWeather={coord:{lon:0,lat:0},weather:[{id:0,main:"",description:"",icon:""}],base:"",main:{temp:0,feels_like:0,temp_min:0,temp_max:0,pressure:0,humidity:0,sea_level:0,grnd_level:0},visibility:0,wind:{speed:0,deg:0,gust:0},rain:{oneHour:0},clouds:{all:0},dt:0,sys:{type:0,id:0,country:"",sunrise:0,sunset:0},timezone:0,id:0,name:"",cod:0},this.fiveDayForecast={cod:0,message:0,cnt:0,list:[{dt:0,main:{temp:0,feels_like:0,temp_min:0,temp_max:0,pressure:0,sea_level:0,grnd_level:0,humidity:0,temp_kf:0},weather:[{id:0,main:"",description:"",icon:""}],clouds:{all:0},wind:{speed:0,deg:0,gust:0},visibility:0,pop:0,rain:{threeHour:0},sys:{pod:""},dt_txt:""}],city:{id:0,name:"",coord:{lat:0,lon:0},country:"",population:0,timezone:0,sunrise:0,sunset:0}},this.currentDate=new Date,this.currentWeatherIcon="",this.CityName="",this.currentTemp=0,this.high=0,this.low=0,this.weatherDescr="",this.feelsLike=0,this.humidity=0,this.clouds=0,this.wind=0,this.visibility=0,this.sunrise=0,this.sunset=0,this.DayForecast={date:"",weatherIcon:"",minTemp:0,maxTemp:0},this.dFiveDayForecast=[]}loadWeatherData(){this.httpClient.get(`${p}/weather?q=${this.CityName}&appid=${u}`).subscribe(n=>{this.todayWeather=n,this.CityName=this.todayWeather.name,this.currentWeatherIcon=`https://openweathermap.org/img/wn/${this.todayWeather.weather[0].icon}@4x.png`,this.currentTemp=this.todayWeather.main.temp,this.high=this.todayWeather.main.temp_max,this.low=this.todayWeather.main.temp_min,this.feelsLike=this.todayWeather.main.feels_like,this.humidity=this.todayWeather.main.humidity,this.clouds=this.todayWeather.clouds.all,this.wind=this.todayWeather.wind.speed,this.visibility=this.todayWeather.visibility,this.weatherDescr=this.todayWeather.weather[0].description,this.sunrise=this.todayWeather.sys.sunrise,this.sunset=this.todayWeather.sys.sunset,this.httpClient.get(`${p}/forecast?lat=${this.todayWeather.coord.lat}&lon=${this.todayWeather.coord.lon}&appid=${u}`).subscribe(a=>{this.fiveDayForecast=a,this.fiveDayForecast.list.forEach(r=>{const b=new Date(r.dt_txt).toISOString().split("T")[0],x=(new Date).toISOString().split("T")[0];var c={date:b,weatherIcon:`https://openweathermap.org/img/wn/${r.weather[0].icon}@4x.png`,minTemp:r.main.temp_min,maxTemp:r.main.temp_max};c.date!==x&&!this.dFiveDayForecast.some(U=>U.date===c.date)&&(this.dFiveDayForecast.push(c),console.log("iDay Pretoria: "+c.date))})})})}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(Z.eN))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],decls:109,vars:26,consts:[[3,"fullscreen"],[2,"text-align","center","margin","15px"],[2,"font-weight","400","font-size","1.5em"],["placeholder","Search for city","animated","",1,"searchBar",3,"ngModel","ngModelChange"],[2,"text-align","center"],["id","locationIcon","name","location"],["id","location"],[1,"card"],["lines","none"],["slot","start",2,"font-weight","500","color","white"],["id","date","slot","end"],["slot","end","width","180spx","height","200px",3,"src"],["id","temp"],[2,"font-size","1.5em","font-weight","bold","color","#f6b844","margin-bottom","25px"],[2,"text-transform","capitalize"],["size","8"],["id","date"],["size","4"],["size","6"],["name","thermometer-outline",2,"color","#f6b844"],["name","compass-sharp",2,"color","#f6b844"],["name","eye-sharp",2,"color","#f6b844"],["name","cloud-sharp",2,"color","#f6b844"],["name","sunny-sharp",2,"color","#f6b844"],["name","moon-sharp",2,"color","#f6b844"],[4,"ngFor","ngForOf"],["slot","end","width","40px","height","40px",3,"src"]],template:function(a,t){1&a&&(e.TgZ(0,"ion-content",0)(1,"div")(2,"div",1)(3,"ion-label",2),e._uU(4,"Weathered Up"),e.qZA()(),e.TgZ(5,"ion-searchbar",3),e.NdJ("ngModelChange",function(g){return t.CityName=g})("ngModelChange",function(){return t.loadWeatherData()}),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"ion-icon",5),e.TgZ(8,"span",6),e._uU(9),e.qZA()(),e.TgZ(10,"ion-card",7)(11,"ion-item",8)(12,"p",9),e._uU(13," Today's Forecast "),e.qZA(),e.TgZ(14,"ion-label",10),e._uU(15),e.ALo(16,"date"),e.qZA()(),e.TgZ(17,"ion-item",8),e._UZ(18,"img",11),e.TgZ(19,"span",12),e._uU(20),e.qZA(),e.TgZ(21,"span",13),e._uU(22,"o"),e.qZA()(),e.TgZ(23,"ion-item",8)(24,"ion-label",14),e._uU(25),e.qZA(),e.TgZ(26,"ion-label",10),e._uU(27),e.qZA()(),e.TgZ(28,"ion-row")(29,"ion-col",15)(30,"ion-item",8)(31,"span",16),e._uU(32,"High:"),e.qZA(),e.TgZ(33,"ion-label"),e._uU(34),e.qZA()()(),e.TgZ(35,"ion-col",17)(36,"ion-item",8)(37,"span",16),e._uU(38,"Low:"),e.qZA(),e.TgZ(39,"ion-label"),e._uU(40),e.qZA()()()()(),e.TgZ(41,"div",4)(42,"span",6),e._uU(43,"Current Conditions"),e.qZA()(),e.TgZ(44,"ion-row")(45,"ion-col",18)(46,"ion-card",7)(47,"ion-item",8),e._UZ(48,"ion-icon",19),e.TgZ(49,"span",16),e._uU(50,"Humidity:"),e.qZA()(),e.TgZ(51,"ion-item")(52,"ion-label"),e._uU(53),e.qZA()()()(),e.TgZ(54,"ion-col",18)(55,"ion-card",7)(56,"ion-item",8),e._UZ(57,"ion-icon",20),e.TgZ(58,"span",16),e._uU(59,"\xa0Wind:"),e.qZA()(),e.TgZ(60,"ion-item",8)(61,"ion-label"),e._uU(62),e.qZA()()()()(),e.TgZ(63,"ion-row")(64,"ion-col",18)(65,"ion-card",7)(66,"ion-item",8),e._UZ(67,"ion-icon",21),e.TgZ(68,"span",16),e._uU(69," \xa0Visibility:"),e.qZA()(),e.TgZ(70,"ion-item")(71,"ion-label"),e._uU(72),e.qZA()()()(),e.TgZ(73,"ion-col",18)(74,"ion-card",7)(75,"ion-item",8),e._UZ(76,"ion-icon",22),e.TgZ(77,"span",16),e._uU(78,"\xa0Cloudiness:"),e.qZA()(),e.TgZ(79,"ion-item")(80,"ion-label"),e._uU(81),e.qZA()()()()(),e.TgZ(82,"div",4)(83,"span",6),e._uU(84,"Sunrise & Sunset"),e.qZA()(),e.TgZ(85,"ion-card",7)(86,"ion-row")(87,"ion-col",18)(88,"ion-item",8),e._UZ(89,"ion-icon",23),e.TgZ(90,"span",16),e._uU(91,"\xa0Sunrise:"),e.qZA()(),e.TgZ(92,"ion-item",8)(93,"ion-label"),e._uU(94),e.ALo(95,"date"),e.qZA()()(),e.TgZ(96,"ion-col",18)(97,"ion-item",8),e._UZ(98,"ion-icon",24),e.TgZ(99,"span",16),e._uU(100,"\xa0Sunset:"),e.qZA()(),e.TgZ(101,"ion-item",8)(102,"ion-label"),e._uU(103),e.ALo(104,"date"),e.qZA()()()()(),e.TgZ(105,"div",4)(106,"span",6),e._uU(107,"5 Day Weather Forecast"),e.qZA()(),e.YNc(108,f,9,7,"ng-container",25),e.qZA()()),2&a&&(e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngModel",t.CityName),e.xp6(4),e.Oqu(t.CityName),e.xp6(6),e.Oqu(e.xi3(16,17,t.currentDate,"EEE dd MMM, hh:mm a")),e.xp6(3),e.Q6J("src",t.currentWeatherIcon,e.LSH),e.xp6(2),e.hij(" ",(t.currentTemp-273.15).toFixed(0)," "),e.xp6(5),e.Oqu(t.weatherDescr),e.xp6(2),e.hij(" Feels Like ",(t.feelsLike-273.15).toFixed(0),"\xb0 "),e.xp6(7),e.hij("\xa0",(t.high-273.15).toFixed(0),"\xb0"),e.xp6(6),e.hij("\xa0",(t.low-273.15).toFixed(0),"\xb0"),e.xp6(13),e.hij("\xa0",t.humidity,"%"),e.xp6(9),e.hij("\xa0",(3.6*t.wind).toFixed(2)," km/h"),e.xp6(10),e.hij("\xa0",t.visibility,"m"),e.xp6(9),e.hij("\xa0",t.clouds,"%"),e.xp6(13),e.hij("\xa0",e.xi3(95,20,1e3*t.sunrise,"hh:mm a"),""),e.xp6(9),e.hij("\xa0",e.xi3(104,23,1e3*t.sunset,"hh:mm a"),""),e.xp6(5),e.Q6J("ngForOf",t.dFiveDayForecast))},dependencies:[h.sg,l.JJ,l.On,o.PM,o.wI,o.W2,o.gu,o.Ie,o.Q$,o.Nd,o.VI,o.j9,h.uU],styles:["#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}.searchBar[_ngcontent-%COMP%]{--ion-background-color: #225177;padding:15px 15px 0;color:#fff}searchbar-search-icon.sc-ion-searchbar-md[_ngcontent-%COMP%]{color:#fff!important}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#temp[_ngcontent-%COMP%]{font-weight:300;font-size:4em;color:#fff;margin:5px}#location[_ngcontent-%COMP%]{color:#fff}#locationIcon[_ngcontent-%COMP%]{color:#f6b844;margin-top:30px}#date[_ngcontent-%COMP%]{color:#f6b844}.detailCard[_ngcontent-%COMP%]{background:#225177;border-radius:20px}.detailCard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-weight:300}.card[_ngcontent-%COMP%]{background:#225177;border-radius:20px}"]})}return i})()}];let _=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(y),m.Bz]})}return i})(),T=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[h.ez,l.u5,o.Pc,_]})}return i})()}}]);