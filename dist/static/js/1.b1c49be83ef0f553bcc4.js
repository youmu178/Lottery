webpackJsonp([1],{h02x:function(t,e){},nqwr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),l=a.n(s),n=a("exGp"),i=a.n(n),o=a("3pLw"),r=a("BTaQ");function _(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in function(t){if(""!==t&&null!=t&&void 0!==t)return!0;return console.warn("argument format is wrong"),!1}(e)||(e="yyyy-MM-dd hh:mm:ss"),/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[s]:("00"+a[s]).substr((""+a[s]).length)));return e}function c(t,e){for(var a="",s=0,l=0;l<t.length;l++)s>0&&(a+=e),a+=t[l],s++;return a}var d=function(t,e){return _(t,e)},u=function(t){return c(t,",")},b=function(t){return c(t," ")},h=function(t){!function(t){r.Message.info(t)}(t)},p=function(t){!function(t){r.Message.info(t)}(t)},x={data:function(){return{loading:!1,value_number:"",value_number_placeholder:"号码格式01 02 03 04 05",value_numbers:"",value_number_select:"m2",value_number_select_disabled:!1,sxDialog:!1,sx_type:[],sx_sc:[],sx_dd:[],sx_dxb:[],sx_qob:[],tableLoading:!0,sxSwitch:!1,sxBtnDisable:!0,zhuNum:"0",tableColumnsNum:[{title:"M0",key:"num_m0",className:"table-info-column-m0"},{title:"M1",key:"num_m1",className:"table-info-column-m1"},{title:"M2",key:"num_m2",className:"table-info-column-m2"},{title:"M3",key:"num_m3",className:"table-info-column-m3"},{title:"M4",key:"num_m4",className:"table-info-column-m4"}],tableColumns:[{title:"期号",key:"data_period",align:"center",sortable:!0,sortType:"desc",fixed:"left",width:105},{title:"开奖号码",align:"center",key:"data_award",width:160},{title:"类型",align:"center",key:"data_type",width:100},{title:"大小比",align:"center",key:"data_size",width:100},{title:"奇偶比",align:"center",key:"data_qiou",width:100},{title:"质合比",align:"center",key:"data_zhihe",width:100}],tableData:[],tableDataNum:[]}},computed:{},mounted:function(){this.getOpenData(),setInterval(this.getOpenData,3e4)},methods:{sxSwichChange:function(t){this.sxBtnDisable=!t,this.value_number_select_disabled=t},sxDialogClick:function(){this.sxDialog=!0},sxTypeChange:function(t){this.sx_type=t},sxShaiChuChange:function(t){this.sx_sc=t},sxDingDanChange:function(t){this.sx_dd=t},sxDaXiaoBiChange:function(t){this.sx_dxb=t},sxQiOuBiChange:function(t){this.sx_qob=t},ok:function(){this.sx_type&&(this.value_number_select_disabled=!0)},cancel:function(){this.$Message.info("您的筛选操作取消啦"),this.sxBtnDisable=!0,this.sxSwitch=!1,this.sx_type=[],this.sx_sc=[],this.sx_dd=[],this.sx_dxb=[],this.sx_qob=[],this.value_number_select_disabled=!1},toLoading:function(){var t=i()(l.a.mark(function t(){var e,a,s,n,i,r,_,c,d;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading=!0,e=this.value_number,/^(\d{2}\s)+\d{2}$/.test(e)){t.next=7;break}this.$Message.warning("格式不正确，例如01 02 03 04 05"),t.next=26;break;case 7:if(this.loading=!0,a=void 0,!1!==this.value_number_select_disabled){t.next=13;break}a=this.value_number_select,t.next=20;break;case 13:if(0!==this.sx_type.length){t.next=19;break}return this.$Message.warning("筛选已开，至少要选类型"),this.loading=!1,t.abrupt("return");case 19:a=u(this.sx_type);case 20:return s=b(this.sx_sc),n={type:a,numbers:e.replace(/ /g,","),sc:s,dd:b(this.sx_dd),dxb:u(this.sx_dxb),qob:u(this.sx_qob)},t.next=24,o.a.post("/lottery",n);case 24:if(i=t.sent,o.a.isSuccess){for(this.loading=!1,r=i.listData,_="",c=0,d=0;d<r.length;d++)c>0&&(_+="\n"),_+=r[d].number,c++;this.zhuNum=c,this.value_numbers=_,this.sxBtnDisable=!0,this.sxSwitch=!1,this.sx_type=[],this.sx_sc=[],this.sx_dd=[],this.sx_dxb=[],this.sx_qob=[],this.value_number_select_disabled=!1}case 26:this.loading=!1;case 27:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getOpenData:function(){var t=i()(l.a.mark(function t(){var e,a,s,n,i,r,_,c,u,b,h,p,x,v,m,g,y,f;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=d(new Date,"yyyyMMdd"),this.tableLoading=!0,a={date:e},t.next=5,o.a.post("/lottery/getOpenData",a);case 5:if(s=t.sent,o.a.isSuccess){for(n=s.listData,i=[],r=[],_=0,c=0,u=0,b=0,h=0,p=0;p<n.length;p++)x=n[p].data_type,v=n[p].data_period,m=n[p].data_award,g=n[p].data_size,y=n[p].data_qiou,f=n[p].data_zhihe,"M1"===x?(c++,i.push({data_period:v,data_award:m,data_type:x,data_size:g,data_qiou:y,data_zhihe:f,cellClassName:{data_type:"table-info-cell-type1"}})):"M2"===x?(u++,i.push({data_period:v,data_award:m,data_type:x,data_size:g,data_qiou:y,data_zhihe:f,cellClassName:{data_type:"table-info-cell-type2"}})):"M3"===x?(b++,i.push({data_period:v,data_award:m,data_type:x,data_size:g,data_qiou:y,data_zhihe:f,cellClassName:{data_type:"table-info-cell-type3"}})):"M4"===x?(h++,i.push({data_period:v,data_award:m,data_type:x,data_size:g,data_qiou:y,data_zhihe:f,cellClassName:{data_type:"table-info-cell-type4"}})):(_++,i.push({data_period:v,data_award:m,data_type:x,data_size:g,data_qiou:y,data_zhihe:f}));r.push({num_m0:_,num_m1:c,num_m2:u,num_m3:b,num_m4:h}),this.tableData=i,this.tableDataNum=r,this.tableLoading=!1,this.value_number=i[i.length-1].data_award}case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),doCopy:function(){this.$copyText(this.value_numbers).then(function(t){h("组选号码已经复制到剪贴板")},function(t){p("复制失败")})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{attrs:{gutter:30,type:"flex",align:"middle"}},[a("Col",{style:{marginTop:"20px"},attrs:{md:24,lg:9}},[a("Row",{attrs:{type:"flex",align:"middle"}},[a("Col",{attrs:{span:"18"}},[a("Input",{attrs:{placeholder:t.value_number_placeholder,maxlength:20,size:"large"},model:{value:t.value_number,callback:function(e){t.value_number=e},expression:"value_number"}},[a("Select",{staticStyle:{width:"66px"},attrs:{slot:"append",disabled:t.value_number_select_disabled},slot:"append",model:{value:t.value_number_select,callback:function(e){t.value_number_select=e},expression:"value_number_select"}},[a("Option",{attrs:{value:"m0"}},[t._v("M0")]),t._v(" "),a("Option",{attrs:{value:"m1"}},[t._v("M1")]),t._v(" "),a("Option",{attrs:{value:"m2"}},[t._v("M2")]),t._v(" "),a("Option",{attrs:{value:"m3"}},[t._v("M3")]),t._v(" "),a("Option",{attrs:{value:"m4"}},[t._v("M4")])],1)],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Button",{style:{width:"80px",margin:"5px"},attrs:{type:"primary",loading:t.loading},on:{click:t.toLoading}},[t.loading?a("span",[t._v("加载中")]):a("span",[t._v("执行")])])],1)],1)],1),t._v(" "),a("Col",{style:{marginTop:"20px"},attrs:{md:24,lg:15}},[a("Row",{attrs:{type:"flex",align:"middle",gutter:10}},[a("Col",[a("i-switch",{on:{"on-change":t.sxSwichChange},model:{value:t.sxSwitch,callback:function(e){t.sxSwitch=e},expression:"sxSwitch"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),t._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),t._v(" "),a("Col",[a("Button",{attrs:{disabled:t.sxBtnDisable},on:{click:t.sxDialogClick}},[t._v("筛选")]),t._v(" "),a("Modal",{attrs:{title:"筛选条件",styles:{top:"20px"},width:"600"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.sxDialog,callback:function(e){t.sxDialog=e},expression:"sxDialog"}},[a("p",{staticStyle:{"font-weight":"bold"}},[t._v("类型:")]),t._v(" "),a("Card",{style:{marginTop:"10px"}},[a("CheckboxGroup",{attrs:{size:"large"},on:{"on-change":t.sxTypeChange},model:{value:t.sx_type,callback:function(e){t.sx_type=e},expression:"sx_type"}},[a("Checkbox",{attrs:{label:"m0"}},[a("span",[t._v("M0")])]),t._v(" "),a("Checkbox",{attrs:{label:"m1"}},[a("span",[t._v("M1")])]),t._v(" "),a("Checkbox",{attrs:{label:"m2"}},[a("span",[t._v("M2")])]),t._v(" "),a("Checkbox",{attrs:{label:"m3"}},[a("span",[t._v("M3")])]),t._v(" "),a("Checkbox",{attrs:{label:"m4"}},[a("span",[t._v("M4")])])],1)],1),t._v(" "),a("br"),t._v(" "),a("p",{staticStyle:{"font-weight":"bold"}},[t._v("筛除号码:")]),t._v(" "),a("Card",{style:{marginTop:"10px"}},[a("CheckboxGroup",{attrs:{size:"large"},on:{"on-change":t.sxShaiChuChange},model:{value:t.sx_sc,callback:function(e){t.sx_sc=e},expression:"sx_sc"}},[a("Checkbox",{attrs:{label:"01"}}),t._v(" "),a("Checkbox",{attrs:{label:"02"}}),t._v(" "),a("Checkbox",{attrs:{label:"03"}}),t._v(" "),a("Checkbox",{attrs:{label:"04"}}),t._v(" "),a("Checkbox",{attrs:{label:"05"}}),t._v(" "),a("Checkbox",{attrs:{label:"06"}}),t._v(" "),a("Checkbox",{attrs:{label:"07"}}),t._v(" "),a("Checkbox",{attrs:{label:"08"}}),t._v(" "),a("Checkbox",{attrs:{label:"09"}}),t._v(" "),a("Checkbox",{attrs:{label:"10"}}),t._v(" "),a("Checkbox",{attrs:{label:"11"}})],1)],1),t._v(" "),a("br"),t._v(" "),a("p",{staticStyle:{"font-weight":"bold"}},[t._v("定胆号码:")]),t._v(" "),a("Card",{style:{marginTop:"10px"}},[a("CheckboxGroup",{attrs:{size:"large"},on:{"on-change":t.sxDingDanChange},model:{value:t.sx_dd,callback:function(e){t.sx_dd=e},expression:"sx_dd"}},[a("Checkbox",{attrs:{label:"01"}}),t._v(" "),a("Checkbox",{attrs:{label:"02"}}),t._v(" "),a("Checkbox",{attrs:{label:"03"}}),t._v(" "),a("Checkbox",{attrs:{label:"04"}}),t._v(" "),a("Checkbox",{attrs:{label:"05"}}),t._v(" "),a("Checkbox",{attrs:{label:"06"}}),t._v(" "),a("Checkbox",{attrs:{label:"07"}}),t._v(" "),a("Checkbox",{attrs:{label:"08"}}),t._v(" "),a("Checkbox",{attrs:{label:"09"}}),t._v(" "),a("Checkbox",{attrs:{label:"10"}}),t._v(" "),a("Checkbox",{attrs:{label:"11"}})],1)],1),t._v(" "),a("br"),t._v(" "),a("p",{staticStyle:{"font-weight":"bold"}},[t._v("筛除大小比:")]),t._v(" "),a("Card",{style:{marginTop:"10px"}},[a("CheckboxGroup",{attrs:{size:"large"},on:{"on-change":t.sxDaXiaoBiChange},model:{value:t.sx_dxb,callback:function(e){t.sx_dxb=e},expression:"sx_dxb"}},[a("Checkbox",{attrs:{label:"0:5"}},[a("span",[t._v("0 : 5")])]),t._v(" "),a("Checkbox",{attrs:{label:"1:4"}},[a("span",[t._v("1 : 4")])]),t._v(" "),a("Checkbox",{attrs:{label:"2:3"}},[a("span",[t._v("2 : 3")])]),t._v(" "),a("Checkbox",{attrs:{label:"3:2"}},[a("span",[t._v("3 : 2")])]),t._v(" "),a("Checkbox",{attrs:{label:"4:1"}},[a("span",[t._v("4 : 1")])]),t._v(" "),a("Checkbox",{attrs:{label:"5:0"}},[a("span",[t._v("5 : 0")])])],1)],1),t._v(" "),a("br"),t._v(" "),a("p",{staticStyle:{"font-weight":"bold"}},[t._v("筛除奇偶比:")]),t._v(" "),a("Card",{style:{marginTop:"10px"}},[a("CheckboxGroup",{attrs:{size:"large"},on:{"on-change":t.sxQiOuBiChange},model:{value:t.sx_qob,callback:function(e){t.sx_qob=e},expression:"sx_qob"}},[a("Checkbox",{attrs:{label:"0:5"}},[a("span",[t._v("0 : 5")])]),t._v(" "),a("Checkbox",{attrs:{label:"1:4"}},[a("span",[t._v("1 : 4")])]),t._v(" "),a("Checkbox",{attrs:{label:"2:3"}},[a("span",[t._v("2 : 3")])]),t._v(" "),a("Checkbox",{attrs:{label:"3:2"}},[a("span",[t._v("3 : 2")])]),t._v(" "),a("Checkbox",{attrs:{label:"4:1"}},[a("span",[t._v("4 : 1")])]),t._v(" "),a("Checkbox",{attrs:{label:"5:0"}},[a("span",[t._v("5 : 0")])])],1)],1),t._v(" "),a("br")],1)],1)],1)],1)],1),t._v(" "),a("Row",{attrs:{gutter:30}},[a("Col",{style:{marginTop:"20px"},attrs:{md:8,lg:9}},[a("Card",{style:{padding:"0px, 0px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("组选号码")]),t._v(" "),a("a",{attrs:{slot:"extra",href:"#"},on:{click:t.doCopy},slot:"extra"},[a("Icon",{attrs:{type:"clipboard"}}),t._v("\n                复制\n            ")],1),t._v(" "),a("Input",{style:{width:"100%"},attrs:{type:"textarea",rows:17,placeholder:"预测号码",readonly:!0},model:{value:t.value_numbers,callback:function(e){t.value_numbers=e},expression:"value_numbers"}}),t._v(" "),a("br"),t._v(" "),a("p",{style:{marginTop:"10px",textAlign:"center"}},[t._v("共"+t._s(t.zhuNum)+"组")])],1)],1),t._v(" "),a("Col",{attrs:{md:16,lg:15}},[a("Row",{style:{marginTop:"16px"},attrs:{type:"flex",align:"middle"}},[a("Col",[a("p",{staticClass:"card-title"},[a("Icon",{attrs:{type:"android-list"}}),t._v("\n              今日开奖列表\n            ")],1)]),t._v(" "),a("Col",[a("p",{staticStyle:{"text-align":"right",color:"#abafbd"}},[t._v("*自动会刷新")])])],1),t._v(" "),a("div",{style:{marginTop:"10px"}},[a("Table",{attrs:{border:"",stripe:"",loading:t.tableLoading,height:"444",columns:t.tableColumns,data:t.tableData}})],1)],1)],1),t._v(" "),a("Row",[a("Col",[a("div",{style:{marginTop:"10px"}},[a("Row",{attrs:{type:"flex",justify:"start"}},[a("Col",[a("Tooltip",{attrs:{placement:"right","max-width":"1000"}},[a("a",{staticClass:"table-num-title",attrs:{href:"#"},on:{click:function(e){t.table_num_modal=!0}}},[t._v("今日类型出现次数\n                                    "),a("Icon",{attrs:{type:"help-circled"}})],1),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v("------")]),t._v(" "),a("p",[t._v("据每天的数据观察:")]),t._v(" "),a("p",[t._v(" M2 M3两者相加出现的次数在65次左右")]),t._v(" "),a("p",[t._v("------")])])])],1)],1),t._v(" "),a("Table",{style:{marginTop:"10px"},attrs:{border:"",stripe:"",columns:t.tableColumnsNum,data:t.tableDataNum}})],1)])],1)],1)},staticRenderFns:[]};var m=a("VU/8")(x,v,!1,function(t){a("h02x")},null,null);e.default=m.exports}});