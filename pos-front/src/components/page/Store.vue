<template>
    <div>
       <div class="store-list">
            <ul>
                <li v-for="store in storeData" :key="store.storeId">
                    <span class="store-img"><img :src="store.storeImg" width="120px" height="60px"/></span>
                    <div>{{store.storeName}}</div>
                    <div>均价：￥{{store.storePrice}}元</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                storeData:[
                    {storeId:1,storeImg:"https://p1.meituan.net/600.600/dealwatera/3ce00775d3ea71754b25ed86b147d6a2254594.jpg@220w_125h_1e_1c",storeName:'米斯特比萨',storePrice:20}, 
                    {storeId:2,storeImg:"https://p0.meituan.net/600.600/merchant/44265c94748550365e8f547b912f204425939.jpg@220w_125h_1e_1c",storeName:'京味斋·北京牡丹烤鸭',storePrice:83}, 
                    {storeId:3,storeImg:"https://p0.meituan.net/600.600/biztone/266050_1630238166959.jpeg@220w_125h_1e_1c",storeName:'汉丽轩海鲜烤肉自助餐',storePrice:82},
                    {storeId:4,storeImg:"https://p1.meituan.net/600.600/bbia/d00fb57d2fbac359c3e0b2e2bf7c4b56337801.jpg@220w_125h_1e_1c",storeName:'辣婆婆（金源店）',storePrice:80}, 
                    {storeId:5,storeImg:"https://p1.meituan.net/600.600/merchant/29198c20e471d76836dfd950b77d9d29547299.jpg@220w_125h_1e_1c",storeName:'金源福城肥牛火锅（远大路金源店）',storePrice:136}, 
                    {storeId:6,storeImg:"https://p1.meituan.net/600.600/bbia/3c39dd8af5c00b553508de519b3b8479221041.png@220w_125h_1e_1c",storeName:'福口居（顺义店）',storePrice:44}, 
                    {storeId:7,storeImg:"https://img.meituan.net/600.600/msmerchant/aaa9b7b29138cd3afc423a5115f8d9fc118347.jpg@220w_125h_1e_1c",storeName:'小牛海记潮汕牛肉店牡丹园店',storePrice:55}, 
                    {storeId:8,storeImg:"https://p1.meituan.net/600.600/apiback/6e45d4a7fea18cb1582f5327dd870b8b185508.jpg@220w_125h_1e_1c",storeName:'虾吃虾涮（长楹天街店）',storePrice:188}, 
                    {storeId:9,storeImg:"https://p1.meituan.net/600.600/biztone/5624327_1632395797184.jpeg@220w_125h_1e_1c",storeName:'彼尔森烤肉（大悦春风里店）',storePrice:98}, 
                    {storeId:10,storeImg:"https://p1.meituan.net/600.600/mogu/93bb0d0e46bb9bc1e3bad2048f35aa4c48556.jpg@220w_125h_1e_1c",storeName:'Salud·欧洲冻酸奶（望京SOHO店）',storePrice:17},
                    {storeId:11,storeImg:"https://p0.meituan.net/600.600/biztone/4374627_1633020328717.jpeg@220w_125h_1e_1c",storeName:'东来顺饭庄（世纪金源购物中心店）',storePrice:77},
                    {storeId:12,storeImg:"https://p0.meituan.net/600.600/merchant/58d012019e08d46c7645701afdcc5ee0134249.png@220w_125h_1e_1c",storeName:'将太无二（凯德MALL店）',storePrice:71},
                    {storeId:13,storeImg:"https://p1.meituan.net/600.600/biztone/02a822a7784f100f76dd84329706d3672612825.jpg@220w_125h_1e_1c",storeName:'無二炙坊·和牛烧肉（亦庄店）',storePrice:17},
                    {storeId:14,storeImg:"https://img.meituan.net/600.600/msmerchant/b869191af80e491d0b408d32924c76b82134295.jpg@220w_125h_1e_1c",storeName:'黑松白鹿（华联万柳店）',storePrice:17},
                    {storeId:15,storeImg:"https://img.meituan.net/600.600/msmerchant/71cb53f4f5eb0062f8719d3074f2cd3e2527038.jpg@220w_125h_1e_1c",storeName:'金语轩烤肉火锅自助餐（扑满山店）',storePrice:17},
                    {storeId:16,storeImg:"https://img.meituan.net/600.600/msmerchant/01d82bbc5adb91208eb33706c027c622957469.png@220w_125h_1e_1c",storeName:'玫瑰花园自助烤肉（金源店）',storePrice:76},
                    {storeId:17,storeImg:"https://p0.meituan.net/600.600/biztone/320207_1638859673692.jpeg@220w_125h_1e_1c",storeName:'东方宫牛肉拉面（天竺店）',storePrice:45},
                    {storeId:18,storeImg:"https://p1.meituan.net/600.600/biztone/6f83e9943d5a135857bdfee5fb02a075146672.jpg@220w_125h_1e_1c",storeName:'鑫巴蜀川菜馆（车站路店）',storePrice:90},
                    {storeId:20,storeImg:"https://p0.meituan.net/600.600/ugcpic/27dd2502b68fea9dcaba5a9f8f4ba888@220w_125h_1e_1c",storeName:'三清洞摩西年糕火锅（万达店）',storePrice:88},
                    {storeId:21,storeImg:"https://p1.meituan.net/600.600/deal/c291d6f62ea566f7500c91fb650f845e43511.jpg@220w_125h_1e_1c",storeName:'前后涮羊肉（和平里店）',storePrice:102},
                    {storeId:22,storeImg:"https://p0.meituan.net/600.600/wmproduct/c112e29ecadfaa4a16e91d050ad37d40212855.jpg@220w_125h_1e_1c",storeName:'老诚一锅（良乡南关店）',storePrice:54},
                    {storeId:23,storeImg:"https://p0.meituan.net/600.600/ugcpic/670527a3a73369867db524ade381e5b6@220w_125h_1e_1c",storeName:'重八牛府之初入江湖（双榆树店）',storePrice:90},
                    {storeId:24,storeImg:"https://p1.meituan.net/600.600/biztone/194644540_1618998200012.jpeg@220w_125h_1e_1c",storeName:'东方宫中国兰州牛肉拉面（交大东路店）',storePrice:129},
                    {storeId:25,storeImg:"https://p0.meituan.net/600.600/biztone/6603784_1640572861136.jpeg@220w_125h_1e_1c",storeName:'北平食府·富贵荷花烤鸭（方庄店）',storePrice:99},
                    {storeId:26,storeImg:"https://p0.meituan.net/600.600/xianfu/6c9206630f33d92526e4fc207a135050347481.jpg@220w_125h_1e_1c",storeName:'阿田大虾（房山城关店）',storePrice:99},
                    {storeId:27,storeImg:"https://p0.meituan.net/600.600/xianfu/746933df4e34c49b4ff00c9030281e7b340849.jpg@220w_125h_1e_1c",storeName:'沁香园西饼店',storePrice:99},
                    {storeId:28,storeImg:"https://p0.meituan.net/600.600/biztone/186315294_1640947872260.jpeg@220w_125h_1e_1c",storeName:'井格重庆火锅（北新桥店）',storePrice:99},
                    {storeId:29,storeImg:"https://p1.meituan.net/600.600/biztone/194644540_1618998200012.jpeg@220w_125h_1e_1c",storeName:'鱼美人烤鱼坊（鱼唐宴烤全鱼总店）',storePrice:99},
                    {storeId:30,storeImg:"https://img.meituan.net/600.600/msmerchant/dc1d877358af37c369f1857470accd2938892.jpg@220w_125h_1e_1c",storeName:'千岛炭火烤肉（天通苑店）',storePrice:60},
                    {storeId:31,storeImg:"https://img.meituan.net/600.600/msmerchant/986495bf861202fbce22690e65f7054c94254.jpg@220w_125h_1e_1c",storeName:'梅花王蛋糕',storePrice:400},
                    {storeId:32,storeImg:"https://p1.meituan.net/600.600/merchant/dae7c3f035a43227939171634bf5846b184598.jpg@220w_125h_1e_1c",storeName:'大拇指鸭血粉丝汤（搜秀购物广场店）',storePrice:99},
                    {storeId:33,storeImg:"https://p0.meituan.net/600.600/merchant/cfd49a3ffabc0e8740e9820be50f42ef6464318.png@220w_125h_1e_1c",storeName:'宽板凳老灶火锅（天竺店）',storePrice:89},
                ],
            }
        }   
    }
</script>

<style scoped>
    .store-list{
        height: 200px;
        padding: 0px 30px 0px 10px;
    }
    .store-list ul li{
       list-style: none;
       width:24%;
       height: 100px;
       border:1px solid #E5E9F2;
       overflow: hidden;
       background-color:#fafafa;      
       border-radius: 10px;
       float: left;
       margin: 2px;
    }
    .store-list li div{
       font-size: 13px;
       font-weight: 600;
    }
</style>