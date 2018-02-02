/*
* 图片资源
* */

const List = {
    get nodata() {return require('./list/nodata.png')},
    get nonetwork() {return require('./list/nonetwork.png')},
};


const tab = {

    get home_active() {return require('./tab/tabBar_essence_click_icon.png');},
    get home_unactive() {return require('./tab/tabBar_essence_icon.png');},
    get new_active() {return require('./tab/tabBar_new_click_icon.png');},
    get new_unactive() {return require('./tab/tabBar_new_icon.png');},
    get project_active() {return require('./tab/tabBar_publish_click_icon.png');},
    get project_unactive() {return require('./tab/tabBar_publish_icon.png');},
    get friend_unactive() {return require('./tab/tabBar_friendTrends_icon.png');},
    get friend_active() {return require('./tab/tabBar_friendTrends_click_icon.png');},
    get profile_active() {return require('./tab/tabBar_me_click_icon.png');},
    get profile_unactive() {return require('./tab/tabBar_me_icon.png');},

};

const Home = {
    get back() {return require('./home/back.png')},
};


const AppImages = {
    get List(){
        return List;
    },
    get tab(){
        return tab;
    },

    get Home(){
        return Home;
    },
};
export default AppImages;
global.AppImages = AppImages;