(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{201:function(e,t,M){"use strict";M.r(t);M(121),M(118),M(119),M(120);var i=M(0),a=M.n(i),r=M(207),n=(M(208),M(87)),o=M(231),u=M.n(o),N=M(58),l=M(333),c=M(330),g=M(344),s=M(269),j=M(236),D=M.n(j),I=M(314),d=M.n(I),y=Object(N.a)(function(e){return{root:{position:"relative",display:"flex",flex:1,flexDirection:"column",minWidth:250,maxWidth:380},paper:{overflow:"hidden"},title:{margin:0},date:{margin:"5px 0px 15px",fontSize:"0.8em",fontWeight:"bold"},link:{textDecoration:"none"},readMore:{fontSize:"0.8em",display:"inline-block"},titleImg:{height:250,backgroundPosition:"center",transition:"all .5s"},titleImgPlaceholder:{height:250,width:"100%",background:s.a[200],overflow:"hidden"},preview:{display:"flex",alignItems:"center",justifyContent:"center"},scale:{transform:"scale(1.2)"}}}),z=function(e){var t,M,r,o=e.title,N=(e.date,e.path),s=(e.description,e.imageNode),j=y(),I=Object(i.useState)(!1),z=I[0],T=I[1];return a.a.createElement(g.a,{component:"section",m:2,className:j.root},a.a.createElement(l.a,{elevation:0,onMouseOver:function(){return T(!0)},onMouseOut:function(){return T(!1)}},a.a.createElement(n.Link,{to:N,className:j.link},a.a.createElement(l.a,{className:j.paper,elevation:0},a.a.createElement("div",{className:D()(j.titleImgPlaceholder,(t={},t[j.preview]=!s,t))},s?a.a.createElement(u.a,((r={className:D()(j.titleImg,(M={},M[j.scale]=z,M)),fluid:s.childImageSharp.fluid,alt:o}).alt="Image of "+o,r)):a.a.createElement(d.a,{color:"disabled",fontSize:"large"}))),a.a.createElement(g.a,{mt:1},a.a.createElement(l.a,{elevation:0},a.a.createElement(g.a,{p:1},a.a.createElement(c.a,{component:"h2",variant:"overline",align:"center",className:j.title},o)))))))};M.d(t,"pageQuery",function(){return f});var T=Object(N.a)(function(e){return{root:{marginTop:50,display:"flex",flexDirection:"row-reverse",justifyContent:"space-around",flexWrap:"wrap-reverse"}}}),f="3274941332";t.default=function(e){var t=e.data,M=T();return a.a.createElement(r.a,null,a.a.createElement("section",{className:M.root},t.markdown.edges.map(function(e){var M=(t.images.edges.find(function(t){return("/"+t.node.relativePath).includes(e.node.frontmatter.path.split("/recipes")[1])})||{}).node;return a.a.createElement(z,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,path:e.node.frontmatter.path,description:e.node.frontmatter.description,imageNode:M,key:e.node.id,SquareProps:{},RecipeProps:{}})})))}},205:function(e){e.exports={data:{site:{siteMetadata:{title:"A vegan kitchen",description:"Collection of yumm vegan recipes"}}}}},206:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzYwIiBoZWlnaHQ9IjMzNyIgdmlld0JveD0iMCAwIDEzNjAgMzM3IiBmaWxsPSJub25lIj4KICA8ZyBmaWxsPSIjRjdDMEFCIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICA8cGF0aAogICAgICBkPSJNNTAuNjg4IDI4MS4zMkM0Mi4wNDggMjgxLjMyIDM0LjA4IDI3OS45NzYgMjYuNzg0IDI3Ny4yODhDMTkuNjggMjc0Ljc5MiAxMi43NjggMjcwLjY2NCA2LjA0OCAyNjQuOTA0VjI1My4wOTZDMTguMTQ0IDI2Ni4zNDQgMzMuMjE2IDI3Mi45NjggNTEuMjY0IDI3Mi45NjhDNjcuNzc2IDI3Mi45NjggODAuNjQgMjY3Ljg4IDg5Ljg1NiAyNTcuNzA0Qzk5LjA3MiAyNDcuMzM2IDEwMy42OCAyMzIuMDcyIDEwMy42OCAyMTEuOTEyVjY5LjM1Mkg1MC40VjYxSDExMy4xODRWMjEwLjc2QzExMy4xODQgMjMzLjggMTA3LjYxNiAyNTEuMzY4IDk2LjQ4IDI2My40NjRDODUuMzQ0IDI3NS4zNjggNzAuMDggMjgxLjMyIDUwLjY4OCAyODEuMzJaTTE1OC4zMDggNjFIMTY3LjgxMkMxOTAuNDY4IDYxIDIwOC4xMzIgNjcuMDQ4IDIyMC44MDQgNzkuMTQ0QzIzMy40NzYgOTEuMDQ4IDIzOS44MTIgMTA3LjA4IDIzOS44MTIgMTI3LjI0QzIzOS44MTIgMTQxLjI1NiAyMzYuNzQgMTUzLjczNiAyMzAuNTk2IDE2NC42OEMyMjQuNDUyIDE3NS40MzIgMjE2LjEgMTgzLjc4NCAyMDUuNTQgMTg5LjczNkMxOTQuOTggMTk1LjQ5NiAxODMuMTcyIDE5OC4zNzYgMTcwLjExNiAxOTguMzc2SDE2Ny44MTJWMjc3SDE1OC4zMDhWNjFaTTE3MC42OTIgMTkwLjAyNEMxODguMTY0IDE5MC4wMjQgMjAyLjQ2OCAxODQuNjQ4IDIxMy42MDQgMTczLjg5NkMyMjQuNzQgMTYyLjk1MiAyMzAuMzA4IDE0Ny41OTIgMjMwLjMwOCAxMjcuODE2QzIzMC4zMDggMTA5IDIyNS4wMjggOTQuNiAyMTQuNDY4IDg0LjYxNkMyMDQuMSA3NC40NCAxODkuMzE2IDY5LjM1MiAxNzAuMTE2IDY5LjM1MkgxNjcuODEyVjE5MC4wMjRIMTcwLjY5MlpNMjU3LjIzMSAxMDMuMzM2QzI2OC41NTkgOTguMTUyIDI3NC4yMjMgODkuMzIgMjc0LjIyMyA3Ni44NFY0My43MkgyODQuNTkxVjc2Ljg0QzI4NC41OTEgODUuODY0IDI4Mi4wOTUgOTMuNjQgMjc3LjEwMyAxMDAuMTY4QzI3Mi4xMTEgMTA2LjUwNCAyNjUuNDg3IDExMC45MiAyNTcuMjMxIDExMy40MTZWMTAzLjMzNlpNMzYyLjg0OSAyODAuMTY4QzM1My42MzMgMjgwLjE2OCAzNDUuNDczIDI3OC42MzIgMzM4LjM2OSAyNzUuNTZDMzMxLjI2NSAyNzIuMjk2IDMyNi4xNzcgMjY4LjE2OCAzMjMuMTA1IDI2My4xNzZWMjQ3LjkxMkMzMjYuNzUzIDI1Ni4xNjggMzMxLjc0NSAyNjIuMzEyIDMzOC4wODEgMjY2LjM0NEMzNDQuNDE3IDI3MC4xODQgMzUyLjQ4MSAyNzIuMTA0IDM2Mi4yNzMgMjcyLjEwNEMzNzEuNjgxIDI3Mi4xMDQgMzc5LjI2NSAyNjkuMjI0IDM4NS4wMjUgMjYzLjQ2NEMzOTAuNzg1IDI1Ny41MTIgMzkzLjY2NSAyNDkuOTI4IDM5My42NjUgMjQwLjcxMkMzOTMuNjY1IDIzMi44NCAzOTIuMDMzIDIyNi43OTIgMzg4Ljc2OSAyMjIuNTY4QzM4NS41MDUgMjE4LjE1MiAzODAuMjI1IDIxMy43MzYgMzcyLjkyOSAyMDkuMzJMMzYxLjk4NSAyMDIuOTg0QzM1NC4xMTMgMTk4LjE4NCAzNDguMTYxIDE5NC40NCAzNDQuMTI5IDE5MS43NTJDMzQwLjI4OSAxODguODcyIDMzNy4yMTcgMTg1LjcwNCAzMzQuOTEzIDE4Mi4yNDhDMzMyLjYwOSAxNzguNiAzMzEuNDU3IDE3NC4zNzYgMzMxLjQ1NyAxNjkuNTc2QzMzMS40NTcgMTYxLjg5NiAzMzQuMTQ1IDE1NS43NTIgMzM5LjUyMSAxNTEuMTQ0QzM0NC44OTcgMTQ2LjUzNiAzNTEuOTA1IDE0NC4yMzIgMzYwLjU0NSAxNDQuMjMyQzM3MS4xMDUgMTQ0LjIzMiAzNzkuOTM3IDE0Ni42MzIgMzg3LjA0MSAxNTEuNDMyVjE2NC4xMDRDMzgxLjA4OSAxNTYuMjMyIDM3Mi41NDUgMTUyLjI5NiAzNjEuNDA5IDE1Mi4yOTZDMzU1LjI2NSAxNTIuMjk2IDM1MC4yNzMgMTUzLjgzMiAzNDYuNDMzIDE1Ni45MDRDMzQyLjU5MyAxNTkuOTc2IDM0MC42NzMgMTYzLjkxMiAzNDAuNjczIDE2OC43MTJDMzQwLjY3MyAxNzIuOTM2IDM0MS44MjUgMTc2LjY4IDM0NC4xMjkgMTc5Ljk0NEMzNDYuNDMzIDE4My4wMTYgMzQ5LjYwMSAxODUuODk2IDM1My42MzMgMTg4LjU4NEMzNTcuODU3IDE5MS4yNzIgMzY0Ljc2OSAxOTUuMzA0IDM3NC4zNjkgMjAwLjY4QzM4NC4xNjEgMjA2LjI0OCAzOTEuMzYxIDIxMi4wMDggMzk1Ljk2OSAyMTcuOTZDNDAwLjU3NyAyMjMuNzIgNDAyLjg4MSAyMzEuMzA0IDQwMi44ODEgMjQwLjcxMkM0MDIuODgxIDI1Mi42MTYgMzk4Ljk0NSAyNjIuMjE2IDM5MS4wNzMgMjY5LjUxMkMzODMuMzkzIDI3Ni42MTYgMzczLjk4NSAyODAuMTY4IDM2Mi44NDkgMjgwLjE2OFpNNjIzLjMxMSAyNzdMNTA4Ljk3NSAxNTYuOTA0VjI3N0g0OTkuNDcxVjYxSDUwOC45NzVWMTM5LjMzNkw1OTkuMTE5IDYxSDYxMi42NTVMNTExLjU2NyAxNDcuNEw2MzUuOTgzIDI3N0g2MjMuMzExWk02NzIuMzE0IDExNy43MzZDNjY5LjYyNiAxMTcuNzM2IDY2Ny4yMjYgMTE2Ljc3NiA2NjUuMTE0IDExNC44NTZDNjYzLjE5NCAxMTIuOTM2IDY2Mi4yMzQgMTEwLjUzNiA2NjIuMjM0IDEwNy42NTZDNjYyLjIzNCAxMDQuOTY4IDY2My4xOTQgMTAyLjY2NCA2NjUuMTE0IDEwMC43NDRDNjY3LjIyNiA5OC44MjQgNjY5LjYyNiA5Ny44NjQgNjcyLjMxNCA5Ny44NjRDNjc1LjAwMiA5Ny44NjQgNjc3LjMwNiA5OC44MjQgNjc5LjIyNiAxMDAuNzQ0QzY4MS4zMzggMTAyLjY2NCA2ODIuMzk0IDEwNC45NjggNjgyLjM5NCAxMDcuNjU2QzY4Mi4zOTQgMTEwLjUzNiA2ODEuMzM4IDExMi45MzYgNjc5LjIyNiAxMTQuODU2QzY3Ny4zMDYgMTE2Ljc3NiA2NzUuMDAyIDExNy43MzYgNjcyLjMxNCAxMTcuNzM2Wk02NjcuNzA2IDE0Ny40SDY3Ni45MjJWMjc3SDY2Ny43MDZWMTQ3LjRaTTc2Ni4yMzEgMjc4LjcyOEM3NTIuMDIzIDI3OC43MjggNzQwLjIxNSAyNzQuNDA4IDczMC44MDcgMjY1Ljc2OEM3MjEuNTkxIDI1Ny4xMjggNzE2Ljk4MyAyNDUuMjI0IDcxNi45ODMgMjMwLjA1NlY5NS4yNzJINzI2LjE5OVYxNDcuNEg3NjUuOTQzVjE1NS40NjRINzI2LjE5OVYyMzAuMDU2QzcyNi4xOTkgMjQyLjcyOCA3MjkuOTQzIDI1Mi43MTIgNzM3LjQzMSAyNjAuMDA4Qzc0NS4xMTEgMjY3LjExMiA3NTQuNzExIDI3MC42NjQgNzY2LjIzMSAyNzAuNjY0VjI3OC43MjhaTTg1MS41MTMgMjgwLjc0NEM4MzkuMDMzIDI4MC43NDQgODI3LjUxMyAyNzcuNzY4IDgxNi45NTMgMjcxLjgxNkM4MDYuNTg1IDI2NS44NjQgNzk4LjMyOSAyNTcuNzA0IDc5Mi4xODUgMjQ3LjMzNkM3ODYuMDQxIDIzNi45NjggNzgyLjk2OSAyMjUuMjU2IDc4Mi45NjkgMjEyLjJDNzgyLjk2OSAyMDAuMTA0IDc4Ni4wNDEgMTg4Ljk2OCA3OTIuMTg1IDE3OC43OTJDNzk4LjMyOSAxNjguNDI0IDgwNi42ODEgMTYwLjE2OCA4MTcuMjQxIDE1NC4wMjRDODI3Ljk5MyAxNDcuODggODM5LjgwMSAxNDQuODA4IDg1Mi42NjUgMTQ0LjgwOEM4NjMuNDE3IDE0NC44MDggODcyLjYzMyAxNDYuNTM2IDg4MC4zMTMgMTQ5Ljk5MkM4ODcuOTkzIDE1My40NDggODk1LjQ4MSAxNTguODI0IDkwMi43NzcgMTY2LjEyVjE4MS42NzJDODk2LjQ0MSAxNzIuMjY0IDg4OS4zMzcgMTY1LjE2IDg4MS40NjUgMTYwLjM2Qzg3My43ODUgMTU1LjM2OCA4NjQuMTg1IDE1Mi44NzIgODUyLjY2NSAxNTIuODcyQzg0Mi4xMDUgMTUyLjg3MiA4MzIuMTIxIDE1NS42NTYgODIyLjcxMyAxNjEuMjI0QzgxMy40OTcgMTY2LjYgODA2LjEwNSAxNzMuODk2IDgwMC41MzcgMTgzLjExMkM3OTQuOTY5IDE5Mi4zMjggNzkyLjE4NSAyMDIuMjE2IDc5Mi4xODUgMjEyLjc3NkM3OTIuMTg1IDIyNC4yOTYgNzk0Ljg3MyAyMzQuNjY0IDgwMC4yNDkgMjQzLjg4QzgwNS42MjUgMjUyLjkwNCA4MTIuODI1IDI2MC4wMDggODIxLjg0OSAyNjUuMTkyQzgzMS4wNjUgMjcwLjE4NCA4NDAuOTUzIDI3Mi42OCA4NTEuNTEzIDI3Mi42OEM4NzMuMDE3IDI3Mi42OCA4OTAuMTA1IDI2Mi45ODQgOTAyLjc3NyAyNDMuNTkyVjI1OS4xNDRDODk1Ljg2NSAyNjYuNDQgODg4LjE4NSAyNzEuOTEyIDg3OS43MzcgMjc1LjU2Qzg3MS40ODEgMjc5LjAxNiA4NjIuMDczIDI4MC43NDQgODUxLjUxMyAyODAuNzQ0Wk05MjguMjY5IDYxSDkzNy40ODVWMTc0LjE4NEM5NDEuNTE3IDE2NS41NDQgOTQ4LjMzMyAxNTguNDQgOTU3LjkzMyAxNTIuODcyQzk2Ny43MjUgMTQ3LjExMiA5NzcuNjEzIDE0NC4yMzIgOTg3LjU5NyAxNDQuMjMyQzEwMDUuODQgMTQ0LjIzMiAxMDE5Ljg1IDE0OS4yMjQgMTAyOS42NSAxNTkuMjA4QzEwMzkuNjMgMTY5LjE5MiAxMDQ0LjYyIDE4My4zMDQgMTA0NC42MiAyMDEuNTQ0VjI3N0gxMDM1LjQxVjIwMS41NDRDMTAzNS40MSAxODUuOCAxMDMxLjE4IDE3My43MDQgMTAyMi43MyAxNjUuMjU2QzEwMTQuNDggMTU2LjYxNiAxMDAyLjc3IDE1Mi4yOTYgOTg3LjU5NyAxNTIuMjk2Qzk3OC4zODEgMTUyLjI5NiA5NjkuOTMzIDE1NC41MDQgOTYyLjI1MyAxNTguOTJDOTU0LjU3MyAxNjMuMTQ0IDk0OC41MjUgMTY5LjA5NiA5NDQuMTA5IDE3Ni43NzZDOTM5LjY5MyAxODQuMjY0IDkzNy40ODUgMTkyLjUyIDkzNy40ODUgMjAxLjU0NFYyNzdIOTI4LjI2OVY2MVpNMTE0NC4wNiAyNzIuMzkyQzExNTQuMDQgMjcyLjM5MiAxMTYzLjU1IDI2OS44IDExNzIuNTcgMjY0LjYxNkMxMTgxLjYgMjU5LjQzMiAxMTg5LjA4IDI1Mi4zMjggMTE5NS4wNCAyNDMuMzA0VjI1Ny45OTJDMTE4Ny45MyAyNjUuODY0IDExODAuMTYgMjcxLjYyNCAxMTcxLjcxIDI3NS4yNzJDMTE2My4yNiAyNzguNzI4IDExNTMuNjYgMjgwLjQ1NiAxMTQyLjkxIDI4MC40NTZDMTEzMSAyODAuNDU2IDExMTkuNzcgMjc3LjI4OCAxMTA5LjIxIDI3MC45NTJDMTA5OC44NCAyNjQuNjE2IDEwOTAuNDkgMjU2LjE2OCAxMDg0LjE2IDI0NS42MDhDMTA3OC4wMSAyMzUuMDQ4IDEwNzQuOTQgMjIzLjgxNiAxMDc0Ljk0IDIxMS45MTJDMTA3NC45NCAxOTkuMDQ4IDEwNzguMDEgMTg3LjUyOCAxMDg0LjE2IDE3Ny4zNTJDMTA5MC4zIDE2Ni45ODQgMTA5OC42NSAxNTguOTIgMTEwOS4yMSAxNTMuMTZDMTExOS45NiAxNDcuNCAxMTMxLjg3IDE0NC41MiAxMTQ0LjkyIDE0NC41MkMxMTY0Ljg5IDE0NC41MiAxMTgxLjg4IDE1Mi4zOTIgMTE5NS45IDE2OC4xMzZMMTEwNS40NyAyNTcuNDE2QzExMTEuOCAyNjIuNiAxMTE3Ljk1IDI2Ni40NCAxMTIzLjkgMjY4LjkzNkMxMTI5Ljg1IDI3MS4yNCAxMTM2LjU3IDI3Mi4zOTIgMTE0NC4wNiAyNzIuMzkyWk0xMDg0LjE2IDIxMS4wNDhDMTA4NC4xNiAyMjYuOTg0IDEwODkuNDQgMjQwLjYxNiAxMTAwIDI1MS45NDRMMTE4NC4zOCAxNjguMTM2QzExNzguMDQgMTYyLjU2OCAxMTcxLjkgMTU4LjYzMiAxMTY1Ljk1IDE1Ni4zMjhDMTE2MCAxNTMuODMyIDExNTIuODkgMTUyLjU4NCAxMTQ0LjY0IDE1Mi41ODRDMTEzMi45MiAxNTIuNTg0IDExMjIuNDYgMTU1LjE3NiAxMTEzLjI0IDE2MC4zNkMxMTA0LjIyIDE2NS4zNTIgMTA5Ny4xMiAxNzIuMjY0IDEwOTEuOTMgMTgxLjA5NkMxMDg2Ljc1IDE4OS45MjggMTA4NC4xNiAxOTkuOTEyIDEwODQuMTYgMjExLjA0OFpNMTIyNC43MSAxNDcuNEgxMjMzLjkyVjE3Ni4yQzEyMzguMTUgMTY2LjYgMTI0NS4zNSAxNTguOTIgMTI1NS41MiAxNTMuMTZDMTI2NS43IDE0Ny4yMDggMTI3Ni45MyAxNDQuMjMyIDEyODkuMjIgMTQ0LjIzMkMxMzA1LjE1IDE0NC4yMzIgMTMxNy43MyAxNDkuMzIgMTMyNi45NSAxNTkuNDk2QzEzMzYuMzUgMTY5LjQ4IDEzNDEuMDYgMTgzLjQ5NiAxMzQxLjA2IDIwMS41NDRWMjc3SDEzMzEuODRWMjAxLjU0NEMxMzMxLjg0IDE4NS45OTIgMTMyOCAxNzMuODk2IDEzMjAuMzIgMTY1LjI1NkMxMzEyLjgzIDE1Ni42MTYgMTMwMi4yNyAxNTIuMjk2IDEyODguNjQgMTUyLjI5NkMxMjc4LjY2IDE1Mi4yOTYgMTI2OS40NCAxNTQuNiAxMjYwLjk5IDE1OS4yMDhDMTI1Mi43NCAxNjMuNjI0IDEyNDYuMTEgMTY5Ljc2OCAxMjQxLjEyIDE3Ny42NEMxMjM2LjMyIDE4NS41MTIgMTIzMy45MiAxOTQuNDQgMTIzMy45MiAyMDQuNDI0VjI3N0gxMjI0LjcxVjE0Ny40WiIKICAgICAgZmlsbD0iYmxhY2siCiAgICAvPgogIDwvZz4KPC9zdmc+Cg=="},207:function(e,t,M){"use strict";var i=M(205),a=M(0),r=M.n(a),n=M(2),o=M.n(n),u=M(216),N=M.n(u),l=M(87),c=M(335),g=M(58),s=M(107),j=M(336),D=M(344),I=(M(208),M(40),M(329)),d=function(e){return r.a.createElement(I.a,Object.assign({component:l.Link},e))},y=M(331),z=Object(y.a)(function(e){return{menu:{height:"100%",listStyle:"none",margin:0,marginTop:e.spacing(4),display:"flex",fontSize:"0.9em","&>li":{margin:"10px 0px",padding:"0px 20px"}},menu__item:{color:e.palette.secondary.main,textDecoration:"none","&:hover":{textDecoration:"none"}},menuItemSelected:{textDecoration:"underline",color:e.palette.primary.main,"&:hover":{textDecoration:"underline"}}}}),T=function(){var e=z(),t=function(t){var M=t.to,i=t.children,a=t.partiallyActive,n=void 0===a||a;return r.a.createElement("li",null,r.a.createElement(d,{to:M,partiallyActive:n,className:e.menu__item,activeClassName:e.menuItemSelected},i))};return r.a.createElement("nav",null,r.a.createElement("ul",{className:e.menu},r.a.createElement(t,{partiallyActive:!1,to:"/"},"home"),r.a.createElement(t,{to:"/recipes"},"recipes")))},f=M(206),E=M.n(f),x=M(332),A=M(334),L=Object(y.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},appBar:{borderBottom:"1px solid "+e.palette.divider},toolbar:{flexWrap:"wrap",justifyContent:"space-between",marginBottom:0,padding:"20px 20px 0px",display:"flex",flexDirection:"column",overflow:"hidden"},toolbarTitle:{flexGrow:1},link:{color:e.palette.common.white,textDecoration:"none"},header__logo:{marginBottom:0,width:500}}}),m=function(e){e.siteTitle;var t=L();return r.a.createElement(x.a,{position:"static",color:"inherit",elevation:0,className:t.appBar},r.a.createElement(A.a,{className:t.toolbar},r.a.createElement(d,{to:"/",className:t.link},r.a.createElement("img",{className:t.header__logo,src:E.a,alt:"Logo"})),r.a.createElement(T,null)))},O=Object(y.a)(function(e){return{footer:{borderTop:"1px solid "+e.palette.divider,marginTop:32,height:150,width:"100%",display:"flex",flexDirection:"column"},copyright:{width:"100%",display:"flex",justifyContent:"center",padding:16,fontSize:".8em",color:"#9fa7a7",fontWeight:"400"},footerNav:{flex:1}}}),p=function(){var e=O();return r.a.createElement("footer",{className:e.footer},r.a.createElement("section",{className:e.footerNav}),r.a.createElement("section",{className:e.copyright},"created with love in hamburg, germany"))},h=M(217),S=M.n(h),Q=M(315),w=Object(Q.a)({palette:{primary:{main:"#f7c0ab"},secondary:{main:"#9fa7a7"},error:{main:S.a.A400},background:{default:"#fff"}},typography:{textRendering:"optimizeLegibility"},overrides:{MuiLinearProgress:{root:{height:2,width:"80%"}}}}),k=Object(g.a)(function(e){return{"@global":{"#___gatsby":{minHeight:"100%"},"#___gatsby > div":{minHeight:"100%"},html:{fontFamily:"sans-serif","-ms-text-size-adjust":"100%","-webkit-text-size-adjust":"100%",minHeight:"100%"},body:{margin:0,minHeight:"100%"},img:{maxWidth:"100%",marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:"1.45rem",borderStyle:"none"}}}}),C=function(e){var t=e.children;return k(),r.a.createElement(l.StaticQuery,{query:"1698205358",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"react, web development, cooking, vegan, recipes, healthy"},{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}]},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,500,700",rel:"stylesheet"})),r.a.createElement(s.a,{theme:w},r.a.createElement(c.a,null),r.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},r.a.createElement(m,null),r.a.createElement(j.a,{style:{flex:1},maxWidth:"lg"},r.a.createElement(D.a,{mt:4},t)),r.a.createElement(p,null))))},data:i})};C.propTypes={children:o.a.node.isRequired};t.a=C},223:function(e,t,M){"use strict";var i=M(3),a=M.n(i),r=M(60),n=M.n(r),o=M(13),u=M.n(o),N=M(0),l=M.n(N),c=(M(2),M(61)),g=M(204),s=M(210),j=l.a.forwardRef(function(e,t){var M,i=e.children,r=e.classes,o=e.className,N=e.color,g=e.component,j=e.fontSize,D=e.htmlColor,I=e.titleAccess,d=e.viewBox,y=u()(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return l.a.createElement(g,a()({className:Object(c.a)(r.root,(M={},n()(M,r["color".concat(Object(s.a)(N))],"inherit"!==N),n()(M,r["fontSize".concat(Object(s.a)(j))],"default"!==j),M),o),focusable:"false",viewBox:d,color:D,"aria-hidden":I?"false":"true",role:I?"img":"presentation",ref:t},y),i,I?l.a.createElement("title",null,I):null)});j.defaultProps={color:"inherit",component:"svg",fontSize:"default",viewBox:"0 0 24 24"},j.muiName="SvgIcon",t.a=Object(g.a)(function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}},{name:"MuiSvgIcon"})(j)},229:function(e,t,M){"use strict";M.r(t);var i=M(223);M.d(t,"default",function(){return i.a})},231:function(e,t,M){"use strict";var i=M(12);t.__esModule=!0,t.default=void 0;var a,r=i(M(17)),n=i(M(62)),o=i(M(88)),u=i(M(3)),N=i(M(0)),l=i(M(2)),c=function(e){var t=(0,u.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},g=Object.create({}),s=function(e){var t=c(e),M=t.fluid?t.fluid.src:t.fixed.src;return g[M]||!1},j=new WeakMap;var D=function(e,t){var M=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(j.has(e.target)){var t=j.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),j.delete(e.target),t())}})},{rootMargin:"200px"})),a);return M&&(M.observe(e),j.set(e,t)),function(){M.unobserve(e),j.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',M=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+M+"/>":"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+M+a+t+n+r+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},d=N.default.forwardRef(function(e,t){var M=e.sizes,i=e.srcSet,a=e.src,r=e.style,n=e.onLoad,l=e.onError,c=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return N.default.createElement("img",(0,u.default)({sizes:M,srcSet:i,src:a},c,{onLoad:n,onError:l,ref:t,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});d.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var y=function(e){function t(t){var M;M=e.call(this,t)||this;var i=!0,a=!1,r=t.fadeIn,o=s(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,a=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,a=!1);var u=!(t.critical&&!t.fadeIn);return M.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:a,fadeIn:r,hasNoScript:u,seenBefore:o},M.imageRef=N.default.createRef(),M.handleImageLoaded=M.handleImageLoaded.bind((0,n.default)((0,n.default)(M))),M.handleRef=M.handleRef.bind((0,n.default)((0,n.default)(M))),M}(0,r.default)(t,e);var M=t.prototype;return M.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:s(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},M.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},M.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=D(e,function(){var e=s(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},M.handleImageLoaded=function(){var e,t,M;e=this.props,t=c(e),M=t.fluid?t.fluid.src:t.fixed.src,g[M]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},M.render=function(){var e=c(this.props),t=e.title,M=e.alt,i=e.className,a=e.style,r=void 0===a?{}:a,n=e.imgStyle,o=void 0===n?{}:n,l=e.placeholderStyle,g=void 0===l?{}:l,s=e.placeholderClassName,j=e.fluid,D=e.fixed,y=e.backgroundColor,z=e.durationFadeIn,T=e.Tag,f=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,x=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,u.default)({opacity:E?1:0,transition:x?"opacity "+z+"ms":"none"},o),L="boolean"==typeof y?"lightgray":y,m={transitionDelay:z+"ms"},O=(0,u.default)({opacity:this.state.imgLoaded?0:1},x&&m,o,g),p={title:t,alt:this.state.isVisible?"":M,style:O,className:s};if(j){var h=j;return N.default.createElement(T,{className:(i||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(h.srcSet)},N.default.createElement(T,{style:{width:"100%",paddingBottom:100/h.aspectRatio+"%"}}),L&&N.default.createElement(T,{title:t,style:(0,u.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&m)}),h.base64&&N.default.createElement(d,(0,u.default)({src:h.base64},p)),h.tracedSVG&&N.default.createElement(d,(0,u.default)({src:h.tracedSVG},p)),this.state.isVisible&&N.default.createElement("picture",null,h.srcSetWebp&&N.default.createElement("source",{type:"image/webp",srcSet:h.srcSetWebp,sizes:h.sizes}),N.default.createElement(d,{alt:M,title:t,sizes:h.sizes,src:h.src,crossOrigin:this.props.crossOrigin,srcSet:h.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:f})),this.state.hasNoScript&&N.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,u.default)({alt:M,title:t},h))}}))}if(D){var S=D,Q=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},r);return"inherit"===r.display&&delete Q.display,N.default.createElement(T,{className:(i||"")+" gatsby-image-wrapper",style:Q,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},L&&N.default.createElement(T,{title:t,style:(0,u.default)({backgroundColor:L,width:S.width,opacity:this.state.imgLoaded?0:1,height:S.height},x&&m)}),S.base64&&N.default.createElement(d,(0,u.default)({src:S.base64},p)),S.tracedSVG&&N.default.createElement(d,(0,u.default)({src:S.tracedSVG},p)),this.state.isVisible&&N.default.createElement("picture",null,S.srcSetWebp&&N.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),N.default.createElement(d,{alt:M,title:t,width:S.width,height:S.height,sizes:S.sizes,src:S.src,crossOrigin:this.props.crossOrigin,srcSet:S.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:f})),this.state.hasNoScript&&N.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,u.default)({alt:M,title:t},S))}}))}return null},t}(N.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var z=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),T=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});y.propTypes={resolutions:z,sizes:T,fixed:z,fluid:T,fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string};var f=y;t.default=f},236:function(e,t,M){var i;!function(){"use strict";var M={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var n=a.apply(null,i);n&&e.push(n)}else if("object"===r)for(var o in i)M.call(i,o)&&i[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},237:function(e,t,M){"use strict";var i=M(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var M=r.default.memo(r.default.forwardRef(function(t,M){return r.default.createElement(n.default,(0,a.default)({},t,{ref:M}),e)}));0;return M.muiName=n.default.muiName,M};var a=i(M(3)),r=i(M(0)),n=i(M(229))},314:function(e,t,M){"use strict";var i=M(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(M(0)),r=(0,i(M(237)).default)(a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.default.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})),"Image");t.default=r}}]);
//# sourceMappingURL=component---src-pages-recipes-js-c872e92900e25fdf43be.js.map