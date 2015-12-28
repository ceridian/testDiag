jsPlumb.bind("ready", function() {
    var defaultObj = {
        isSource:true,
        isTarget:true,
        connector: ["Straight"],
        endpoint:"Dot",
        overlays:[ ["Arrow" , { width:20, length:20, location:1 }] ],
        paintStyle:{ strokeStyle:"black", lineWidth:3 }
    };

    targets.forEach(function(target, i){
        $('#diagramContainer').append('<div id="'+target.abr+'" class="item" style="margin-top:'+i*100+'px;">'+target.name+'</div>');
        jsPlumb.addEndpoint(target.abr, {
            anchor: ["Right"],
        }, defaultObj);
        jsPlumb.draggable(target.abr);
    });

    refits.forEach(function(refit, i){
        $('#diagramContainer').append('<div id="'+refit.abr+'" class="item" style="margin-top:'+i*100+'px;margin-left:200px">'+refit.name+'</div>');
        jsPlumb.addEndpoint(refit.abr, {
            anchor: ["Left","Right"],
        }, defaultObj);
        jsPlumb.draggable(refit.abr);
    });

    sources.forEach(function(source, i){
        $('#diagramContainer').append('<div id="'+source.abr+'" class="item" style="margin-top:'+i*100+'px;margin-left:300px">'+source.name+'</div>');
        jsPlumb.addEndpoint(source.abr, {
            anchor: ["Left"],
        }, defaultObj);
        jsPlumb.draggable(source.abr);
    });
});

var targets = [
    {name: "Shipstation", abr: "targShip", description: ""},
    {name: "WooCommerce", abr: "targWoo", description: ""},
    {name: "Peach Tree", abr: "targTree", description: "Peach Tree csv files"}
];

var forks = [
    {name: "Shipstation Export", abr: "shipExport", description: "exporting orders from shipstation"}
];

var sources = [
    {name: "Shipstation", abr: "sourceShip", description: ""},
    {name: "WooCommerce", abr: "sourceWoo", description: ""}
];

var refits = [
    {name: "Split Orders", abr: "splitOrders", description: "split line items of orders into separate orders"},
    {name: "Convert to CSV", abr: "toCSV", description: "converts orders to csv file"}
];