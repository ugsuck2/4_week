import shopData from './shopData'
import {price1,price2,price3,product1,product2,product3} from './productData'

let defaultExport = price1 + price2 + price3;

function ProductInfo() {
    return(
        <div>
            <h1>온라인 쇼핑몰</h1> <br></br>
            <h3>쇼핑몰명 : {shopData.shopName}</h3>
            <h3>주소 : {shopData.shopAddress}</h3>
            <h3>전화번호 : {shopData.shopPhone}</h3> <br></br>
            <h1>상품 목록</h1>
            <h3>상품1 : {product1}</h3>
            <h3>가격 : {price1}</h3>  <br></br>
            <h3>상품1 : {product2}</h3>
            <h3>가격 : {price2}</h3>  <br></br>
            <h3>상품1 : {product3}</h3>
            <h3>가격 : {price3}</h3>  <br></br>
            <h3>------------------------------</h3>
            <h1>총 상품 금액 : <span>{defaultExport} 원</span></h1>
        </div>
    )
    }

    export default ProductInfo;