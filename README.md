# Belajar-Redux

## Redux berfungsi mempusatkan semua 'state', sehingga semua komponen dapat langsung menggunakan state tersebut. Library sejenis antara lain 'mobx'.

#### Install redux : npm install --save redux, bila ingin menggunakan redux dalam react harus juga install package 'react-redux' : npm install --save react-redux.

#### Buat sebuah folder dengan nama 'store', (di store ini lah tempat menyimpan semua state) bikin 4 file dengan nama :
#### * index.js ()
#### * reducers.js (adalah function yang dapat menyimpan dan mengubah semua state di dalam store)
#### * actions.js
#### * actionTypes.js

#### Untuk menghubungkan redux dengan react di file App.js atau di index.js (root src).
#### index.js (root src)
#### * import { Provider } from 'react-redux';
#### * import store from './store';
#### * <Provider store = { store }> <App /> </Provider> Bungkus App di dalam Provider

#### Agar sebuah component react bisa mendapatkan state dari redux
#### * import { connect } from 'react-redux';
#### * export default connect(mapStateToProps, mapDispatchToProps)(App);
#### * const mapStateToProps = (state) => { return { title: state.title } }