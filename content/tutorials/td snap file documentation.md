---
title: TD Snap file documentation
description: a documentation of the database file exported from TD Snap pagesets
draft: false
authors:
  - gold
tags:
  - aac
  - technical
  - documentation
  - wip
---
> [!warning] this page is a heavy work in progress!
> TD Snap is closed source and does not document the way the app works. i'm having to reverse engineer all of this myself through trial and error.
> 
> if you know anything, have any ideas, or otherwise would like to help, feel free to let me know! you can contact me on discord [@goldstargloww](https://discordapp.com/users/500811733561114664) or tumblr [here](https://tumblr.com/goldstargloww). my DMs are open without friend request everywhere.

# common info

## color

decimal version of a signed two's complement hex code, AARRGGBB.

in Google Sheets, at least, you can convert to hex code with the formula `=RIGHT(DEC2HEX(number),8)`

# page bundles (.spb)

## SyncData

### UniqueId

### Type

### Timestamp

### SyncHash

### Deleted

### Description

## Page

### Id

### UniqueId

### Title

### PageType

### Language

eg. neut, en_US

`NULL`: defaults to [[#Language-1|PageSetProperties > Language]].

### BackgroundColor

the background color of the page. see [[#color|§ color]].

`NULL`: defaults to [[#PageBackgroundColor|PageSetProperties > PageBackgroundColor]].

### ContentTag

### Timestamp

### SyncHash

### SerializedMetadata

### VocabPlannerForcedVisible

### LibrarySymbolId

### PageSetImageId

### GridDimension

the grid dimensions of the page.

`int,int`: the number of rows and columns on the page.

`NULL`: defaults to [[#GridDimension-1|PageSetProperties > GridDimension]].

### MessageBarVisible

whether or not the message bar is visible while on this page.

`0`: hidden \
`1`: visible \
`NULL`: defaults to [[#MessageBarVisible-1|PageSetProperties > MessageBarVisible]].

### SceneVisible

`NULL`: defaults to [[#SceneVisible-1|PageSetProperties > SceneVisible]].

### GridVisible

`NULL`: defaults to [[#GridVisible-1|PageSetProperties > GridVisible]].

### SerializedSymbolPersonColors

### SymbolColorDataId

## sqlite_sequence

an internal table used by SQLite for keeping track of AUTOINCREMENT columns in the database.

## PageLayout

i have no idea i am incredibly lost

### Id

### PageLayoutSetting

WHO ARE YOU??!???

### PageId

## ElementPlacement

### Id

### GridPosition

`int,int` - marks the position of the start of the element. origin is top left.

0-indexed or 1-indexed?

### GridSpan

`int,int` - marks the number of tiles an element spans, anchored around the [[#GridPosition|GridPosition]]. width by height.

### Visible

whether or not the element is visible.

`0`: hidden \
`1`: visible

### ElementReferenceId

### PageLayoutId

## ScanGroup

i don't know how scanning works

### Id

### Name

### ScanOrder

### StayInside

### Color

### AudioCue

### UseAudioCueRecording

### SerializedGridPositions

### AudioGridRecordingId

### SerializedAudioCueSoundMetadata

### PageLayoutId

## Button

### Id

### Label

the text that's shown on the button.

### LabelOwnership

### Message

the message put into the message window and spoken by the button.

### ImageOwnership

### BorderColor

the color of the button's border. see [[#color|§ color]].

### BorderThickness

the thickness of a button's border, ranging from 0–12, in pixels.

in the app, "None" = 0, "Thin" = 3, "Medium" = 6, and "Heavy" = 12. you can also set the thickness manually.

at least when inputting in the app, values cap at 12, negative values are impossible to enter, and values are rounded down to the tenth.

### FontFamily

the name of the font family the button uses.

### FontSize

the font size, as a decimal multiplier. 125% in app is stored as 1.25 in the database.

### FontStyle

a boolean deterimining whether or not the label is bold.

NULL - default for the pageset
0 - not bold
1 - bold

### SmartSymLayout

the way the label and image are laid out on the button.

0 - label top, image bottom
1 - label bottom, image top
2 - label left, image right
3 - label right, image left
4 - label only
5 - image only

### LinkIndicatorStyle

the way the button visually indicates it's a link.

NULL - default for the pageset
0 - none
1 - navigation icon
2 - folder
3 - corner tab

### CommandFlags

### ContentType

2 - keyboard?
6 - link?

### SerializedContentTypeHandler

#### keyboard keys

RegularKey
Space
Backspace
CapsLock
Shift

### ContentTag

### UseMessageRecording

### UniqueId

### ActiveContentType

i *think* this is all correct

- 0 none
- 1 access method pause state
- 11 accessit connection state
- 2 chat mode
- 3 date
- 17 desktop access state
- 10 feedback volume
- 22 access method
- 15 access time
- 6 battery level
- 16 current boardmaker activity
- 4 day of the week
- 8 feedback mute state
- 19 message window redo state

### LibrarySymbolId

### PageSetImageId

### SymbolColorDataId

### MessageRecordingId

### ElementReferenceId

### SerializedMessageSoundMetadata

## CommandSequence

### Id

### SerializedCommands

### ButtonId

## PageSetData

pretty sure this is the table that contains images and symbols. will have to look into it more later to properly document it though

### Id

### Identifier

### Data

### RefCount

## Whiteboard

i don't know how whiteboards work

### Id

### UniqueId

### ThumbnailImageId

### Timestamp

### SyncHash

## WhiteboardImage

### Id

### UniqueId

### ScaleX

### ScaleY

### PositionX

### PositionY

### Rotation

### PageSetImageId

### WhiteBoardId

## WhiteboardDoodlePath

### Id

### ScaleX

### ScaleY

### PositionX

### PositionY

### Rotation

### SerializedPath

### SerializedPaint

### WhiteboardId

## ButtonUsage

probably has to do with statistics

### Id

### Timestamp

### ButtonUniqueId

### Modeling

### AccessMethod

### BlockId

## ButtonUsageBlock

maybe sessions?

### Id

### UniqueId

### StartTime

### Timestamp

### SyncHash

## Synchronization

### Id

### SyncServerIdentifier

### PageSetTimestamp

### PageSetSyncHash

## PageSetProperties

### Id

### ContentIdentifier

### ContentVersion

### Schema Version

### UniqueId

### Language

### Timestamp

### SyncHash

### DefaultHomePageUniqueId

### SerializedHomePageUniqueIdOverrides

### DefaultKeyboardPageUniqueId

### SerializedKeyboardUniqueIdOverrides

### ToolbarUniqueId

### DashboardUniqueId

### MessageBarUniqueId

### MessageBarVisible

whether or not the message bar is visible by default.

`0`: hidden \
`1`: visible

### ToolbarLocation

### GridVisible

### SceneVisible

### FriendlyName

the user-set name of the pageset.

### Description

the user-set description of the pageset.

### IconImageId

### SerializedPreferredGridDimensions

### GridDimension

the default grid dimensions of pages.

`int,int`: the number of rows and columns on the page.

### SmartSymLayout

the default symbol and image layout on buttons.

### FontFamily

the default font family of buttons.

### FontSize

the default font size of buttons.

### FontStyle

the default font style of buttons.

### PageBackgroundColor

the default background color of pages. see [[#color|§ color]].

### MessageBarBackgroundColor

the background color of the message bar. see [[#color|§ color]].

### MessageWindowBackgroundColor

the background color of the message window. see [[#color|§ color]].

### MessageWindowHighlightColor

the color that the text in the message window gets highlighted when being read out. see [[#color|§ color]].

### ToolBarBackgroundColor

the background color of the toolbar. see see [[#color|§ color]].

### MessageWindowTextColor

the color of the text in the message window. see [[#color|§ color]].

### MessageWindowFontSize

the size of text in the message window.

### GridMarginFactor

how much of a gap there is between buttons.

visual approximation - estimated gap between buttons, at least on my 1920x1080 screen. there's anti-aliasing so i can't be precise

| value | visual approximation | in app text |
| ----- | -------------------- | ----------- |
| ?     | 5.5px                | Very Small  |
| ?     | 13px                 | Small       |
| 12    | 21px                 | Medium      |
| ?     | 30.5px               | Large       |
| ?     | 45.3px               | Very Large  |

### LinkIndicatorStyle

the default link indicator style.

### LinkIndicatorCornerTabColor

### SerializedOffscreenButton1Commands

### SerializedOffscreenButton2Commands

### ToolBarGridDimension

### PreferNavigationButtons

### MessageWindowFontFamily

### SerializedPagePageSetScanGroup

### SerializedToolbarPageSetScanGroup

### SerializedMessageBarPageSetScanGroup

### SerializedSymbolPersonColors

### VocabPlannerEnabled

### VocabPlannerCurrentListUniqueId

### AutomorphingModel

### CapabilityFlags

### SerializedConfigurationInfo

### ButtonSearchAllowDuplicateMatches

### ButtonSearchShowHiddenPaths

### ButtonSearchPathIsAccessible

### SerializedLanguageSettingsCollection

### SerializedScrollButtonStyle

### SerializedPageSetDefault

## ElementReference

### Id

### ElementType

### Language

### AudioCue

### UseAudioCueRecording

### ForegroundColor

### BackgroundColor

### AudioCueRecordingId

### SerializedAudioCueSoundMetadata

### SerializedAccessSettingOverrides

### PageId

## MessageWindowElement

### Id

### UseSymbols

### ElementReferenceId

## SymbolColorData

### Id

### Identifier

### SerializedFromColors

### SerializedToColors

## VocabList

### Id

### UniqueId

### Name

### Timestamp

### SyncHash

## VocabListEntry

### Id

### Text

### VocabListId

## ButtonPageLink

### Id

### ButtonId

### PageUniqueId

## PageExtra

### Id

### AccessedAt