import cheerio from"./qyg7.js";import"./qyg8.js";import 模板 from"./qyg9.js";import{gbkTool}from"./qyg10.js";function init_test(){console.log("init_test_start");console.log("当前版本号:"+VERSION);console.log(RKEY);console.log(JSON.stringify(rule));console.log("init_test_end")}function pre(){if(typeof rule.预处理==="string"&&rule.预处理&&rule.预处理.trim()){let code=rule.预处理.trim();console.log("执行预处理代码:"+code);if(code.startsWith("js:")){code=code.replace("js:","")}try{eval(code)}catch(e){console.log("预处理执行失败:"+e.message)}}}let rule={};let vercode=typeof pdfl==="function"?"drpy2.1":"drpy2";const VERSION=vercode+" 3.9.46beta12 20230709";const MOBILE_UA="Mozilla/5.0 (Linux; Android 11; M2007J3SC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36";const PC_UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36";const UA="Mozilla/5.0";const UC_UA="Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36";const IOS_UA="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";const RULE_CK="cookie";const CATE_EXCLUDE="首页|留言|APP|下载|资讯|新闻|动态";const TAB_EXCLUDE="猜你|喜欢|下载|剧情|热播";const OCR_RETRY=3;const OCR_API="http://drpy.nokia.press:8028/ocr/drpy/text";if(typeof MY_URL==="undefined"){var MY_URL}var HOST;var RKEY;var fetch;var print;var log;var rule_fetch_params;var fetch_params;var oheaders;var _pdfh;var _pdfa;var _pd;const DOM_CHECK_ATTR=/(url|src|href|-original|-src|-play|-url)$/;const NOADD_INDEX=/:eq|:lt|:gt|:first|:last|^body$|^#/;const URLJOIN_ATTR=/(url|src|href|-original|-src|-play|-url|style)$/;const SELECT_REGEX=/:eq|:lt|:gt|#/g;const SELECT_REGEX_A=/:eq|:lt|:gt/g;if(typeof Object.assign!="function"){Object.assign=function(){var target=arguments[0];for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target}}if(!String.prototype.includes){String.prototype.includes=function(search,start){if(typeof start!=="number"){start=0}if(start+search.length>this.length){return false}else{return this.indexOf(search,start)!==-1}}}if(!Array.prototype.includes){Object.defineProperty(Array.prototype,"includes",{value:function(searchElement,fromIndex){if(this==null){throw new TypeError('"this" is null or not defined')}var o=Object(this);var len=o.length>>>0;if(len===0){return false}var n=fromIndex|0;var k=Math.max(n>=0?n:len-Math.abs(n),0);while(k<len){if(o[k]===searchElement){return true}k++}return false}})}if(typeof String.prototype.startsWith!="function"){String.prototype.startsWith=function(prefix){return this.slice(0,prefix.length)===prefix}}if(typeof String.prototype.endsWith!="function"){String.prototype.endsWith=function(suffix){return this.indexOf(suffix,this.length-suffix.length)!==-1}}Object.prototype.myValues=function(obj){if(obj==null){throw new TypeError("Cannot convert undefined or null to object")}var res=[];for(var k in obj){if(obj.hasOwnProperty(k)){res.push(obj[k])}}return res};if(typeof Object.prototype.values!="function"){Object.prototype.values=function(obj){if(obj==null){throw new TypeError("Cannot convert undefined or null to object")}var res=[];for(var k in obj){if(obj.hasOwnProperty(k)){res.push(obj[k])}}return res}}if(typeof Array.prototype.join!="function"){Array.prototype.join=function(emoji){emoji=emoji||"";let self=this;let str="";let i=0;if(!Array.isArray(self)){throw String(self)+"is not Array"}if(self.length===0){return""}if(self.length===1){return String(self[0])}i=1;str=this[0];for(;i<self.length;i++){str+=String(emoji)+String(self[i])}return str}}String.prototype.rstrip=function(chars){let regex=new RegExp(chars+"$");return this.replace(regex,"")};Array.prototype.append=Array.prototype.push;String.prototype.strip=String.prototype.trim;function 是否正版(vipUrl){let flag=new RegExp("qq.com|iqiyi.com|youku.com|mgtv.com|bilibili.com|sohu.com|ixigua.com|pptv.com|miguvideo.com|le.com|1905.com|fun.tv");return flag.test(vipUrl)}function urlDeal(vipUrl){if(!vipUrl){return""}if(!是否正版(vipUrl)){return vipUrl}if(!/miguvideo/.test(vipUrl)){vipUrl=vipUrl.split("#")[0].split("?")[0]}return vipUrl}function setResult(d){if(!Array.isArray(d)){return[]}VODS=[];d.forEach(function(it){let obj={vod_id:it.url||"",vod_name:it.title||"",vod_remarks:it.desc||"",vod_content:it.content||"",vod_pic:it.pic_url||it.img||""};let keys=Object.keys(it);if(keys.includes("tname")){obj.type_name=it.tname||""}if(keys.includes("tid")){obj.type_id=it.tid||""}if(keys.includes("year")){obj.vod_year=it.year||""}if(keys.includes("actor")){obj.vod_actor=it.actor||""}if(keys.includes("director")){obj.vod_director=it.director||""}if(keys.includes("area")){obj.vod_area=it.area||""}VODS.push(obj)});return VODS}function setResult2(res){VODS=res.list||[];return VODS}function setHomeResult(res){if(!res||typeof res!=="object"){return[]}return setResult(res.list)}function rc(js){if(js==="maomi_aes.js"){var a=CryptoJS.enc.Utf8.parse("625222f9149e961d");var t=CryptoJS.enc.Utf8.parse("5efdtf6060e2o330");return{De:function(word){word=CryptoJS.enc.Hex.parse(word);return CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(word),a,{iv:t,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)},En:function(word){var Encrypted=CryptoJS.AES.encrypt(word,a,{iv:t,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7});return Encrypted.ciphertext.toString()}}}return{}}function maoss(jxurl,ref,key){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));eval(getCryptoJS());try{var getVideoInfo=function(text){return CryptoJS.AES.decrypt(text,key,{iv:iv,padding:CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)};var token_key=key==undefined?"dvyYRQlnPRCMdQSe":key;if(ref){var html=request(jxurl,{headers:{Referer:ref}})}else{var html=request(jxurl)}if(html.indexOf("&btwaf=")!=-1){html=request(jxurl+"&btwaf"+html.match(/&btwaf(.*?)"/)[1],{headers:{Referer:ref}})}var token_iv=html.split('_token = "')[1].split('"')[0];var key=CryptoJS.enc.Utf8.parse(token_key);var iv=CryptoJS.enc.Utf8.parse(token_iv);eval(html.match(/var config = {[\s\S]*?}/)[0]+"");if(!config.url.startsWith("http")){config.url=CryptoJS.AES.decrypt(config.url,key,{iv:iv,padding:CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)}return config.url}catch(e){return""}}function urlencode(str){str=(str+"").toString();return encodeURIComponent(str).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")}function base64Encode(text){return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text))}function base64Decode(text){return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(text))}function md5(text){return CryptoJS.MD5(text).toString()}function encodeStr(input,encoding){encoding=encoding||"gbk";if(encoding.startsWith("gb")){const strTool=gbkTool();input=strTool.encode(input)}return input}function decodeStr(input,encoding){encoding=encoding||"gbk";if(encoding.startsWith("gb")){const strTool=gbkTool();input=strTool.decode(input)}return input}function getCryptoJS(){return'console.log("CryptoJS已装载");'}function getProxyUrl(){if(typeof getProxy==="function"){return getProxy(true)}else{return"http://127.0.0.1:9978/proxy?do=js"}}function forceOrder(lists,key,option){let start=Math.floor(lists.length/2);let end=Math.min(lists.length-1,start+1);if(start>=end){return lists}let first=lists[start];let second=lists[end];if(key){try{first=first[key];second=second[key]}catch(e){}}if(option&&typeof option==="function"){try{first=option(first);second=option(second)}catch(e){}}first+="";second+="";if(first.match(/(\d+)/)&&second.match(/(\d+)/)){let num1=Number(first.match(/(\d+)/)[1]);let num2=Number(second.match(/(\d+)/)[1]);if(num1>num2){lists.reverse()}}return lists}let VODS=[];let VOD={};let TABS=[];let LISTS=[];globalThis.encodeUrl=urlencode;globalThis.urlencode=urlencode;function urljoin(fromPath,nowPath){fromPath=fromPath||"";nowPath=nowPath||"";return joinUrl(fromPath,nowPath)}var urljoin2=urljoin;const defaultParser={pdfh:pdfh,pdfa:pdfa,pd:pd};function pdfh2(html,parse){let html2=html;try{if(typeof html!=="string"){html2=html.rr(html.ele).toString()}}catch(e){print("html对象转文本发生了错误:"+e.message)}let result=defaultParser.pdfh(html2,parse);let option=parse.includes("&&")?parse.split("&&").slice(-1)[0]:parse.split(" ").slice(-1)[0];if(/style/.test(option.toLowerCase())&&/url\(/.test(result)){try{result=result.match(/url\((.*?)\)/)[1]}catch(e){}}return result}function pdfa2(html,parse){let html2=html;try{if(typeof html!=="string"){html2=html.rr(html.ele).toString()}}catch(e){print("html对象转文本发生了错误:"+e.message)}return defaultParser.pdfa(html2,parse)}function pd2(html,parse,uri){let ret=pdfh2(html,parse);if(typeof uri==="undefined"||!uri){uri=""}if(DOM_CHECK_ATTR.test(parse)){if(/http/.test(ret)){ret=ret.substr(ret.indexOf("http"))}else{ret=urljoin(MY_URL,ret)}}return ret}const parseTags={jsp:{pdfh:pdfh2,pdfa:pdfa2,pd:pd2},json:{pdfh(html,parse){if(!parse||!parse.trim()){return""}if(typeof html==="string"){html=JSON.parse(html)}parse=parse.trim();if(!parse.startsWith("$.")){parse="$."+parse}parse=parse.split("||");for(let ps of parse){let ret=cheerio.jp(ps,html);if(Array.isArray(ret)){ret=ret[0]||""}else{ret=ret||""}if(ret&&typeof ret!=="string"){ret=ret.toString()}if(ret){return ret}}return""},pdfa(html,parse){if(!parse||!parse.trim()){return""}if(typeof html==="string"){html=JSON.parse(html)}parse=parse.trim();if(!parse.startsWith("$.")){parse="$."+parse}let ret=cheerio.jp(parse,html);if(Array.isArray(ret)&&Array.isArray(ret[0])&&ret.length===1){return ret[0]||[]}return ret||[]},pd(html,parse){let ret=parseTags.json.pdfh(html,parse);if(ret){return urljoin(MY_URL,ret)}return ret}},jq:{pdfh(html,parse){if(!html||!parse||!parse.trim()){return""}parse=parse.trim();let result=defaultParser.pdfh(html,parse);return result},pdfa(html,parse){if(!html||!parse||!parse.trim()){return[]}parse=parse.trim();let result=defaultParser.pdfa(html,parse);print(`pdfa解析${parse}=>${result.length}`);return result},pd(html,parse,base_url){if(!html||!parse||!parse.trim()){return""}parse=parse.trim();base_url=base_url||MY_URL;return defaultParser.pd(html,parse,base_url)}},getParse(p0){if(p0.startsWith("jsp:")){return this.jsp}else if(p0.startsWith("json:")){return this.json}else if(p0.startsWith("jq:")){return this.jq}else{return this.jq}}};const stringify=JSON.stringify;const jsp=parseTags.jsp;const jq=parseTags.jq;function readFile(filePath){filePath=filePath||"./qyg11.js";var fd=os.open(filePath);var buffer=new ArrayBuffer(1024);var len=os.read(fd,buffer,0,1024);console.log(len);let text=String.fromCharCode.apply(null,new Uint8Array(buffer));console.log(text);return text}function dealJson(html){try{html=html.trim();if(!(html.startsWith("{")&&html.endsWith("}")||html.startsWith("[")&&html.endsWith("]"))){html="{"+html.match(/.*?\{(.*)\}/m)[1]+"}"}}catch(e){}try{html=JSON.parse(html)}catch(e){}return html}var OcrApi={api:OCR_API,classification:function(img){let code="";try{log("通过drpy_ocr验证码接口过验证...");let html=request(OCR_API,{data:{img:img},headers:{"User-Agent":PC_UA},method:"POST"},true);code=html||""}catch(e){log(`OCR识别验证码发生错误:${e.message}`)}return code}};function verifyCode(url){let cnt=0;let host=getHome(url);let cookie="";while(cnt<OCR_RETRY){try{let yzm_url=`${host}/index.php/verify/index.html`;console.log(`验证码链接:${yzm_url}`);let hhtml=request(yzm_url,{withHeaders:true,toBase64:true},true);let json=JSON.parse(hhtml);if(!cookie){let setCk=Object.keys(json).find(it=>it.toLowerCase()==="set-cookie");cookie=setCk?json[setCk].split(";")[0]:""}console.log("cookie:"+cookie);let img=json.body;let code=OcrApi.classification(img);console.log(`第${cnt+1}次验证码识别结果:${code}`);let submit_url=`${host}/index.php/ajax/verify_check?type=search&verify=${code}`;console.log(submit_url);let html=request(submit_url,{headers:{Cookie:cookie,"User-Agent":MOBILE_UA},method:"POST"});html=JSON.parse(html);if(html.msg==="ok"){console.log(`第${cnt+1}次验证码提交成功`);return cookie}else if(html.msg!=="ok"&&cnt+1>=OCR_RETRY){cookie=""}}catch(e){console.log(`第${cnt+1}次验证码提交失败:${e.message}`);if(cnt+1>=OCR_RETRY){cookie=""}}cnt+=1}return cookie}function setItem(k,v){local.set(RKEY,k,v);console.log(`规则${RKEY}设置${k} => ${v}`)}function getItem(k,v){return local.get(RKEY,k)||v}function clearItem(k){local.delete(RKEY,k)}function getHome(url){if(!url){return""}let tmp=url.split("//");url=tmp[0]+"//"+tmp[1].split("/")[0];try{url=decodeURIComponent(url)}catch(e){}return url}function buildUrl(url,obj){obj=obj||{};if(url.indexOf("?")<0){url+="?"}let param_list=[];let keys=Object.keys(obj);keys.forEach(it=>{param_list.push(it+"="+obj[it])});let prs=param_list.join("&");if(keys.length>0&&!url.endsWith("?")){url+="&"}url+=prs;return url}function require(url){eval(request(url))}function request(url,obj,ocr_flag){ocr_flag=ocr_flag||false;if(typeof obj==="undefined"||!obj||obj==={}){if(!fetch_params||!fetch_params.headers){let headers={"User-Agent":MOBILE_UA};if(rule.headers){Object.assign(headers,rule.headers)}if(!fetch_params){fetch_params={}}fetch_params.headers=headers}if(!fetch_params.headers.Referer){fetch_params.headers.Referer=getHome(url)}obj=fetch_params}else{let headers=obj.headers||{};let keys=Object.keys(headers).map(it=>it.toLowerCase());if(!keys.includes("user-agent")){headers["User-Agent"]=MOBILE_UA}if(!keys.includes("referer")){headers["Referer"]=getHome(url)}obj.headers=headers}if(rule.encoding&&rule.encoding!=="utf-8"&&!ocr_flag){if(!obj.headers.hasOwnProperty("Content-Type")&&!obj.headers.hasOwnProperty("content-type")){obj.headers["Content-Type"]="text/html; charset="+rule.encoding}}if(typeof obj.body!="undefined"&&obj.body&&typeof obj.body==="string"){if(!obj.headers.hasOwnProperty("Content-Type")&&!obj.headers.hasOwnProperty("content-type")){obj.headers["Content-Type"]="application/x-www-form-urlencoded; charset="+rule.encoding}}else if(typeof obj.body!="undefined"&&obj.body&&typeof obj.body==="object"){obj.data=obj.body;delete obj.body}if(!url){return obj.withHeaders?"{}":""}if(obj.toBase64){obj.buffer=2;delete obj.toBase64}console.log(JSON.stringify(obj.headers));console.log("request:"+url+`|method:${obj.method||"GET"}|body:${obj.body||""}`);let res=req(url,obj);let html=res.content||"";if(obj.withHeaders){let htmlWithHeaders=res.headers;htmlWithHeaders.body=html;return JSON.stringify(htmlWithHeaders)}else{return html}}function post(url,obj){obj.method="POST";return request(url,obj)}fetch=request;print=function(data){data=data||"";if(typeof data=="object"&&Object.keys(data).length>0){try{data=JSON.stringify(data);console.log(data)}catch(e){console.log(typeof data+":"+data.length);return}}else if(typeof data=="object"&&Object.keys(data).length<1){console.log("null object")}else{console.log(data)}};log=print;function checkHtml(html,url,obj){if(/\?btwaf=/.test(html)){let btwaf=html.match(/btwaf(.*?)"/)[1];url=url.split("#")[0]+"?btwaf"+btwaf;print("宝塔验证访问链接:"+url);html=request(url,obj)}return html}function getCode(url,obj){let html=request(url,obj);html=checkHtml(html,url,obj);return html}function getHtml(url){let obj={};if(rule.headers){obj.headers=rule.headers}let cookie=getItem(RULE_CK,"");if(cookie){if(obj.headers&&!Object.keys(obj.headers).map(it=>it.toLowerCase()).includes("cookie")){log("历史无cookie,新增过验证后的cookie");obj.headers["Cookie"]=cookie}else if(obj.headers&&obj.headers.cookie&&obj.headers.cookie!==cookie){obj.headers["Cookie"]=cookie;log("历史有小写过期的cookie,更新过验证后的cookie")}else if(obj.headers&&obj.headers.Cookie&&obj.headers.Cookie!==cookie){obj.headers["Cookie"]=cookie;log("历史有大写过期的cookie,更新过验证后的cookie")}else if(!obj.headers){obj.headers={Cookie:cookie};log("历史无headers,更新过验证后的含cookie的headers")}}let html=getCode(url,obj);return html}function homeParse(homeObj){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let classes=[];if(homeObj.class_name&&homeObj.class_url){let names=homeObj.class_name.split("&");let urls=homeObj.class_url.split("&");let cnt=Math.min(names.length,urls.length);for(let i=0;i<cnt;i++){classes.push({type_id:urls[i],type_name:names[i]})}}if(homeObj.class_parse){let p=homeObj.class_parse.split(";");let _ps=parseTags.getParse(p[0]);_pdfa=_ps.pdfa;_pdfh=_ps.pdfh;_pd=_ps.pd;MY_URL=rule.url;if(p.length>=3){try{let html=getHtml(homeObj.MY_URL);if(html){homeHtmlCache=html;let list=_pdfa(html,p[0]);if(list&&list.length>0){list.forEach((it,idex)=>{try{let name=_pdfh(it,p[1]);if(homeObj.cate_exclude&&new RegExp(homeObj.cate_exclude).test(name)){return}let url=_pd(it,p[2]);if(p.length>3&&p[3]){let exp=new RegExp(p[3]);url=url.match(exp)[1]}classes.push({type_id:url.trim(),type_name:name.trim()})}catch(e){console.log(`分类列表定位第${idex}个元素正常报错:${e.message}`)}})}}}catch(e){console.log(e.message)}}}classes=classes.filter(it=>!homeObj.cate_exclude||!new RegExp(homeObj.cate_exclude).test(it.type_name));let resp={class:classes};if(homeObj.filter){resp.filters=homeObj.filter}console.log(JSON.stringify(resp));return JSON.stringify(resp)}function getPP(p,pn,pp,ppn){try{let ps=p[pn]==="*"&&pp.length>ppn?pp[ppn]:p[pn];return ps}catch(e){return""}}function homeVodParse(homeVodObj){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let d=[];MY_URL=homeVodObj.homeUrl;console.log(MY_URL);let t1=(new Date).getTime();let p=homeVodObj.推荐;print("p:"+p);if(p==="*"&&rule.一级){p=rule.一级;homeVodObj.double=false}if(!p||typeof p!=="string"){return"{}"}p=p.trim();let pp=rule.一级.split(";");if(p.startsWith("js:")){const TYPE="home";var input=MY_URL;HOST=rule.host;eval(p.replace("js:",""));d=VODS}else{p=p.split(";");if(!homeVodObj.double&&p.length<5){return"{}"}else if(homeVodObj.double&&p.length<6){return"{}"}let p0=getPP(p,0,pp,0);let _ps=parseTags.getParse(p0);_pdfa=_ps.pdfa;_pdfh=_ps.pdfh;_pd=_ps.pd;let is_json=p0.startsWith("json:");p0=p0.replace(/^(jsp:|json:|jq:)/,"");let html=homeHtmlCache||getHtml(MY_URL);homeHtmlCache=undefined;if(is_json){html=dealJson(html)}try{console.log("double:"+homeVodObj.double);if(homeVodObj.double){let items=_pdfa(html,p0);let p1=getPP(p,1,pp,0);let p2=getPP(p,2,pp,1);let p3=getPP(p,3,pp,2);let p4=getPP(p,4,pp,3);let p5=getPP(p,5,pp,4);let p6=getPP(p,6,pp,5);for(let item of items){let items2=_pdfa(item,p1);for(let item2 of items2){try{let title=_pdfh(item2,p2);let img="";try{img=_pd(item2,p3)}catch(e){}let desc="";try{desc=_pdfh(item2,p4)}catch(e){}let links=[];for(let _p5 of p5.split("+")){let link=!homeVodObj.detailUrl?_pd(item2,_p5,MY_URL):_pdfh(item2,_p5);links.push(link)}let content;if(p.length>6&&p[6]){content=_pdfh(item2,p6)}else{content=""}let vid=links.join("$");if(rule.二级==="*"){vid=vid+"@@"+title+"@@"+img}let vod={vod_name:title,vod_pic:img,vod_remarks:desc,vod_content:content,vod_id:vid};d.push(vod)}catch(e){console.log("首页列表双层定位处理发生错误:"+e.message)}}}}else{let items=_pdfa(html,p0);let p1=getPP(p,1,pp,1);let p2=getPP(p,2,pp,2);let p3=getPP(p,3,pp,3);let p4=getPP(p,4,pp,4);let p5=getPP(p,5,pp,5);for(let item of items){try{let title=_pdfh(item,p1);let img="";try{img=_pd(item,p2,MY_URL)}catch(e){}let desc="";try{desc=_pdfh(item,p3)}catch(e){}let links=[];for(let _p5 of p4.split("+")){let link=!homeVodObj.detailUrl?_pd(item,_p5,MY_URL):_pdfh(item,_p5);links.push(link)}let content;if(p.length>5&&p[5]){content=_pdfh(item,p5)}else{content=""}let vid=links.join("$");if(rule.二级==="*"){vid=vid+"@@"+title+"@@"+img}let vod={vod_name:title,vod_pic:img,vod_remarks:desc,vod_content:content,vod_id:vid};d.push(vod)}catch(e){console.log("首页列表单层定位处理发生错误:"+e.message)}}}}catch(e){}}let t2=(new Date).getTime();console.log("加载首页推荐耗时:"+(t2-t1)+"毫秒");if(rule.图片来源){d.forEach(it=>{if(it.vod_pic&&it.vod_pic.startsWith("http")){it.vod_pic=it.vod_pic+rule.图片来源}})}if(d.length>0){print(d.slice(0,2))}return JSON.stringify({list:d})}function categoryParse(cateObj){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let p=cateObj.一级;if(!p||typeof p!=="string"){return"{}"}let d=[];let url=cateObj.url.replaceAll("fyclass",cateObj.tid);if(cateObj.pg===1&&url.includes("[")&&url.includes("]")){url=url.split("[")[1].split("]")[0]}else if(cateObj.pg>1&&url.includes("[")&&url.includes("]")){url=url.split("[")[0]}if(rule.filter_url){if(!/fyfilter/.test(url)){if(!url.endsWith("&")&&!rule.filter_url.startsWith("&")){url+="&"}url+=rule.filter_url}else{url=url.replace("fyfilter",rule.filter_url)}let fl=cateObj.filter?cateObj.extend:{};if(rule.filter_def&&typeof rule.filter_def==="object"){try{if(Object.keys(rule.filter_def).length>0&&rule.filter_def.hasOwnProperty(cateObj.tid)){let self_fl_def=rule.filter_def[cateObj.tid];if(self_fl_def&&typeof self_fl_def==="object"){let fl_def=JSON.parse(JSON.stringify(self_fl_def));fl=Object.assign(fl_def,fl)}}}catch(e){print("合并不同分类对应的默认筛选出错:"+e.message)}}let new_url;new_url=cheerio.jinja2(url,{fl:fl});url=new_url}if(/fypage/.test(url)){if(url.includes("(")&&url.includes(")")){let url_rep=url.match(/.*?\((.*)\)/)[1];let cnt_page=url_rep.replaceAll("fypage",cateObj.pg);let cnt_pg=eval(cnt_page);url=url.replaceAll(url_rep,cnt_pg).replaceAll("(","").replaceAll(")","")}else{url=url.replaceAll("fypage",cateObj.pg)}}MY_URL=url;console.log(MY_URL);p=p.trim();const MY_CATE=cateObj.tid;if(p.startsWith("js:")){var MY_FL=cateObj.extend;const TYPE="cate";var input=MY_URL;const MY_PAGE=cateObj.pg;var desc="";eval(p.trim().replace("js:",""));d=VODS}else{p=p.split(";");if(p.length<5){return"{}"}let _ps=parseTags.getParse(p[0]);_pdfa=_ps.pdfa;_pdfh=_ps.pdfh;_pd=_ps.pd;let is_json=p[0].startsWith("json:");p[0]=p[0].replace(/^(jsp:|json:|jq:)/,"");try{let html=getHtml(MY_URL);if(html){if(is_json){html=dealJson(html)}let list=_pdfa(html,p[0]);list.forEach(it=>{let links=p[4].split("+").map(p4=>{return!rule.detailUrl?_pd(it,p4,MY_URL):_pdfh(it,p4)});let link=links.join("$");let vod_id=rule.detailUrl?MY_CATE+"$"+link:link;let vod_name=_pdfh(it,p[1]).replace(/\n|\t/g,"").trim();let vod_pic=_pd(it,p[2],MY_URL);if(rule.二级==="*"){vod_id=vod_id+"@@"+vod_name+"@@"+vod_pic}d.push({vod_id:vod_id,vod_name:vod_name,vod_pic:vod_pic,vod_remarks:_pdfh(it,p[3]).replace(/\n|\t/g,"").trim()})})}}catch(e){console.log(e.message)}}if(rule.图片来源){d.forEach(it=>{if(it.vod_pic&&it.vod_pic.startsWith("http")){it.vod_pic=it.vod_pic+rule.图片来源}})}if(d.length>0){print(d.slice(0,2))}let pagecount=0;if(rule.pagecount&&typeof rule.pagecount==="object"&&rule.pagecount.hasOwnProperty(MY_CATE)){print(`MY_CATE:${MY_CATE},pagecount:${JSON.stringify(rule.pagecount)}`);pagecount=parseInt(rule.pagecount[MY_CATE])}let nodata={list:[{vod_name:"无数据,防无限请求",vod_id:"no_data",vod_remarks:"不要点,会崩的",vod_pic:"./qyg12.jpg"}],total:1,pagecount:1,page:1,limit:1};let vod=d.length<1?JSON.stringify(nodata):JSON.stringify({page:parseInt(cateObj.pg),pagecount:pagecount||999,limit:20,total:999,list:d});return vod}function searchParse(searchObj){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let d=[];if(!searchObj.searchUrl){return"{}"}let p=searchObj.搜索==="*"&&rule.一级?rule.一级:searchObj.搜索;if(!p||typeof p!=="string"){return"{}"}p=p.trim();let pp=rule.一级.split(";");let url=searchObj.searchUrl.replaceAll("**",searchObj.wd).replaceAll("fypage",searchObj.pg);MY_URL=url;console.log(MY_URL);if(p.startsWith("js:")){const TYPE="search";const MY_PAGE=searchObj.pg;const KEY=searchObj.wd;var input=MY_URL;var detailUrl=rule.detailUrl||"";eval(p.trim().replace("js:",""));d=VODS}else{p=p.split(";");if(p.length<5){return"{}"}let p0=getPP(p,0,pp,0);let _ps=parseTags.getParse(p0);_pdfa=_ps.pdfa;_pdfh=_ps.pdfh;_pd=_ps.pd;let is_json=p0.startsWith("json:");p0=p0.replace(/^(jsp:|json:|jq:)/,"");try{let req_method=MY_URL.split(";").length>1?MY_URL.split(";")[1].toLowerCase():"get";let html;if(req_method==="post"){let rurls=MY_URL.split(";")[0].split("#");let rurl=rurls[0];let params=rurls.length>1?rurls[1]:"";print(`post=》rurl:${rurl},params:${params}`);let _fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let postData={body:params};Object.assign(_fetch_params,postData);html=post(rurl,_fetch_params)}else if(req_method==="postjson"){let rurls=MY_URL.split(";")[0].split("#");let rurl=rurls[0];let params=rurls.length>1?rurls[1]:"";print(`postjson-》rurl:${rurl},params:${params}`);try{params=JSON.parse(params)}catch(e){params="{}"}let _fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let postData={body:params};Object.assign(_fetch_params,postData);html=post(rurl,_fetch_params)}else{html=getHtml(MY_URL)}if(html){if(/系统安全验证|输入验证码/.test(html)){let cookie=verifyCode(MY_URL);if(cookie){console.log(`本次成功过验证,cookie:${cookie}`);setItem(RULE_CK,cookie)}else{console.log(`本次自动过搜索验证失败,cookie:${cookie}`)}html=getHtml(MY_URL)}if(!html.includes(searchObj.wd)){console.log("搜索结果源码未包含关键字,疑似搜索失败,正为您打印结果源码");console.log(html)}if(is_json){html=dealJson(html)}let list=_pdfa(html,p0);let p1=getPP(p,1,pp,1);let p2=getPP(p,2,pp,2);let p3=getPP(p,3,pp,3);let p4=getPP(p,4,pp,4);let p5=getPP(p,5,pp,5);list.forEach(it=>{let links=p4.split("+").map(_p4=>{return!rule.detailUrl?_pd(it,_p4,MY_URL):_pdfh(it,_p4)});let link=links.join("$");let content;if(p.length>5&&p[5]){content=_pdfh(it,p5)}else{content=""}let vod_id=link;let vod_name=_pdfh(it,p1).replace(/\n|\t/g,"").trim();let vod_pic=_pd(it,p2,MY_URL);if(rule.二级==="*"){vod_id=vod_id+"@@"+vod_name+"@@"+vod_pic}let ob={vod_id:vod_id,vod_name:vod_name,vod_pic:vod_pic,vod_remarks:_pdfh(it,p3).replace(/\n|\t/g,"").trim(),vod_content:content.replace(/\n|\t/g,"").trim()};d.push(ob)})}}catch(e){print("搜索发生错误:"+e.message);return"{}"}}if(rule.图片来源){d.forEach(it=>{if(it.vod_pic&&it.vod_pic.startsWith("http")){it.vod_pic=it.vod_pic+rule.图片来源}})}return JSON.stringify({page:parseInt(searchObj.pg),pagecount:10,limit:20,total:100,list:d})}function detailParse(detailObj){let t1=(new Date).getTime();fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));let orId=detailObj.orId;let vod_name="片名";let vod_pic="";let vod_id=orId;if(rule.二级==="*"){let extra=orId.split("@@");vod_name=extra.length>1?extra[1]:vod_name;vod_pic=extra.length>2?extra[2]:vod_pic}let vod={vod_id:vod_id,vod_name:vod_name,vod_pic:vod_pic,type_name:"类型",vod_year:"年份",vod_area:"地区",vod_remarks:"更新信息",vod_actor:"主演",vod_director:"导演",vod_content:"简介"};let p=detailObj.二级;let url=detailObj.url;let detailUrl=detailObj.detailUrl;let fyclass=detailObj.fyclass;let tab_exclude=detailObj.tab_exclude;let html=detailObj.html||"";MY_URL=url;if(detailObj.二级访问前){try{print(`尝试在二级访问前执行代码:${detailObj.二级访问前}`);eval(detailObj.二级访问前.trim().replace("js:",""))}catch(e){print(`二级访问前执行代码出现错误:${e.message}`)}}if(p==="*"){vod.vod_play_from="道长在线";vod.vod_remarks=detailUrl;vod.vod_actor="没有二级,只有一级链接直接嗅探播放";vod.vod_content=MY_URL;vod.vod_play_url="嗅探播放$"+MY_URL.split("@@")[0]}else if(typeof p==="string"&&p.trim().startsWith("js:")){const TYPE="detail";var input=MY_URL;var play_url="";eval(p.trim().replace("js:",""));vod=VOD;console.log(JSON.stringify(vod))}else if(p&&typeof p==="object"){let tt1=(new Date).getTime();if(!html){html=getHtml(MY_URL)}print(`二级${MY_URL}仅获取源码耗时:${(new Date).getTime()-tt1}毫秒`);let _ps;if(p.is_json){print("二级是json");_ps=parseTags.json;html=dealJson(html)}else if(p.is_jsp){print("二级是jsp");_ps=parseTags.jsp}else if(p.is_jq){print("二级是jq");_ps=parseTags.jq}else{print("二级默认jq");_ps=parseTags.jq}let tt2=(new Date).getTime();print(`二级${MY_URL}获取并装载源码耗时:${tt2-tt1}毫秒`);_pdfa=_ps.pdfa;_pdfh=_ps.pdfh;_pd=_ps.pd;if(p.title){let p1=p.title.split(";");vod.vod_name=_pdfh(html,p1[0]).replace(/\n|\t/g,"").trim();let type_name=p1.length>1?_pdfh(html,p1[1]).replace(/\n|\t/g,"").replace(/ /g,"").trim():"";vod.type_name=type_name||vod.type_name}if(p.desc){try{let p1=p.desc.split(";");vod.vod_remarks=_pdfh(html,p1[0]).replace(/\n|\t/g,"").trim();vod.vod_year=p1.length>1?_pdfh(html,p1[1]).replace(/\n|\t/g,"").trim():"";vod.vod_area=p1.length>2?_pdfh(html,p1[2]).replace(/\n|\t/g,"").trim():"";vod.vod_actor=p1.length>3?_pdfh(html,p1[3]).replace(/\n|\t/g,"").trim():"";vod.vod_director=p1.length>4?_pdfh(html,p1[4]).replace(/\n|\t/g,"").trim():""}catch(e){}}if(p.content){try{let p1=p.content.split(";");vod.vod_content=_pdfh(html,p1[0]).replace(/\n|\t/g,"").trim()}catch(e){}}if(p.img){try{let p1=p.img.split(";");vod.vod_pic=_pd(html,p1[0],MY_URL)}catch(e){}}let vod_play_from="$$$";let playFrom=[];if(p.重定向&&p.重定向.startsWith("js:")){print("开始执行重定向代码:"+p.重定向);html=eval(p.重定向.replace("js:",""))}if(p.tabs){if(p.tabs.startsWith("js:")){print("开始执行tabs代码:"+p.tabs);var input=MY_URL;eval(p.tabs.replace("js:",""));playFrom=TABS}else{let p_tab=p.tabs.split(";")[0];let vHeader=_pdfa(html,p_tab);console.log(vHeader.length);let tab_text=p.tab_text||"body&&Text";let new_map={};for(let v of vHeader){let v_title=_pdfh(v,tab_text).trim();console.log(v_title);if(tab_exclude&&new RegExp(tab_exclude).test(v_title)){continue}if(!new_map.hasOwnProperty(v_title)){new_map[v_title]=1}else{new_map[v_title]+=1}if(new_map[v_title]>1){v_title+=Number(new_map[v_title]-1)}playFrom.push(v_title)}}console.log(JSON.stringify(playFrom))}else{playFrom=["道长在线"]}vod.vod_play_from=playFrom.join(vod_play_from);let vod_play_url="$$$";let vod_tab_list=[];if(p.lists){if(p.lists.startsWith("js:")){print("开始执行lists代码:"+p.lists);try{var input=MY_URL;var play_url="";eval(p.lists.replace("js:",""));for(let i in LISTS){if(LISTS.hasOwnProperty(i)){try{LISTS[i]=LISTS[i].map(it=>it.split("$").slice(0,2).join("$"))}catch(e){print("格式化LISTS发生错误:"+e.message)}}}vod_play_url=LISTS.map(it=>it.join("#")).join(vod_play_url)}catch(e){print("js执行lists: 发生错误:"+e.message)}}else{let list_text=p.list_text||"body&&Text";let list_url=p.list_url||"a&&href";let is_tab_js=p.tabs.trim().startsWith("js:");for(let i=0;i<playFrom.length;i++){let tab_name=playFrom[i];let tab_ext=p.tabs.split(";").length>1&&!is_tab_js?p.tabs.split(";")[1]:"";let p1=p.lists.replaceAll("#idv",tab_name).replaceAll("#id",i);tab_ext=tab_ext.replaceAll("#idv",tab_name).replaceAll("#id",i);let tabName=tab_ext?_pdfh(html,tab_ext):tab_name;console.log(tabName);let new_vod_list=[];let tt1=(new Date).getTime();if(typeof pdfl==="function"){new_vod_list=pdfl(html,p1,list_text,list_url,MY_URL)}else{let vodList=[];try{vodList=_pdfa(html,p1);console.log("len(vodList):"+vodList.length)}catch(e){}for(let i=0;i<vodList.length;i++){let it=vodList[i];new_vod_list.push(_pdfh(it,list_text).trim()+"$"+_pd(it,list_url,MY_URL))}}if(new_vod_list.length>0){new_vod_list=forceOrder(new_vod_list,"",x=>x.split("$")[0]);console.log(`drpy影响性能代码共计列表数循环次数:${new_vod_list.length},耗时:${(new Date).getTime()-tt1}毫秒`)}let vlist=new_vod_list.join("#");vod_tab_list.push(vlist)}vod_play_url=vod_tab_list.join(vod_play_url)}}vod.vod_play_url=vod_play_url}if(rule.图片来源&&vod.vod_pic&&vod.vod_pic.startsWith("http")){vod.vod_pic=vod.vod_pic+rule.图片来源}if(!vod.vod_id||vod_id.includes("$")&&vod.vod_id!==vod_id){vod.vod_id=vod_id}let t2=(new Date).getTime();console.log(`加载二级界面${MY_URL}耗时:${t2-t1}毫秒`);return JSON.stringify({list:[vod]})}function tellIsJx(url){try{let is_vip=!/\.(m3u8|mp4|m4a)$/.test(url.split("?")[0])&&是否正版(url);return is_vip?1:0}catch(e){return 1}}function playParse(playObj){fetch_params=JSON.parse(JSON.stringify(rule_fetch_params));MY_URL=playObj.url;if(!/http/.test(MY_URL)){try{MY_URL=base64Decode(MY_URL)}catch(e){}}MY_URL=decodeURIComponent(MY_URL);var input=MY_URL;let common_play={parse:1,url:input,jx:tellIsJx(input)};let lazy_play;if(!rule.play_parse||!rule.lazy){lazy_play=common_play}else if(rule.play_parse&&rule.lazy&&typeof rule.lazy==="string"){try{let lazy_code=rule.lazy.replace("js:","").trim();print("开始执行js免嗅=>"+lazy_code);eval(lazy_code);lazy_play=typeof input==="object"?input:{parse:1,jx:tellIsJx(input),url:input}}catch(e){print("js免嗅错误:"+e.message);lazy_play=common_play}}else{lazy_play=common_play}if(Array.isArray(rule.play_json)&&rule.play_json.length>0){let web_url=lazy_play.url;for(let pjson of rule.play_json){if(pjson.re&&(pjson.re==="*"||web_url.match(new RegExp(pjson.re)))){if(pjson.json&&typeof pjson.json==="object"){let base_json=pjson.json;lazy_play=Object.assign(lazy_play,base_json);break}}}}else if(rule.play_json&&!Array.isArray(rule.play_json)){let base_json={jx:1,parse:1};lazy_play=Object.assign(lazy_play,base_json)}else if(!rule.play_json){let base_json={jx:0,parse:1};lazy_play=Object.assign(lazy_play,base_json)}console.log(JSON.stringify(lazy_play));return JSON.stringify(lazy_play)}function proxyParse(proxyObj){var input=proxyObj.params;if(proxyObj.proxy_rule){log("准备执行本地代理规则:\n"+proxyObj.proxy_rule);try{eval(proxyObj.proxy_rule);if(input&&input!==proxyObj.params&&Array.isArray(input)&&input.length===3){return input}else{return[404,"text/plain","Not Found"]}}catch(e){return[500,"text/plain","代理规则错误:"+e.message]}}else{return[404,"text/plain","Not Found"]}}function init(ext){console.log("init");try{let muban=模板.getMubans();if(typeof ext=="object"){rule=ext}else if(typeof ext=="string"){if(ext.startsWith("http")){let js=request(ext,{method:"GET"});if(js){eval(js.replace("var rule","rule"))}}else{eval(ext.replace("var rule","rule"))}}if(rule.模板&&muban.hasOwnProperty(rule.模板)){print("继承模板:"+rule.模板);rule=Object.assign(muban[rule.模板],rule)}let rule_cate_excludes=(rule.cate_exclude||"").split("|").filter(it=>it.trim());let rule_tab_excludes=(rule.tab_exclude||"").split("|").filter(it=>it.trim());rule_cate_excludes=rule_cate_excludes.concat(CATE_EXCLUDE.split("|").filter(it=>it.trim()));rule_tab_excludes=rule_tab_excludes.concat(TAB_EXCLUDE.split("|").filter(it=>it.trim()));rule.cate_exclude=rule_cate_excludes.join("|");rule.tab_exclude=rule_tab_excludes.join("|");rule.host=(rule.host||"").rstrip("/");HOST=rule.host;if(rule.hostJs){console.log(`检测到hostJs,准备执行...`);try{eval(rule.hostJs);rule.host=HOST.rstrip("/")}catch(e){console.log(`执行${rule.hostJs}获取host发生错误:`+e.message)}}rule.url=rule.url||"";rule.double=rule.double||false;rule.homeUrl=rule.homeUrl||"";rule.detailUrl=rule.detailUrl||"";rule.searchUrl=rule.searchUrl||"";rule.homeUrl=rule.host&&rule.homeUrl?urljoin(rule.host,rule.homeUrl):rule.homeUrl||rule.host;rule.detailUrl=rule.host&&rule.detailUrl?urljoin(rule.host,rule.detailUrl):rule.detailUrl;rule.二级访问前=rule.二级访问前||"";if(rule.url.includes("[")&&rule.url.includes("]")){let u1=rule.url.split("[")[0];let u2=rule.url.split("[")[1].split("]")[0];rule.url=rule.host&&rule.url?urljoin(rule.host,u1)+"["+urljoin(rule.host,u2)+"]":rule.url}else{rule.url=rule.host&&rule.url?urljoin(rule.host,rule.url):rule.url}rule.searchUrl=rule.host&&rule.searchUrl?urljoin(rule.host,rule.searchUrl):rule.searchUrl;rule.timeout=rule.timeout||5e3;rule.encoding=rule.编码||rule.encoding||"utf-8";rule.search_encoding=rule.搜索编码||rule.search_encoding||"";rule.图片来源=rule.图片来源||"";rule.play_json=rule.hasOwnProperty("play_json")?rule.play_json:[];rule.pagecount=rule.hasOwnProperty("pagecount")?rule.pagecount:{};rule.proxy_rule=rule.hasOwnProperty("proxy_rule")?rule.proxy_rule:"";if(rule.headers&&typeof rule.headers==="object"){try{let header_keys=Object.keys(rule.headers);for(let k of header_keys){if(k.toLowerCase()==="user-agent"){let v=rule.headers[k];console.log(v);if(["MOBILE_UA","PC_UA","UC_UA","IOS_UA","UA"].includes(v)){rule.headers[k]=eval(v)}}else if(k.toLowerCase()==="cookie"){let v=rule.headers[k];if(v&&v.startsWith("http")){console.log(v);try{v=fetch(v);console.log(v);rule.headers[k]=v}catch(e){console.log(`从${v}获取cookie发生错误:`+e.message)}}}}}catch(e){console.log("处理headers发生错误:"+e.message)}}rule_fetch_params={headers:rule.headers||false,timeout:rule.timeout,encoding:rule.encoding};oheaders=rule.headers||{};RKEY=typeof key!=="undefined"&&key?key:"drpy_"+(rule.title||rule.host);pre();init_test()}catch(e){console.log("init_test发生错误:"+e.message)}}let homeHtmlCache=undefined;function home(filter){console.log("home");let homeObj={filter:rule.filter||false,MY_URL:rule.homeUrl,class_name:rule.class_name||"",class_url:rule.class_url||"",class_parse:rule.class_parse||"",cate_exclude:rule.cate_exclude};return homeParse(homeObj)}function homeVod(params){console.log("homeVod");let homeVodObj={"推荐":rule.推荐,double:rule.double,homeUrl:rule.homeUrl,detailUrl:rule.detailUrl};return homeVodParse(homeVodObj)}function category(tid,pg,filter,extend){let cateObj={url:rule.url,"一级":rule.一级,tid:tid,pg:parseInt(pg),filter:filter,extend:extend};return categoryParse(cateObj)}function detail(vod_url){let orId=vod_url;let fyclass="";log("orId:"+orId);if(vod_url.indexOf("$")>-1){let tmp=vod_url.split("$");fyclass=tmp[0];vod_url=tmp[1]}let detailUrl=vod_url.split("@@")[0];let url;if(!detailUrl.startsWith("http")&&!detailUrl.includes("/")){url=rule.detailUrl.replaceAll("fyid",detailUrl).replaceAll("fyclass",fyclass)}else if(detailUrl.includes("/")){url=urljoin(rule.homeUrl,detailUrl)}else{url=detailUrl}let detailObj={orId:orId,url:url,"二级":rule.二级,"二级访问前":rule.二级访问前,detailUrl:detailUrl,fyclass:fyclass,tab_exclude:rule.tab_exclude};return detailParse(detailObj)}function play(flag,id,flags){let playObj={url:id,flag:flag,flags:flags};return playParse(playObj)}function search(wd,quick){if(rule.search_encoding){if(rule.search_encoding.toLowerCase()!=="utf-8"){wd=encodeStr(wd,rule.search_encoding)}}else if(rule.encoding&&rule.encoding.toLowerCase()!=="utf-8"){wd=encodeStr(wd,rule.encoding)}let searchObj={searchUrl:rule.searchUrl,"搜索":rule.搜索,wd:wd,pg:1,quick:quick};return searchParse(searchObj)}function proxy(params){if(rule.proxy_rule&&rule.proxy_rule.trim()){rule.proxy_rule=rule.proxy_rule.trim()}if(rule.proxy_rule.startsWith(":js")){rule.proxy_rule=rule.proxy_rule.replace(":js","")}let proxyObj={params:params,proxy_rule:rule.proxy_rule};return proxyParse(proxyObj)}function DRPY(){return{init:init,home:home,homeVod:homeVod,category:category,detail:detail,play:play,search:search,proxy:proxy}}export default{init:init,home:home,homeVod:homeVod,category:category,detail:detail,play:play,search:search,proxy:proxy,DRPY:DRPY};
