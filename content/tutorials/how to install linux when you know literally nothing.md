---
title: how to install Linux when you know literally nothing
description: it's reasonable to be scared! it's not as simple as some people make it out to be! but i'm here to help with that :>
draft: true
authors:
  - gold
tags:
  - tutorial
  - technical
  - operating-systems
  - linux
---
> [!todo] wip
> wawawaw intro mention linux mint etc etc yayyy

# creating a bootable USB

in order to install Linux on your computer, you're gonna have to be able to boot into something that isn't Windows. so in this step, we're going to create a USB drive that you can boot your computer into - the instructions your hardware will be following is going to come from a USB drive.

this is the one part of the process that you might need to buy something for. luckily, [flash drives](https://en.wikipedia.org/wiki/USB_flash_drive) aren't expensive, and if you or anyone you know has used a computer in the past 25 years, you might already have access to one! get your hands on one that's **at least 4GB**, and make sure it's either empty or doesn't have anything you care about on it. back up its contents if you do care. all you have to do to check its contents is plug it into a computer, and it should show up in your file explorer.

now, we're about to make this USB bootable, which means that your computer is going to be able to get software off the USB and run it without an operating system. in our case, we'll be putting an installer for Linux on it.

## installing Ventoy

in order to make this super easy, we're gonna use a tool called Ventoy, which you can download [here](https://www.ventoy.net/en/download.html). click on the link to the zip file, which will take you to another site with a download button - download it. once it's downloaded, right click on it and press *Extract All*, then *Extract*, which will create a folder. go into it, and then into the folder inside that, and you'll find a bunch of files.

now you're gonna wanna plug in your USB. once you've done that, double click `Ventoy2Disk.exe` to launch it.

> [!info]
> your file explorer might not show the file extensions, so you'll just see `Ventoy2Disk` - that's okay! if you like, you can turn file extensions on by pressing the *View* button in the ribbon at the top, then *Show*, then checking *File name extensions*.

this will open Ventoy for you. at the top, there'll be a *Device* dropdown. make sure that's your USB flash drive. then, press *Install*.

> [!warning]
> **this step will ERASE ALL DATA on the selected device!!!** make sure you have the correct device selected, and *back up any data you care about* on there if you haven't already. this will destroy the data permanently without chance of recovery.

Ventoy will double check with you here that you're sure you want to erase all data on the selected drive. if you're sure, press *Yes* twice to continue. after that finishes, you'll've installed Ventoy! now we're ready to put an installer on it.

> [!hint]- Screenshots
> ![A screenshot of the Ventoy download page with the Windows download link highlighted.](ventoy_download_link.png)
> 
> ![A screenshot of the Ventoy download button on Sourceforge.](ventoy_download_button.png)
> 
> ![A screenshot of the Windows File Explorer with the downloaded Ventoy zip selected, hovering over the Extract all button.](extract_all.png)
> 
> ![A screenshot of the Windows modal for extracting compressed folders, with the Extract button highlighted.](extract.png)
> 
> ![A screenshot of the files within the extracted Ventoy folder.](ventoy_files.png)
> 
> ![A screenshot of the Ventoy2Disk interface with a generic USB flash disk selected that doesn't have Ventoy installed on it.](ventoy_menu.png)

## acquiring Linux Mint ISO

since we've decided to go with [Linux Mint](https://www.linuxmint.com/), we're going to download its ISO image file and put it on the Ventoy USB. this is essentially the installer for the operating system.

go to the download page [here](https://www.linuxmint.com/download.php), then click on the download button for Cinnamon. scroll down to the list of download mirrors. these are various different places you can download Linux Mint from - there are so many of them both for redundancy and also so that people across the world can choose one close to them to get quicker download times. you should be able to choose any of these, but try using one close to you, at least in your country or one nearby.

once it's finished downloading (which might take a bit), put it on your Ventoy USB drive. you can do this by dragging and dropping it from your downloads folder to the USB, or by cutting and pasting it with Ctrl+X and Ctrl+V.

# backing up your Windows install

now that we've got the USB ready, it's almost time to install Linux. but hold on! *back up your computer first!* even if you're planning on dual booting and keeping your Windows install, you *do not* want to risk losing your data. if you don't want to back up your entire drive, that's fine, but back up *everything* you care about, as well as your Windows activation key in case you need to reinstall completely from scratch. (it's also useful to have your activation key in general, because you *did* have to pay for that, and they're not free!)

> [!warning] BACK UP YOUR COMPUTER!!!
> back up your computer!!!!!!!!!!!!!!! it's important!!!!!!!!!!!!!!! do this!!!!!!!!!!!!!
> unless you really know what you're doing and don't care i guess. but you're an outlier >:/

grab an external hard drive or another computer and copy everything you care about onto it. if you're not backing up your whole drive, go into all the used User folders and look through the folders in there, particularly Documents, Downloads, Music, Pictures, and Videos. AppData will have some save data for games like Minecraft and config files for other programs. both Program Files folders in the root of your drive can have save data for games and other programs too. you will likely end up saving many severals of gigabytes in total, depending on how much you have on the computer. the two times i did this i ended up with around 400GiB for myself and 70GiB for my sibling.

now to save your windows activation key! that one's pretty simple luckily, just run a command in the terminal:
```ps
wmic path softwarelicensingservice get OA3xOriginalProductKey
```
and save the output somewhere. write it down somewhere, save it to a file somewhere that isn't this computer. you can use this to activate Windows again if you ever install it anywhere else.

it's also a good idea to go download the ISO file for whatever version of windows you're using, which you can get pretty easily by looking it up. put it on your Ventoy USB if you have the space or put it somewhere else safe.

