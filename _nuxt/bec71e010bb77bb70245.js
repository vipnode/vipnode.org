(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{130:function(t,e,n){"use strict";var a={data:function(){return{open:!1}}},r=n(14),s=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tooltip",on:{click:function(e){t.open=!t.open}}},[t.open?n("div",{staticClass:"tooltip-body"},[t._t("default"),t._v(" "),n("button",{staticClass:"button-primary",attrs:{type:"button"}},[t._v("Got it")])],2):t._e()])},[],!1,null,null,null);s.options.__file="Tooltip.vue";e.a=s.exports},139:function(t,e,n){"use strict";n.r(e);var a=n(131),r=n.n(a),s=(n(35),n(74),n(36),n(3)),o=n.n(s),i=(n(75),n(135)),u=n(130),c=new RegExp("[0-9a-f]{128}");var l="http://localhost:8080",p=1;function d(t,e){return h.apply(this,arguments)}function h(){return(h=o()(regeneratorRuntime.mark(function t(e,n){var a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l,{method:"POST",cors:"same-origin",body:JSON.stringify({id:p++,method:e,params:n})});case 2:return a=t.sent,t.next=5,a.json();case 5:if(!(r=t.sent).error){t.next=8;break}throw new Error(r.error.message);case 8:return t.abrupt("return",r.result);case 9:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function v(t,e,n){return m.apply(this,arguments)}function m(){return(m=o()(regeneratorRuntime.mark(function t(e,n,a){var s,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=n+JSON.stringify(a),t.next=3,e.signMessage(s);case 3:return o=t.sent,t.abrupt("return",d(n,[o].concat(r()(a))));case 5:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var f,b,y,_,w,g={data:function(){return{loading:!1,pendingTx:!1,amount:"0.02",enode:"",messages:[],accounts:[],nodeIDs:[],active:null,balance:{},networkID:"4",networkName:"Rinkeby"}},methods:{txURL:function(t){return"https://rinkeby.etherscan.io/tx/"+t},formatEther:i.utils.formatEther,load:(w=o()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.messages=[],this.loading=!0,t.prev=2,t.next=5,this.loadContractStatus(this.getContract());case 5:return t.next=7,this.loadPoolStatus();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),this.error("Unexpected error occurred. Check console for more details.",t.t0);case 12:return t.prev=12,this.loading=!1,t.finish(12);case 15:return t.abrupt("return",!1);case 16:case"end":return t.stop()}},t,this,[[2,9,12,15]])})),function(){return w.apply(this,arguments)}),whitelist:(_=o()(regeneratorRuntime.mark(function t(){var e,n,a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=this.enode.match(c))&&1===e.length){t.next=3;break}return t.abrupt("return",this.error("Invalid enodeID: Should be 128 hex characters."));case 3:return n=e[0],"pool_addNode",a=[this.active.account,+new Date,n],r=this.provider.getSigner(this.active.account),t.prev=7,t.next=10,v(r,"pool_addNode",a);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(7),t.abrupt("return",this.error("Failed to authorize node.",t.t0));case 15:return this.success("Authorized node."),t.next=18,this.loadPoolStatus();case 18:case"end":return t.stop()}},t,this,[[7,12]])})),function(){return _.apply(this,arguments)}),requestWithdraw:function(){this.error("request withdraw: not implemented yet")},addBalance:(y=o()(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.utils.parseUnits(this.amount,"ether"),n=this.getContract()){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,n.addBalance.sendTransaction({value:e});case 7:this.pendingTx=t.sent,t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(4),!t.t0.message||-1===t.t0.message.indexOf("User denied transaction signature.")){t.next=14;break}return t.abrupt("return",this.warning("Transaction aborted. Try again?"));case 14:return t.abrupt("return",this.error("Smart contract transaction failed.",t.t0));case 15:case"end":return t.stop()}},t,this,[[4,10]])})),function(){return y.apply(this,arguments)}),error:function(t,e){this.messages.push({body:t,kind:"error"}),void 0!==e&&console.error(e)},success:function(t){this.messages=[{body:t,kind:"success"}]},warning:function(t){this.messages.push({body:t,kind:"warning"})},info:function(t){this.messages.push({body:t,kind:"info"})},getContract:function(){if(this.contract)return this.contract;try{return this.contract=(t=this.provider,new i.Contract("0xb2f8987986259facdc539ac1745f7a0b395972b1",[{constant:!0,inputs:[],name:"withdrawInterval",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_client",type:"address"},{name:"_minBalance",type:"uint256"}],name:"checkBalance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"operator",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"clients",outputs:[{name:"balance",type:"uint256"},{name:"timeLocked",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"forceWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_client",type:"address"},{name:"_amount",type:"uint256"},{name:"_release",type:"bool"}],name:"opSettle",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_amount",type:"uint256"}],name:"opWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"forceSettle",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"addBalance",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{inputs:[{name:"_operator",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"client",type:"address"},{indexed:!1,name:"timeLocked",type:"uint256"}],name:"ForceSettle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"client",type:"address"},{indexed:!1,name:"balance",type:"uint256"}],name:"Balance",type:"event"}],t)),this.contract}catch(t){return void this.error("Failed to load smart contract. Make sure you have a web3-enabled browser.",t)}var t},loadContractStatus:(b=o()(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:if(void 0!==web3){t.next=4;break}return t.abrupt("return",this.error("Please use a web3-enabled browser to execute this smart contract."));case 4:return t.next=6,this.provider.getNetwork();case 6:if(n=t.sent,String(n.chainId)===this.networkID){t.next=9;break}return t.abrupt("return",this.error("Please switch your wallet from "+n.name+" to "+this.networkName+"."));case 9:return t.next=11,this.provider.listAccounts();case 11:if(0!==(a=t.sent).length){t.next=14;break}return t.abrupt("return",this.error("Please unlock your wallet first."));case 14:return this.accounts=a,this.active={account:a[0],balance:0},t.prev=16,t.next=19,e.clients(this.active.account);case 19:r=t.sent,this.active.balance=r[0],this.active.timelocked=r[1],t.next=27;break;case 24:return t.prev=24,t.t0=t.catch(16),t.abrupt("return",this.error("Failed to load client balance.",t.t0));case 27:case"end":return t.stop()}},t,this,[[16,24]])})),function(t){return b.apply(this,arguments)}),loadPoolStatus:(f=o()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d("pool_status",[this.active.account]);case 3:e=t.sent,this.balance=e.balance,this.nodeIDs=e.node_short_ids,t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",this.error("Failed to load pool status.",t.t0));case 11:case"end":return t.stop()}},t,this,[[0,8]])})),function(){return f.apply(this,arguments)})},mounted:function(){this.load(),this.enode=this.$route.query.enode},computed:{provider:function(){return new i.providers.Web3Provider(web3.currentProvider)}},components:{Tooltip:u.a}},x=n(14),k=Object(x.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contract-pool"}},[t._m(0),t._v(" "),n("button",{staticClass:"button button-small",attrs:{disabled:t.loading},on:{click:t.load}},[t._v("Reload Account Status")]),t._v(" "),n("p",[t._v("This feature is experimental. Don't use any money you're not willing to donate.")]),t._v(" "),n("div",{staticClass:"full-width white-background"},[n("div",{staticClass:"contract"},[t.messages.length>0?n("ul",{staticClass:"messages"},t._l(t.messages,function(e){return n("li",{class:e.kind},[t._v(t._s(e.body))])})):t._e(),t._v(" "),t.active?n("div",[n("h3",[t._v("Current network")]),t._v(" "),n("p",[t._v("Network: "),n("strong",[t._v(t._s(t.networkName))])]),t._v(" "),n("p",[t._v("Account:\n          "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.active.account,expression:"active.account"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.active,"account",e.target.multiple?n:n[0])}}},t._l(t.accounts,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}))]),t._v(" "),n("div",{staticClass:"balance-form"},[n("h3",[t._v("Balance")]),t._v(" "),n("p"),n("div",{staticClass:"balance"},[t._v("Balance: "),n("span",{staticClass:"eth"},[t._v(t._s(t.formatEther(t.balance.credit||"0"))+" ETH")])]),t._v(" "),n("div",{staticClass:"deposit"},[t._v("Deposit: "),n("span",{staticClass:"eth"},[t._v(t._s(t.formatEther(t.active.balance))+" ETH")]),t._v(" "),t.active.balance>0?n("button",{staticStyle:{width:"172px"},attrs:{disabled:t.loading},on:{click:t.requestWithdraw}},[t._v("Request Withdraw")]):t._e()]),t._v(" "),n("p"),t._v(" "),n("form",{staticClass:"row",on:{submit:[t.addBalance,function(t){t.preventDefault()}]}},[n("label",{staticClass:"eth"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"amount",attrs:{type:"text",value:"0.2",placeholder:"0.2",name:"amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),n("input",{staticClass:"button-primary",attrs:{type:"submit",disabled:t.loading,value:"Add Balance"}})])]),t._v(" "),t.nodeIDs?n("div",{staticClass:"node-ids"},[n("h3",[t._v("Authorized Nodes:")]),t._v(" "),n("ul",t._l(t.nodeIDs,function(e){return n("li",[t._v(t._s(e)+"…")])}))]):t._e(),t._v(" "),n("form",{staticClass:"row",on:{submit:[t.whitelist,function(t){t.preventDefault()}]}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.enode,expression:"enode"}],staticClass:"enode",attrs:{type:"text",value:"",placeholder:"enode://...",name:"enode"},domProps:{value:t.enode},on:{input:function(e){e.target.composing||(t.enode=e.target.value)}}}),t._v(" "),n("input",{staticClass:"button-primary",attrs:{type:"submit",disabled:t.loading,value:"Add Node"}})])]):t._e()])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("Balance for "),e("span",{staticClass:"hl1"},[this._v("pool.vipnode.org")])])}],!1,null,null,null);k.options.__file="ContractPool.vue";var C={components:{ContractPool:k.exports,Tooltip:u.a},head:function(){return{title:"Pool"}}},R=Object(x.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("section",[e("no-ssr",[e("ContractPool")],1)],1)])},[],!1,null,null,null);R.options.__file="pool.vue";e.default=R.exports}}]);