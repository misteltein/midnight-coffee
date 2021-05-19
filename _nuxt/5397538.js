(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{503:function(t,_,v){"use strict";v.r(_);var n={name:"character_encoding.vue",head:function(){return{title:"テキスト形式における文字コードの概念",meta:[{hid:"description",name:"description",content:""},{hid:"keyword",name:"keyword",content:"情報科学,ASCII,UTF-8,２進数,テキスト形式"},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:title",property:"og:title",content:"テキスト形式における文字コードの概念"},{hid:"og:description",property:"og:description",content:""},{hid:"og:url",property:"og:url",content:"https://misteltein.github.io/midnight-coffee/informatics/character_encoding"},{hid:"og:image",property:"og:image",content:"https://misteltein.github.io/midnight-coffee/images/secret_cat.png"}]}}},r=v(53),component=Object(r.a)(n,(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",[v("Header"),t._v(" "),v("h1",[t._v("テキスト形式における文字コードの概念")]),t._v(" "),v("MiniPage",[v("h2",[t._v("テキストファイルとは何か")]),t._v(" "),v("Paragraph",[t._v("\n      コンピュータで扱うファイルは 2 進数を基本として表す。\n      つまり 0 と 1 の並びで情報を表現する。\n      このファイルをバイナリファイルと呼び，さらにすべての情報が文字に変換されるものを特に区別してテキストファイルと呼ぶ。\n      つまり，「コンピュータ上のファイルはすべてバイナリファイルである」と言って良いのだが，\n      これは便利ではないので，通常はテキストファイルだと言えるものについてはテキストファイルであるという。\n    ")]),t._v(" "),v("h3",[t._v("2 進数のまとまり")]),t._v(" "),v("Paragraph",[t._v("\n      10 進数では 1 桁を 0 から 9 で表すのに対し，2 進数では 0 と 1 で表す。\n      10 進数で 0, 1, 2 は 2 進数では 0, 1, 10 となる。\n      そのため，2 進数ではすぐに桁上がりする。\n    ")]),t._v(" "),v("Paragraph",[t._v("\n      16 進数では 1 桁を 0 から f で表す。10 進数の 10 は 16 進数では a であり，\n      10 進数の 15 は 16 進数では f である。10 進数の 16 は 16 進数では 10 である。\n    ")]),t._v(" "),v("Paragraph",[t._v("\n      2 進数の桁数を bit （ビット）と呼ぶ。例えば 1 桁の 2 進数は 1 bit である。\n      コンピュータの内部では 8 bit（オクテット）をひとまとまりにして扱うことが多い。\n      この単位は 1 Byte（バイト）と呼ばれる。\n    ")]),t._v(" "),v("Paragraph",[t._v("\n      1 Byte の値（例えば10100101）はヒトには判別しにくいため，これ 4 桁ずつにわけ，それぞれを 16 進数で表現することがある。\n      例えば，10100101 → 1010, 0101 → a5 のように 2 進数を 16 進数表記に直す。\n      10100101 より a5 のほうが読みやすい。\n    ")]),t._v(" "),v("Paragraph",[v("table",{staticClass:"table table-striped",staticStyle:{width:"300px"}},[v("caption",[t._v("10 進数, 2 進数，16 進数の対応表")]),t._v(" "),v("thead",[v("tr",[v("th",{attrs:{scope:"col"}},[t._v("10 進数")]),t._v(" "),v("th",{attrs:{scope:"col"}},[t._v("2 進数")]),t._v(" "),v("th",{attrs:{scope:"col"}},[t._v("16 進数")])])]),t._v(" "),v("tbody",[v("tr",[v("th",{attrs:{scope:"row"}},[t._v("0")]),t._v(" "),v("td",[t._v("0000")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),v("td",[t._v("0001")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),v("td",[t._v("0010")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("3")]),t._v(" "),v("td",[t._v("0011")]),t._v(" "),v("td",[t._v("3")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("4")]),t._v(" "),v("td",[t._v("0100")]),t._v(" "),v("td",[t._v("4")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("5")]),t._v(" "),v("td",[t._v("0101")]),t._v(" "),v("td",[t._v("5")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("6")]),t._v(" "),v("td",[t._v("0110")]),t._v(" "),v("td",[t._v("6")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("7")]),t._v(" "),v("td",[t._v("0111")]),t._v(" "),v("td",[t._v("7")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("8")]),t._v(" "),v("td",[t._v("1000")]),t._v(" "),v("td",[t._v("8")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("9")]),t._v(" "),v("td",[t._v("1001")]),t._v(" "),v("td",[t._v("9")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("10")]),t._v(" "),v("td",[t._v("1010")]),t._v(" "),v("td",[t._v("10")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("11")]),t._v(" "),v("td",[t._v("1011")]),t._v(" "),v("td",[t._v("11")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("12")]),t._v(" "),v("td",[t._v("1100")]),t._v(" "),v("td",[t._v("12")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("13")]),t._v(" "),v("td",[t._v("1101")]),t._v(" "),v("td",[t._v("13")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("14")]),t._v(" "),v("td",[t._v("1110")]),t._v(" "),v("td",[t._v("14")])]),t._v(" "),v("tr",[v("th",{attrs:{scope:"row"}},[t._v("15")]),t._v(" "),v("td",[t._v("1111")]),t._v(" "),v("td",[t._v("15")])])])])]),t._v(" "),v("h3",[t._v("符号化文字集合と文字符号化方式")]),t._v(" "),v("Paragraph",[t._v("\n      コンピュータで文字を扱うためには，まず必要な文字を用意しておく必要がある。\n      そして，それぞれの文字をコンピュータ上で管理するためにはそれぞれの文字に固有な番号（符号，コード値）を振る必要がある（この番号は 2 進数である）。\n      この文字と番号の対応表が**符号化文字集合**である。代表的なものには，ASCII, JIS, や Unicode がある。\n    ")]),t._v(" "),v("Paragraph",[t._v("\n      様々な国の文字に対応するためには複数の符号化文字集合を組み合わせて運用する必要があるが，\n      工夫をしないと符号化文字集合の番号（コード値）が衝突するため使用できない。\n      そこで，この衝突を回避しながら複数の符号化文字集合を運用するための方式が用意された。\n      この方式のことを文字符号化方式という。UTF-8, Shift-JIS などが代表的である。\n    ")]),t._v(" "),v("h3",[t._v("ASCII")]),t._v(" "),v("Paragraph",[t._v("\n      American Standard Code for Information Interchange (ASCII) は，\n      英数字とハードウェアを制御するための文字から構成された符号化文字集合である。1 Byte のコード値で\n      1 文字が表されている。\n    ")]),t._v(" "),v("Paragraph",[t._v("\n      ASCIIのコード値と文字の表（ 2 桁の 16 進数とそれに対応する文字の表）：\n      "),v("pre",[t._v("      2 3 4 5 6 7\n      -------------\n     0:   0 @ P ` p\n     1: ! 1 A Q a q\n     2: \" 2 B R b r\n     3: # 3 C S c s\n     4: $ 4 D T d t\n     5: % 5 E U e u\n     6: & 6 F V f v\n     7: ' 7 G W g w\n     8: ( 8 H X h x\n     9: ) 9 I Y i y\n     A: * : J Z j z\n     B: + ; K [ k {\n     C: , < L \\ l |\n     D: - = M ] m }\n     E: . > N ^ n ~\n     F: / ? O _ o DEL\n      ")])]),t._v(" "),v("Paragraph",[t._v("\n      ここで，この ASCII のコード表に基づいてコード値に変換された文字列をもとに戻す方法を説明する。\n      686578 が与えられたとき，まず 68 65 78 のように２桁の16進数に分解する。\n      そして，6 列目 8 行目 を探し h を見つけ, 6 列目 5 行目を探し e を見つけ,\n      7 列目 8 行目を探し x を見つけることで，686578 から hex というコード化される前の文字列を得ることができる。\n    ")]),t._v(" "),v("Paragraph",[t._v("\n      ASCII では，大文字に対応するコード値に 2 進数 100000 を加えると対応するアルファベットの小文字に対応するコード値に変化する工夫がなされている。\n      例えば J のコード値は 1001010 (4a) であり\n      100000 を加えれば 1101010(6a) と j のコード値に変わる。\n    ")]),t._v(" "),v("Paragraph",[t._v("\n      多くの符号化方式は ASCII のコード値をそのまま残し，それ以外のコード値の領域に別の符号化文字集合を組み合わせている。\n      UTF-8 も ASCII のコード値をそのまま取り入れている。\n      そのため，アルファベットと一般的な記号のみを含む文字列であれば，コード値の並びは ASCII のコード表をもとに文字列に変換できる。\n      このような性質をもつとき，ASCII 互換であるという。\n    ")])],1),t._v(" "),v("Footer")],1)}),[],!1,null,"ecf50e0c",null);_.default=component.exports}}]);