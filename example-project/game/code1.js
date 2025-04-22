gdjs.mainCode = {};
gdjs.mainCode.localVariables = [];
gdjs.mainCode.GDbackgroundObjects1= [];
gdjs.mainCode.GDbackgroundObjects2= [];
gdjs.mainCode.GDplayerObjects1= [];
gdjs.mainCode.GDplayerObjects2= [];
gdjs.mainCode.GDballObjects1= [];
gdjs.mainCode.GDballObjects2= [];
gdjs.mainCode.GDStartTextObjects1= [];
gdjs.mainCode.GDStartTextObjects2= [];
gdjs.mainCode.GDbarrierObjects1= [];
gdjs.mainCode.GDbarrierObjects2= [];
gdjs.mainCode.GDsinglebrickObjects1= [];
gdjs.mainCode.GDsinglebrickObjects2= [];


gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.mainCode.GDballObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.mainCode.GDbarrierObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.mainCode.GDbarrierObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.mainCode.GDballObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mainCode.GDplayerObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects = Hashtable.newFrom({"ball": gdjs.mainCode.GDballObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDsinglebrickObjects1Objects = Hashtable.newFrom({"singlebrick": gdjs.mainCode.GDsinglebrickObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDsinglebrickObjects1Objects = Hashtable.newFrom({"singlebrick": gdjs.mainCode.GDsinglebrickObjects1});
gdjs.mainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].addPolarForce(0, -(300), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayerObjects1[i].addPolarForce(0, 300, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.mainCode.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDStartTextObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDStartTextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDStartTextObjects1[k] = gdjs.mainCode.GDStartTextObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDStartTextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].setPosition((( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointX("center")),(( gdjs.mainCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayerObjects1[0].getPointY("center")) - 25);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.mainCode.GDStartTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
{for(var i = 0, len = gdjs.mainCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDStartTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].addPolarForce(gdjs.randomInRange(-(145), -(45)), 350, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("barrier"), gdjs.mainCode.GDbarrierObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbarrierObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDballObjects1 */
/* Reuse gdjs.mainCode.GDbarrierObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDbarrierObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.mainCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDballObjects1 */
/* Reuse gdjs.mainCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDplayerObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ball"), gdjs.mainCode.GDballObjects1);
gdjs.copyArray(runtimeScene.getObjects("singlebrick"), gdjs.mainCode.GDsinglebrickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDballObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDsinglebrickObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDballObjects1 */
/* Reuse gdjs.mainCode.GDsinglebrickObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDballObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDballObjects1[i].getBehavior("Bounce").BounceOff(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDsinglebrickObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.mainCode.GDsinglebrickObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDsinglebrickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDbackgroundObjects1.length = 0;
gdjs.mainCode.GDbackgroundObjects2.length = 0;
gdjs.mainCode.GDplayerObjects1.length = 0;
gdjs.mainCode.GDplayerObjects2.length = 0;
gdjs.mainCode.GDballObjects1.length = 0;
gdjs.mainCode.GDballObjects2.length = 0;
gdjs.mainCode.GDStartTextObjects1.length = 0;
gdjs.mainCode.GDStartTextObjects2.length = 0;
gdjs.mainCode.GDbarrierObjects1.length = 0;
gdjs.mainCode.GDbarrierObjects2.length = 0;
gdjs.mainCode.GDsinglebrickObjects1.length = 0;
gdjs.mainCode.GDsinglebrickObjects2.length = 0;

gdjs.mainCode.eventsList0(runtimeScene);
gdjs.mainCode.GDbackgroundObjects1.length = 0;
gdjs.mainCode.GDbackgroundObjects2.length = 0;
gdjs.mainCode.GDplayerObjects1.length = 0;
gdjs.mainCode.GDplayerObjects2.length = 0;
gdjs.mainCode.GDballObjects1.length = 0;
gdjs.mainCode.GDballObjects2.length = 0;
gdjs.mainCode.GDStartTextObjects1.length = 0;
gdjs.mainCode.GDStartTextObjects2.length = 0;
gdjs.mainCode.GDbarrierObjects1.length = 0;
gdjs.mainCode.GDbarrierObjects2.length = 0;
gdjs.mainCode.GDsinglebrickObjects1.length = 0;
gdjs.mainCode.GDsinglebrickObjects2.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
