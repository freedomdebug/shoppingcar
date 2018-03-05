
    【0】、react-native init demo 项目初始化
    1、打开oracle vm virtualbox
    2、打开genymotion shell然后启动里面的虚拟机，例如这里安装的是samsung galaxy s8
    3、react-native start --port 8084
    4、启动安卓调试
        4.1、cd demo
        4.2、cd android
        4.3、在Android下新建local.properties，里面
        sdk.dir = C\:\\Users\\admin\\appdata\\Local\\Android\\sdk
        4.5、gradlew.bat installDebug
        4.6、unable to download js bundle
            在线浏览器中输入：http://172.16.4.227:8084/index.android.bundle?platform=android
            然后react-native start --port 8084窗口会加载
            在Android中点击菜单，设置debug选项设置ip
            更多查看：https://github.com/freedomdebug/react/tree/master/native_demo/AwesomeProject