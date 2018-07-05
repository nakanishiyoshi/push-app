import { combineReducers } from 'redux';
import promotionItem from './promotionItem';
import promotionList from './promotionList';

export default combineReducers({
    promotionItem,
    promotionList
});

// 変数名を引数に入れて、変数をStateにしてくれる
// reducerのディレクトリ構成がStateの構成
// 静的ページはinitialStateしてるけど、SSRなのでページ遷移したときに起こるので、毎回初期化はしない
