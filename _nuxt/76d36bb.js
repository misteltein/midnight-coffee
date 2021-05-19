(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{508:function(t,e,n){"use strict";n.r(e);var r={name:"p5tutorial2.vue",components:{LinkItem:function(){return n.e(0).then(n.bind(null,440))},Code:function(){return n.e(4).then(n.bind(null,441))},Canvas:function(){return n.e(7).then(n.bind(null,515))},MiniPage:function(){return n.e(5).then(n.bind(null,442))},Paragraph:function(){return n.e(6).then(n.bind(null,443))},Header:function(){return Promise.all([n.e(3),n.e(2)]).then(n.bind(null,444))},Footer:function(){return n.e(1).then(n.bind(null,445))}},head:function(){return{title:"p5.js チュートリアル 2",meta:[{hid:"description",name:"description",content:"p5.js を利用しアニメーションを作る"},{hid:"keyword",name:"keyword",content:"p5.js,javascript,アニメーション"},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:title",property:"og:title",content:"p5.js チュートリアル 2"},{hid:"og:description",property:"og:description",content:"p5.js を利用しアニメーションを作る"},{hid:"og:url",property:"og:url",content:"https://misteltein.github.io/midnight-coffee/p5tutorials/p5tutorial2"},{hid:"og:image",property:"og:image",content:"https://misteltein.github.io/midnight-coffee/images/secret_cat.png"}]}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("h1",[t._v("p5.js チュートリアル 2")]),t._v(" "),n("Minipage",[n("Paragraph",[t._v("\n      これはアニメーションを作るためのチュートリアルである。\n    ")])],1),t._v(" "),n("h2",[t._v("静止画で円を描く")]),t._v(" "),n("MiniPage",{attrs:{type:"half"}},[n("Paragraph",[t._v("\n      チュートリアル I では，\n      "),n("Code",{attrs:{url:"/codes/p5tutorials/p5tutorial2/circle.js",language:"javascript",title:"circle.js: コード"}}),t._v("\n      のように setup() にコードを書くことで図形を描画した。\n    ")],1)],1),t._v(" "),n("MiniPage",{attrs:{type:"half"}},[n("Paragraph",[n("Canvas",{attrs:{title:"circle.js: 出力",file:"p5Tutorial/IIa.js",width:"300px",height:"300px"}})],1)],1),t._v(" "),n("h2",[t._v("円を移動させながら重ねて描く")]),t._v(" "),n("MiniPage",{attrs:{type:"half"}},[n("Paragraph",[t._v("\n      今回は，静止画ではなく円が動くようなアニメーションをつくる方法について説明する。\n    ")]),t._v(" "),n("Paragraph",[t._v("\n      アニメーションを作るためには，毎フレーム呼び出される draw() を利用したプログラムが必要である。\n    ")]),t._v(" "),n("Paragraph",[t._v("\n      x 座標を変えながら円を描くには，\n      "),n("Code",{attrs:{url:"/codes/p5tutorials/p5tutorial2/stacked_circles.js",language:"javascript",title:"stacked_circles.js: コード"}}),t._v("\n      のようなプログラムを書く。\n    ")],1),t._v(" "),n("Paragraph",[t._v("\n      このプログラムでは，現在の x 座標を記録するためにdraw() の外に変数 x を作っている( x=0 を初期値にしている)。\n      draw() 内に書いてしまうと，毎フレームで x=0 になってしまい，円が動かないようになってしまう。\n    ")])],1),t._v(" "),n("MiniPage",{attrs:{type:"half"}},[n("Paragraph",[n("Canvas",{attrs:{title:"stacked_circles.js: 出力",file:"p5Tutorial/IIb.js",width:"300px",height:"300px"}})],1),t._v("\n    (デモのためにループさせている。)\n  ")],1),t._v(" "),n("h2",[t._v("円が動いているように描く")]),t._v(" "),n("MiniPage",{attrs:{type:"half"}},[n("Paragraph",[t._v("\n      円が動いているように見せるには，重ね書きではなく，書き直す必要がある。\n      そのため，background を描き直し，それまで描画されていたものを消す処理を追加する。\n      "),n("Code",{attrs:{url:"/codes/p5tutorials/p5tutorial2/moving_circle.js",language:"javascript",title:"stacked_circles.js: コード"}})],1)],1),t._v(" "),n("MiniPage",{attrs:{type:"half"}},[n("Paragraph",[n("Canvas",{attrs:{title:"moving_circles.js: 出力",file:"p5Tutorial/IIc.js",width:"300px",height:"300px"}})],1),t._v("\n    (デモのためにループさせている。)\n  ")],1),t._v(" "),n("h2",[t._v("複数の円が動いているように描く")]),t._v(" "),n("MiniPage",{attrs:{type:"half"}},[n("Paragraph",[t._v("\n      複数の円が動いているように見せるには，draw() 内で background() の後にそれぞれの描画をする。\n      "),n("Code",{attrs:{url:"/codes/p5tutorials/p5tutorial2/moving_circles.js",language:"javascript",title:"moving_circles.js: コード"}})],1),t._v(" "),n("Paragraph",[t._v("\n      同じのアニメーションを描画するプログラムを for 文を使って書くと，\n      "),n("Code",{attrs:{url:"/codes/p5tutorials/p5tutorial2/moving_circles_for.js",language:"javascript",title:"moving_circles_for.js: コード"}}),t._v("\n      のようになる。\n    ")],1)],1),t._v(" "),n("MiniPage",{attrs:{type:"half"}},[n("Paragraph",[n("Canvas",{attrs:{title:"moving_circles.js: 出力",file:"p5Tutorial/IId.js",width:"300px",height:"300px"}})],1),t._v("\n    (デモのためにループさせている。)\n  ")],1),t._v(" "),n("Footer")],1)}),[],!1,null,"1f4a6b49",null);e.default=component.exports}}]);