gdjs.MerliCode = {};
gdjs.MerliCode.localVariables = [];
gdjs.MerliCode.GDCloudsObjects1= [];
gdjs.MerliCode.GDCloudsObjects2= [];
gdjs.MerliCode.GDFireObjects1= [];
gdjs.MerliCode.GDFireObjects2= [];
gdjs.MerliCode.GDPastoObjects1= [];
gdjs.MerliCode.GDPastoObjects2= [];
gdjs.MerliCode.GDPiedraObjects1= [];
gdjs.MerliCode.GDPiedraObjects2= [];
gdjs.MerliCode.GDArbustoObjects1= [];
gdjs.MerliCode.GDArbustoObjects2= [];
gdjs.MerliCode.GDlagoObjects1= [];
gdjs.MerliCode.GDlagoObjects2= [];
gdjs.MerliCode.GDmuseumObjects1= [];
gdjs.MerliCode.GDmuseumObjects2= [];
gdjs.MerliCode.GDpisoObjects1= [];
gdjs.MerliCode.GDpisoObjects2= [];
gdjs.MerliCode.GDPiso_95952Objects1= [];
gdjs.MerliCode.GDPiso_95952Objects2= [];
gdjs.MerliCode.GDlibroObjects1= [];
gdjs.MerliCode.GDlibroObjects2= [];
gdjs.MerliCode.GDInicioObjects1= [];
gdjs.MerliCode.GDInicioObjects2= [];
gdjs.MerliCode.GDmoreinfoObjects1= [];
gdjs.MerliCode.GDmoreinfoObjects2= [];
gdjs.MerliCode.GDInicio2Objects1= [];
gdjs.MerliCode.GDInicio2Objects2= [];
gdjs.MerliCode.GDdoorObjects1= [];
gdjs.MerliCode.GDdoorObjects2= [];
gdjs.MerliCode.GDMerObjects1= [];
gdjs.MerliCode.GDMerObjects2= [];
gdjs.MerliCode.GDmuseum_9595floorObjects1= [];
gdjs.MerliCode.GDmuseum_9595floorObjects2= [];
gdjs.MerliCode.GDmuseum_9595floor2Objects1= [];
gdjs.MerliCode.GDmuseum_9595floor2Objects2= [];
gdjs.MerliCode.GDdoorObjects1= [];
gdjs.MerliCode.GDdoorObjects2= [];
gdjs.MerliCode.GDmuseum_9595floor3Objects1= [];
gdjs.MerliCode.GDmuseum_9595floor3Objects2= [];
gdjs.MerliCode.GDgeneral_9595wallObjects1= [];
gdjs.MerliCode.GDgeneral_9595wallObjects2= [];
gdjs.MerliCode.GDpastoplanoObjects1= [];
gdjs.MerliCode.GDpastoplanoObjects2= [];
gdjs.MerliCode.GDArbolObjects1= [];
gdjs.MerliCode.GDArbolObjects2= [];
gdjs.MerliCode.GDtextframeObjects1= [];
gdjs.MerliCode.GDtextframeObjects2= [];
gdjs.MerliCode.GDarrowObjects1= [];
gdjs.MerliCode.GDarrowObjects2= [];
gdjs.MerliCode.GDLineLightJoystickObjects1= [];
gdjs.MerliCode.GDLineLightJoystickObjects2= [];
gdjs.MerliCode.GDgeneral_9595wall2Objects1= [];
gdjs.MerliCode.GDgeneral_9595wall2Objects2= [];


gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDMerObjects1Objects = Hashtable.newFrom({"Mer": gdjs.MerliCode.GDMerObjects1});
gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDArbolObjects1Objects = Hashtable.newFrom({"Arbol": gdjs.MerliCode.GDArbolObjects1});
gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDArbolObjects1Objects = Hashtable.newFrom({"Arbol": gdjs.MerliCode.GDArbolObjects1});
gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDlibroObjects1Objects = Hashtable.newFrom({"libro": gdjs.MerliCode.GDlibroObjects1});
gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDmoreinfoObjects1Objects = Hashtable.newFrom({"moreinfo": gdjs.MerliCode.GDmoreinfoObjects1});
gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDMerObjects1Objects = Hashtable.newFrom({"Mer": gdjs.MerliCode.GDMerObjects1});
gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.MerliCode.GDdoorObjects1});
gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDMerObjects1Objects = Hashtable.newFrom({"Mer": gdjs.MerliCode.GDMerObjects1});
gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDlibroObjects1Objects = Hashtable.newFrom({"libro": gdjs.MerliCode.GDlibroObjects1});
gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDlibroObjects1Objects = Hashtable.newFrom({"libro": gdjs.MerliCode.GDlibroObjects1});
gdjs.MerliCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.MerliCode.GDMerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MerliCode.GDMerObjects1.length;i<l;++i) {
    if ( gdjs.MerliCode.GDMerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.MerliCode.GDMerObjects1[k] = gdjs.MerliCode.GDMerObjects1[i];
        ++k;
    }
}
gdjs.MerliCode.GDMerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MerliCode.GDMerObjects1 */
{for(var i = 0, len = gdjs.MerliCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDMerObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.MerliCode.GDMerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MerliCode.GDMerObjects1.length;i<l;++i) {
    if ( !(gdjs.MerliCode.GDMerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.MerliCode.GDMerObjects1[k] = gdjs.MerliCode.GDMerObjects1[i];
        ++k;
    }
}
gdjs.MerliCode.GDMerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MerliCode.GDMerObjects1 */
{for(var i = 0, len = gdjs.MerliCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDMerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.MerliCode.GDMerObjects1);
{for(var i = 0, len = gdjs.MerliCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDMerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.MerliCode.GDMerObjects1);
{for(var i = 0, len = gdjs.MerliCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDMerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arbol"), gdjs.MerliCode.GDArbolObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.MerliCode.GDMerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDMerObjects1Objects, gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDArbolObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MerliCode.GDArbolObjects1 */
/* Reuse gdjs.MerliCode.GDMerObjects1 */
{for(var i = 0, len = gdjs.MerliCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDMerObjects1[i].separateFromObjectsList(gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDArbolObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("libro"), gdjs.MerliCode.GDlibroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDlibroObjects1Objects, runtimeScene, true, false);
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
gdjs.copyArray(runtimeScene.getObjects("Inicio"), gdjs.MerliCode.GDInicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("arrow"), gdjs.MerliCode.GDarrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("moreinfo"), gdjs.MerliCode.GDmoreinfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("textframe"), gdjs.MerliCode.GDtextframeObjects1);
{for(var i = 0, len = gdjs.MerliCode.GDInicioObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDInicioObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MerliCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDarrowObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MerliCode.GDtextframeObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDtextframeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MerliCode.GDmoreinfoObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDmoreinfoObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inicio"), gdjs.MerliCode.GDInicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Inicio2"), gdjs.MerliCode.GDInicio2Objects1);
gdjs.copyArray(runtimeScene.getObjects("moreinfo"), gdjs.MerliCode.GDmoreinfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("textframe"), gdjs.MerliCode.GDtextframeObjects1);
{for(var i = 0, len = gdjs.MerliCode.GDInicioObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDInicioObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MerliCode.GDtextframeObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDtextframeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MerliCode.GDmoreinfoObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDmoreinfoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MerliCode.GDInicio2Objects1.length ;i < len;++i) {
    gdjs.MerliCode.GDInicio2Objects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("moreinfo"), gdjs.MerliCode.GDmoreinfoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDmoreinfoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inicio"), gdjs.MerliCode.GDInicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("Inicio2"), gdjs.MerliCode.GDInicio2Objects1);
/* Reuse gdjs.MerliCode.GDmoreinfoObjects1 */
{for(var i = 0, len = gdjs.MerliCode.GDInicioObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDInicioObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MerliCode.GDInicio2Objects1.length ;i < len;++i) {
    gdjs.MerliCode.GDInicio2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MerliCode.GDmoreinfoObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDmoreinfoObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.MerliCode.GDMerObjects1);
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.MerliCode.GDdoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDMerObjects1Objects, gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDdoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Museum", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.MerliCode.GDMerObjects1);
gdjs.copyArray(runtimeScene.getObjects("libro"), gdjs.MerliCode.GDlibroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDMerObjects1Objects, gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDlibroObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MerliCode.GDMerObjects1 */
/* Reuse gdjs.MerliCode.GDlibroObjects1 */
{for(var i = 0, len = gdjs.MerliCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDMerObjects1[i].separateFromObjectsList(gdjs.MerliCode.mapOfGDgdjs_9546MerliCode_9546GDlibroObjects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.MerliCode.GDLineLightJoystickObjects1);
{for(var i = 0, len = gdjs.MerliCode.GDLineLightJoystickObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDLineLightJoystickObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.MerliCode.GDLineLightJoystickObjects1);
{for(var i = 0, len = gdjs.MerliCode.GDLineLightJoystickObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDLineLightJoystickObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.MerliCode.GDMerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MerliCode.GDMerObjects1.length;i<l;++i) {
    if ( gdjs.MerliCode.GDMerObjects1[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.MerliCode.GDMerObjects1[k] = gdjs.MerliCode.GDMerObjects1[i];
        ++k;
    }
}
gdjs.MerliCode.GDMerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.MerliCode.GDMerObjects1 */
{for(var i = 0, len = gdjs.MerliCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDMerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mer"), gdjs.MerliCode.GDMerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MerliCode.GDMerObjects1.length;i<l;++i) {
    if ( gdjs.MerliCode.GDMerObjects1[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.MerliCode.GDMerObjects1[k] = gdjs.MerliCode.GDMerObjects1[i];
        ++k;
    }
}
gdjs.MerliCode.GDMerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
/* Reuse gdjs.MerliCode.GDMerObjects1 */
{for(var i = 0, len = gdjs.MerliCode.GDMerObjects1.length ;i < len;++i) {
    gdjs.MerliCode.GDMerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};

gdjs.MerliCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MerliCode.GDCloudsObjects1.length = 0;
gdjs.MerliCode.GDCloudsObjects2.length = 0;
gdjs.MerliCode.GDFireObjects1.length = 0;
gdjs.MerliCode.GDFireObjects2.length = 0;
gdjs.MerliCode.GDPastoObjects1.length = 0;
gdjs.MerliCode.GDPastoObjects2.length = 0;
gdjs.MerliCode.GDPiedraObjects1.length = 0;
gdjs.MerliCode.GDPiedraObjects2.length = 0;
gdjs.MerliCode.GDArbustoObjects1.length = 0;
gdjs.MerliCode.GDArbustoObjects2.length = 0;
gdjs.MerliCode.GDlagoObjects1.length = 0;
gdjs.MerliCode.GDlagoObjects2.length = 0;
gdjs.MerliCode.GDmuseumObjects1.length = 0;
gdjs.MerliCode.GDmuseumObjects2.length = 0;
gdjs.MerliCode.GDpisoObjects1.length = 0;
gdjs.MerliCode.GDpisoObjects2.length = 0;
gdjs.MerliCode.GDPiso_95952Objects1.length = 0;
gdjs.MerliCode.GDPiso_95952Objects2.length = 0;
gdjs.MerliCode.GDlibroObjects1.length = 0;
gdjs.MerliCode.GDlibroObjects2.length = 0;
gdjs.MerliCode.GDInicioObjects1.length = 0;
gdjs.MerliCode.GDInicioObjects2.length = 0;
gdjs.MerliCode.GDmoreinfoObjects1.length = 0;
gdjs.MerliCode.GDmoreinfoObjects2.length = 0;
gdjs.MerliCode.GDInicio2Objects1.length = 0;
gdjs.MerliCode.GDInicio2Objects2.length = 0;
gdjs.MerliCode.GDdoorObjects1.length = 0;
gdjs.MerliCode.GDdoorObjects2.length = 0;
gdjs.MerliCode.GDMerObjects1.length = 0;
gdjs.MerliCode.GDMerObjects2.length = 0;
gdjs.MerliCode.GDmuseum_9595floorObjects1.length = 0;
gdjs.MerliCode.GDmuseum_9595floorObjects2.length = 0;
gdjs.MerliCode.GDmuseum_9595floor2Objects1.length = 0;
gdjs.MerliCode.GDmuseum_9595floor2Objects2.length = 0;
gdjs.MerliCode.GDdoorObjects1.length = 0;
gdjs.MerliCode.GDdoorObjects2.length = 0;
gdjs.MerliCode.GDmuseum_9595floor3Objects1.length = 0;
gdjs.MerliCode.GDmuseum_9595floor3Objects2.length = 0;
gdjs.MerliCode.GDgeneral_9595wallObjects1.length = 0;
gdjs.MerliCode.GDgeneral_9595wallObjects2.length = 0;
gdjs.MerliCode.GDpastoplanoObjects1.length = 0;
gdjs.MerliCode.GDpastoplanoObjects2.length = 0;
gdjs.MerliCode.GDArbolObjects1.length = 0;
gdjs.MerliCode.GDArbolObjects2.length = 0;
gdjs.MerliCode.GDtextframeObjects1.length = 0;
gdjs.MerliCode.GDtextframeObjects2.length = 0;
gdjs.MerliCode.GDarrowObjects1.length = 0;
gdjs.MerliCode.GDarrowObjects2.length = 0;
gdjs.MerliCode.GDLineLightJoystickObjects1.length = 0;
gdjs.MerliCode.GDLineLightJoystickObjects2.length = 0;
gdjs.MerliCode.GDgeneral_9595wall2Objects1.length = 0;
gdjs.MerliCode.GDgeneral_9595wall2Objects2.length = 0;

gdjs.MerliCode.eventsList0(runtimeScene);
gdjs.MerliCode.GDCloudsObjects1.length = 0;
gdjs.MerliCode.GDCloudsObjects2.length = 0;
gdjs.MerliCode.GDFireObjects1.length = 0;
gdjs.MerliCode.GDFireObjects2.length = 0;
gdjs.MerliCode.GDPastoObjects1.length = 0;
gdjs.MerliCode.GDPastoObjects2.length = 0;
gdjs.MerliCode.GDPiedraObjects1.length = 0;
gdjs.MerliCode.GDPiedraObjects2.length = 0;
gdjs.MerliCode.GDArbustoObjects1.length = 0;
gdjs.MerliCode.GDArbustoObjects2.length = 0;
gdjs.MerliCode.GDlagoObjects1.length = 0;
gdjs.MerliCode.GDlagoObjects2.length = 0;
gdjs.MerliCode.GDmuseumObjects1.length = 0;
gdjs.MerliCode.GDmuseumObjects2.length = 0;
gdjs.MerliCode.GDpisoObjects1.length = 0;
gdjs.MerliCode.GDpisoObjects2.length = 0;
gdjs.MerliCode.GDPiso_95952Objects1.length = 0;
gdjs.MerliCode.GDPiso_95952Objects2.length = 0;
gdjs.MerliCode.GDlibroObjects1.length = 0;
gdjs.MerliCode.GDlibroObjects2.length = 0;
gdjs.MerliCode.GDInicioObjects1.length = 0;
gdjs.MerliCode.GDInicioObjects2.length = 0;
gdjs.MerliCode.GDmoreinfoObjects1.length = 0;
gdjs.MerliCode.GDmoreinfoObjects2.length = 0;
gdjs.MerliCode.GDInicio2Objects1.length = 0;
gdjs.MerliCode.GDInicio2Objects2.length = 0;
gdjs.MerliCode.GDdoorObjects1.length = 0;
gdjs.MerliCode.GDdoorObjects2.length = 0;
gdjs.MerliCode.GDMerObjects1.length = 0;
gdjs.MerliCode.GDMerObjects2.length = 0;
gdjs.MerliCode.GDmuseum_9595floorObjects1.length = 0;
gdjs.MerliCode.GDmuseum_9595floorObjects2.length = 0;
gdjs.MerliCode.GDmuseum_9595floor2Objects1.length = 0;
gdjs.MerliCode.GDmuseum_9595floor2Objects2.length = 0;
gdjs.MerliCode.GDdoorObjects1.length = 0;
gdjs.MerliCode.GDdoorObjects2.length = 0;
gdjs.MerliCode.GDmuseum_9595floor3Objects1.length = 0;
gdjs.MerliCode.GDmuseum_9595floor3Objects2.length = 0;
gdjs.MerliCode.GDgeneral_9595wallObjects1.length = 0;
gdjs.MerliCode.GDgeneral_9595wallObjects2.length = 0;
gdjs.MerliCode.GDpastoplanoObjects1.length = 0;
gdjs.MerliCode.GDpastoplanoObjects2.length = 0;
gdjs.MerliCode.GDArbolObjects1.length = 0;
gdjs.MerliCode.GDArbolObjects2.length = 0;
gdjs.MerliCode.GDtextframeObjects1.length = 0;
gdjs.MerliCode.GDtextframeObjects2.length = 0;
gdjs.MerliCode.GDarrowObjects1.length = 0;
gdjs.MerliCode.GDarrowObjects2.length = 0;
gdjs.MerliCode.GDLineLightJoystickObjects1.length = 0;
gdjs.MerliCode.GDLineLightJoystickObjects2.length = 0;
gdjs.MerliCode.GDgeneral_9595wall2Objects1.length = 0;
gdjs.MerliCode.GDgeneral_9595wall2Objects2.length = 0;


return;

}

gdjs['MerliCode'] = gdjs.MerliCode;
