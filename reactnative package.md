#Android打包
    https://www.cnblogs.com/franson-2016/p/6920805.html

    密码123456


## 1、产生签名的key

该过程会用到keytool，开发过安卓的都应该接触过该东西。详细请见密钥和证书管理工具。
在项目的主目录（不是android文件夹）中执行：

    --生成签名key，注意记下你的密钥和存储密码，后面配置文件需要使用
    keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

    --将keystore文件移动至android/app/文件夹
    move my-release-key.keystore   android/app/

## 2、修改android/gradle.properties文件，增加如下

    MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
    MYAPP_RELEASE_KEY_ALIAS=my-key-alias
    MYAPP_RELEASE_STORE_PASSWORD=xx
    MYAPP_RELEASE_KEY_PASSWORD=xx
    [注意替换xx为你自己设置的密钥和存储密码]


## 3、修改android/app/build.gradle文件中的签名配置[此步可不做也可生成]：

    ...
    android {
      ...
      defaultConfig {
        ...
      }
      signingConfigs {
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
      }
      buildTypes {
        release {
          ...
          signingConfig signingConfigs.release
        }
      }
    }

## 3、打包离线bundle

    到根目录
    React-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

    或者添加package.json

## 4、然后进入android目录执行如下：

    gradlew assembleRelease

    结束后会在android/app/build/outputs/apk/文件夹中生产可以发布的app-release.apk文件。


### 生成的apk直接拖入到genymotion的虚拟Android设备报错
    An error occured while deploying the file.<br>Please refer to Genymotion logs for more information