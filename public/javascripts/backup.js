jsPlumb.draggable("item_left");
jsPlumb.draggable("item_right");
var defaultCon = {
    connector: ["Straight"],
    anchor: ["Left", "Right"],
    endpoint:"Dot",
    overlays:[ ["Arrow" , { width:20, length:20, location:1 }] ],
    paintStyle:{ strokeStyle:"black", lineWidth:3 }
}

var defaultObj = {
    isSource:true,
    isTarget:true,
    connector: ["Straight"]
};

/*jsPlumb.connect({
 source:"item_left",
 target:"item_right",
 }, defaultCon);*/

jsPlumb.addEndpoint("item_left", {
    /* Endpoint-Position */
    anchor:"Right",

    /* Endpoint-Style */
    endpoint:"Rectangle",
    paintStyle:{ fillStyle:"white", outlineColor:"blue", outlineWidth:1 },
    hoverPaintStyle:{ fillStyle:"lightblue" },

    /* Connector(Line)-Style */
    connectorStyle:{ strokeStyle:"blue", lineWidth:1 },
    connectorHoverStyle:{ lineWidth:2 }
},defaultObj);
jsPlumb.addEndpoint("item_right", {
    /* Endpoint-Position */
    anchor:"Left",

    /* Endpoint-Style */
    endpoint:"Rectangle",
    paintStyle:{ fillStyle:"white", outlineColor:"blue", outlineWidth:1 },
    hoverPaintStyle:{ fillStyle:"lightblue" },

    /* Connector(Line)-Style */
    connectorStyle:{ strokeStyle:"blue", lineWidth:1 },
    connectorHoverStyle:{ lineWidth:2 }
},defaultObj);/**
 * Created by station on 12/28/2015.
 */
