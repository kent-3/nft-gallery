<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/secret-logo.png"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="sNFT Gallery"/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  border-radius: 100%;
  animation: rotate linear 10s infinite;
}

@keyframes rotate {
  from {transform: rotate(0deg);}
  to {transform: rotate(359deg);}
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 1.5rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<style>
@keyframes particles {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-2560px);
  }
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.space {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle,
.particle::after {
  background: transparent;
}

.particle::after {
  position: absolute;
  content: '';
  top: 2560px;
}

.particle:nth-child(1) {
  animation: particles 60s linear infinite;
}
.particle:nth-child(1), .particle:nth-child(1)::after {
  box-shadow: 0 0 grey, 1342px 1684px grey, 2505px 2293px grey, 1873px 347px grey, 2254px 1148px grey, 664px 1217px grey, 2124px 454px grey, 64px 1088px grey, 1361px 2294px grey, 566px 1490px grey, 405px 140px grey, 786px 52px grey, 856px 917px grey, 942px 2278px grey, 2549px 129px grey, 913px 839px grey, 808px 549px grey, 171px 1717px grey, 1934px 575px grey, 601px 1577px grey, 516px 1343px grey, 1353px 2303px grey, 787px 1996px grey, 1256px 794px grey, 544px 1644px grey, 2147px 533px grey, 1713px 2362px grey, 2182px 1622px grey, 1557px 689px grey, 1036px 1736px grey, 354px 2485px grey, 1480px 135px grey, 2493px 2179px grey, 461px 517px grey, 343px 708px grey, 663px 1851px grey, 189px 763px grey, 416px 1249px grey, 2319px 1880px grey, 2024px 2270px grey, 330px 583px grey, 617px 637px grey, 310px 2064px grey, 669px 1185px grey, 1729px 2133px grey, 765px 162px grey, 1579px 250px grey, 142px 2455px grey, 2224px 334px grey, 1181px 1980px grey, 402px 1139px grey, 2245px 2163px grey, 2154px 2269px grey, 1980px 1569px grey, 184px 1888px grey, 2357px 1439px grey, 1426px 575px grey, 485px 1039px grey, 987px 717px grey, 2498px 1764px grey, 2286px 73px grey, 71px 400px grey, 2330px 837px grey, 2412px 1438px grey, 256px 1503px grey, 2517px 2463px grey, 199px 2219px grey, 951px 1428px grey, 123px 1469px grey, 1789px 285px grey, 1995px 2128px grey, 1609px 1652px grey, 2035px 67px grey, 1223px 1508px grey, 1526px 2182px grey, 2502px 1913px grey, 2553px 253px grey, 1850px 2503px grey, 101px 2366px grey, 1642px 2061px grey, 448px 1968px grey, 1336px 99px grey, 1077px 446px grey, 258px 1233px grey, 1474px 430px grey, 1667px 820px grey, 1963px 661px grey, 209px 2558px grey, 722px 1656px grey, 1260px 37px grey, 390px 472px grey, 2077px 1573px grey, 2169px 2544px grey, 971px 392px grey, 464px 2092px grey, 998px 226px grey, 38px 2313px grey, 898px 1267px grey, 469px 576px grey, 920px 1422px grey, 293px 2018px grey, 654px 2437px grey, 1726px 1144px grey, 2379px 1086px grey, 598px 910px grey, 854px 2246px grey, 1368px 47px grey, 1232px 1336px grey, 760px 1079px grey, 2216px 949px grey, 1232px 1020px grey, 1828px 971px grey, 2284px 1014px grey, 768px 1252px grey, 631px 101px grey, 1695px 1337px grey, 342px 2137px grey, 801px 714px grey, 1717px 968px grey, 1925px 722px grey, 1171px 2458px grey, 1872px 528px grey, 2526px 1021px grey, 1116px 1354px grey, 2358px 958px grey, 199px 1987px grey, 1676px 1889px grey, 1303px 193px grey, 959px 1982px grey, 1263px 1913px grey, 1695px 297px grey, 495px 1020px grey, 2207px 64px grey, 1719px 2526px grey, 2125px 2156px grey, 831px 371px grey, 2481px 88px grey, 2534px 1959px grey, 149px 805px grey, 181px 188px grey, 2251px 642px grey, 2216px 1937px grey, 1783px 2236px grey, 1227px 1600px grey, 291px 2112px grey, 2443px 573px grey, 2307px 447px grey, 2096px 1168px grey, 2202px 560px grey, 1566px 1862px grey, 1523px 733px grey, 1262px 337px grey, 1165px 2396px grey, 827px 2455px grey, 1241px 1475px grey, 631px 2240px grey, 2129px 1418px grey, 875px 1071px grey, 1194px 1683px grey, 1031px 1679px grey, 1540px 1103px grey, 1217px 191px grey, 56px 1430px grey, 2295px 2162px grey, 806px 784px grey, 99px 44px grey, 2036px 1917px grey, 851px 292px grey, 311px 2552px grey, 2144px 2537px grey, 1558px 2325px grey, 2170px 1924px grey, 2400px 166px grey, 1656px 2224px grey, 1241px 1832px grey, 328px 496px grey, 1636px 2135px grey, 1075px 1831px grey, 2344px 550px grey, 1872px 1176px grey, 1245px 1508px grey, 890px 1264px grey, 1821px 1271px grey, 2248px 534px grey, 1430px 563px grey, 235px 1195px grey, 1938px 1533px grey, 1936px 829px grey, 412px 610px grey, 1137px 505px grey, 1771px 733px grey, 702px 974px grey, 2269px 1901px grey, 2184px 506px grey, 811px 2548px grey, 104px 2066px grey, 536px 2539px grey, 2429px 1475px grey, 70px 1224px grey, 1238px 558px grey, 1792px 1288px grey, 1422px 2352px grey, 1677px 1240px grey, 2328px 112px grey, 238px 984px grey, 1023px 1792px grey, 1727px 1777px grey, 2349px 1251px grey, 2111px 413px grey, 1086px 1184px grey, 1207px 54px grey, 1766px 168px grey, 644px 2328px grey, 199px 2332px grey, 1254px 2355px grey, 274px 1789px grey, 1518px 2496px grey, 2491px 932px grey, 436px 109px grey, 1830px 1500px grey, 1055px 1008px grey, 378px 623px grey, 2080px 2044px grey, 260px 753px grey, 2097px 1349px grey, 2237px 197px grey, 1834px 177px grey, 2406px 791px grey, 1723px 212px grey, 916px 1407px grey, 369px 2071px grey, 734px 1914px grey, 427px 1570px grey, 196px 949px grey, 192px 2404px grey, 1101px 314px grey, 1577px 2019px grey, 774px 1939px grey, 1656px 349px grey, 109px 610px grey, 528px 1799px grey, 852px 726px grey, 2416px 1988px grey, 1034px 1162px grey, 2119px 1063px grey, 42px 715px grey, 2194px 2495px grey, 333px 774px grey, 1176px 1382px grey, 983px 2240px grey, 31px 2498px grey, 1516px 1556px grey, 1908px 1475px grey, 595px 1820px grey, 210px 656px grey, 547px 2451px grey, 2228px 1029px grey, 2513px 2250px grey, 1583px 1582px grey, 1844px 545px grey, 1871px 418px grey, 968px 2254px grey, 466px 1154px grey, 727px 2240px grey, 720px 2005px grey, 1968px 1398px grey, 1111px 2009px grey, 654px 2148px grey, 1003px 1361px grey, 1971px 1393px grey, 2531px 2443px grey, 912px 1604px grey, 323px 1664px grey, 2447px 933px grey, 560px 2422px grey, 2004px 194px grey, 669px 995px grey, 1199px 1685px grey, 602px 43px grey, 988px 1270px grey, 535px 1029px grey, 2371px 1127px grey, 372px 1223px grey, 2549px 2151px grey, 484px 2279px grey, 1346px 916px grey, 375px 1444px grey, 1262px 1391px grey, 2158px 2478px grey, 1254px 792px grey, 867px 520px grey, 2144px 2376px grey, 1477px 1021px grey, 2539px 1958px grey, 2017px 702px grey, 201px 1943px grey, 1573px 776px grey, 14px 2265px grey, 2139px 1291px grey, 621px 1641px grey, 299px 2154px grey, 433px 2250px grey, 1037px 243px grey, 2094px 801px grey, 118px 990px grey, 1843px 878px grey, 2500px 1279px grey, 2097px 2246px grey, 2045px 70px grey, 1274px 1480px grey, 962px 674px grey, 2497px 160px grey, 2516px 278px grey, 841px 2050px grey, 1120px 944px grey, 1638px 678px grey, 2511px 1637px grey, 1727px 1365px grey, 2100px 1619px grey, 506px 52px grey, 442px 817px grey, 1753px 2557px grey, 1751px 2237px grey, 2084px 707px grey, 739px 2293px grey, 2528px 294px grey, 1805px 316px grey, 477px 2105px grey, 369px 2487px grey, 1876px 826px grey, 470px 1586px grey, 158px 1472px grey, 380px 2479px grey, 1024px 1628px grey, 585px 1707px grey, 840px 1241px grey, 2052px 963px grey, 2390px 94px grey, 660px 1875px grey, 1020px 633px grey, 409px 355px grey, 1089px 1012px grey, 583px 899px grey, 388px 1072px grey, 69px 1752px grey, 1852px 1136px grey, 721px 722px grey, 1551px 2204px grey, 111px 2475px grey, 1070px 1954px grey, 96px 2096px grey, 466px 1253px grey, 664px 360px grey, 143px 1121px grey, 1793px 1301px grey, 647px 187px grey, 2049px 2237px grey, 596px 819px grey, 1412px 2200px grey, 272px 185px grey, 1087px 2200px grey, 1185px 342px grey, 2317px 330px grey, 19px 86px grey, 909px 2226px grey, 2083px 760px grey, 2428px 1626px grey, 2507px 913px grey, 1718px 864px grey, 1175px 402px grey, 559px 131px grey, 1839px 1285px grey, 2346px 1739px grey, 1798px 1369px grey, 2268px 1537px grey, 458px 614px grey, 2383px 1267px grey, 927px 2163px grey, 1604px 2036px grey, 260px 2543px grey, 1953px 804px grey, 1010px 940px grey, 1126px 648px grey, 2174px 1776px grey, 1901px 1051px grey, 1988px 298px grey, 863px 1934px grey, 799px 2337px grey, 790px 1913px grey, 2346px 728px grey, 1392px 5px grey, 1682px 401px grey, 613px 1686px grey, 1019px 1687px grey, 81px 2125px grey, 2475px 2015px grey, 311px 2026px grey, 1593px 2480px grey, 716px 425px grey, 1416px 1336px grey, 2080px 2159px grey, 1705px 1623px grey, 183px 838px grey, 1392px 1479px grey, 2064px 2422px grey, 2099px 231px grey, 1308px 2185px grey, 590px 570px grey, 721px 2445px grey, 666px 310px grey, 1609px 2425px grey, 1441px 1210px grey, 1775px 2272px grey, 17px 1774px grey, 2511px 1116px grey, 590px 2143px grey, 1324px 1163px grey, 81px 1626px grey, 167px 183px grey, 460px 154px grey, 1929px 430px grey, 1163px 1506px grey, 728px 2305px grey, 1326px 2446px grey, 326px 2265px grey, 2448px 2471px grey, 1062px 1677px grey, 807px 2062px grey, 1607px 1126px grey, 728px 790px grey, 488px 2245px grey, 1706px 641px grey, 1702px 1882px grey, 1089px 2437px grey, 2150px 254px grey, 557px 1550px grey, 1883px 1975px grey, 1427px 1389px grey, 1707px 1879px grey, 1373px 747px grey, 1269px 1217px grey, 217px 1863px grey, 2268px 392px grey, 942px 1534px grey, 2038px 2289px grey, 2032px 602px grey, 1744px 760px grey, 2261px 684px grey, 1259px 1758px grey, 1727px 2066px grey, 599px 891px grey, 611px 1947px grey, 1494px 2054px grey, 675px 10px grey, 1593px 1689px grey, 1327px 640px grey, 2068px 1621px grey, 705px 614px grey, 1846px 1130px grey, 125px 1257px grey, 2502px 2472px grey, 200px 1563px grey, 1524px 641px grey, 2351px 778px grey, 1454px 2063px grey, 990px 2274px grey, 1912px 744px grey, 2121px 726px grey, 2100px 1575px grey, 417px 1580px grey, 1116px 614px grey, 1788px 1726px grey, 1296px 2088px grey, 1523px 2091px grey, 1252px 2447px grey, 1864px 1559px grey, 1471px 1072px grey, 1778px 822px grey, 1916px 534px grey, 2010px 722px grey, 1840px 869px grey, 644px 1617px grey, 2249px 2039px grey, 2229px 1928px grey, 1888px 420px grey, 685px 933px grey, 1107px 701px grey, 1876px 1835px grey, 721px 2532px grey, 1935px 2244px grey, 983px 1340px grey, 39px 706px grey, 2337px 97px grey, 2552px 245px grey, 1272px 2428px grey, 179px 1828px grey, 1913px 1568px grey, 210px 47px grey, 2293px 863px grey, 254px 724px grey, 1470px 1359px grey, 332px 1491px grey, 2311px 301px grey, 1480px 2560px grey, 251px 96px grey, 1619px 2176px grey, 2469px 1038px grey, 1793px 2288px grey, 284px 1904px grey, 850px 841px grey, 1688px 1752px grey, 192px 919px grey, 472px 480px grey, 121px 107px grey, 1653px 1482px grey, 109px 2009px grey, 74px 731px grey, 315px 947px grey, 64px 834px grey, 957px 2170px grey, 326px 2239px grey, 95px 1971px grey, 1174px 1616px grey, 780px 152px grey, 1588px 404px grey, 68px 2540px grey, 749px 78px grey, 236px 2351px grey, 477px 1650px grey, 440px 822px grey, 1205px 2141px grey, 586px 403px grey, 952px 90px grey, 795px 1203px grey, 2084px 999px grey, 637px 1108px grey, 1793px 33px grey, 2340px 1486px grey, 211px 2310px grey, 2483px 2089px grey, 2267px 1470px grey, 438px 2247px grey, 209px 1777px grey, 2397px 2294px grey, 2164px 100px grey, 2px 2558px grey, 79px 1504px grey, 181px 1658px grey, 1608px 2105px grey, 765px 650px grey, 2382px 2354px grey, 1688px 2285px grey, 1479px 155px grey, 636px 2552px grey, 618px 1633px grey, 1930px 108px grey, 566px 2165px grey, 1961px 1007px grey, 2497px 2245px grey, 735px 1855px grey, 2235px 2203px grey, 1189px 1026px grey, 467px 2363px grey, 2079px 2464px grey, 1699px 2156px grey, 452px 318px grey, 978px 1095px grey, 2001px 148px grey, 2474px 1317px grey, 1983px 2216px grey, 2060px 1258px grey, 1359px 265px grey, 2088px 1280px grey, 2314px 1661px grey, 1579px 21px grey, 171px 1309px grey, 294px 2236px grey, 925px 1064px grey, 2269px 1629px grey, 11px 358px grey, 808px 385px grey, 1816px 128px grey, 477px 309px grey, 1993px 2126px grey, 1256px 2095px grey, 1395px 1265px grey, 944px 2399px grey, 2345px 2496px grey, 1359px 1856px grey, 1628px 1581px grey, 1477px 777px grey, 1562px 1422px grey, 264px 693px grey, 2244px 21px grey, 1372px 854px grey, 1615px 1537px grey, 1504px 2371px grey, 1465px 1518px grey, 1315px 1782px grey, 590px 996px grey, 1911px 391px grey;
  width: 1px;
  height: 1px;
}
.particle:nth-child(2) {
  animation: particles 120s linear infinite;
}
.particle:nth-child(2), .particle:nth-child(2)::after {
  box-shadow: 0 0 grey, 1408px 312px grey, 297px 1760px grey, 601px 1087px grey, 634px 240px grey, 1746px 678px grey, 1697px 37px grey, 214px 902px grey, 877px 39px grey, 1569px 4px grey, 401px 184px grey, 1025px 1134px grey, 1080px 1306px grey, 499px 337px grey, 1508px 2232px grey, 2204px 1556px grey, 586px 1879px grey, 344px 863px grey, 1204px 471px grey, 673px 1248px grey, 573px 1832px grey, 1845px 259px grey, 559px 1055px grey, 1680px 902px grey, 2311px 1833px grey, 736px 1025px grey, 1390px 1116px grey, 2450px 1794px grey, 1897px 2148px grey, 770px 1959px grey, 2023px 2365px grey, 991px 1423px grey, 1590px 585px grey, 1854px 1021px grey, 691px 2464px grey, 552px 471px grey, 418px 2471px grey, 1623px 40px grey, 662px 199px grey, 1837px 635px grey, 2016px 1020px grey, 2142px 2041px grey, 44px 868px grey, 271px 656px grey, 2248px 1267px grey, 2027px 31px grey, 204px 1675px grey, 620px 147px grey, 1894px 821px grey, 2105px 1353px grey, 2237px 1282px grey, 375px 766px grey, 379px 2135px grey, 2321px 78px grey, 91px 2160px grey, 8px 909px grey, 2547px 1557px grey, 542px 1439px grey, 2264px 50px grey, 555px 521px grey, 2071px 815px grey, 2296px 221px grey, 73px 2523px grey, 2391px 213px grey, 2290px 405px grey, 1594px 1130px grey, 141px 2397px grey, 1402px 829px grey, 2264px 238px grey, 1401px 2455px grey, 1390px 1994px grey, 954px 620px grey, 581px 1433px grey, 857px 1481px grey, 672px 2066px grey, 423px 1928px grey, 2244px 1606px grey, 2297px 2053px grey, 1195px 433px grey, 1260px 257px grey, 260px 56px grey, 498px 548px grey, 2142px 334px grey, 2454px 7px grey, 1312px 327px grey, 1663px 214px grey, 1239px 1430px grey, 1118px 589px grey, 682px 1513px grey, 2264px 1314px grey, 1342px 685px grey, 1896px 1059px grey, 79px 1580px grey, 2027px 371px grey, 1864px 2199px grey, 854px 1791px grey, 312px 1262px grey, 1521px 1532px grey, 308px 2540px grey, 2433px 1124px grey, 2291px 25px grey, 740px 63px grey, 2022px 2349px grey, 2164px 393px grey, 1911px 1363px grey, 719px 434px grey, 493px 288px grey, 2442px 9px grey, 134px 1429px grey, 828px 2081px grey, 1133px 1356px grey, 249px 2361px grey, 1839px 1029px grey, 570px 1160px grey, 325px 429px grey, 2522px 225px grey, 373px 1763px grey, 541px 856px grey, 189px 2319px grey, 1035px 823px grey, 65px 1417px grey, 2520px 2410px grey, 111px 323px grey, 460px 1308px grey, 2153px 495px grey, 733px 87px grey, 1523px 2059px grey, 2465px 393px grey, 2480px 2181px grey, 2244px 1716px grey, 454px 664px grey, 1914px 1365px grey, 1648px 1518px grey, 966px 1235px grey, 2053px 677px grey, 1082px 1209px grey, 1995px 1355px grey, 1222px 781px grey, 2463px 54px grey, 607px 580px grey, 1109px 1434px grey, 1363px 1496px grey, 1709px 423px grey, 1655px 193px grey, 692px 2461px grey, 930px 28px grey, 659px 1425px grey, 1689px 299px grey, 1134px 1220px grey, 776px 2488px grey, 1332px 927px grey, 1809px 44px grey, 208px 1681px grey, 1812px 909px grey, 202px 356px grey, 294px 1502px grey, 2155px 2437px grey, 2137px 228px grey, 92px 144px grey, 253px 844px grey, 2488px 82px grey, 1704px 2512px grey, 1047px 1459px grey, 425px 1071px grey, 2170px 2036px grey, 13px 374px grey, 288px 2127px grey, 1914px 1622px grey, 1980px 967px grey, 1960px 2268px grey, 2269px 1563px grey, 2134px 767px grey, 1817px 2369px grey, 1458px 229px grey, 1976px 654px grey, 956px 537px grey, 1342px 1321px grey, 2251px 1093px grey, 218px 2282px grey, 1340px 1587px grey, 173px 1701px grey, 1449px 1377px grey, 1350px 416px grey, 1527px 1167px grey, 1135px 784px grey, 2006px 1526px grey, 864px 2195px grey, 2464px 2346px grey, 913px 896px grey, 1642px 626px grey, 782px 367px grey, 593px 2423px grey, 1005px 1391px grey, 2162px 1849px grey, 1299px 1735px grey, 2393px 74px grey, 2472px 439px grey, 946px 2430px grey, 1432px 1628px grey, 2010px 293px grey, 1265px 136px grey;
  width: 2px;
  height: 2px;
}
.particle:nth-child(3) {
  animation: particles 180s linear infinite;
}
.particle:nth-child(3), .particle:nth-child(3)::after {
  box-shadow: 0 0 grey, 1950px 1915px grey, 1695px 1684px grey, 2549px 2211px grey, 1567px 2334px grey, 281px 1415px grey, 432px 691px grey, 1194px 676px grey, 702px 1964px grey, 44px 74px grey, 1838px 289px grey, 601px 1949px grey, 1143px 72px grey, 433px 529px grey, 2480px 1098px grey, 1190px 2387px grey, 461px 515px grey, 1282px 2055px grey, 2107px 1097px grey, 2271px 197px grey, 525px 911px grey, 1221px 1892px grey, 1524px 1301px grey, 1756px 1372px grey, 1329px 1691px grey, 2403px 346px grey, 2078px 2155px grey, 1034px 877px grey, 336px 860px grey, 287px 1930px grey, 665px 346px grey, 1406px 1827px grey, 722px 601px grey, 511px 1331px grey, 645px 1626px grey, 546px 1571px grey, 13px 1430px grey, 1963px 902px grey, 1390px 2025px grey, 939px 822px grey, 2032px 1384px grey, 2232px 2083px grey, 1316px 1716px grey, 2008px 803px grey, 1994px 1929px grey, 1651px 1624px grey, 382px 1911px grey, 162px 2560px grey, 2010px 933px grey, 1231px 2043px grey, 1214px 346px grey, 318px 2198px grey, 1310px 312px grey, 1232px 255px grey, 1291px 1857px grey, 1536px 1849px grey, 743px 360px grey, 994px 1004px grey, 2334px 2389px grey, 229px 273px grey, 469px 2081px grey, 287px 2417px grey, 655px 1945px grey, 1477px 809px grey, 1520px 11px grey, 1946px 672px grey, 1556px 1986px grey, 758px 1600px grey, 377px 2366px grey, 1896px 1352px grey, 696px 2092px grey, 2141px 2186px grey, 2524px 365px grey, 854px 1519px grey, 1250px 2363px grey, 1621px 2506px grey, 1510px 228px grey, 2383px 1892px grey, 674px 1680px grey, 1611px 1101px grey, 685px 2173px grey, 1510px 1272px grey, 1896px 1004px grey, 592px 672px grey, 671px 52px grey, 886px 1304px grey, 1718px 95px grey, 1806px 1008px grey, 1307px 2310px grey, 788px 362px grey, 2111px 2122px grey, 1383px 1051px grey, 791px 668px grey, 1738px 990px grey, 1265px 700px grey, 398px 627px grey, 1893px 27px grey, 2294px 1015px grey, 1884px 2362px grey, 2394px 853px grey, 471px 1695px grey;
  width: 3px;
  height: 3px;
}
.particle:nth-child(4) {
  animation: particles 400s linear infinite;
}
.particle:nth-child(4), .particle:nth-child(4)::after {
  box-shadow: 0 0 grey, 2306px 1814px grey, 2198px 2221px grey, 318px 416px grey, 1424px 2140px grey, 1374px 148px grey, 160px 2552px grey, 2190px 195px grey, 831px 378px grey, 1657px 1385px grey, 1071px 119px grey, 2523px 1038px grey, 822px 620px grey, 693px 1173px grey, 1787px 2323px grey, 2173px 1572px grey, 652px 1936px grey, 1535px 1950px grey, 13px 1123px grey, 131px 902px grey, 2391px 1668px grey, 2072px 2272px grey, 494px 1569px grey, 1216px 367px grey, 90px 2091px grey, 87px 209px grey, 474px 1276px grey, 1175px 1510px grey, 959px 1909px grey, 176px 472px grey, 2193px 449px grey, 682px 2002px grey, 1622px 1473px grey, 1538px 2554px grey, 1434px 1814px grey, 1093px 2545px grey, 2432px 2511px grey, 208px 1655px grey, 970px 1542px grey, 51px 1252px grey, 20px 1435px grey, 1899px 841px grey, 1029px 1467px grey, 1608px 754px grey, 1230px 2105px grey, 856px 1716px grey, 516px 1044px grey, 1451px 146px grey, 1227px 1459px grey, 2541px 1087px grey, 2369px 576px grey, 1729px 2480px grey, 1806px 1445px grey, 2528px 268px grey, 2442px 1866px grey, 150px 858px grey, 2489px 2298px grey, 35px 551px grey, 763px 1043px grey, 2142px 1307px grey, 811px 1100px grey, 436px 681px grey, 2291px 2018px grey, 2241px 1456px grey, 1308px 2538px grey, 1932px 1619px grey, 2536px 1940px grey, 346px 1870px grey, 1456px 197px grey, 2400px 2235px grey, 958px 1487px grey, 575px 2457px grey, 2326px 1034px grey, 285px 990px grey, 844px 2160px grey, 2246px 2080px grey, 42px 1826px grey, 1675px 236px grey, 1660px 701px grey, 2238px 2298px grey, 9px 1229px grey, 2292px 1540px grey, 1565px 1922px grey, 774px 1623px grey, 116px 2189px grey, 332px 1720px grey, 1853px 93px grey, 946px 1409px grey, 1150px 115px grey, 1525px 2301px grey, 525px 1428px grey, 1371px 1852px grey, 686px 352px grey, 55px 555px grey, 1218px 2290px grey, 152px 1548px grey, 1610px 649px grey, 2012px 442px grey, 2472px 804px grey, 1224px 912px grey, 2250px 1799px grey, 1934px 36px grey, 1468px 2055px grey, 2159px 1989px grey, 2506px 1825px grey, 1104px 69px grey, 1743px 89px grey, 2150px 2179px grey, 307px 2387px grey, 1008px 2463px grey, 1391px 1881px grey, 371px 76px grey, 671px 959px grey, 1582px 1905px grey, 479px 2150px grey, 1047px 486px grey, 774px 379px grey, 1651px 832px grey, 1880px 811px grey, 1052px 1787px grey, 1213px 1534px grey, 2058px 174px grey, 184px 291px grey, 1243px 1457px grey, 2515px 319px grey, 2346px 755px grey, 2099px 2438px grey, 2009px 1586px grey, 2057px 644px grey, 1270px 1346px grey, 1270px 2305px grey, 1838px 1088px grey, 733px 1083px grey, 112px 141px grey, 175px 1858px grey, 478px 2342px grey, 1711px 1594px grey, 386px 997px grey, 1011px 470px grey, 2111px 1677px grey, 2181px 603px grey, 2478px 1593px grey, 602px 1887px grey, 1628px 342px grey, 2013px 2120px grey, 2163px 2097px grey, 2084px 1479px grey, 1599px 331px grey, 2070px 1890px grey, 205px 1107px grey, 1080px 463px grey, 1004px 1306px grey, 453px 1603px grey, 87px 2445px grey, 1822px 671px grey, 118px 2280px grey, 2046px 216px grey, 347px 1551px grey, 2479px 1540px grey, 1699px 504px grey, 1538px 1752px grey, 2028px 1272px grey, 1140px 1204px grey, 973px 1016px grey, 1689px 2104px grey, 1417px 144px grey, 859px 2151px grey, 294px 1434px grey, 855px 672px grey, 3px 2303px grey, 397px 1582px grey, 1292px 1115px grey, 2488px 1356px grey, 1229px 643px grey, 595px 2528px grey, 995px 617px grey, 990px 339px grey, 2113px 585px grey, 1649px 111px grey, 1343px 1969px grey, 573px 337px grey, 2386px 564px grey, 2005px 1502px grey, 905px 1835px grey, 2189px 1420px grey, 1902px 2529px grey, 1685px 1220px grey, 976px 2541px grey, 1495px 644px grey, 1869px 1950px grey, 2310px 1699px grey, 206px 1411px grey, 816px 1432px grey, 408px 2499px grey, 1659px 256px grey, 1477px 986px grey, 280px 672px grey, 1194px 1375px grey, 1201px 2019px grey, 965px 1100px grey, 995px 889px grey, 948px 2180px grey, 478px 1533px grey, 1771px 48px grey, 2113px 1880px grey, 335px 2322px grey, 1681px 2180px grey, 1134px 1980px grey, 2177px 936px grey, 906px 1030px grey, 950px 511px grey, 832px 537px grey, 1565px 1719px grey, 2193px 1708px grey, 1344px 1774px grey, 1566px 209px grey, 635px 600px grey, 793px 548px grey, 1313px 1331px grey, 2401px 1016px grey, 56px 1562px grey, 1182px 1782px grey, 2539px 513px grey, 1732px 83px grey, 1734px 2471px grey, 1569px 2156px grey, 1424px 258px grey, 1828px 243px grey, 2312px 2524px grey, 1811px 582px grey, 2279px 1950px grey, 1303px 2473px grey, 1167px 1768px grey, 1784px 1204px grey, 2177px 417px grey, 154px 364px grey, 1520px 310px grey, 2064px 1141px grey, 2223px 1277px grey, 2394px 2112px grey, 1646px 507px grey, 2432px 1314px grey, 969px 410px grey, 508px 2040px grey, 498px 2159px grey, 1120px 2191px grey, 1291px 63px grey, 1346px 118px grey, 2358px 2012px grey, 1743px 2292px grey, 1034px 170px grey, 1261px 83px grey, 2070px 289px grey, 2224px 382px grey, 2177px 1874px grey, 1355px 212px grey, 1482px 598px grey, 873px 2479px grey, 1427px 1331px grey, 2312px 1451px grey, 1465px 2396px grey, 1963px 78px grey, 340px 908px grey, 1959px 1746px grey, 819px 471px grey, 2421px 1928px grey, 1708px 2399px grey, 779px 171px grey, 1566px 1089px grey, 2186px 906px grey, 5px 1062px grey, 1150px 602px grey, 399px 2480px grey, 1243px 2281px grey, 865px 539px grey, 1284px 1945px grey, 433px 275px grey, 655px 2137px grey, 574px 1856px grey, 752px 1359px grey, 1901px 247px grey, 1363px 555px grey, 1px 2124px grey, 1961px 597px grey, 1049px 1660px grey, 709px 533px grey, 1632px 1877px grey, 2377px 1109px grey, 1654px 1261px grey, 659px 1072px grey, 980px 471px grey, 2527px 1278px grey, 230px 1272px grey, 513px 1844px grey, 1943px 793px grey, 1629px 1699px grey, 2509px 1537px grey, 2450px 800px grey, 2217px 2165px grey, 718px 1828px grey, 811px 2114px grey, 2047px 2378px grey, 413px 1962px grey, 1138px 1355px grey, 1571px 2337px grey, 1568px 1485px grey, 353px 2369px grey, 365px 1533px grey, 126px 1680px grey, 802px 2557px grey, 1674px 382px grey, 1855px 2128px grey, 847px 1800px grey, 2028px 1910px grey, 1909px 789px grey, 1639px 1521px grey, 1943px 429px grey, 2374px 517px grey, 1203px 2036px grey, 1290px 2361px grey, 1639px 1095px grey, 1167px 1043px grey, 1618px 2028px grey, 423px 530px grey, 2500px 1939px grey, 1832px 1100px grey, 318px 2493px grey, 1764px 2460px grey, 2495px 1439px grey, 518px 1961px grey, 199px 2174px grey, 1295px 964px grey, 1055px 2406px grey, 1173px 1721px grey, 2428px 337px grey, 1218px 1075px grey, 107px 893px grey, 457px 213px grey, 1766px 97px grey, 2040px 1661px grey, 1171px 433px grey, 1819px 2120px grey, 1586px 2168px grey, 584px 2135px grey, 215px 1094px grey, 147px 1557px grey, 1039px 395px grey, 1949px 247px grey, 653px 1879px grey, 2436px 1651px grey, 126px 1659px grey, 1337px 2533px grey, 1864px 463px grey, 1372px 2500px grey, 2036px 754px grey, 2252px 538px grey, 2379px 2210px grey, 1646px 1996px grey, 1288px 1406px grey, 702px 1186px grey, 2552px 1697px grey, 2198px 1014px grey, 1019px 2062px grey, 1138px 1407px grey, 277px 1259px grey, 1859px 827px grey, 620px 1285px grey, 2063px 269px grey, 2375px 915px grey, 1463px 1355px grey, 2122px 262px grey, 2403px 1955px grey, 1981px 2226px grey, 1388px 428px grey, 987px 2215px grey, 919px 2072px grey, 604px 2094px grey, 145px 1582px grey, 1500px 2440px grey, 511px 1159px grey, 1119px 173px grey, 766px 1617px grey, 666px 2166px grey, 1583px 1371px grey, 1809px 1943px grey, 589px 1547px grey, 724px 259px grey, 1282px 1525px grey, 1229px 626px grey, 350px 2300px grey, 757px 47px grey, 1426px 114px grey, 749px 499px grey, 952px 1522px grey, 1299px 2072px grey, 1686px 1088px grey, 2195px 1616px grey, 1219px 2007px grey, 165px 2235px grey, 2135px 2259px grey, 359px 1520px grey;
  width: 2px;
  height: 2px;
}


</style>