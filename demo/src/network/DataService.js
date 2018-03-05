/**
 * Created by tommy.hu on 2018/3/5.
 */
'use strict';
var SERVER = 'http://www.yudianer.com/api';
function getProjectList(){
    return fetch(`${SERVER}/project`)
        .then((response) => response.json())
        .then((responseData) => {
            console.info("加载项目完成：",responseData.data);
            return responseData.data;
        });
}
var DataService = {
    'getProjectList':getProjectList,
};

module.exports = DataService