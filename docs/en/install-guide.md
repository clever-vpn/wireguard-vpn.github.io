<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>


# WireGuard VPN使用指南


## 概述

安装vpn非常简单，您只需三步:
* [安装客户端](#install-client)
* [申请vpn许可](#apply-vpn-licence)
* [客户端导入许可](#import-your-licence-of-your-vpn-tunnel)

## 安装客户端
我建议您使用我们提供的wireguard 客户端。我们的客户端完全支持“链接端口漫游”技术。当然您也可以使用标准的[wireguard客户端](https://www.wireguard.com/install/)，如果端口连接不畅，您可以随机手动修改配置文件中的端口（也就是可以生成大于为1000的任何值）。

<v-sheet>
        <h3 class="mt-4 font-weight-medium">
          <v-icon class="mr-3">mdi-microsoft-windows</v-icon>Windows
        </h3>
        <v-btn class="mt-2 text-capitalize" color="primary"
          href="https://apps.microsoft.com/store/detail/wireguardpro/9NWL6S3NTPZ8">
          <v-icon left>
            mdi-microsoft-windows
          </v-icon>Download from Microsoft App Store
        </v-btn>
        <br />
        <h3 class="mt-4 font-weight-medium">
          <v-icon class="mr-3">mdi-microsoft-windows</v-icon>Windows
        </h3>
        <v-btn class="mt-2 text-capitalize" color="primary"
          href="https://download.wireguard-vpn.com/microsoft/wireguardpro.msix">
          <v-icon left>
            mdi-microsoft-windows
          </v-icon>Download Windows Msx Installer
        </v-btn>
        <br />
        <h3 class="mt-4 font-weight-medium">
          <v-icon class="mr-3">mdi-apple</v-icon>macOS
        </h3>
        <v-btn class="mt-2 text-capitalize" color="primary"
          href="https://apps.apple.com/us/app/clever-vpn/id6443778387?platform=mac">
          <v-icon left>
            mdi-apple
          </v-icon>Download from AppStore
        </v-btn>
        <h3 class="mt-4 font-weight-medium">
          <v-icon class="mr-3">mdi-apple</v-icon>macOS dmg
        </h3>
        <v-btn class="mt-2 text-capitalize" color="primary"
          href="https://download.wireguard-vpn.com/apple/cleverVPN.dmg">
          <v-icon left>
            mdi-apple
          </v-icon>Download cleverVPN dmg
         </v-btn>      
        <h3 class="mt-4 font-weight-medium">
          <v-icon class="mr-3">mdi-apple</v-icon>iOS
        </h3>
        <v-btn class="mt-2 text-capitalize" color="primary"
          href="https://apps.apple.com/us/app/clever-vpn/id6443778387?platform=iphone">
          <v-icon left>
            mdi-apple
          </v-icon>Download from AppStore
         </v-btn>      
        <h3 class="mt-4 font-weight-medium">
          <v-icon class="mr-3">mdi-android</v-icon>Android
        </h3>
        <v-btn class="mt-2 text-capitalize" color="primary"
          href="https://play.google.com/store/apps/details?id=org.wireguard.android">
          <v-icon left>
            mdi-android
          </v-icon>Download from PlayStore
        </v-btn>
        <h3 class="mt-4 font-weight-medium">
          <v-icon class="mr-3">mdi-android</v-icon>Android
        </h3>
        <v-btn class="mt-2 text-capitalize" color="primary"
          href="https://download.wireguard-vpn.com/android/wireguardpro-release.apk">
          <v-icon left>
            mdi-android
          </v-icon>Download APK file
        </v-btn>
      </v-sheet>
<br/>
<br/>

## 申请vpn许可

[登陆](https://dashboard.wireguard-vpn.com/auth/login)/[注册](https://dashboard.wireguard-vpn.com/auth/register) 到您的账户. 下面就是您的账户主页
<br/>
<br/>
![dashboard](https://www.wireguard-vpn.com/img/help/dashboard.png)
<br/>
当您点击导航菜单的"Create Licence", 您将看到licence创建页面
<br/>
<br/>
![create-licence](https://www.wireguard-vpn.com/img/help/create-licence.png)
<br/>
<br/>
当您点击"CREATE NOW"按钮, 您将进入许可页面. 在这个页面，您可以扫二维码（安卓/苹果手机支持）,或者拷贝/下载许可文件（扩展名是.conf）。
<br/>
<br/>
![create-licence](https://www.wireguard-vpn.com/img/help/licence.png)
<br/>

## 客户端导入许可
您有两种方法导入vpn的许可文件。
* [扫描二维码导入](#import-licence-by-qr-code-of-lience)
* [从文件导入许可](#import-licence-by-licence-file)
<br/>

### 扫描二维码导入
如果您使用的是安卓/苹果手机，您可以通过扫描许可的二维码导入vpn的许可。
<br/>

#### 第一步，打开您的vpn app（苹果手机叫clever vpn，安卓手机叫wireguardPro）
<br/>
<img  src="https://www.wireguard-vpn.com/img/help/phone-main.png" height="800" width="400" style="border: 5px solid #555;">
<br/>
<br/>

#### 第二步，点击 "Add a tunnel" /“添加一个隧道”.
<br/>
<img  src="https://www.wireguard-vpn.com/img/help/phone-scan.png" height="800" width="400" style="border: 5px solid #555;">
<br/>
<br/>

#### 第三部，点击"Create from QR Code"/“从QRcode创建”。 扫描许可页面的二维码。
<br/>
<img  src="https://www.wireguard-vpn.com/img/help/phone-create-tunnel.png" height="800" width="400" style="border: 5px solid #555;">
<br/>
<br/>

#### 第四部，您已经创建了一个vpn隧道. 然后您可以激活您的vpn隧道
<br/>
<img  src="https://www.wireguard-vpn.com/img/help/phone-tunnel-created.png" height="800" width="400" style="border: 5px solid #555;">
<br/>
<br/>

#### 第五部, 恭喜您，您可以使用您的vpn隧道了。
<br/>
<img  src="https://www.wireguard-vpn.com/img/help/phone-tunnel-active.png" height="800" width="400" style="border: 5px solid #555;">
<br/>
<br/>


### 从文件导入许可
如果您使用的的是window或mac的客户端（window叫做wireguardpro，mac叫做clever vpn）,您需要用文件导入您的vpn许可。
<br/>

####  第一步，下载您的vpn许可一到您的本地机器。
<br />

![create-licence](https://www.wireguard-vpn.com/img/help/licence.png)

<br />

####  第二步, 导入许可文件.
<br />

![create-licence](https://www.wireguard-vpn.com/img/help/desktop-main.png)
<br />

####  第三步，允许vpn客户端在您的计算机上创建vpn隧道。
<br />

![create-licence](https://www.wireguard-vpn.com/img/help/desktop-import.png)
<br />

####  第四部，激活您的vpn隧道。
<br />

![create-licence](https://www.wireguard-vpn.com/img/help/desktop-tunnel-created.png)
<br />

#### 第五部, 恭喜您，您可以使用您的vpn隧道了。
<br />

![create-licence](https://www.wireguard-vpn.com/img/help/desktop-tunnel-active.png)
<br />


