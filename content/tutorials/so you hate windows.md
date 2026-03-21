---
title: so you hate Windows
tags:
  - tutorial
  - technical
  - operating-systems
  - ms-windows
  - linux
draft: true
description: windows is so painful how do i escape it or at least make it tolerable
---
Microsoft Windows is getting more and more painful to use by the week, and you're probably here because you want to escape it, or at least make it more tolerable. luckily, i have some solutions for that!

i myself am a Windows and Linux user. i use Windows daily and have for my whole life, and while i'd like to switch to Linux fulltime, it's admittedly difficult! in the meantime, however, i have at least made Windows more tolerable for myself. so, while i've got a foot in both worlds, i've decided to share both how i've made Windows more tolerable, and how to switch to Linux if you're open to making the sacrifice.

# consider Linux!

there's a good chance you've heard the whole "switch to Linux it's literally so easy" thing before. and while i'm a huge proponent of Linux, it's not as easy as some people make it sound, especially if you don't know your way around computers on this level or have trouble learning new things. even then, Linux *isn't* for everyone! it *is* getting better every day, but there are still limitations, and sacrifices do have to be made to make the switch, which isn't practical for everyone.

when it comes to considering Linux, the first thing you should consider is what you *want* out of your computer. what do you plan to do with it? what programs do you want to be able to run? what games do you want to be able to play? do you want everything to just work, or are you okay putting in some effort for maintenance sometimes? how familiar do you want your experience to be? what is your hardware capable of? why do you want to get away from Windows in the first place?

the answers to these questions won't only determine whether you should use Linux at all, but also what distribution ("distro", like a version or flavor) of Linux you may want to use.

## software compatibility

unfortunately, Linux can't run every program ever, but this isn't something any operating system can do, either. but something about this that makes switching to Linux hard to some people is the fact that they're tied to certain software, and either can't switch away from it, or would heavily prefer not to. and that's fair! some of us have jobs or other responsibilities that require proprietary software that doesn't run on Linux, some of us have already spent the money and would like for it not to go to waste, and for some of us, there just aren't any suitable alternatives.

that doesn't always shut the door, though! you are by far not the first person to be frustrated by operating system-exclusive software. compared to trying to get macOS applications to run on Windows, trying to run Windows applications on Linux is far easier. while Windows isn't nearly as open as Linux, it's a lot less locked-down than macOS is, and therefore easier to reverse-engineer and translate into something Linux can understand.

> [!TODO] wip
> talk about wine and proton and winboat and vms and stuff
> https://appdb.winehq.org/ https://www.protondb.com/

> [!TODO] wip
> wawawawa more stuff goes here eventually, more categories and stuff...... make another page on [[how to install linux when you know literally nothing|how to install linux for people who know literally nothing]]


# making Windows more tolerable

there are a bunch of ways to make Windows more tolerable, and the biggest method is to get rid of its bloatware. not every programmer has abandoned Windows, so there are plenty of scripts out there that people have made to help you!

## Win11Debloat

despite the name, [Win11Debloat](https://github.com/Raphire/Win11Debloat) works on both Windows 10 and 11, and it's what i've always used. it's a simple PowerShell script that lets you debloat your system quickly.

running whatever a PowerShell script is might sound scary, but it's not that hard, and i can help walk you through it!

go to [this link](https://github.com/Raphire/Win11Debloat/releases/latest), and under the "Assets" header, click "**Source code** (zip)" to download it. then go find it in your file explorer, probably in your Downloads folder - most browsers have a way to open the folder the downloaded file was in after the download finishes.

then, right click the folder and press "Extract All", then press the "Extract" button. it'll probably open a new window inside the folder. go into the folder inside that, until you see a bunch of files.

to run the script, double click the "Run" or "Run.bat" file. if you get a warning saying "the publisher could not be verified" or similar, that's fine - press "Run" anyway. developers have to pay money to get rid of that warning. if you get a User Account Control (UAC) popup asking you if you want to allow the terminal to make changes to your device, press Yes.

now a window should pop up, welcoming you to Win11Debloat, with a Default Mode button and a Custom Setup button. you're probably safe going with the defaults, but the custom setup isn't too scary, and you might want to do that instead.

Default Mode will show you a list of changes selected for you by default. most of these should be things you want, but read through the list just to double check. all those applications it's removing for you are things you can go download later yourself if you want, they're just a bunch of Microsoft applications that come pre-installed. if you're unhappy with any of these, either close the window and rerun Run.bat, or press the "Previous" button until you get back to the start, then go ahead with the custom setup.

the custom setup will have all the defaults from Default Mode, but will give you the option to toggle them on and off individually as you want. they should all be fairly self explanatory, and anything you need to know should be explained by the app. if you're not sure what something does, you should probably keep it just to be safe. in the System Tweaks section, each subsection has a "(?)" next to its header that you can click on to learn more.

by default it'll apply changes to whichever user you're signed in with, and remove the selected applications from all users. this is probably what you want, but you can change it here if you like.

at the end there's some options to create a system restore point (you probably should leave that on, just in case something goes horribly wrong - which it shouldn't! but better safe than sorry), and to restart the file explorer to apply all changes immediately. if you decide to check that button, things might look scary for a second - your taskbar and wallpaper might disappear for a second, but they'll come back in a moment. apart from your file explorer windows closing, there shouldn't be any consequences.

then you can go ahead and press Apply Changes!

you'll be shown a little console window where the program tells you what it's doing. at the end it'll say "All changes have been applied. Please check the above output for any errors.", at which point you should be able to press "Close Win11Debloat", and you're all set!

## others

some others i found by looking up Windows debloaters are [WinScript](https://winscript.cc/) and [Winhance](https://winhance.net/), but i haven't used them and can't be bothered to test them right now. oops