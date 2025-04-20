gdjs.finalCode = {};
gdjs.finalCode.localVariables = [];
gdjs.finalCode.GDlagoObjects1= [];
gdjs.finalCode.GDlagoObjects2= [];
gdjs.finalCode.GDarbustoObjects1= [];
gdjs.finalCode.GDarbustoObjects2= [];
gdjs.finalCode.GDfireObjects1= [];
gdjs.finalCode.GDfireObjects2= [];
gdjs.finalCode.GDrocasObjects1= [];
gdjs.finalCode.GDrocasObjects2= [];
gdjs.finalCode.GDDownloadObjects1= [];
gdjs.finalCode.GDDownloadObjects2= [];
gdjs.finalCode.GDpastoObjects1= [];
gdjs.finalCode.GDpastoObjects2= [];
gdjs.finalCode.GDwallObjects1= [];
gdjs.finalCode.GDwallObjects2= [];
gdjs.finalCode.GDEndObjects1= [];
gdjs.finalCode.GDEndObjects2= [];
gdjs.finalCode.GDnextObjects1= [];
gdjs.finalCode.GDnextObjects2= [];
gdjs.finalCode.GDarrow_9595textObjects1= [];
gdjs.finalCode.GDarrow_9595textObjects2= [];
gdjs.finalCode.GDTomObjects1= [];
gdjs.finalCode.GDTomObjects2= [];
gdjs.finalCode.GDMerObjects1= [];
gdjs.finalCode.GDMerObjects2= [];
gdjs.finalCode.GDmuseum_9595floorObjects1= [];
gdjs.finalCode.GDmuseum_9595floorObjects2= [];
gdjs.finalCode.GDmuseum_9595floor2Objects1= [];
gdjs.finalCode.GDmuseum_9595floor2Objects2= [];
gdjs.finalCode.GDdoorObjects1= [];
gdjs.finalCode.GDdoorObjects2= [];
gdjs.finalCode.GDmuseum_9595floor3Objects1= [];
gdjs.finalCode.GDmuseum_9595floor3Objects2= [];
gdjs.finalCode.GDgeneral_9595wallObjects1= [];
gdjs.finalCode.GDgeneral_9595wallObjects2= [];
gdjs.finalCode.GDpastoplanoObjects1= [];
gdjs.finalCode.GDpastoplanoObjects2= [];
gdjs.finalCode.GDArbolObjects1= [];
gdjs.finalCode.GDArbolObjects2= [];
gdjs.finalCode.GDtextframeObjects1= [];
gdjs.finalCode.GDtextframeObjects2= [];
gdjs.finalCode.GDarrowObjects1= [];
gdjs.finalCode.GDarrowObjects2= [];
gdjs.finalCode.GDTransparentLightJoystickObjects1= [];
gdjs.finalCode.GDTransparentLightJoystickObjects2= [];


gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects = Hashtable.newFrom({"Mer": gdjs.finalCode.GDMerObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDArbolObjects1Objects = Hashtable.newFrom({"Arbol": gdjs.finalCode.GDArbolObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDArbolObjects1Objects = Hashtable.newFrom({"Arbol": gdjs.finalCode.GDArbolObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects = Hashtable.newFrom({"Mer": gdjs.finalCode.GDMerObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDarbustoObjects1Objects = Hashtable.newFrom({"arbusto": gdjs.finalCode.GDarbustoObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDarbustoObjects1Objects = Hashtable.newFrom({"arbusto": gdjs.finalCode.GDarbustoObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects = Hashtable.newFrom({"Mer": gdjs.finalCode.GDMerObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDfireObjects1Objects = Hashtable.newFrom({"fire": gdjs.finalCode.GDfireObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDfireObjects1Objects = Hashtable.newFrom({"fire": gdjs.finalCode.GDfireObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects = Hashtable.newFrom({"Mer": gdjs.finalCode.GDMerObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDlagoObjects1Objects = Hashtable.newFrom({"lago": gdjs.finalCode.GDlagoObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDlagoObjects1Objects = Hashtable.newFrom({"lago": gdjs.finalCode.GDlagoObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects = Hashtable.newFrom({"Mer": gdjs.finalCode.GDMerObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDDownloadObjects1Objects = Hashtable.newFrom({"Download": gdjs.finalCode.GDDownloadObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDDownloadObjects1Objects = Hashtable.newFrom({"Download": gdjs.finalCode.GDDownloadObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects = Hashtable.newFrom({"Mer": gdjs.finalCode.GDMerObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.finalCode.GDwallObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDDownloadObjects1Objects = Hashtable.newFrom({"Download": gdjs.finalCode.GDDownloadObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDfireObjects1Objects = Hashtable.newFrom({"fire": gdjs.finalCode.GDfireObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDarrow_95959595textObjects1Objects = Hashtable.newFrom({"arrow_text": gdjs.finalCode.GDarrow_9595textObjects1});
gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDTomObjects1Objects = Hashtable.newFrom({"Tom": gdjs.finalCode.GDTomObjects1});
gdjs.finalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finalCode.GDMerObjects1.length;i<l;++i) {
    if ( gdjs.finalCode.GDMerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.finalCode.GDMerObjects1[k] = gdjs.finalCode.GDMerObjects1[i];
        ++k;
    }
}
gdjs.finalCode.GDMerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.finalCode.GDMerObjects1 */
{for(var i = 0, len = gdjs.finalCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDMerObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.finalCode.GDMerObjects1.length;i<l;++i) {
    if ( !(gdjs.finalCode.GDMerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.finalCode.GDMerObjects1[k] = gdjs.finalCode.GDMerObjects1[i];
        ++k;
    }
}
gdjs.finalCode.GDMerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.finalCode.GDMerObjects1 */
{for(var i = 0, len = gdjs.finalCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDMerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);
{for(var i = 0, len = gdjs.finalCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDMerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);
{for(var i = 0, len = gdjs.finalCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDMerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arbol"), gdjs.finalCode.GDArbolObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects, gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDArbolObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.finalCode.GDArbolObjects1 */
/* Reuse gdjs.finalCode.GDMerObjects1 */
{for(var i = 0, len = gdjs.finalCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDMerObjects1[i].separateFromObjectsList(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDArbolObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);
gdjs.copyArray(runtimeScene.getObjects("arbusto"), gdjs.finalCode.GDarbustoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects, gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDarbustoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.finalCode.GDMerObjects1 */
/* Reuse gdjs.finalCode.GDarbustoObjects1 */
{for(var i = 0, len = gdjs.finalCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDMerObjects1[i].separateFromObjectsList(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDarbustoObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fire"), gdjs.finalCode.GDfireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects, gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDfireObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.finalCode.GDMerObjects1 */
/* Reuse gdjs.finalCode.GDfireObjects1 */
{for(var i = 0, len = gdjs.finalCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDMerObjects1[i].separateFromObjectsList(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDfireObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);
gdjs.copyArray(runtimeScene.getObjects("lago"), gdjs.finalCode.GDlagoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects, gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDlagoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.finalCode.GDMerObjects1 */
/* Reuse gdjs.finalCode.GDlagoObjects1 */
{for(var i = 0, len = gdjs.finalCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDMerObjects1[i].separateFromObjectsList(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDlagoObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Download"), gdjs.finalCode.GDDownloadObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects, gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDDownloadObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.finalCode.GDDownloadObjects1 */
/* Reuse gdjs.finalCode.GDMerObjects1 */
{for(var i = 0, len = gdjs.finalCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDMerObjects1[i].separateFromObjectsList(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDDownloadObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.finalCode.GDMerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.finalCode.GDwallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDMerObjects1Objects, gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDwallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hall", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Download"), gdjs.finalCode.GDDownloadObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDDownloadObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://drive.google.com/file/d/18mXdFIO6HnIbiI65G6bwmMZBG-mzTk1a/view", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fire"), gdjs.finalCode.GDfireObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDfireObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("mailto:merliarizaherrera@gmail.com", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("arrow_text"), gdjs.finalCode.GDarrow_9595textObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDarrow_95959595textObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.finalCode.GDEndObjects1);
/* Reuse gdjs.finalCode.GDarrow_9595textObjects1 */
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.finalCode.GDnextObjects1);
{for(var i = 0, len = gdjs.finalCode.GDarrow_9595textObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDarrow_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.finalCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDEndObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.finalCode.GDnextObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDnextObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.finalCode.GDEndObjects1);
gdjs.copyArray(runtimeScene.getObjects("arrow_text"), gdjs.finalCode.GDarrow_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.finalCode.GDnextObjects1);
gdjs.copyArray(runtimeScene.getObjects("textframe"), gdjs.finalCode.GDtextframeObjects1);
{for(var i = 0, len = gdjs.finalCode.GDnextObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDnextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.finalCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDEndObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.finalCode.GDarrow_9595textObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDarrow_9595textObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.finalCode.GDtextframeObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDtextframeObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tom"), gdjs.finalCode.GDTomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.finalCode.mapOfGDgdjs_9546finalCode_9546GDTomObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("End"), gdjs.finalCode.GDEndObjects1);
gdjs.copyArray(runtimeScene.getObjects("arrow_text"), gdjs.finalCode.GDarrow_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("textframe"), gdjs.finalCode.GDtextframeObjects1);
{for(var i = 0, len = gdjs.finalCode.GDtextframeObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDtextframeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.finalCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDEndObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.finalCode.GDarrow_9595textObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDarrow_9595textObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransparentLightJoystick"), gdjs.finalCode.GDTransparentLightJoystickObjects1);
{for(var i = 0, len = gdjs.finalCode.GDTransparentLightJoystickObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDTransparentLightJoystickObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransparentLightJoystick"), gdjs.finalCode.GDTransparentLightJoystickObjects1);
{for(var i = 0, len = gdjs.finalCode.GDTransparentLightJoystickObjects1.length ;i < len;++i) {
    gdjs.finalCode.GDTransparentLightJoystickObjects1[i].hide(false);
}
}}

}


};

gdjs.finalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.finalCode.GDlagoObjects1.length = 0;
gdjs.finalCode.GDlagoObjects2.length = 0;
gdjs.finalCode.GDarbustoObjects1.length = 0;
gdjs.finalCode.GDarbustoObjects2.length = 0;
gdjs.finalCode.GDfireObjects1.length = 0;
gdjs.finalCode.GDfireObjects2.length = 0;
gdjs.finalCode.GDrocasObjects1.length = 0;
gdjs.finalCode.GDrocasObjects2.length = 0;
gdjs.finalCode.GDDownloadObjects1.length = 0;
gdjs.finalCode.GDDownloadObjects2.length = 0;
gdjs.finalCode.GDpastoObjects1.length = 0;
gdjs.finalCode.GDpastoObjects2.length = 0;
gdjs.finalCode.GDwallObjects1.length = 0;
gdjs.finalCode.GDwallObjects2.length = 0;
gdjs.finalCode.GDEndObjects1.length = 0;
gdjs.finalCode.GDEndObjects2.length = 0;
gdjs.finalCode.GDnextObjects1.length = 0;
gdjs.finalCode.GDnextObjects2.length = 0;
gdjs.finalCode.GDarrow_9595textObjects1.length = 0;
gdjs.finalCode.GDarrow_9595textObjects2.length = 0;
gdjs.finalCode.GDTomObjects1.length = 0;
gdjs.finalCode.GDTomObjects2.length = 0;
gdjs.finalCode.GDMerObjects1.length = 0;
gdjs.finalCode.GDMerObjects2.length = 0;
gdjs.finalCode.GDmuseum_9595floorObjects1.length = 0;
gdjs.finalCode.GDmuseum_9595floorObjects2.length = 0;
gdjs.finalCode.GDmuseum_9595floor2Objects1.length = 0;
gdjs.finalCode.GDmuseum_9595floor2Objects2.length = 0;
gdjs.finalCode.GDdoorObjects1.length = 0;
gdjs.finalCode.GDdoorObjects2.length = 0;
gdjs.finalCode.GDmuseum_9595floor3Objects1.length = 0;
gdjs.finalCode.GDmuseum_9595floor3Objects2.length = 0;
gdjs.finalCode.GDgeneral_9595wallObjects1.length = 0;
gdjs.finalCode.GDgeneral_9595wallObjects2.length = 0;
gdjs.finalCode.GDpastoplanoObjects1.length = 0;
gdjs.finalCode.GDpastoplanoObjects2.length = 0;
gdjs.finalCode.GDArbolObjects1.length = 0;
gdjs.finalCode.GDArbolObjects2.length = 0;
gdjs.finalCode.GDtextframeObjects1.length = 0;
gdjs.finalCode.GDtextframeObjects2.length = 0;
gdjs.finalCode.GDarrowObjects1.length = 0;
gdjs.finalCode.GDarrowObjects2.length = 0;
gdjs.finalCode.GDTransparentLightJoystickObjects1.length = 0;
gdjs.finalCode.GDTransparentLightJoystickObjects2.length = 0;

gdjs.finalCode.eventsList0(runtimeScene);
gdjs.finalCode.GDlagoObjects1.length = 0;
gdjs.finalCode.GDlagoObjects2.length = 0;
gdjs.finalCode.GDarbustoObjects1.length = 0;
gdjs.finalCode.GDarbustoObjects2.length = 0;
gdjs.finalCode.GDfireObjects1.length = 0;
gdjs.finalCode.GDfireObjects2.length = 0;
gdjs.finalCode.GDrocasObjects1.length = 0;
gdjs.finalCode.GDrocasObjects2.length = 0;
gdjs.finalCode.GDDownloadObjects1.length = 0;
gdjs.finalCode.GDDownloadObjects2.length = 0;
gdjs.finalCode.GDpastoObjects1.length = 0;
gdjs.finalCode.GDpastoObjects2.length = 0;
gdjs.finalCode.GDwallObjects1.length = 0;
gdjs.finalCode.GDwallObjects2.length = 0;
gdjs.finalCode.GDEndObjects1.length = 0;
gdjs.finalCode.GDEndObjects2.length = 0;
gdjs.finalCode.GDnextObjects1.length = 0;
gdjs.finalCode.GDnextObjects2.length = 0;
gdjs.finalCode.GDarrow_9595textObjects1.length = 0;
gdjs.finalCode.GDarrow_9595textObjects2.length = 0;
gdjs.finalCode.GDTomObjects1.length = 0;
gdjs.finalCode.GDTomObjects2.length = 0;
gdjs.finalCode.GDMerObjects1.length = 0;
gdjs.finalCode.GDMerObjects2.length = 0;
gdjs.finalCode.GDmuseum_9595floorObjects1.length = 0;
gdjs.finalCode.GDmuseum_9595floorObjects2.length = 0;
gdjs.finalCode.GDmuseum_9595floor2Objects1.length = 0;
gdjs.finalCode.GDmuseum_9595floor2Objects2.length = 0;
gdjs.finalCode.GDdoorObjects1.length = 0;
gdjs.finalCode.GDdoorObjects2.length = 0;
gdjs.finalCode.GDmuseum_9595floor3Objects1.length = 0;
gdjs.finalCode.GDmuseum_9595floor3Objects2.length = 0;
gdjs.finalCode.GDgeneral_9595wallObjects1.length = 0;
gdjs.finalCode.GDgeneral_9595wallObjects2.length = 0;
gdjs.finalCode.GDpastoplanoObjects1.length = 0;
gdjs.finalCode.GDpastoplanoObjects2.length = 0;
gdjs.finalCode.GDArbolObjects1.length = 0;
gdjs.finalCode.GDArbolObjects2.length = 0;
gdjs.finalCode.GDtextframeObjects1.length = 0;
gdjs.finalCode.GDtextframeObjects2.length = 0;
gdjs.finalCode.GDarrowObjects1.length = 0;
gdjs.finalCode.GDarrowObjects2.length = 0;
gdjs.finalCode.GDTransparentLightJoystickObjects1.length = 0;
gdjs.finalCode.GDTransparentLightJoystickObjects2.length = 0;


return;

}

gdjs['finalCode'] = gdjs.finalCode;
