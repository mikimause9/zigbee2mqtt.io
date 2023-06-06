"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82774],{419349:(e,t,r)=>{r.r(t),r.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-5dcd8ff8","path":"/guide/installation/20_zigbee2mqtt-fails-to-start.html","title":"Zigbee2MQTT fails to start","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":0},"excerpt":"","headers":[{"level":2,"title":"Error: SRSP - SYS - ping after 6000ms","slug":"error-srsp-sys-ping-after-6000ms","link":"#error-srsp-sys-ping-after-6000ms","children":[]},{"level":2,"title":"Verify that you put the correct port in configuration.yaml","slug":"verify-that-you-put-the-correct-port-in-configuration-yaml","link":"#verify-that-you-put-the-correct-port-in-configuration-yaml","children":[{"level":3,"title":"Which port should I use for Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2, /dev/ttyACM0 or /dev/ttyACM1?","slug":"which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1","link":"#which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1","children":[]}]},{"level":2,"title":"Verify that the user you run Zigbee2MQTT as has write access to the port","slug":"verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port","link":"#verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port","children":[{"level":3,"title":"Method 1: Give your user permissions on every reboot.","slug":"method-1-give-your-user-permissions-on-every-reboot","link":"#method-1-give-your-user-permissions-on-every-reboot","children":[]},{"level":3,"title":"Method 2: Add your user to specific groups","slug":"method-2-add-your-user-to-specific-groups","link":"#method-2-add-your-user-to-specific-groups","children":[]}]},{"level":2,"title":"Error: Coordinator failed to start, probably the panID is already in use, try a different panID or channel","slug":"error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel","link":"#error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel","children":[]},{"level":2,"title":"Error: Resource temporarily unavailable Cannot lock port","slug":"error-resource-temporarily-unavailable-cannot-lock-port","link":"#error-resource-temporarily-unavailable-cannot-lock-port","children":[]},{"level":2,"title":"Raspberry Pi users: use a good power supply","slug":"raspberry-pi-users-use-a-good-power-supply","link":"#raspberry-pi-users-use-a-good-power-supply","children":[]},{"level":2,"title":"Make sure the extension cable works","slug":"make-sure-the-extension-cable-works","link":"#make-sure-the-extension-cable-works","children":[]},{"level":2,"title":"For Openhab users: disable zwave binding","slug":"for-openhab-users-disable-zwave-binding","link":"#for-openhab-users-disable-zwave-binding","children":[]},{"level":2,"title":"In case of a CC2530 or CC2531 adapter, verify that don\'t have a CC2540","slug":"in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540","link":"#in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540","children":[]},{"level":2,"title":"ModemManager is installed","slug":"modemmanager-is-installed","link":"#modemmanager-is-installed","children":[]},{"level":2,"title":"hciuart is running","slug":"hciuart-is-running","link":"#hciuart-is-running","children":[]},{"level":2,"title":"Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 only: press the reset button on the device","slug":"texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device","link":"#texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device","children":[]},{"level":2,"title":"CC2531 coordinators only: press the reset button on the device","slug":"cc2531-coordinators-only-press-the-reset-button-on-the-device","link":"#cc2531-coordinators-only-press-the-reset-button-on-the-device","children":[]},{"level":2,"title":"Texas Instruments LAUNCHXL-CC26X2R1 coordinator only: verify that you have the correct revision","slug":"texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision","link":"#texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision","children":[]}],"git":{"updatedTime":1686035620000},"filePathRelative":"guide/installation/20_zigbee2mqtt-fails-to-start.md"}')},325908:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var a=r(166252);const o=r.p+"assets/img/cc26xr1_revision.6de88388.png",n=(0,a._)("h1",{id:"zigbee2mqtt-fails-to-start",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#zigbee2mqtt-fails-to-start","aria-hidden":"true"},"#"),(0,a.Uk)(" Zigbee2MQTT fails to start")],-1),s=(0,a._)("p",null,"Most of the time this is caused by Zigbee2MQTT not being able to communicate with your Zigbee adapter.",-1),i={class:"table-of-contents"},l=(0,a._)("h2",{id:"error-srsp-sys-ping-after-6000ms",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#error-srsp-sys-ping-after-6000ms","aria-hidden":"true"},"#"),(0,a.Uk)(" Error: "),(0,a._)("code",null,"SRSP - SYS - ping after 6000ms")],-1),d=(0,a._)("p",null,"5 common reasons of this error:",-1),c={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing",target:"_blank",rel:"noopener noreferrer"},u=(0,a._)("li",null,'Home Assistant\'s "Zigbee Home Automation" (ZHA) integration is enabled. Try to disable the ZHA integration and restart the Zigbee2MQTT add-on.',-1),h=(0,a._)("li",null,"Your hardware adapter is flashed with the router firmware and not with the coordinator firmware.",-1),p=(0,a._)("li",null,"Your network Zigbee adapter is not accessible over the LAN network.",-1),m=(0,a.uE)('<h2 id="verify-that-you-put-the-correct-port-in-configuration-yaml" tabindex="-1"><a class="header-anchor" href="#verify-that-you-put-the-correct-port-in-configuration-yaml" aria-hidden="true">#</a> Verify that you put the correct port in configuration.yaml</h2><p>Execute the following command to find out the correct path:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pi@raspberry:/ $ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/serial/by-id\ntotal <span class="token number">0</span>\nlrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">13</span> Oct <span class="token number">19</span> <span class="token number">19</span>:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/ttyACM0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example the correct <code>port</code> would be <code>/dev/ttyACM0</code>.</p><h3 id="which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1" tabindex="-1"><a class="header-anchor" href="#which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1" aria-hidden="true">#</a> Which port should I use for Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2, /dev/ttyACM0 or /dev/ttyACM1?</h3><p>The Texas Instruments launchpad has a build in debugger. This debugger also registers a port next to the device data port. Of course this is not necessarily number 0 and 1. But normally the lowest number is the device data port and the other the debugger.</p><p>To find the correct port, execute:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pi@raspberry:/ $ <span class="token function">ls</span> <span class="token parameter variable">-l</span> /dev/serial/by-id\ntotal <span class="token number">0</span>\nlrwxrwxrwx <span class="token number">1</span> root root <span class="token number">13</span> Jan  <span class="token number">6</span> <span class="token number">19</span>:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if00 -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/ttyACM0\nlrwxrwxrwx <span class="token number">1</span> root root <span class="token number">13</span> Jan  <span class="token number">6</span> <span class="token number">19</span>:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if03 -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/ttyACM1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The device with id ending with <em>if00</em> is for device data. Use this port in your configuration.</p><h2 id="verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port" tabindex="-1"><a class="header-anchor" href="#verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port" aria-hidden="true">#</a> Verify that the user you run Zigbee2MQTT as has write access to the port</h2><p>This can be tested by executing: <code>test -w [PORT] &amp;&amp; echo success || echo failure</code> ( e.g. <code>test -w /dev/ttyACM0 &amp;&amp; echo success || echo failure</code>).</p><p>If it outputs <code>failure</code> it could mean your user does not have access to the port. To test assign write access by executing: <code>sudo chown [USER] [PORT]</code> (e.g. <code>sudo chown pi /dev/ttyACM0</code>).</p><p>if it outputs <code>failure</code>, then you need to permanently give your user permission to the device.</p><h3 id="method-1-give-your-user-permissions-on-every-reboot" tabindex="-1"><a class="header-anchor" href="#method-1-give-your-user-permissions-on-every-reboot" aria-hidden="true">#</a> Method 1: Give your user permissions on every reboot.</h3><p>You can create a &#39;udev&#39; rule to give your user permissions after every reboot:</p><ol><li><p><code>udevadm info -a -n /dev/ttyACM0 | grep &#39;serial&#39;</code> get the serial to your device <code>YOURSERIAL</code></p></li><li><p>Create the rule file with: <code>sudo nano /etc/udev/rules.d/99-usb-serial.rules</code></p></li><li><p>add this line: <code>SUBSYSTEM==&quot;tty&quot;, ATTRS{idVendor}==&quot;0451&quot;, ATTRS{idProduct}==&quot;16a8&quot;, ATTRS{serial}==&quot;YOURSERIAL&quot;, SYMLINK=&quot;ttyUSB.CC2531-01&quot;, OWNER=&quot;pi&quot;</code></p></li><li><p>modify your Zigbee2MQTT config to adjust new SYMLINK name: <code>nano /opt/zigbee2mqtt/data/configuration.yaml</code></p></li></ol><p><code>… serial: port: /dev/ttyUSB.CC2531-01 …</code></p><p>After reboot your device will have the right permissions and always the same name.</p><h3 id="method-2-add-your-user-to-specific-groups" tabindex="-1"><a class="header-anchor" href="#method-2-add-your-user-to-specific-groups" aria-hidden="true">#</a> Method 2: Add your user to specific groups</h3><p>As mentioned on https://github.com/esp8266/source-code-examples/issues/26 , depending on your linux installation, various groups could have ownership of the device.</p><p>Add your user to the <code>uucp </code> , <code>tty </code> , <code>dialout </code> groups:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo usermod -a -G uucp $USER\nsudo usermod -a -G tty $USER\nsudo usermod -a -G dialout $USER\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reboot your device and now your user should have access to the device.</p><h2 id="error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel" tabindex="-1"><a class="header-anchor" href="#error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel" aria-hidden="true">#</a> Error: <code>Coordinator failed to start, probably the panID is already in use, try a different panID or channel</code></h2>',24),b={href:"https://github.com/Koenkk/zigbee2mqtt/issues/6302",target:"_blank",rel:"noopener noreferrer"},y=(0,a._)("li",null,"If you had your Zigbee network before and such an error appears with the new Zigbee adapter, try to switch off the Zigbee routers that were connected to your previous Zigbee network and restart Zigbee2MQTT.",-1),v=(0,a.uE)('<h2 id="error-resource-temporarily-unavailable-cannot-lock-port" tabindex="-1"><a class="header-anchor" href="#error-resource-temporarily-unavailable-cannot-lock-port" aria-hidden="true">#</a> Error: <code>Resource temporarily unavailable Cannot lock port</code></h2><p>This error occurs when another program is already using (and thus locking) the adapter. You can find out which via the following command: <code>ls -l /proc/[0-9]/fd/ |grep /dev/ttyACM0</code> (replace <code>/dev/ttyACM0</code> with your adapter port).</p><h2 id="raspberry-pi-users-use-a-good-power-supply" tabindex="-1"><a class="header-anchor" href="#raspberry-pi-users-use-a-good-power-supply" aria-hidden="true">#</a> Raspberry Pi users: use a good power supply</h2><p>A bad power supply can make your system and its USB devices unstable. Make sure to use a good power supply.</p><p>In case you see message like below when running <code>dmesg -w</code> you are using a bad power supply.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[44870.355590] Under-voltage detected! (0x00050005)\n[44874.515618] Voltage normalised (0x00000000)\n[44880.755718] Under-voltage detected! (0x00050005)\n[44889.075627] Voltage normalised (0x00000000)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you have a SSD connected to the Pi, try connecting the adapter via a powered USB hub.</p><h2 id="make-sure-the-extension-cable-works" tabindex="-1"><a class="header-anchor" href="#make-sure-the-extension-cable-works" aria-hidden="true">#</a> Make sure the extension cable works</h2><p>A bad extension cable can lead to connection issues between the system and the adapter. Symptoms of this are disconnection messages in the <code>dmesg -w</code> log like below.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[44929.156957] usb 1-1.5: USB disconnect, device number 119\n[44929.455555] usb 1-1.5: new full-speed USB device number 120 using dwc_otg\n[44929.604582] usb 1-1.5: New USB device found, idVendor=0451, idProduct=16a8, bcdDevice= 0.09\n[44929.604596] usb 1-1.5: New USB device strings: Mfr=1, Product=2, SerialNumber=3\n[44929.604606] usb 1-1.5: Product: TI CC2531 USB CDC\n[44929.604615] usb 1-1.5: Manufacturer: Texas Instruments\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-openhab-users-disable-zwave-binding" tabindex="-1"><a class="header-anchor" href="#for-openhab-users-disable-zwave-binding" aria-hidden="true">#</a> For Openhab users: disable zwave binding</h2>',11),g={href:"https://community.openhab.org/t/apparently-the-zwave-binding-blocks-the-dev-ttyusb0-port-in-combination-with-a-cc2652rb-zigbee2mqtt-dongle/103245",target:"_blank",rel:"noopener noreferrer"},f=(0,a._)("h2",{id:"in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540","aria-hidden":"true"},"#"),(0,a.Uk)(" In case of a CC2530 or CC2531 adapter, verify that don't have a CC2540")],-1),k=(0,a._)("p",null,"The CC2540 can be confused easily with the CC2531 as it looks (almost) exactly the same. However, this device does not support zigbee but bluetooth. This can be verified by looking at the chip.",-1),w={id:"modemmanager-is-installed",tabindex:"-1"},x=(0,a._)("a",{class:"header-anchor",href:"#modemmanager-is-installed","aria-hidden":"true"},"#",-1),C={href:"https://www.freedesktop.org/wiki/Software/ModemManager/",target:"_blank",rel:"noopener noreferrer"},_=(0,a._)("p",null,[(0,a.Uk)("ModemManager, which is default installed on e.g. Ubuntu, is known to cause problems. It can easily be fixed by removing ModemManager through "),(0,a._)("code",null,"sudo apt-get purge modemmanager"),(0,a.Uk)(".")],-1),U=(0,a._)("h2",{id:"hciuart-is-running",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hciuart-is-running","aria-hidden":"true"},"#"),(0,a.Uk)(" hciuart is running")],-1),T=(0,a._)("p",null,[(0,a.Uk)("hciuart can be disabled by executing: "),(0,a._)("code",null,"sudo systemctl disable hciuart"),(0,a.Uk)(".")],-1),S=(0,a._)("h2",{id:"texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device","aria-hidden":"true"},"#"),(0,a.Uk)(" Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 only: press the reset button on the device")],-1),M=(0,a._)("code",null,"Error: SRSP - SYS - version after 6000ms",-1),I={href:"https://github.com/Koenkk/zigbee2mqtt/issues/2162",target:"_blank",rel:"noopener noreferrer"},A=(0,a.uE)('<p>Something that can also solve the issue is to replug the USB cable.</p><h2 id="cc2531-coordinators-only-press-the-reset-button-on-the-device" tabindex="-1"><a class="header-anchor" href="#cc2531-coordinators-only-press-the-reset-button-on-the-device" aria-hidden="true">#</a> CC2531 coordinators only: press the reset button on the device</h2><p>When you plug the CC2531 in your computer, the green LED should go on. By pressing the reset button on the CC2531 the green LED should go off. The CC2531 has 2 buttons on it, the reset button is the one which is closest to the USB port. Now try starting Zigbee2MQTT again.</p><h2 id="texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision" tabindex="-1"><a class="header-anchor" href="#texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision" aria-hidden="true">#</a> Texas Instruments LAUNCHXL-CC26X2R1 coordinator only: verify that you have the correct revision</h2><p>The revision of your board can be seen in UniFlash by clicking <em>more info</em> in the top, now press <em>Read device info</em>.</p><p>The correct revision is: <strong>E</strong> like shown below.</p><p><img src="'+o+'" alt="cc26xr1_revision"></p><p>All earlier version are not supported (these are development boards). Return this board to the seller immediately.</p>',8),R={},W=(0,r(983744).Z)(R,[["render",function(e,t){const r=(0,a.up)("router-link"),o=(0,a.up)("RouterLink"),R=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[n,s,(0,a._)("nav",i,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(r,{to:"#error-srsp-sys-ping-after-6000ms"},{default:(0,a.w5)((()=>[(0,a.Uk)("Error: SRSP - SYS - ping after 6000ms")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#verify-that-you-put-the-correct-port-in-configuration-yaml"},{default:(0,a.w5)((()=>[(0,a.Uk)("Verify that you put the correct port in configuration.yaml")])),_:1}),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(r,{to:"#which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Which port should I use for Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2, /dev/ttyACM0 or /dev/ttyACM1?")])),_:1})])])]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port"},{default:(0,a.w5)((()=>[(0,a.Uk)("Verify that the user you run Zigbee2MQTT as has write access to the port")])),_:1}),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(r,{to:"#method-1-give-your-user-permissions-on-every-reboot"},{default:(0,a.w5)((()=>[(0,a.Uk)("Method 1: Give your user permissions on every reboot.")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#method-2-add-your-user-to-specific-groups"},{default:(0,a.w5)((()=>[(0,a.Uk)("Method 2: Add your user to specific groups")])),_:1})])])]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel"},{default:(0,a.w5)((()=>[(0,a.Uk)("Error: Coordinator failed to start, probably the panID is already in use, try a different panID or channel")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#error-resource-temporarily-unavailable-cannot-lock-port"},{default:(0,a.w5)((()=>[(0,a.Uk)("Error: Resource temporarily unavailable Cannot lock port")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#raspberry-pi-users-use-a-good-power-supply"},{default:(0,a.w5)((()=>[(0,a.Uk)("Raspberry Pi users: use a good power supply")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#make-sure-the-extension-cable-works"},{default:(0,a.w5)((()=>[(0,a.Uk)("Make sure the extension cable works")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#for-openhab-users-disable-zwave-binding"},{default:(0,a.w5)((()=>[(0,a.Uk)("For Openhab users: disable zwave binding")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540"},{default:(0,a.w5)((()=>[(0,a.Uk)("In case of a CC2530 or CC2531 adapter, verify that don't have a CC2540")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#modemmanager-is-installed"},{default:(0,a.w5)((()=>[(0,a.Uk)("ModemManager is installed")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#hciuart-is-running"},{default:(0,a.w5)((()=>[(0,a.Uk)("hciuart is running")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device"},{default:(0,a.w5)((()=>[(0,a.Uk)("Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 only: press the reset button on the device")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#cc2531-coordinators-only-press-the-reset-button-on-the-device"},{default:(0,a.w5)((()=>[(0,a.Uk)("CC2531 coordinators only: press the reset button on the device")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(r,{to:"#texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision"},{default:(0,a.w5)((()=>[(0,a.Uk)("Texas Instruments LAUNCHXL-CC26X2R1 coordinator only: verify that you have the correct revision")])),_:1})])])]),l,d,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("The port of your serial adapter changed. Check "),(0,a.Wm)(o,{to:"/guide/installation/01_linux.html#1-determine-location-of-the-adapter-and-checking-user-permissions"},{default:(0,a.w5)((()=>[(0,a.Uk)("this")])),_:1}),(0,a.Uk)(" to find out the port of your adapter.")]),(0,a._)("li",null,[(0,a.Uk)("If you are using a CC2530 or CC2531; it is a common issue for this adapter to crash (due to its outdated hardware). Reflashing the firmware should fix the problem. If it happens often consider flashing the "),(0,a._)("a",c,[(0,a.Uk)("source routing firmware"),(0,a.Wm)(R)]),(0,a.Uk)(" or upgrade to a "),(0,a.Wm)(o,{to:"/guide/adapters/"},{default:(0,a.w5)((()=>[(0,a.Uk)("more powerful adapter")])),_:1}),(0,a.Uk)(".")]),(0,a._)("li",null,[(0,a.Uk)("Your adapter requires additional configuration parameters. Check "),(0,a.Wm)(o,{to:"/guide/adapters/"},{default:(0,a.w5)((()=>[(0,a.Uk)("supported Adapters")])),_:1}),(0,a.Uk)(" section to find out if your adapter requires extra parameters (eg. ConBee II / RaspBee II).")]),u,h,p]),m,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("If you still get this error after increasing the panID (as explained "),(0,a.Wm)(o,{to:"/guide/configuration/zigbee-network.html#network-config"},{default:(0,a.w5)((()=>[(0,a.Uk)("here")])),_:1}),(0,a.Uk)(") and you are using a Raspberry Pi with other USB devices")]),(0,a._)("li",null,[(0,a.Uk)("In case you are getting this after first starting successfully and pairing a device it might be that the firmware has been flashed incorrectly. Try flashing the stick on a different computer ("),(0,a._)("a",b,[(0,a.Uk)("detailed info"),(0,a.Wm)(R)]),(0,a.Uk)("). This issue mainly occurs in combination with a Slaesh's CC2652RB stick.")]),y]),v,(0,a._)("p",null,[(0,a.Uk)("The Openhab zwave binding interferes with Zigbee2MQTT, click "),(0,a._)("a",g,[(0,a.Uk)("here"),(0,a.Wm)(R)]),(0,a.Uk)(" for more information.")]),f,k,(0,a._)("h2",w,[x,(0,a.Uk)(),(0,a._)("a",C,[(0,a.Uk)("ModemManager"),(0,a.Wm)(R)]),(0,a.Uk)(" is installed")]),_,U,T,S,(0,a._)("p",null,[(0,a.Uk)("If Zigbee2MQTT fails to start with a Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 with "),M,(0,a.Uk)(", you most probably have connected your device to a system that requires pressing the reset button (the one next to the USB connector) momentarily/shortly after connecting the USB cable. This issue has primarily been observed on x86 architectures only ( e.g., Intel NUC, HPE Microserver, i7 laptop), see also "),(0,a._)("a",I,[(0,a.Uk)("#2162"),(0,a.Wm)(R)]),(0,a.Uk)(". The procedure has to be repeated every time the adapter is re-connected and it's not clear yet, whether this can be fixed at all. It does not seem to occur on ARM based boards (Raspberry Pi, ODROID XU4).")]),A])}]])}}]);