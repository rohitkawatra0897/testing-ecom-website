import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    let data = yield fetch("https://jsonplaceholder.typicode.com/posts");
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data: data })
}
function* searchProducts(data) {
    let result = yield fetch(`https://jsonplaceholder.typicode.com/posts?q=${data.query}`);
    result = yield result.json()
    console.log("action is called demo", data);
    yield put({ type: SET_PRODUCT_LIST, data: result })
}


function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(PRODUCT_SEARCH, searchProducts)
}

export default productSaga;